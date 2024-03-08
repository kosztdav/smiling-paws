import LanguageSelector from '../language-selector/LanguageSelector';
import './Header.css';

const Header = () => (
	<div className="header">
		<img className="title" src="public\Assets\HeroTitle.png" alt="Placeholder Image" />
		<h1>
			Mosolygó
			<br /> mancsok
		</h1>
		<img className="hero" src="public\Assets\HeroBanner.png" alt="Placeholder Image" />
		<p className="hero-text">
			Fedezd fel foglalkozásainkat és
			<br /> csatlakozz valemelyikhez!
		</p>
		<a className="heroBookmark">
			<img src="public\Assets\nyil.svg" alt="" />
			Felzedezés
		</a>

		<LanguageSelector />
		<img className="wawes" src="/public\Assets\HeroWawe.png" alt="Placeholder Image" />
	</div>
);

export default Header;
