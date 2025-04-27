<script setup>

import growth from '../assets/images/growth.png';
import logo from '../assets/images/plant-a-tree.png';
import insta from '../assets/images/send.png';
import twitter from '../assets/images/twitter.png';
import faceBook from '../assets/images/facebook-app-symbol.png'

</script>

<template>
    <section class="mainPage3-demoFooter">
        <div class="demoFooter-registration">
            <div class="demoFooter-registration-left">
                <div class="demoFooter-Header">
                <h3 class="subscription-header">Subscribe to get information and latest news.</h3>
            </div>
            <div class="subscription-input-container">
                <input type="text" placeholder="ceresAgro@gmail.com" class="registeration-input">
                <button class="register-button">Submit</button>
            </div>
            </div>
            <div class="demoFooter-registration-image-right">
                <div class="demoFooter-registration-image-container">
                    <img class="demoFooter-registration-image" :src="growth" alt="">
                </div>
            </div>
        </div>
        <div class="rest-footer">
            <div class="logo-address-footer">
                <div class="logo-demoFooter">
                    <img class="logo-demoFooter-image" :src="logo" alt="">
                    <h3 class="logoName-Footera">Ceres Agro</h3>
                </div>
                <div class="address-demoFooter">
                    <h4>Aries Agro Limited. Aries House, Plot No.24, Deonar, Govandi (East), Mumbai – 400043</h4>
                    <h4>+91 22 25529000, 25564052/53</h4>
                    <h4>ceresAgro@gmail.com</h4>
                </div>                
            </div>
            <div class="ourProducts-demoFooter">
                <h3 class="ourProducts-demoFooter-header">
                    Our Products
                </h3>

                    <li class="Products">Micronutrients</li>
                    <li class="Products">Plant Protection</li>
                    <li class="Products">Aqua Culture & Animal Nutrition</li>
                    <li class="Products">Other Products</li>
                    <li class="Products">Speciality Nutrients</li>
                    <li class="Products">Hydroponics and Consultancy</li>

            </div>
            <div class="Aboutus-demoFooter">
                <h3 class="aboutus-header">About us</h3>
                    <li class="about">Company Overview</li>
                    <li class="about">Success Stories</li>
                    <li class="about">CSR Activities</li>
                    <li class="about">Career with us</li>
                    <li class="about">Gallery</li>
                    <li class="about">Contact Us</li>
                    <li class="about">Digital Payment</li>
            </div>
            <div class="quickLinks-demoFooter">
                <h3 class="quickLinks-header">Quick Links</h3>

                    <li class="quicksLinks">Home</li>
                    <li class="quicksLinks">Knowledge Centre</li>
                    <li class="quicksLinks">Hydroponics & Consultancy</li>
                    <li class="quicksLinks">Blogs & videos</li>
                    <li class="quicksLinks">Forms/Formats</li>
                    <li class="quicksLinks">FAQs</li>
                    <li class="quicksLinks">News & Updates</li>
                    <li class="quicksLinks">Success Stories</li>

            </div>
        </div>
        <div class="bottom-socialMedia-footer">
            <div class="line-socialMedia-footer"></div>
            <div class="socialMedia-Footer-container">
                <div class="description-demoFooter">
                    <p>All product pictures shown are for illustration purpose only. Actual product may vary due to product enhancement.</p>
                </div>
                <div class="socialMedia-logos">
                    <img class="socialMedia-logos-image" :src="faceBook" alt="">
                    <img class="socialMedia-logos-image" :src="insta" alt="">
                    <img class="socialMedia-logos-image" :src="twitter" alt="">
                </div>
            </div>
            <div class="line-socialMedia-footer"></div>
        </div>
    </section>
</template>
about us 



quick links

Home
Knowledge Centre
Hydroponics & Consultancy
Blogs & videos
Forms/Formats
FAQs
News & Updates
Success Stories

<style scoped>
.mainPage3-demoFooter{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
}
.demoFooter-registration{
    background-color: #378900;
    color: white;
    width: 960px;
    height: 40vh;
    padding: 50px;
    border: none;
    border-radius: 10px;
    position: relative;
}
.demoFooter-registration-left{
    position: relative;
}
.demoFooter-registration-image-right{
    position: relative;
}
.demoFooter-Header{
    margin-top: 10px;
    width: 600px;
}
.subscription-header{
    font-size: 36px;
    font-weight: 600;
    line-height: 38px;
}
.subscription-input-container{
    margin-top: 20px;
}
.subscription-input-container input{
    padding: 10px;
    border-radius: 10px;
    width: 320px;
    border: none;
    background-color: whitesmoke;
    font-weight: 600;
}
.subscription-input-container button{
    margin-left: 3rem;
    width: 180px;
    padding: 10px;
    border-radius: 10px;
    background-color: #915431;
    border: none;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;
}
.demoFooter-registration-image{
    width: 320px;
    position: absolute;
    right: -150px;
    top: -250px;
}
.rest-footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.rest-footer h3{
    color: #378900;
    font-size: 21px;
    font-weight: 700;
}
.logo-address-footer,
.quickLinks-demoFooter,
.Aboutus-demoFooter,
.ourProducts-demoFooter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 225px;
    gap: 20px;
    margin-left: 40px;
}
.quickLinks-demoFooter li,
.Aboutus-demoFooter li,
.ourProducts-demoFooter li{
    list-style: none;
    line-height: 5px;
    cursor: pointer;
}
.quickLinks-demoFooter li:hover,
.Aboutus-demoFooter li:hover,
.ourProducts-demoFooter li:hover{
    color: #6EC030;
}

.address-demoFooter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
}
.logo-demoFooter-image{
    width: 75px;
    margin-top: 20px;
}
.logoName-Footera{
    font-size: 21px;
    font-weight: 700;
    color: #378900;
}
.socialMedia-logos-image{
    width: 21px;
    margin-left: 20px;
    cursor: pointer;
}
.bottom-socialMedia-footer{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.line-socialMedia-footer{
    width: 960px;
    height: 1px;
    background-color: #915431;
    margin: 20px 0px;
}
.socialMedia-Footer-container{
    width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>