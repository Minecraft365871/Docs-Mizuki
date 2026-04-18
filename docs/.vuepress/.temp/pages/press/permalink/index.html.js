import comp from "/workspace/docs/.vuepress/.temp/pages/press/permalink/index.html.vue"
const data = JSON.parse("{\"path\":\"/press/permalink/\",\"title\":\"固定连接\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"固定连接\",\"createTime\":\"2025/11/21 00:21:14\",\"permalink\":\"/press/permalink/\"},\"readingTime\":{\"minutes\":0.28,\"words\":83},\"git\":{},\"filePathRelative\":\"notes/press/permalink.md\",\"headers\":[]}")
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
