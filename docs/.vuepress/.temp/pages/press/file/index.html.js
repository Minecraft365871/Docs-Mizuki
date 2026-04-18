import comp from "/workspace/docs/.vuepress/.temp/pages/press/file/index.html.vue"
const data = JSON.parse("{\"path\":\"/press/file/\",\"title\":\"单文件方案\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"单文件方案\",\"createTime\":\"2025/09/01 20:29:52\",\"permalink\":\"/press/file/\"},\"readingTime\":{\"minutes\":4.44,\"words\":1332},\"git\":{},\"filePathRelative\":\"notes/press/file.md\",\"headers\":[]}")
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
