<template>
    <div>
            <h1 class="heading">
                <navbar/>

            </h1>
    </div>
    <div>
        <homepageone/>
    </div>
    <div class="frontCards-container">
        <frontCards/>
    </div>
    <div>
        <homePageThree/>
    </div>
    <div>
        <homePageFour/>
    </div>
    <div>
        <homePageFive/>
    </div>
    <div>
        <FooterCustom/>
    </div>
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
.heading{
    color: white;
    background-color: rgb(255, 252, 252);
    position: absolute;
    z-index: 999;
    width: 100%;   
}
</style>