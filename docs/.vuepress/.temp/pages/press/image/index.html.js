import comp from "/workspace/docs/.vuepress/.temp/pages/press/image/index.html.vue"
const data = JSON.parse("{\"path\":\"/press/image/\",\"title\":\"图片语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"图片语法\",\"createTime\":\"2026/01/13 05:06:00\",\"permalink\":\"/press/image/\"},\"readingTime\":{\"minutes\":0.4,\"words\":119},\"git\":{},\"filePathRelative\":\"notes/press/image.md\",\"headers\":[]}")
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
