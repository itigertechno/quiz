<template>
  <div class="eye">
    <div class="eye__logo"></div>
    <div class="eye__title">
      Eyebrow (EB)
    </div>

    <div class="eye__text">
      You can tap on both sides at once, pick just one side of the body, or alternate sides as you go along. Try using
      just a few fingers, like the index and middle fingers, to tap on this point.
    </div>

    <KitButton defaultButton padding fixed green @click="nextPage">Continue</KitButton>
  </div>
</template>

<script>
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepTwentyEight",
  components: { KitButton },
  methods: {
    nextPage() {
      this.$store.commit("nextPage");
    }
  }
}
</script>

<style scoped lang="scss">
.eye {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    background-image: url("/images/eye.svg");
    background-repeat: no-repeat;

    width: 353px;
    height: 471px;

    z-index: -2;
  }

  &__title {
    margin-top: 13px;

    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    color: #302823;
  }

  &__text {
    margin-top: 16px;

    text-align: center;
    font-family: "Poppins";
    font-weight: 400;
    line-height: 24px;
    color: #534E4A;
    font-size: 15px;

    padding: 20px;
  }
}
</style>