<template>
  <section class="home-Page-Full-background">
    <div class="navbar-conatiner">
      <navBar />
    </div>
    <div class="main-page-container">
      <div class="main-page-header">
        <div class="heading">
          <h1 class="main-page-Heading" v-html="displayedText"></h1>
        </div>

        <div class="button-container">
          <div class="hover-indicator" :style="{ left: `${activeIndex * 100}%` }"></div>
          <button
            v-for="(btn, index) in buttons"
            :key="btn"
            @mouseenter="activeIndex = index"
            class="hover-button"
          >
            {{ btn }}
          </button>
        </div>
      </div>
    </div>
    <div class="home-page-slide-two-container">
      <div class="home-cards-container">
          <transition name="slide" mode="out-in">
            <div
              class="home-card"
              :key="currentCard.text"
              :style="{ backgroundImage: `url(${currentCard.image})` }"
            >
              <h1>{{ currentCard.text }}</h1>
            </div>
          </transition>
        </div>
    </div>
    <div class="home-page-slide-three-container">
      <secondarySlideOne/>
    </div>
    <div class="hompage-slide-four-container">
      <getInTouch/>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

import navBar from '../frontPage/navbar.vue'
import secondarySlideOne from '../frontPage/homePageSlides.vue'
import getInTouch from './getInTouch.vue'
const cards = [
  {
    text: 'about us',
    image: new URL('../assets/background/home-card-pic1.jpg', import.meta.url).href
  },
  {
    text: 'why us',
    image: new URL('../assets/background/home-card-two.jpg', import.meta.url).href
  }
]

const buttons = ['Home', 'About', 'Services', 'Contact']
const activeIndex = ref(0)
const currentIndex = ref(0)
const currentCard = computed(() => cards[currentIndex.value])

const fullText = 'Cultivating Progress, <br>Harvesting Success.'
const displayedText = ref('')
let index = 0

function typeText() {
  if (index < fullText.length) {
    displayedText.value += fullText[index]
    index++
    setTimeout(typeText, 80)
  }
}

onMounted(() => {
  typeText()
})

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % cards.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.home-Page-Full-background{
  background-color: black;
}
.navbar-conatiner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10; 
}
.main-page-container {
  width: 100%;
  height: 220vh;
  background: url(../assets/background/background-pic-m2.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: start;
}

.main-page-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
}

.main-page-Heading {
  font-size: 54px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  color: whitesmoke;
}
.home-page-slide-two-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-cards-container {
  margin-top: -25vh;
  width: 960px;
  height: 550px;
  overflow: hidden;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border-radius: 20px; */
  border: 10px solid black;
}

.home-page-slide-three-container{
  margin-top: 10vh;
}

.home-card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: brightness(0.7);
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease;
}

.slide-enter-from {
  transform: translateY(100%);
}
.slide-leave-to {
  transform: translateY(-100%);
}

.button-container {
  position: relative;
  display: flex;
  width: 300px;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9;
  margin-top: 10vh;
}

.hover-button {
  flex: 1;
  padding: 1rem;
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
  position: relative;
}

.hover-indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 25%;
  background: linear-gradient(to right, #070606, #d9e0e0);
  transition: left 0.8s ease;
  z-index: 0;
  border-radius: 8px;
}
</style>
