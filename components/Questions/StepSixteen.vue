<template>
  <div class="reported">
    <div class="reported__title">
      Reported by
      <div class="reported__title-logo"></div>
    </div>

    <div class="reported__block">
      <NoteBlock
        green
        :title="'Rachel Zimmerman'"
        :note="`“Emotional Freedom Technique” 
        (tapping) the practice uses 
        exposure and desensitization to 
        “defuse” painful emotions 
        associated with trauma. By 
        tapping a series of acupuncture 
        points on the body, and repeating 
        certain phrases related to the
        negative event in an accepting 
        way, the emotional intensity of the 
        bad memory deflates, the theory 
        goes, and the grip of trauma 
        melts away.`"
      />
    </div>
  </div>
</template>

<script>
import NoteBlock from '../Kit/NoteBlock.vue';

export default {
  name: "StepSixteen",
  components: { NoteBlock }
}
</script>

<style scoped lang="scss">
.reported {
  padding: 20px;
  margin-top: 23px;

  &__title {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #302823;

    &-logo {
      background-image: url("/images/harvard_logo.png");
      background-repeat: no-repeat;

      width: 295px;
      height: 84.5px;
    }
  }

  &__block {
    margin-top: 37.5px;
  }
}
</style>