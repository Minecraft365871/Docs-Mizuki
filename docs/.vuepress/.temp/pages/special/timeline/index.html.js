import comp from "/workspace/docs/.vuepress/.temp/pages/special/timeline/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/timeline/\",\"title\":\"时间线页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"时间线页面\",\"createTime\":\"2025/11/20 22:22:00\",\"permalink\":\"/special/timeline/\"},\"readingTime\":{\"minutes\":6.96,\"words\":2087},\"git\":{},\"filePathRelative\":\"notes/special/timeline.md\",\"headers\":[]}")
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
