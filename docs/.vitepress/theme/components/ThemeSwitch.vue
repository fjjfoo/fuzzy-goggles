<script setup>
import { ref, onMounted, watch } from 'vue'

const currentTheme = ref('system')

const themes = [
  { id: 'light', name: '亮色', icon: '☀️' },
  { id: 'dark', name: '暗色', icon: '🌙' },
  { id: 'system', name: '跟随系统', icon: '🖥️' }
]

const applyTheme = (theme) => {
  currentTheme.value = theme
  localStorage.setItem('vitepress-theme', theme)
  
  const html = document.documentElement
  
  if (theme === 'dark') {
    html.classList.add('dark')
  } else if (theme === 'light') {
    html.classList.remove('dark')
  } else {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isSystemDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
}

onMounted(() => {
  const saved = localStorage.getItem('vitepress-theme') || 'system'
  applyTheme(saved)
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (currentTheme.value === 'system') {
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  })
})

watch(currentTheme, (newTheme) => {
  applyTheme(newTheme)
})
</script>

<template>
  <div class="theme-switch-wrapper">
    <button 
      class="theme-switch-btn"
      @click="$emit('toggle')"
      :title="themes.find(t => t.id === currentTheme)?.name"
    >
      <span class="theme-icon">{{ themes.find(t => t.id === currentTheme)?.icon }}</span>
    </button>
    <div v-if="$slots.default" class="theme-dropdown">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.theme-switch-wrapper {
  position: relative;
}

.theme-switch-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.theme-switch-btn:hover {
  background-color: var(--vp-c-bg-alt);
}

.theme-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
