import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({

  lang: 'zh-CN',
  bundler: viteBundler(),
  theme: plumeTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '数学', link: '/math/' }, // ← 关键！这里控制顶部导航
      // 可以继续加：{ text: '物理', link: '/physics/' }
    ],

    locales: {
      '/': { 
        collections: [
          { type: 'doc', dir: 'math', title: '数学' }
        ]
      },
    }
  }),
})