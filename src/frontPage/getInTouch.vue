<template>
<section>
    <div class="getInTouch-container">
        <div class="getInTouch-left-content">
            <div class="GIT-heading-content">
                <div class="GIT heading-container">
                    <h2 class="GIT-left-content-heading">Contact Us</h2>
                </div>
            <div class="GIT-left_container-para">
                <p class="GIT-paragaraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit ad quam architecto dolore, inventore voluptates non at et velit, error quo, quisquam magnam maiores alias exercitationem. Unde, cumque maiores.</p>
            </div>
        </div>
    </div>
        <div class="getInTouc-right-container">
            <div class="GIT-right-card">  
                <div class="GIT-right-card-Enter-details">
                    <h2>Enter details</h2>
                </div>
                <div class="GIT-right-card-form">
                    <input type="text">
                    <input type="text">
                    <input type="text">
                </div>
                <div class="GIT-right-card-button">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>
.getInTouch-container{
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 600px;
    /* background-color: green; */
}
.getInTouch-left-content{
    width: 500px;
    background-color: red;
}
.GIT-left-content-heading{
    color: white;
}
.getInTouc-right-container{
    width: 600px;
    height: inherit;
    /* background-color: aqua; */
    display: flex;
    justify-content: start;
    align-items: end;
}
.GIT-right-card{
    margin: 40px;
    width:390px;
    height: 400px;
    background-color: whitesmoke;
    color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    padding-left: 40px;
}
.GIT-right-card-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.GIT-right-card-form input{
    border-radius:20px;
    padding: 8px;
    width: 300px;
    background-color: whitesmoke;
    border: 1px solid rgb(196, 196, 196);
}
.GIT-right-card-button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.GIT-right-card-button button{
    width: 180px;
    padding: 8px;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: rgb(0, 255, 0);
    cursor: pointer;
}
</style>