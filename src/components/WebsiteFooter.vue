<template>
    <footer id="website-footer" class="footer">
        <div class="footer-wrapper">
            <h2>Me contacter</h2>
            <p>Courriel personnel</p>
            <a href="mailto:philippe.gerbeau.93@gmail.com" class="email">philippe<span>.</span>gerbeau<span>.</span>93@gmail<span>.</span>com</a>
            <br>
            <p>Courriel universitaire</p>
            <a href="mailto:gerbeau.philippe_antoine@courrier.uqam.ca" class="email">gerbeau<span>.</span>philippe_antoine@courrier<span>.</span>uqam<span>.</span>ca</a>
            <br>
            <a href="https://github.com/philgerb93"><i class="fa fa-github"> GitHub</i></a>
            <a href="https://www.linkedin.com/in/philippe-gerbeau-b8b57b141"><i class="fa fa-linkedin-square"> LinkedIn</i></a>
        </div>

        <div class="footer-sub">
            <p><i class="fa fa-globe"></i> Beloeil, QC, Canada</p>
        </div>
    </footer>
</template>

<script>
export default {
    mounted: function() {
        this.footerScroll();
        window.addEventListener('scroll', this.footerScroll);
    },

    destroyed: function() {
        window.removeEventListener('scroll', this.footerScroll);
    },

    methods: {
        footerScroll() {
            var header = document.querySelector('.header');
            var footer = document.querySelector('.footer');
            var windowTop = window.pageYOffset || document.documentElement.scrollTop;

            footer.style.display = windowTop >= header.offsetHeight ? 'block' : 'none';
        }
    }
}
</script>

<style lang="scss">
    .footer {
        bottom: 0;
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 1;

        & a {
           color: $color-text-black;
           
           &:hover {
               color: $color-accent;
           }
        }

        &-wrapper {
            font-size: 2rem;
            margin: auto;
            padding-bottom: 4em;
            position: relative;
            text-align: center;
            width: 95%;
        }

        &-sub {
            background-color: $color-subfooter;
            border-top: 1px solid $color-grey;
            line-height: 6rem;
            text-align: center;
            vertical-align: middle;
        }
        
        & i {
            margin: 0 1rem;
        }
    }

    a.email {
        display: inline-block;
        font-size: 1.6rem;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }

    a.email span {
        font-size: 2.2rem;
    }
</style>
