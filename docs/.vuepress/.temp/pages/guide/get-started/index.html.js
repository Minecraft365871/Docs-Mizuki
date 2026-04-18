import comp from "/workspace/docs/.vuepress/.temp/pages/guide/get-started/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/get-started/\",\"title\":\"安装/使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"安装/使用\",\"createTime\":\"2025/08/16 23:56:17\",\"permalink\":\"/guide/get-started/\"},\"readingTime\":{\"minutes\":1.62,\"words\":487},\"git\":{},\"filePathRelative\":\"notes/guide/get-started.md\",\"headers\":[]}")
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
