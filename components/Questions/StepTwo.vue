<template>
  <div class="second">
    <div class="second__title">
      What is your primary reason for trying tapping meditation?
    </div>

    <div class="second__body">
      <Physical v-if="type === 'physical'" />
      <Emotional v-if="type === 'emotional'" />
    </div>
  </div>
</template>

<script>
import Physical from "./Physical.vue";
import Emotional from "./Emotional.vue";

export default {
  name: "StepTwo",

  computed: {
    type() {
      return this.$store.getters.selectType;
    },
  },

  components: {
    Physical,
    Emotional,
  },
};
</script>

<style scoped lang="scss">
.second {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding: 20px;

  &__title {
    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    line-height: 28px;

    max-width: 350px;
  }
}
</style>