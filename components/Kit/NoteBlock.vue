<template>
  <div class="note-block">
    <div class="note-block__icon" :class="getIconClasses"></div>
    <div class="note-block__text" v-if="text">{{ text }}</div>

    <div class="note-block__wrapper" v-if="title || note">
      <div class="note-block__wrapper-title">{{ title }}</div>
      <div class="note-block__wrapper-note">{{ note }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteBlock",
  props: {
    text: {
      type: String,
      required: false,
    },

    title: {
      type: String,
      required: false,
    },

    note: {
      type: String,
      required: false,
    },

    green: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    getIconClasses() {
      let classes = [];

      if (this.title) {
        classes.push("icon--title");
      }

      if (this.green) {
        classes.push("icon--green");
      }

      return classes;
    }
  }
}
</script>

<style scoped lang="scss">
.note-block {
  padding: 16px 20px;
  border: 2px solid #EFDED5;
  border-radius: 16px;
  box-shadow: 0px 6px 13px 0px #3C180014;
  display: flex;
  gap: 12px;

  &__icon {
    mask: url("/icons/info.svg");
    mask-repeat: no-repeat;
    width: 20px;
    height: 20px;

    background-color: #F8B432;

    &.icon--title {
      background-color: #CE8C74;
    }

    &.icon--green {
      background-color: #14AF68;
    }
  }

  &__text {
    font-weight: 700;
    color: #534E4A;
    font-family: "Poppins";
    font-size: 16px;
    line-height: 24px;
    max-width: 277px;
  }

  &__wrapper {
    font-family: "Poppins";

    &-title {
      color: #302823;
      font-weight: 500;
    }

    &-note {
      color: #534E4A;
      font-size: 15px;
      line-height: 24px;
      max-width: 277px;
      font-weight: 400;
      margin-top: 4px;
    }
  }
}
</style>