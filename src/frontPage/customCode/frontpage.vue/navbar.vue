<template>
  <section class="NavBar-Container">
    <div class="navBar-logo-container">
      <RouterLink :to="{ name: 'homepage' }" title="The future of plant science">
        <img class="navBar-logo" :src="logo" alt="" />
      </RouterLink>
    </div>

    <div class="navBar-links" :class="{ open: menuOpen }">
      <div class="navBar-links-container">
        <RouterLink :to="{ name: 'OurStory' }"><h6>Our Story</h6></RouterLink>
        <RouterLink :to="{ name: 'Aboutus' }"><h6>About us</h6></RouterLink>
        <RouterLink :to="{ name: 'ContactUs' }"><h6>Contact Us</h6></RouterLink>
        <RouterLink :to="{ name: 'BlogPage' }"><h6>Blog</h6></RouterLink>
      </div>
    </div>
    <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle navigation">
      <span :class="{ bar: true, open: menuOpen }"></span>
      <span :class="{ bar: true, open: menuOpen }"></span>
      <span :class="{ bar: true, open: menuOpen }"></span>
    </button>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '@/assets/img/ceras-agro-logo.png'
const menuOpen = ref(false)
</script>
<style scoped>
.NavBar-Container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  background-color: whitesmoke;
  z-index: 99999999;
  position: relative;
}
.navBar-logo-container {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navBar-logo {
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navBar-links {
  width: 600px;
  transition: right 0.3s;
}
.navBar-links-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navBar-links-container h6 {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
.navBar-links-container h6:hover {
  color: #0f9d58;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #0f9d58;
}

/* Hamburger styles */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
}
.hamburger .bar {
  width: 28px;
  height: 3px;
  background: #344767;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.4s;
}
.hamburger .bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger .bar.open:nth-child(2) {
  opacity: 0;
}
.hamburger .bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Responsive styles */
@media (max-width: 900px) {
  .NavBar-Container {
    justify-content: space-between;
    padding: 0 10px;
  }
  .navBar-logo-container {
    width: auto;
  }
  .navBar-links {
    position: absolute;
    top: 70px;
    right: -100vw;
    width: 100vw;
    background: whitesmoke;
    transition: right 0.3s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    z-index: 99;
    height: calc(100vh - 70px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 24px;
  }
  .navBar-links.open {
    right: 0;
  }
  .navBar-links-container {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 24px;
    padding-left: 24px;
  }
  .navBar-links-container h6 {
    font-size: 18px;
    padding: 8px 0;
  }
  .hamburger {
    display: flex;
  }
}
</style>
