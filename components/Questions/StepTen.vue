<template>
  <div class="improvement">
    <div class="improvement__title">
      What area of your life <br />currently needs the most<br />
      improvement?
    </div>

    <div class="improvement__buttons">
      <KitButton
        bigButton
        notCenter
        block
        spaceFlex
        flex
        v-for="(button, index) in buttons"
        :key="index"
        :selected="selectedButtons.includes(index)"
        @click="toggleSelectedButton(index)"
        class="emotions__buttons-button"
      >
        {{ button }}
        <input
          type="checkbox"
          :id="index"
          class="custom-checkbox"
          :checked="selectedButtons.includes(index)"
        />
        <label :for="index" />
      </KitButton>
    </div>
  </div>
</template>

<script>
import KitButton from "../Kit/KitButton.vue";

export default {
  name: "StepTen",
  components: { KitButton },

  data() {
    return {
      selectedButtons: [],
      buttons: [
        "❤️ Health",
        "💰 Money",
        "💼 Job",
        "💕 Relationship",
        "🪬 Spirituality",
        "🤔 Other",
      ],
    };
  },

  methods: {
    toggleSelectedButton(index) {
      let indexOfButton = this.selectedButtons.indexOf(index);

      if (indexOfButton !== -1) {
        this.selectedButtons.splice(indexOfButton, 1);
      } else {
        this.selectedButtons.push(index);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.improvement {
  padding: 20px;
  margin-top: 12px;

  width: 100%;
  box-sizing: border-box;

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