import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MenuBar from './components/menu-bar/MenuBar';
import HomePage from './views/home-page/HomePage';
import TrainingsPage from './views/trainings-page/TrainingsPage';
import PolicyPage from './views/policy-page/PolicyPage';
import ContactPage from './views/contact-page/ContactPage';
import './App.css';

const App = () => (
	<Router>
		<div className="appContainer">
			<Header />
			<div className="mainContent">
				<MenuBar />
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/foglalkozasok" element={<TrainingsPage />} />
						<Route path="/hazirend" element={<PolicyPage />} />
						<Route path="/kapcsolat" element={<ContactPage />} />
					</Routes>
				</div>
			</div>
		</div>
	</Router>
);

export default App;
