<template>
  <div class="sympthoms">
    <div class="sympthoms__title">
      Do you often feel physical <br />symptoms like headaches,<br />stomachaches,
      or body <br />tension?
    </div>

    <div class="sympthoms__buttons">
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

    <div class="sympthoms__block" v-if="selectedButton !== null">
      <NoteBlock
        :title="buttons[selectedButton].text"
        :note="buttons[selectedButton].description"
      />
    </div>
  </div>
</template>

<script>
import KitButton from "../Kit/KitButton.vue";
import NoteBlock from "../Kit/NoteBlock.vue";

export default {
  name: "StepSix",
  components: { KitButton, NoteBlock },

  data() {
    return {
      buttons: [
        {
          text: "😀 Never",
          description:
            "Great to know you're not experiencing these issues! Maintaining your well-being is key",
        },
        {
          text: "🙂 Rarely",
          description:
            "That's good to hear. It's important to be aware of any changes in how often these occur.",
        },
        {
          text: "😐 Sometimes",
          description:
            "Occasional symptoms can still impact your well-being. Let's find out what might be triggering them.",
        },
        {
          text: "🙁 Occasionally",
          description:
            "Moderate symptoms observed. Let's explore patterns and consider solutions.",
        },
        {
          text: "😩 A lot",
          description:
            "Frequent symptoms noted. Let's identify causes and find relief strategies.",
        },
      ],

      selectedButton: null,
    };
  },
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

    border-bottom: 1px solid #f1e5da;
    padding-bottom: 12px;
  }

  &__block {
    margin-top: 12px;
  }
}
</style>