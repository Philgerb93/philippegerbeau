<template>
  <header class="header">
    <video autoplay muted loop>
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <div class="wrapper">
      <h1>Philippe Gerbeau</h1>
      <p class="title">Full-stack web developer</p>
      <div class="buttons">
        <button>My services</button>
        <button class="outline">Hire me</button>
      </div>
      <div class="social">
        <a href="https://github.com/philgerb93">
          <!-- <UpworkLogo /> -->
        </a>
        <a href="https://www.linkedin.com/in/philippe-gerbeau-b8b57b141"> </a>
        <a href="https://github.com/philgerb93"> </a>
      </div>
    </div>
  </header>
</template>

<script>
import UpworkLogo from "@/assets/icons/github.svg";

export default {
  components: {
    // UpworkLogo,
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
  },
};
</script>

<style lang="scss">
.header {
  background-color: $color-dark;
  color: $color-text-white;
  height: calc(100vh - #{$navbar-height});
  left: 0;
  position: fixed;
  top: 0;
  transition: height 0.2s;
  width: 100%;
  margin-top: $navbar-height;
  display: flex;
  align-items: center;

  @include height-above(800px) {
    height: $header-height;
  }

  video {
    opacity: 0.1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 12rem;

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

        &.outline {
          border: 1px solid $color-light;
          background-color: transparent;
          color: $color-light;
        }
      }
    }

    .social {
      border-top: 1px solid rgba($color-light, 0.5);
      width: fit-content;
      padding-top: 16px;
      margin-top: 32px;
      display: flex;

      img {
        width: 30px;
        height: 30px;
      }

      a {
        color: $color-light;
        font-size: 3rem;
        margin: 0 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;

        svg {
          color: red;
        }
      }
    }

    // .network {
    //   color: $color-footer;
    //   font-size: 1.6rem;
    //   background-color: $color-grey;
    //   padding: 0.4em 0.6em;
    //   margin: 0 0.4em;
    //   border-radius: 2em;
    //   transition: all 0.2s;
    //   position: relative;

    //   &:hover {
    //     transform: translateY(-2px);
    //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    //     background-color: #fff;
    //   }

    //   &:active {
    //     transform: translateY(-1px);
    //     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    //   }
    // }
  }
}
</style>
