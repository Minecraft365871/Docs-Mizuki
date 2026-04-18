import comp from "/workspace/docs/.vuepress/.temp/pages/press/Markdown/Markdown/index.html.vue"
const data = JSON.parse("{\"path\":\"/press/Markdown/Markdown/\",\"title\":\"基础\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"基础\",\"createTime\":\"2025/11/21 01:32:59\",\"permalink\":\"/press/Markdown/Markdown/\"},\"readingTime\":{\"minutes\":5.56,\"words\":1667},\"git\":{},\"filePathRelative\":\"notes/press/Markdown/Markdown.md\",\"headers\":[]}")
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
