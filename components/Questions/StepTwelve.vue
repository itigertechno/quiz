<template>
  <div class="feel">
    <div class="feel__title">Is it easy for you to share <br>your thoughts and feelings<br> with others?</div>

    <div class="feel__selector">
      <KitSelector :items="items" />
    </div>
  </div>
</template>

<script>
import KitSelector from '../Kit/KitSelector.vue';

export default {
  name: "StepTwelve",
  components: { KitSelector },

  data() {
    return {
      items: [
        {
          emoji: "😩",
          title: "Rarely"
        },
        {
          emoji: "🙁",
          title: "Not really",
        },
        {
          emoji: "😐",
          title: "Sometimes",
        },
        {
          emoji: "🙂",
          title: "Usually",
        },
        {
          emoji: "😀",
          title: "Always"
        }
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.feel {
  margin-top: 152px;
  padding: 20px;

  &__title {
    text-align: center;
    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #302823;
  }

  &__selector {
    margin-top: 56px;

    display: flex;
    justify-content: center;
  }
}
</style>