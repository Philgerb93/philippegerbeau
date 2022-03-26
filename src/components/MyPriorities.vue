<template>
  <div class="priorities page-section">
    <h2 class="with-subheader">My priorities</h2>
    <p class="subheader">
      Everytime I build a project, I make sure I keep those in mind.
    </p>
    <div class="wrapper">
      <div class="priority">
        <fa-icon :icon="['fa', 'laptop-code']" size="4x" />
        <h3>Responsive design</h3>
        <p>
          With devices of all types and sizes, you need something flexible and
          robust. By using mobile-first, responsive design, I guarantee you that
          your website will look good on any screen.
        </p>
      </div>
      <div class="priority">
        <fa-icon :icon="['fa', 'stopwatch']" size="4x" />
        <h3>Performance</h3>
        <p>
          Slow load times heavily increase the bounce rate of a website, which
          deteriorates its ranking with search engines, since it tells them that
          users don't find the page content useful. It gets even worse on mobile
          devices!
        </p>
      </div>
      <div class="priority">
        <fa-icon :icon="['fab', 'searchengin']" size="4x" />
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
      let priorities = document.querySelectorAll(".priority");

      priorities.forEach((element) => {
        if (
          !element.classList.contains("slidedUp") &&
          this.elemInViewport(element)
        ) {
          element.classList.add("slidedUp");
        }
      });
    },
    elemInViewport(element) {
      var navBarHeight = document.querySelector(".nav").clientHeight;
      var topOfElement = element.getBoundingClientRect().top;
      var bottomOfElement = topOfElement + element.clientHeight;

      return (
        topOfElement + element.clientHeight / 2 > navBarHeight &&
        bottomOfElement - element.clientHeight / 2 < window.innerHeight
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

    @include width-above(820px) {
      flex: 1;
    }
  }
}
</style>