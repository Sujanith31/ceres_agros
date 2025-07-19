<template>
    <div>
        <navbar/>
    </div>
    <div>
        <!-- <blogfrontpae/> -->
         <blogpaegpt/>
    </div>
    <div>
        <FooterCustom/>
    </div>
</template>
<script setup>
import navbar from './frontpage.vue/navbar.vue';
import blogpaegpt from './blog/blogpaegpt.vue';
import FooterCustom from './footercustom.vue';
import blogfrontpae from './blog/blogfrontpae.vue';
</script>