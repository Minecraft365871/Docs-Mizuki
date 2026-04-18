import comp from "/workspace/docs/.vuepress/.temp/pages/press/folder/index.html.vue"
const data = JSON.parse("{\"path\":\"/press/folder/\",\"title\":\"文件夹方案\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文件夹方案\",\"createTime\":\"2025/09/01 20:28:41\",\"permalink\":\"/press/folder/\"},\"readingTime\":{\"minutes\":6.6,\"words\":1981},\"git\":{},\"filePathRelative\":\"notes/press/folder.md\",\"headers\":[]}")
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
