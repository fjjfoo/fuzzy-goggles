export default {
  title: 'feisun林的个人博客',
  description: '记录技术成长与生活感悟，分享前端开发经验和生活思考',
  lang: 'zh-CN',
  lastUpdated: false,
  base: '/fuzzy-goggles/',
  head: [
    ['meta', { name: 'keywords', content: '前端开发,Vue,TypeScript,技术博客,个人博客' }],
    ['meta', { name: 'author', content: 'feisun林' }],
    ['meta', { name: 'description', content: 'feisun林的个人博客，记录技术成长与生活感悟' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'RSS', href: '/rss.xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }],
    ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async: true }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '标签', link: '/tags/' },
      { text: '友链', link: '/friends' },
      { text: '关于', link: '/about' },
      {
        text: '主题',
        items: [
          { text: '亮色', link: '#', theme: 'light' },
          { text: '暗色', link: '#', theme: 'dark' },
          { text: '跟随系统', link: '#', theme: 'system' }
        ]
      }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '技术分享',
          items: [
            { text: 'Vue 3 入门指南', link: '/posts/vue3-intro' },
            { text: 'React 18 入门指南', link: '/posts/react-intro' },
            { text: 'TypeScript 基础', link: '/posts/typescript-basics' },
            { text: 'JavaScript 异步编程', link: '/posts/js-async' },
            { text: 'CSS Grid 布局', link: '/posts/css-grid' },
            { text: 'VitePress 搭建博客', link: '/posts/vitepress-blog' },
            { text: 'Coze 零基础学习路线', link: '/posts/coze-learning' },
            { text: 'Python 学习路线指南', link: '/posts/python-learning-path' }
          ]
        },
        {
          text: '生活感悟',
          items: [
            { text: '生活中的技术思维', link: '/posts/life-thinking' },
            { text: '程序员的工作与生活平衡', link: '/posts/work-life-balance' },
            { text: '程序员的高效学习方法', link: '/posts/learning-method' }
          ]
        },
        {
          text: '读书笔记',
          items: [
            { text: '我的阅读习惯养成记', link: '/posts/reading-habits' },
            { text: '《代码大全》读书笔记', link: '/posts/book-summary' }
          ]
        }
      ],
      '/tags/': [
        {
          text: '技术标签',
          items: [
            { text: 'Vue', link: '/tags/vue' },
            { text: 'React', link: '/tags/react' },
            { text: 'TypeScript', link: '/tags/typescript' },
            { text: 'JavaScript', link: '/tags/javascript' },
            { text: '前端', link: '/tags/frontend' },
            { text: 'CSS', link: '/tags/css' },
            { text: 'Python', link: '/tags/python' },
            { text: '后端', link: '/tags/backend' },
            { text: 'AI', link: '/tags/ai' }
          ]
        },
        {
          text: '生活标签',
          items: [
            { text: '思考', link: '/tags/thinking' },
            { text: '读书', link: '/tags/reading' },
            { text: '生活', link: '/tags/life' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fjjfoo', ariaLabel: 'GitHub' },
      { icon: 'twitter', link: 'https://twitter.com', ariaLabel: 'Twitter' },
      { icon: 'rss', link: '/rss.xml', ariaLabel: 'RSS' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright 2024 我的个人博客'
    }
  }
}
