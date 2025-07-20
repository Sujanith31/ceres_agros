<template>
  <section class="HomePage-Container">
    <div class="homepage-imagecontainer">
      <div class="homepage-text-container">
        <h2>Our Story</h2>
        <p>
          The journey of Ceres Agros began with a singular belief: Plant science must evolve. As
          farmers grappled with nutrient loss, poor soil response, and unpredictable yields, our
          founders envisioned a fertilizer that could do more — deliver nutrients with intent.
        </p>
        <p>
          By merging agronomy with material science, Ceres Agros gave birth to MET — Microphase
          Enrichment Technology, an innovation that changed how nutrients behave in the soil. Each
          granule we manufacture is a product of purpose, designed not just to feed the plant, but
          to redefine the way crops grow.
        </p>
      </div>
    </div>
  </section>
  <!-- <section>
    <div>
      <div class="frontrightcard-bottom-one">
        <h3>Invest in Growth</h3>
        <p>
          Maximize your return on investment with our cost-effective fertilizers that deliver
          exceptional results and long-term soil health.
        </p>
      </div>
    </div>
  </section> -->
  <section>
    <div class="sequence-cards">
      <div class="sequence-card-one">
        <div class="card-one-image">
          <img :src="picOne" alt="" />
        </div>
        <div class="card-one-text">
          <h3>Mission Statement</h3>
          <p>
            To revolutionize agriculture with innovative, sustainable solutions that enhance soil
            health and crop productivity, ensuring food security for future generations.
          </p>
        </div>
      </div>
      <div class="sequence-card-two">
        <div class="card-two-text">
          <h3>The 3 P’s of Ceres Agros</h3>
          <ul>
            <li>Precision – Tailored nutrient delivery.</li>
            <li>Performance – Consistent, measurable results.</li>
            <li>Progress – Advancing agriculture for a sustainable future.</li>
          </ul>
        </div>
        <div class="card-two-image">
          <img :src="ThreePs" alt="" />
        </div>
      </div>
      <div class="sequence-card-three">
        <div class="card-three-image">
          <img :src="picThree" alt="" />
        </div>
        <div class="card-three-text">
          <h3>Our Core Values</h3>
          <ul>
            <li>Innovation – We lead with science and stay future focused.</li>
            <li>Integrity – Transparency in every partnership.</li>
            <li>Sustainability – Growing responsibly for generations.</li>
            <li>Excellence – Uncompromising quality in every batch.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section>

  </section>
</template>
<script setup>
// import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
// import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
import check from '@/assets/img/balcony-garden-4.jpeg'
import picOne from '@/assets/img/statment-1.jpg'
import HappyWorker from '@/assets/img/happyworker.jpeg'
import picThree from '@/assets/img/statment-3.jpg'
import ThreePs from '@/assets/img/threePs.jpg'
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
  background-image: url('@/assets/img/OurStory.jpg');
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
.homepage-text-container h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #388e3c;
  margin-bottom: 8px;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #388e3c 10%, #8bc34a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
}
.homepage-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
.homepage-text-container p {
  font-size: 1.15rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.6;
  background: rgba(255,255,255,0.20);
  border-left: 6px solid #8bc34a;
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(76,175,80,0.06);
  position: relative;
  z-index: 2;
}
.frontrightcard-bottom-one {
  width: 280px;
  color: aliceblue;
  /* height: 200px; */
}
.sequence-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
}

.sequence-cards img {
  width: 425px;
}

.sequence-card-one,
.sequence-card-two,
.sequence-card-three {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.card-three-text,
.card-two-text,
.card-one-text {
  width: 500px;
}
.card-one-text h3,.card-two-text h3,.card-three-text h3{
  color: #388e3c;
  font-weight: 600;
  font-size: 1.5rem;
}
@media (max-width: 900px) {
  .HomePage-Container,
  .homepage-imagecontainer {
    height: auto !important;
    min-height: 300px;
    padding: 24px 0;
  }
  .homepage-text-container {
    width: 95% !important;
    gap: 12px !important;
    padding: 0 10px;
  }
  .homepage-text-container p {
    width: 100% !important;
    font-size: 1rem;
  }
  .sequence-cards {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .sequence-card-one,
  .sequence-card-three {
    flex-direction: column !important;
    width: 98% !important;
    gap: 18px;
    align-items: flex-start !important;
    margin-bottom: 32px;
  }
  .sequence-card-two{
    flex-direction: column-reverse !important;
    width: 98% !important;
    gap: 18px;
    align-items: flex-start !important;
    margin-bottom: 32px;
  }
  .sequence-cards img {
    width: 100% !important;
    max-width: 350px;
    height: auto;
    margin-bottom: 12px;
  }
  .card-three-text,
  .card-two-text,
  .card-one-text {
    width: 100% !important;
    font-size: 1rem;
    padding: 0;
  }
}

@media (max-width: 600px) {
  .homepage-text-container {
    width: 100% !important;
    padding: 0 6px;
    font-size: 1rem;
  }
  .sequence-cards {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .sequence-card-one,
  .sequence-card-two,
  .sequence-card-three {
    width: 100% !important;
    gap: 12px;
    margin-bottom: 24px;
  }
  .sequence-cards img {
    max-width: 100% !important;
    height: auto;
  }
  .card-three-text,
  .card-two-text,
  .card-one-text {
    font-size: 0.98rem;
  }
}
</style>
