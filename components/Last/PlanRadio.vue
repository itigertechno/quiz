<template>
  <div class="plan-radio" :class="{ 'active': modelValue == value }" @click="clickEvent">
    <div class="plan-radio__plan">
      <input type="radio" :id="id" class="plan-radio__plan-radio" :value="value"
        @change="$emit('change', $event.target.value)" :checked="isChecked">
      <label :for="id" class="plan-radio__plan-label"></label>

      <div class="plan-radio__plan-top" v-if="top">TOP CHOICE FOR BEGINNERS</div>
      <div class="plan-radio__plan-recommended" v-if="recommended">Recommended for your profile</div>

      <div class="plan-radio__plan-price">
        <div class="plan-radio__plan-price__title">{{ title }}</div>

        <div class="plan-radio__plan-price__prices">
          <del class="plan-radio__plan-price__prices-old">${{ old }}</del>
          <span class="plan-radio__plan-price__prices-actual">${{ actual }}</span>
        </div>
      </div>
    </div>

    <div class="plan-radio__day" :class="{ 'active': modelValue == value }">
      $
      <div class="plan-radio__day-dollar">{{ dayDollar }}</div>
      <div class="plan-radio__day-text">
        <div class="plan-radio__day-text__cents">{{ dayCents }}</div>
        <div class="plan-radio__day-text__subtitle">per day</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanRadio",

  model: {
    prop: 'modelValue',
    event: 'change'
  },

  props: {
    title: {
      type: String,
    },

    id: {
      type: Number,
    },

    old: {
      type: String
    },

    actual: {
      type: String,
    },

    dayDollar: {
      type: String
    },

    dayCents: {
      type: String
    },

    top: {
      type: Boolean,
    },

    recommended: {
      type: Boolean,
    },

    modelValue: {
      default: "",
    },

    value: {
      type: String,
    }
  },

  computed: {
    isChecked() {
      return this.modelValue == this.value;
    }
  },

  methods: {
    clickEvent() {
      this.$emit("change", this.value)
    }
  }
}
</script>

<style scoped lang="scss">
.plan-radio {
  padding: 16px 11px;
  border-radius: 16px;
  background-color: #F5EADE;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  transition: 0.2s background-color;

  &.active {
    background-color: #EDD6CD;
  }

  &__plan {
    display: flex;
    align-items: center;
    gap: 14px;

    &-top {
      padding: 6.5px;
      color: #fff;
      font-family: "Poppins";
      font-weight: 600;
      font-size: 11px;
      text-align: center;

      position: absolute;

      background-color: #3C3028;

      top: -6px;
      border-radius: 3px;
    }

    &-recommended {
      padding: 6.5px;
      color: #fff;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 10px;
      text-align: center;

      position: absolute;

      background-color: #14AF68;

      bottom: -6px;
      border-radius: 3px;
    }

    &-radio {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    &-radio+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }

    &-radio+label::before {
      content: '';
      display: inline-block;
      background-color: #fff;
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #E3D5CA;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
    }

    &-radio:focus:not(:checked)+label::before {
      border-color: #80bdff;
    }

    &-radio:checked+label::before {
      border-color: #CE8C74;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23CE8D78'/%3e%3c/svg%3e");
    }

    &-radio:disabled+label::before {
      background-color: #e9ecef;
    }

    &-price {
      &__title {
        font-family: "Geometria";
        font-weight: 700;
        font-size: 20px;

        color: #302823;
      }

      &__prices {
        margin-top: 6px;

        font-family: "Geometria";
        font-weight: 500;
        font-size: 14px;

        color: #302823;

        del {
          text-decoration-color: #B7395D;
        }
      }
    }
  }

  &__day {
    background-color: #CE8D78;
    border-radius: 16px;
    padding: 10px;

    color: #fff;

    display: flex;
    align-items: center;
    // justify-content: space-between;

    font-family: "Geometria";
    font-weight: 700;

    font-size: 20px;

    opacity: 0.5;

    transition: 0.2s opacity;

    &.active {
      opacity: 1;
    }

    width: 112px;

    &-dollar {
      font-size: 50px;
      margin-left: 2px;
    }

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 4px;

      &__subtitle {
        font-weight: 500;
        font-size: 11px;
      }
    }
  }
}
</style>