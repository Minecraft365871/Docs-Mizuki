import comp from "/workspace/docs/.vuepress/.temp/pages/guide/deploy/server/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/deploy/server/\",\"title\":\"服务器部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"服务器部署\",\"createTime\":\"2025/11/21 02:02:00\",\"permalink\":\"/guide/deploy/server/\"},\"readingTime\":{\"minutes\":5.04,\"words\":1512},\"git\":{},\"filePathRelative\":\"notes/guide/deploy/server.md\",\"headers\":[]}")
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
