<template><div><p>这是在Mizuki博客系统中创建文章的推荐方法。这种方法更适合复杂的文章，特别是包含大量图片或其他资源的文章。<strong>特别适合那些希望在不依赖外部图床的情况下，优雅地管理和存储图片资源的用户。</strong></p>
<h2 id="创建文章" tabindex="-1"><a class="header-anchor" href="#创建文章"><span>创建文章</span></a></h2>
<ol>
<li>
<p>在<code v-pre>src/content/posts</code>目录下创建一个新的文件夹，文件夹名应该具有描述性，例如<code v-pre>my-complex-post</code>。</p>
</li>
<li>
<p>在新创建的文件夹中创建一个名为<code v-pre>index.md</code>的文件。</p>
</li>
<li>
<p>在<code v-pre>index.md</code>文件中添加frontmatter（前置元数据），这是文章的配置信息，必须包含<code v-pre>title</code>和<code v-pre>description</code>字段：</p>
</li>
</ol>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Markdown Tutorial</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">published</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pinned</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> A simple example of a Markdown blog post.</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Blogging</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Examples</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">licenseName</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Unlicensed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">author</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> emn178</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">sourceLink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/emn178/markdown</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">draft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./cover.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pubDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">encrypted-example</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontmatter字段详解" tabindex="-1"><a class="header-anchor" href="#frontmatter字段详解"><span>Frontmatter字段详解</span></a></h2>
<p>frontmatter支持的字段包括：</p>
<h3 id="必需字段" tabindex="-1"><a class="header-anchor" href="#必需字段"><span>必需字段</span></a></h3>
<ul>
<li><code v-pre>title</code>：文章标题（必需）</li>
<li><code v-pre>description</code>：文章描述（必需）</li>
</ul>
<h3 id="发布相关" tabindex="-1"><a class="header-anchor" href="#发布相关"><span>发布相关</span></a></h3>
<ul>
<li><code v-pre>published</code>：文章发布日期，格式为YYYY-MM-DD</li>
<li><code v-pre>pubDate</code>：文章发布日期（与published类似）</li>
<li><code v-pre>date</code>：文章创建日期</li>
<li><code v-pre>draft</code>：是否为草稿，true表示草稿，false表示正式发布</li>
<li><code v-pre>permalink</code>: 固定链接</li>
</ul>
<h3 id="内容分类" tabindex="-1"><a class="header-anchor" href="#内容分类"><span>内容分类</span></a></h3>
<ul>
<li><code v-pre>tags</code>：文章标签数组，用于标记文章主题</li>
<li><code v-pre>category</code>：文章分类，用于组织文章</li>
<li><code v-pre>pinned</code>：是否置顶文章，true表示置顶</li>
</ul>
<h3 id="作者信息" tabindex="-1"><a class="header-anchor" href="#作者信息"><span>作者信息</span></a></h3>
<ul>
<li><code v-pre>author</code>：文章作者姓名</li>
<li><code v-pre>licenseName</code>：文章许可证名称，如&quot;MIT&quot;、&quot;CC BY 4.0&quot;等</li>
<li><code v-pre>sourceLink</code>：文章源链接，通常指向GitHub仓库或原始来源</li>
</ul>
<h3 id="图片设置" tabindex="-1"><a class="header-anchor" href="#图片设置"><span>图片设置</span></a></h3>
<ul>
<li><code v-pre>image</code>：文章封面图片</li>
</ul>
<ol start="4">
<li>在frontmatter下方编写文章内容，可以使用标准的Markdown语法。</li>
</ol>
<h2 id="markdown学习资源" tabindex="-1"><a class="header-anchor" href="#markdown学习资源"><span>Markdown学习资源</span></a></h2>
<p>如果您还不熟悉Markdown语法，建议先学习基础知识：</p>
<p>📚 <strong>推荐学习地址</strong>：<a href="https://www.runoob.com/markdown/md-tutorial.html" target="_blank" rel="noopener noreferrer">菜鸟教程 - Markdown教程</a></p>
<p>这个教程涵盖了：</p>
<ul>
<li>Markdown基本语法</li>
<li>标题、段落、换行</li>
<li>字体样式（粗体、斜体等）</li>
<li>列表、链接、图片</li>
<li>代码块、表格</li>
<li>高级功能</li>
</ul>
<p>掌握这些基础语法后，您就可以轻松编写美观的博客文章了！</p>
<h2 id="frontmatter最佳实践" tabindex="-1"><a class="header-anchor" href="#frontmatter最佳实践"><span>Frontmatter最佳实践</span></a></h2>
<h3 id="日期格式" tabindex="-1"><a class="header-anchor" href="#日期格式"><span>日期格式</span></a></h3>
<p>建议使用ISO 8601格式（YYYY-MM-DD）来设置日期：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">published</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pubDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签和分类" tabindex="-1"><a class="header-anchor" href="#标签和分类"><span>标签和分类</span></a></h3>
<ul>
<li>标签应该具体且相关，避免过于宽泛</li>
<li>分类用于高级组织，通常比标签更宽泛</li>
<li>示例：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Vue.js</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> JavaScript</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Frontend</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Tutorial</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Web Development</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="草稿管理" tabindex="-1"><a class="header-anchor" href="#草稿管理"><span>草稿管理</span></a></h3>
<p>使用<code v-pre>draft</code>字段来管理文章状态：</p>
<ul>
<li><code v-pre>draft: true</code> - 文章不会在生产环境中显示</li>
<li><code v-pre>draft: false</code> - 文章正常发布</li>
</ul>
<h3 id="许可证设置" tabindex="-1"><a class="header-anchor" href="#许可证设置"><span>许可证设置</span></a></h3>
<p>常见的许可证名称：</p>
<ul>
<li>&quot;MIT&quot;</li>
<li>&quot;Apache-2.0&quot;</li>
<li>&quot;CC BY 4.0&quot;</li>
<li>&quot;CC BY-SA 4.0&quot;</li>
<li>&quot;Unlicensed&quot;</li>
</ul>
<h3 id="图片路径最佳实践" tabindex="-1"><a class="header-anchor" href="#图片路径最佳实践"><span>图片路径最佳实践</span></a></h3>
<p>在子文件夹方法中，推荐使用相对路径引用图片：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./cover.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例"><span>完整示例</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">React Hooks深度解析</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">published</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pinned</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">全面解析React Hooks的使用方法和最佳实践，包含大量代码示例和图片说明。</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">React</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> JavaScript</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Hooks</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Frontend</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Web Development</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">licenseName</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">MIT</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">author</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">李四</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">sourceLink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/lisi/react-hooks-guide</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">draft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./react-hooks-cover.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pubDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2025-01-20</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> React Hooks深度解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">React Hooks示例</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">./example-diagram.png</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">在这篇文章中，我们将深入探讨React Hooks...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预览文章" tabindex="-1"><a class="header-anchor" href="#预览文章"><span>预览文章</span></a></h2>
<p>保存文件后，可以在浏览器中预览文章。将文件夹名拼接到预览URL的末尾即可查看。
例如，如果本地开发服务器运行在<code v-pre>http://localhost:4321/</code>，文件夹名为<code v-pre>my-complex-post</code>，则可以通过<code v-pre>http://localhost:4321/posts/my-complex-post</code>访问文章。</p>
<p>如果文章尚未创建或文件夹名错误，页面将显示404错误。当你预览一个尚未创建的文章时，控制台会显示不同的输出，这有助于进行故障排查。</p>
<h2 id="链接到文章" tabindex="-1"><a class="header-anchor" href="#链接到文章"><span>链接到文章</span></a></h2>
<p>要在博客页面或其他页面中链接到你的文章，可以使用标准的HTML <code v-pre>&lt;a&gt;</code> 标签：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/posts/my-complex-post/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">我的复杂文章</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>确保链接的href属性指向正确的文章路径。</p>
<hr>
<h2 id="💡-小贴士-图片优化建议" tabindex="-1"><a class="header-anchor" href="#💡-小贴士-图片优化建议"><span>💡 小贴士：图片优化建议</span></a></h2>
<p>虽然使用文件夹方案可以自主管理图片，但仍建议对图片进行适当优化：</p>
<ol>
<li>
<p><strong>选择合适的格式</strong></p>
<ul>
<li>照片类图片：使用WebP或JPEG格式</li>
<li>图标类图片：使用PNG或SVG格式</li>
<li>动态图片：使用WebP或GIF格式</li>
</ul>
</li>
<li>
<p><strong>控制图片大小</strong></p>
<ul>
<li>照片：建议宽度不超过1200px</li>
<li>缩略图：宽度300-400px即可</li>
<li>大图考虑使用懒加载技术</li>
</ul>
</li>
<li>
<p><strong>批量处理工具</strong></p>
<ul>
<li>推荐使用ImageOptim、Squoosh等工具批量压缩</li>
<li>或使用命令行工具如sharp、imagemin自动化处理</li>
</ul>
</li>
<li>
<p><strong>目录结构建议</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>- my-complex-post</span></span>
<span class="line"><span>  - index.md</span></span>
<span class="line"><span>  - images/</span></span>
<span class="line"><span>    - cover.jpg      # 封面图</span></span>
<span class="line"><span>    - screenshot-1.webp  # 截图</span></span>
<span class="line"><span>    - diagram.svg     # 示意图</span></span>
<span class="line"><span>  - assets/</span></span>
<span class="line"><span>    - data.json       # 数据文件</span></span>
<span class="line"><span>    - download.zip    # 下载文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于图片较多的文章，可以创建子目录进一步组织资源。</p>
</li>
</ol>
<h2 id="管理图片和其他资源-无需图床方案" tabindex="-1"><a class="header-anchor" href="#管理图片和其他资源-无需图床方案"><span>管理图片和其他资源（无需图床方案）</span></a></h2>
<p><strong>这是使用Mizuki最优雅的图片管理方案，完全无需依赖外部图床服务！</strong></p>
<p>使用这种方法，你可以将文章相关的所有资源都放在同一个文件夹中，实现了真正的&quot;自托管&quot;图片存储：</p>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="src" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="content" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="posts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-docs" /></template><FileTreeNode expanded type="folder" filename="my-complex-post" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode type="file" filename="index.md" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="image1.png" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="image2.jpg" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="data.json" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-json" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<h3 id="优势对比" tabindex="-1"><a class="header-anchor" href="#优势对比"><span>优势对比</span></a></h3>
<table>
<thead>
<tr>
<th>方案</th>
<th>文件夹方案</th>
<th>图床方案</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>控制权</strong></td>
<td>完全自主控制</td>
<td>依赖第三方服务</td>
</tr>
<tr>
<td><strong>稳定性</strong></td>
<td>100%稳定</td>
<td>可能宕机或失效</td>
</tr>
<tr>
<td><strong>隐私性</strong></td>
<td>数据完全私有</td>
<td>部分服务会扫描图片</td>
</tr>
<tr>
<td><strong>加载速度</strong></td>
<td>与站点同源加载</td>
<td>跨域加载可能较慢</td>
</tr>
<tr>
<td><strong>成本</strong></td>
<td>无额外成本</td>
<td>可能有流量/存储费用</td>
</tr>
<tr>
<td><strong>维护</strong></td>
<td>与文章一同管理</td>
<td>需要单独维护</td>
</tr>
</tbody>
</table>
<h3 id="图片引用方式" tabindex="-1"><a class="header-anchor" href="#图片引用方式"><span>图片引用方式</span></a></h3>
<p>在文章中引用图片时，可以直接使用相对路径：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">图片描述</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">image1.png</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>重要提示：</strong> 像这样直接填写文件的名字，这样才能让RSS正常构建图片的路径，同时确保图片与文章一同打包部署。</p>
<h2 id="创建多篇文章" tabindex="-1"><a class="header-anchor" href="#创建多篇文章"><span>创建多篇文章</span></a></h2>
<p>你可以在<code v-pre>src/content/posts/</code>目录下创建多个文件夹，每个文件夹代表一篇文章。例如：</p>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="src" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="content" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="posts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-docs" /></template><FileTreeNode expanded type="folder" filename="my-first-post" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode type="file" filename="index.md" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="cover.jpg" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="my-second-post" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode type="file" filename="index.md" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="image1.png" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="image2.png" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="my-third-post" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode type="file" filename="index.md" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="data.json" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-json" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>每篇文章都有自己的独立文件夹，便于管理和维护。</p>
<h2 id="链接多篇文章" tabindex="-1"><a class="header-anchor" href="#链接多篇文章"><span>链接多篇文章</span></a></h2>
<p>要在博客页面中链接到多篇文章，可以创建一个文章列表：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ul</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/posts/my-first-post/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">我的第一篇文章</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/posts/my-second-post/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">我的第二篇文章</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/posts/my-third-post/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">我的第三篇文章</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ul</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确保每个链接都指向正确的文章路径。</p>
<h2 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h2>
<ul>
<li><strong>所有文章资源集中管理</strong>，便于维护</li>
<li><strong>完全自主的图片管理</strong>，无需依赖外部图床服务</li>
<li><strong>100%的控制权</strong>，不受第三方服务限制</li>
<li><strong>图片引用更简单</strong>，使用相对路径即可</li>
<li><strong>更好的组织结构</strong>，特别是对于包含大量资源的文章</li>
<li><strong>便于文章的迁移和备份</strong>，资源与内容一同迁移</li>
<li><strong>每篇文章都有独立的文件夹</strong>，避免资源混淆</li>
<li><strong>完全私有</strong>，不会受到图床服务的数据扫描</li>
<li><strong>性能更优</strong>，图片与站点同源加载，无跨域延迟</li>
<li><strong>长期稳定</strong>，不受图床服务变更或关闭的影响</li>
</ul>
<h3 id="特别适合以下场景" tabindex="-1"><a class="header-anchor" href="#特别适合以下场景"><span>特别适合以下场景</span></a></h3>
<ol>
<li><strong>技术博客</strong>：大量代码示例和截图</li>
<li><strong>教程文档</strong>：步骤说明图片多</li>
<li><strong>摄影作品集</strong>：高分辨率图片展示</li>
<li><strong>个人日记</strong>：私密图片不想上传到公共图床</li>
<li><strong>企业网站</strong>：需要完全控制内容资源</li>
<li><strong>离线环境</strong>：无法访问外部图床服务的场景</li>
</ol>
</div></template>


