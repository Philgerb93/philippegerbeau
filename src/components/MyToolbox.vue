<template>
  <div class="toolbox">
    <div class="page-section">
      <h2 class="with-subheader">My Toolbox</h2>
      <p class="subheader">I'd be nothing without them!</p>

      <h3>Front-end</h3>
      <div class="toolbox-section">
        <div class="tool">
          <HtmlLogo />
          <p>HTML</p>
        </div>
        <div class="tool">
          <JavascriptLogo />
          <p>Javascript</p>
        </div>
        <div class="tool">
          <TypescriptLogo />
          <p>Typescript</p>
        </div>
        <div class="tool">
          <CssLogo />
          <p>CSS</p>
        </div>
        <div class="tool">
          <SassLogo />
          <p>Sass</p>
        </div>
        <div class="tool">
          <FlutterLogo />
          <p>Flutter</p>
        </div>
        <div class="tool">
          <ShopifyLogo />
          <p>Liquid</p>
        </div>
        <div class="tool">
          <VueLogo />
          <p>Vue</p>
        </div>
        <div class="tool">
          <JestLogo />
          <p>Jest</p>
        </div>
      </div>

      <h3>Back-end</h3>
      <div class="toolbox-section">
        <div class="tool">
          <DotNetLogo />
          <p>.NET Core</p>
        </div>
        <div class="tool">
          <SqlLogo />
          <p>SQL</p>
        </div>
        <div class="tool">
          <FirebaseLogo />
          <p>Firebase</p>
        </div>
      </div>

      <h3>General</h3>
      <div class="toolbox-section">
        <div class="tool">
          <WordpressLogo />
          <p>Wordpress</p>
        </div>
        <div class="tool">
          <ShopifyLogo />
          <p>Shopify</p>
        </div>
        <div class="tool">
          <VSCodeLogo />
          <p>VS Code</p>
        </div>
        <div class="tool">
          <GitLogo />
          <p>Git</p>
        </div>
        <div class="tool">
          <GithubLogo />
          <p>Github</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HtmlLogo from "@/assets/icons/html.svg";
import JavascriptLogo from "@/assets/icons/javascript.svg";
import TypescriptLogo from "@/assets/icons/typescript.svg";
import CssLogo from "@/assets/icons/css.svg";
import SassLogo from "@/assets/icons/sass.svg";
import FlutterLogo from "@/assets/icons/flutter.svg";
import ShopifyLogo from "@/assets/icons/shopify.svg";
import VueLogo from "@/assets/icons/vue.svg";
import JestLogo from "@/assets/icons/jest.svg";
import DotNetLogo from "@/assets/icons/dotnet.svg";
import SqlLogo from "@/assets/icons/sql.svg";
import FirebaseLogo from "@/assets/icons/firebase.svg";
import WordpressLogo from "@/assets/icons/wordpress.svg";
import VSCodeLogo from "@/assets/icons/vscode.svg";
import GitLogo from "@/assets/icons/git.svg";
import GithubLogo from "@/assets/icons/github.svg";

export default {
  components: {
    HtmlLogo,
    JavascriptLogo,
    TypescriptLogo,
    CssLogo,
    SassLogo,
    FlutterLogo,
    ShopifyLogo,
    VueLogo,
    JestLogo,
    DotNetLogo,
    SqlLogo,
    FirebaseLogo,
    WordpressLogo,
    VSCodeLogo,
    GitLogo,
    GithubLogo,
  },
};
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

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>