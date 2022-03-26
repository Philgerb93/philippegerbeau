<template>
  <nav id="nav" class="nav" v-bind:class="{ hidden: !showBar }">
    <div class="nav-wrapper">
      <a href="#start-of-page" class="nav-name">Philippe Gerbeau</a>

      <label class="nav-btn" v-on:click="togglePopup"
        ><span class="nav-icon" v-bind:class="{ open: showPopup }"></span
      ></label>

      <ul class="nav-items">
        <li><a class="nav-link" href="#jobs-header">Expérience</a></li>
        <!-- <li><a class="nav-link" href="#languages-header">Connaissances</a></li> -->
        <li><a class="nav-link" href="#projects-header">Projets</a></li>
        <li><a class="nav-link" href="#end-of-page">Contact</a></li>
      </ul>
    </div>

    <div class="nav-popup-bg" v-bind:class="{ open: showPopup }"></div>
    <nav class="nav-popup" v-bind:class="{ open: showPopup }">
      <ul class="nav-popup-list">
        <li class="nav-popup-item">
          <a
            href="#start-of-page"
            class="nav-popup-link"
            v-on:click="togglePopup"
            >Présentation</a
          >
        </li>
        <li class="nav-popup-item">
          <a href="#jobs-header" class="nav-popup-link" v-on:click="togglePopup"
            >Expérience</a
          >
        </li>
        <!-- <li class="nav-popup-item"><a href="#languages-header" class="nav-popup-link" v-on:click="togglePopup">Connaissances</a></li> -->
        <li class="nav-popup-item">
          <a
            href="#projects-header"
            class="nav-popup-link"
            v-on:click="togglePopup"
            >Projets</a
          >
        </li>
        <li class="nav-popup-item">
          <a href="#end-of-page" class="nav-popup-link" v-on:click="togglePopup"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </nav>
</template>
        

<script>
export default {
  data() {
    return {
      showBar: false,
      showPopup: false,
    };
  },

  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var navHeight = Math.floor(
          document.querySelector(".nav-wrapper").clientHeight
        );
        var destination = document.querySelector(this.getAttribute("href"));
        let count = destination.getBoundingClientRect().top - navHeight;

        window.scrollBy({ top: count, left: 0, behavior: "smooth" });
      });
    });

    this.navScroll();
    window.addEventListener("scroll", this.navScroll);
  },

  methods: {
    navScroll() {
      var mainContent = document.querySelector(".main-content");
      var topOfDiv = mainContent.getBoundingClientRect().top;

      this.showBar = topOfDiv <= 100;
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
  },
};
</script>


<style lang="scss">
.nav {
  background-color: $color-dark;
  color: $color-text-white;
  left: 0;
  line-height: $navbar-height;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: 0.2s all;

  &.hidden {
    opacity: 0;
    cursor: default;
  }

  & a {
    color: $color-text-white;
  }

  &-name {
    font-size: 1.4rem;
    letter-spacing: 0.2em;
    font-weight: bold;
  }

  &-link {
    letter-spacing: 0.08em;
    position: relative;
    font-size: 1rem;
    font-weight: bold;

    &:before {
      background-color: $color-text-white;
      bottom: -2px;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out 0s;
      visibility: hidden;
      width: 100%;
    }

    &:hover:before {
      transform: scaleX(1);
      visibility: visible;
    }
  }

  &-bg {
    position: fixed;
    background-color: $color-primary;
    z-index: 11;
    width: 100%;
    height: $navbar-height;
  }

  &-wrapper {
    margin: auto;
    max-width: 90%;
  }

  &-items {
    display: none;
    float: right;
    z-index: 11;

    @include width-above(820) {
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

  &-popup {
    height: 100vh;
    width: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;

    &-bg {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      position: fixed;
      top: -2.5rem;
      right: -2.5rem;
      background-image: radial-gradient(
        $color-primary-light,
        $color-primary-dark
      );
      z-index: 8;
      transition: transform 0.4s;
    }

    &-list {
      list-style: none;

      @include absCenter;
    }

    &-item {
      margin: 1rem;
    }

    &-link {
      display: block;
      font-size: 2rem;
      font-weight: 300;
      padding: 0.4rem rem;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;

      background-image: linear-gradient(
        120deg,
        transparent,
        transparent 0%,
        transparent 50%,
        #fff 50%
      );
      background-size: 220%;
      transition: all 0.4s;

      &:hover {
        background-position: 100%;
        color: $color-primary;
        transform: translateX(1rem);
      }
    }
  }

  &-btn {
    position: fixed;
    top: 0.4rem;
    right: 2rem;
    z-index: 12;
    border: none;
    width: 4rem;
    height: 4rem;
    text-align: center;

    @include width-above(820) {
      display: none;
    }

    &:hover .nav-icon:not(.open)::before {
      top: -1rem;
    }

    &:hover .nav-icon:not(.open)::after {
      top: 1rem;
    }
  }

  &-icon {
    position: relative;
    top: -0.75rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $color-text-white;
      display: inline-block;
      z-index: 13;
    }

    &::before,
    &::after {
      content: "";
      transition: all 0.2s;
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &-popup-bg.open {
    transform: scale(80);
    transition: transform 0.6s;
  }

  &-popup.open {
    width: 100%;
    opacity: 1;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &-icon.open {
    background-color: transparent;
  }

  &-icon.open::before {
    top: 0;
    transform: rotate(135deg);
  }

  &-icon.open::after {
    top: 0;
    transform: rotate(-135deg);
  }
}
</style>
