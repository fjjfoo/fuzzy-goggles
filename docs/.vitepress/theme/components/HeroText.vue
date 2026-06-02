<script setup>
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const displayText = ref('')
const showCursor = ref(true)
const isTyping = ref(true)

onMounted(() => {
  if (frontmatter.value.layout === 'home') {
    const fullText = frontmatter.value.hero?.text || ''
    let index = 0
    displayText.value = ''
    
    setTimeout(() => {
      const timer = setInterval(() => {
        if (index < fullText.length) {
          displayText.value += fullText[index]
          index++
        } else {
          clearInterval(timer)
          isTyping.value = false
        }
      }, 150)
    }, 500)

    setInterval(() => {
      showCursor.value = !showCursor.value
    }, 530)
  }
})
</script>

<template>
  <div class="home-hero-text">
    <span class="typewriter-text">{{ displayText }}</span>
    <span v-if="isTyping" class="cursor" :class="{ 'cursor-hidden': !showCursor }">|</span>
  </div>
</template>

<style scoped>
.home-hero-text {
  display: inline-block;
}

.typewriter-text {
  font-weight: 500;
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 0.53s infinite;
  color: var(--vp-c-brand);
  font-weight: 300;
}

.cursor-hidden {
  opacity: 0;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
