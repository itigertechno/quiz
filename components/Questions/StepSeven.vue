<template>
  <div class="emotions">
    <div class="emotions__title">
      What emotions do you find difficult to handle?
    </div>

    <div class="emotions__buttons">
      <KitButton
        flex
        padding16
        bigButton
        notCenter
        v-for="(button, index) in buttons"
        :key="index"
        :selected="selectedButtons[index]"
        class="emotions__buttons-button"
      >
        <input 
          type="checkbox" 
          :id="index"
          class="custom-checkbox"
          v-model="selectedButtons[index]"
        />
        <label :for="index">{{ button }}</label>
      </KitButton>
    </div>
  </div>
</template>

<script>
import KitButton from "../Kit/KitButton.vue";
import NoteBlock from "../Kit/NoteBlock.vue";

export default {
  name: "StepSeven",
  components: { KitButton, NoteBlock },

  data() {
    return {
      buttons: [
        "Anger",
        "Fear",
        "Anxiety",
        "Sadness",
        "Feeling insecure",
        "Despair",
        "Disappointment",
        "Embarrassment",
        "Frustration",
        "Overwhelm",
        "Other",
      ],

      selectedButtons: [],
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
.emotions {
  padding: 20px;
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

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
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-bottom: 12px;

    max-width: 350px;
  }

  &__block {
    margin-top: 12px;
  }
}
</style>