<template>
  <div class="static-two">
    <div class="static-two__title">
      Nikita, you’ll
      <div>also get</div>
    </div>

    <div class="static-two__blocks">
      <div class="static-two__blocks-block">
        <div class="static-two__blocks-block__icon">
          <img src="/images/last/last_image_one.svg">
        </div>

        <div class="static-two__blocks-block__text">
          Unlimited access to 1000+ meditations, life coaching, stories, music,
          & nature sounds
        </div>
      </div>

      <div class="static-two__blocks-block reverse">
        <div class="static-two__blocks-block__icon">
          <img src="/images/last/last_image_two.svg">
        </div>

        <div class="static-two__blocks-block__text">
          Fall asleep, reduce stress and anxiety and find peace effortlessly whenever you need
        </div>
      </div>

      <div class="static-two__blocks-block">
        <div class="static-two__blocks-block__icon">
          <img src="/images/last/last_image_three.svg">
        </div>

        <div class="static-two__blocks-block__text">
          Exclusive content from top mindfulness experts, psychologists, and therapists
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.static-two {
  padding: 26px 20px;

  &__title {
    text-align: center;

    font-family: "Geometria";
    color: #534E4A;

    font-size: 28px;
    font-weight: 700;

    div {
      font-weight: 500;
      color: #B87057;
      font-size: 32px;
    }
  }

  &__blocks {
    margin-top: 32px;

    &-block {
      display: flex;
      align-items: center;
      gap: 24px;

      &.reverse {
        flex-direction: row-reverse;
      }

      &__text {
        color: #302823;
        font-family: "Poppins";
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
}
</style>