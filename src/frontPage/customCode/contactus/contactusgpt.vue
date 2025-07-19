<template>
  <section class="contactus-main">
    <div class="contactus-left">
      <div class="contactus-overlay"></div>
      <div class="contactus-info">
        <h3>Contact Information</h3>
        <p>Fill up the form and our Team will get back to you within 24 hours.</p>
        <div class="contactus-details">
          <p><span class="icon">📞</span> +91 9989595959</p>
          <p><span class="icon">✉️</span> hello@ceresagros.co</p>
          <p><span class="icon">📍</span>8th Floor, Vaishnavi Cymbol, Puppalaguda Road, Hyderabad, Telangana, 500089</p>
        </div>
        <div class="contactus-social">
          <a href="#"><span class="icon">🌐</span></a>
          <a href="#"><span class="icon">🐦</span></a>
          <a href="#"><span class="icon">🎨</span></a>
          <a href="#"><span class="icon">📸</span></a>
        </div>
      </div>
    </div>
    <div class="contactus-right">
      <div class="contactus-card">
        <h3>Contact us</h3>
        <p>
          For further questions, including partnership opportunities,
          please email hello@ceresagros.co or contact using our form.
        </p>
        <form>
          <div class="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div class="form-row">
            <input type="number" placeholder="Contact" required />
          </div>
          <textarea rows="6" placeholder="Describe your enquiry in at least 250 characters"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contactus-main {
  display: flex;
  min-height: 90vh;
  width: 100%;
  background: whitesmoke;
}

.contactus-left {
  position: relative;
  width: 50%;
  min-width: 320px;
  background-image: url('@/assets/img/contact-page-image-two.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contactus-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1;
}

.contactus-info {
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 40px;
  max-width: 400px;
}

.contactus-info h3 {
  margin-bottom: 16px;
}

.contactus-details p {
  margin: 10px 0;
  font-size: 1rem;
}

.contactus-social {
  margin-top: 24px;
}

.contactus-social a {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 16px;
  text-decoration: none;
}

.contactus-right {
  width: 50%;
  min-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.contactus-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px #ccc;
  padding: 32px;
  max-width: 450px;
  width: 100%;
}

.contactus-card h3 {
  color: #198754;
  margin-bottom: 12px;
}

.contactus-card p {
  margin-bottom: 24px;
  color: #333;
}

.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.form-row input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
  resize: vertical;
}

button[type="submit"] {
  background: #198754;
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 8px;
  transition: background 0.2s;
}

button[type="submit"]:hover {
  background: #145c32;
}

.icon {
  margin-right: 8px;
}

@media (max-width: 900px) {
  .contactus-main {
    flex-direction: column;
    min-height: auto;
  }
  .contactus-left,
  .contactus-right {
    width: 100%;
    min-width: unset;
    height: auto;
  }
  .contactus-info {
    padding: 24px;
    max-width: 100%;
    font-size: 1rem;
  }
  .contactus-card {
    padding: 20px;
    max-width: 100%;
    border-radius: 12px;
  }
  .form-row {
    flex-direction: column;
    gap: 10px;
  }
}
</style>