import LanguageSelector from '../language-selector/LanguageSelector';
import './Header.css';

const Header = () => (
	<div className="header">

		<h1>Mosolygó mancsok	 medoxid</h1>

		<img className="languageChooser" src="src\Assets\tilt 1.png" alt="Placeholder Image" />
		<h1>Mosolygó<br/> mancsok</h1>
		<img className='hero' src="src\Assets\banner1.png" alt="Placeholder Image" />
		<p className='hero-text'>Fedezd fel foglalkozásainkat és<br/> csatlakozz valemelyikhez!</p>
		<a className='heroBookmark'><img src='src\Assets\nyil.svg' alt=""/>Felzedezés</a>

		<LanguageSelector />
		<img className="wawes" src="src\Assets\wavesOpacity 1.png" alt="Placeholder Image" />
		
	</div>
);

export default Header;
