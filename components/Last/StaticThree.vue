<template>
  <div class="static-three">
    <div class="static-three__title">
      <div>3 million users</div>
      have chosen Slowdive
    </div>

    <div class="static-three__image"></div>

    <div class="static-three__text">103 people bought a tapping plan in the <b>last hour</b></div>

    <div class="static-three__nicknames">
      <div class="nickname-block" v-for="block in blocks">
        <div class="nickname-block__icon"></div>
        <div class="nickname-block__nick">{{ block }}</div>
        <div class="nickname-block__text">1 month plan</div>
      </div>
    </div>

    <div class="static-three__nicknames two">
      <div class="nickname-block" v-for="block in blocksTwo">
        <div class="nickname-block__icon"></div>
        <div class="nickname-block__nick">{{ block }}</div>
        <div class="nickname-block__text">1 month plan</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticThree",

  data() {
    return {
      blocks: [
        "willie.j...",
        "dolora m...",
        "christina mo...",
      ],

      blocksTwo: [
        "tanya...",
        "jessic...",
        "monica...",
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.static-three {
  background-color: #F5EADE;
  padding: 26px 0px 48px 0px;

  width: 100%;

  &__title {
    text-align: center;

    color: #3C3028;
    font-family: "Noto Serif HK";
    font-size: 28px;
    font-weight: 400;

    div {
      color: #CE8D78;
      font-weight: 700;
    }
  }

  &__image {
    margin-top: 13px;

    background-image: url("/images/last/peoples.png");
    background-repeat: no-repeat;
    background-size: cover;

    width: 100%;
    height: 340px;
  }

  &__text {
    margin-top: 13px;
    text-align: center;
    font-size: 15px;
    font-family: "Poppins";
    font-weight: 500;
    color: #302823;
  }

  &__nicknames {
    margin-top: 16px;

    display: flex;
    align-items: center;
    gap: 16px;

    // position: absolute;
    margin-left: -60px;
    overflow: hidden;

    &.two {
      margin-left: -10px
    }

    .nickname-block {
      border: 1px solid #E3D5CA;
      padding: 8px;
      border-radius: 100px;

      display: flex;
      align-items: center;
      flex-shrink: 0;
      gap: 6px;

      background-color: #ECDFD4;

      &__icon {
        background-image: url("/icons/person.svg");
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
      }

      &__nick {
        font-family: "Poppins";
        color: #B2A59D;
        font-size: 15px;
        font-weight: 400;
      }

      &__text {
        font-family: "Poppins";
        color: #534E4A;
        font-size: 15px;
        font-weight: 400;
      }
    }
  }
}
</style>