<template>
  <div class="apa">
    <div class="apa__wrapper">
      <div class="apa__wrapper-logo"></div>

      <div class="apa__wrapper-title">American Psychological <br>Association's</div>

      <div class="apa__wrapper-text">
        ...A study conducted by examined the effects of EFT on the brain and pain (and other factors) using resting state
        functional magnetic resonance imaging (fMRI) pre and post intervention. This study not only reported decreased
        levels of pain, but also somatic symptoms, depression and anxiety.

        Also reported in this study is that EFT significantly increased happiness, quality of life and satisfaction with
        life. These results substantiate the effects of EFT as a valid... intervention...
      </div>
    </div>
  </div>
</template>

<script>
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepFive",
  components: { KitButton },
}
</script>

<style scoped lang="scss">
.apa {
  padding: 20px;
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-logo {
      background-image: url("/icons/APA_logo.png");
      background-repeat: no-repeat;

      width: 56px;
      height: 56px;
    }

    &-title {
      font-family: "Noto Serif HK";
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      text-align: center;

      margin-top: 36px;
    }

    &-text {
      margin-top: 16px;
      font-family: "Poppins";
      font-weight: 400;
      width: 353px;
      color: #534E4A;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      &::before,
      &::after {
        content: "";
        display: block;
        background-image: url("/icons/mark.svg");
        background-repeat: no-repeat;
        width: 25px;
        height: 21px;
      }

      &::after {
        transform: rotate(180deg);
      }
    }
  }
}
</style>