<template>
  <div class="last">
    <div class="last__title">
      Today is the day for a
      <div>new beginning</div>
    </div>

    <div class="last__graph"></div>

    <StaticOne />
    <StaticTwo />
    <StaticThree />
    <StaticFour ref="scrollTarget" />

    <div class="last__claim">
      <KitButton @click="scrollToStaticFour" padding defaultButton green >CLAIM MY PLAN</KitButton>
    </div>

    <div class="last__payments"></div>
    <StaticFive />
  </div>
</template>

<script>
import { scrollTo } from "vue-scrollto";

export default {
  name: "LastStep",
  methods: {
    scrollToStaticFour() {
      // Используйте vue-scrollto для плавной прокрутки к элементу
      scrollTo(this.$refs.scrollTarget.$el, 500, { offset: -50 }); // 500 - время анимации в миллисекундах, offset - отступ от верха
    },
  },
};
</script>

<style scoped lang="scss">
.last {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__title {
    text-align: center;

    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    color: #302823;

    div {
      color: #14af68;
      font-size: 28px;
    }
  }

  &__graph {
    margin-top: 32px;

    background-image: url("/images/graph_last.svg");
    background-repeat: no-repeat;

    width: 353px;
    height: 180px;
  }

  &__button {
    width: 100%;
  }

   &__claim {
    position: sticky;
    bottom: 0;
    margin-top: 32px;
    width: 100%;
    
  }

  &__payments {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/icons/payments.svg");
    background-repeat: no-repeat;
    
    width: 100%;
    height: 100px;
  }
}

</style>