<template>
  <div class="question">
    <NoteBlock :title="'EFT Slowdive Team'"
      :note="`We're here to support you, and EFT tapping can help you through those moments.`" />

    <div class="question__body">
      <div class="question__body-title">
        Do you often experience <br>discomfort or negativity?
      </div>

      <div class="question__body-buttons">
        <KitButton bigButton padding24 v-for="button, index in buttons" :key="index" :selected="index === selected"
          @click="selected = index">
          {{ button.emoji }}
        </KitButton>
      </div>
    </div>
  </div>
</template>

<script>
import NoteBlock from '../Kit/NoteBlock.vue';
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepSeventeen",
  components: { NoteBlock, KitButton },

  data() {
    return {
      buttons: [
        {
          emoji: "👎",
          data: "dislike"
        },
        {
          emoji: "😐",
          data: "normal"
        },
        {
          emoji: "👍",
          data: "like",
        }
      ],

      selected: null,
    }
  }
}
</script>

<style scoped lang="scss">
.question {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 102px;

  padding: 20px;

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    &-title {
      text-align: center;
      font-family: "Noto Serif HK";
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #302823;
    }

    &-buttons {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
}
</style>