import comp from "/workspace/docs/.vuepress/.temp/pages/special/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/about/\",\"title\":\"自定义页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义页面\",\"createTime\":\"2025/08/17 17:21:41\",\"permalink\":\"/special/about/\"},\"readingTime\":{\"minutes\":1.13,\"words\":339},\"git\":{},\"filePathRelative\":\"notes/special/about.md\",\"headers\":[]}")
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
