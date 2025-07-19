<template>
  <section class="HomePage-Container">
    <div class="homepage-imagecontainer">
      <div class="homepage-text-container">
        <h2>The future of plant science...</h2>
        <p>
          Introducing Ceres Agros, India's pioneering 100% water-soluble fertilizer solution.
          Revolutionizing agriculture with innovative products that boost yields, improve soil
          health, and drive sustainability.
        </p>

        <div class="homepage-button-container">
          <button>Read more</button>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  </section>
  <section class="homepage-counter-container">
    <div class="homepage-counter">
      <h3 class="counter">200+</h3>
      <h2 class="counter-heading">Formulations</h2>
      <p class="counter-para">
        Scientifically crafted NPK formulations powered by advanced MET (MICROPHASE ENRICHMENT
        TECHNOLOGY)
      </p>
    </div>
  </section>
</template>
<script setup>
import HomeCardPic from '@/assets/img/home-card-pic1.jpg'
</script>
<style scoped>
.HomePage-Container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-color: aqua;
}
.homepage-imagecontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-image: url('@/assets/img/home-card-pic1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.homepage-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  width: 80%;
}
.homepage-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
.homepage-text-container p {
  width: 800px;
}
.homepage-counter-container {
  background-color: whitesmoke;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
}
.homepage-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
}
.counter {
  color: #4caf50;
  font-weight: 800;
}
.counter-heading {
  color: #344767;
  font-weight: 700;
}
.counter-para {
  color: grey;
  text-align: center;
  font-weight: 600;
}

@media (max-width: 900px) {
  .HomePage-Container,
  .homepage-imagecontainer {
    height: auto !important;
    min-height: 300px;
    padding: 24px 0;
  }
  .homepage-text-container {
    width: 98vw !important;
    gap: 14px !important;
    padding: 0 10px;
  }
  .homepage-text-container p {
    width: 100% !important;
    font-size: 1rem;
  }
  .homepage-button-container {
    width: 100% !important;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
  .homepage-counter-container {
    height: auto !important;
    padding: 18px 0;
  }
  .homepage-counter {
    width: 98vw !important;
    padding: 0 10px;
  }
}

@media (max-width: 600px) {
  .HomePage-Container,
  .homepage-imagecontainer {
    padding: 12px 0 !important;
    min-height: 120px;
  }
  .homepage-text-container {
    width: 100vw !important;
    padding: 0 4px;
    font-size: 1rem;
  }
  .homepage-text-container p {
    font-size: 0.95rem !important;
  }
  .homepage-counter {
    width: 100vw !important;
    padding: 0 4px;
  }
  .counter-heading {
    font-size: 1rem !important;
  }
  .counter-para {
    font-size: 0.95rem !important;
  }
}
</style>
