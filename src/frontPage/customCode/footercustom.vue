<template>
   <div class="footer-conatiner">
     <div>
        <img :src="logo" alt="">
    </div>
   <div class="footer-links">
      <RouterLink to="">
         About us
      </RouterLink>
      <RouterLink to="">
         Contact us
      </RouterLink>
      <RouterLink to="">
         Blog
      </RouterLink>
      <RouterLink to="">
         Our Story
      </RouterLink>
   </div> 
   </div>
   <div class="disclamer">
    <p>All rights reserved. Copyright © 2025 Ceres Agros</p>
   </div>
</template>
<script setup>
import logo from "@/assets/img/ceras-agro-logo.png";
import { RouterLink } from "vue-router";
</script>

<style scoped>
   .footer-conatiner{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: whitesmoke;
      padding-top: 50px;
   }
   .footer-conatiner img{
      width: 100px;
   }
   .footer-links{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 400px;
   }
   .disclamer{
      display: flex;
      justify-content: center;
      align-items: center;
   }
</style>