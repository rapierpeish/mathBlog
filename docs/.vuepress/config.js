import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({

  lang: 'zh-CN',
  bundler: viteBundler(),
  theme: plumeTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '讲义目录', link: '/math/' }, // ← 关键！这里控制顶部导航
      { text: '关于我', link: '/aboutme/'},
      // 可以继续加：{ text: '物理', link: '/physics/' }
    ],

    locales: {
      '/': { 
        collections: [
          { type: 'doc', dir: 'math', title: '数学' }
        ]
      },
    },

    // 侧边栏核心配置：开启自动生成
    sidebar: {
      // 开启自动侧边栏（全局生效，所有目录都会自动生成侧边栏）
      auto: true,
      // 可选配置：自动侧边栏的附加选项
      autoOptions: {
        // 是否显示目录下的 README.md 作为侧边栏第一项（默认 true）
        includeREADME: true,
        // 是否按文件/目录的创建时间排序（默认按文件名排序，false 即可）
        sortByDate: false,
        // 是否折叠子目录（默认 false，全部展开）
        collapsible: false,
      },
    },
  }),
})