<template>
    <header id="website-header" class="header">
        <p v-if="singleLetterBG" class="header-bg">P</p>
        <p v-else class="header-bg">PG</p>

        <h1 class="header-text">
            <span class="header-name">Philippe Gerbeau</span>
            <span class="header-profession">Programmeur</span>
            <span>Étudiant à l'UQAM</span>
            <span>Baccalauréat en informatique et génie logiciel</span>
        </h1>
        <a href="#language-header" class="header-arrow"><img src="./../assets/arrow.png" alt="Down arrow"></a>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                singleLetterBG: true
            }
        },

        mounted() {
            this.headerResize();
            window.addEventListener('resize', this.headerResize);

            this.headerScroll();
            window.addEventListener('scroll', this.headerScroll);
        },

        destroyed() {
            window.removeEventListener('scroll', this.headerResize);
            window.removeEventListener('scroll', this.headerScroll);
        },

        methods: {
            headerResize() {
                this.singleLetterBG =  window.innerWidth <= 580;
            },
            headerScroll() {
                var header = document.querySelector('.header');
                var windowTop = window.pageYOffset || document.documentElement.scrollTop;

                if(windowTop >= header.offsetHeight) {
                    header.style.opacity = 0;
                } else {
                    header.style.opacity = 1;

                    var opacity = 1 - (windowTop / header.offsetHeight);
                    document.querySelectorAll('.header-bg, .header-text').forEach(function(element) {
                        element.style.opacity = opacity;
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    .header {
        background-color: $color-primary;
        color: $color-text-white;
        font-weight: bold;
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        transition: height .2s;
        width: 100%;

        @include media-height(800) {
            height: 70vh;
        }

        & p,
        & span {
            user-select: none;
        }

        &-bg {
            color: rgba($color-text-black, .05);
            font-size: 40rem;
            margin: 0;
            min-height: 460px;
            text-transform: uppercase;
            letter-spacing: .5rem;

            @include absCenter;

            @include media-width(1200) {
                font-size: 60rem;
                letter-spacing: .5rem;
                min-height: 620px;
            }
        }
        
        &-text {
            position: relative;
            margin: auto;
            max-width: 80%;
            top: 50%;
            transform: perspective(1px) translateY(-50%);

            @include media-width(500) {
                font-size: 2rem;
            }

            @include media-width(1200) {
                font-size: 2.5rem;
            }
        }
        
        & span {
            display: block;
        }
        
        &-name {
            font-size: 2.7rem;
            letter-spacing: .2em;
            text-transform: uppercase;

            @include media-width(500) {
                font-size: 3.8rem;
            }

            @include media-width(820) {
                font-size: 4.8rem;
            }

            @include media-width(1200) {
                font-size: 6.4rem;
            }
        }
        
        &-profession {
            font-size: 2.2rem;
            margin-bottom: 60px;

            @include media-width(500) {
                font-size: 2.4rem;
            }

            @include media-width(820) {
                font-size: 3.4rem;
            }

            @include media-width(1200) {
                font-size: 5rem;
            }
        }
        
        &-arrow {
            position: absolute;
            top: 90%;
            left: 50%;
            animation: bounce 3s infinite;
            z-index: 2;

            @include media-height(800) {
                display: none;
            }
        }
    }
</style>
