import comp from "/workspace/docs/.vuepress/.temp/pages/guide/intro/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/intro/\",\"title\":\"主题介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"主题介绍\",\"createTime\":\"2025/08/17 15:19:06\",\"permalink\":\"/guide/intro/\"},\"readingTime\":{\"minutes\":1.11,\"words\":334},\"git\":{},\"filePathRelative\":\"notes/guide/intro.md\",\"headers\":[]}")
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
