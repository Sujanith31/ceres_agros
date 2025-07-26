<template>
  <section class="homePageFour-container">
    <div class="homePageFour-text-container">
      <h4 class="homePageFour-text-container-h4">Boost Production</h4>
      <h2 class="homePageFour-text-container-h2">ADVANCED NPK SPECIALITY BLENDS WITH MET</h2>
      <p class="homePageFour-text-container-p">
        Turbocharge crops with MET for improved soil health consistent higher yields - seasons after
        seasons with our 100% water-soluble fertilisers.
      </p>
    </div>
    <div class="homePageFour-image-containers">
      <div class="homePageFour-images">
        <div class="homepageFour-image-topc">
          <RouterLink :to="{ name: 'OurStory' }">
            <img :src="logoOne" alt="Ceres Agros Fertilizer" />
          </RouterLink>
          <RouterLink :to="{ name: 'Aboutus' }">
            <img :src="logoTwo" alt="Ceres Agros Fertilizer" />
          </RouterLink>
        </div>
        <div class="homepageFour-image-bottomc">
          <RouterLink :to="{ name: 'ContactUs' }">
            <img :src="logoThree" alt="Ceres Agros Fertilizer" />
          </RouterLink>
          <RouterLink :to="{ name: 'BlogPage' }">
            <img :src="logoFour" alt="Ceres Agros Fertilizer" />
          </RouterLink>
        </div>
      </div>
      <div class="homepageFour-para-conatiner">
        <h3>
          The science of smiles: How our innovative formulas create healthier crops and happier
          farmers.
        </h3>
        <p>
          Explore these possibilities to see our business impact. Let's prioritize your farm's
          bottom line over pure aesthetics.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import homlogo from '@/assets/img/ceras-agro-logo.png'
import logoOne from '@/assets/img/logo-one.jpg'
import logoTwo from '@/assets/img/logo-second.jpg'
import logoThree from '@/assets/img/logo-Three.jpg'
import logoFour from '@/assets/img/logo-Four.jpg'
</script>
<style scoped>
.homePageFour-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  color: #344767;
  width: 100%;
}
.homePageFour-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  text-align: center;
}
.homePageFour-text-container-h4 {
  color: white;
  background-color: #0f9d58;
  padding: 5px;
  width: 280px !important;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
}
.homePageFour-text-container-h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 20px 0;
}
.homePageFour-text-container-p {
  font-size: 16px;
  font-weight: 500;
  color: #555d6c;
}
.homePageFour-image-containers {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: tomato; */
  gap: 10%;
}
.homePageFour-images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  gap: 20px;
  /* background-color: violet; */
}
.homepageFour-image-topc,
.homepageFour-image-bottomc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.homepageFour-image-topc img,
.homepageFour-image-bottomc img {
  width: 200px;
}
.homepageFour-para-conatiner {
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #555d6c;
  /* background-color: #0f9d58; */
}
.homepageFour-para-conatiner h3 {
  color: #344767;
  font-size: 25px;
  font-weight: 700;
}
@media (max-width: 1100px) {
  .homepageFour-para-conatiner {
    width: 370px;
  }
}
@media (max-width: 900px) {
  .homePageFour-text-container {
    width: 98vw !important;
    padding: 0 10px;
  }
  .homePageFour-text-container-h2 {
    font-size: 1.3rem !important;
    margin: 12px 0;
  }
  .homePageFour-text-container-h4 {
    font-size: 1rem !important;
    width: 280px !important;
    padding: 4px;
  }
  .homePageFour-image-containers {
    flex-direction: column !important;
    gap: 32px !important;
    align-items: center !important;
    width: 100% !important;
  }
  .homePageFour-images {
    width: 100% !important;
    gap: 16px !important;
  }
  .homepageFour-image-topc,
  .homepageFour-image-bottomc {
    width: 100% !important;
    justify-content: center !important;
    gap: 16px;
  }
  .homepageFour-image-topc img,
  .homepageFour-image-bottomc img {
    width: 120px !important;
    max-width: 40vw;
    height: auto;
  }
  .homepageFour-para-conatiner {
    width: 98vw !important;
    padding: 0 10px;
    text-align: left;
  }
  .homepageFour-para-conatiner h3 {
    font-size: 1.1rem !important;
  }
}

@media (max-width: 600px) {
  .homePageFour-text-container {
    width: 100vw !important;
    padding: 0 4px;
  }
  .homePageFour-text-container-h2 {
    font-size: 1rem !important;
  }
  .homePageFour-text-container-h4 {
    font-size: 0.95rem !important;
    width: 200px !important;
    padding: 3px;
  }
  .homepageFour-image-topc img,
  .homepageFour-image-bottomc img {
    width: 100px !important;
    max-width: 80vw;
  }
  .homepageFour-para-conatiner {
    width: 100vw !important;
    padding: 20px 20px;
  }
  .homepageFour-para-conatiner h3 {
    font-size: 1rem !important;
  }
}
</style>
