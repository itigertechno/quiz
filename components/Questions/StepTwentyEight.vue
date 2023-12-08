<template>
  <div class="collarbone">
    <div class="collarbone__logo"></div>
    <div class="collarbone__title">
      Collarbone point (CB)
    </div>

    <div class="collarbone__text">
      You can tap with a few fingers on either side of the body to stimulate this point. Alternatively, try taking your
      whole hand and tapping the entire hand across the place where a bowtie would lie. That allows you to easily
      stimulate this point on both sides at once without having to worry about missing the point.
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
.collarbone {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    background-image: url("/images/collarbone.png");
    background-repeat: no-repeat;

    width: 353px;
    height: 471px;
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