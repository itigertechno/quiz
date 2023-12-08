<template>
  <div class="emotional">
    <div class="emotional__title">
      How would you describe <br>your current emotional <br>state?
    </div>

    <div class="emotional__buttons">
      <ReasonBlock v-for="block in blocks" :key="block.title" :title="block.title" :image="block.image"
        @reason="reason" />
    </div>
  </div>
</template>

<script>
import ReasonBlock from "../Kit/ReasonBlock.vue";

export default {
  name: "EmotionalTwo",
  components: {
    ReasonBlock,
  },

  data() {
    return {
      blocks: [
        {
          title: "Calm",
          image: "/images/reasons/calm.png"
        },
        {
          title: "Anxious",
          image: "/images/reasons/anxiety.png",
        },
        {
          title: "Worried",
          image: "/images/reasons/emotional.png"
        },
        {
          title: "Stressed",
          image: "/images/reasons/stress.png",
        },
        {
          title: "Depressed",
          image: "/images/reasons/depressed.png",
        },
        {
          title: "Other",
          image: "/images/reasons/other.png"
        }
      ]
    }
  },

  methods: {
    reason(reason) {
      this.$store.commit("setReason", reason);
      this.$store.commit("nextPage");
    }
  }
}
</script>

<style scoped lang="scss">
.emotional {
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-top: 20px;

  width: 100%;

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
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>