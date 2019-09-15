<template>
    <footer id="website-footer" class="footer">
        <div class="footer-wrapper">
            <h2>Me contacter</h2>
            <p>Courrier électronique</p>
            <a href="mailto:philippe.gerbeau.93@gmail.com" class="email">philippe<span>.</span>gerbeau<span>.</span>93@gmail<span>.</span>com</a>
            <br>
            <a href="https://github.com/philgerb93"><span class="network"><fa-icon :icon="['fab', 'github']"/> GitHub</span></a>
            <a href="https://www.linkedin.com/in/philippe-gerbeau-b8b57b141"><span class="network"><fa-icon :icon="['fab', 'linkedin']"/> LinkedIn</span></a>
        </div>
    </footer>
</template>

<script>
export default {
    mounted: function() {
        this.footerScroll();
        window.addEventListener('scroll', this.footerScroll);

        this.sendHeight();
        window.addEventListener('resize', this.sendHeight);
    },

    destroyed: function() {
        window.removeEventListener('scroll', this.footerScroll);
        window.removeEventListener('resize', this.sendHeight);
    },

    methods: {
        footerScroll() {
            var header = document.querySelector('.header');
            var footer = document.querySelector('.footer');
            var windowTop = window.pageYOffset || document.documentElement.scrollTop;

            if (windowTop >= header.offsetHeight) {
                footer.style.display = 'block';
                this.$emit('SendHeight', this.$el.offsetHeight);    
            } else {
                footer.style.display = 'none';
            }
        },
        sendHeight() {
            this.$emit('SendHeight', this.$el.offsetHeight);
        }
    }
}
</script>

<style lang="scss">
    .footer {
        color: $color-grey-light;
        bottom: 0;
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 1;

        & h2:before,
        & h2:after {
            background-color: $color-grey-light;
        }

        & a {
           color: $color-grey-light;
           
           &:hover {
               color: #FFF;
           }
        }

        & .network {
            color: $color-footer;
            font-size: 1.6rem;
            background-color: $color-grey;
            padding: .4em .6em;
            margin: 0 .4em;
            border-radius: 2em;
            transition: all .2s;
            position: relative;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,.2);
                background-color: #FFF;
            }

            &:active {
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0,0,0,.2);
            }
        }

        &-wrapper {
            font-size: 1.6rem;
            margin: auto;
            padding-bottom: 2em;
            position: relative;
            text-align: center;
            width: 95%;
        }

        &-sub {
            border-top: 1px solid $color-grey;
            line-height: 4rem;
            text-align: center;
            vertical-align: middle;
        }
        
        & i {
            margin: 0 1rem;
        }
    }

    a.email {
        display: inline-block;
        font-size: 1.4rem;
        letter-spacing: .08em;
        margin-bottom: 2em;
    }

    a.email span {
        font-size: 2.2rem;
    }

    a.email:hover {
        transform: scale(1.05);
    }
</style>
