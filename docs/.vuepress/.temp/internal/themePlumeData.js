export const themeData = {"locales":{"/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdatedText":"最后更新于","changelogText":"变更历史","changelogOnText":"于","changelogButtonText":"查看全部变更历史","copyrightText":"版权所有","copyrightAuthorText":"版权归属：","copyrightCreationOriginalText":"本文链接：","copyrightCreationTranslateText":"本文翻译自：","copyrightCreationReprintText":"本文转载自：","copyrightLicenseText":"许可证：","notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"homeText":"首页","postsText":"博客","tagText":"标签","archiveText":"归档","categoryText":"分类","archiveTotalText":"{count} 篇","encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":false,"copyPageText":"复制页面","copiedPageText":"复制成功","copingPageText":"复制中..","copyTagline":"将页面以 Markdown 格式复制供 LLMs 使用","viewMarkdown":"以 Markdown 格式查看","viewMarkdownTagline":"以纯文本查看此页面","askAIText":"在 {name} 中打开","askAITagline":"向 {name} 提问有关此页面","askAIMessage":"阅读 {link} 并回答内容相关的问题。","logo":"/favicon.png","social":[{"icon":"github","link":"https://github.com/matsuzaka-yuki/Mizuki"}],"copyright":true,"profile":{"avatar":"http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg","name":"松坂有希","description":"从零开始看世界"},"transition":{"page":true,"postList":true,"appearance":"fade"},"navbar":[{"text":"首页","link":"/"},{"text":"指南","link":"/guide/get-started/"},{"text":"演示","link":"https://mizuki.mysqil.com/"}]}},"appearance":true,"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"prevPage":true,"nextPage":true,"footer":false,"logo":"/favicon.png","social":[{"icon":"github","link":"https://github.com/matsuzaka-yuki/Mizuki"}],"copyright":true,"profile":{"avatar":"http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg","name":"松坂有希","description":"从零开始看世界"},"transition":{"page":true,"postList":true,"appearance":"fade"},"contributors":true,"changelog":false}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
