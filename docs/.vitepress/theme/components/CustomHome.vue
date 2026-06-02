<script setup>
import { ref, onMounted } from 'vue'

const displayName = ref('')
const displayText = ref('')
const displayTagline = ref('')
const showCursor = ref(true)

const nameText = 'feisun林的博客'
const fullText = '记录技术成长与生活感悟'
const taglineText = '热爱技术，热爱生活'

const stats = [
  { number: '20+', label: '技术文章' },
  { number: '5', label: '技术分类' },
  { number: '3', label: '阅读笔记' }
]

const recentPosts = [
  { title: 'Vue3 入门指南', date: '2024-01-15', category: '前端', link: '/posts/vue3-intro' },
  { title: 'JavaScript 异步编程', date: '2024-01-10', category: '前端', link: '/posts/js-async' },
  { title: 'TypeScript 基础知识', date: '2024-01-05', category: '前端', link: '/posts/typescript-basics' }
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: '⌨️' },
  { name: 'RSS', url: '/rss.xml', icon: '📡' },
  { name: '邮箱', url: 'mailto:example@email.com', icon: '✉️' }
]

onMounted(() => {
  typeName()
  setTimeout(() => typeText(), 400)
  setTimeout(() => typeTagline(), 800)
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

function typeName() {
  let index = 0
  displayName.value = ''
  const timer = setInterval(() => {
    if (index < nameText.length) {
      displayName.value += nameText[index]
      index++
    } else {
      clearInterval(timer)
      setTimeout(() => typeName(), 100)
    }
  }, 150)
}

function typeText() {
  let index = 0
  displayText.value = ''
  const timer = setInterval(() => {
    if (index < fullText.length) {
      displayText.value += fullText[index]
      index++
    } else {
      clearInterval(timer)
      setTimeout(() => typeText(), 100)
    }
  }, 150)
}

function typeTagline() {
  let index = 0
  displayTagline.value = ''
  const timer = setInterval(() => {
    if (index < taglineText.length) {
      displayTagline.value += taglineText[index]
      index++
    } else {
      clearInterval(timer)
      setTimeout(() => typeTagline(), 100)
    }
  }, 150)
}
</script>

<template>
  <div class="custom-home-container custom-home-fullwidth">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-name">{{ displayName }}<span class="cursor" :class="{ hidden: !showCursor }">|</span></h1>
        <h2 class="hero-text">{{ displayText }}<span class="cursor" :class="{ hidden: !showCursor }">|</span></h2>
        <p class="hero-tagline">{{ displayTagline }}<span class="cursor" :class="{ hidden: !showCursor }">|</span></p>
        <div class="hero-actions">
          <a href="/posts/" class="btn btn-primary">查看文章</a>
          <a href="/about" class="btn btn-secondary">关于我</a>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3>技术分享</h3>
        <p>分享前端开发、Vue、React、TypeScript等技术文章</p>
        <a href="/posts/#技术分享">查看更多 →</a>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h3>生活感悟</h3>
        <p>记录生活点滴与成长思考</p>
        <a href="/posts/#生活感悟">查看更多 →</a>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h3>读书笔记</h3>
        <p>分享阅读心得与知识积累</p>
        <a href="/posts/#读书笔记">查看更多 →</a>
      </div>
    </div>

    <div class="recent-posts-section">
      <div class="section-header">
        <h2 class="section-title">📖 最近文章</h2>
        <a href="/posts/" class="view-all">查看全部 →</a>
      </div>
      <div class="posts-list">
        <a v-for="post in recentPosts" :key="post.title" :href="post.link" class="post-item">
          <div class="post-info">
            <span class="post-category">{{ post.category }}</span>
            <h3 class="post-title">{{ post.title }}</h3>
          </div>
          <span class="post-date">{{ post.date }}</span>
        </a>
      </div>
    </div>

    <div class="social-section">
      <h2 class="section-title">🔗 关注我</h2>
      <div class="social-links">
        <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="social-link" :title="social.name">
          <span class="social-icon">{{ social.icon }}</span>
          <span class="social-name">{{ social.name }}</span>
        </a>
      </div>
    </div>

    <footer class="home-footer">
      <p>© 2024 feisun林的博客 · 用 ❤️ 和 ☕ 打造</p>
    </footer>
  </div>
</template>

<style scoped>
.custom-home-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%);
  min-height: calc(50vh - 60px);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  color: var(--vp-c-text-primary);
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.5rem;
  color: var(--vp-c-brand);
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  color: var(--vp-c-brand);
  animation: blink 0.53s infinite;
}

.cursor.hidden {
  opacity: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-tagline {
  font-size: 1.125rem;
  color: var(--vp-c-text-secondary);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--vp-c-brand);
  color: white;
}

.btn-primary:hover {
  background-color: var(--vp-c-brand-dark);
}

.btn-secondary {
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-primary);
  border: 1px solid var(--vp-c-border);
}

.btn-secondary:hover {
  background-color: var(--vp-c-bg-secondary);
}

.stats-section {
  padding: 3rem 2rem;
  background-color: var(--vp-c-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-brand);
}

.stat-label {
  font-size: 1rem;
  color: var(--vp-c-text-secondary);
}

.features-section {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  align-content: center;
}

.feature-card {
  background-color: var(--vp-c-bg-alt);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-primary);
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--vp-c-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-card a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.feature-card a:hover {
  text-decoration: underline;
}

.recent-posts-section {
  flex: 1;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--vp-c-text-primary);
}

.view-all {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.view-all:hover {
  text-decoration: underline;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.post-item:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.post-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.post-category {
  padding: 0.25rem 0.75rem;
  background-color: var(--vp-c-brand);
  color: white;
  font-size: 0.75rem;
  border-radius: 1rem;
}

.post-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--vp-c-text-primary);
  margin: 0;
}

.post-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-secondary);
}

.social-section {
  flex: 1;
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--vp-c-bg-alt);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 2rem;
  background-color: var(--vp-c-bg);
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
  min-width: 100px;
}

.social-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.social-icon {
  font-size: 2rem;
}

.social-name {
  font-size: 0.875rem;
  color: var(--vp-c-text-primary);
  font-weight: 500;
}

.home-footer {
  text-align: center;
  padding: 1.5rem;
  color: var(--vp-c-text-secondary);
  font-size: 0.875rem;
  background-color: var(--vp-c-bg);
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .hero-name { font-size: 2rem; }
  .hero-text { font-size: 1.125rem; }
  .features-section { grid-template-columns: 1fr; }
  .stats-grid { flex-direction: column; gap: 2rem; }
  .section-header { flex-direction: column; gap: 1rem; text-align: center; }
  .post-item { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
  .social-links { flex-direction: column; align-items: center; }
}
</style>