<template>
  <div class="button" :class="getContainerClasses">
    <button @click="clickEvent" :class="getButtonClasses">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "KitButton",
  props: {
    block: {
      type: Boolean,
      default: false,
    },

    mediumFont: {
      type: Boolean,
      default: false,
    },

    defaultButton: {
      type: Boolean,
      default: false,
    },

    bigButton: {
      type: Boolean,
      default: false,
    },

    notCenter: {
      type: Boolean,
      default: false,
    },

    selected: {
      type: Boolean,
      default: false,
    },

    padding: {
      type: Boolean,
      default: false,
    },

    background: {
      type: Boolean,
      default: false,
    },

    fixed: {
      type: Boolean,
      default: false,
    },

    flex: {
      type: Boolean,
      default: false,
    },

    padding16: {
      type: Boolean,
      default: false,
    },
    
    padding24: {
      type: Boolean,
      default: false,
    },

    font32: {
      type: Boolean,
      default: false,
    },

    spaceFlex: {
      type: Boolean,
      default: false,
    },

    green: {
      type: Boolean,
      default: false,
    },

    gap12: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    clickEvent() {
      this.$emit("click");
    },
  },

  computed: {
    getContainerClasses() {
      let classes = [];

      if (this.padding) {
        classes.push("button--padding");
      }

      if (this.block) {
        classes.push("button--block");
      }

      if (this.background) {
        classes.push("button--background");
      }

      if (this.fixed) {
        classes.push("button--fixed");
      }

      return classes;
    },

    getButtonClasses() {
      let classes = [];

      if (this.block) {
        classes.push("button--block");
      }

      if (this.mediumFont) {
        classes.push("button--medium");
      }

      if (this.defaultButton) {
        classes.push("button--default");
      }

      if (this.bigButton) {
        classes.push("button--big");
      }

      if (this.notCenter) {
        classes.push("button--notcenter");
      }

      if (this.selected) {
        classes.push("button--selected");
      }

      if (this.flex) {
        classes.push("button--flex");
      }

      if (this.padding16) {
        classes.push("button--padding16")
      }

      if (this.padding24) {
        classes.push("button--padding24");
      }

      if (this.font32) {
        classes.push("button--font32");
      }

      if (this.spaceFlex) {
        classes.push("button--spaceFlex");
      }

      if (this.green) {
        classes.push("button--green");
      }

      if (this.gap12) {
        classes.push("button--gap12");
      }

      return classes;
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  margin: 0;
  font-family: "Poppins";
  font-weight: 400;

  button {
    cursor: pointer;
    outline: none;
  }

  &--padding {
    padding: 20px;

    button {
      width: 100%;
    }
  }

  &--fixed {
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;
  }

  &--background {
    background-color: #CE8C744D;
    border-radius: 30px 30px 0 0;
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--medium {
    font-weight: 500;
  }

  &--default {
    background-color: #ce8c74;
    padding: 16px;
    border-radius: 16px;
    border: none;
    color: #fff9ef;
    font-weight: 600;
    font-size: 16px;
  }

  &--big {
    padding: 24px;
    border: 1.4px solid #f5eade;
    background-color: #f5eade;
    font-size: 16px;
    border-radius: 16px;

    transition: 0.2s background-color, 0.2s border-color;
    color: #302823;

    &:hover {
      border: 1.4px solid #d29881;
      background-color: #edd6cd;
    }
  }

  &--notcenter {
    text-align: left;
  }

  &--selected {
    border: 1.4px solid #d29881;
    background-color: #edd6cd;
  }

  &--flex {
    display: flex;
    align-items: center;
  }

  &--padding16 {
    padding: 16px;
  }

  &--padding24 {
    padding: 24px;
  }

  &--font32 {
    font-size: 32px;
  }

  &--spaceFlex {
    justify-content: space-between;
  }

  &--green {
    background-color: #14AF68;
  }

  &--gap12 {
    gap: 12px;
  }
}
</style>