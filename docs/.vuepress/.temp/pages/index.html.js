import comp from "E:/blog/vuepress-math-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"欢迎来到我的数学博客\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/bakground.jpg\",\"heroText\":\"我的数学笔记\",\"tagline\":\"微分几何 · 力学 · 代数学\",\"actions\":[{\"text\":\"微分几何\",\"link\":\"/math/\",\"type\":\"primary\"}]},\"git\":{\"updatedTime\":1767706540000,\"contributors\":[{\"name\":\"OldMoM\",\"username\":\"\",\"email\":\"1090347251@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"25294d1a61e25e22a75d6272f0da99a4ea66c485\",\"time\":1767706540000,\"email\":\"1090347251@qq.com\",\"author\":\"OldMoM\",\"message\":\"建库\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
