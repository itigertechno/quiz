<template>
  <div class="activity">
    <div class="activity__title">
      What activity brings you joy <br>and peace?
    </div>

    <div class="activity__buttons">
      <KitButton
        bigButton
        notCenter
        block
        spaceFlex
        flex
        v-for="(button, index) in buttons"
        :key="index"
        :selected="selectedButtons[index]"
        class="emotions__buttons-button"
      >
      {{ button }}
        <input 
          type="checkbox" 
          :id="index"
          class="custom-checkbox"
          :checked="selectedButtons"
          v-model="selectedButtons[index]"
        />
        <label :for="index" />
      </KitButton>
    </div>
  </div>
</template>

<script>
import KitButton from '../Kit/KitButton.vue';

export default {
  name: "StepTwentyOne",
  components: { KitButton },

  data() {
    return {
      selectedButtons: [],
      buttons: [
        "🧘 Yoga",
        "🪬 Meditation",
        "🌲 Walking in nature",
        "🎨 Art",
        "🎼 Music",
        "👤 Solitude",
        "👨‍👩‍👧 Family time",
        "💡 Other",
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.activity {
  padding: 20px;
  margin-top: 12px;

  &__title {
    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #302823;

    text-align: center;
  }

  &__buttons {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>