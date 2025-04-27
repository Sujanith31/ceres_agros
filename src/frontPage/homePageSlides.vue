<template>
    <div class="homepage-seconday-slide-one-container">
        <div class="homepage-slide-left-container">
            <div class="left-container-heading">
                <h1>
                    Ceres Agro
                </h1>
            </div>
            <div class="left-container-descriptio" ref="slideContainer">
                <p class="left-content-para" v-html="displayedLeftText"></p>
                <div class="left-container-image-box" v-if="leftTextComplete">
                    <img class="three-circles-one" src="../assets/background/home-card-one.jpg" alt="">
                    <img class="three-circles-two" src="../assets/background/home-card-pic1.jpg" alt="">
                    <img class="three-circles-three" src="../assets/background/home-card-two.jpg" alt="">
                </div>
                <p class="left-image-description" v-if="leftTextComplete">Lorem ipsum dolor sit amet</p>
            </div>
        </div>
        <div class="homepage-slide-middle-container">
            <div class="middle-container-top-image">
                <img src="../assets/background/farm-warehouse.jpeg" alt="">
            </div>
            <div class="middle-line-border"></div>
            <div class="middle-container-bottom-image">
                <img src="../assets/background/farmers-land.jpeg" alt="">
            </div>
            <div class="middle-slide-know-more-button-container">
                <button class="middle-slide-know-more-button">Know More</button>
            </div>
        </div>
        <div class="homepage-slide-right-container">
            <div class="right-side-container-heading">
                <h1>Documentation</h1>
            </div>
            <div class="right-side-conatiner-para">
                <p class="left-content-para" v-html="displayedRightText"></p>
            </div>
            <div class="right-explore-button-container" v-if="rightTextComplete">
                <button class="right-container-explore-button">Explore</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const RightText = ' -> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>-> sit voluptate, accusamus repellendus animi delectus laboriosam . <br> -> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  <br> -> sit voluptate, accusamus repellendus animi delectus laboriosam in consequatur nulla laborum.';
const LeftText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem omnis nam at exercitationem quis eius corporis cum pariatur saepe, sit voluptate, accusamus repellendus animi delectus laboriosam in consequatur nulla laborum.';

const displayedLeftText = ref('');
const displayedRightText = ref('');
let leftIndex = 0;
let rightIndex = 0;
const typingSpeed = 20;
const slideContainer = ref(null)
const leftTextComplete = ref(false);
const rightTextComplete = ref(false);

function typeLeftText() {
  if (leftIndex < LeftText.length) {
    displayedLeftText.value += LeftText[leftIndex];
    leftIndex++;
    setTimeout(typeLeftText, typingSpeed);
  } else {
    leftTextComplete.value = true;
    setTimeout(typeRightText, 500);
  }
}

function typeRightText() {
  if (rightIndex < RightText.length) {
    displayedRightText.value += RightText[rightIndex];
    rightIndex++;
    setTimeout(typeRightText, typingSpeed);
  } else {
    rightTextComplete.value = true;
  }
}

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeLeftText();
        observer.unobserve(slideContainer.value); // Observe only once
      }
    });
  });

  observer.observe(slideContainer.value);
});
</script>
<style scoped>

.homepage-slide-left-container{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 125vw;
    padding: 40px;
    height: 120vh;
    font-size: 18px;
}
.left-container-image-box{
    margin-top: 5vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    animation: slowappear 5s ease forwards;
    opacity: 0;
}
@keyframes slowappear {
    from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.three-circles-two{
    width: 100px;
    border: 2px solid rgb(0, 255, 0);
    border-radius: 50%;
    padding: 3px;
}
.three-circles-one, .three-circles-three{
    width: 150px;
    border: 2px solid rgb(0, 255, 0);
    border-radius: 50%;
    padding: 3px;
}
.left-image-description{
    margin-top: 3vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left-container-heading, .right-side-container-heading{
    font-size: 38px;
    font-family: 'Times New Roman', Times, serif;
}
.homepage-slide-right-container{
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    width: 125vw;
    padding: 40px;
    height: 120vh;
    font-size: 18px;
    /* border: 1px solid white; */
}
.homepage-seconday-slide-one-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 120vh;
    /* background-color: brown; */
}
.homepage-slide-middle-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 4.5px solid rgb(0, 255, 0);
    border-radius: 5px;
    width: 315px;
}
.middle-line-border{
    width: 100%;
    height: 4.5px;
    background-color: rgb(0, 255, 0);
}
.middle-container-top-image img, .middle-container-bottom-image img{
    width: 300px;
    height: 250px;
}
.middle-slide-know-more-button{
    color: white;
    background-color: rgb(0, 255, 0);
    border: none;
    border-radius: 5px  5px 0px 0px;
    margin: 0;
    padding: 10px;
}
.right-explore-button-container{
    margin-top: 4vh;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0;
    animation: slowappear 4s ease forwards;
}
.right-explore-button-container button{
    padding: 10px;
    font-size: 24px;
    width: 150px;
    font-weight: 600;
    font-family: monospace;
    border: none;
    border-radius: 20px;
}
</style>