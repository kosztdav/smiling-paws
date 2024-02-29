import fs from 'node:fs/promises';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import compression from 'compression';
import sirv from 'sirv';
import path from 'node:path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import userRoutes from './api/routes/user-routes.js';
import trainingRoutes from './api/routes/training-routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Paths adjusted for the new structure
const clientDistDir = path.resolve(__dirname, '..', 'dist', 'client');
const templateHtmlPath = path.resolve(clientDistDir, 'index.html');
const ssrManifestPath = path.resolve(clientDistDir, '.vite', 'ssr-manifest.json');

// Cached production assets
const templateHtml = isProduction ? await fs.readFile(templateHtmlPath, 'utf-8') : '';
const ssrManifest = isProduction ? await fs.readFile(ssrManifestPath, 'utf-8') : undefined;

const app = express();
app.set('json spaces', 2);

// Connect to MongoDB
connectDB();

let vite;
if (!isProduction) {
	vite = await createViteServer({
		server: { middlewareMode: true },
		appType: 'custom',
		base
	});
	app.use(vite.middlewares);
} else {
	app.use(compression());
	app.use(base, sirv(clientDistDir, { extensions: [] }));
}
// Middleware to parse JSON bodies
app.use(express.json());
// My endpoints
app.use('/api', userRoutes);
app.use('/api', trainingRoutes);

// Serve HTML
app.use('*', async (req, res) => {
	try {
		const url = req.originalUrl.replace(base, '');

		let template;
		let render;
		if (!isProduction) {
			// Always read fresh template in development
			template = await fs.readFile('./index.html', 'utf-8');
			template = await vite.transformIndexHtml(url, template);
			render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
		} else {
			template = templateHtml;
			render = (await import('./dist/server/entry-server.js')).render;
		}

		const rendered = await render(url, ssrManifest);

		const html = template.replace(`<!--app-head-->`, rendered.head ?? '').replace(`<!--app-html-->`, rendered.html ?? '');

		res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
	} catch (e) {
		vite?.ssrFixStacktrace(e);
		console.log(e.stack);
		res.status(500).end(e.stack);
	}
});

// Start http server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
