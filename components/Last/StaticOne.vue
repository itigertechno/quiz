<template>
  <div class="tapping-plan">
    <div class="tapping-plan__title">
      Your personal tapping plan
      <div>is Ready</div>
    </div>

    <div class="tapping-plan__info">
      <div class="tapping-plan__info-block">
        <div class="tapping-plan__info-block__icon">🎯</div>

        <div class="tapping-plan__info-block__text">
          <div class="tapping-plan__info-block__text--title">Goal</div>
          <div class="tapping-plan__info-block__text--subtitle">Stress reduction</div>
        </div>
      </div>

      <div class="tapping-plan__info-block">
        <div class="tapping-plan__info-block__icon">🗓️</div>

        <div class="tapping-plan__info-block__text">
          <div class="tapping-plan__info-block__text--title">Tapping Frequency</div>
          <div class="tapping-plan__info-block__text--subtitle">3 times per week</div>
        </div>
      </div>

      <div class="tapping-plan__info-blocks">
        <div class="block">
          <div class="block__icon">⏱️</div>

          <div class="block__text">
            <div class="block__text-title">
              Tapping Time
            </div>

            <div class="block__text-subtitle">
              30 min
            </div>
          </div>
        </div>

        <div class="block">
          <div class="block__icon">😖</div>

          <div class="block__text">
            <div class="block__text-title">
              Stress level
            </div>

            <div class="block__text-subtitle">
              High
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tapping-plan__text">
      Goals for the next 3 months also include:<br>
      ✅ Improve sleep
    </div>
  </div>
</template>

<style scoped lang="scss">
.tapping-plan {
  padding: 31px 20px 62px 20px;

  background-color: #F5EADE;
  width: 100%;
  box-sizing: border-box;

  &__title {
    text-align: center;

    line-height: 28px;

    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    color: #302823;

    div {
      color: #B87057;
    }
  }

  &__info {
    margin-top: 17px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    &-block {
      background-color: #FFF9EF;
      padding: 12px;
      border: 1.4px solid #ECDFD4;
      border-radius: 12px;

      display: flex;
      align-items: center;
      gap: 8px;

      &__text {
        font-family: "Poppins";

        &--title {
          font-size: 13px;
          font-weight: 500;
          color: #988D85;
        }

        &--subtitle {
          font-family: "Poppins";
          font-weight: 400;
          color: #302823;
          margin-top: 2px;

          font-size: 16px;
        }
      }
    }

    &-blocks {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 12px;

      .block {
        background-color: #FFF9EF;
        padding: 12px;
        border: 1.4px solid #ECDFD4;
        border-radius: 12px;

        display: flex;
        align-items: center;
        gap: 8px;

        width: 100%;

        &__text {
          font-family: "Poppins";

          &-title {
            font-size: 13px;
            font-weight: 500;
            color: #988D85;
          }

          &-subtitle {
            font-family: "Poppins";
            font-weight: 400;
            color: #302823;
            margin-top: 2px;

            font-size: 16px;
          }
        }
      }
    }
  }

  &__text {
    margin-top: 17px;
    padding: 0 13px;

    font-family: "Poppins";
    font-weight: 400;
  }
}
</style>