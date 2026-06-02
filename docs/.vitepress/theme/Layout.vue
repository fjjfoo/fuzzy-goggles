<script setup>
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
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
</style>