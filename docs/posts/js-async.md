---
title: JavaScript 异步编程
date: 2024-02-01
tags: ['JavaScript', '前端']
---

# JavaScript 异步编程

JavaScript 是单线程语言，但通过异步编程可以实现非阻塞操作。

## 为什么需要异步编程

- **避免阻塞**: 长时间运行的操作不会阻塞主线程
- **提升性能**: 可以同时处理多个任务
- **用户体验**: 界面不会因为等待而卡顿

## 异步编程方式

### 回调函数

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('数据加载完成')
  }, 1000)
}

fetchData((result) => {
  console.log(result)
})
```

### Promise

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据加载完成')
    }, 1000)
  })
}

fetchData().then(result => {
  console.log(result)
})
```

### async/await

```javascript
async function fetchData() {
  const result = await new Promise(resolve => {
    setTimeout(() => resolve('数据加载完成'), 1000)
  })
  return result
}

fetchData().then(console.log)
```

## Promise.all

```javascript
async function fetchAll() {
  const [data1, data2, data3] = await Promise.all([
    fetch('/api/data1'),
    fetch('/api/data2'),
    fetch('/api/data3')
  ])
  return { data1, data2, data3 }
}
```

## 总结

async/await 是目前最推荐的异步编程方式，代码更清晰、更易读。
