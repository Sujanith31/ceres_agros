<template>
  <div class="footer-conatiner">
    <div>
      <!-- <img :src="logo" alt="" /> -->
      <RouterLink :to="{name:'homepage'}"> <img :src="logo" alt="" /></RouterLink>
    </div>
    <div class="footer-links">
      <RouterLink :to="{ name: 'Aboutus' }">About us</RouterLink>
      <RouterLink :to="{ name: 'ContactUs' }">Contact us</RouterLink>
      <RouterLink :to="{ name: 'BlogPage' }">Blog</RouterLink>
      <RouterLink :to="{ name: 'OurStory' }">Our Story</RouterLink>
    </div>
  </div>
  <div class="disclamer">
    <p>All rights reserved. Copyright © 2025 Ceres Agros</p>
  </div>
</template>
<script setup>
import logo from '@/assets/img/ceras-agro-logo.png'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer-conatiner {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: whitesmoke;
  padding-top: 50px 20px;
  margin-top: 20px;
}
.footer-conatiner img {
  width: 100px;
}
.footer-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
}
.footer-links a {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: #0f9d58;
}
.disclamer {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .footer-conatiner {
    flex-direction: column !important;
    gap: 24px;
    padding-top: 30px !important;
    align-items: flex-start !important;
  }
  .footer-links {
    width: 100% !important;
    justify-content: flex-start !important;
    gap: 18px;
    padding-left: 12px;
    flex-wrap: wrap;
  }
  .footer-conatiner img {
    width: 80px !important;
    margin-bottom: 12px;
  }
}

@media (max-width: 600px) {
  .footer-conatiner {
    gap: 14px;
    padding-top: 18px !important;
  }
  .footer-links {
    gap: 30px;
    padding-left: 14px;
    font-size: 0.95rem;
    flex-direction: row !important;
    align-items: center !important;
  }
  .footer-conatiner img {
    width: 60px !important;
    margin-left: 10px;
  }
  .disclamer p {
    font-size: 0.95rem;
    text-align: center;
    padding: 0 4px;
  }
}
</style>
