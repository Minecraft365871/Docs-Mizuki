import comp from "/workspace/docs/.vuepress/.temp/pages/special/diary/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/diary/\",\"title\":\"日记页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"日记页面\",\"createTime\":\"2025/08/17 17:21:41\",\"permalink\":\"/special/diary/\"},\"readingTime\":{\"minutes\":4.47,\"words\":1342},\"git\":{},\"filePathRelative\":\"notes/special/diary.md\",\"headers\":[]}")
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
