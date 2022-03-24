<template>
  <div class="priorities page-section">
    <h2 class="with-subheader">My priorities</h2>
    <p class="subheader">
      Everytime I build a project, I make sure I keep those in mind.
    </p>
    <div class="wrapper">
      <div class="priority">
        <fa-icon :icon="['fab', 'html5']" size="4x" />
        <h3>Responsive design</h3>
        <p>
          With devices of all types and sizes, you need something flexible. By
          using mobile-first, responsive design, I guarantee you that your
          website will look good any screen.
        </p>
      </div>
      <div class="priority">
        <fa-icon :icon="['fab', 'html5']" size="4x" />
        <h3>Performance</h3>
        <p>
          Slow load times heavily increase the bounce rate of a website, which
          deteriorates its ranking with search engines, since it tells them that
          users don't find the page content useful. It gets even worse on mobile
          devices!
        </p>
      </div>
      <div class="priority">
        <fa-icon :icon="['fab', 'html5']" size="4x" />
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
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .priority {
    margin: 16px;
    max-width: 400px;

    :not(p):not(h3) {
      color: $color-brand;
    }

    @include screen-above(820px) {
      flex: 1;
    }
  }
}
</style>