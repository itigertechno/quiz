<template>
  <div class="feel">
    <NoteBlock :title="`Embrace Body Awareness`"
      :note="`Sometimes feeling disconnected from your body can be a signal to delve deeper into self-awareness.`" />

    <div class="feel__title">Do you feel fully connected <br> with your body?</div>

    <div class="feel__selector">
      <KitSelector :items="items" />
    </div>
  </div>
</template>

<script>
export default {
  name: "StepEleven",

  data() {
    return {
      items: [
        {
          emoji: "😩",
          title: "Not at all",
        },
        {
          emoji: "🙁",
          title: "A little bit",
        },
        {
          emoji: "😐",
          title: "Sometimes",
        },
        {
          emoji: "🙂",
          title: "Often"
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
  margin-top: 16px;

  &__title {
    margin-top: 44px;
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