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
      <div class="selector__wrapper-line">
        <div class="selector__wrapper-line__progress" :style="{ width: progress + 'px' }"></div>
      </div>

      <div class="selector__wrapper-block" v-for="item, index in items" :key="index">
        <input type="radio" :id="index" v-model="checked" :value="index"
          @change="selectItem(index, item.title, item.text)" />
        <label :for="index" :class="{ 'painted': index == paintedList[index] }">{{ item.emoji }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KitSelector",
  props: {
    items: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      title: "",
      text: null,

      checked: 0,
      progress: 0,

      paintedList: [],
    };
  },

  methods: {
    selectItem(index, title, text) {
      this.title = title;
      this.text = text;
      this.paintedList = [];

      if (!this.paintedList.includes(index)) {
        for (let i = 0; i <= index; i++) {
          this.paintedList.push(i);
        }
      } else {
        this.paintedList = this.paintedList.filter((number) => index !== number);
      }
    },
  },

  mounted() {
    this.title = this.items[this.checked].title;
    this.text = this.items[this.checked].text;
  },

  watch: {
    checked() {
      this.progress = this.checked * 70;
    }
  }
}
</script>

<style scoped lang="scss">
.selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  &__header {
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

      margin-top: 4px;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    position: relative;

    &-line {
      position: absolute;
      height: 4px;
      background-color: #ECDFD4;
      width: 95%;
      bottom: 12px;
      z-index: -2;

      &__progress {
        height: 4px;
        background-color: #CE8C74;
      }
    }

    &-block {
      input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }

      label {
        font-size: 20px;
      }

      input+label {
        display: flex;
        flex-direction: column-reverse;
        flex-shrink: 0;
        gap: 20px;
        align-items: center;
        user-select: none;

        &.painted::before {
          background-color: #CE8C74;
        }
      }

      input+label::before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        flex-shrink: 0;
        flex-grow: 0;
        border: none;
        border-radius: 50%;
        background-color: #ECDFD4;
      }

      input:checked+label::before {
        background-color: #CE8C74;
        box-shadow: 0px 6px 13px 0px #0000001F;

        width: 28px;
        height: 28px;
      }
    }
  }
}
</style>