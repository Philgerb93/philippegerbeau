<template>
  <div class="contact" id="hire-me">
    <div class="page-section">
      <h2>Hire me</h2>

      <form ref="form" class="box" @submit.prevent="sendEmail">
        <template v-if="!messageSent">
          <div class="info">
            <h3 class="with-subheader">Let's do it!</h3>
            <p>I usually answer within a day or two.</p>
            <div class="field">
              <label for="name">Name</label>
              <div class="error" v-if="isSubmitted && !$v.name.required">
                Field is required
              </div>
              <input
                v-model="name"
                type="text"
                id="name"
                name="user_name"
                placeholder="John Doe"
              />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <div class="error" v-if="isSubmitted && !$v.email.required">
                Field is required
              </div>
              <div class="error" v-if="isSubmitted && !$v.email.email">
                Field must be a valid email
              </div>
              <input
                v-model="email"
                type="text"
                id="email"
                name="user_email"
                placeholder="john.doe@email.com"
              />
            </div>
          </div>
          <div class="content">
            <div class="field">
              <label for="message">Message</label>
              <div class="error" v-if="isSubmitted && !$v.message.required">
                Field is required
              </div>
              <textarea
                v-model="message"
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Write text here..."
              ></textarea>
            </div>
            <button type="submit" :disabled="isLoading">
              <span v-if="!isLoading">SEND MESSAGE</span>
            </button>
          </div>
        </template>
        <div v-else class="confirmation">
          <fa-icon :icon="['fa', 'envelope']" size="4x" />
          <p>Your message has been sent!</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isSubmitted: false,
      isLoading: false,
      messageSent: false,
    };
  },
  validations: {
    name: { required },
    email: { required, email },
    message: { required },
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
      let elements = document.querySelectorAll(".box");

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
    sendEmail() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.isLoading = true;

      emailjs
        .sendForm(
          "service_1jm0wev",
          "template_lpmj7bp",
          this.$refs.form,
          "user_F566qi3f7sd2W3JcQOrgV"
        )
        .then(
          () => {
            this.messageSent = true;
            this.loading = false;
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
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
    margin-top: 8px;

    @include width-above(820px) {
      border-left: 1px solid rgba($color-light, 0.3);
      margin-top: 60px;
    }

    .field {
      height: 100%;
      padding: 0 60px;
      margin-bottom: 64px;

      @include width-above(820px) {
        border-left: 1px solid rgba($color-light, 0.3);
        padding: 20px;
        margin-bottom: 0;
      }

      textarea {
        width: 100%;
        height: 160px;
        margin-bottom: 0;

        @include width-above(820px) {
          height: 100%;
        }
      }
    }

    button {
      height: 50px;
      border: none;
      background-color: $color-brand;
      color: $color-light;
      font-weight: bold;
      transition: 0.2s all;

      &:not(:disabled):hover {
        background-color: lighten($color: $color-brand, $amount: 10%);
      }
    }
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    label {
      opacity: 0.6;
      font-size: 1.4rem;
    }

    input,
    textarea {
      caret-color: $color-light;
      border: none;
      background-color: transparent;
      resize: none;
      font-size: 1.6rem;
      color: $color-light;
      margin-bottom: 4px;

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

.confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lighten($color: $color-brand, $amount: 10%);
  width: 100%;
  height: 500px;
}

.error {
  font-size: 1.4rem;
  color: rgba(red, 0.8);
}
</style>