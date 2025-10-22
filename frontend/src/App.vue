<template>
  <div class="app">
    <!-- Hero -->
    <section class="section hero">
      <h1 class="hero-name">Your Name</h1>
      <p class="hero-title">Software Engineer & Creator</p>
      <SocialLinks />
    </section>

    <!-- About -->
    <section class="section" id="about">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with experience in building scalable web applications.
        I love open-source, clean code, and turning ideas into reality.
        When I'm not coding, you'll find me hiking, reading, or tinkering with side projects.
      </p>
    </section>

    <!-- Portfolio -->
    <section class="section" id="portfolio">
      <h2>Portfolio</h2>
      <div class="projects">
        <div class="project">
          <h3>Project Alpha</h3>
          <p>A real-time dashboard built with Vue and Go.</p>
          <a href="https://github.com/yourusername/project-alpha" target="_blank">GitHub →</a>
        </div>
        <div class="project">
          <h3>Toolbox CLI</h3>
          <p>A developer utility written in Go.</p>
          <a href="https://github.com/yourusername/toolbox" target="_blank">GitHub →</a>
        </div>
        <!-- Add more projects -->
      </div>
    </section>

    <!-- CV -->
    <section class="section" id="cv">
      <h2>Resume / CV</h2>
      <p>Download my full resume:</p>
      <a href="/cv.pdf" download class="btn">📄 Download CV</a>
    </section>

    <!-- Blog -->
    <section class="section" id="blog">
      <h2>Blog</h2>
      <p>I write about tech, programming, and personal growth on:</p>
      <div class="blog-links">
        <a href="https://medium.com/@yourname" target="_blank">Medium</a>
        <span> • </span>
        <a href="https://yourblog.wordpress.com" target="_blank">WordPress</a>
      </div>
    </section>

    <!-- Footer (optional repeat of socials) -->
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Your Name</p>
    </footer>
  </div>
</template>

<script setup>
import SocialLinks from './components/SocialLinks.vue'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #fff;
  color: #222;
  line-height: 1.6;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.section {
  padding: 3rem 0;
  text-align: center;
}

.section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.25rem;
  color: #1a1a1a;
}

.hero {
  text-align: center;
  padding: 4rem 0 3rem;
}

.hero-name {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-title {
  font-size: 1.35rem;
  color: #555;
  margin-bottom: 2rem;
}

/* Portfolio */
.projects {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 1.5rem;
}

.project h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.project a {
  color: #6e45e2;
  text-decoration: none;
  font-weight: 600;
}

/* CV Button */
.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.4rem;
  background: #f0f0f0;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.btn:hover {
  background: #e0e0e0;
}

/* Blog */
.blog-links a {
  color: #6e45e2;
  text-decoration: none;
  font-weight: 600;
}

.blog-links span {
  color: #999;
}

/* Footer */
.footer {
  padding: 2rem 0 1.5rem;
  color: #777;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 600px) {
  .hero-name {
    font-size: 2.2rem;
  }
  .hero-title {
    font-size: 1.2rem;
  }
  .section {
    padding: 2rem 0;
  }
}
</style>