<template><div><p>Markdown 是一种轻量级标记语言，通过简单标记语法，让普通文本具备格式化效果，核心目标是「易读易写」—— 纯文本编写，无复杂标签，直接阅读也清晰易懂。</p>
<h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述"><span>一、概述</span></a></h2>
<h3 id="核心特性" tabindex="-1"><a class="header-anchor" href="#核心特性"><span>核心特性</span></a></h3>
<ul>
<li><strong>可读性优先</strong>：纯文本格式，无冗余标签，直接阅读也自然流畅</li>
<li><strong>语法简洁</strong>：基于标点符号设计，标记与语义高度一致（如 <code v-pre>*强调*</code> 直观易懂）</li>
<li><strong>兼容性强</strong>：衍生版本丰富（Markdown Extra、MultiMarkdown 等），支持扩展表格、脚注等功能，可转换为 HTML、LaTeX、Docbook 等格式</li>
<li><strong>灵感来源</strong>：源自纯文本电子邮件格式，兼顾写作效率与展示效果</li>
</ul>
<h3 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h3>
<ul>
<li>撰写博客（支持 WordPress 等主流平台）</li>
<li>编写项目说明文档（如 README.md）</li>
<li>快速生成演讲 PPT、Word 文档、LaTeX 论文</li>
<li>数据科学领域：支持动态可重复性研究文档</li>
</ul>
<h2 id="二、块元素" tabindex="-1"><a class="header-anchor" href="#二、块元素"><span>二、块元素</span></a></h2>
<h3 id="_1-段落和换行" tabindex="-1"><a class="header-anchor" href="#_1-段落和换行"><span>1. 段落和换行</span></a></h3>
<ul>
<li><strong>段落</strong>：由连续行组成，空行（含仅空格/tab的行）分隔不同段落，无需缩进</li>
<li><strong>强制换行</strong>：行尾加 2 个以上空格 + 回车，或用反斜线 <code v-pre>\</code> + 回车<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是第一段，行尾加两个空格  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">强制换行显示</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是第二段（与上一段空行分隔）</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是第三段\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">反斜线换行示例</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-标题" tabindex="-1"><a class="header-anchor" href="#_2-标题"><span>2. 标题</span></a></h3>
<p>支持两种语法，推荐使用 Atx 形式（更灵活）：</p>
<h4 id="atx-形式-推荐" tabindex="-1"><a class="header-anchor" href="#atx-形式-推荐"><span>Atx 形式（推荐）</span></a></h4>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> H1 一级标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> H2 二级标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> H3 三级标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> H4 四级标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">#####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> H5 五级标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">######</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> H6 六级标题</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setext-形式-仅支持-h1-h2" tabindex="-1"><a class="header-anchor" href="#setext-形式-仅支持-h1-h2"><span>Setext 形式（仅支持 H1-H2）</span></a></h4>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">H1 一级标题</span></span>
<span class="line"><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold">===</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">H2 二级标题</span></span>
<span class="line"><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-块引言" tabindex="-1"><a class="header-anchor" href="#_3-块引言"><span>3. 块引言</span></a></h3>
<ul>
<li>行首加 <code v-pre>&gt;</code> ，支持嵌套（多层 <code v-pre>&gt;</code>）和内部嵌套其他语法</li>
<li>可仅在段落第一行加 <code v-pre>&gt;</code>，后续行自动继承</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> 一级引言段落1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> 一级引言段落2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ></span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> 嵌套二级引言</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> 回到一级引言，支持嵌套列表：</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C"> 1.</span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> 引言内有序列表</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C"> 2.</span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> 列表项2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ></span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold"> ##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 引言内标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> `</span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9">引言内代码</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-列表" tabindex="-1"><a class="header-anchor" href="#_4-列表"><span>4. 列表</span></a></h3>
<h4 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表"><span>无序列表</span></a></h4>
<p>支持 <code v-pre>-</code>、<code v-pre>*</code>、<code v-pre>+</code> 作为标记（推荐 <code v-pre>-</code>），标记后需加空格</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 无序列表项1</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 无序列表项2</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 嵌套子项（缩进 3 空格或 1 tab）</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 嵌套子项</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 星号标记项（不推荐混合使用）</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 加号标记项（不推荐混合使用）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表"><span>有序列表</span></a></h4>
<p>数字 + 英文句点 + 空格，数字不影响最终排序（可统一用 <code v-pre>1.</code>）</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 有序列表项1</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 有序列表项2</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 嵌套子项（缩进）</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  2.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 嵌套子项</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">3.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 有序列表项3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表高级用法" tabindex="-1"><a class="header-anchor" href="#列表高级用法"><span>列表高级用法</span></a></h4>
<ul>
<li>列表项含多段落：子段落需缩进 3 空格</li>
<li>列表项间空行：自动为内容添加 <code v-pre>&lt;p&gt;</code> 标签（更美观）</li>
<li>避免误触发：行首数字+句点前加反斜线 <code v-pre>\</code>（如 <code v-pre>1986\. 年份说明</code>）</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 列表项1（含多段落）</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  子段落内容（缩进 3 空格）</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  子段落2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 列表项2（空行分隔，自动加&#x3C;p>标签）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-代码块" tabindex="-1"><a class="header-anchor" href="#_5-代码块"><span>5. 代码块</span></a></h3>
<h4 id="基础用法-缩进式" tabindex="-1"><a class="header-anchor" href="#基础用法-缩进式"><span>基础用法（缩进式）</span></a></h4>
<p>行首缩进 4 空格或 1 tab，适用于短代码块</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">普通段落：</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    const a = 1; // 缩进 4 空格的代码块</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    console.log(a);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进阶用法-围栏式-推荐" tabindex="-1"><a class="header-anchor" href="#进阶用法-围栏式-推荐"><span>进阶用法（围栏式，推荐）</span></a></h4>
<p>用 ``` 或 ````` 包裹，支持指定语言高亮（推荐）</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">js</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 指定 JavaScript 语法高亮</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> demo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">代码块</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 嵌套代码块（外层用更多反引号）</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-md"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">html</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">嵌套代码块示例</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span></span></span>
<span class="line"><span>### 6. 分隔线</span></span>
<span class="line"><span>一行内用 3 个以上 `*`、`-`、`_`，行内无其他内容</span></span>
<span class="line"><span>```markdown</span></span>
<span class="line"><span>内容1</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>内容2</span></span>
<span class="line"><span>***</span></span>
<span class="line"><span>内容3</span></span>
<span class="line"><span>___</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、行内元素" tabindex="-1"><a class="header-anchor" href="#三、行内元素"><span>三、行内元素</span></a></h2>
<h3 id="_1-链接" tabindex="-1"><a class="header-anchor" href="#_1-链接"><span>1. 链接</span></a></h3>
<h4 id="行内链接-推荐-直观" tabindex="-1"><a class="header-anchor" href="#行内链接-推荐-直观"><span>行内链接（推荐，直观）</span></a></h4>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">链接文本</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">https://example.com</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> "可选标题，hover显示"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">相对路径链接</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">/about/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> "内部页面"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">无标题链接</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">https://example.com</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参考式链接-适合多次引用同一链接" tabindex="-1"><a class="header-anchor" href="#参考式链接-适合多次引用同一链接"><span>参考式链接（适合多次引用同一链接）</span></a></h4>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">// 正文引用</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">示例链接</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">id1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">，这是</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">重复引用链接</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">id1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">// 链接定义（可放文末）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">id1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]:</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline"> https://example.com</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> "可选标题"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">google</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]:</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline"> https://google.com/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> "Google"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">// 简化写法（链接文本=标识ID）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Google</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">google</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]:</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline"> https://google.com/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-强调" tabindex="-1"><a class="header-anchor" href="#_2-强调"><span>2. 强调</span></a></h3>
<ul>
<li>单 <code v-pre>*</code> 或 <code v-pre>_</code>：斜体（<code v-pre>&lt;em&gt;</code>）</li>
<li>双 <code v-pre>*</code> 或 <code v-pre>_</code>：粗体（<code v-pre>&lt;strong&gt;</code>）</li>
<li>符号需成对使用，不可混合</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">*</span><span style="--shiki-light:#393A34;--shiki-light-font-style:italic;--shiki-dark:#DBD7CAEE;--shiki-dark-font-style:italic">斜体文本</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">（推荐）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">_</span><span style="--shiki-light:#393A34;--shiki-light-font-style:italic;--shiki-dark:#DBD7CAEE;--shiki-dark-font-style:italic">斜体文本</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">_</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold">粗体文本</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">（推荐）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">__</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold">粗体文本</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">__</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">*</span><span style="--shiki-light:#393A34;--shiki-light-font-style:italic;--shiki-dark:#DBD7CAEE;--shiki-dark-font-style:italic">粗斜体文本</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">*</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-行内代码" tabindex="-1"><a class="header-anchor" href="#_3-行内代码"><span>3. 行内代码</span></a></h3>
<p>用反引号 <code v-pre>`</code> 包裹，含反引号时用多组反引号</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">行内代码：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">console.log("hello")</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">含反引号的代码：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">``</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> `code` 中的反引号 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">``</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">HTML 标签示例：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;div class="demo"></span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-图片" tabindex="-1"><a class="header-anchor" href="#_4-图片"><span>4. 图片</span></a></h3>
<p>语法与链接类似，前缀加 <code v-pre>!</code>，无宽高控制语法（需宽高时用 <code v-pre>&lt;img&gt;</code> 标签）</p>
<h4 id="行内图片" tabindex="-1"><a class="header-anchor" href="#行内图片"><span>行内图片</span></a></h4>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">替代文本（图片加载失败显示）</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">/path/to/img.webp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> "可选标题"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">网络图片</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">https://example.com/img.jpg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参考式图片" tabindex="-1"><a class="header-anchor" href="#参考式图片"><span>参考式图片</span></a></h4>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">替代文本</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">imgId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">imgId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]:</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline"> /path/to/img.webp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> "可选标题"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义宽高-html-标签" tabindex="-1"><a class="header-anchor" href="#自定义宽高-html-标签"><span>自定义宽高（HTML 标签）</span></a></h4>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">img</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/path/to/img.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> alt</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">替代文本</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">300</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">200</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-其他行内样式" tabindex="-1"><a class="header-anchor" href="#_5-其他行内样式"><span>5. 其他行内样式</span></a></h3>
<table>
<thead>
<tr>
<th>效果</th>
<th>Markdown 语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>删除线</td>
<td><code v-pre>~~删除文本~~</code></td>
<td>双波浪线包裹</td>
</tr>
<tr>
<td>换行</td>
<td>行尾加 2 空格 + 回车</td>
<td>强制换行</td>
</tr>
<tr>
<td>表情符号</td>
<td><code v-pre>:emoji名称:</code></td>
<td>例：<code v-pre>:smile:</code> → 😄</td>
</tr>
</tbody>
</table>
<h2 id="四、扩展功能" tabindex="-1"><a class="header-anchor" href="#四、扩展功能"><span>四、扩展功能</span></a></h2>
<h3 id="_1-表格" tabindex="-1"><a class="header-anchor" href="#_1-表格"><span>1. 表格</span></a></h3>
<ul>
<li>表头与内容用 <code v-pre>-</code> 分隔，<code v-pre>:</code> 控制对齐（无 <code v-pre>:</code> 则默认左对齐）</li>
<li><code v-pre>-</code> 数量至少 1 个，可灵活调整</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 左对齐 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 居中对齐 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 右对齐 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> :-----</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> :------:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -----:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 内容1  </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 内容2    </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 内容3  </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 长文本内容 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 居中示例 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 数值100 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-自动链接" tabindex="-1"><a class="header-anchor" href="#_2-自动链接"><span>2. 自动链接</span></a></h3>
<p>无需标记文本，直接用 <code v-pre>&lt;&gt;</code> 包裹网址或邮箱</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">https://example.com</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">contact@example.com</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-转义字符" tabindex="-1"><a class="header-anchor" href="#_3-转义字符"><span>3. 转义字符</span></a></h3>
<p>用反斜线 <code v-pre>\</code> 转义 Markdown 特殊符号，支持转义的符号：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">\   反斜线</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">`   反引号</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   星号</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">_   底线</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{}  大括号</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[]  方括号</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">()  括号</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold">   井字号</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   加号</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   减号</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.   英文句点</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">!   惊叹号</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：<code v-pre>\*这不是斜体\*</code> → <em>这不是斜体</em></p>
<h3 id="_4-行内-html" tabindex="-1"><a class="header-anchor" href="#_4-行内-html"><span>4. 行内 HTML</span></a></h3>
<p>支持直接插入 HTML 标签，块级标签需前后空行，且不缩进</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">普通段落</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;div style="color: red;">HTML 块级标签，前后空行&#x3C;/div></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;span style="color: blue;">行内 HTML 标签&#x3C;/span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：HTML 块内不解析 Markdown 语法</p>
</blockquote>
<h3 id="_5-快捷键" tabindex="-1"><a class="header-anchor" href="#_5-快捷键"><span>5. 快捷键</span></a></h3>
<table>
<thead>
<tr>
<th>效果</th>
<th>Markdown 语法</th>
<th>快捷键（Windows/Linux）</th>
<th>快捷键（Mac）</th>
</tr>
</thead>
<tbody>
<tr>
<td>粗体</td>
<td><code v-pre>**文本**</code></td>
<td>Ctrl + B</td>
<td>⌘ + B</td>
</tr>
<tr>
<td>斜体</td>
<td><code v-pre>*文本*</code></td>
<td>Ctrl + I</td>
<td>⌘ + I</td>
</tr>
<tr>
<td>行内代码</td>
<td><code v-pre>`代码`</code></td>
<td>选中内容 + `</td>
<td>选中内容 + `</td>
</tr>
<tr>
<td>链接</td>
<td><code v-pre>[文本](链接)</code></td>
<td>Ctrl + K</td>
<td>⌘ + K</td>
</tr>
<tr>
<td>图片</td>
<td><code v-pre>![文本](路径)</code></td>
<td>Ctrl + Shift + I</td>
<td>⌘ + Shift + I</td>
</tr>
</tbody>
</table>
<h2 id="五、注意事项" tabindex="-1"><a class="header-anchor" href="#五、注意事项"><span>五、注意事项</span></a></h2>
<ol>
<li>语法兼容性：不同平台（GitHub、掘金等）对扩展语法（如表格、脚注）支持有差异，需按需调整</li>
<li>图片路径：遵循前端资源路径规则（<code v-pre>/</code> 开头对应 public 目录，无 <code v-pre>/</code> 对应相对目录）</li>
<li>性能优化：图片推荐用 WebP 格式，文档中避免冗余标记，保持可读性</li>
</ol>
</div></template>


