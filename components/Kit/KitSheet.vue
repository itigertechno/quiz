<template>
  <vue-bottom-sheet-vue2 class="sheet" ref="myBottomSheet" style="width: 100%;">
    <div class="dataOne" v-if="dataOne">
      <div class="dataOne__title">
        Enter your email to get your
        <div>Personalized EFT-Tapping <br>Plan</div>
      </div>

      <div class="dataOne__input">
        <input type="text" placeholder="Your email" @input="inputChange" v-model="input">
      </div>

      <div class="dataOne__button">
        <KitButton green defaultButton block @click="stepTwo" :notActive="!isActive" :disabled="!isActive">
          Continue
        </KitButton>
      </div>

      <div class="dataOne__text">
        We respect your privacy and are committed to <br>
        protecting your personal dataOne. We’ll email you a copy <br>
        of your results for convenient access.
      </div>
    </div>
    <!-- Data two -->
    <div class="dataTwo" v-if="dataTwo">
      <div class="dataTwo__title">
        Do you want to receive email <br>
        with special offers, EFT <br>
        recommendation, <br>
        meditation plan and <span>free <br>gifts</span>?
      </div>

      <div class="dataTwo__button">
        <KitButton green defaultButton block @click="stepThree('yes')">Ok, got it</KitButton>
      </div>

      <div class="dataTwo__text">
        <button @click="stepThree('no')">i know everything about EFT</button>
      </div>
    </div>

    <!-- Data three -->
    <div class="dataOne" v-if="dataThree">
      <div class="dataOne__title">
        What's your name?
      </div>

      <div class="dataOne__input">
        <input type="text" placeholder="Your name" @input="inputChange" v-model="inputName">
      </div>

      <div class="dataOne__button">
        <KitButton green defaultButton block @click="close" :notActive="!isActiveName" :disabled="!isActiveName">
          Next step
        </KitButton>
      </div>

      <div class="dataOne__text">
        Why do we ask your name? Because we want to be
        <br>your trusted companion and stay with you for every
        <br> step of your journey
      </div>
    </div>
  </vue-bottom-sheet-vue2>
</template>

<script>
export default {
  name: "KitSheet",

  data() {
    return {
      isActive: false,
      isActiveName: false,
      input: "",
      inputName: "",
      dataOne: true,
      dataTwo: false,
      dataThree: false,
    }
  },

  mounted() {
    this.openModal();
  },

  methods: {
    openModal() {
      this.$refs.myBottomSheet.open();
    },

    close() {
      this.$refs.myBottomSheet.close();
    },

    stepTwo() {
      if (!this.isActive) {
        return;
      } else {
        this.dataOne = false;
        this.dataTwo = true;
      }
    },

    stepThree(type) {
      this.dataTwo = false;
      this.dataThree = true;
    },

    inputChange() {
      if (this.input.length > 0) {
        this.isActive = true;
      } else this.isActive = false;

      if (this.inputName.length > 0) {
        this.isActiveName = true;
      } else this.isActiveName = false;
    },
  }
}
</script>

<style scoped lang="scss">
.sheet {
  // &.bottom-sheet {

  //   .bottom-sheet__content {
  //     border-radius: 28px 28px 0 0 !important;
  //   }
  // }

  // .bottom-sheet__draggable-thumb {
  //   width: 36px !important;
  //   height: 4px !important;
  //   background: #E3D5CA !important;
  // }

  .dataOne {
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      text-align: center;
      font-family: "Noto Serif HK";
      font-weight: 700;
      color: #302823;

      text-align: 28px;

      font-size: 24px;

      div {
        color: #14AF68;
      }
    }

    &__input {
      margin-top: 28px;

      width: 100%;

      input {
        border: 1px solid #E3D5CA;
        text-align: center;

        background-color: #F5EADE;

        font-family: "Poppins";
        font-weight: 500;
        font-size: 16px;

        color: #B2A59D;
        border-radius: 16px;
        padding: 16px;

        display: block;
        width: 100%;
        outline: none;

        &::-webkit-input-placeholder {
          color: #B2A59D;
        }
      }
    }

    &__button {
      margin-top: 40px;
      width: 100%;
    }

    &__text {
      margin-top: 12px;

      color: #988D85;
      text-align: center;

      font-family: "Poppins";
      font-weight: 400;
      font-size: 12px;
    }
  }

  .dataTwo {
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      text-align: center;
      font-family: "Noto Serif HK";
      font-weight: 700;
      color: #302823;

      text-align: 28px;

      font-size: 24px;

      span {
        color: #14AF68;
      }
    }

    &__button {
      margin-top: 24px;
      width: 100%;
    }

    &__text {
      margin-top: 16px;

      button {
        padding: 0;
        margin: 0;

        background: none;
        border: none;
        outline: none;

        color: #534E4A;

        font-family: "Poppins";
        font-weight: 500;
        font-size: 16px;

      }
    }
  }
}
</style>