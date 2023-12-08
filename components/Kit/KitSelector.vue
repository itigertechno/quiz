<template>
  <div class="selector">
    <div class="selector__header">
      <span class="selector__header-title">
        {{ title }}
      </span>
    
      <div class="selector__header-text" v-if="text">
        {{ text }}
      </div>
    </div>

    <div class="selector__wrapper">

    </div>
  </div>
</template>

<script>
export default {
  name: "KitSelector",
  props: {
    title: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: false,
    },

    items: {
      type: Number,
      required: true,
    },
  }
}
</script>

<style scoped lang="scss">
.selector {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 4px;

    text-align: center;
    font-family: "Poppins";

    padding: 12px 16px;

    border: 1.4px solid #ECDFD4;
    background-color: #F5EADE;
    border-radius: 12px;

    &-title {
      font-weight: 600;
      font-size: 16px;
      color: #534E4A;
    }

    &-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      color: #7E7772;
    }
  }
}
</style>