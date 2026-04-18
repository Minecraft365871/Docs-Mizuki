import comp from "/workspace/docs/.vuepress/.temp/pages/Other/auto/index.html.vue"
const data = JSON.parse("{\"path\":\"/Other/auto/\",\"title\":\"自动构建\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自动构建\",\"createTime\":\"2025/11/20 23:13:50\",\"permalink\":\"/Other/auto/\"},\"readingTime\":{\"minutes\":1.49,\"words\":447},\"git\":{},\"filePathRelative\":\"notes/Other/auto.md\",\"headers\":[]}")
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
