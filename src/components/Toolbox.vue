<template>
  <div class="toolbox">
    <div class="page-section">
      <h2>My Toolbox</h2>

      <h3>Front-end</h3>
      <div class="toolbox-section">
        <div class="tool">
          <fa-icon :icon="['fab', 'html5']" size="2x" />
          <p>HTML</p>
        </div>
        <div class="tool">
          <fa-icon :icon="['fab', 'js-square']" size="2x" />
          <p>Javascript</p>
        </div>
        <div class="tool">
          <fa-icon :icon="['fab', 'css3-alt']" size="2x" />
          <p>CSS</p>
        </div>
        <div class="tool">
          <fa-icon :icon="['fab', 'html5']" size="2x" />
          <p>Flutter</p>
        </div>
        <div class="tool">
          <fa-icon :icon="['fab', 'js-square']" size="2x" />
          <p>Liquid</p>
        </div>
        <div class="tool">
          <fa-icon :icon="['fab', 'vuejs']" size="2x" />
          <p>Vue</p>
        </div>
        <div class="tool">
          <p>Jest</p>
        </div>
      </div>

      <h3>Back-end</h3>
      <div class="toolbox-section">
        <div class="tool">
          <p>.NET Core</p>
        </div>
        <div class="tool">
          <p>SQL</p>
        </div>
        <div class="tool">
          <p>Firebase</p>
        </div>
      </div>

      <h3>General</h3>
      <div class="toolbox-section">
        <div class="tool">
          <p>Wordpress</p>
        </div>
        <div class="tool">
          <p>Shopify</p>
        </div>
        <div class="tool">
          <p>VS Code</p>
        </div>
        <div class="tool">
          <p>Git</p>
        </div>
        <div class="tool">
          <p>Github</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.toolbox {
  background-color: rgba($color-accent-dark, 0.03);

  .toolbox-section {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 60px;

    .tool {
      border-radius: 8px;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: $color-light;
      color: $color-brand;
      font-weight: 700;
      margin: 8px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

      p {
        margin-top: 4px;
        margin-bottom: 0;
      }
    }
  }
}
</style>