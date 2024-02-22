import LanguageSelector from '../language-selector/LanguageSelector';
import './Header.css';

const Header = () => (
	<div className="header">
		<h1>Mosolygó mancsok</h1>
		<LanguageSelector />
	</div>
);

export default Header;
