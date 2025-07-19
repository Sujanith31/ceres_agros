<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import NavBar from '../src/frontPage/demoNav.vue';
// import MainPage from '../src/frontPage/demoPage.vue';
// import mainPage2 from '../src/frontPage/demoPage2.vue';
// import demoFooter from '../src/frontPage/demoFooter.vue';
// import homepage from './frontPage/homepage.vue';
import homePage from './frontPage/customCode/homepage.vue';
import ourstory from './frontPage/customCode/outStoryPage.vue';
// import demoBags from './frontPage/demo-bags.vue';

</script>

<template>
 
  <!-- <div class="NavBar">
    <NavBar/>
  </div> -->
  <div>
    <!-- <homePage/> -->
  </div>
  <!-- <div class="MainPage">
    <MainPage/>
  </div>
  <div class="MainPage2">
    <mainPage2/>
  </div>
  <div class="demoFooter">
    <demoFooter/>
  </div> -->
  <!-- <div class="demo-bags">
    <demoBags/>
  </div> -->
  <!-- <RouterView /> -->
   <div>
    <!-- <ourstory/> -->
   </div>
  <router-view />
</template>

<style scoped>
  .NavBar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    position: absolute;
    top: 5px;
    width: 100%
  }
  .MainPage{
    position: relative;
    height: 90vh;
    width: 100%
  }
  .MainPage2{
    position: relative;
    height: 90vh;
    width: 100%;
  }
  .demoFooter{
    width: 100%;
    height: 90vh;
    position: relative;
  }
</style>
