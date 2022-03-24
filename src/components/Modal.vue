<template>
  <div class="modal">
    <div class="modal-content-holder">
      <video v-if="video" class="modal-vid" controls autoplay>
        <source type="video/mp4" v-bind:src="video" />
      </video>
      <img v-else class="modal-img" v-bind:src="images[index]" />
    </div>

    <span v-if="!video" class="modal-prev" v-on:click="prevClick()"
      >&#10094;</span
    >
    <span v-if="!video" class="modal-next" v-on:click="nextClick()"
      >&#10095;</span
    >
    <span class="modal-close" v-on:click="closeClick()">&times;</span>
  </div>
</template>

<script>
export default {
  props: ["video", "images", "startingIndex"],

  data() {
    return {
      index: this.startingIndex,
    };
  },

  mounted() {
    if (this.video) {
      var vid = this.$el.querySelector(".modal-vid");
      vid.load();
      vid.play();
    }
  },

  methods: {
    closeClick() {
      this.$emit("Close");
    },
    nextClick() {
      this.index = this.index == this.images.length - 1 ? 0 : (this.index += 1);
    },
    prevClick() {
      this.index = this.index == 0 ? this.images.length - 1 : (this.index -= 1);
    },
  },
};
</script>


<style lang="scss">
.modal {
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  &-content-holder {
    // animation: zoom .5s;
    height: 100%;
    position: fixed;
    width: 100%;
  }

  &-img,
  &-vid {
    margin: auto;
    max-height: 80%;
    max-width: 70%;

    @include absCenter;

    @include screen-below(820) {
      max-width: 80%;
    }
  }

  &-close {
    color: $color-grey-light;
    font-size: 4rem;
    font-weight: bold;
    padding: 16px;
    position: absolute;
    right: 2%;
    top: 0.5%;
    transition: 0.3s;

    &:hover,
    &:focus {
      color: $color-grey-dark;
      cursor: pointer;
      text-decoration: none;
    }

    @include screen-below(820) {
      font-size: 6rem;
      right: 5%;
      top: 5%;
    }
  }

  &-prev,
  &-next {
    border-radius: 0 3px 3px 0;
    color: $color-grey-light;
    cursor: pointer;
    font-size: 3rem;
    font-weight: bold;
    margin: -50px 2% 0 2%;
    padding: 16px;
    position: absolute;
    top: 50%;
    transition: 0.6s ease;
    user-select: none;
    width: auto;

    &:hover,
    &:focus {
      color: $color-grey-dark;
      cursor: pointer;
      text-decoration: none;
    }

    @include media-width(820) {
      font-size: 4.5rem;
      margin: -50px 5% 0 5%;
    }
  }

  &-next {
    border-radius: 3px 0 0 3px;
    right: 0;
  }
}
</style>
