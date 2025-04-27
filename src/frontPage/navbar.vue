<template>
    <div class="navbar-main">
        <div class="ceras-agro-logo">
            <h1 class="logo-name">Ceres Agro</h1>
        </div>
        <div class="mid-menu">
            <button>Crop Guide</button>
            <button>Products</button>
        </div>
        <div class="right-menu">
            <button>Blog</button>
        </div>
    </div>
</template>
<style scoped>

.navbar-main{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo-name{
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
}
.mid-menu{
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button{
    background-color: transparent;
    border: none;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
    border-radius: 20px;
}
button:hover{
    color: black;
    cursor: pointer;
    background-color: gray;
    padding: 8px;
    transition: 0.3s ease;
}
</style>