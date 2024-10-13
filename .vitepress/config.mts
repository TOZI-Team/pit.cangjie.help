import { footnote } from "@mdit/plugin-footnote";
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
      { text: '教程', items: [
        {text:'引言',link: '/guide/'},
        { text: 'SDK 安装', link: '/guide/sdk' },
        { text: 'DevEco 配置', link: '/guide/deveco' },
      ] }
    ],

    sidebar: [
      {
        text: '教程',
        collapsed: false,
        items: [
          { text: '导言', link: '/guide/'},
          { text: 'SDK 安装', link: '/guide/sdk' },
          { text: 'DevEco 配置', link: '/guide/deveco' },
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
  },
  markdown: {
    config: (md) => {
      md.set({ breaks: true,typographer: true })
      md.use(footnote)
      // console.log(md.render("仓颉语言编译器目前分为两个版本，分别是通用版与鸿蒙版。前者支持在`Linux` 、 `Windows` 和 `MacOs` 下编译与运行。后者则只支持以HarmonyOs APP的方式运行[^1]。 "))
    }
  }
})
