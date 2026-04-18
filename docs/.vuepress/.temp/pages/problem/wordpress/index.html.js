import comp from "/workspace/docs/.vuepress/.temp/pages/problem/wordpress/index.html.vue"
const data = JSON.parse("{\"path\":\"/problem/wordpress/\",\"title\":\"WordPress相关问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"WordPress相关问题\",\"createTime\":\"2025/11/21 00:00:00\",\"permalink\":\"/problem/wordpress/\"},\"readingTime\":{\"minutes\":1.82,\"words\":547},\"git\":{},\"filePathRelative\":\"notes/problem/wordpress.md\",\"headers\":[]}")
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
