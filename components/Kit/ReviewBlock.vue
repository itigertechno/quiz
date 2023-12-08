<template>
  <div class="review-block">
    <div class="review-block__name">{{ name }}</div>

    <div class="review-block__middle">
      <div class="review-block__middle-score">
        <div class="review-block__middle-score__star" v-for="star in stars"></div>
      </div>

      <div class="review-block__middle-nick">{{ nick }}</div>
    </div>

    <div class="review-block__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "ReviewBlock",
  props: {
    name: {
      type: String
    },

    nick: {
      type: String,
    },

    text: {
      type: String,
    }
  },

  data() {
    return {
      stars: 5,
    }
  }
}
</script>

<style scoped lang="scss">
.review-block {
  padding: 20px;
  border: 2px solid #ECDFD4;
  box-shadow: 0px 6px 13px 0px #3C180014;
  border-radius: 16px;

  &__name {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
  }

  &__middle {
    margin-top: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &-score {
      display: flex;
      align-items: center;
      gap: 4px;

      &__star {
        background-image: url("/icons/star_icon.svg");
        background-repeat: no-repeat;

        width: 20px;
        height: 20px;
      }
    }

    &-nick {
      font-family: "Poppins";
      font-weight: 500;
      font-size: 15px;
      color: #CEC1B8;
    }
  }

  &__text {
    margin-top: 8px;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #988D85;
  }
}
</style>