<template>
  <div class="first">
    <div class="first__background"></div>
    <div class="first__header">What do you experience <br />most often?</div>
    <div class="first__buttons">
      <KitButton block bigButton @click="action('physical')">
        Physical discomfort
      </KitButton>

      <KitButton block bigButton @click="action('emotional')">
        Emotional fatigue
      </KitButton>
    </div>

    <div class="first__note">
      Complete a 2-minute quiz to get a <br />
      personalized plan
    </div>
  </div>
</template>

<script>
import KitButton from "../Kit/KitButton.vue";

export default {
  name: "StepOne",
  components: {
    KitButton,
  },

  methods: {
    action(type) {
      this.$store.commit("setType", type);
      this.$store.commit("nextPage");
    },
  },
};
</script>

<style scoped lang="scss">
.first {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  width: 100%;
  box-sizing: border-box;

  &__background {
    background-image: url("/images/questions/first.svg");
    background-repeat: no-repeat;
    background-position: center center;
    width: 353px;
    height: 336px;
  }

  &__header {
    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    margin-top: 32px;
    margin-bottom: 32px;

    text-align: center;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    width: 100%;
  }

  &__note {
    margin-top: 24px;
    text-align: center;

    font-family: "Poppins";
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
  }
}
</style>