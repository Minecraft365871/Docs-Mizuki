import comp from "/workspace/docs/.vuepress/.temp/pages/guide/deploy/local/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/deploy/local/\",\"title\":\"本地部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"本地部署\",\"createTime\":\"2025/11/21 02:12:49\",\"permalink\":\"/guide/deploy/local/\"},\"readingTime\":{\"minutes\":4.85,\"words\":1455},\"git\":{},\"filePathRelative\":\"notes/guide/deploy/local.md\",\"headers\":[]}")
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
