<template>
  <div class="social-links">
    <a
      v-for="link in socials"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
      :aria-label="link.name"
    >
      {{ link.icon }}
    </a>
  </div>
</template>

<script setup>
const socials = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
  { name: 'Twitter / X', url: 'https://x.com/yourhandle', icon: '🐦' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼' },
  { name: 'Medium', url: 'https://medium.com/@yourname', icon: '📝' },
  // Add more as needed
]
</script>

<style scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: white;
  color: #333;
  font-size: 1.4rem;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}
</style>