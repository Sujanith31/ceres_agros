<template>
    <section class="whole-div">
        <div>
            <h1 class="heading">
                <navbar/>

            </h1>
    </div>
    <div class="homepageone-container">
        <homepageone/>
    </div>
    <div class="frontCards-container">
        <frontCards/>
    </div>
    <div>
        <homePageThree/>
    </div>
    <div class="homepage-four-container">
        <homePageFour/>
    </div>
    <div class="homepage-fiv-container">
        <homePageFive/>
    </div>
    <div>
        <FooterCustom/>
    </div>
    </section>
</template>
<script setup>
    import homepageone from './frontpage.vue/homepageone.vue';
    import navbar from './frontpage.vue/navbar.vue';
    import frontCards from './frontpage.vue/frontCards.vue';
    import homePageThree from './frontpage.vue/homePageThree.vue';
    import homePageFour from './frontpage.vue/homePageFour.vue';
    import homePageFive from './frontpage.vue/homePageFive.vue';
    import FooterCustom from './footercustom.vue';
</script>
<style scoped>
.whole-div{
    background-color: whitesmoke;
}
.heading{
    color: white;
    background-color: rgb(255, 252, 252);
    /* position: absolute; */
    z-index: 999;
    width: 100%;   
}
.frontCards-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    background-color: whitesmoke;
    margin-top: 30px;
}
.homepage-fiv-container{
    padding: 10px 20px;
    background-color: whitesmoke;
    margin-top: 50px;
}
.homepage-four-container{
    background-color: whitesmoke;
    margin-top: 50px;
}
</style>