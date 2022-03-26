<template>
  <div class="contact" id="hire-me">
    <div class="page-section">
      <h2>Hire me</h2>

      <form class="box">
        <div class="info">
          <h3 class="with-subheader">Let's do it!</h3>
          <p>I usually answer within a day or two.</p>
          <div class="field">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="john.doe@email.com" />
          </div>
        </div>
        <div class="content">
          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              rows="4"
              cols="50"
              placeholder="Write text here..."
            ></textarea>
          </div>
          <button>SEND MESSAGE</button>
        </div>
      </form>
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
      let priorities = document.querySelectorAll(".box");

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
.contact {
  background-color: rgba($color-accent-dark, 0.03);
}
.box {
  text-align: start;
  background-color: $color-dark;
  max-width: 500px;
  min-height: 500px;
  display: flex;
  margin: 0 auto;
  color: $color-light;
  flex-direction: column;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  opacity: 0;

  &.slidedUp {
    animation: slideInUp 1s forwards;
  }

  @include width-above(820px) {
    flex-direction: row;
    max-width: 1000px;
  }

  .info {
    flex: 2;
    padding: 0 60px;
    margin-top: 60px;

    @include width-above(820px) {
      flex-direction: row;
      padding-right: 40px;
      margin-bottom: 50px;
    }

    h3 {
      text-transform: uppercase;
      margin-left: 0;
      text-align: start;
      letter-spacing: 0.1em;
    }

    p {
      margin-bottom: 5rem;
    }
  }

  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    @include width-above(820px) {
      border-left: 1px solid rgba($color-light, 0.3);
    }

    .field {
      height: 100%;
      padding: 0 60px;
      margin-bottom: 16px;

      @include width-above(820px) {
        border-left: 1px solid rgba($color-light, 0.3);
        padding: 20px;
        margin-bottom: 0;
      }

      textarea {
        width: 100%;
        height: 100%;
        margin-bottom: 0;
      }
    }

    button {
      height: 50px;
      border: none;
      background-color: $color-brand;
      color: $color-light;
      font-weight: bold;
      transition: 0.2s all;

      &:hover {
        background-color: lighten($color: $color-brand, $amount: 10%);
      }
    }
  }

  .field {
    display: flex;
    flex-direction: column;

    label {
      opacity: 0.6;
      font-size: 1.4rem;
    }

    input,
    textarea {
      margin-bottom: 3rem;
      caret-color: $color-light;
      border: none;
      background-color: transparent;
      resize: none;
      font-size: 1.6rem;
      color: $color-light;

      &:focus {
        outline: none;
      }
    }

    input {
      height: 40px;
      border-bottom: 1px solid rgba($color-light, 0.3);
    }

    textarea {
      padding: 8px 0;
    }
  }
}
</style>