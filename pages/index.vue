<template>
  <div class="main">
    <div class="main__wrapper">
      <div class="main__wrapper-header">
        <h1 class="main__wrapper-header__title">
          Tapping will change your <br /><span>LIFE</span>
        </h1>
      </div>

      <div class="main__wrapper-body">
        <IndexLoader />
      </div>

      <div class="main__wrapper-footer">
        <div class="main__wrapper-footer__text">
          <div>
            <span>3 250 000<span class="symbol">+</span></span>
            <span class="text">people</span>
          </div>
          <h4>already use Slowdive EFT therapy</h4>
        </div>

        <div class="main__wrapper-footer__icons">
          <div class="main__wrapper-footer__icons--appstore"></div>

          <div class="main__wrapper-footer__icons--googleplay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexLoader from "../components/Index/IndexLoader.vue";

export default {
  components: {
    IndexLoader,
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;

  &__wrapper {
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 27px;

    &-header {
      &__title {
        font-size: 28px;
        line-height: 28px;
        font-family: "Noto Serif HK";
        text-align: center;
        color: #302823;

        span {
          font-weight: 700;
          line-height: 48px;
          font-size: 48px;
          color: #ce8c74;
        }
      }
    }

    &-body {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 27px;

      &__text {
        text-align: center;

        font-size: 36px;

        div {
          span {
            font-weight: 700;
            font-size: 40px;
            color: #ce8c74;
            font-family: "Noto Serif HK";

            .symbol {
              font-size: 36px;
            }
          }

          .text {
            font-family: "Effra";
            font-weight: 300;
            color: #302823;
          }
        }

        h4 {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          margin-bottom: 0;
        }
      }

      &__icons {
        display: flex;
        align-items: center;
        gap: 32px;

        &--appstore {
          background-image: url(/icons/Index/appstore.svg);
          background-repeat: no-repeat;

          width: 120px;
          height: 32px;
        }

        &--googleplay {
          background-image: url(/icons/Index/googleplay.svg);
          background-repeat: no-repeat;

          width: 120px;
          height: 32px;
        }
      }
    }
  }
}
</style>