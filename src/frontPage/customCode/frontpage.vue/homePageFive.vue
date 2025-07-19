<template>
  <section class="homepagefive-container">
    <div class="homepagefive-image-container">
      <div class="homepagefive-text-container">
        <div class="text-overlay-fivecontainer">
          <h3>Why Choose Ceres Agros for Your Fertilizer Needs?</h3>
          <p>
            Ceres Agros offers innovative, sustainable fertilizer solutions that boost crop yields,
            improve soil health, and support eco-friendly agriculture. With expert guidance and
            proven results, we're your partner for agricultural success.
          </p>
          <button>Join Our Family</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Other content remains unchanged -->
  <section class="location-container">
    <div class="location-inner-container">
      <h3 class="location-heading">Available on these Locations</h3>
      <div class="locationimage_div">
        <img :src="telangana" alt="" />
        <img :src="chennai" alt="" />
      </div>
    </div>
  </section>

  <section class="hompage_last_container">
    <div class="lastcontent-container">
    <div class="lastcontainer-text">   
      <h3>Thank you for your support!</h3>
      <p>We deliver the best agriculture products</p>
    </div>
    <div class="lastcontainer-buttons">
      <button class="button-one">Tweet</button>
      <button class="button-two">Share</button>
      <button class="button-three">Insta</button>
    </div>
  </div>
  </section>
</template>

<script setup>
import telangana from '@/assets/img/telangana.jpeg'
import chennai from '@/assets/img/chennai.jpeg'
</script>

<style scoped>
.homepagefive-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
}

.homepagefive-image-container {
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* ✅ Overlay effect */
.homepagefive-text-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* black with 0.8 opacity */
  border-radius: 20px;
  z-index: 1;
  pointer-events: none;
}

/* ✅ Background image + content */
.homepagefive-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/img/vue-mk-header.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  height: 400px;
  width: 100%;
  padding: 2rem;
  position: relative;
  z-index: 2;
}
.text-overlay-fivecontainer {
  z-index: 9999;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-overlay-fivecontainer h3 {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
}
.text-overlay-fivecontainer p {
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}
.location-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 200px;
  color: #344767;
}
.location-inner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.location-inner-container img {
  width: 100px;
}
.location-heading{
    font-size: 25px;
    font-weight: 700;
}
.locationimage_div{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    margin-top: 20px;
}
.hompage_last_container{
    background-color: whitesmoke;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: #344767; */
}
.lastcontent-container{
    width: 80% !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.lastcontainer-text h3{
    color: #344767;
    font-size: 25px;
    font-weight: 700 ;
}
.lastcontainer-text p{
    color: grey
}
.lastcontainer-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.lastcontainer-buttons button{
    border: none;
    color: white;
    width: 100px;
    font-size: 16px;
    font-weight: 500;
    padding: 4px;
    border-radius: 5px;
}
.button-one{
    background-color: blue;
}
.button-two{
    background-color: purple;
}
.button-three{
    background-color: red;
}
@media (max-width: 900px) {
  .homepagefive-image-container {
    width: 100% !important;
    min-width: 0 !important;
  }
  .homepagefive-text-container {
    height: auto !important;
    min-height: 220px;
    padding: 1rem !important;
  }
  .text-overlay-fivecontainer {
    width: 100% !important;
    max-width: 98vw;
    padding: 0 8px;
  }
  .text-overlay-fivecontainer h3 {
    font-size: 1.2rem !important;
    margin-bottom: 12px;
    text-align: center;
  }
  .text-overlay-fivecontainer p {
    font-size: 1rem !important;
    margin-bottom: 16px;
  }
  .location-container {
    height: auto !important;
    padding: 18px 0;
  }
  .locationimage_div {
    width: 100% !important;
    gap: 18px;
    justify-content: center !important;
  }
  .location-inner-container img {
    width: 70px !important;
  }
  .hompage_last_container {
    padding: 18px 0;
  }
  .lastcontent-container {
    width: 98% !important;
    flex-direction: column !important;
    gap: 18px;
    align-items: flex-start !important;
  }
  .lastcontainer-buttons {
    width: 100%;
    justify-content: flex-start !important;
    gap: 10px;
  }
  .lastcontainer-buttons button {
    width: 90px !important;
    font-size: 1rem !important;
    margin-bottom: 6px;
  }
}

@media (max-width: 600px) {
  .homepagefive-text-container {
    padding: 0.5rem !important;
    min-height: 120px;
  }
  .text-overlay-fivecontainer {
    padding: 0 4px;
  }
  .text-overlay-fivecontainer h3 {
    font-size: 1rem !important;
  }
  .text-overlay-fivecontainer p {
    font-size: 0.95rem !important;
  }
  .location-heading {
    font-size: 1rem !important;
  }
  .location-inner-container img {
    width: 48px !important;
  }
  .lastcontainer-text h3 {
    font-size: 1rem !important;
  }
  .lastcontainer-buttons button {
    width: 70px !important;
    font-size: 0.95rem !important;
    padding: 4px 0;
  }
}
</style>
