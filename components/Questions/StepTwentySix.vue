<template>
  <div class="plan">
    <div class="plan__title">
      <div class="plan__title-first">Your personal EFT plan for</div>
      <div class="plan__title-second">{{ reason }}</div>
      <div class="plan__title-third">is Ready!</div>
    </div>

    <div class="plan__graph"></div>

    <div class="plan__parameters">
      <div class="plan__parameters-title">Based on your parameters</div>

      <div class="plan__parameters-blocks">
        <div class="plan__parameters-blocks__block">
          <div class="block__circle"></div>

          <div class="block__text">
            <div class="block__text-title">Level of</div>
            <div class="block__text-subtitle">Stress</div>
          </div>
        </div>

        <div class="plan__parameters-blocks__block">
          <div class="block__circle"></div>

          <div class="block__text">
            <div class="block__text-title">Level of</div>
            <div class="block__text-subtitle">Anxiety</div>
          </div>
        </div>

        <div class="plan__parameters-blocks__block">
          <div class="block__circle"></div>

          <div class="block__text">
            <div class="block__text-title">Level of</div>
            <div class="block__text-subtitle">Frustration</div>
          </div>
        </div>

        <div class="plan__parameters-blocks__block">
          <div class="block__circle"></div>

          <div class="block__text">
            <div class="block__text-title">Level of</div>
            <div class="block__text-subtitle">Lack of focus</div>
          </div>
        </div>
      </div>
    </div>

    <KitButton defaultButton padding fixed green @click="next">
      Get your first recommendations!
    </KitButton>

    <KitSheet class="plan__sheet" />
  </div>
</template>

<script>
import KitButton from "../Kit/KitButton.vue";

export default {
  name: "StepTwentySix",
  components: { KitButton },

  methods: {
    next() {
      this.$store.commit("nextPage");
    }
  },

  computed: {
    reason() {
      return this.$store.getters.selectReason;
    },
  },

  methods: {
    next() {
      this.$store.commit("nextPage")
    },
  },
}
</script>

<style scoped lang="scss">
.plan {
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;

    &-first {
      font-family: "Poppins";
      font-weight: 500;
      font-size: 16px;
    }

    &-second {
      font-family: "Noto Serif HK";
      font-weight: 700;
      font-size: 24px;
      color: #b87057;
    }

    &-third {
      font-family: "Noto Serif HK";
      font-weight: 700;
      font-size: 32px;
      color: #14af68;
    }
  }

  &__graph {
    background-image: url("/images/graph.svg");
    background-repeat: no-repeat;

    width: 353px;
    height: 233px;

    margin-top: 22px;
    animation: revealFromLeft 3s ease-out;
    /* Настройте длительность и сглаживание по вашему вкусу */
  }

  &__parameters {
    margin-top: 22px;

    &-title {
      font-family: "Noto Serif HK";
      font-size: 20px;
      font-weight: 700;
      text-align: center;

      color: #302823;
    }

    &-blocks {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: space-between;

      margin-top: 22px;

      &__block {
        padding: 12px;
        border: 1.4px solid #f1e5da;
        border-radius: 16px;

        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        flex: 1;

        .block {
          &__circle {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 3px solid #ecdfd4;
          }

          &__text {
            &-title {
              font-family: "Poppins";
              font-weight: 400;
              font-size: 15px;

              color: #988d85;
            }

            &-subtitle {
              font-family: "Poppins";
              font-weight: 500;
              font-size: 15px;
              color: #302823;
              margin-top: 4px;
            }
          }
        }
      }
    }
  }

  &_sheet {
    backdrop-filter: blur(5px);
  }
}

@keyframes fadeInFromLeft {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes revealFromLeft {
  from {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 100%);
  }

  to {
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
  }
}
</style>