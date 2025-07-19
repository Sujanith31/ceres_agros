<template>
  <section class="contactus-section">
    <div class="contactus-container">
      <div class="picture-container">
        <!-- <img :src="contactCover2" alt="" /> -->
        <div class="picture-text">
          <h2>Contact Information</h2>
          <p>Fill up the form and our Team will get back to you within 24 hours.</p>
          <div class="picture-text-inputs">
            <p>+91 9989595959</p>
            <p>hello@ceresagros.co</p>
            <p>8th Floor, Vaishnavi Cymbol, Puppalaguda Road,Hyderabad,Telangana, 500089</p>
          </div>
        </div>
      </div>
      <div class="contactus-form-container-card">
        <div class="contactus-form-container">
          <div class="form-heading">
            <h3>Contact us</h3>
          </div>
          <div class="form-text">
            <p>
              For further questions, including partnership opportunities, please email
              hello@ceresagros.co or contact using our form.
            </p>
          </div>
          <div class="form-input-container">
            <form action="">
              <div class="fullname-div">
                <label for="">Full name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div class="email-div">
                <label for="">Email</label>
                <input type="Email" name="" id="" placeholder="Enter your email" />
              </div>
              <div class="Phone-number-div">
                <label for="">contact</label>
                <input type="number" placeholder="+91 999-999-9999" />
              </div>
              <div class="message-div">
                <div>
                  <label for="">How can we help you</label>
                  <input
                    type="text"
                    placeholder="Describe your enquiry in at least 250 charecters"
                  />
                </div>
              </div>
              <button>send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import contactCover2 from '@/assets/img/contact-page-image-two.jpg'

</script>
<style scoped>
.contactus-section {
  position: relative;
  background-color: whitesmoke;
  color: black;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/img/contact-page-image-two.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 8%;
  margin-right: 8%;
}
.contactus-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* black with 0.4 opacity */
  z-index: 1;
}
.contactus-container {
  width: 80%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25%;
  z-index: 99999;
  position: relative;
}
.picture-container {
  /* background-image: url('@/assets/img/contact-page-image-two.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
  width: 400px;
  height: 600px;
  z-index: 0;
}
.contactus-form-container-card {
  width: 50%;
  min-width: 350px;
  height: inherit;
  background-color: white;
  box-shadow: grey 0px 0px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>
