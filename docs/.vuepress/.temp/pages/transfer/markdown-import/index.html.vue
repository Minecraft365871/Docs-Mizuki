<template><div><p>本指南将帮助您将现有的 Markdown 文件导入到 Mizuki 主题。</p>
<h2 id="什么是-mizuki" tabindex="-1"><a class="header-anchor" href="#什么是-mizuki"><span>什么是 Mizuki？</span></a></h2>
<p>Mizuki 是一个基于 Astro 开发的现代化博客主题，具有以下特点：</p>
<ul>
<li>快速的静态站点生成</li>
<li>现代化的设计风格</li>
<li>优秀的 SEO 支持</li>
<li>响应式布局</li>
<li>支持多种内容格式</li>
</ul>
<h2 id="markdown-文件与-mizuki-文章格式差异" tabindex="-1"><a class="header-anchor" href="#markdown-文件与-mizuki-文章格式差异"><span>Markdown 文件与 Mizuki 文章格式差异</span></a></h2>
<p>Mizuki 文章的核心是 Markdown 文件，但需要包含特定的 Frontmatter（YAML 头部信息）来定义文章的元数据。</p>
<h3 id="纯-markdown-文件示例" tabindex="-1"><a class="header-anchor" href="#纯-markdown-文件示例"><span>纯 Markdown 文件示例：</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 我的第一篇文章</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是一篇纯 Markdown 格式的文章内容。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 小标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">更多内容...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mizuki-格式示例" tabindex="-1"><a class="header-anchor" href="#mizuki-格式示例"><span>Mizuki 格式示例：</span></a></h3>
<!-- ```markdown
---
title: Markdown Tutorial
published: 2025-01-20
pinned: true
description: A simple example of a Markdown blog post.
tags: [Markdown, Blogging]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---
``` -->
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">我的第一篇文章</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pubDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2024-01-15</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">updatedDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2024-01-16</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">这是文章描述</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">技术</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">教程</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">技术分享</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/cover.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">draft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 我的第一篇文章</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是一篇纯 Markdown 格式的文章内容。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 小标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">更多内容...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入步骤" tabindex="-1"><a class="header-anchor" href="#导入步骤"><span>导入步骤</span></a></h2>
<h3 id="_1-准备工作" tabindex="-1"><a class="header-anchor" href="#_1-准备工作"><span>1. 准备工作</span></a></h3>
<ol>
<li>确保已安装 Mizuki 主题</li>
<li>准备文章存放目录：<code v-pre>src/content/posts/</code></li>
</ol>
<h3 id="_2-复制-markdown-文件" tabindex="-1"><a class="header-anchor" href="#_2-复制-markdown-文件"><span>2. 复制 Markdown 文件</span></a></h3>
<p>将您的 Markdown 文件复制到 Mizuki 的文章目录 <code v-pre>src/content/posts/</code>。</p>
<h3 id="_3-添加-frontmatter" tabindex="-1"><a class="header-anchor" href="#_3-添加-frontmatter"><span>3. 添加 Frontmatter</span></a></h3>
<p>对于每个 Markdown 文件，您需要手动或通过脚本添加 Mizuki 所需的 Frontmatter。这是导入过程中最关键的一步。</p>
<h4 id="必需字段" tabindex="-1"><a class="header-anchor" href="#必需字段"><span>必需字段：</span></a></h4>
<ul>
<li><code v-pre>title</code>: 文章标题</li>
<li><code v-pre>pubDate</code>: 发布日期 (格式: <code v-pre>YYYY-MM-DD</code>)</li>
</ul>
<h4 id="推荐字段" tabindex="-1"><a class="header-anchor" href="#推荐字段"><span>推荐字段：</span></a></h4>
<ul>
<li><code v-pre>updatedDate</code>: 更新日期 (格式: <code v-pre>YYYY-MM-DD</code>)</li>
<li><code v-pre>description</code>: 文章描述或摘要</li>
<li><code v-pre>tags</code>: 标签列表 (格式: <code v-pre>[&quot;标签1&quot;, &quot;标签2&quot;]</code>)</li>
<li><code v-pre>category</code>: 分类 (格式: <code v-pre>&quot;分类名称&quot;</code>)</li>
<li><code v-pre>cover</code>: 文章封面图片路径 (格式: <code v-pre>&quot;/images/cover.jpg&quot;</code>)</li>
<li><code v-pre>draft</code>: 是否为草稿 (格式: <code v-pre>true</code> 或 <code v-pre>false</code>)</li>
</ul>
<h4 id="示例-frontmatter" tabindex="-1"><a class="header-anchor" href="#示例-frontmatter"><span>示例 Frontmatter：</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">您的文章标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pubDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2024-01-01</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">updatedDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2024-01-01</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">您的文章描述或摘要</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">标签A</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">标签B</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">分类C</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/your-cover-image.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">draft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-静态资源处理" tabindex="-1"><a class="header-anchor" href="#_4-静态资源处理"><span>4. 静态资源处理</span></a></h3>
<p>如果您的 Markdown 文件中包含图片或其他媒体文件，您需要手动处理这些资源。</p>
<ol>
<li>
<p><strong>复制资源文件</strong>：将图片、视频等媒体文件复制到 Mizuki 的 <code v-pre>public/</code> 目录下，通常建议放在 <code v-pre>public/images/</code> 或 <code v-pre>public/assets/</code>。</p>
</li>
<li>
<p><strong>更新文件路径</strong>：确保 Markdown 文件中的图片链接指向 Mizuki 项目中的正确路径。</p>
<ul>
<li>示例：<code v-pre>![图片描述](/images/your-image.jpg)</code></li>
</ul>
</li>
</ol>
<h3 id="_5-更新内部链接" tabindex="-1"><a class="header-anchor" href="#_5-更新内部链接"><span>5. 更新内部链接</span></a></h3>
<p>如果您的 Markdown 文件中包含指向其他文章或页面的内部链接，请确保这些链接在 Mizuki 中仍然有效。</p>
<ul>
<li>Mizuki 的文章链接通常是 <code v-pre>/posts/your-post-slug/</code>。</li>
</ul>
<h3 id="_6-验证导入结果" tabindex="-1"><a class="header-anchor" href="#_6-验证导入结果"><span>6. 验证导入结果</span></a></h3>
<p>导入完成后，请检查以下项目：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 文章标题、日期、标签正确显示</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 文章内容完整且格式正确</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 图片和媒体文件正常显示</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 内部链接可以正常访问</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 文章分类和标签正确显示</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 文章摘要正常显示</label></li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="q-如何批量添加-frontmatter" tabindex="-1"><a class="header-anchor" href="#q-如何批量添加-frontmatter"><span>Q: 如何批量添加 Frontmatter？</span></a></h3>
<p>A: 对于大量文件，可以编写简单的脚本（如 Python 脚本）来读取 Markdown 文件内容，然后在其顶部插入 Frontmatter。脚本需要根据文件名或内容自动生成 <code v-pre>title</code> 和 <code v-pre>pubDate</code>，其他字段可能需要手动补充。</p>
<h3 id="q-图片路径如何批量替换" tabindex="-1"><a class="header-anchor" href="#q-图片路径如何批量替换"><span>Q: 图片路径如何批量替换？</span></a></h3>
<p>A: 可以使用文本编辑器的查找替换功能，或命令行工具（如 <code v-pre>sed</code>）来批量替换 Markdown 文件中的图片路径。</p>
<h3 id="q-导入后文章没有显示" tabindex="-1"><a class="header-anchor" href="#q-导入后文章没有显示"><span>Q: 导入后文章没有显示？</span></a></h3>
<p>A: 检查以下几点：</p>
<ul>
<li>文件是否放在 <code v-pre>src/content/posts/</code> 目录下。</li>
<li>Frontmatter 是否正确，特别是 <code v-pre>title</code> 和 <code v-pre>pubDate</code> 字段。</li>
<li><code v-pre>draft: true</code> 的文章不会在生产环境中显示，请确保设置为 <code v-pre>draft: false</code>。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>将纯 Markdown 文件导入 Mizuki 相对简单，主要工作集中在为每个文件添加正确的 Frontmatter 和处理静态资源路径。通过细致的检查和必要的批量处理工具，您可以高效地完成导入工作。</p>
</div></template>


