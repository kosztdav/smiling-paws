import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MenuBar from './components/menu-bar/MenuBar';
import HomePage from './views/home-page/HomePage';
import TrainingsPage from './views/trainings-page/TrainingsPage';
import PolicyPage from './views/policy-page/PolicyPage';
import ContactPage from './views/contact-page/ContactPage';
import AdminPage from './views/admin-page/AdminPage';
import './App.css';
import './AppMobile.css';

const App = () => (
	<div className="appContainer">
		<Header />
		<MenuBar />
		<div className="content">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/foglalkozasok" element={<TrainingsPage />} />
				<Route path="/hazirend" element={<PolicyPage />} />
				<Route path="/kapcsolat" element={<ContactPage />} />
				<Route path="/admin" element={<AdminPage />} />
			</Routes>
		</div>
	</div>
);

export default App;
