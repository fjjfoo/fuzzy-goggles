<script setup>
import { ref, onMounted } from 'vue'

const visitorCount = ref('---')
const pageViewCount = ref('---')

const loadBusuanzi = () => {
  const script = document.createElement('script')
  script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.async = true
  script.onload = () => {
    setTimeout(() => {
      const siteCounter = document.querySelector('#busuanzi_value_site_uv')
      const pageCounter = document.querySelector('#busuanzi_value_page_pv')
      if (siteCounter) visitorCount.value = siteCounter.textContent
      if (pageCounter) pageViewCount.value = pageCounter.textContent
    }, 1000)
  }
  document.head.appendChild(script)
}

onMounted(() => {
  loadBusuanzi()
})
</script>

<template>
  <div class="page-stats">
    <span class="stats-item">
      <span class="stats-icon">👁️</span>
      <span class="stats-text">访问量: <span id="busuanzi_value_page_pv">{{ pageViewCount }}</span></span>
    </span>
    <span class="stats-divider">|</span>
    <span class="stats-item">
      <span class="stats-icon">👥</span>
      <span class="stats-text">访客: <span id="busuanzi_value_site_uv">{{ visitorCount }}</span></span>
    </span>
  </div>
</template>

<style>
.page-stats {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-secondary);
}

.stats-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.stats-icon {
  font-size: 1rem;
}

.stats-divider {
  opacity: 0.5;
}
</style>
