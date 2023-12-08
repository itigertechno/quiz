<template>
  <div class="reported">
    <div class="reported__header"></div>

    <div class="reported__title">
      Reported by
      <div>The New Your Times</div>
    </div>

    <div class="reported__block">
      <div class="reported__block-text">
        ...If we can help our patients tolerate their
        own bodily sensations, they’ll be able to
        process the trauma themselves...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepNinth"
}
</script>

<style scoped lang="scss">
.reported {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    background-image: url("/images/ninth_logo.svg");
    background-repeat: no-repeat;

    width: 295px;
    height: 317px;

    margin-top: -40px;
    z-index: -2;
  }

  &__title {
    margin-top: 18px;

    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    color: #302823;

    div {
      font-family: "Noto Serif HK";
      font-weight: 700;
      font-size: 24px;
    }
  }

  &__block {
    margin-top: 32px;
    border: 1px solid #E5D5CA;
    border-radius: 29px;
    width: 353px;

    text-align: center;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    color: #534E4A;
    line-height: 24px;

    padding-top: 38px;
    padding-bottom: 45px;


    &-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 26px;

      &::before {
        content: "";
        display: block;
        background-image: url("/icons/mark.svg");
        background-repeat: no-repeat;
        width: 25px;
        height: 21px;
      }
    }
  }
}
</style>