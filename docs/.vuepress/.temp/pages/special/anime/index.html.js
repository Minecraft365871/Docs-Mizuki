import comp from "/workspace/docs/.vuepress/.temp/pages/special/anime/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/anime/\",\"title\":\"番剧页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"番剧页面\",\"createTime\":\"2025/11/20 22:28:00\",\"permalink\":\"/special/anime/\"},\"readingTime\":{\"minutes\":10.14,\"words\":3042},\"git\":{},\"filePathRelative\":\"notes/special/anime.md\",\"headers\":[]}")
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
