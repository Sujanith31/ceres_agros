<template>
<section class="HomePage-Container">
    <div class="homepage-imagecontainer">
      <div class="homepage-text-container">
       

        
      </div>
    </div>
  </section>
  <section>
    <div>
        <div class="blogpage-content-container">
            <div class="blogpage-name">
                <div class="blogpage-name-text">
                    <div class="founder-name ">
                        <h1><h1>Esukapalli RajaShekar Reddy</h1></h1>
                    </div>
                    <div class="founder-stats">
                        <h3>323Posts</h3>
                        <h3>3.5kFollowers</h3>
                        <h3>260Following</h3>
                    </div>
                </div>
                <div class="blogpage-follow-button-div">
                    <button>
                        Follow
                    </button>
                </div>
            </div>
            <div class="blogpage-para-container">
                <p>Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous.More about me</p>
            </div>
        </div>
    </div>
  </section>
  <section>
    <div>
        <div class="blogpage-posts-container">
            <div class="blogpage-posts-heading">
                <div class="blogpage-posts-heading-text">
                    <h2>Check Out latest blogposts</h2>
                </div>
            </div>
            <div class="blogpage-posts-cards-conatienr">
                <div class="innercards-container">
                    <div class="innercard-one">
                        <div class="image-card">
                            <img src="" alt="">
                        </div>
                        <div class="innercards-text">
                            <h3>Precision Agriculture with IoT and Smart Sensors</h3>
                            <p>The integration of Internet of Things (IoT) technologies in agriculture has enabled real-time monitoring of soil and plant health. Biodegradable leaf and soil sensors, developed by research centers like NSF-funded IoT4Ag, can detect nutrient levels and environmental conditions. These sensors, combined with ground and aerial robots, provide farmers with timely insights to adjust practices, enhancing efficiency and sustainability.</p>
                            <button><a href="">Read more</a></button>
                        </div>
                    </div>
                    <div class="innercard-one">
                        <div class="image-card">
                            <img src="" alt="">
                        </div>
                        <div class="innercards-text">
                            <h3>CRISPR and Genome Editing Technologies</h3>
                            <p>CRISPR/Cas genome editing systems have become pivotal in plant genetics, allowing precise, targeted modifications to DNA sequences. These technologies have been applied to develop virus-resistant plants and improve traits such as herbicide tolerance and stress responses across various crops. Offering a more effective and prolonged efficiency compared to previous antiviral approaches, this genome editing system holds promise for alleviating crop losses due to viral infections.</p>
                            <button><a href="">Read more</a></button>
                        </div>
                    </div>
                    <div class="innercard-one">
                        <div class="image-card">
                            <img src="" alt="">
                        </div>
                        <div class="innercards-text">
                            <h3>Discovery of the “Booster” Gene Enhancing Photosynthesis</h3>
                            <p>Scientists at Oak Ridge National Laboratory identified a naturally occurring gene in poplar trees, termed “Booster,” which significantly enhances photosynthetic activity. This gene boosts plant growth and biomass production, offering potential applications in improving crop yields and carbon sequestration.</p>
                            <button><a href="">Read more</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  <section>
        <div class="contactus-container">
            <div class="picture-container">
                <img src="" alt="">
            </div>
            <div class="contactus-form-container">
                <div class="form-heading">
                    <h3>
                        Contact us
                    </h3>
                </div>
                <div class="form-input-container">
                    <form action="">
                        <div class="fullname-div">
                            <label for="">Full name</label>
                            <input type="text" placeholder="Enter your full name">
                        </div>
                        <div class="email-div">
                            <label for="">Email</label>
                            <input type="Email" name="" id="" placeholder="Enter your email">
                        </div>
                        <div class="Phone-number-div">
                            <label for="">contact</label>
                            <input type="number" placeholder="+91 999-999-9999">
                        </div>
                        <div class="message-div">
                            <div>
                                <label for="">How can we help you</label>
                                <input type="text" placeholder="Describe your enquiry in at least 250 charecters">
                            </div>
                        </div>
                        <button>send message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style>

.HomePage-Container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    background-color: aqua;
}
.homepage-imagecontainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    background-image: url('@/assets/img/home-card-pic1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.homepage-text-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap:20px;
    width: 80%;
}
.homepage-button-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:200px;
}
.homepage-text-container p{
    width:800px;
}

</style>