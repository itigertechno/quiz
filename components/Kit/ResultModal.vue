<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__wrapper-title">Are you ready to make <br>additional commitments?</div>

      <div class="modal__wrapper-buttons">
        <KitButton block flex notCenter bigButton gap12 @click="closeModal">
          <div>💤</div>Yes, to better sleep in 30 days!
        </KitButton>

        <KitButton block flex notCenter bigButton gap12 @click="closeModal">
          <div>🧘</div>Yes, I'll meditate each morning!!
        </KitButton>

        <KitButton block flex notCenter bigButton gap12 @click="closeModal">
          <div>🙌</div>Yes, I'm up for the stress-free challenge!!
        </KitButton>

        <KitButton block flex notCenter bigButton gap12 @click="closeModal">
          <div>🕒</div>Not now, but open to future.!
        </KitButton>
      </div>
    </div>
  </div>
</template>

<script>
import KitButton from './KitButton.vue';

export default {
  name: "ResultModal",

  components: { KitButton },

  methods: {
    closeModal() {
      this.$emit("closeModal")
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  backdrop-filter: blur(5px);

  z-index: 11;

  &__wrapper {
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;

    background-color: #FFF9EF;
    border-radius: 28px;
    box-shadow: 0px 10px 40px 0px #0000001A;

    &-title {
      text-align: center;

      font-family: "Noto Serif HK";
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      color: #302823;
    }

    &-buttons {
      display: flex;
      flex-direction: column;

      gap: 12px;
    }
  }
}</style>