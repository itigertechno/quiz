<template>
  <div class="uiheader">
    <div class="uiheader__top">
      <div class="uiheader__top-wrapper">
        <!-- <button type="button" class="uiheader__top-wrapper__prev" @click="$emit('goBack')" v-if="isBack || step !== '1'">
          <img src="/icons/goback.svg" />
        </button>

        <div v-else style="width: 30px" /> -->

        <div class="uiheader__top-wrapper__logo">
          <img src="/icons/logo.svg" />
          <div class="uiheader__top-wrapper__logo-text">
            <p>Slowdive</p>
            <span>Tapping Meditation</span>
          </div>
        </div>
      </div>

      <div class="uiheader__count" v-if="step <= quizLength">
        <span>{{ step }}</span>/{{ quizLength }}
      </div>

      <div class="uiheader__count" v-else></div>
    </div>

    <div class="uiheader__progress" v-if="step <= quizLength">
      <div class="uiheader__progress-wrapper">
        <div v-if="!noBorder" class="uiheader__progress-wrapper__line" :style="{ width: progress }" />
      </div>
    </div>

    <div class="uiheader__line" v-else></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      default: "100%",
      type: String,
    },

    step: {
      default: "1",
      type: String,
    },

    noBorder: {
      type: Boolean,
      default: false,
    },

    isBack: {
      type: Boolean,
      default: true,
    },

    quizLength: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.uiheader {
  margin-top: 10px;
  width: 100%;
  z-index: 10;
  font-family: "Geometria";
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF9EF;

  &__line {
    background: #ECDFD4;
    height: 3px;
    width: 100%;
    margin-top: 10px;
  }

  &__top {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 20px;
    gap: 133px;

    &-wrapper {
      display: flex;
      align-items: center;
      gap: 16px;

      &__prev {
        background: none;
        border: none;
        display: flex;
        margin: 0;
        padding: 0;
        cursor: pointer;

        i {
          font-size: 32px;
          color: #8891aa;
          line-height: 70%;
        }
      }

      &__logo {
        display: flex;
        align-items: center;
        font-weight: bold;
        gap: 12px;

        img {
          // width: 24px;
          height: 28px;
        }

        &-text {
          p {
            margin: 0;
            font-size: 15px;
          }

          span {
            font-weight: 400;
            line-height: 0.9;
            font-size: 14px;
            margin-top: 2px;
          }
        }
      }
    }
  }

  &__count {
    display: flex;
    align-items: center;

    font-size: 20px;

    span {
      color: #D29881;
    }
  }

  &__progress {
    margin-top: 10px;
    width: 100%;
    position: relative;
    box-sizing: border-box;

    &-wrapper {
      &__line {
        display: flex;
        align-items: center;
        background: #CE8C74;
        height: 2px;
        border-radius: 10px;


        &::after {
          content: "";
          position: absolute;
          background: #ECDFD4;
          width: 100%;
          height: 3px;
          z-index: -1;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
