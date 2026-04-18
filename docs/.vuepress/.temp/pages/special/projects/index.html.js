import comp from "/workspace/docs/.vuepress/.temp/pages/special/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/projects/\",\"title\":\"项目页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"项目页面\",\"createTime\":\"2025/11/20 22:20:00\",\"permalink\":\"/special/projects/\"},\"readingTime\":{\"minutes\":6.87,\"words\":2062},\"git\":{},\"filePathRelative\":\"notes/special/projects.md\",\"headers\":[]}")
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
