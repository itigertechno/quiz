<template>
  <div
    class="debt-amount-slider"
    :class="{ 'debt-amount-slider--active': isSliderActive }"
  >
    <input type="radio" name="debt-amount" id="1" value="1" required />
    <label for="1" data-debt-amount="😩"></label>
    <input type="radio" name="debt-amount" id="2" value="2" required />
    <label for="2" data-debt-amount="🙁"></label>
    <input type="radio" name="debt-amount" id="3" value="3" required />
    <label for="3" data-debt-amount="😐"></label>
    <input type="radio" name="debt-amount" id="4" value="4" required />
    <label for="4" data-debt-amount="🙂"></label>

    <input type="radio" name="debt-amount" id="5" value="5" required />
    <label for="5" data-debt-amount="😀"></label>
    <div id="debt-amount-pos">
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
  </div>
</template>

<script>
export default {
  name: "KitRadio",
  data() {
    return {
      items: Array(5).fill(null),
      selectedIndex: 4,
      selectedContent: "Содержимое для первого круга",
    };
  },
  methods: {
    selectItem(index) {
      this.selectedIndex = index;
      this.selectedContent = `Содержимое для круга ${index + 1}`;
    },
  },
  computed: {
    isSliderActive() {
      return this.selectedIndex <= 3; // замените someValue на актуальное значение
    },
  },
};
</script>

<style lang="scss">
.debt-amount-slider {
  $number-of-options: 5;
  display: flex;
  flex-direction: row;
  align-content: stretch;
  position: relative;
  width: 100%;
  height: 50px;

  input,
  label {
    box-sizing: border-box;
    flex: 1;
    cursor: pointer;
    position: relative;
  }
  label {
    position: relative;
    width: 20%;
    height: 100%;
    &::before {
      content: attr(data-debt-amount);
      position: absolute;
      left: 50%;
      transform: translate(-50%, -45px);
      font-size: 32px;
      font-weight: 600;
      opacity: 0.4;
    }
    &::after {
      content: " ";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      background: #ecdfd4;
      border-radius: 50%;
      z-index: 1;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
    }
  }
  input {
    display: none;
    &:checked {
      + label::before {
        font-weight: 600;
        opacity: 1;
      }
      + label::after {
        transform: translate(-50%, -50%) scale(2);
      }
      ~ #debt-amount-pos {
        opacity: 1;
      }
      @for $i from 1 through $number-of-options {
        &:nth-child(#{$i * 2 - 1}) ~ #debt-amount-pos {
          left: #{($i * 20%) - 10%};
        }
      }
    }
  }
}

#debt-amount-pos {
  display: flex;
  position: absolute;
  
  width: calc(100% * 4/5);;
  height: 20px;
  left: 15%;
  top: 25px;
  
}

.line {
  width: 25%;
  height: 2px;
  background-color: #000;

  &--active {
    background-color: #ce8c74;
    height: 2px;
  }
}

</style>
