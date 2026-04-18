import comp from "/workspace/docs/.vuepress/.temp/pages/press/key/index.html.vue"
const data = JSON.parse("{\"path\":\"/press/key/\",\"title\":\"文章客户端加密\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章客户端加密\",\"createTime\":\"2025/09/01 20:29:52\",\"permalink\":\"/press/key/\"},\"readingTime\":{\"minutes\":1.62,\"words\":487},\"git\":{},\"filePathRelative\":\"notes/press/key.md\",\"headers\":[]}")
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
