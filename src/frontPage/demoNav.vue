<script setup>
import AgroIcon from '../assets/images/plant-a-tree.png';
import SearchIcon from '../assets/images/search.png';
</script>
<template>
    <nav class="NavBar">
        <div class="Left-section">
            <div class="NavBar-icon">
                <img :src="AgroIcon" class="Icon" alt="">
            </div>
            <div class="Left-Nav-buttons-section">
                <h3 class="Nav-button">Products & Services</h3>
                <h3 class="Nav-button">Crops</h3>
                <h3 class="Nav-button">Investor Relations</h3>
                <h3 class="Nav-button">About Us</h3>
                <h3 class="Nav-button">Equipment</h3>
                <h3 class="Nav-button">Contact Us</h3>
            </div>
        </div>
        <div class="Right-section">
            <div class="Right-Nav-buttons-section">
                <h3 class="Nav-btns-right">Apps</h3>
                <h3 class="Nav-btns-right">Select Language</h3>
            </div>
            <div class="Right-Search-icon">
                <img class="searchIcon" :src="SearchIcon" alt="">
                <input type="text" class="search-Input">
            </div>
        </div>
    </nav>
</template>
<style scoped>

    .Left-section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 55%;
        padding-left: 50px;
    }
    .NavBar{
        width: 95%;
        border-radius: 55px;
        background-color: #378900;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px;
    }
    .Icon{
        width: 55px;
    }
    .searchIcon{
        width: 40px;
    }
    .Left-Nav-buttons-section{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Nav-button{
        margin-left: 15px;
    }
    .Nav-btns-right{
        margin-left: 20px;
    }
    .Right-section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%
    }
    .Right-Nav-buttons-section{
        display: flex;
        justify-content: center;
        align-items: center;
        width:60%
    }
    .Right-Search-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        gap: 20px;
    }
    .search-Input{
        border-radius: 20px;
        padding: 5px;
        border: 2px solid 378900;
        z-index: 9999;
    }
   h3{
    font-size: large;
    font-weight: 600;
    color: whitesmoke;
   }
   
</style>