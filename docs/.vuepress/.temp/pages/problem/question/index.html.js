import comp from "/workspace/docs/.vuepress/.temp/pages/problem/question/index.html.vue"
const data = JSON.parse("{\"path\":\"/problem/question/\",\"title\":\"提问的艺术\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"提问的艺术\",\"createTime\":\"2025/11/20 23:52:25\",\"permalink\":\"/problem/question/\"},\"readingTime\":{\"minutes\":3.84,\"words\":1153},\"git\":{},\"filePathRelative\":\"notes/problem/question.md\",\"headers\":[]}")
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
