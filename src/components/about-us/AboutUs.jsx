import './AboutUs.css';
import './AboutUsMobile.css';

const AboutUs = () => {
	return (
		<div className="aboutUsContainer">
			<div className="aboutUsImageContainer">
				<img className="aboutUsImgDesktop" src="/assets/about-us/desktop/about-us-img.png" alt="" />
				<img className="aboutUsImgMobile" src="/assets/about-us/mobile/about-us-img.png" alt="" />
			</div>
			<h2 className="aboutUsTitle">Bemutatkozás</h2>
			<div className="aboutUsText">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et purus et lacus ultrices dapibus. Praesent tincidunt volutpat lectus rutrum
					elementum. Suspendisse cursus pharetra mattis. Mauris hendrerit euismod dolor, vitae.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non luctus diam. Suspendisse id sapien dignissim, efficitur nisl et,
					porttitor.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt volutpat lectus rutrum elementum. Suspendisse cursus pharetra
					mattis. Mauris hendrerit euismod dolor, vitae.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
