<template>
  <div class="practice">
    <div class="practice__title">
      Do you practice<br> mindfulness, meditation, or <br>relaxation?
    </div>

    <div class="practice__buttons">
      <KitButton block bigButton notCenter v-for="(button, index) in buttons" :key="index"
        :selected="index === selectedButton" @click="selectedButton = index">
        {{ button.text }}
      </KitButton>
    </div>

    <div class="practice__block" v-if="selectedButton === 3">
      <NoteBlock :title="`Don't worry!`" :note="`Never too late to start! EFT is a gentle 
        and effective way to ease into 
        mindfulness. Begin your journey to 
        relaxation and inner peace with 
        tapping—it's a perfect first step.`" />
    </div>
  </div>
</template>

<script>
import KitButton from '../Kit/KitButton.vue';
import NoteBlock from '../Kit/NoteBlock.vue';

export default {
  name: "StepEight",
  components: { KitButton, NoteBlock },

  data() {
    return {
      buttons: [
        {
          text: "💪 Every day",
        },
        {
          text: "🤔 Occasionally",
        },
        {
          text: "😐 Rarely",
        },
        {
          text: "❌ Never"
        },
      ],

      selectedButton: null,
    }
  }
}
</script>

<style scoped lang="scss">
.practice {
  padding: 20px;
  margin-top: 8px;

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