<template>
	<div class="menu-bar">
		<RouterLink to="/" class="link">
			<div class="logo-container">
				<img class="logo" src="/assets/menu-bar/menu-bar-logo.png" alt="" />
			</div>
		</RouterLink>
		<RouterLink to="/foglalkozasok" class="link">Foglalkozások</RouterLink>
		<RouterLink to="/hazirend" class="link">Házirend</RouterLink>
		<RouterLink to="/kapcsolat" class="link">Kapcsolat</RouterLink>
		<RouterLink to="/admin" class="link">Admin</RouterLink>
	</div>
</template>

<script setup></script>

<style>
.menu-bar {
	align-items: center;
	backdrop-filter: blur(8px);
	background-color: #8d8c8c7b;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	padding: 1em 1em 0.5em 1em;
}

.logo-container {
	max-width: 70px;
	width: 4em;
}

.logo {
	height: auto;
	width: 100%;
}

.link {
	align-items: center;
	border-bottom: 1px solid #c7c8cc;
	color: #aeaeaf;
	display: flex;
	justify-content: center;
	padding: 0.5em 0 0.5em 0;
	text-decoration: none;
	transition: 0.4s ease;
	width: 100%;
}

.link:not(:first-child):hover ,
.link:not(:first-child):focus{
	color: #ffffff;
}

.link:first-child {
	border: none;
	margin-bottom: auto;
	max-width: 70px;
	padding: 0;
	width: 4em;
}

.link:nth-child(2) {
	border-top: 1px solid #c7c8cc;
	justify-content: flex-end;
}

.link:nth-child(2)::after {
	content: '›';
	margin-left: 3em;
}

.link:last-child {
	border: none;
	border-top: 1px solid #c7c8cc;
	margin-top: auto;
	padding-bottom: 0;
}
</style>
