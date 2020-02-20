<template>
	<div id="app">
		<nav-bar></nav-bar>
		<website-header></website-header>
		<div id="start-of-page"></div>
		<div class="main-content" v-bind:style="{marginBottom: footerHeight + 'px'}">
			<jobs></jobs>
			<!-- <languages></languages> -->
			<projects
			v-on:OpenImgModal="openImgModal"
			v-on:OpenVidModal="openVidModal"></projects>
		</div>
		<div id="end-of-page"></div>
		<website-footer v-on:SendHeight="getFooterHeight"></website-footer>
        <modal v-if="modalIndex >= 0" v-bind:video="modalVideo"
            v-bind:images="modalImages" v-bind:startingIndex="modalIndex"
            v-on:Close="modalIndex = -1"></modal>
	</div>
</template>

<script>
	import NavBar from './components/NavBar'
	import WebsiteHeader from './components/WebsiteHeader'
	import Jobs from './components/jobs/Jobs'
	import Languages from './components/languages/Languages'
	import Projects from './components/projects/Projects'
	import WebsiteFooter from './components/WebsiteFooter'
	import Modal from './components/Modal'

	export default {
		data: function() {
			return {
				modalIndex: -1,
				modalImages: [],
				modalVideo: null,
				footerHeight: 0
			}
		},

		methods: {
			openImgModal(images, index) {
				this.modalVideo = null;
				this.modalImages = images;
				this.modalIndex = index;
			},
			openVidModal(video) {
				this.modalImages = [];
				this.modalVideo = video;
				this.modalIndex = 0;
			},
			getFooterHeight(height) {
				this.footerHeight = height;
			}
		},

		components: {
			NavBar,
			WebsiteHeader,
			Jobs,
			Languages,
			Projects,
			WebsiteFooter,
			Modal
		}
	}
</script>

<style lang="scss">
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
	}

	body {
		background-color: $color-footer;
		box-sizing: border-box;
		color: $color-text-black;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 1.6rem;
		font-weight: lighter;
	}

	a {
		font-family: 'Montserrat', sans-serif;
		font-weight: normal;
		text-decoration: none;
		transition: .2s ease-in-out;
	}

	hr {
		background-color: $color-grey;
		border: 0;
		height: 1.2px;
		margin: 4rem auto 4rem auto;
		width: 80%;

		@include media-width(1200) {
			margin: 6.5rem auto;
		}
	}

	span {
		user-select: none;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}

	h1 {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.6rem;
		text-align: center;
	}

	h2 {
		font-family: 'Josefin Sans', sans-serif;
		font-size: 2rem;
		font-weight: normal;
		line-height: 4.8em;
		padding-top: .4em;
		text-align: center;
		text-transform: uppercase;

		&:before,
		&:after {
			background-color: $color-text-black;
			content: ' ';
			display: inline-block;
			height: 2px;
			margin: 0 .4em .34em .4em;
			width: .6em;
		}
	}

	h3 {
		font-size: 2.2rem;
		line-height: 2.4em;
		margin: 0;
		text-align: left;
		margin-bottom: .8em;
		border-bottom: 1px solid $color-grey;
	}

	h4 {
		font-size: 2.6rem;
		font-weight: lighter;
		letter-spacing: .15em;
		text-transform: uppercase;
		margin: .2em 0;
	}

	h5 {
		font-size: 1.6rem;
		margin: .8em 0;
	}

	.main-content {
		background-color: $color-background;
		box-shadow: 0 0 50px rgba(0,0,0,.2), 0 4px 40px rgba(0,0,0,.1);
		margin-top: 99vh;
		margin-bottom: 24rem;
		overflow: hidden;
		padding-bottom: 6rem;
		position: relative;
		z-index: 2;

		@include media-width(560) {
			margin-bottom: 50rem;
		}

		@include media-width(1200) {
			margin-bottom: 54rem;
		}

		@include media-height(800) {
			margin-top: 69vh;
		}
	}

	#start-of-page {
		height: 1vh;
	}
</style>
