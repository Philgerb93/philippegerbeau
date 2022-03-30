<template>
  <header class="header" id="header">
    <video width="1920" height="1080" autoplay muted loop playsinline>
      <source src="@/assets/bg.mp4" type="video/mp4" />
    </video>
    <div class="wrapper">
      <h1>Philippe Gerbeau</h1>
      <p class="title">Full-stack web developer</p>
      <div class="buttons">
        <button @click="scrollTo('#services')">My services</button>
        <button @click="scrollTo('#hire-me')" class="outline">Hire me</button>
      </div>
      <div class="social">
        <a
          href="https://www.upwork.com/freelancers/~01730f3ec1964535d0"
          aria-label="Upwork"
        >
          <UpworkLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/philippe-gerbeau-b8b57b141"
          aria-label="LinkedIn"
        >
          <LinkedInLogo />
        </a>
        <a href="https://github.com/philgerb93" aria-label="Github">
          <GithubLogo />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import UpworkLogo from "@/assets/icons/upwork.svg";
import LinkedInLogo from "@/assets/icons/linkedin.svg";
import GithubLogo from "@/assets/icons/githublink.svg";

export default {
  components: {
    UpworkLogo,
    LinkedInLogo,
    GithubLogo,
  },
  mounted() {
    this.headerScroll();
    window.addEventListener("scroll", this.headerScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.headerScroll);
  },

  methods: {
    headerScroll() {
      var header = document.querySelector(".header");
      var windowTop = window.pageYOffset || document.documentElement.scrollTop;

      if (windowTop >= header.offsetHeight) {
        header.style.opacity = 0;
      } else {
        header.style.opacity = 1;

        var opacity = 1 - windowTop / header.offsetHeight;
        document
          .querySelectorAll(".header .wrapper")
          .forEach(function (element) {
            element.style.opacity = opacity;
          });
      }
    },
    scrollTo(anchor) {
      var navHeight = Math.floor(
        document.querySelector(".nav-wrapper").clientHeight
      );
      var destination = document.querySelector(anchor);
      let count = destination.getBoundingClientRect().top - navHeight;

      window.scrollBy({ top: count, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
.header {
  background-color: $color-dark;
  color: $color-light;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: height 0.2s;
  width: 100%;
  display: flex;
  align-items: center;

  @include height-above(800px) {
    height: $header-height;
  }

  video {
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
    animation: 0.4s videoAppear forwards;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    align-items: center;

    @include width-above(800px) {
      margin: 0;
      margin-left: 14vw;
      text-align: start;
      align-items: flex-start;
    }

    .title {
      font-size: 3rem;
      opacity: 0.8;
    }

    .buttons {
      margin-top: 16px;

      button {
        background-color: $color-light;
        border: none;
        margin: 8px;
        width: 150px;
        height: 50px;
        font-weight: bold;
        text-transform: uppercase;
        color: $color-dark;
        transition: 0.2s all;

        &:hover {
          background-color: lighten($color: $color-brand, $amount: 10%);
        }

        &.outline {
          border: 1px solid $color-light;
          background-color: transparent;
          color: $color-light;

          &:hover {
            color: lighten($color: $color-brand, $amount: 10%);
            border-color: lighten($color: $color-brand, $amount: 10%);
          }
        }
      }
    }

    .social {
      border-top: 1px solid rgba($color-light, 0.5);
      width: fit-content;
      padding-top: 16px;
      margin-top: 32px;
      display: flex;

      @for $i from 1 through 10 {
        a:nth-child(#{$i}n) {
          animation-delay: #{$i * 0.2}s;
        }
      }

      a {
        color: $color-light;
        font-size: 3rem;
        margin: 0 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        transition: 0.2s all;
        animation: appear 0.4s forwards;
        opacity: 0;

        &:hover {
          color: lighten($color: $color-brand, $amount: 10%);
        }
      }
    }
  }
}
</style>
