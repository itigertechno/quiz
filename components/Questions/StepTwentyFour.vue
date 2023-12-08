<template>
  <div class="eft">
    <div class="eft__logo"></div>

    <div class="eft__body">
      <div class="eft__body-title">
        EFT - <span>{{ data.theme }}</span>!
      </div>

      <div class="eft__body-text">
        {{ data.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepTwentyFour",

  computed: {
    data() {
      return this.$store.getters.selectEft;
    },
  }
}
</script>

<style scoped lang="scss">
.eft {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  gap: 32px;

  &__logo {
    background-image: url("/images/eft_logo.svg");
    background-repeat: no-repeat;

    width: 353px;
    height: 434px;

    z-index: -2;
    margin-top: -80px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    text-align: center;

    &-title {
      font-family: "Noto Serif HK";
      font-weight: 700;
      font-size: 24px;
      color: #302823;

      span {
        color: #14AF68;
      }
    }

    &-text {
      font-family: "Poppins";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #534E4A;
    }
  }
}
</style>