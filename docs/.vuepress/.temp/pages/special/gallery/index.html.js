import comp from "/workspace/docs/.vuepress/.temp/pages/special/gallery/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/gallery/\",\"title\":\"相册页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"相册页面\",\"createTime\":\"2025/08/28 17:21:41\",\"permalink\":\"/special/gallery/\"},\"readingTime\":{\"minutes\":6.71,\"words\":2012},\"git\":{},\"filePathRelative\":\"notes/special/Gallery.md\",\"headers\":[]}")
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
