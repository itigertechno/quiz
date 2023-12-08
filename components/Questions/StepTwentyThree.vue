<template>
  <div class="sympthoms">
    <div class="sympthoms__title">
      How often do you take time <br>for yourself and self-care?
    </div>

    <div class="sympthoms__buttons">
      <KitButton
        block
        bigButton
        notCenter
        v-for="(button, index) in buttons"
        :key="index"
        @click="select"
      >
        {{ button }}
      </KitButton>
    </div>
  </div>
</template>

<script>
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepTwentyThree",
  components: { KitButton },

  data() {
    return {
      buttons: [
        "😀 Every day",
        "🙂 Ocasionally",
        "😐 Rarely",
        "❌ Never",
      ],

      selectedButton: null,
    };
  },

  methods: {
    select(index) {
      this.selectedButton = index;
      this.$store.commit("nextPage");
    }
  }
};
</script>

<style scoped lang="scss">
.sympthoms {
  padding: 20px;
  margin-top: 8px;

  &__title {
    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #302823;

    text-align: center;
  }

  &__buttons {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>