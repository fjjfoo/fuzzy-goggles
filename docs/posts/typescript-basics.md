---
title: TypeScript 基础
date: 2024-01-20
tags: ['TypeScript', '前端']
---

# TypeScript 基础

TypeScript 是 JavaScript 的超集，为 JavaScript 带来了类型系统。

## 什么是 TypeScript

TypeScript 是一种由微软开发的开源编程语言，它扩展了 JavaScript，添加了可选的静态类型检查和基于类的面向对象编程。

## 基础类型

```typescript
// 基本类型
let name: string = '张三'
let age: number = 25
let isActive: boolean = true
let hobbies: string[] = ['阅读', '编程', '旅行']

// 联合类型
let id: string | number = '123'

// 类型推断
let city = '北京' // TypeScript 会自动推断为 string 类型
```

## 接口

```typescript
interface User {
  name: string
  age: number
  email?: string // 可选属性
}

function greet(user: User): string {
  return `Hello, ${user.name}!`
}
```

## 泛型

```typescript
function identity<T>(arg: T): T {
  return arg
}

const num = identity<number>(42)
const str = identity<string>('hello')
```

## 安装和使用

```bash
npm install typescript --save-dev
npx tsc --init
```

创建 `tsconfig.json` 配置文件，然后运行：

```bash
npx tsc
```

## 总结

TypeScript 可以帮助我们在开发过程中发现潜在的类型错误，提高代码质量和可维护性。
