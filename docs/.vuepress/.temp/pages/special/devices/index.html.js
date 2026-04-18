import comp from "/workspace/docs/.vuepress/.temp/pages/special/devices/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/devices/\",\"title\":\"设备页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"设备页面\",\"createTime\":\"2025/11/20 22:26:00\",\"permalink\":\"/special/devices/\"},\"readingTime\":{\"minutes\":5.17,\"words\":1550},\"git\":{},\"filePathRelative\":\"notes/special/devices.md\",\"headers\":[]}")
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
