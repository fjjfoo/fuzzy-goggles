<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const copiedIndex = ref(-1)
let observer = null

const copyCode = async (code, index) => {
  try {
    await navigator.clipboard.writeText(code)
    copiedIndex.value = index
    setTimeout(() => {
      copiedIndex.value = -1
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const addCopyButtons = () => {
  const codeBlocks = document.querySelectorAll('div[class*="language-"] pre')
  codeBlocks.forEach((pre, index) => {
    if (pre.querySelector('.copy-btn')) return
    
    const button = document.createElement('button')
    button.className = 'copy-btn'
    button.innerHTML = copiedIndex.value === index ? '✓ 已复制' : '📋'
    button.title = '复制代码'
    button.dataset.index = index
    
    button.addEventListener('click', () => {
      const code = pre.querySelector('code')?.textContent || ''
      const btnIndex = parseInt(button.dataset.index)
      copyCode(code, btnIndex)
      button.innerHTML = '✓ 已复制'
      setTimeout(() => {
        button.innerHTML = '📋'
      }, 2000)
    })
    
    pre.appendChild(button)
  })
}

onMounted(() => {
  nextTick(() => {
    addCopyButtons()
    
    observer = new MutationObserver(() => {
      nextTick(addCopyButtons)
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="copy-btn-container"></div>
</template>

<style>
div[class*="language-"] {
  position: relative;
}

div[class*="language-"] pre {
  position: relative;
  padding-top: 2.5rem;
}

.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  opacity: 0;
}

div[class*="language-"]:hover .copy-btn {
  opacity: 1;
}

.copy-btn:hover {
  background-color: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}
</style>
