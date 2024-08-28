import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "仓颉语言",
  lastUpdated: true,
  description: "一款由华为开发的全场景编程语言",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/cangjie.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/sdk' }
    ],

    sidebar: [
      {
        text: '一些坑',
        collapsed: false,
        items: [
          { text: 'SDK 安装', link: '/sdk' },
          { text: 'DevEco 配置', link: '/deveco' },
        ]
      },
      {
        text: '赞助我们',
        link: '/sponsor'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mournink/pit.cangjie.help' }
    ]
  }
})
