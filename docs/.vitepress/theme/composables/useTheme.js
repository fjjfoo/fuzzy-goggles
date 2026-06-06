import { ref, onMounted } from 'vue'

export function useTheme() {
  const currentTheme = ref('system')
  
  const themes = {
    light: '亮色',
    dark: '暗色',
    system: '跟随系统'
  }
  
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
      html.classList.toggle('dark', isSystemDark)
    }
  }
  
  const toggleTheme = () => {
    const themes = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(currentTheme.value)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    applyTheme(nextTheme)
  }
  
  onMounted(() => {
    const saved = localStorage.getItem('vitepress-theme') || 'system'
    applyTheme(saved)
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (currentTheme.value === 'system') {
        document.documentElement.classList.toggle('dark', e.matches)
      }
    })
  })
  
  return {
    currentTheme,
    themes,
    applyTheme,
    toggleTheme
  }
}
