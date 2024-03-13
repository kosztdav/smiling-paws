import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => (
	<div className="menuBar">
		<Link to="/" className="link">
			<div className="logoContainer">
				<img className="logo" src="assets/menu-bar/menu-bar-logo.png" alt="" />
			</div>
		</Link>
		<Link to="/foglalkozasok" className="link">
			Foglalkozások
		</Link>
		<Link to="/hazirend" className="link">
			Házirend
		</Link>
		<Link to="/kapcsolat" className="link">
			Kapcsolat
		</Link>
		<Link to="/admin" className="link">
			Admin
		</Link>
	</div>
);

export default MenuBar;
