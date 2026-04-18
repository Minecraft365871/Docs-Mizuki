import comp from "/workspace/docs/.vuepress/.temp/pages/special/skills/index.html.vue"
const data = JSON.parse("{\"path\":\"/special/skills/\",\"title\":\"技能页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"技能页面\",\"createTime\":\"2025/11/20 22:24:00\",\"permalink\":\"/special/skills/\"},\"readingTime\":{\"minutes\":5.92,\"words\":1776},\"git\":{},\"filePathRelative\":\"notes/special/skills.md\",\"headers\":[]}")
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
