<template>
  <div class="question">
    <div class="question__title">
      Do you often take time for <br>yourself and self-care?
    </div>

    <div class="question__buttons">
      <KitButton bigButton padding24 v-for="button, index in buttons" :key="index" :selected="index === selected"
        @click="select(index)">
        {{ button.emoji }}
      </KitButton>
    </div>
  </div>
</template>

<script>
import NoteBlock from '../Kit/NoteBlock.vue';
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepNineteen",
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
  },

  methods: {
    select(index) {
      this.selected = index;
      
      this.$store.commit("nextPage");
    }
  }
}
</script>

<style scoped lang="scss">
.question {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 214px;

  gap: 32px;

  padding: 20px;

  &__title {
    text-align: center;
    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #302823;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 24px;
  }
}
</style>