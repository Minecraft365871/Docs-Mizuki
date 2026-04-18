import comp from "/workspace/docs/.vuepress/.temp/pages/guide/deploy/Edge/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/deploy/Edge/\",\"title\":\"EdgeOne Pages 部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"EdgeOne Pages 部署\",\"createTime\":\"2025/11/21 02:01:00\",\"permalink\":\"/guide/deploy/Edge/\"},\"readingTime\":{\"minutes\":3.03,\"words\":908},\"git\":{},\"filePathRelative\":\"notes/guide/deploy/Edge.md\",\"headers\":[]}")
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
