<template>
  <div class="toolbox" id="toolbox">
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
          <CssLogo />
          <p>CSS</p>
        </div>
        <div class="tool">
          <SassLogo />
          <p>Sass</p>
        </div>
        <div class="tool">
          <ReactLogo />
          <p>React</p>
        </div>
        <div class="tool">
          <ShopifyLogo />
          <p>Liquid</p>
        </div>
      </div>

      <h3>Back-end</h3>
      <div class="toolbox-section">
        <div class="tool">
          <GatsbyLogo />
          <p>Gatsby</p>
        </div>
        <div class="tool">
          <StrapiLogo />
          <p>Strapi</p>
        </div>
        <div class="tool">
          <GraphQlLogo />
          <p>GraphQL</p>
        </div>
        <div class="tool">
          <SqlLogo />
          <p>SQL</p>
        </div>
        <div class="tool">
          <FirebaseLogo />
          <p>Firebase</p>
        </div>
        <div class="tool">
          <DotNetLogo />
          <p>.NET Core</p>
        </div>
        <div class="tool">
          <CSharpLogo />
          <p>C#</p>
        </div>
      </div>

      <h3>Testing</h3>
      <div class="toolbox-section">
        <div class="tool">
          <JestLogo />
          <p>Jest</p>
        </div>
        <div class="tool">
          <StorybookLogo />
          <p>Storybook</p>
        </div>
      </div>

      <h3>General</h3>
      <div class="toolbox-section">
        <div class="tool">
          <ShopifyLogo />
          <p>Shopify</p>
        </div>
        <div class="tool">
          <VSCodeLogo />
          <p>VS Code</p>
        </div>
        <div class="tool">
          <DotNetLogo />
          <p>Visual Studio</p>
        </div>

        <div class="tool">
          <NetlifyLogo />
          <p>Netlify</p>
        </div>
        <div class="tool">
          <GithubLogo />
          <p>Github</p>
        </div>
        <div class="tool">
          <GitLogo />
          <p>Git</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HtmlLogo from "@/assets/icons/html.svg";
import JavascriptLogo from "@/assets/icons/javascript.svg";
import CssLogo from "@/assets/icons/css.svg";
import SassLogo from "@/assets/icons/sass.svg";
import ShopifyLogo from "@/assets/icons/shopify.svg";
import JestLogo from "@/assets/icons/jest.svg";
import DotNetLogo from "@/assets/icons/dotnet.svg";
import SqlLogo from "@/assets/icons/sql.svg";
import FirebaseLogo from "@/assets/icons/firebase.svg";
import VSCodeLogo from "@/assets/icons/vscode.svg";
import GitLogo from "@/assets/icons/git.svg";
import GithubLogo from "@/assets/icons/github.svg";
import NetlifyLogo from "@/assets/icons/netlify.svg";
import StrapiLogo from "@/assets/icons/strapi.svg";
import GraphQlLogo from "@/assets/icons/graphql.svg";
import ReactLogo from "@/assets/icons/react.svg";
import CSharpLogo from "@/assets/icons/csharp.svg";
import GatsbyLogo from "@/assets/icons/gatsby.svg";
import StorybookLogo from "@/assets/icons/storybook.svg";

export default {
  components: {
    HtmlLogo,
    JavascriptLogo,
    CssLogo,
    SassLogo,
    ShopifyLogo,
    JestLogo,
    DotNetLogo,
    SqlLogo,
    FirebaseLogo,
    VSCodeLogo,
    GitLogo,
    GithubLogo,
    NetlifyLogo,
    StrapiLogo,
    GraphQlLogo,
    ReactLogo,
    GatsbyLogo,
    CSharpLogo,
    StorybookLogo,
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
      let elements = document.querySelectorAll(".toolbox-section");

      elements.forEach((element) => {
        if (
          !element.classList.contains("slided") &&
          this.elemInViewport(element)
        ) {
          element.classList.add("slided");
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
.toolbox {
  background-color: rgba($color-accent-dark, 0.03);

  .toolbox-section {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 60px;
    opacity: 0;
    flex-wrap: wrap;

    &.slided {
      animation: slideInRight 1s forwards;
    }

    .tool {
      border-radius: 8px;
      width: 110px;
      height: 110px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: $color-light;
      color: $color-brand;
      font-weight: 400;
      margin: 8px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      transition: 0.3s all;

      &:hover {
        transform: translateY(-2px);
      }

      &:hover p {
        color: lighten($color: $color-brand, $amount: 10%);
      }

      &:hover svg {
        opacity: 0.7;
      }

      p {
        font-size: 1.5rem;
        margin-top: 8px;
        margin-bottom: 0;
        transition: 0.2s all;
      }

      svg {
        width: 30px;
        height: 30px;
        transition: 0.2s all;
        opacity: 0.9;
      }
    }
  }
}
</style>