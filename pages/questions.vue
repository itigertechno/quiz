<template>
  <div class="questions">
    <UIHeader :progress="currentQuiz" :step="String(step)" @goBack="back()" :quizLength="23" :isBack="false" />

    <StepOne v-if="step == 1" />
    <StepTwo v-if="step == 2" />
    <StepThree v-if="step == 3" />
    <StepFour v-if="step == 4" />
    <StepFive v-if="step == 5" />
    <StepSix v-if="step == 6" />
    <StepSeven v-if="step == 7" />
    <StepEight v-if="step == 8" />
    <StepNinth v-if="step == 9" />
    <StepTen v-if="step == 10" />
    <StepEleven v-if="step == 11" />
    <StepTwelve v-if="step == 12" />
    <StepThirteen v-if="step == 13" />
    <StepFourteen v-if="step == 14" />
    <EmotionalTwo v-if="step == 15" />
    <StepSixteen v-if="step == 16" />
    <StepSeventeen v-if="step == 17" />
    <StepEighteen v-if="step == 18" />
    <StepNineteen v-if="step == 19" />
    <StepTwenty v-if="step == 20" />
    <StepTwentyOne v-if="step == 21" />
    <StepTwentyTwo v-if="step == 22" />
    <StepTwentyThree v-if="step == 23" />
    <StepTwentyFour v-if="step == 24" />
    <StepTwentyFive v-if="step == 25" />
    <StepTwentySix v-if="step == 26" />
    <StepTwentySeven v-if="step == 27" />
    <StepTwentyEight v-if="step == 28" />
    <StepTwentyNine v-if="step == 29" />
    <StepThirty v-if="step == 30" />
    <LastStep v-if="step == 31" />

    <KitButton v-if="buttons.includes(step)" defaultButton padding fixed :background="buttonBackground == step"
      :green="step == 24" @click="next">
      Continue
    </KitButton>
  </div>
</template>

<script>
import KitButton from "../components/Kit/KitButton.vue";
import UIHeader from "../components/UIHeader.vue";
import StepOne from "../components/Questions/StepOne.vue";
import StepTwo from "../components/Questions/StepTwo.vue";
import StepThree from "../components/Questions/StepThree.vue";
import StepFour from "../components/Questions/StepFour.vue";
import StepFive from "../components/Questions/StepFive.vue";
import StepSix from "../components/Questions/StepSix.vue";
import StepSeven from "../components/Questions/StepSeven.vue";
import StepEight from "../components/Questions/StepEight.vue";
import StepNinth from "../components/Questions/StepNinth.vue";
import StepTen from "../components/Questions/StepTen.vue";
import StepEleven from "../components/Questions/StepEleven.vue";
import StepTwelve from "../components/Questions/StepTwelve.vue";
import StepThirteen from "../components/Questions/StepThirteen.vue";
import StepFourteen from "../components/Questions/StepFourteen.vue";
import EmotionalTwo from "../components/Questions/EmotionalTwo.vue";
import StepSixteen from "../components/Questions/StepSixteen.vue";
import StepSeventeen from "../components/Questions/StepSeventeen.vue";
import StepEighteen from "../components/Questions/StepEighteen.vue";
import StepNineteen from "../components/Questions/StepNineteen.vue";
import StepTwenty from "../components/Questions/StepTwenty.vue";
import StepTwentyOne from "../components/Questions/StepTwentyOne.vue";
import StepTwentyTwo from "../components/Questions/StepTwentyTwo.vue";
import StepTwentyThree from "../components/Questions/StepTwentyThree.vue";
import StepTwentyFour from "../components/Questions/StepTwentyFour.vue";
import StepTwentyFive from "../components/Questions/StepTwentyFive.vue";
import StepTwentySix from "../components/Questions/StepTwentySix.vue";
import StepTwentySeven from "../components/Questions/StepTwentySeven.vue";
import StepTwentyEight from "../components/Questions/StepTwentyEight.vue";
import StepTwentyNine from "../components/Questions/StepTwentyNine.vue";
import StepThirty from "../components/Questions/StepThirty.vue";
import LastStep from "../components/Questions/LastStep.vue";

export default {
  components: {
    KitButton,
    UIHeader,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix,
    StepSeven,
    StepEight,
    StepNinth,
    StepTen,
    StepEleven,
    StepTwelve,
    StepThirteen,
    StepFourteen,
    EmotionalTwo,
    StepSixteen,
    StepSeventeen,
    StepEighteen,
    StepNineteen,
    StepTwenty,
    StepTwentyOne,
    StepTwentyTwo,
    StepTwentyThree,
    StepTwentyFour,
    StepTwentyFive,
    StepTwentySix,
    StepTwentySeven,
    StepTwentyEight,
    StepTwentyNine,
    StepThirty,
    LastStep
  },

  data() {
    return {
      buttonBackground: [3],
      greenButtons: [24],
      buttons: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 24],
    };
  },

  computed: {
    step() {
      return this.$store.getters.selectStep;
    },

    currentQuiz() {
      return `${(this.step / 23) * 100}%`;
    },
  },

  methods: {
    back() {
      this.step -= 1;
    },

    next() {
      this.$store.commit("nextPage");
    },
  },
};
</script>

<style scoped lang="scss">
.questions {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 120px;
}
</style>