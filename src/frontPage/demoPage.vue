<script setup>

import AgroIconMain2 from '../assets/images/gardening.png'

</script>
<template>
  <section class="Main-page">
    <div class="Main-Content">
      <div class="Main-content-left">
        <div class="Left-Heading">
          <h1 class="Main-Heading-Left">
            Cultivating Progress, Harvesting <br />
            Success
          </h1>
        </div>
        <div class="Left-Para">
          <p class="Main-para-left">Where Innovation Meets Tradition...</p>
          <p class="Main-para-left">Sustainable Practices, Bountiful Yields...</p>
          <p class="Main-para-left">Transforming Agriculture, Enhancing Lives...</p>
          <p class="Main-para-left">Empowering Farmers, Nourishing Communities...</p>
        </div>
        <div class="left-button">
          <button class="Main-btn-buy">Buy now</button>
        </div>
      </div>
      <div class="Main-content-Right">
        <div class="AgroImageMain">
          <img class="AgroImageContent" :src="AgroIconMain2" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Main-page {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
}
.Main-Content {
  margin-top: 20px;
}
.Main-content-left {
  position: absolute;
  top: 45vh;
  left: 50px;
  /* z-index: 999; */
}
.Main-Heading-Left {
  font-size: 45px;
  line-height: 40px;
  margin-bottom: 20px;
}
.Left-Para {
  font-size: 18px;
}
.Main-content-Right {
  position: absolute;
  right: 40px;
  top: 30vh;
  /* z-index: 999; */
}
.AgroImageContent {
  width: 425px;
}
.Main-btn-buy {
  padding: 8px;
  border-radius: 10px;
  width: 175px;
  background-color: #378900;
  border: none;
  color: white;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
}

</style>
