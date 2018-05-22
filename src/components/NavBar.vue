<template>
    <nav id="nav" class="nav">
        <div class="nav-wrapper">
            <a href="#start-of-page" id="nav-name" class="mobile">Philippe Gerbeau</a>

            <span class="nav-navicon">&#9776;</span>

            <ul class="nav-items">
                <li><a href="#language-header">Langages</a></li>
                <li><a href="#project-header">Projets</a></li>
                <li><a href="#end-of-page">Contact</a></li>
            </ul>
        </div>

        <ul class="nav-mobile-items">
            <li><a href="#language-header" class="mobile">Langages</a></li>
            <li><a href="#project-header" class="mobile">Projets</a></li>
            <li><a href="#end-of-page" class="mobile">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        mounted: function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    var navHeight = Math.floor(document.querySelector('.nav-wrapper').clientHeight);

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        block: 'start',
                        behavior: 'smooth'
                    });
                });
            });
        }
    }
</script>


<style lang="scss">
    .nav {
        background-color: $color-primary;
        color: $color-text-white;
        left: 0;
        line-height: 60px;
        position: fixed;
        text-transform: uppercase;
        top: 0;
        width: 100%;
        z-index: 10;

        & a {
            color: $color-text-white;
            font-size: 1.3rem;
            font-weight: bold;
            letter-spacing: .08em;
            position: relative;

            &.nav-name {
                font-size: 1.6rem;
                letter-spacing: .2em;
            }

            &:before {
                background-color: $color-text-white;
                bottom: -2px;
                content: '';
                height: 1px;
                left: 0;
                position: absolute;
                transform: scaleX(0);
                transition: all .2s ease-in-out 0s;
                visibility: hidden;
                width: 100%;
            }

            &:hover:before {
                transform: scaleX(1);
                visibility: visible;
            }
        }

        &-wrapper {
            margin: auto;
            max-width: 90%;
        }
        
        &-items {
            display: none;
            float: right;

            @include media-width(820) {
                display: inline-block;
            }

            & a {
                margin-left: 2.6em;
            }
            
            & li {
                float: left;
                list-style-type: none;
            }
        }
        
        &-navicon {
            cursor: pointer;
            float: right;
            font-size: 2rem;
            padding: 0 2rem;

            @include media-width(820) {
                display: none;
            }
        }
        
        &-mobile-items {
            border: none;
            margin: auto;
            max-height: 0;
            overflow: hidden;
            text-align: center;
            transition: max-height .15s ease-out;

            &.open {
                max-height: 160px;
                transition: max-height .25s ease-out;
            }
            
            & a {
                margin: 0 2em;
            }
            
            & li {
                line-height: 50px;
                border-top: 1px solid $color-text-white;
            }
        }
    }
</style>
