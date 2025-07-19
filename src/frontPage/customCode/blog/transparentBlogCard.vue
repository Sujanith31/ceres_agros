<template>
  <div class="blog-card">
    <div class="blog-card-image">
      <img :src="image" :alt="title" loading="lazy" />
    </div>
    <div class="blog-card-body">
      <h5>
        <a :href="action.route" class="blog-card-title">{{ title }}</a>
      </h5>
      <p class="blog-card-desc">{{ description }}</p>
      <a :href="action.route" class="blog-card-action" :class="`blog-card-action-${action.color}`">
        {{ action.label }}
        <span class="arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  action: {
    type: Object,
    default: () => ({
      route: "javascript:;",
      color: "success",
      label: "Read more",
    }),
  },
});
</script>

<style scoped>
.blog-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  overflow: hidden;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
}
.blog-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.16);
}
.blog-card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.blog-card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.blog-card-title {
  color: #222;
  font-weight: bold;
  text-decoration: none;
}
.blog-card-desc {
  color: #444;
  margin: 12px 0 18px 0;
  font-size: 1rem;
}
.blog-card-action {
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}
.blog-card-action-success {
  color: #198754;
}
.blog-card-action-success:hover {
  color: #145c32;
}
.arrow {
  font-size: 1.1em;
}
@media (max-width: 600px) {
  .blog-card-image img {
    height: 140px;
  }
  .blog-card-body {
    padding: 14px;
  }
}
</style>