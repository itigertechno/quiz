<template>
  <div class="side">
    <div class="side__logo"></div>
    <div class="side__title">
      Side of the Hand (SE)
    </div>

    <div class="side__text">
      You can tap on either hand, using the opposite hand to do the tapping. Try using several fingers from the opposite
      hand to tap on this point. I personally like to use all four fingers to tap along the length of the side of my hand
      to stimulate the Karate Chop point.
    </div>

    <KitButton defaultButton padding fixed green @click="nextPage">Next point</KitButton>
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
.side {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    background-image: url("/images/side.svg");
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