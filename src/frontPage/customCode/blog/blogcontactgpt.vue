<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-left">
        <div class="contact-overlay"></div>
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>Fill up the form and our Team will get back to you within 24 hours.</p>
          <div class="contact-details">
            <p><span class="icon">📞</span> +91 9989595959</p>
            <p><span class="icon">✉️</span> hello@ceresagros.co</p>
            <p><span class="icon">📍</span>8th Floor, Vaishnavi Cymbol, Puppalaguda Road, Hyderabad, Telangana, 500089</p>
          </div>
          <div class="contact-social">
            <a href="#"><span class="icon">🌐</span></a>
            <a href="#"><span class="icon">🐦</span></a>
            <a href="#"><span class="icon">🎨</span></a>
            <a href="#"><span class="icon">📸</span></a>
          </div>
        </div>
      </div>
      <div class="contact-right">
        <form class="contact-form">
          <div class="contact-form-header">
            <h2>Say Hi!</h2>
            <p class="lead">We'd like to talk with you.</p>
          </div>
          <div class="contact-form-body">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="What you love" required />
            <textarea rows="6" placeholder="I want to say that..." required></textarea>
            <div class="contact-form-actions">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import bgContact from "@/assets/img/contact-page-image-two.jpg";
</script>

<style scoped>
.contact-section {
  padding: 40px 0;
  background: #f8f9fa;
}
.contact-container {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
}
.contact-left {
  position: relative;
  width: 40%;
  min-width: 280px;
  background-image: url('@/assets/img/contact-page-image-two.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1;
}
.contact-info {
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 40px 30px;
  max-width: 350px;
}
.contact-info h3 {
  margin-bottom: 16px;
  font-size: 1.5rem;
}
.contact-info p {
  margin-bottom: 18px;
  font-size: 1rem;
}
.contact-details p {
  margin: 10px 0;
  font-size: 1rem;
}
.contact-social {
  margin-top: 24px;
}
.contact-social a {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 16px;
  text-decoration: none;
}
.icon {
  margin-right: 8px;
}
.contact-right {
  width: 60%;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.contact-form {
  width: 100%;
  max-width: 420px;
  padding: 40px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.contact-form-header h2 {
  margin-bottom: 8px;
  color: #198754;
  font-size: 2rem;
}
.contact-form-header .lead {
  margin-bottom: 24px;
  color: #444;
  font-size: 1.1rem;
}
.contact-form-body input,
.contact-form-body textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
}
.contact-form-actions {
  text-align: right;
}
.contact-form-actions button {
  background: #198754;
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
.contact-form-actions button:hover {
  background: #145c32;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
    box-shadow: none;
    border-radius: 0;
  }
  .contact-left,
  .contact-right {
    width: 100%;
    min-width: unset;
    height: auto;
  }
  .contact-info,
  .contact-form {
    padding: 24px 12px;
    max-width: 100%;
  }
  .contact-form-header h2 {
    font-size: 1.3rem;
  }
}
</style>