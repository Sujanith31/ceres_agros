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
  background-color: #4caf50;
  background-image: url('@/assets/img/background-pic-g2.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  color: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 18px;
  box-sizing: border-box;
  /* position: relative; */
}

/* Optional: Add a dark overlay for better text readability */
.flip-card-front::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(76, 175, 80, 0.5); /* Green overlay, adjust opacity as needed */
  border-radius: 12px;
  z-index: 1;
  pointer-events: none;
}

/* Ensure content is above overlay */
.frontcard-fistlook,
.frontcard-fistlook-text,
.frontcard-secondLook {
  position: relative;
  z-index: 2;
}
.flip-card-back {
  transform: rotateY(180deg);
  background-image: url('@/assets/img/background-pic-g2.jpg'); /* Replace with your image path */
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
    max-width: none !important;
    height: 400px !important;
    margin: 0 auto 24px auto;
    overflow: hidden; /* Add this */
  }
  .flip-card-inner {
    width: 100% !important;
    height: 100% !important;
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
    width: 100% !important;
    max-width: none !important;
    padding: 12px 4px;
    overflow: hidden; /* Add this */
  }
  .flip-card-inner {
    width: 100% !important;
    height: 100% !important;
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

.frontcard-fistlook {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  justify-content: center;
}

.frontcard-fistlook-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
}

.frontcard-fistlook-heading {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.frontcard-firstLook-para {
  font-size: 1.05rem;
  font-weight: 400;
  margin-bottom: 0;
  line-height: 1.5;
  color: #fff;
}

.frontcard-secondLook {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-top: 12px;
}

.frontcard-secondlook-heading {
  font-size: 1.2rem;
  font-weight: 600;
}

.frontcard-secondlook-para {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
}

.frontcard-secondlook-button {
  margin-top: 8px;
  background: #fff;
  color: #4caf50;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}

.frontcard-secondlook-button:hover {
  background: #4caf50;
  color: #fff;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .flip-card-front {
    padding: 18px 8px;
  }
  .frontcard-fistlook-heading {
    font-size: 1.2rem;
  }
  .frontcard-firstLook-para,
  .frontcard-secondlook-para {
    font-size: 0.98rem;
  }
}

@media (max-width: 600px) {
  .flip-card-front {
    padding: 8px 2px;
  }
  .frontcard-fistlook-heading {
    font-size: 1rem;
  }
  .frontcard-secondlook-heading {
    font-size: 0.95rem;
  }
  .frontcard-firstLook-para,
  .frontcard-secondlook-para {
    font-size: 0.95rem;
  }
}
</style>
