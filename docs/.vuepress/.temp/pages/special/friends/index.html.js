import comp from "/workspace/docs/.vuepress/.temp/pages/special/friends/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/friends/\",\"title\":\"友链页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"友链页面\",\"createTime\":\"2025/08/17 17:21:41\",\"permalink\":\"/special/friends/\"},\"readingTime\":{\"minutes\":6.15,\"words\":1845},\"git\":{},\"filePathRelative\":\"notes/special/friends.md\",\"headers\":[]}")
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
