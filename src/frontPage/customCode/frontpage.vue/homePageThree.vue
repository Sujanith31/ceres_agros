<template>
  <section class="PageThree-container">
    <div class="pageThree-image-shade">
      <div class="pageThree-text-container">
        <div class="pageThree-innertext-container">
          <h3>Built by soil health innovators.</h3>
          <h2>We know how to make soil healthy for your crops</h2>
          <p>
            We're dedicated to understanding what makes soil thrive. Our innovations are all about
            creating the best foundation for your crops to flourish
          </p>
          <button>Know more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.PageThree-container {
  color: white;
  width: 100%;
  padding: 20px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pageThree-image-shade {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ✅ Overlay pseudo-element on the image wrapper */
.pageThree-text-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* Black with 0.8 opacity */
  border-radius: 20px;
  z-index: 1;
  pointer-events: none;
}

.pageThree-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 80%;
  background-image: url('@/assets/img/vue-mk-header.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  border-radius: 20px;
  position: relative; /* So content is above the overlay */
  z-index: 2;
}
.pageThree-innertext-container {
  z-index: 99999;
  padding: 30px;
}
h3 {
  font-size: 25px;
  color: whitesmoke !important;
}
h2 {
  font-size: 35px;
  color: whitesmoke !important;
  font-weight: 700;
}
p {
  color: whitesmoke !important;
  font-size: 21px;
}
button{
  background-color:#4caf50;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  color: white;
  margin-top: 20px;
}
button:hover{
  background-color: #388e3c;
  color: white;
  cursor: pointer;
}

@media (max-width: 900px) {
  .PageThree-container {
    padding: 10px !important;
  }
  .pageThree-text-container {
    width: 98vw !important;
    height: 220px !important;
    padding: 0 8px;
  }
  .pageThree-innertext-container {
    padding: 16px !important;
  }
  h2 {
    font-size: 1.3rem !important;
  }
  h3 {
    font-size: 1.1rem !important;
  }
  p {
    font-size: 1rem !important;
  }
}

@media (max-width: 600px) {
  .pageThree-text-container {
    width: 100vw !important;
    height: max-content !important;
    padding: 10px 10px;
  }
  .pageThree-innertext-container {
    padding: 8px !important;
  }
  h2 {
    font-size: 1.5rem !important;
  }
  h3 {
    font-size: 0.85rem !important;
  }
  p {
    font-size: 0.75rem !important;
  }
}
</style>
