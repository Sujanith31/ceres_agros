<template>
    <div class="profile-header-container">

    </div>
  <section class="profile-section">
    <div class="profile-container">
      <div class="profile-avatar"></div>
      <div class="profile-content">
        <div class="profile-header">
          <h3 class="profile-name">Esukapalli RajaShekar Reddy</h3>
          <div>
            <a
              href="https://www.instagram.com/annapurnaagrispace/?igsh=MTl6MmNmM2t6MjZybA%3D%3D#"
              class="profile-follow-btn"
              target="_blank"
              rel="noopener"
            >Follow</a>
          </div>
        </div>
        <div class="profile-stats">
          <div><span class="profile-stat-num">323</span> <span>Posts</span></div>
          <div><span class="profile-stat-num">3.5k</span> <span>Followers</span></div>
          <div><span class="profile-stat-num">260</span> <span>Following</span></div>
        </div>
        <p class="profile-desc">
          Decisions: If you can’t decide, the answer is no. If two equally
          difficult paths, choose the one more painful in the short term
          (pain avoidance is creating an illusion of equality). Choose the
          path that leaves you more equanimous.
          <br />
          <a
            href="https://www.instagram.com/annapurnaagrispace/?igsh=MTl6MmNmM2t6MjZybA%3D%3D#"
            class="profile-more-link"
            target="_blank"
            rel="noopener"
          >More about me <span class="arrow">→</span></a>
        </p>
      </div>
    </div>
  </section>
  <section class="blog-cards-section">
    <div class="blog-cards-header">
      <h3>Check Out latest blogposts</h3>
    </div>
    <div class="blog-cards-grid">
      <transparentBlogCard
        :image="IOT"
        title="Precision Agriculture with IoT and Smart Sensors"
        description="The integration of Internet of Things (IoT) technologies in agriculture has enabled real-time monitoring of soil and plant health. Biodegradable leaf and soil sensors, developed by research centers like NSF-funded IoT4Ag, can detect nutrient levels and environmental conditions. These sensors, combined with ground and aerial robots, provide farmers with timely insights to adjust practices, enhancing efficiency and sustainability."
        :action="{
          route: 'https://www.businessinsider.com/iot-technology-precision-agriculture-transforming-farming-2025-5?utm_source=chatgpt.com',
          color: 'success',
          label: 'Read more',
        }"
      />
      <transparentBlogCard
        :image="Tech"
        title="CRISPR and Genome Editing Technologies"
        description="CRISPR/Cas genome editing systems have become pivotal in plant genetics, allowing precise, targeted modifications to DNA sequences. These technologies have been applied to develop virus-resistant plants and improve traits such as herbicide tolerance and stress responses across various crops. Offering a more effective and prolonged efficiency compared to previous antiviral approaches, this genome editing system holds promise for alleviating crop losses due to viral infections."
        :action="{
          route: 'https://pubmed.ncbi.nlm.nih.gov/35216418/',
          color: 'success',
          label: 'Read more',
        }"
      />
      <transparentBlogCard
        :image="booster"
        title="Discovery of the “Booster” Gene Enhancing Photosynthesis"
        description="Scientists at Oak Ridge National Laboratory identified a naturally occurring gene in poplar trees, termed “Booster,” which significantly enhances photosynthetic activity. This gene boosts plant growth and biomass production, offering potential applications in improving crop yields and carbon sequestration."
        :action="{
          route: 'https://www.ornl.gov/news/landmark-photosynthesis-gene-discovery-boosts-plant-height-advances-crop-science?utm_source=chatgpt.com',
          color: 'success',
          label: 'Read more',
        }"
      />
    </div>
  </section>
  <section class="blogpage-contactus-section">
    <blogcontactgpt/>
  </section>
</template>

<script setup>
import transparentBlogCard from './transparentBlogCard.vue'
import booster from "@/assets/img/booster.png";
import IOT from "@/assets/img/IOT.png";
import Tech from "@/assets/img/Tech.png";
import blogcontactgpt from './blogcontactgpt.vue';
</script>

<style scoped>
/* import image from "@/assets/img/city-profile.jpg"; */
.profile-header-container{
    width: 100%;
    height: 300px;
    background-image: url("@/assets/img/city-profile.jpg");
}
.profile-section {

  padding: 32px 0 0 0;
  background: white;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -40px;
  border-radius: 20px 20px 0 0;
}
.profile-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-avatar {
  /* Add avatar image if needed */
  margin-bottom: 16px;
}
.profile-content {
  width: 100%;
  max-width: 700px;
}
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.profile-name {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin: 0;
}
.profile-follow-btn {
  background: none;
  border: 2px solid #198754;
  color: #198754;
  padding: 6px 18px;
  border-radius: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.profile-follow-btn:hover {
  background: #198754;
  color: #fff;
}
.profile-stats {
  display: flex;
  gap: 32px;
  margin-bottom: 18px;
}
.profile-stat-num {
  font-weight: 700;
  margin-right: 4px;
}
.profile-desc {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0;
}
.profile-more-link {
  color: #198754;
  text-decoration: none;
  font-weight: 500;
}
.profile-more-link:hover {
  text-decoration: underline;
}
.arrow {
  font-size: 1.1em;
}
@media (max-width: 900px) {
  .profile-content {
    max-width: 100%;
    padding: 0 10px;
  }
  .profile-name {
    font-size: 1.3rem;
  }
  .profile-stats {
    gap: 16px;
    font-size: 1rem;
  }
}
.blog-cards-section {
  padding: 32px 0;
  background: #f8f9fa;
  margin-left: 4%;
  margin-right: 4%;
  padding-left: 3%;
  padding-right: 3%;
}
.blog-cards-header {
  margin-bottom: 24px;
  text-align: left;
}
.blog-cards-header h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
}
.blog-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.blogpage-contactus-section{
    margin-left: 4%;
    margin-right: 4%;
}
@media (max-width: 900px) {
  .blog-cards-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .blog-cards-header h3 {
    font-size: 1.3rem;
  }
}
</style>