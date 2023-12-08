<template>
  <div class="hear">
    <div class="hear__logo"></div>

    <div class="hear__body">
      <div class="hear__body-title">We Hear You</div>
      <div class="hear__body-text">
        Emotional state is an integral and vital aspect of our lives, akin to a breeze that brings a spectrum of feelings,
        ranging from joy to sorrow, and everything in between, enriching our journey with diversity and depth
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepFourteen",
}
</script>

<style scoped lang="scss">
.hear {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  gap: 32px;
  
  &__logo {
    background-image: url("/images/hear_logo.svg");
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
      color: #B87057;
    }

    &-text {
      font-family: "Poppins";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #534E4A;

      width: 353px;
    }
  }
}
</style>