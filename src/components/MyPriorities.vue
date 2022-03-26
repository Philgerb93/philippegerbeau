<template>
  <div class="priorities page-section" id="priorities">
    <h2 class="with-subheader">My priorities</h2>
    <p class="subheader">
      Everytime I build a project, I make sure I keep those in mind.
    </p>
    <div class="wrapper">
      <div class="priority">
        <DisplayLogo />
        <h3>Responsive design</h3>
        <p>
          With devices of all types and sizes, you need something flexible and
          robust. By using mobile-first, responsive design, I guarantee you that
          your website will look good on any screen.
        </p>
      </div>
      <div class="priority">
        <PerformanceLogo />
        <h3>Performance</h3>
        <p>
          Slow load times heavily increase the bounce rate of a website, which
          deteriorates its ranking with search engines, since it tells them that
          users don't find the page content useful. It gets even worse on mobile
          devices!
        </p>
      </div>
      <div class="priority">
        <SeoLogo />
        <h3>SEO</h3>
        <p>
          I use best practices to ensure your website passes all performance and
          accessibility requirements. A good Google ranking means you get to
          reach more people and grow your audience!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DisplayLogo from "@/assets/icons/display.svg";
import PerformanceLogo from "@/assets/icons/performance.svg";
import SeoLogo from "@/assets/icons/seo.svg";

export default {
  components: {
    LaptopLogo,
    PerformanceLogo,
    SeoLogo,
  },
  mounted() {
    this.watchForAnim();
    window.addEventListener("scroll", this.watchForAnim);
  },
  destroyed() {
    window.removeEventListener("scroll", this.watchForAnim);
  },
  methods: {
    watchForAnim() {
      let elements = document.querySelectorAll(".priority");

      elements.forEach((element) => {
        if (
          !element.classList.contains("slidedUp") &&
          this.elemInViewport(element)
        ) {
          element.classList.add("slidedUp");
        }
      });
    },
    elemInViewport(element) {
      let navBarHeight = document.querySelector(".nav").clientHeight;
      let topOfElement = element.getBoundingClientRect().top;
      let centerOfElement = topOfElement + element.clientHeight / 2;

      return (
        centerOfElement > navBarHeight && centerOfElement < window.innerHeight
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .priority {
    margin: 16px;
    max-width: 400px;
    opacity: 0;

    &.slidedUp {
      animation: slideInUp 1s forwards;
    }

    &:hover :not(p):not(h3) {
      color: lighten($color: $color-brand, $amount: 10%);
    }

    :not(p):not(h3) {
      color: $color-brand;
      transition: 0.2s all;
    }

    svg {
      width: 60px;
      height: 60px;
    }

    @include width-above(820px) {
      flex: 1;
    }
  }
}
</style>