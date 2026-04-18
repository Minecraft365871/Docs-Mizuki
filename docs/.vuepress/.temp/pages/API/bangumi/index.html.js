import comp from "/workspace/docs/.vuepress/.temp/pages/API/bangumi/index.html.vue"
const data = JSON.parse("{\"path\":\"/API/bangumi/\",\"title\":\"Bangumi API文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Bangumi API文档\",\"createTime\":\"2025/11/21 20:15:35\",\"permalink\":\"/API/bangumi/\"},\"readingTime\":{\"minutes\":4.41,\"words\":1324},\"git\":{},\"filePathRelative\":\"notes/API/bangumi.md\",\"headers\":[]}")
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
