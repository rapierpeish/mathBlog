import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  themeConfig: {
    sidebar: {
        '/math/': [// 只给 /math/ 路径下自动生成侧边栏
          {
            text: '微分几何',
            // 自动扫描 math 文件夹里的 md，按字母序排
            children: [
                '/math/index.md',
                '/math/联络.md'
            ]
          }
        ]
      },
    navbar: [
      { text: '首页', link: '/' },
      { text: '微分几何', link: '/math/' }
    ]  
  },
  base: "/",

  plugins: [
    markdownMathPlugin({
      type: 'katex',          // 或 'mathjax'
      delimiters: 'dollars'   // 默认 $...$  $$...$$
    })
  ]
})