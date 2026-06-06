<script setup>
import { ref, onMounted, onUnmounted, onErrorCaptured } from 'vue'
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'
import ReadingProgress from './components/ReadingProgress.vue'
import CodeCopyButton from './components/CodeCopyButton.vue'
import ShareButtons from './components/ShareButtons.vue'

const { page } = useData()

const currentTheme = ref('system')
const showThemeMenu = ref(false)
const isLoading = ref(true)
const hasError = ref(false)
const errorMessage = ref('')

const themes = [
  { id: 'light', name: '☀️ 亮色' },
  { id: 'dark', name: '🌙 暗色' },
  { id: 'system', name: '🖥️ 跟随系统' }
]

const getThemeIcon = () => {
  const icons = { light: '☀️', dark: '🌙', system: '🖥️' }
  return icons[currentTheme.value] || '🖥️'
}

const applyTheme = (theme) => {
  currentTheme.value = theme
  showThemeMenu.value = false
  localStorage.setItem('vitepress-theme', theme)
  
  const html = document.documentElement
  html.classList.remove('light', 'dark')
  
  if (theme === 'dark') {
    html.classList.add('dark')
  } else if (theme === 'light') {
    html.classList.add('light')
  }
}

const handleStart = () => {
  isLoading.value = true
}

const handleEnd = () => {
  isLoading.value = false
}

const resetError = () => {
  hasError.value = false
  errorMessage.value = ''
}

onErrorCaptured((err) => {
  hasError.value = true
  errorMessage.value = err.message
  console.error('Component error:', err)
  return false
})

onMounted(() => {
  const saved = localStorage.getItem('vitepress-theme') || 'system'
  applyTheme(saved)
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (currentTheme.value === 'system') {
      const html = document.documentElement
      if (e.matches) {
        html.classList.add('dark')
        html.classList.remove('light')
      } else {
        html.classList.remove('dark')
        html.classList.add('light')
      }
    }
  })
  
  window.addEventListener('vitepress:start', handleStart)
  window.addEventListener('vitepress:end', handleEnd)
  
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})

onUnmounted(() => {
  window.removeEventListener('vitepress:start', handleStart)
  window.removeEventListener('vitepress:end', handleEnd)
})
</script>

<template>
  <ReadingProgress />
  <CodeCopyButton />
  <ShareButtons />
  
  <!-- 页面加载状态 -->
  <transition name="fade">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p class="loading-text">加载中...</p>
      </div>
    </div>
  </transition>
  
  <!-- 错误处理 -->
  <transition name="fade">
    <div v-if="hasError" class="error-overlay">
      <div class="error-content">
        <h2 class="error-title">页面加载出错</h2>
        <p class="error-message">{{ errorMessage }}</p>
        <button class="error-retry" @click="resetError">重试</button>
      </div>
    </div>
  </transition>
  
  <div class="theme-switch-container">
    <button 
      class="theme-switch-btn"
      @click="showThemeMenu = !showThemeMenu"
      :title="themes.find(t => t.id === currentTheme)?.name"
    >
      <span>{{ getThemeIcon() }}</span>
    </button>
    <transition name="fade">
      <div v-if="showThemeMenu" class="theme-menu" @click.self="showThemeMenu = false">
        <button 
          v-for="theme in themes" 
          :key="theme.id"
          class="theme-menu-item"
          :class="{ active: currentTheme === theme.id }"
          @click="applyTheme(theme.id)"
        >
          {{ theme.name }}
        </button>
      </div>
    </transition>
  </div>
  
  <Theme.Layout>
    <template #home-hero-text>
      <div v-if="page.path === '/'" class="custom-home">
        <div class="hero-section">
          <div class="hero-content">
            <h1 class="hero-name">feisun林的博客</h1>
            <h2 class="hero-text">记录技术成长与生活感悟</h2>
            <p class="hero-tagline">热爱技术，热爱生活</p>
            <div class="hero-actions">
              <a href="/posts/" class="btn btn-primary">查看文章</a>
              <a href="/about" class="btn btn-secondary">关于我</a>
            </div>
          </div>
        </div>

        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">技术文章</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5</span>
              <span class="stat-label">技术分类</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">3</span>
              <span class="stat-label">阅读笔记</span>
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
            <a href="/posts/vue3-intro" class="post-item">
              <div class="post-info">
                <span class="post-category">前端</span>
                <h3 class="post-title">Vue3 入门指南</h3>
              </div>
              <span class="post-date">2024-01-15</span>
            </a>
            <a href="/posts/js-async" class="post-item">
              <div class="post-info">
                <span class="post-category">前端</span>
                <h3 class="post-title">JavaScript 异步编程</h3>
              </div>
              <span class="post-date">2024-01-10</span>
            </a>
            <a href="/posts/typescript-basics" class="post-item">
              <div class="post-info">
                <span class="post-category">前端</span>
                <h3 class="post-title">TypeScript 基础知识</h3>
              </div>
              <span class="post-date">2024-01-05</span>
            </a>
            <a href="/posts/life-thinking" class="post-item">
              <div class="post-info">
                <span class="post-category">生活</span>
                <h3 class="post-title">生活中的技术思维</h3>
              </div>
              <span class="post-date">2024-02-15</span>
            </a>
            <a href="/posts/reading-habits" class="post-item">
              <div class="post-info">
                <span class="post-category">读书</span>
                <h3 class="post-title">我的阅读习惯养成记</h3>
              </div>
              <span class="post-date">2024-02-20</span>
            </a>
            <a href="/posts/book-summary" class="post-item">
              <div class="post-info">
                <span class="post-category">读书</span>
                <h3 class="post-title">《代码大全》读书笔记</h3>
              </div>
              <span class="post-date">2024-03-10</span>
            </a>
          </div>
        </div>

        <div class="social-section">
          <h2 class="section-title">🔗 关注我</h2>
          <div class="social-links">
            <a href="https://github.com" class="social-link" title="GitHub">
              <span class="social-icon">⌨️</span>
              <span class="social-name">GitHub</span>
            </a>
            <a href="/rss.xml" class="social-link" title="RSS">
              <span class="social-icon">📡</span>
              <span class="social-name">RSS</span>
            </a>
            <a href="mailto:example@email.com" class="social-link" title="邮箱">
              <span class="social-icon">✉️</span>
              <span class="social-name">邮箱</span>
            </a>
          </div>
        </div>

        <footer class="home-footer">
          <p>© 2024 feisun林的博客 · 用 ❤️ 和 ☕ 打造</p>
          <div class="stats-footer">
            <span class="stats-item">
              <span class="stats-icon">👁️</span>
              <span class="stats-text">总访问量: <span id="busuanzi_value_site_pv">---</span></span>
            </span>
            <span class="stats-divider">|</span>
            <span class="stats-item">
              <span class="stats-icon">👥</span>
              <span class="stats-text">访客数: <span id="busuanzi_value_site_uv">---</span></span>
            </span>
          </div>
        </footer>
      </div>
    </template>
  </Theme.Layout>
</template>

<style scoped>
.custom-home {
  width: 100%;
}

.hero-section {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%);
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
  padding: 2rem;
  color: var(--vp-c-text-secondary);
  font-size: 0.875rem;
}

.stats-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  font-size: 0.875rem;
}

.stats-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.stats-icon {
  font-size: 0.875rem;
}

.stats-divider {
  opacity: 0.4;
}

.theme-switch-container {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
}

.theme-switch-btn {
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-switch-btn:hover {
  background-color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  transform: scale(1.05);
}

.theme-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 140px;
  box-shadow: var(--vp-shadow-3);
}

.theme-menu-item {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-align: left;
  font-size: 0.875rem;
  color: var(--vp-c-text-primary);
  transition: background-color 0.2s ease;
}

.theme-menu-item:hover {
  background-color: var(--vp-c-bg-alt);
}

.theme-menu-item.active {
  background-color: var(--vp-c-brand-dimm);
  color: var(--vp-c-brand);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

/* 加载状态样式 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--vp-c-border);
  border-top-color: var(--vp-c-brand);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: var(--vp-c-text-secondary);
  font-size: 0.875rem;
}

/* 错误处理样式 */
.error-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.error-content {
  text-align: center;
  padding: 2rem;
  max-width: 400px;
}

.error-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ef4444;
  margin-bottom: 1rem;
}

.error-message {
  color: var(--vp-c-text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.error-retry {
  padding: 0.75rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.error-retry:hover {
  background-color: var(--vp-c-brand-dark);
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>