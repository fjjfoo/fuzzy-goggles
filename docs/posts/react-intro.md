---
title: React 18 入门指南
date: 2024-03-01
tags: ['React', '前端']
---

# React 18 入门指南

React 是由 Facebook 开发的用于构建用户界面的 JavaScript 库。

## React 18 新特性

### Concurrent Features
- **Concurrent Rendering**: 并发渲染，提升大型应用性能
- **Suspense**: 简化异步数据获取
- **Transitions**: 区分紧急和非紧急更新

### 新 Hooks
```jsx
// useId - 为服务端渲染生成唯一ID
function MyComponent() {
  const id = useId()
  return <input id={id} />
}

// useDeferredValue - 延迟非紧急状态
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query)
  const results = useMemo(() => 
    searchData(deferredQuery), [deferredQuery]
  )
  return <div>{results}</div>
}
```

## 组件基础

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="React" />
      <Welcome name="Vue" />
    </div>
  )
}
```

## 状态管理

```jsx
import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  )
}
```

## 总结

React 18 带来了许多令人兴奋的新特性，让我们能够构建更高效、更流畅的用户界面。
