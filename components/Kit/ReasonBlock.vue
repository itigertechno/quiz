<template>
  <button class="reason-block" @click="selectedReason">
    <div class="reason-block__image"><img :src="image" /></div>
    <div class="reason-block__title">{{ title }}</div>
  </button>
</template>

<script>
export default {
  name: "ReasonBlock",
  props: {
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    }
  },

  methods: {
    selectedReason() {
      this.$emit("reason", this.title);
    }
  }
}
</script>

<style scoped lang="scss">
.reason-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  padding: 0;

  $self: &;

  &__image {
    img {
      overflow: auto;
      border-radius: 20px;
      transition: 0.3s border;
      border: 2px solid #FFF9EF;
    }
  }

  &__title {
    font-size: 16px;
    font-family: "Poppins";
    font-weight: 400;

    transition: 0.3s color;
    color: #302823;

    max-width: 150px;
  }

  &:hover {
    #{$self}__image {
      img {
        border: 2px solid #D29881;
      }
    }

    #{$self}__title {
      color: #B87057;
    }
  }
}
</style>