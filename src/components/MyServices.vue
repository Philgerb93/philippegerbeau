<template>
  <div class="services page-section" id="services">
    <h2>My services</h2>
    <div class="service">
      <div class="media left">
        <h3 class="only-mobile">Website</h3>
        <img src="@/assets/website.jpg" alt="website" />
      </div>
      <div class="info right">
        <h3 class="only-desktop">Website</h3>
        <p>
          Maecenas tempus nulla tortor, at tempor orci lobortis ut. Sed et
          pharetra enim, id porttitor odio. Quisque efficitur felis congue nisl
          eleifend convallis. Vivamus lobortis libero iaculis ipsum pulvinar,
          vel ullamcorper eros rhoncus. Proin vitae ligula cursus tortor
          imperdiet congue et sed eros. Quisque volutpat lorem ac augue iaculis
          sodales. Mauris a ligula iaculis lectus tincidunt faucibus.
        </p>
        <button>See Wordpress website demo</button>
      </div>
    </div>
    <div class="service">
      <div class="media only-mobile">
        <h3>E-store</h3>
        <img src="@/assets/estore.jpg" alt="estore" />
      </div>
      <div class="info left">
        <h3 class="only-desktop">E-store</h3>
        <p>
          Maecenas tempus nulla tortor, at tempor orci lobortis ut. Sed et
          pharetra enim, id porttitor odio. Quisque efficitur felis congue nisl
          eleifend convallis. Vivamus lobortis libero iaculis ipsum pulvinar,
          vel ullamcorper eros rhoncus. Proin vitae ligula cursus tortor
          imperdiet congue et sed eros. Quisque volutpat lorem ac augue iaculis
          sodales. Mauris a ligula iaculis lectus tincidunt faucibus.
        </p>
        <button>See Shopify store demo</button>
      </div>
      <div class="media only-desktop right">
        <img src="@/assets/estore.jpg" alt="estore" />
      </div>
    </div>
    <div class="service">
      <div class="media left">
        <h3 class="only-mobile">Mobile App</h3>
        <img src="@/assets/mobile.jpg" alt="mobile" />
      </div>
      <div class="info right">
        <h3 class="only-desktop">Mobile App</h3>
        <p>
          Maecenas tempus nulla tortor, at tempor orci lobortis ut. Sed et
          pharetra enim, id porttitor odio. Quisque efficitur felis congue nisl
          eleifend convallis. Vivamus lobortis libero iaculis ipsum pulvinar,
          vel ullamcorper eros rhoncus. Proin vitae ligula cursus tortor
          imperdiet congue et sed eros. Quisque volutpat lorem ac augue iaculis
          sodales. Mauris a ligula iaculis lectus tincidunt faucibus.
        </p>
        <button>Watch video example</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.watchForAnim();
    window.addEventListener("scroll", this.watchForAnim);
  },
  destroyed() {
    window.removeEventListener("scroll", this.watchForAnim);
  },
  methods: {
    watchForAnim() {
      let leftElements = document.querySelectorAll(".left");
      let rightElements = document.querySelectorAll(".right");

      leftElements.forEach((element) => {
        if (
          !element.classList.contains("slidedRight") &&
          this.elemInViewport(element)
        ) {
          element.classList.add("slidedRight");
        }
      });

      rightElements.forEach((element) => {
        if (
          !element.classList.contains("slidedLeft") &&
          this.elemInViewport(element)
        ) {
          element.classList.add("slidedLeft");
        }
      });
    },
    elemInViewport(element) {
      let navBarHeight = document.querySelector(".nav").clientHeight;
      let topOfElement = element.getBoundingClientRect().top;
      let centerOfElement = topOfElement + element.clientHeight / 2;
      let topSection = centerOfElement - element.clientHeight / 2;
      let botSection = centerOfElement + element.clientHeight / 2;

      return (
        (topSection > navBarHeight && topSection < window.innerHeight) ||
        (botSection > navBarHeight && botSection < window.innerHeight)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.service {
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 6rem;
  }

  @include width-above(800px) {
    flex-direction: row;
    height: 400px;

    .left {
      margin-right: 3rem;

      @include width-above(800px) {
        opacity: 0;

        &.slidedRight {
          animation: 1s slideInRight forwards;
        }
      }
    }

    .right {
      margin-left: 3rem;

      @include width-above(800px) {
        opacity: 0;

        &.slidedLeft {
          animation: 1s slideInLeft forwards;
        }
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 20rem;
    }
  }

  .media {
    flex: 1;

    img {
      width: 100%;
      height: 200px;
      max-width: 550px;
      box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
        0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      object-fit: cover;

      @include width-above(800px) {
        height: 400px;
      }
    }
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 4rem;
    margin-top: 1.6rem;

    @include width-above(800px) {
      margin-top: 0;
    }

    h3,
    p {
      text-align: start;
      margin-left: 0;
    }
  }
}

button {
  background: none;
  color: $color-brand;
  border: none;
  width: fit-content;
  padding: 8px 0;
  transition: all 0.2s;
  font-weight: bold;

  &:hover {
    color: lighten($color: $color-brand, $amount: 10%);
  }
}

.only-desktop {
  display: none;

  @include width-above(800px) {
    display: block;
  }
}

.only-mobile {
  display: block;

  @include width-above(800px) {
    display: none;
  }
}
</style>