<template>
  <div class="reason">
    <div class="reason__header"></div>

    <div class="reason__text" v-html="text"></div>

    <NoteBlock :text="noteText" />
  </div>
</template>

<script>
import KitButton from "../Kit/KitButton.vue";
import NoteBlock from "../Kit/NoteBlock.vue";

export default {
  name: "StepThree",

  components: { NoteBlock, KitButton },

  computed: {
    reason() {
      return this.$store.getters.selectReason;
    },
  },

  data() {
    return {
      text: "",
      noteText: "",
    };
  },

  mounted() {
    let text = this.reason.toLowerCase();

    if (text === "stress reduction") {
      this.text = `Ok, so your goal is <b>to focus on</b> <div>stress reduction</div>`;
      this.noteText = `In the US and UK, only 40% of people with stress-related symptoms sought professional help in the past year, underscoring a significant gap in addressing this vital health concern.`;
    } else if (text === "anxiety management") {
      this.text = `Ok, so your goal is <b>to manage</b> <div>anxiety effectively</div>`;
      this.noteText = `In the US and UK, just 30% of individuals diagnosed with Anxiety have consulted a doctor for their condition in the past year, pointing to a troubling trend in neglecting anxiety management.`;
    } else if (text === "emotional release") {
      this.text = `Ok, so your goal is <b>to achieve</b> <div>emotional release</div>`;
      this.noteText = `In the US and UK, approximately 45% of people needing emotional release therapy actually reached out to a professional in the past year, indicating a hesitation to deal with emotional health issues.`;
    } else if (text === "headache") {
      this.text = `Ok, so your goal is <b>to alleviate</b> <div>headaches</div>`;
      this.noteText = `In the US and UK, only 50% of people with chronic headaches have consulted a doctor in the past year, highlighting the need for more proactive headache management.`;
    } else if (text === "chronic pain") {
      this.text = `Ok, so your goal is <b>to address</b> <div>chronic pain</div>`;
      this.noteText = `In the US and UK, around 35% of individuals suffering from chronic pain sought medical advice in the past year, suggesting a lack of adequate chronic pain management.`;
    } else if (text === "joint and muscle pain") {
      this.text = `Ok, so your goal is <b>to relieve</b> <div>joint and muscle pain</div>`;
      this.noteText = `In the US and UK, merely 60% of those experiencing joint and muscle pain have seen a doctor for it in the past year, indicating a gap in addressing these common pain issues.`;
    } else if (text === "insomnia") {
      this.text = `Ok, so your goal is <b>to overcome</b> <div>insomnia</div>`;
      this.noteText = `In the US and UK, just 55% of people suffering from insomnia consulted a healthcare provider in the past year, showing a significant overlook in treating sleep disorders.`;
    } else if (text === "stress-related digestive issues") {
      this.text = `Ok, so your goal is <b>to tackle</b> <div>stress-related digestive issues</div>`;
      this.noteText = `In the US and UK, only about 50% of individuals with stress-related digestive issues sought medical help in the past year, pointing to a need for better management of these conditions.`;
    } else if (text === "chronic fatigue") {
      this.text = `Ok, so your goal is <b>to combat</b> <div>chronic fatigue</div>`;
      this.noteText = `In the US and UK, a mere 70% of those with chronic fatigue syndrome have consulted a healthcare professional in the past year, highlighting the undermanagement of this debilitating condition.`;
    } else if (text === "sleep disorders") {
      this.text = `Ok, so your goal is <b>to deal with</b> <div>sleep disorders</div>`;
      this.noteText = `In the US and UK, approximately 40% of people with sleep disorders sought medical advice in the past year, emphasizing a widespread neglect of these issues.`;
    } else if (text === "back pain") {
      this.text = `Ok, so your goal is <b>to reduce</b> <div>back pain</div>`;
      this.noteText = `In the US and UK, only 50% of individuals suffering from back pain have visited a doctor in the past year, indicating a lack of attention to this common ailment.`;
    } else if (text === "postpartum discomforts") {
      this.text = `Ok, so your goal is <b>to alleviate</b> <div>postpartum discomforts</div>`;
      this.noteText = `In the US and UK, just 30% of new mothers experiencing postpartum discomforts sought medical help in the past year, underlining a crucial gap in postpartum care.`;
    } else if (text === "hypertension") {
      this.text = `Ok, so your goal is <b>to manage</b> <div>hypertension effectively</div>`;
      this.noteText = `In the US and UK, only 40% of individuals diagnosed with hypertension sought professional medical advice in the past year, highlighting a significant concern in managing this common health condition.`;
    }
  },

  methods: {
    fourthStep() {
      this.$emit("fourthStep");
    },
  },
};
</script>

<style scoped lang="scss">
.reason {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  &__header {
    background-image: url("/images/reasons/bg_reason.svg");
    background-repeat: no-repeat;
    margin-top: -40px;
    z-index: -2;
    height: 300px;
    width: 353px;
  }

  &__text {
    text-align: center;
    font-family: "Poppins";
    font-size: 16px;
    color: #534e4a;

    ::v-deep b {
      color: #302823;
    }

    ::v-deep div {
      font-family: "Noto Serif HK";
      font-size: 24px;
      color: #ce8c74;
      font-weight: 700;
      line-height: 32px;
    }
  }

}
</style>