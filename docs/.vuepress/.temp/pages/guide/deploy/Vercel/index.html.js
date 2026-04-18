import comp from "/workspace/docs/.vuepress/.temp/pages/guide/deploy/Vercel/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/deploy/Vercel/\",\"title\":\"部署到Vercel\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"部署到Vercel\",\"createTime\":\"2025/11/21 01:54:40\",\"permalink\":\"/guide/deploy/Vercel/\"},\"readingTime\":{\"minutes\":1.29,\"words\":386},\"git\":{},\"filePathRelative\":\"notes/guide/deploy/Vercel.md\",\"headers\":[]}")
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
