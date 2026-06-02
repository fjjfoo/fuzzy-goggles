# feisun林的个人博客

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-green)
![VitePress](https://img.shields.io/badge/VitePress-1.6.4-blue)
![Vue 3](https://img.shields.io/badge/Vue-3.x-green)

一个基于 VitePress 构建的现代化个人博客网站，记录技术成长与生活感悟。

## ✨ 功能特性

- 🎯 **循环打字机效果** - 首页标题和副标题展示动态打字效果
- 📊 **统计数据展示** - 展示文章数量、分类数、读书笔记等数据
- 📚 **文章列表** - 展示最新文章，支持分类标签
- 🔗 **社交链接** - 提供 GitHub、RSS、邮箱等联系方式
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎨 **现代化主题** - 基于 VitePress 默认主题定制

## 🛠️ 技术栈

- **框架**: [VitePress](https://vitepress.dev/) - Vue 驱动的静态站点生成器
- **语言**: JavaScript / Vue 3 Composition API
- **构建工具**: Vite
- **样式**: CSS3 + VitePress 主题变量

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看开发预览。

### 生产构建

```bash
npm run build
```

构建产物将输出到 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
个人博客/
├── docs/                    # 文档目录
│   ├── .vitepress/          # VitePress 配置目录
│   │   ├── config.js        # 站点配置
│   │   ├── theme/           # 自定义主题
│   │   │   ├── components/  # 自定义组件
│   │   │   │   └── CustomHome.vue
│   │   │   ├── index.js     # 主题入口
│   │   │   └── style.css    # 全局样式
│   │   └── dist/            # 构建输出
│   ├── index.md             # 首页
│   ├── articles/            # 文章目录
│   └── ...
├── package.json             # 项目配置
└── README.md                # 项目说明
```

## 📝 自定义配置

### 修改首页内容

编辑 `docs/index.md` 和 `docs/.vitepress/theme/components/CustomHome.vue` 来自定义首页内容。

### 修改主题颜色

编辑 `docs/.vitepress/theme/style.css` 中的 CSS 变量：

```css
:root {
  --vp-c-brand: #3b82f6;      /* 主题色 */
  --vp-c-bg: #ffffff;          /* 背景色 */
  --vp-c-text-primary: #1e293b; /* 主文字色 */
}
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**用 ❤️ 和 ☕ 打造**