import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export const render = (url) => {
	const context = {};
	const appHtml = renderToString(
		<StaticRouter location={url} context={context}>
			<App />
		</StaticRouter>
	);
	return { html: appHtml };
};
