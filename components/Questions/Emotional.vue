<template>
  <div class="emotional">
    <ReasonBlock 
      v-for="block in blocks" 
      :key="block.title" 
      :title="block.title" 
      :image="block.image"
      @reason="reason"
    />
  </div>
</template>

<script>
import ReasonBlock from "../Kit/ReasonBlock.vue";

export default {
  name: "Emotional",
  components: {
    ReasonBlock,
  },

  data() {
    return {
      blocks: [
        {
          title: "Stress reduction",
          image: "/images/reasons/stress.png"
        },
        {
          title: "Anxiety management",
          image: "/images/reasons/anxiety.png",
        },
        {
          title: "Postpartum Discomforts",
          image: "/images/reasons/postpartum.png"
        },
        {
          title: "Emotional release",
          image: "/images/reasons/emotional.png",
        },
        {
          title: "Headache",
          image: "/images/reasons/headache.png",
        },
        {
          title: "Sleep Disorders",
          image: "/images/reasons/sleep.png"
        },
        {
          title: "Insomnia",
          image: "/images/reasons/insomnia.png"
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  max-width: 350px;
}
</style>