<template>
  <div class="feel">
    <div class="feel__title">Have you been through a <br>tough experience that <br>affected your energy?</div>

    <div class="feel__selector">
      <KitSelector :items="items" />
    </div>
  </div>
</template>

<script>
import KitSelector from '../Kit/KitSelector.vue';

export default {
  name: "StepThirteen",
  components: { KitSelector },

  data() {
    return {
      items: [
        {
          emoji: "😩",
          title: "Yes, more than one",
          text: "I've experienced multiple tough events in my life that have drained my energy",
        },
        {
          emoji: "🙁",
          title: "Yes, one event",
          text: "I've had one significant event that deeply affected my energy.",
        },
        {
          emoji: "😐",
          title: "Yes, but it's behind me",
          text: "I've had a challenging experience in the past, but it no longer affects my energy",
        },
        {
          emoji: "🙂",
          title: "No, I've been fortunate",
          text: "I haven't faced tough events that significantly impacted my energy",
        },
        {
          emoji: "😀",
          title: "I'd rather not say",
          text: "I prefer not to discuss tough experiences that could affect my energy"
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