import comp from "/workspace/docs/.vuepress/.temp/pages/Sidepanel/announcement/index.html.vue"
const data = JSON.parse("{\"path\":\"/Sidepanel/announcement/\",\"title\":\"公告组件配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"公告组件配置\",\"createTime\":\"2025/11/20 22:12:00\",\"permalink\":\"/Sidepanel/announcement/\"},\"readingTime\":{\"minutes\":5.02,\"words\":1506},\"git\":{},\"filePathRelative\":\"notes/Sidepanel/announcement.md\",\"headers\":[]}")
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
