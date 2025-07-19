<template>
    <div>
        <navbar/>
    </div>
    <div class="contactus-section-main-container">
        <!-- <contactusfront/> -->
         <contactusgpt/>
    </div>
    <div>
        <FooterCustom/>
    </div>
</template>
<script setup>
import navbar from './frontpage.vue/navbar.vue';
import contactusfront from './contactus/contactusfront.vue';
import FooterCustom from './footercustom.vue';
import contactusgpt from './contactus/contactusgpt.vue';
</script>
<style scoped>
.contactus-section-main-container{
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>