<template>
	<div class="aboutUsContainer">
		<div class="aboutUsImageContainer">
			<img class="aboutUsImgDesktop" src="/assets/about-us/desktop/about-us-img.png" alt="" />
			<img class="aboutUsImgMobile" src="/assets/about-us/mobile/about-us-img.png" alt="" />
		</div>
		<h2 class="aboutUsTitle">Bemutatkozás</h2>
		<div class="aboutUsText">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et purus et lacus ultrices dapibus. Praesent tincidunt volutpat lectus rutrum
				elementum. Suspendisse cursus pharetra mattis. Mauris hendrerit euismod dolor, vitae.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non luctus diam. Suspendisse id sapien dignissim, efficitur nisl et, porttitor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt volutpat lectus rutrum elementum. Suspendisse cursus pharetra
				mattis. Mauris hendrerit euismod dolor, vitae.
			</p>
		</div>
	</div>
</template>

<style>
.aboutUsContainer {
	background-color: #f2efe5;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 10% 90%;
}

.aboutUsImgDesktop {
	height: auto;
	width: 100%;
}

.aboutUsImgMobile {
	display: none;
}

.aboutUsImageContainer {
	grid-column: 1;
	grid-row: 1/3;
	min-height: 100%;
}

.aboutUsText {
	align-items: flex-start;
	color: #b4b4b8;
	display: flex;
	flex-direction: column;
	gap: 2.5em;
	grid-column: 2;
	grid-row: 2;
	height: 100%;
	justify-content: flex-start;
	margin: 4em 0 4em 4rem;
	width: 24em;
}

.aboutUsText p {
	align-items: center;
	display: flex;
}

.aboutUsTitle {
	align-items: center;
	color: #808083;
	display: flex;
	font-size: 2.5em;
	grid-column: 2;
	grid-row: 1;
	justify-content: flex-start;
	margin: 2em 0 0 4rem;
}
@media (max-width: 769px) {
	.aboutUsImgDesktop {
		display: none;
	}

	.aboutUsImgMobile {
		display: block;
		height: auto;
		width: 100%;
	}

	.aboutUsContainer {
		display: flex;
		flex-direction: column;
	}

	.aboutUsTitle {
		align-items: center;
		justify-content: center;
		margin: 0;
	}

	.aboutUsText {
		margin: 4em auto 4em auto;
	}

	.aboutUsText p {
		text-align: center;
	}
}
</style>
