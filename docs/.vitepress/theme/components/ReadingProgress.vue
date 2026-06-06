<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const isVisible = ref(false)
let throttleTimer = null

const handleScroll = () => {
  if (throttleTimer) return
  
  throttleTimer = setTimeout(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    
    progress.value = Math.min(100, Math.max(0, scrollPercent))
    isVisible.value = scrollTop > 50
    throttleTimer = null
  }, 16)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearTimeout(throttleTimer)
})
</script>

<template>
  <div 
    class="reading-progress"
    :class="{ visible: isVisible }"
  >
    <div 
      class="progress-bar"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: rgba(59, 130, 246, 0.2);
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.reading-progress.visible {
  opacity: 1;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand) 0%, var(--vp-c-brand-light) 100%);
  border-radius: 0 3px 3px 0;
  transition: width 0.15s ease-out;
}
</style>
