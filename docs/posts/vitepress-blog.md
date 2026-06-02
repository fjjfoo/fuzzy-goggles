---
title: VitePress 搭建博客
date: 2024-01-25
tags: ['VitePress', '博客']
---

# VitePress 搭建博客

VitePress 是一个基于 Vite 的静态站点生成器，非常适合搭建个人博客。

## 什么是 VitePress

VitePress 是 Vue 官方团队开发的静态站点生成器，具有以下特点：

- **快速**: 基于 Vite，启动速度极快
- **简单**: 配置简单，易于上手
- **美观**: 提供优雅的默认主题
- **支持 Markdown**: 直接使用 Markdown 编写内容

## 快速开始

```bash
npm create vitepress@6.5.0 . -- --template blog
```

## 项目结构

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.js    # 配置文件
│   ├── index.md         # 首页
│   ├── about.md         # 关于页面
│   └── posts/           # 文章目录
│       ├── index.md     # 文章列表
│       └── *.md         # 文章内容
└── package.json
```

## 配置文件

```javascript
export default {
  title: '我的博客',
  description: '个人技术博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ]
  }
}
```

## 运行项目

```bash
npm install
npm run dev    # 开发模式
npm run build  # 生产构建
npm run preview # 预览构建结果
```

## 总结

VitePress 是搭建个人博客的绝佳选择，简单、快速、美观。
