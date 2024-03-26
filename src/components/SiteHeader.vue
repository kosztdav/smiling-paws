<template>
	<div class="header">
		<img class="title" src="/public/assets/site-header/HeroTitle.png" alt="Placeholder Image" />
		<div class="hcontent">
			<h1 class="titleText">
				Mosolygó
				<br />
				mancsok
			</h1>

			<div class="hero-text">
				Fedezd fel foglalkozásainkat és
				<br />
				csatlakozz valemelyikhez!
			</div>
			<a class="heroBookmark">
				<img src="/public/assets/site-header/nyil.svg" alt="" />
				Felzedezés
			</a>
		</div>

		<LanguageSelector />
		<img class="wawes" src="/public/assets/site-header/HeroWawe.png" alt="Placeholder Image" />
	</div>
</template>

<script setup>
import LanguageSelector from './LanguageSelector.vue';
</script>

<style>
.header {
	background-image: url('/public/assets/site-header/HeroBanner.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 102.5vh;
	position: relative;
	width: 100vw;
	z-index: 1;
}
.hero-text {
	color: white;
}
.heroBookmark {
	align-items: center;
	background-color: #f7cf02;
	border-radius: 60px;
	color: black;
	cursor: pointer;
	display: flex;
	font-size: 1;
	gap: 15%;
	height: 49px;
	padding: 5px 80px 3px 40px;
	width: max-content;
}
.heroBookmark:hover {
	background-color: rgb(255, 255, 255);
	color: #f7cf02;
}
.hcontent {
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
	left: 20%;
	position: absolute;
	top: 25%;
}
.p-header {
	align-items: center;
	background-color: #f0f0f0;
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
}
.selector {
	height: 1vw;
	left: 95vw;
	position: absolute;
	top: 2vw;
	width: 3vw;
}
.title {
	position: absolute;
	width: 100vw;
}
.title img {
	height: 61px;
	width: 10px;
}
.titleText {
	color: white;
	font-size: 4em;
	line-height: 1.2;
}
.wawes {
	bottom: 0px;
	left: 0;
	position: absolute;
	width: 100vw;
	z-index: 2;
}
@media (max-width: 767px) {
	.hcontent {
		left: 10%;
		top: 40%;
	}
}

</style>
