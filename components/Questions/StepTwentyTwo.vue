<template>
  <div class="sympthoms">
    <div class="sympthoms__title">
      How do you envision tapping <br>can affect your emotional<br> and physical wellness?
    </div>

    <div class="sympthoms__buttons">
      <KitButton
        block
        bigButton
        notCenter
        v-for="(button, index) in buttons"
        :key="index"
        @click="select(index, button.theme, button.text)"
      >
       {{ button.emoji }} {{ button.theme }}
      </KitButton>
    </div>
  </div>
</template>

<script>
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepTwentyTwo",
  components: { KitButton },

  data() {
    return {
      buttons: [
        {
          emoji: "😀",
          theme: "Feel better",
          text: `Unlock the Power of EFT and Feel Better Today! Research indicates a significant improvement in emotional wellness among women who incorporate EFT into their routine, with a remarkable 90% reporting a more positive outlook.`
        },
        {
          emoji: "⚡",
          theme: "More energy",
          text: `Energize Your Life with EFT! This scientifically-backed technique has been shown to elevate energy levels, providing a natural boost that revitalizes both mind and body for everyday challenges`
        },
        {
          emoji: "🌿",
          theme: "Soothe stress",
          text: `Improve Your Sleep with EFT. By calming the mind and easing the nervous system, EFT helps pave the way for a deeper, more restorative slumber, as supported by sleep quality assessments.`
        },
        {
          emoji: "🌙",
          theme: "Improve sleep",
          text: `Improve Your Sleep with EFT. By calming the mind and easing the nervous system, EFT helps pave the way for a deeper, more restorative slumber, as supported by sleep quality assessments.`
        },
        {
          emoji: "⚖️",
          theme: "Balance emotions",
          text: `Energize Your Life with EFT! This scientifically-backed technique has been shown to elevate energy levels, providing a natural boost that revitalizes both mind and body for everyday challenges`
        },
        {
          emoji: "🔄",
          theme: "Restore balance",
          text: `Restore Your Inner Balance with EFT. The methodical approach of EFT aligns with neurological principles, aiding in the reestablishment of emotional and energetic equilibrium for a more grounded existence.`
        }
      ],

      selectedButton: null,
    };
  },

  methods: {
    select(index, theme, text) {
      this.selectedButton = index;
      this.$store.commit("nextPage");
      this.$store.commit("setEft", { theme: theme, text: text });
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