<template>
  <div class="loading-block">
    <div class="loading-block__block">
      <div class="loading-block__block-left">
        <div class="loading-block__block-left__icon">
          <img src="/icons/stress_icon.png">
        </div>

        <div class="loading-block__block-left__text">
          <div class="loading-block__block-left__text--title">Level of</div>
          <div class="loading-block__block-left__text--subtitle">Stress</div>
        </div>
      </div>

      <div class="loading-block__block-loader">
        <div class="loader__loading" v-if="loadingFirst">
          <div class="loader__loading-percents">{{ percentsFirst }}%</div>
          <div class="loader__loading-circle"></div>
        </div>

        <div class="loader__loaded" v-if="loadedFirst"></div>
      </div>
    </div>

    <div class="loading-block__line"></div>

    <div class="loading-block__block" :class="{ 'not-active': percentsSecond < 1 }">
      <div class="loading-block__block-left">
        <div class="loading-block__block-left__icon">
          <img src="/icons/frustration_icon.png">
        </div>

        <div class="loading-block__block-left__text">
          <div class="loading-block__block-left__text--title">Level of</div>
          <div class="loading-block__block-left__text--subtitle">Frustration</div>
        </div>
      </div>

      <div class="loading-block__block-loader">
        <div class="loader__loading" v-if="loadingSecond">
          <div class="loader__loading-percents">{{ percentsSecond }}%</div>
          <div class="loader__loading-circle"></div>
        </div>

        <div class="loader__loaded" v-if="loadedSecond"></div>
      </div>
    </div>

    <div class="loading-block__line"></div>

    <div class="loading-block__block" :class="{ 'not-active': percentsThird < 1 }">
      <div class="loading-block__block-left">
        <div class="loading-block__block-left__icon">
          <img src="/icons/anxiety_icon.png">
        </div>

        <div class="loading-block__block-left__text">
          <div class="loading-block__block-left__text--title">Level of</div>
          <div class="loading-block__block-left__text--subtitle">Anxiety</div>
        </div>
      </div>

      <div class="loading-block__block-loader">
        <div class="loader__loading" v-if="loadingThird">
          <div class="loader__loading-percents">{{ percentsThird }}%</div>
          <div class="loader__loading-circle"></div>
        </div>

        <div class="loader__loaded" v-if="loadedThird"></div>
      </div>
    </div>

    <div class="loading-block__line"></div>

    <div class="loading-block__block" :class="{ 'not-active': percentsFourth < 1 }">
      <div class="loading-block__block-left">
        <div class="loading-block__block-left__icon">
          <img src="/icons/lack_icon.png">
        </div>

        <div class="loading-block__block-left__text">
          <div class="loading-block__block-left__text--title">Level of</div>
          <div class="loading-block__block-left__text--subtitle">Lack of focus</div>
        </div>
      </div>

      <div class="loading-block__block-loader">
        <div class="loader__loading" v-if="loadingFourth">
          <div class="loader__loading-percents">{{ percentsFourth }}%</div>
          <div class="loader__loading-circle"></div>
        </div>

        <div class="loader__loaded" v-if="loadedFourth"></div>
      </div>
    </div>

    <ResultModal v-if="resultModal" @closeModal="contTimer" />
  </div>
</template>

<script>
import ResultModal from './ResultModal.vue';

export default {
  name: "LoadingBlock",

  components: { ResultModal },

  data() {
    return {
      percentsFirst: 0,
      percentsSecond: 0,
      percentsThird: 0,
      percentsFourth: 0,

      loadingFirst: true,
      loadedFirst: false,

      loadingSecond: false,
      loadedSecond: false,

      loadingThird: false,
      loadedThird: false,

      loadingFourth: false,
      loadedFourth: false,

      firstTimer: null,
      secondTimer: null,
      thirdTimer: null,
      fourthTimer: null,

      miliseconds: 1,

      resultModal: false,
    }
  },

  mounted() {
    this.firstTimer = setInterval(() => {
      this.percentsFirst += 1;
    }, this.miliseconds)
  },

  methods: {
    contTimer() {
      this.resultModal = false;
      this.loadingThird = true;

      this.thirdTimer = setInterval(() => {
        this.percentsThird += 1;
      }, this.miliseconds)
    }
  },

  watch: {
    percentsFirst() {
      if (this.percentsFirst === 100) {
        clearInterval(this.firstTimer);

        this.loadingFirst = false;
        this.loadedFirst = true;

        this.loadingSecond = true;

        this.secondTimer = setInterval(() => {
          this.percentsSecond += 1;
        }, this.miliseconds)
      }
    },

    percentsSecond() {
      if (this.percentsSecond === 100) {
        clearInterval(this.secondTimer);

        this.loadingSecond = false;
        this.loadedSecond = true;
        this.resultModal = true;
      }
    },

    percentsThird() {
      if (this.percentsThird === 100) {
        clearInterval(this.thirdTimer);

        this.loadingThird = false;
        this.loadedThird = true;

        this.loadingFourth = true;

        this.fourthTimer = setInterval(() => {
          this.percentsFourth += 1;
        }, this.miliseconds)
      }
    },

    percentsFourth() {
      if (this.percentsFourth === 100) {
        clearInterval(this.fourthTimer);

        this.loadingFourth = false;
        this.loadedFourth = true;

        this.$store.commit("nextPage")
      }
    }
  }
}
</script>

<style scoped lang="scss">
.loading-block {
  padding: 16px;
  border: 1px solid #E3D5CA;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  gap: 12.5px;

  $self: &;

  .not-active {
    #{$self}__block {
      &-left {
        &__icon {
          opacity: 0.5;
        }

        &__text {

          &--title,
          &--subtitle {
            opacity: 0.5;
          }
        }
      }
    }
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-left {
      display: flex;
      align-items: center;
      gap: 12px;

      &__icon {
        width: 48px;
        height: 48px;
      }

      &__text {
        font-family: "Poppins";

        &--title {
          font-weight: 400;
          color: #988D85;
          font-size: 15px;
        }

        &--subtitle {
          font-weight: 500;
          color: #302823;
          font-size: 16px;
          margin-top: 4px;
        }
      }
    }

    &-loader {
      .loader__loading {
        display: flex;
        align-items: center;
        gap: 12px;

        &-percents {
          color: #B87057;
          font-family: "Poppins";
          font-weight: 500;
          font-size: 16px;
        }

        &-circle {
          width: 28px;
          height: 28px;

          border-radius: 50%;

          border: 3px solid #EDD6CD;
        }
      }

      .loader__loaded {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #CE8C74;

        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
          content: "";
          display: block;
          background-image: url("/icons/check.svg");
          background-repeat: no-repeat;
          background-position: center center;

          width: 18px;
          height: 18px;
        }
      }
    }
  }

  &__line {
    width: 100%;
    height: 1px;
    background-color: #F1E5DA;
  }
}
</style>