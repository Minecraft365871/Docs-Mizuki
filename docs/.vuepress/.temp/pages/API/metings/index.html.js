import comp from "/workspace/docs/.vuepress/.temp/pages/API/metings/index.html.vue"
const data = JSON.parse("{\"path\":\"/API/metings/\",\"title\":\"Metings API文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Metings API文档\",\"createTime\":\"2025/11/21 20:15:35\",\"permalink\":\"/API/metings/\"},\"readingTime\":{\"minutes\":3.11,\"words\":934},\"git\":{},\"filePathRelative\":\"notes/API/meeings.md\",\"headers\":[]}")
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
