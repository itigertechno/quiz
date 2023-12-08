<template>
  <div class="last">
    <div class="last__title">
      Today is the day for a
      <div>new beginning</div>
    </div>

    <div class="last__graph"></div>

    <TappingPlan />
  </div>
</template>

<script>
import TappingPlan from '../Last/TappingPlan.vue';

export default {
  name: "LastStep",

  components: { TappingPlan }
}
</script>

<style scoped lang="scss">
.last {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__title {
    text-align: center;

    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    color: #302823;

    div {
      color: #14AF68;
      font-size: 28px;
    }
  }

  &__graph {
    margin-top: 32px;

    background-image: url("/images/graph_last.svg");
    background-repeat: no-repeat;

    width: 353px;
    height: 180px;
  }
}
</style>