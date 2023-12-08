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
    }
  },

  mounted() {
    this.timer = setInterval(() => {
      this.value += 1;
    }, 50);
  },

  watch: {
    value() {
      if (this.value === 100) {
        clearInterval(this.timer);

        this.$router.push("/questions");
      }
    }
  }
}
</script>

<style scoped lang="scss">
.loader {
  display: flex;
  justify-content: center;

  &__circle {
    // position: relative;
    border: 2px solid #CE8C74;
    border-radius: 300px;
    padding: 12px;

    // &::before {
    //   content: "";

    //   position: absolute;
    //   inset: 0;
    //   border-radius: 300px;
    //   padding: 12px;


    //   border: 2px solid;
    //   // border-image: conic-gradient(from 90deg, #CE8C74, #F5EADE 0.1turn, #F5EADE 0.15turn, #CE8C74 0.25turn) 30;
    //   // animation: borderRotate 2500ms linear infinite forwards;
    // }

    &-image {
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

        color: #CE8C74;

        font-weight: 500;
        font-family: "Noto Serif HK";
        font-size: 32px;

        text-align: center;

        bottom: 56px;
      }
    }
  }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 90deg;
  inherits: true;
}

@keyframes borderRotate {
  100% {
    --angle: 420deg;
  }
}
</style>