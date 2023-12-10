<template>
  <div class="plans">
    <div class="plans__title">
      Continue your
      <div>JOURNEY</div>
    </div>

    <div class="plans__blocks">
      <PlanRadio
        v-for="button, index in buttons"
        :key="button.title"
        :id="index"
        :title="button.title" 
        :old="button.old" 
        :actual="button.actual" 
        :dayDollar="button.dollar"
        :dayCents="button.cents"
        :top="button.top"
        :recommended="button.recommended"
        :value="button.title"
        v-model="selectedValue"
      />
    </div>

    <div class="plans__text">
      People using plan for 3 months<br> achieve twice as many results as for 1 month
    </div>

  </div>
</template>

<script>
export default {
  name: "StaticFour",

  data() {
    return {
      selectedValue: "4-WEEK",
      buttons: [
        {
          title: "1-WEEK",
          old: "14.14",
          actual: "7.21",
          dollar: "1",
          cents: "03",
        },
        {
          title: "4-WEEK",
          old: "30.99",
          actual: "15.80",
          dollar: "0",
          cents: "56",
          top: true,
        },
        {
          title: "12-WEEK",
          old: "53.04",
          actual: "27.05",
          dollar: "0",
          cents: "32" ,
          recommended: true,
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.plans {
  margin-top: 26px;

  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  &__title {
    text-align: center;

    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 28px;
    color: #302823;

    div {
      font-family: "Geometria";
      font-size: 32px;
      color: #14AF68;
    }
  }

  &__blocks {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 6px;

    margin-top: 35px;

    font-family: "Poppins";
    font-weight: 500;
    font-size: 11px;
    color: #3C3028A6;
    line-height: 16px;

    &::before {
      content: "";
      width: 23px;
      height: 23px;

      background-image: url("/icons/arrow.png");
      background-repeat: no-repeat;
    }
  }

  &__claim {
    margin-top: 32px;
  }

  &__payments {
    margin-top: 32px;

    background-image: url("/icons/payments.svg");
    background-repeat: no-repeat;

    width: 100%;
    height: 100px;
  }
}
</style>