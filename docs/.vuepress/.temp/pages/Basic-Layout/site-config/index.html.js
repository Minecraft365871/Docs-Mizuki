import comp from "/workspace/docs/.vuepress/.temp/pages/Basic-Layout/site-config/index.html.vue"
const data = JSON.parse("{\"path\":\"/Basic-Layout/site-config/\",\"title\":\"基础配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"基础配置\",\"createTime\":\"2025/08/17 17:21:41\",\"permalink\":\"/Basic-Layout/site-config/\"},\"readingTime\":{\"minutes\":3.61,\"words\":1083},\"git\":{},\"filePathRelative\":\"notes/Basic-Layout/site-config.md\",\"headers\":[]}")
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
