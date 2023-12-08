<template>
  <div class="recommendation">
    <div class="recommendation__logo"></div>
    <div class="recommendation__title">
      <span>Personal</span> recommendation:
    </div>

    <div class="recommendation__text">
      You need to focus on <b>three main points</b> in <br>your body for the <b>next 30-90 days</b>.
    </div>

    <KitButton defaultButton padding fixed green @click="nextPage">Learn more</KitButton>
  </div>
</template>

<script>
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepTwentySeven",
  components: { KitButton },
  methods: {
    nextPage() {
      this.$store.commit("nextPage");
    }
  }
}
</script>

<style scoped lang="scss">
.recommendation {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    background-image: url("/images/recommendation.svg");
    background-repeat: no-repeat;

    width: 353px;
    height: 471px;
  }

  &__title {
    margin-top: 32px;

    font-family: "Noto Serif HK";
    font-weight: 500;
    font-size: 20px;
    color: #302823;

    span {
      font-weight: 700;
      font-size: 24px;
    }
  }

  &__text {
    margin-top: 16px;

    text-align: center;
    font-family: "Poppins";
    font-weight: 500;
    color: #534E4A;
    font-size: 15px;
    line-height: 24px;
  }
}
</style>