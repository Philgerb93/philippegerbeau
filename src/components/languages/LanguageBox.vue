<template>
	<div class="language-box" v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave">
		<h4>{{name}}</h4>
		<div class="language-box-progress-bg">
			<div class="language-box-progress"></div>
		</div>
		<p>{{progressStatus}}</p>
	</div>
</template>

<script>
	export default {
		props: ['name', 'progress'],

		computed: {
			progressStatus: function() {
				return ['Débutant', 'Familier', 'Compétent', 'Avancé', 'Maîtrise'][this.progress - 1];	
			}
		},

		mounted() {
			this.languageBoxScroll();
			window.addEventListener('scroll', this.languageBoxScroll);
		},

		destroyed() {
			window.removeEventListener('scroll', this.languageBoxScroll);
		},

		methods: {
			languageBoxScroll: function() {
				var pb = this.$el.querySelector('.language-box-progress');
				var progress = this.progress;

				if (!pb.classList.contains('filled') && this.elemInViewport(pb)) {
					pb.classList.add('filled');
					pb.style.width = progress * 20 + '%';
				}			
			},
			elemInViewport(element) {
				var navBarHeight = document.querySelector('.nav').clientHeight;
				var topOfElement = element.getBoundingClientRect().top;
				var bottomOfElement = topOfElement + element.clientHeight;

				return topOfElement + element.clientHeight / 2 > navBarHeight
				&& bottomOfElement - element.clientHeight / 2 < window.innerHeight
			},
			mouseOver() {
				var pb = this.$el.querySelector('.language-box-progress');
				pb.classList.add('lighter');
			},
			mouseLeave() {
				var pb = this.$el.querySelector('.language-box-progress');
				pb.classList.remove('lighter');
			}
		}  
	}
</script>

<style lang="scss">
	.language-box {
		background-color: $color-text-white;
		border: 1px solid $color-grey-light;
		box-shadow: 0 5px 10px rgba(0,0,0,.03);
		margin: 2% 1%;
		min-width: 160px;
		padding-bottom: 3rem;
		text-align: center;
		transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
		width: 98%;
		
		@include media-width(560) {
			float: left;
			margin: 1%;
			width: 47.7%;
		}

		@include media-width(1200) {
			padding: 1.6rem 0 4rem 0;
			width: 31.1%;
		}

		&:hover {
			transform: translateY(-6px);
			box-shadow: 0 10px 20px rgba(0,0,0,.03);
		}
		
		&-progress-bg {
			border: 1px solid $color-grey;
			border-radius: 4px;
			margin: .8em auto;
			width: 80%;
		}
		
		&-progress {
			background-color: $color-primary;
			border-radius: 4px;
			height: 10px;
			margin-right: auto;
			padding: .01em;
			transition: background-color .3s;
			width: 0;
			
			&.filled {
				animation: progression 1.5s forwards;
			}
			
			&.lighter {
				background-color: $color-primary-light;
			}
		}

		& p {
			color: $color-text-hint;
			font-size: 1.6rem;
		}
	}
</style>
