<template>
<div id="loading-screen" class="loading-screen">
    <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    </div>
</div>
</template>

<style lang="scss">
    .loading-screen {
        background-color: #FFF;
        z-index: 20;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
		height: 100%;
		transition: opacity .15s;
	
		&.fade-out {
			opacity: 0;
		}
	}

    .sk-cube-grid {
    width: 80px;
	height: 80px;
        
        @include media-width(560) {
			width: 100px;
			height: 100px
        }

        @include media-width(1000) {
			width: 120px;
			height: 120px;
		}
		
		@include media-width(1400) {
			width: 140px;
			height: 140px;
		}
		
		@include media-width(1800) {
			width: 160px;
			height: 160px;
        }

        @include absCenter;

        & .sk-cube {
			width: 33%;
			height: 33%;
			background-color: $color-primary;
			float: left;
			-webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
					animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
			}

			&.zoom-out {
				background-color: #FFF;
			}

			& .sk-cube1 {
			-webkit-animation-delay: 0.2s;
					animation-delay: 0.2s; }
			& .sk-cube2 {
			-webkit-animation-delay: 0.3s;
					animation-delay: 0.3s; }
			& .sk-cube3 {
			-webkit-animation-delay: 0.4s;
					animation-delay: 0.4s; }
			& .sk-cube4 {
			-webkit-animation-delay: 0.1s;
					animation-delay: 0.1s; }
			& .sk-cube5 {
			-webkit-animation-delay: 0.2s;
					animation-delay: 0.2s; }
			& .sk-cube6 {
			-webkit-animation-delay: 0.3s;
					animation-delay: 0.3s; }
			& .sk-cube7 {
			-webkit-animation-delay: 0s;
					animation-delay: 0s; }
			& .sk-cube8 {
			-webkit-animation-delay: 0.1s;
					animation-delay: 0.1s; }
			& .sk-cube9 {
			-webkit-animation-delay: 0.2s;
					animation-delay: 0.2s; }
    }
</style>
