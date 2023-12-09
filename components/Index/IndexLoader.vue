<template>
  <div class="loader">
    <div class="loader__circle">
      <div class="loader__circle-image">
        <div class="loader__circle-image__percent">{{ value }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexLoader",

  data() {
    return {
      value: 0,
      timer: null,
    };
  },

  mounted() {
    this.timer = setInterval(() => {
      this.value += 1;
    }, 20);
  },

  watch: {
    value() {
      if (this.value === 100) {
        clearInterval(this.timer);

        this.$router.push("/questions");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.loader {
  --offset: 10px;
  width: 245px;
  height: 413px;
  position: relative;
  border-radius: 300px;
  align-self: center;
  overflow: hidden;

  &::before {
    content: "";
    background: conic-gradient(#f5eade, #ce8c74);
    position: absolute;
    top: 50%;
    left: 50%;

    aspect-ratio: 1;
    width: 400px;
    animation: rotate 2s linear infinite;
  }

  &__circle {
    position: absolute;
    background-color: #FFF9EF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    inset: 0;
    z-index: 10;
    border-radius: 300px;
    margin: 2px;

    &-image {
      position: absolute;
      background-image: url(/images/index/loader.png);
      background-repeat: no-repeat;
      background-position: center center;

      position: relative;

      display: flex;
      justify-content: center;

      width: 232px;
      height: 400px;

      &__percent {
        position: absolute;

        color: #ce8c74;

        font-weight: 500;
        font-family: "Noto Serif HK";
        font-size: 32px;

        text-align: center;

        bottom: 56px;
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
  }

  to {
    transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
  }
}
</style>