<template><div><h2 id="一、提问前必做准备-核心前提" tabindex="-1"><a class="header-anchor" href="#一、提问前必做准备-核心前提"><span>一、提问前必做准备（核心前提）</span></a></h2>
<h3 id="_1-1-优先查阅官方文档" tabindex="-1"><a class="header-anchor" href="#_1-1-优先查阅官方文档"><span>1.1 优先查阅官方文档</span></a></h3>
<ul>
<li>所有基础使用问题（安装部署、配置项含义、功能启用/禁用、常见报错处理等），均已在官方文档中详细说明。</li>
<li>提问前必须完整查阅相关模块文档，确认问题无对应解决方案后，再在群内提问。</li>
<li>文档地址：<a href="https://docs.mizuki.mysqil.com/" target="_blank" rel="noopener noreferrer">https://docs.mizuki.mysqil.com/</a></li>
</ul>
<h3 id="_1-2-自行排查常见问题" tabindex="-1"><a class="header-anchor" href="#_1-2-自行排查常见问题"><span>1.2 自行排查常见问题</span></a></h3>
<ul>
<li>对照文档逐步复现操作步骤，验证是否因自身配置遗漏、路径错误、环境不兼容导致问题。</li>
<li>常见排查方向：
<ul>
<li>环境依赖是否满足（Node.js 版本≥20、pnpm 版本≥9、Astro 版本≥5.12.8 等）；</li>
<li>配置文件语法是否正确（TypeScript 类型匹配、逗号遗漏、路径写法规范等）；</li>
<li>静态资源路径是否符合规则（<code v-pre>public</code> 目录资源需以 <code v-pre>/</code> 开头，<code v-pre>src</code> 目录资源无需 <code v-pre>/</code>）；</li>
<li>部署流程是否完整（构建命令执行、站点 URL 配置、权限设置等）。</li>
</ul>
</li>
</ul>
<h3 id="_1-3-确认问题未被重复提问" tabindex="-1"><a class="header-anchor" href="#_1-3-确认问题未被重复提问"><span>1.3 确认问题未被重复提问</span></a></h3>
<ul>
<li>提问前可通过群聊搜索功能，查询是否有其他成员已提出同类问题及解决方案。</li>
<li>避免重复询问文档中已明确、或群内近期已解答过的内容。</li>
</ul>
<h2 id="二、提问格式与内容要求-清晰高效" tabindex="-1"><a class="header-anchor" href="#二、提问格式与内容要求-清晰高效"><span>二、提问格式与内容要求（清晰高效）</span></a></h2>
<h3 id="_2-1-开篇声明查阅状态" tabindex="-1"><a class="header-anchor" href="#_2-1-开篇声明查阅状态"><span>2.1 开篇声明查阅状态</span></a></h3>
<ul>
<li>提问开头需明确说明：「已查阅官方文档XX模块，未找到对应解决方案」，示例：
<blockquote>
<p>已查阅官方文档“音乐播放器配置”和“常见问题”模块，未找到 Meting API 地址失效的解决办法，想请教大家...</p>
</blockquote>
</li>
</ul>
<h3 id="_2-2-完整描述问题场景" tabindex="-1"><a class="header-anchor" href="#_2-2-完整描述问题场景"><span>2.2 完整描述问题场景</span></a></h3>
<ul>
<li>说明使用场景：开发环境（本地/部署平台）、设备类型（桌面/移动端）、浏览器型号（如需）；</li>
<li>说明操作背景：正在配置的功能（如标签侧边栏、Twikoo 评论）、已完成的步骤（如修改 <code v-pre>config.ts</code>、部署 Vercel 等）。</li>
</ul>
<h3 id="_2-3-详细说明问题现象" tabindex="-1"><a class="header-anchor" href="#_2-3-详细说明问题现象"><span>2.3 详细说明问题现象</span></a></h3>
<ul>
<li>明确问题表现：功能未生效、页面报错、样式异常等；</li>
<li>提供关键信息：
<ul>
<li>报错信息：复制完整报错文本（控制台日志、页面提示）；</li>
<li>配置代码：粘贴相关配置片段（如 <code v-pre>musicPlayerConfig</code>、<code v-pre>sidebarLayoutConfig</code> 部分），隐藏敏感信息；</li>
<li>效果截图：样式异常、页面空白等可视化问题，需附上清晰截图（标注关键区域）。</li>
</ul>
</li>
</ul>
<h3 id="_2-4-示例-规范提问模板" tabindex="-1"><a class="header-anchor" href="#_2-4-示例-规范提问模板"><span>2.4 示例：规范提问模板</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>【已查阅文档】配置日记页面图片时，图片无法显示</span></span>
<span class="line"><span>【场景】本地开发环境（pnpm dev），桌面端 Chrome 浏览器，配置 src/data/diary.ts 中的 images 字段</span></span>
<span class="line"><span>【操作步骤】</span></span>
<span class="line"><span>1. 将图片放入 public/images/diary/ 目录，文件名 test.webp；</span></span>
<span class="line"><span>2. 在日记对象中添加 images: ["images/diary/test.webp"]；</span></span>
<span class="line"><span>3. 启动开发服务器后，日记页面仅显示文字，图片显示破损图标。</span></span>
<span class="line"><span>【报错信息】控制台无报错，网络请求显示 404 Not Found</span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  id: 3,</span></span>
<span class="line"><span>  content: "测试日记图片",</span></span>
<span class="line"><span>  date: "2025-01-20T15:00:00Z",</span></span>
<span class="line"><span>  images: ["images/diary/test.webp"] // 问题路径</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>【截图】[此处附上页面截图和文件目录截图]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、群聊交流礼仪-尊重为先" tabindex="-1"><a class="header-anchor" href="#三、群聊交流礼仪-尊重为先"><span>三、群聊交流礼仪（尊重为先）</span></a></h2>
<h3 id="_3-1-尊重开源社区与文档价值" tabindex="-1"><a class="header-anchor" href="#_3-1-尊重开源社区与文档价值"><span>3.1 尊重开源社区与文档价值</span></a></h3>
<ul>
<li>官方文档是开发者耗费大量时间整理的核心资源，不随意质疑文档准确性，若发现文档错误，可礼貌反馈并提供验证依据；</li>
<li>不要求他人“直接给出配置代码”“远程协助操作”，优先寻求思路指导，自主解决问题。</li>
</ul>
<h3 id="_3-2-尊重他人时间与精力" tabindex="-1"><a class="header-anchor" href="#_3-2-尊重他人时间与精力"><span>3.2 尊重他人时间与精力</span></a></h3>
<ul>
<li>提问后耐心等待回复，不频繁催促（群内成员均为自愿分享，无义务即时响应）；</li>
<li>多个问题分开提问，避免一次性抛出大量问题，影响他人阅读和解答。</li>
</ul>
<h3 id="_3-3-积极反馈解决方案" tabindex="-1"><a class="header-anchor" href="#_3-3-积极反馈解决方案"><span>3.3 积极反馈解决方案</span></a></h3>
<ul>
<li>问题解决后，可在群内简要分享解决办法（如“感谢大家！最终发现是路径少加了 /，改为 /images/diary/test.webp 后正常显示”），帮助后续有同类问题的成员。</li>
</ul>
<h2 id="四、违规处理说明" tabindex="-1"><a class="header-anchor" href="#四、违规处理说明"><span>四、违规处理说明</span></a></h2>
<ul>
<li>首次违反规范（如未查阅文档直接提问、内容模糊）：群管理将提醒补充信息，引导查阅文档；</li>
<li>重复违反规范（如多次重复提问、不遵守礼仪）：将被暂时禁言，情节严重者移出群聊。</li>
</ul>
<h2 id="附-核心资源速查" tabindex="-1"><a class="header-anchor" href="#附-核心资源速查"><span>附：核心资源速查</span></a></h2>
<ul>
<li>官方文档：<a href="https://docs.mizuki.mysqil.com/" target="_blank" rel="noopener noreferrer">https://docs.mizuki.mysqil.com/</a></li>
<li>项目仓库：GitHub（<a href="https://github.com/matsuzaka-yuki/Mizuki" target="_blank" rel="noopener noreferrer">matsuzaka-yuki/Mizuki</a>）</li>
<li>常见问题：文档“FAQ”模块、群聊置顶消息、仓库 Issues 区（搜索关键词）</li>
</ul>
</div></template>


