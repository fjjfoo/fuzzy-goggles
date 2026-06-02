---
title: Vue 3 入门指南
date: 2024-01-15
tags: ['Vue', '前端']
---

# Vue 3 入门指南

Vue 3 是 Vue.js 框架的最新版本，带来了许多新特性和性能改进。

## 为什么选择 Vue 3

1. **性能提升**: Vue 3 使用 Proxy 代替 Vue 2 的 Object.defineProperty，性能更好
2. **组合式 API**: 提供更灵活的代码组织方式
3. **更好的 TypeScript 支持**: 原生支持 TypeScript
4. **更小的打包体积**: Tree-shaking 支持更好

## 安装 Vue 3

```bash
npm create vue@6.5.0 .
```

## 组合式 API 示例

```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Doubled: {{ doubled }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

## 核心概念

- **响应式**: 使用 `ref` 和 `reactive` 创建响应式数据
- **计算属性**: 使用 `computed` 定义计算属性
- **生命周期钩子**: `onMounted`, `onUpdated`, `onUnmounted` 等
- **组件通信**: Props, Emits, Provide/Inject

## 总结

Vue 3 是一个现代化的前端框架，值得学习和使用。
