<template>
  <nav id="nav" class="nav" :class="{ hidden: !showBar }">
    <div class="nav-wrapper">
      <a href="#start-of-page" class="nav-name">Philippe Gerbeau</a>

      <label class="nav-btn" @click="togglePopup"
        ><span class="nav-icon" :class="{ open: showPopup }"></span
      ></label>

      <ul class="nav-items">
        <li><a class="nav-link" href="#priorities">Priorities</a></li>
        <li><a class="nav-link" href="#toolbox">Toolbox</a></li>
        <li><a class="nav-link" href="#services">Services</a></li>
        <li><a class="nav-link" href="#hire-me">Hire me</a></li>
      </ul>
    </div>

    <div class="nav-popup-bg" :class="{ open: showPopup }"></div>
    <nav class="nav-popup" :class="{ open: showPopup }">
      <ul class="nav-popup-list">
        <li class="nav-popup-item">
          <a href="#priorities" class="nav-popup-link" @click="togglePopup"
            >Priorities</a
          >
        </li>
        <li class="nav-popup-item">
          <a href="#toolbox" class="nav-popup-link" @click="togglePopup"
            >Toolbox</a
          >
        </li>
        <li class="nav-popup-item">
          <a href="#services" class="nav-popup-link" v-on:click="togglePopup"
            >Services</a
          >
        </li>
        <li class="nav-popup-item">
          <a href="#hire-me" class="nav-popup-link" v-on:click="togglePopup"
            >Hire me</a
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

        const target = this.getAttribute("href");
        const navHeight = Math.floor(
          document.querySelector(".nav-wrapper").clientHeight
        );
        let count;

        if (target == "#header") {
          count = 20;
        } else {
          const destination = document.querySelector(target);
          count = destination.getBoundingClientRect().top - navHeight;
        }

        window.scrollBy({ top: count, behavior: "smooth" });
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
  color: $color-light;
  left: 0;
  line-height: $navbar-height;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: 0.2s all;
  overflow: hidden;
  transition: all 0.4s;
  height: 48px;

  &.hidden {
    height: 0;
  }

  & a {
    color: $color-light;
  }

  &-name {
    font-size: 1.6rem;
    letter-spacing: 0.2em;
    font-weight: bold;
    position: relative;
  }

  &-link {
    letter-spacing: 0.08em;
    position: relative;
    font-size: 1.2rem;
  }

  &-name,
  &-link {
    &:before {
      background-color: $color-light;
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
    background-color: $color-dark;
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

    @include width-above(820px) {
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
      z-index: 8;
      transition: transform 0.4s;
      background-color: $color-dark;
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
      transition: all 0.4s;

      &:hover {
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
    cursor: pointer;

    @include width-above(820px) {
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
      background-color: $color-light;
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
