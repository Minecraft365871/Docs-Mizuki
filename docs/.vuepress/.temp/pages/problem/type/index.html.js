import comp from "/workspace/docs/.vuepress/.temp/pages/problem/type/index.html.vue"
const data = JSON.parse("{\"path\":\"/problem/type/\",\"title\":\"Typecho相关问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Typecho相关问题\",\"createTime\":\"2025/11/21 00:00:00\",\"permalink\":\"/problem/type/\"},\"readingTime\":{\"minutes\":3.4,\"words\":1019},\"git\":{},\"filePathRelative\":\"notes/problem/typecho.md\",\"headers\":[]}")
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
