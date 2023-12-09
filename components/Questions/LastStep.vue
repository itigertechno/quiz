<template>
  <div class="last">
    <div class="last__title">
      Today is the day for a
      <div>new beginning</div>
    </div>

    <div class="last__graph"></div>

    <StaticOne />
    <StaticTwo />
    <StaticThree />
    <StaticFour />
    <StaticFive />

    <div class="last__button">
      <KitButton padding green defaultButton>Continue</KitButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastStep",
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

  &__button {
    padding: 20px;
    width: 100%;
  }
}
</style>