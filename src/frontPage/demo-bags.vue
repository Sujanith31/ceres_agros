<template>
    <div class="bag-content">
        <div class="product">
            <div class="bag">

            </div>
        </div>
    </div>
</template>
<style scoped>
    .bag-content {
        height: 90vh;
        width: 100%;
        position: relative;
        padding-top: 80px;
        overflow: hidden;
    }

    .bag-content .product {
        width: 500px;
        height: 500px;
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
        transition: 0.7s;
    }

    .bag-content .product .bag {
        background: 
            url('../assets/images/ceras-agro-logo.png') 30px 100px,
            url('../assets/images/freepik__expand__4844.png');
        background-size: 420px 180px, auto 100%;
        width: 320px;
        aspect-ratio: 9/12;
        background-blend-mode: multiply;
        mask-image: url('../assets/images/freepik__expand__4844.png');
        mask-size: auto 100%;
        background-repeat: no-repeat;
        transition: background-position 0.7s ease-in-out;
    }

    /* Proper hover effect */
    .bag-content .product:hover .bag {
        background-position: -160px 100px, 0 0;
    }
</style>

<script setup>


</script>