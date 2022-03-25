<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="start-of-page"></div>
    <Header></Header>
    <div
      class="main-content"
      v-bind:style="{ marginBottom: footerHeight + 'px' }"
    >
      <Priorities></Priorities>
      <Toolbox></Toolbox>
      <Contact></Contact>
      <!-- <projects
        v-on:OpenImgModal="openImgModal"
        v-on:OpenVidModal="openVidModal"
      ></projects> -->
    </div>
    <div id="end-of-page"></div>
    <!-- <modal
      v-if="modalIndex >= 0"
      v-bind:video="modalVideo"
      v-bind:images="modalImages"
      v-bind:startingIndex="modalIndex"
      v-on:Close="modalIndex = -1"
    ></modal> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/Header";
// import Projects from "./components/projects/Projects";
// import Modal from "./components/Modal";
import Toolbox from "./components/Toolbox.vue";
import Priorities from "./components/Priorities.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    NavBar,
    Header,
    // Projects,
    // Modal,
    Priorities,
    Toolbox,
    Contact,
  },
  data() {
    return {
      modalIndex: -1,
      modalImages: [],
      modalVideo: null,
      footerHeight: 0,
    };
  },

  methods: {
    openImgModal(images, index) {
      this.modalVideo = null;
      this.modalImages = images;
      this.modalIndex = index;
    },
    openVidModal(video) {
      this.modalImages = [];
      this.modalVideo = video;
      this.modalIndex = 0;
    },
    getFooterHeight(height) {
      this.footerHeight = height;
    },
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  background-color: $color-footer;
  box-sizing: border-box;
  color: $color-text-black;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.06rem;
  font-size: 1.6rem;
}

input,
textarea,
*::placeholder,
button {
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.06rem;
  font-size: 1.6rem;
}

button {
  font-size: 1.4rem;
}

p {
  line-height: 2.8rem;
  margin: 16px 0;
}

a {
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  text-decoration: none;
  transition: 0.2s ease-in-out;
}

hr {
  background-color: $color-grey;
  border: 0;
  height: 1.2px;
  margin: 4rem auto 4rem auto;
  width: 80%;

  @include width-below(1200) {
    margin: 6.5rem auto;
  }
}

span {
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif;
}

h1 {
  font-size: 6rem;
  letter-spacing: 0.08em;
}

h2 {
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.2em;
  margin-bottom: 2em;
}

h3 {
  font-size: 2.2rem;
  text-align: center;
  margin: 0.8em;
}

h4 {
  font-size: 2.6rem;
  font-weight: lighter;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0.2em 0;
}

h5 {
  font-size: 1.6rem;
  margin: 0.8em 0;
}

h2.with-subheader,
h3.with-subheader {
  margin-bottom: 0;
}

p.subheader {
  margin-bottom: 5em;
}

.main-content {
  background-color: $color-background;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2), 0 4px 40px rgba(0, 0, 0, 0.1);
  margin-top: 99vh;
  overflow: hidden;
  position: relative;
  z-index: 2;

  @include height-above(800px) {
    margin-top: $navbar-height + $header-height;
  }
}

* {
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: $color-grey-light;
  }

  ::-webkit-scrollbar-thumb {
    background-color: $color-grey-dark;
  }
}

button {
  cursor: pointer;
}

.page-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12rem 1.5rem;
  text-align: center;
}

@include width-above(750px) {
  .page-width {
    padding: 0 5rem;
  }
}
</style>
