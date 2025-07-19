<template>
    <section class="NavBar-Container">
        <div class="navBar-logo-container">
            <RouterLink :to="{name: 'homepage'}" title="The future of plant science">
                <img class="navBar-logo" :src="logo" alt="">
            </RouterLink>

    </div>

    <div class="navBar-links">
        <div class="navBar-links-container">
           <RouterLink :to="{name: 'OurStory'}"><h6>Our Story</h6></RouterLink>
           <RouterLink :to="{name: 'Aboutus'}"><h6>About us</h6></RouterLink>
           <RouterLink :to="{name: 'ContactUs'}"><h6>Contact Us</h6></RouterLink>
           <RouterLink :to="{name: 'BlogPage'}"><h6>Blog</h6></RouterLink>
        </div>
    </div>
    </section>
</template>
<script setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/img/ceras-agro-logo.png";
</script>
<style scoped>
.NavBar-Container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    background-color: whitesmoke;
    z-index: 99999999;
}
.navBar-logo-container{
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navBar-logo{
    width: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navBar-links{
    width: 600px;
    
}
.navBar-links-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navBar-links-container h6{
    color: #000;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
.navBar-links-container h6:hover{
    color: #0f9d58;
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #0f9d58;
}

</style>