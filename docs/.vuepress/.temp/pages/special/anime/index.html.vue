<template><div><h3 id="番剧页面配置教程" tabindex="-1"><a class="header-anchor" href="#番剧页面配置教程"><span>番剧页面配置教程</span></a></h3>
<p>Mizuki 主题内置了一个优雅的番剧（Anime）页面，支持两种数据源模式：</p>
<ul>
<li><strong>Bangumi 模式</strong>：自动从 Bangumi API 同步观看记录</li>
<li><strong>BiliBili 模式</strong>：自动从 BiliBili API 同步观看记录</li>
<li><strong>本地模式</strong>：手动管理本地番剧数据</li>
</ul>
<p>这个页面可以帮助访客了解您的动画喜好和观看进度。</p>
<p>本教程将详细指导你如何配置和使用番剧页面。</p>
<hr>
<h4 id="_1-核心概念-页面与数据分离" tabindex="-1"><a class="header-anchor" href="#_1-核心概念-页面与数据分离"><span><strong>1. 核心概念：页面与数据分离</strong></span></a></h4>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="pages" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-view" /></template><FileTreeNode type="file" filename="anime.astro" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="data" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-db" /></template><FileTreeNode type="file" filename="anime.ts" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>在 Mizuki 主题中，番剧页面的<strong>展示逻辑</strong>和<strong>内容数据</strong>是分开的：</p>
<ul>
<li>
<p><strong>展示逻辑</strong>: <code v-pre>src/pages/anime.astro</code></p>
<ul>
<li>这个文件负责番剧页面的HTML结构、CSS样式和JavaScript交互逻辑。</li>
<li>它定义了番剧如何排序、筛选和展示。</li>
<li><strong>通常情况下，你不需要修改这个文件。</strong></li>
</ul>
</li>
<li>
<p><strong>内容数据</strong>:</p>
<ul>
<li><strong>Bangumi 模式</strong>：通过 Bangumi API 自动获取数据，无需手动维护，数据来源为 Bangumi 个人观看记录</li>
<li><strong>BiliBili 模式</strong>：通过 BiliBili API 自动获取数据，无需手动维护，数据来源为 BiliBili 个人观看记录</li>
<li><strong>本地模式</strong>：通过 <code v-pre>src/data/anime.ts</code> 文件手动管理番剧数据，需要手动添加、修改或删除番剧条目</li>
<li><strong>数据源操作</strong>：添加、修改或删除番剧时，应根据选择的模式在对应数据源中操作
<ul>
<li>Bangumi 模式：在 Bangumi 网站上管理观看记录</li>
<li>BiliBili 模式：在 BiliBili 网站上管理观看记录</li>
<li>本地模式：直接编辑 <code v-pre>src/data/anime.ts</code> 文件</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_2-bangumi-模式配置" tabindex="-1"><a class="header-anchor" href="#_2-bangumi-模式配置"><span><strong>2. Bangumi 模式配置</strong></span></a></h4>
<p>Bangumi 模式的配置是通过 <code v-pre>src/config.ts</code> 文件进行的，而不是环境变量。在 <code v-pre>src/config.ts</code> 中添加以下配置：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Bangumi 用户ID配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">bangumi</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  userId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">your-bangumi-id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 在此处设置你的Bangumi用户ID，可以设置为 "sai" 测试</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 番剧模式选择</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">bangumi</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置，"bilibili" 使用Bilibili API</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>获取 Bangumi 用户 ID 的方法：</p>
<ol>
<li>访问 <a href="https://bgm.tv/" target="_blank" rel="noopener noreferrer">Bangumi</a> 并登录</li>
<li>进入个人主页</li>
<li>URL 中数字部分即为用户 ID (如 <code v-pre>https://bgm.tv/user/12345</code>  中的 12345)</li>
</ol>
<hr>
<h4 id="_3-bilibili-模式配置" tabindex="-1"><a class="header-anchor" href="#_3-bilibili-模式配置"><span><strong>3. Bilibili 模式配置</strong></span></a></h4>
<p>Bilibili 模式的配置同样通过 <code v-pre>src/config.ts</code> 文件进行。在 <code v-pre>src/config.ts</code> 中添加以下配置：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">bilibili</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	vmid</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">your-bilibili-vmid</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 在此处设置你的Bilibili用户ID (uid)，例如 "1129280784"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	fetchOnDev</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 是否在开发环境下获取 Bilibili 数据（默认 false）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	coverMirror</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 封面图片镜像源（可选，如果需要使用镜像源，例如 "https://images.weserv.nl/?url="）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	useWebp</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 是否使用WebP格式（默认 true）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 番剧模式选择</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">bilibili</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置，"bilibili" 使用Bilibili API</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h5 id="_3-1-配置项详解" tabindex="-1"><a class="header-anchor" href="#_3-1-配置项详解"><span><strong>3.1 配置项详解</strong></span></a></h5>
<ul>
<li><strong><code v-pre>vmid</code></strong>: Bilibili 用户 ID，从个人空间 URL 中获取（如 <code v-pre>https://space.bilibili.com/1129280784</code> 中的 <code v-pre>1129280784</code>）</li>
<li><strong><code v-pre>fetchOnDev</code></strong>: 是否在开发环境下获取 Bilibili 数据，默认 <code v-pre>false</code>，建议保持默认值以避免开发时频繁请求 API</li>
<li><strong><code v-pre>coverMirror</code></strong>: 封面图片镜像源（可选），如果需要使用镜像源加载封面图片，例如设置为 <code v-pre>&quot;https://images.weserv.nl/?url=&quot;</code></li>
<li><strong><code v-pre>useWebp</code></strong>: 是否使用 WebP 格式，默认 <code v-pre>true</code>，建议保持开启以获得更好的性能</li>
</ul>
<h5 id="_3-2-sessdata-环境变量配置" tabindex="-1"><a class="header-anchor" href="#_3-2-sessdata-环境变量配置"><span><strong>3.2 SESSDATA 环境变量配置</strong></span></a></h5>
<p>SESSDATA 用于获取更详细的观看进度，需要通过环境变量配置：</p>
<p><strong>本地构建和服务器部署配置</strong>：</p>
<ol>
<li>在项目根目录创建 <code v-pre>.env</code> 文件</li>
<li>添加以下配置：</li>
</ol>
<div class="code-block-title" data-title=".env"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-dotenv"/>.env</span></div><div class="language-env line-numbers-mode" data-highlighter="shiki" data-ext="env" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-env"><span class="line"><span>BILI_SESSDATA=your_bilibili_sessdata</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div><p><strong>SESSDATA 的获取步骤</strong>：</p>
<ol>
<li>登录 bilibili 账号</li>
<li>打开浏览器开发者工具（F12 或 Ctrl+Shift+I）</li>
<li>找到&quot;应用程序&quot;(app)一栏</li>
<li>在请求头中查找 cookie 字段</li>
<li>从 cookie 中提取 sessdata 值</li>
</ol>
<p><strong>环境变量说明</strong>：</p>
<ul>
<li>环境变量名：<code v-pre>BILI_SESSDATA</code></li>
<li>对应值：从 cookie 中提取的 sessdata 值</li>
</ul>
<h5 id="_3-2-1-通过-serverless-平台配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-2-1-通过-serverless-平台配置环境变量"><span><strong>3.2.1 通过 Serverless 平台配置环境变量</strong></span></a></h5>
<p>如果您使用 Serverless 平台部署项目，可以在平台控制台中配置环境变量：</p>
<p><strong>Vercel 平台</strong>：</p>
<ol>
<li>登录 Vercel 控制台</li>
<li>选择您的项目</li>
<li>进入 &quot;Settings&quot; → &quot;Environment Variables&quot;</li>
<li>添加环境变量：
<ul>
<li>Name: <code v-pre>BILI_SESSDATA</code></li>
<li>Value: 您的 Bilibili SESSDATA 值</li>
<li>选择适当的环境（Development/Production）</li>
</ul>
</li>
</ol>
<p><strong>Netlify 平台</strong>：</p>
<ol>
<li>登录 Netlify 控制台</li>
<li>选择您的项目</li>
<li>进入 &quot;Site settings&quot; → &quot;Environment variables&quot;</li>
<li>添加环境变量：
<ul>
<li>Key: <code v-pre>BILI_SESSDATA</code></li>
<li>Value: 您的 Bilibili SESSDATA 值</li>
</ul>
</li>
</ol>
<p><strong>Cloudflare Pages 平台</strong>：</p>
<ol>
<li>登录 Cloudflare 控制台</li>
<li>选择您的 Pages 项目</li>
<li>进入 &quot;Settings&quot; → &quot;Environment variables&quot;</li>
<li>添加环境变量：
<ul>
<li>Variable name: <code v-pre>BILI_SESSDATA</code></li>
<li>Value: 您的 Bilibili SESSDATA 值</li>
<li>选择适当的环境（Build/Preview/Production）</li>
</ul>
</li>
</ol>
<p><strong>EdgeOne Pages 平台</strong>：</p>
<ol>
<li>登录 EdgeOne 控制台</li>
<li>选择您的 Pages 项目</li>
<li>进入 &quot;设置&quot; → &quot;环境变量&quot;</li>
<li>添加环境变量：
<ul>
<li>变量名: <code v-pre>BILI_SESSDATA</code></li>
<li>值: 您的 Bilibili SESSDATA 值</li>
<li>选择适当的环境（构建/预览/生产）</li>
</ul>
</li>
</ol>
<p><strong>注意</strong>：无论使用哪种配置方式，确保不要将 SESSDATA 敏感信息提交到版本控制系统。</p>
<h5 id="_3-3-获取-bilibili-用户-uid" tabindex="-1"><a class="header-anchor" href="#_3-3-获取-bilibili-用户-uid"><span><strong>3.3 获取 Bilibili 用户 UID</strong></span></a></h5>
<ol>
<li>访问 <a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer">Bilibili</a> 并登录</li>
<li>进入个人主页</li>
<li>URL 中数字部分即为用户 ID (如 <code v-pre>https://space.bilibili.com/12345</code>  中的 12345)</li>
<li>或在个人设置中查看用户信息，找到 UID 字段</li>
</ol>
<hr>
<h4 id="_4-本地模式配置" tabindex="-1"><a class="header-anchor" href="#_4-本地模式配置"><span><strong>4. 本地模式配置</strong></span></a></h4>
<h5 id="_4-1-数据结构详解" tabindex="-1"><a class="header-anchor" href="#_4-1-数据结构详解"><span><strong>4.1 数据结构详解</strong></span></a></h5>
<p>本地番剧数据使用 <code v-pre>AnimeItem</code> 类型定义，每个条目包含以下字段：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> AnimeItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	status</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">watching</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">completed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">planned</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	rating</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	episodes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	year</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	genre</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	studio</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	progress</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	totalEpisodes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	startDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	endDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字段说明</strong>:</p>
<ul>
<li><strong><code v-pre>title: string</code></strong>: (必填) 番剧的标题。</li>
<li><strong><code v-pre>status: &quot;watching&quot; | &quot;completed&quot; | &quot;planned&quot;</code></strong>: (必填) 番剧的观看状态，用于筛选。</li>
<li><strong><code v-pre>rating: number</code></strong>: (必填) 番剧的评分，通常0-10分。</li>
<li><strong><code v-pre>cover: string</code></strong>: (必填) 番剧封面的图片路径，通常放在 <code v-pre>public/assets/anime/</code> 目录下。</li>
<li><strong><code v-pre>description: string</code></strong>: (必填) 番剧的简短描述。</li>
<li><strong><code v-pre>episodes: string</code></strong>: (必填) 番剧的总集数，如 &quot;12 episodes&quot;。</li>
<li><strong><code v-pre>year: string</code></strong>: (必填) 番剧的播出年份。</li>
<li><strong><code v-pre>genre: string[]</code></strong>: (必填) 番剧的类型标签数组，如 [&quot;Action&quot;, &quot;Slice of life&quot;]。</li>
<li><strong><code v-pre>studio: string</code></strong>: (必填) 番剧的制作公司。</li>
<li><strong><code v-pre>link: string</code></strong>: (必填) 番剧的观看链接，通常是B站链接。</li>
<li><strong><code v-pre>progress: number</code></strong>: (必填) 当前观看进度，即已看集数。</li>
<li><strong><code v-pre>totalEpisodes: number</code></strong>: (必填) 总集数。</li>
<li><strong><code v-pre>startDate: string</code></strong>: (必填) 开始观看的日期，格式为 &quot;YYYY-MM&quot;。</li>
<li><strong><code v-pre>endDate: string</code></strong>: (可选) 完成观看的日期，格式为 &quot;YYYY-MM&quot;。对于进行中的番剧，此字段可省略。</li>
</ul>
<h5 id="_4-2-切换到本地模式" tabindex="-1"><a class="header-anchor" href="#_4-2-切换到本地模式"><span><strong>4.2 切换到本地模式</strong></span></a></h5>
<p>修改 <code v-pre>src/data/anime.ts</code> 中的 <code v-pre>getAnimeList()</code> 函数：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 修改为返回本地数据</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getAnimeList</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> localAnimeList</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，在 <code v-pre>config.ts</code> 中修改模式配置：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 番剧模式选择</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">local</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置，"bilibili" 使用Bilibili API</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_5-操作指南" tabindex="-1"><a class="header-anchor" href="#_5-操作指南"><span><strong>5. 操作指南</strong></span></a></h4>
<h5 id="_5-1-本地模式添加番剧" tabindex="-1"><a class="header-anchor" href="#_5-1-本地模式添加番剧"><span><strong>5.1 本地模式添加番剧</strong></span></a></h5>
<p>按照以下步骤添加一个新的番剧：</p>
<ol>
<li>
<p><strong>准备番剧封面</strong>:</p>
<ul>
<li>获取番剧的封面图片，建议使用高质量的海报图。</li>
<li>将图片文件（如 <code v-pre>my-anime.webp</code>）复制到项目的 <code v-pre>public/assets/anime/</code> 目录下。</li>
<li>如果目录不存在，可以创建它。</li>
</ul>
</li>
<li>
<p><strong>编辑 <code v-pre>anime.ts</code> 文件</strong>:</p>
<ul>
<li>打开 <code v-pre>src/data/anime.ts</code>。</li>
<li>在 <code v-pre>localAnimeList</code> 数组中，复制一个现有的番剧对象作为模板。</li>
<li>修改模板中的属性，参考下面的示例。</li>
</ul>
</li>
<li>
<p><strong>示例：添加一个新番剧</strong></p>
<p>假设我们要添加一个新的番剧，内容如下：</p>
<ul>
<li>标题：轻音少女</li>
<li>状态：已完结</li>
<li>评分：9.5</li>
<li>描述：女孩子们的日常，甜美治愈</li>
<li>集数：12集</li>
<li>年份：2015</li>
<li>类型：日常, 治愈</li>
<li>制作公司：京都动画</li>
<li>观看进度：12/12</li>
<li>开始观看：2015-07</li>
<li>完成观看：2015-09</li>
</ul>
<p>修改后的 <code v-pre>localAnimeList</code> 数组会是这样：</p>
<div class="code-block-title" data-title="src/data/anime.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/anime.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">localAnimeList</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">AnimeItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Lycoris Recoil</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // ... 其他字段 ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ... 其他番剧 ...</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // --- 这是我们新添加的番剧 ---</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">轻音少女</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    status</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">completed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 状态</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    rating</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">9.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 评分</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/anime/k-on.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 封面</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">女孩子们的日常，甜美治愈</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 描述</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    episodes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">12 episodes</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 集数</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    year</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2015</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 年份</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    genre</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">日常</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">治愈</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 类型</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    studio</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">京都动画</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 制作公司</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://www.bilibili.com/bangumi/media/md2590</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 链接</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    progress</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">12</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 观看进度</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    totalEpisodes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">12</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 总集数</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    startDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2015-07</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 开始观看</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    endDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2015-09</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 完成观看</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></li>
</ol>
<h5 id="_5-2-修改或删除番剧" tabindex="-1"><a class="header-anchor" href="#_5-2-修改或删除番剧"><span><strong>5.2 修改或删除番剧</strong></span></a></h5>
<ul>
<li><strong>修改番剧</strong>: 直接在 <code v-pre>localAnimeList</code> 数组中找到对应的番剧对象，修改其属性即可。</li>
<li><strong>删除番剧</strong>: 找到对应的番剧对象，将其从数组中完全移除。注意不要留下多余的逗号，以免造成语法错误。</li>
</ul>
<h5 id="_5-3-更新-api-数据" tabindex="-1"><a class="header-anchor" href="#_5-3-更新-api-数据"><span><strong>5.3 更新 API 数据</strong></span></a></h5>
<p>Bangumi 和 Bilibili 数据会自动从 API 获取，但你可以强制刷新：</p>
<ol>
<li>清除浏览器缓存</li>
<li>重启开发服务器</li>
</ol>
<hr>
<h4 id="_6-番剧状态说明" tabindex="-1"><a class="header-anchor" href="#_6-番剧状态说明"><span><strong>6. 番剧状态说明</strong></span></a></h4>
<p>番剧状态分为三种：</p>
<ul>
<li>
<p><strong>&quot;watching&quot;</strong>: 追番中</p>
<ul>
<li>正在观看的番剧</li>
<li>进度小于总集数</li>
<li>不需要 <code v-pre>endDate</code> 字段</li>
</ul>
</li>
<li>
<p><strong>&quot;completed&quot;</strong>: 已完结</p>
<ul>
<li>已看完的番剧</li>
<li>进度等于总集数</li>
<li>应该有 <code v-pre>endDate</code> 字段</li>
</ul>
</li>
<li>
<p><strong>&quot;planned&quot;</strong>: 计划观看</p>
<ul>
<li>计划观看但还未开始的番剧</li>
<li>进度通常为0</li>
<li>可能没有 <code v-pre>startDate</code> 和 <code v-pre>endDate</code> 字段</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_7-最佳实践与建议" tabindex="-1"><a class="header-anchor" href="#_7-最佳实践与建议"><span><strong>7. 最佳实践与建议</strong></span></a></h4>
<ul>
<li><strong>封面图片</strong>: 使用高质量的海报图，建议使用2:3或3:4的宽高比。</li>
<li><strong>评分标准</strong>: 保持评分标准一致，避免随意打分。</li>
<li><strong>进度管理</strong>:
<ul>
<li>Bangumi 模式：自动同步，无需手动更新</li>
<li>本地模式：定期更新观看进度，保持数据准确性</li>
</ul>
</li>
<li><strong>日期格式</strong>: 严格遵守 &quot;YYYY-MM&quot; 格式，确保日期正确显示。</li>
<li><strong>类型标签</strong>: 使用统一的中英文类型标签，便于分类和搜索。</li>
<li><strong>链接有效性</strong>: 使用可靠的视频平台链接，确保链接长期有效。</li>
<li><strong>模式选择</strong>:
<ul>
<li><strong>Bangumi 模式</strong>：适合已有 Bangumi 账户和观看记录的用户</li>
<li><strong>Bilibili 模式</strong>：适合已有 Bilibili 账户和观看记录的用户</li>
<li><strong>本地模式</strong>：适合不想依赖第三方服务或需要自定义数据的用户</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_8-页面功能与特性" tabindex="-1"><a class="header-anchor" href="#_8-页面功能与特性"><span><strong>8. 页面功能与特性</strong></span></a></h4>
<p>番剧页面提供以下功能：</p>
<ul>
<li><strong>状态筛选</strong>: 按观看状态（全部/追番中/已完结/计划观看）筛选番剧</li>
<li><strong>评分排序</strong>: 按评分高低排序番剧</li>
<li><strong>年份排序</strong>: 按播出年份排序番剧</li>
<li><strong>类型筛选</strong>: 按类型标签筛选番剧</li>
<li><strong>观看进度</strong>: 显示每个番剧的观看进度条</li>
<li><strong>番剧详情</strong>: 点击番剧卡片查看详细信息和观看链接</li>
<li><strong>统计信息</strong>: 显示总观看数、平均评分等统计数据</li>
<li><strong>Bangumi 特性</strong> (Bangumi 模式):
<ul>
<li>自动同步 Bangumi 观看记录</li>
<li>显示中文译名（如果可用）</li>
<li>定期更新观看进度</li>
</ul>
</li>
<li><strong>Bilibili 特性</strong> (Bilibili 模式):
<ul>
<li>自动同步 Bilibili 观看记录</li>
<li>显示番剧评分</li>
<li>定期更新观看进度</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_9-导航栏配置" tabindex="-1"><a class="header-anchor" href="#_9-导航栏配置"><span><strong>9. 导航栏配置</strong></span></a></h4>
<p>要在导航栏中显示番剧链接，请确保在 <code v-pre>src/config.ts</code> 的 <code v-pre>navBarConfig</code> 中包含了番剧链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 番剧页面</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>或者手动添加番剧链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">动漫番剧</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/anime/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ri:tv-line</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>
<h4 id="_10-注意事项" tabindex="-1"><a class="header-anchor" href="#_10-注意事项"><span><strong>10. 注意事项</strong></span></a></h4>
<ol>
<li>
<p><strong>Bangumi 模式注意事项</strong>：</p>
<ul>
<li>确保 <code v-pre>config.ts</code> 中的 <code v-pre>bangumi.userId</code> 配置正确</li>
<li>API 请求可能受网络环境影响，建议在网络稳定时使用</li>
<li>数据更新有一定延迟，不是实时的</li>
<li>同时确保 <code v-pre>anime.mode</code> 设置为 <code v-pre>&quot;bangumi&quot;</code></li>
</ul>
</li>
<li>
<p><strong>Bilibili 模式注意事项</strong>：</p>
<ul>
<li>确保 <code v-pre>config.ts</code> 中的 <code v-pre>bilibili.vmid</code> 配置正确</li>
<li>API 请求可能受网络环境影响，建议在网络稳定时使用</li>
<li>数据更新有一定延迟，不是实时的</li>
<li>同时确保 <code v-pre>anime.mode</code> 设置为 <code v-pre>&quot;bilibili&quot;</code></li>
</ul>
</li>
<li>
<p><strong>本地模式注意事项</strong>：</p>
<ul>
<li>确保 <code v-pre>cover</code> 字段中的图片链接可正常访问</li>
<li><code v-pre>progress</code> 值不应超过 <code v-pre>totalEpisodes</code></li>
<li>修改数据后可能需要重启开发服务器</li>
<li>同时确保 <code v-pre>anime.mode</code> 设置为 <code v-pre>&quot;local&quot;</code></li>
</ul>
</li>
<li>
<p><strong>通用注意事项</strong>：</p>
<ul>
<li>番剧名称中避免使用特殊字符，以免显示异常</li>
<li>切换模式后需要重新构建项目</li>
<li>修改 <code v-pre>config.ts</code> 后需要重启开发服务器</li>
</ul>
</li>
</ol>
<hr>
<p>通过以上步骤，你就可以轻松地管理你的番剧页面了。选择适合你的模式（Bangumi、Bilibili 或本地），定期更新数据，让访客了解你的动画喜好和观看进度！</p>
</div></template>


