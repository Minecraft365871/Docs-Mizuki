<template><div><p>Twikoo 评论系统配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>commentConfig</code> 对象，控制博客的评论系统显示设置。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">commentConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">CommentConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 启用评论功能。当设置为 false 时，评论组件将不会显示在文章区域。</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	twikoo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		envId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://twikoo.vercel.app</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">SITE_LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>我们来详细解析 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>commentConfig</code> 对象，并为你提供一份配置教程。</p>
<p>这个配置项用于在你的博客中集成 <strong>Twikoo</strong> 评论系统，让你的读者可以在文章下方发表评论和进行互动。</p>
<hr>
<h3 id="评论系统配置教程" tabindex="-1"><a class="header-anchor" href="#评论系统配置教程"><span><strong>评论系统配置教程</strong></span></a></h3>
<p><code v-pre>commentConfig</code> 对象是启用和配置 Twikoo 评论功能的核心。Twikoo 是一个简洁、安全、开源的评论系统，支持多种部署方式，非常适合静态网站。</p>
<h4 id="核心配置项详解" tabindex="-1"><a class="header-anchor" href="#核心配置项详解"><span><strong>核心配置项详解</strong></span></a></h4>
<h4 id="_1-启用评论功能-enable" tabindex="-1"><a class="header-anchor" href="#_1-启用评论功能-enable"><span><strong>1. 启用评论功能 (<code v-pre>enable</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制整个评论系统的开关。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>true</code>: 启用评论功能。文章页面将显示 Twikoo 评论区。</li>
<li><code v-pre>false</code>: (默认) 禁用评论功能。评论区将不会在任何页面显示。</li>
</ul>
</li>
</ul>
<h4 id="_2-twikoo-具体配置-twikoo" tabindex="-1"><a class="header-anchor" href="#_2-twikoo-具体配置-twikoo"><span><strong>2. Twikoo 具体配置 (<code v-pre>twikoo</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">twikoo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		envId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://twikoo.vercel.app</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> SITE_LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 包含所有与 Twikoo 服务相关的配置。</li>
</ul>
<h5 id="环境-id-部署地址-envid" tabindex="-1"><a class="header-anchor" href="#环境-id-部署地址-envid"><span><strong>环境 ID / 部署地址 (<code v-pre>envId</code>)</strong></span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">envId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://twikoo.vercel.app</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 这是 <strong>最重要的配置项</strong>。它告诉你的博客前端，去哪里获取和提交评论数据。它的值是你 Twikoo 服务端的部署地址。</li>
<li><strong>详细解释</strong>:
<ul>
<li>Twikoo 由两部分组成：<strong>前端组件</strong>（嵌入在你的博客里）和 <strong>后端服务</strong>（存储评论数据、处理提交请求）。</li>
<li><code v-pre>envId</code> 就是你后端服务的 URL。</li>
<li><strong>示例值说明</strong>: <code v-pre>https://twikoo.vercel.app</code> 是 Twikoo 官方提供的一个演示服务地址。<strong>你不应该在生产环境中使用它</strong>，因为它有访问限制，且数据不保证持久。</li>
</ul>
</li>
<li><strong>如何获取你自己的 <code v-pre>envId</code></strong>:
你需要自己部署一个 Twikoo 服务端。最常用且免费的方式是部署到 Vercel 或 Cloudflare Pages。
<ol>
<li><strong>前往 Twikoo 官方文档</strong>: <a href="https://twikoo.js.org" target="_blank" rel="noopener noreferrer">https://twikoo.js.org</a></li>
<li><strong>选择一种部署方式</strong> (例如 Vercel)，并按照官方教程一步步操作。</li>
<li>部署成功后，你会得到一个 URL（例如 <code v-pre>https://your-twikoo-app.vercel.app</code>），这就是你的 <code v-pre>envId</code>。</li>
</ol>
</li>
<li><strong>配置</strong>: 将你部署得到的 URL 填入 <code v-pre>envId</code> 字段。</li>
</ul>
<hr>
<h3 id="完整配置流程" tabindex="-1"><a class="header-anchor" href="#完整配置流程"><span><strong>完整配置流程</strong></span></a></h3>
<ol>
<li>
<p><strong>部署 Twikoo 服务端</strong>:</p>
<ul>
<li>访问 <a href="https://twikoo.js.org/backend.html" target="_blank" rel="noopener noreferrer">Twikoo 官方部署文档</a>。</li>
<li>按照文档指引，将 Twikoo 部署到 Vercel、Cloudflare Pages 或其他支持的平台。</li>
<li>完成部署后，记下你的服务地址（例如 <code v-pre>https://my-twikoo-service.vercel.app</code>）。</li>
</ul>
</li>
<li>
<p><strong>配置博客 <code v-pre>config.ts</code> 文件</strong>:</p>
<ul>
<li>打开 <code v-pre>src/config.ts</code> 文件。</li>
<li>找到 <code v-pre>commentConfig</code> 对象。</li>
<li>将 <code v-pre>enable</code> 设置为 <code v-pre>true</code>。</li>
<li>将 <code v-pre>twikoo.envId</code> 的值更新为你自己的 Twikoo 服务地址。</li>
</ul>
<p><strong>配置好的示例</strong>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">commentConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">CommentConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 启用评论功能。</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	twikoo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		envId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://my-twikoo-service.vercel.app</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 替换成你自己的部署地址</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">SITE_LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>启动并测试</strong>:</p>
<ul>
<li>保存 <code v-pre>config.ts</code> 文件。</li>
<li>启动或重启你的博客项目。</li>
<li>访问一篇文章的页面，滚动到文章底部，你应该能看到 Twikoo 评论区已经加载出来了。</li>
<li>尝试发表一条评论，检查是否能成功提交和显示。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="常见问题与注意事项" tabindex="-1"><a class="header-anchor" href="#常见问题与注意事项"><span><strong>常见问题与注意事项</strong></span></a></h3>
<ul>
<li>
<p><strong>评论区不显示</strong>:</p>
<ul>
<li>检查 <code v-pre>enable</code> 是否设置为 <code v-pre>true</code>。</li>
<li>检查 <code v-pre>envId</code> 是否填写正确，并且你的 Twikoo 服务端部署成功且可以正常访问。</li>
<li>打开浏览器开发者工具（按 F12），查看控制台（Console）是否有任何错误信息，这通常能提示问题所在（例如网络请求失败）。</li>
</ul>
</li>
<li>
<p><strong>无法提交评论</strong>:</p>
<ul>
<li>确保你的 <code v-pre>envId</code> 指向的服务端是你自己部署的，而不是官方的演示地址。官方演示地址可能已关闭或有提交限制。</li>
<li>检查部署平台（如 Vercel）的日志，看是否有相关的错误记录。</li>
</ul>
</li>
<li>
<p><strong>数据持久化</strong>:</p>
<ul>
<li>Twikoo 在免费部署时（如 Vercel 的 Hobby 计划），数据通常存储在平台提供的临时文件系统中。<strong>这意味着数据可能会在一段时间后丢失</strong>。</li>
<li>为了保证数据持久化，你需要在部署时配置一个数据库，如 MongoDB Atlas、MySQL 或 PostgreSQL。具体配置方法请参考 Twikoo 官方文档。</li>
</ul>
</li>
<li>
<p><strong>安全与 moderation</strong>:</p>
<ul>
<li>Twikoo 提供了评论审核、垃圾评论过滤等功能。请登录你的 Twikoo 管理后台（通常是访问 <code v-pre>https://你的服务地址/admin</code>）进行相关设置。</li>
</ul>
</li>
</ul>
<h3 id="文章级评论控制" tabindex="-1"><a class="header-anchor" href="#文章级评论控制"><span><strong>文章级评论控制</strong></span></a></h3>
<p>除了全局配置外，你还可以在每篇文章的 frontmatter 中单独控制评论的显示：</p>
<h4 id="文章-frontmatter-中的-comment-字段" tabindex="-1"><a class="header-anchor" href="#文章-frontmatter-中的-comment-字段"><span><strong>文章 frontmatter 中的 <code v-pre>comment</code> 字段</strong></span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> My First Blog Post</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">published</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2023-09-09</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> This is the first post of my new Astro blog.</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Bar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Front-end</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">draft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">comment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 禁用当前文章的评论</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制单篇文章是否显示评论区。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>true</code> 或未设置: (默认) 继承全局评论设置。如果全局启用，则显示评论区。</li>
<li><code v-pre>false</code>: 强制禁用当前文章的评论区，即使全局评论已启用。</li>
</ul>
</li>
</ul>
<h4 id="评论组件显示逻辑" tabindex="-1"><a class="header-anchor" href="#评论组件显示逻辑"><span><strong>评论组件显示逻辑</strong></span></a></h4>
<p>评论组件的显示逻辑已修改为：</p>
<ol>
<li>首先检查全局评论配置 <code v-pre>commentConfig.enable</code> 是否为 <code v-pre>true</code></li>
<li>然后检查文章 frontmatter 中的 <code v-pre>comment</code> 字段是否为 <code v-pre>false</code></li>
<li>只有当全局启用且文章未显式禁用时，评论区才会显示</li>
</ol>
<p>通过以上步骤，你就可以成功地在你的博客中集成并使用 Twikoo 评论系统了。同时，你还可以通过文章级别的 <code v-pre>comment</code> 字段，灵活控制每篇文章的评论显示。</p>
</div></template>


