import './AboutUs.css';

const AboutUs = () => {
	return (
		<div className="aboutUsContainer">
			<div className="upperDividerContainer">
				<img className="aboutUsUpperDivider" src="/assets/about-us/about-us-upper-divider.png" alt="" />
			</div>
			<div className="imageContainer">
				<img className="aboutUsImg" src="/assets/about-us/about-us-img.png" alt="" />
			</div>
			<div className="aboutUsText">
				<h2 className="aboutUsTitle">Bemutatkozás</h2>
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
			<div className="lowerDividerContainer">
				<img className="aboutUsLowerDivider" src="../assets/about-us/about-us-lower-divider.png" alt="" />
			</div>
		</div>
	);
};

export default AboutUs;
