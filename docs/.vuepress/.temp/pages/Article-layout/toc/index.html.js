import comp from "/workspace/docs/.vuepress/.temp/pages/Article-layout/toc/index.html.vue"
const data = JSON.parse("{\"path\":\"/Article-layout/toc/\",\"title\":\"目录导航配置说明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"目录导航配置说明\",\"createTime\":\"2025/11/20 19:50:33\",\"permalink\":\"/Article-layout/toc/\"},\"readingTime\":{\"minutes\":1,\"words\":299},\"git\":{},\"filePathRelative\":\"notes/Article-layout/toc.md\",\"headers\":[]}")
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
