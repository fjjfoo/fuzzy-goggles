<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 150
  },
  delay: {
    type: Number,
    default: 500
  }
})

const displayText = ref('')
const showCursor = ref(true)

onMounted(() => {
  let index = 0
  const text = props.text
  
  setTimeout(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        displayText.value += text[index]
        index++
      } else {
        clearInterval(timer)
      }
    }, props.speed)
  }, props.delay)

  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})
</script>

<template>
  <span class="typewriter-text">
    {{ displayText }}
    <span class="cursor" :class="{ 'cursor-hidden': !showCursor }">|</span>
  </span>
</template>

<style scoped>
.typewriter-text {
  font-weight: 500;
}

.cursor {
  display: inline-block;
  animation: blink 0.53s infinite;
  color: var(--vp-c-brand);
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
