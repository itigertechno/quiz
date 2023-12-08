<template>
  <div class="about">
    <div class="about__title">
      Do you know something <br />about tapping meditation?
    </div>

    <div class="about__buttons">
      <KitButton
        block
        bigButton
        notCenter
        v-for="(button, index) in buttons"
        :key="index"
        :selected="index === selectedButton"
        @click="selectedButton = index"
      >
        {{ button.text }}
      </KitButton>
    </div>

    <div class="about__block" v-if="selectedButton !== null">
      <NoteBlock
        :title="'EFT = Tapping'"
        :note="`EFT (Emotional Freedom Technique), 
        or tapping, involves stimulating certain 
        body points to balance energy and reduce 
        stress, much like acupuncture but using 
        fingertips instead of needles. It's a 
        self-help tool for relieving a range of 
        emotional and physical issues.`"
      />
    </div>
  </div>
</template>

<script>
import KitButton from "../Kit/KitButton.vue";
import NoteBlock from "../Kit/NoteBlock.vue";

export default {
  name: "StepFour",
  components: { KitButton, NoteBlock },

  data() {
    return {
      buttons: [
        { text: "💪 Yes, a lot" },
        { text: "🤔 A little bit" },
        { text: "😐 Don't know at all" },
      ],

      selectedButton: null,
    };
  },
};
</script>

<style scoped lang="scss">
.about {
  padding: 20px;
  margin-top: 8px;
  max-width: 350px;
  width: 100%;

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

    border-bottom: 1px solid #f1e5da;
    padding-bottom: 12px;
  }

  &__block {
    margin-top: 12px;
  }

  &__button {
    margin-top: 32px;
  }
}
</style>