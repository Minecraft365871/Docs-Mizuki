import comp from "/workspace/docs/.vuepress/.temp/pages/press/video/bilibili/index.html.vue"
const data = JSON.parse("{\"path\":\"/press/video/bilibili/\",\"title\":\"B站视频嵌入\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"B站视频嵌入\",\"createTime\":\"2025/11/21 20:49:42\",\"permalink\":\"/press/video/bilibili/\"},\"readingTime\":{\"minutes\":3.02,\"words\":906},\"git\":{},\"filePathRelative\":\"notes/press/video/bilibili.md\",\"headers\":[]}")
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
