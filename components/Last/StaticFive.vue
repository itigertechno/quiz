<template>
  <div class="money-back">
    <div class="money-back__icon"></div>

    <div class="money-back__title">
      <div>Money back policy</div>

      We guarantee a 100% refund without<br> specifying a reason.
    </div>

    <div class="money-back__text">
      If within 14 days for any reason you don't like <br>
       the quality of the product, the application,<br>
        or the tailored program, just contact us and <br>
        request a refund.
        <br>
        <br>
        Make sure to read our <br>
        <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>

<style scoped lang="scss">
.money-back {
  background-color: #F5EADE;

  margin-top: 26px;
  box-sizing: border-box;

  padding: 48px 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 32px 32px 0px 0px;

  &__icon {
    background-image: url("/icons/moneyback.png");
    background-repeat: no-repeat;

    width: 200px;
    height: 187px;
  }

  &__title {
    margin-top: 24px;

    text-align: center;

    color: #302823;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    div {
      font-family: "Noto Serif HK";
      color: #B87057;
      font-weight: 700;
      font-size: 24px;
    }
  }

  &__text {
    margin-top: 24px;
    text-align: center;

    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #534E4A;

    a {
      color: #B87057;
      text-decoration: none;
    }
  }
}
</style>