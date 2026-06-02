---
title: CSS Grid 布局
date: 2024-02-10
tags: ['CSS', '前端']
---

# CSS Grid 布局

CSS Grid 是一种强大的二维布局系统，可以轻松创建复杂的布局结构。

## 基础概念

### 网格容器和网格项

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 20px;
}
```

### 网格线

```css
.item {
  grid-column: 1 / 3;  /* 从第1列到第3列 */
  grid-row: 2 / 4;     /* 从第2行到第4行 */
}
```

## 常用属性

### grid-template-columns / grid-template-rows

```css
/* 使用 fr 单位 */
grid-template-columns: 1fr 2fr 1fr;

/* 使用 repeat */
grid-template-columns: repeat(4, 1fr);

/* 混合使用 */
grid-template-columns: 200px repeat(3, 1fr);
```

### grid-template-areas

```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### justify-content / align-content

```css
.container {
  justify-content: center;  /* 水平对齐 */
  align-content: center;    /* 垂直对齐 */
}
```

## 响应式网格

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## 总结

CSS Grid 是现代 Web 布局的首选方案，掌握它可以大大提高布局效率。
