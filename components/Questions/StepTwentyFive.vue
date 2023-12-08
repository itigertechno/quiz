<template>
  <div class="loading">
    <div class="loading__title">Loading your personal <br>results</div>

    <div class="loading__block">
      <LoadingBlock />
    </div>

    <div class="loading__reviews">
      <ReviewBlock :name="review.name" :nick="review.nick" :text="review.text" />
    </div>

    <div class="loading__icons">
      <img src="/images/harvard_logo.png" width="130" height="37">
      <img src="/images/tnt_logo.png">
      <img src="/images/ams_logo.png">
    </div>
  </div>
</template>

<script>
import LoadingBlock from '../Kit/LoadingBlock.vue';
import ReviewBlock from '../Kit/ReviewBlock.vue';

export default {
  name: "StepTwentyFive",
  components: { LoadingBlock, ReviewBlock },

  data() {
    return {
      number: 0,

      review: {
        name: "",
        nick: "",
        text: "",
      },

      reviews: [
        {
          name: "Mila Nukrol",
          nick: "mila1975",
          text: "Tapping cured my anxiety and insomnia— feeling blessed and rested!",
        },

        {
          name: "Laura Smith",
          nick: "HealingWithLaura",
          text: "Tapping erased my back pain. I’m now pain-free and thriving!"
        },

        {
          name: "Angela White",
          nick: "mila1975",
          text: "Post-tapping, my stress is gone. Life's joyful and calm now!",
        }
      ]
    }
  },

  mounted() {
    this.review.name = this.reviews[this.number].name;
    this.review.nick = this.reviews[this.number].nick;
    this.review.text = this.reviews[this.number].text;

    setInterval(() => {
      this.number += 1;
      
      if (this.number <= 2) {
        this.review.name = this.reviews[this.number].name;
        this.review.nick = this.reviews[this.number].nick;
        this.review.text = this.reviews[this.number].text;
      } else {
        this.number = 0;
      }
    }, 5000)

  }
}
</script>

<style scoped lang="scss">
.loading {
  margin-top: 32px;

  width: 100%;

  &__title {
    text-align: center;
    font-family: "Noto Serif HK";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #302823;
  }

  &__block {
    margin-top: 12px;

    padding: 20px;
  }

  &__reviews {
    margin-top: 27px;

    padding: 20px;
  }

  &__icons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;
  }
}
</style>