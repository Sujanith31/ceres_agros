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
          <!-- <button>Get Started</button> -->
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
  background-color: whitesmoke;
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
  width: 300px;
}
.homepage-button-container button {
  /* width: 300px !important; */
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}
.homepage-button-container button:hover {
  background: #388e3c;
  color: #fff;
}
.homepage-text-container h2 {
  color: #388e3c;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
  background: transparent;
  /* Gradient text effect */
  background-image: linear-gradient(90deg, #e8f5e9 60%, #4caf50 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  box-shadow: none;
  padding: 0;
  transition: background 0.3s;
}
.homepage-text-container p {
  width: 100%;
  font-size: 1.15rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.6;
  /* background: #fff; */
  border-left: 6px solid #4caf50;
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.06);
  transition: border-color 0.3s;
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
  color: #388e3c;
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #e8f5e9 60%, #4caf50 100%);
  padding: 6px 14px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.08);
}
.counter-para {
  color: #344767;
  text-align: center;
  font-weight: 600;
  font-size: 1.05rem;
  line-height: 1.5;
  background: #fff;
  border-left: 6px solid #4caf50;
  padding: 10px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.06);
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
  .homepage-text-container h2 {
    font-size: 1.3rem !important;
    padding: 4px 8px;
  }
  .homepage-text-container p {
    width: 100% !important;
    font-size: 1rem !important;
    padding: 8px 10px;
    border-left-width: 4px;
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
  .homepage-text-container h2 {
    font-size: 1rem !important;
    padding: 2px 4px;
  }
  .homepage-text-container p {
    font-size: 0.92rem !important;
    padding: 6px 4px;
    border-left-width: 3px;
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
