<script setup>

import AgroIconMain2 from '../assets/images/gardening.png';

</script>

<template>
    <section class="MainPage-2">
        <div class="mainPage2-heading-para-container">
            <div class="mainPage2-heading-container">
                <h1 class="mainPage2-heading"><span class="mainPage2-heading-span">Crops</span> We Nourish</h1>
            </div>
            <div class="mainPage2-para-container">
                <p class="mainpage2-para">Aries offers diverse crop nourishment products ranging from Chelates to water soluble micronutrients & fertilizers</p>
            </div>
        </div>
        <div class="mainPage2-cards-container">
            <div class="cards-container">
                <div class="image-container">
                    <img class="mainPage2-image" :src="AgroIconMain2" alt="">
                    <button class="image-container-button">know more</button>
                </div>
                <div class="image-container">
                    <img class="mainPage2-image" :src="AgroIconMain2" alt="">
                    <button class="image-container-button">know more</button>
                </div>
                <div class="image-container">
                    <img class="mainPage2-image" :src="AgroIconMain2" alt="">
                    <button class="image-container-button">know more</button>
                </div>
                <div class="image-container">
                    <img class="mainPage2-image" :src="AgroIconMain2" alt="">
                    <button class="image-container-button">know more</button>
                </div>
            </div>
            <div class="cards-button-container">
                <button class="cards-container-button">Know more</button>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .MainPage-2{
        width: 100%;
        padding: 16px;
    }
    .mainPage2-heading-para-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 24px
    }
    .mainPage2-heading-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mainPage2-heading{
        font-size: 48px;
        font-weight: 700;
        color: #6EC030;
    }
    .mainPage2-heading-span{
        font-size: 48px;
        font-weight: 700;
        color: #378900;
    }
    .mainPage2-para-container{
        width: 520px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 21px;
    }
    .mainpage2-para{
        font-size: 18px;
        text-align: center;
    }
    .mainPage2-image{
        width: 210px;
        height: 300px;
    }
    .mainPage2-cards-container{
        padding: 16px;
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cards-container{
        max-width: 960px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }
    .image-container{
        position: relative;
    }
    .image-container button{
        position: absolute;
        bottom: 40px;
        right: 20px;
        cursor: pointer;
        background-color: #F4AC03;
        padding: 8px;
        border-radius: 0px 20px 0px 20px;
        border: none;
        width: 150px;
        height: 5vh;
        font-size: 18px;
        text-align: center;
        font-weight: 600;
        color: white;
    }
    .cards-container-button{
        cursor: pointer;
        background-color: #F4AC03;
        padding: 8px;
        border-radius: 0px 20px 0px 20px;
        border: none;
        width: 150px;
        height: 5vh;
        font-size: 18px;
        text-align: center;
        font-weight: 600;
        color: white;
        transition: 0.5s;
    }
    .cards-button-container:hover .cards-container-button{
        width: 145px;
        height: 4.7vh;
        font-size: 16px;
        font-weight: 600;
    }
    .cards-button-container{
        margin-top: 48px;
        width: 180px;
        height: 5vh;
        cursor: pointer;
    }
    /*********************************** CSS animations *************************************************/

    .image-container{
        transition: .5s;
    }
    .image-container:hover{
        filter: brightness(1);
        transform: translateZ(100px);
        cursor: pointer;
    }
    .image-container:hover + *{
        filter: brightness(0.6);
        transform: translateZ(70px) rotateY(20deg);
    }
    .image-container:hover + * + *{
        filter: brightness(0.2);
        transform: translateZ(35px) rotateY(10deg);
    }
    .image-container:hover + * + * + *{
        filter: brightness(0);
        transform: translateZ(12px) rotateY(0deg);
    }
    .image-container:has(+*:hover){
        filter: brightness(0.6);
        transform: translateZ(70px) rotateY(-20deg);
    }
    .image-container:has(+*+*:hover){
        filter: brightness(0.2);
        transform: translateZ(35px) rotateY(-10deg);
    }
    .image-container:has(+*+*+*:hover){
        filter: brightness(0);
        transform: translateZ(12px) rotateY(0deg);
    }
</style>