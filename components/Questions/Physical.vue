<template>
  <div class="physical">
    <ReasonBlock v-for="block in blocks" :key="block.title" :title="block.title" :image="block.image" @reason="reason" />
  </div>
</template>

<script>
import ReasonBlock from "../Kit/ReasonBlock.vue";

export default {
  name: "Physical",
  components: {
    ReasonBlock,
  },

  data() {
    return {
      blocks: [
        {
          title: "Chronic pain",
          image: "/images/reasons/stress.png",
        },
        {
          title: "Joint and Muscle Pain",
          image: "/images/reasons/anxiety.png",
        },
        {
          title: "Stress-Related Digestive Issues",
          image: "/images/reasons/stress2.png"
        },
        {
          title: "Chronic Fatigue",
          image: "/images/reasons/chronic.png",
        },
        {
          title: "Back pain",
          image: "/images/reasons/headache.png",
        },
        {
          title: "Hypertension",
          image: "/images/reasons/headache.png",
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
.physical {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  max-width: 350px;
}
</style>