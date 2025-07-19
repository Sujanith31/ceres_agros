<template>
  <section class="frontCards-container">
    <div class="flip-card" :class="{ flipped: isFlipped }" @click="isFlipped = !isFlipped">
      <div class="flip-card-inner">
        <!-- Front Side -->
        <div class="flip-card-front">
          <div class="frontcard-fistlook">
            <div class="frontcard-fistlook-text">
              <h3 class="frontcard-fistlook-heading">Reimagine Your Harvest</h3>
              <p class="frontcard-firstLook-para">
                All the fertilizer solutions you need for a thriving harvest have been re-imagined
                with Ceres Agros innovative approach, bringing new life to your crops and fields.
              </p>
            </div>
            <div class="frontcard-secondLook">
              <h3 class="frontcard-secondlook-heading">Discover More</h3>
              <p class="frontcard-secondlook-para">
                Accelerate Your Agricultural Success with Ceres Agros Ready-to-Use Fertilizer
                Solutions - From Soil Prep to Harvest, We've Got You Covered.
              </p>
              <button class="frontcard-secondlook-button">Check Out Now</button>
            </div>
          </div>
        </div>
        <!-- Back Side -->
        <div class="flip-card-back">
          <div class="backcard-content">
            <h3>Why Choose Ceres Agros?</h3>
            <ul>
              <li>100% water-soluble fertilizers</li>
              <li>Microphase Enrichment Technology (MET)</li>
              <li>Boosts soil health and crop yield</li>
              <li>Expert support and reliable delivery</li>
              <li>Trusted by thousands of farmers</li>
            </ul>
            <button class="frontcard-secondlook-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div class="front-rightCard-continer">
      <div class="frontrightcard-top">
        <div class="frontrightcard-top-one">
          <h3>Boost Your Yields</h3>
          <p>
            Unlock the full potential of your crops with our high-quality, nutrient-rich fertilizers
            designed for optimal growth.
          </p>
        </div>
        <div class="frontrightcard-top-two">
          <h3>Scientifically Formulated</h3>
          <p>
            Our fertilizers are developed through rigorous research and testing to provide the
            precise balance of nutrients your plants need.
          </p>
        </div>
      </div>
      <div class="frontrightcard-bottom">
        <div class="frontrightcard-bottom-one">
          <h3>Invest in Growth</h3>
          <p>
            Maximize your return on investment with our cost-effective fertilizers that deliver
            exceptional results and long-term soil health.
          </p>
        </div>
        <div class="frontrightcard-bottom-two">
          <h3>Reliable Delivery & Support</h3>
          <p>
            We ensure timely delivery of our fertilizers and provide expert support to help you
            achieve your farming goals.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const isFlipped = ref(false)
</script>

<style scoped>
.frontCards-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: whitesmoke;
}
.flip-card {
  position: relative;
  width: 350px;
  height: 450px;
  cursor: pointer;
  perspective: 1000px;
}
.flip-card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flipped .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.flip-card-front {
  /* front card styles */
  background-color: #4caf50; /* Green */
  color: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flip-card-back {
  transform: rotateY(180deg);
  background-image: url('@/assets/img/'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Dark overlay effect */
.flip-card-back::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(49, 154, 28, 0.6); /* Adjust opacity for darkness */
  border-radius: 12px;
  z-index: 1;
}

/* Ensure content is above overlay */
.backcard-content {
  position: relative;
  z-index: 2;
}
.front-rightCard-continer {
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 700px;
  color: grey;
}
.front-rightCard-continer h3 {
  color: #344767;
  font-weight: 700;
}
.frontrightcard-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.frontrightcard-top-one,
.frontrightcard-top-two {
  width: 280px;
  /* height: 200px; */
}
.frontrightcard-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.frontrightcard-bottom-one,
.frontrightcard-bottom-two {
  width: 280px;
  /* height: 200px; */
}
@media (max-width: 900px) {
  .frontCards-container {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 32px;
    padding: 16px 0;
  }
  .flip-card {
    width: 100% !important;
    max-width: 370px;
    height: 400px !important;
    margin: 0 auto 24px auto;
  }
  .front-rightCard-continer {
    width: 100% !important;
    gap: 24px !important;
    padding: 0 8px;
  }
  .frontrightcard-top,
  .frontrightcard-bottom {
    flex-direction: column !important;
    gap: 18px !important;
    width: 100% !important;
    align-items: stretch !important;
  }
  .frontrightcard-top-one,
  .frontrightcard-top-two,
  .frontrightcard-bottom-one,
  .frontrightcard-bottom-two {
    width: 100% !important;
    min-width: 0 !important;
  }
}

@media (max-width: 600px) {
  .flip-card {
    max-width: 100% !important;
    padding: 12px 4px;
  }
  .front-rightCard-continer {
    padding: 0 4px;
    gap: 16px !important;
  }
  .frontcard-fistlook-text,
  .frontcard-secondLook,
  .frontrightcard-top-one,
  .frontrightcard-top-two,
  .frontrightcard-bottom-one,
  .frontrightcard-bottom-two {
    font-size: 1rem;
  }
  .frontcard-secondlook-button {
    width: 100%;
    font-size: 1rem;
    padding: 10px 0;
  }
}
</style>
