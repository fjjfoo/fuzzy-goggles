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
  { number: '15+', label: '技术文章' },
  { number: '6', label: '技术分类' },
  { number: '5', label: '阅读笔记' }
]

const recentPosts = [
  { title: 'Python 学习路线指南', date: '2024-03-15', category: '后端', link: '/posts/python-learning-path' },
  { title: '程序员的高效学习方法', date: '2024-03-05', category: '思考', link: '/posts/learning-method' },
  { title: 'React 18 入门指南', date: '2024-03-01', category: '前端', link: '/posts/react-intro' },
  { title: '《代码大全》读书笔记', date: '2024-03-10', category: '读书', link: '/posts/book-summary' },
  { title: '我的阅读习惯养成记', date: '2024-02-20', category: '读书', link: '/posts/reading-habits' },
  { title: '生活中的技术思维', date: '2024-02-15', category: '生活', link: '/posts/life-thinking' }
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/fjjfoo', icon: '⌨️' },
  { name: 'RSS', url: '/rss.xml', icon: '📡' },
  { name: '邮箱', url: 'mailto:your.email@example.com', icon: '✉️' }
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
    }
  }, 150)
}
</script>

<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-name">{{ displayName }}<span class="cursor" :class="{ hidden: !showCursor }">|</span></h1>
        <h2 class="hero-text">
          {{ displayText }}<span class="cursor" :class="{ hidden: !showCursor }">|</span>
        </h2>
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
        <h3>前端技术</h3>
        <p>Vue、React、TypeScript、CSS等前端技术分享</p>
        <a href="/tags/frontend">查看更多 →</a>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🐍</div>
        <h3>Python</h3>
        <p>Python学习路线、Web框架、数据分析等</p>
        <a href="/tags/python">查看更多 →</a>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h3>生活思考</h3>
        <p>记录生活点滴与成长感悟</p>
        <a href="/tags/thinking">查看更多 →</a>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h3>读书笔记</h3>
        <p>分享阅读心得与知识积累</p>
        <a href="/tags/reading">查看更多 →</a>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🤖</div>
        <h3>AI 技术</h3>
        <p>人工智能、机器学习、深度学习等前沿技术</p>
        <a href="/tags/ai">查看更多 →</a>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3>前端工具</h3>
        <p>开发工具、构建工具、调试技巧等</p>
        <a href="/tags/css">查看更多 →</a>
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
.home-container {
  min-height: 100vh;
}

.hero-section {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  color: var(--vp-c-text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  opacity: 0;
  animation: fadeIn 1s ease 1s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeIn 1s ease 1.2s forwards;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  color: white;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-primary);
  border: 1px solid var(--vp-c-border);
}

.btn-secondary:hover {
  background-color: var(--vp-c-bg-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stats-section {
  padding: 3rem 2rem;
  background-color: var(--vp-c-bg-alt);
  position: relative;
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
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: scale(1.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-brand);
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  color: var(--vp-c-text-secondary);
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background-color: var(--vp-c-bg-alt);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-border-light);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--vp-c-brand-dimm) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.2);
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-primary);
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
}

.feature-card p {
  color: var(--vp-c-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.feature-card a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  z-index: 1;
  display: inline-block;
}

.feature-card a:hover {
  text-decoration: underline;
}

.recent-posts-section {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
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
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand) 0%, transparent 100%);
  border-radius: 2px;
}

.view-all {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-all:hover {
  text-decoration: underline;
  transform: translateX(4px);
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
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-border-light);
}

.post-item:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg);
}

.post-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.post-category {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  color: white;
  font-size: 0.75rem;
  border-radius: 1rem;
  font-weight: 500;
}

.post-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--vp-c-text-primary);
  margin: 0;
  transition: color 0.3s ease;
}

.post-item:hover .post-title {
  color: var(--vp-c-brand);
}

.post-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-secondary);
}

.social-section {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--vp-c-bg-alt);
}

.social-section .section-title {
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
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
  transition: all 0.3s ease;
  min-width: 100px;
  border: 1px solid var(--vp-c-border-light);
}

.social-link:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.social-icon {
  font-size: 2rem;
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.2);
}

.social-name {
  font-size: 0.875rem;
  color: var(--vp-c-text-primary);
  font-weight: 500;
}

.home-footer {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-secondary);
  font-size: 0.875rem;
  background-color: var(--vp-c-bg-alt);
}

@media (max-width: 640px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-text {
    font-size: 1.125rem;
  }

  .features-section {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    flex-direction: column;
    gap: 2rem;
  }

  .section-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .post-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }
}

/* 暗色模式优化 */
:root.dark .hero-section {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, transparent 100%);
}

:root.dark .hero-section::before {
  background: radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%);
}

:root.dark .feature-card {
  background-color: var(--vp-c-bg-secondary);
  border-color: var(--vp-c-border);
}

:root.dark .post-item {
  background-color: var(--vp-c-bg-secondary);
  border-color: var(--vp-c-border);
}

:root.dark .post-item:hover {
  background-color: var(--vp-c-bg-alt);
}

:root.dark .social-link {
  background-color: var(--vp-c-bg-secondary);
  border-color: var(--vp-c-border);
}

:root.dark .home-footer {
  background-color: var(--vp-c-bg-secondary);
}
</style>