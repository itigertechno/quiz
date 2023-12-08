<template>
  <div class="embrace">
    <div class="embrace__logo"></div>

    <div class="embrace__body">
      <div class="embrace__body-title">
        Embrace EFT
        <div>Today!</div>
      </div>

      <div class="embrace__body-text">
        EFT and Tapping meditation are recognized by professionals, with a third endorsing EFT for stress and emotional
        regulation. Emphasizing self-awareness, these techniques are lauded for their contribution to emotional
        well-being.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepTwenty",
}
</script>

<style scoped lang="scss">
.embrace {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  &__logo {
    background-image: url("/images/embrace_logo.svg");
    background-repeat: no-repeat;

    width: 353px;
    height: 434px;

    z-index: -2;
    margin-top: -80px;
  }

  &__body {
    margin-top: 23px;
    text-align: center;

    &-title {
      font-family: "Noto Serif HK";
      font-weight: 500;
      font-size: 20px;
      color: #302823;

      div {
        font-weight: 600;
        font-size: 28px;
        color: #14AF68;
        line-height: 32px;
      }
    }

    &-text {
      margin-top: 16px;
      font-family: "Poppins";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #534E4A;
    }
  }
}
</style>