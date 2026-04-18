<template><div><h3 id="日记页面配置教程" tabindex="-1"><a class="header-anchor" href="#日记页面配置教程"><span>日记页面配置教程</span></a></h3>
<p>Mizuki 主题内置了一个优雅的日记（Diary）页面，用于分享你的日常点滴、心情感悟或生活瞬间。与传统博客文章不同，日记更侧重于简短、即时的记录，通常会搭配图片。</p>
<p>本教程将详细指导你如何添加、修改和管理日记内容。</p>
<hr>
<h4 id="_1-核心概念-页面与数据分离" tabindex="-1"><a class="header-anchor" href="#_1-核心概念-页面与数据分离"><span><strong>1. 核心概念：页面与数据分离</strong></span></a></h4>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="pages" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-view" /></template><FileTreeNode type="file" filename="diary.astro" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="data" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-db" /></template><FileTreeNode type="file" filename="diary.ts" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>在 Mizuki 主题中，日记页面的<strong>展示逻辑</strong>和<strong>内容数据</strong>是分开的：</p>
<ul>
<li>
<p><strong>展示逻辑</strong>: <code v-pre>src/pages/diary.astro</code></p>
<ul>
<li>这个文件负责日记页面的HTML结构、CSS样式和JavaScript交互逻辑。</li>
<li>它定义了日记条目如何在页面上排列、图片如何展示、日期如何格式化等。</li>
<li><strong>通常情况下，你不需要修改这个文件。</strong></li>
</ul>
</li>
<li>
<p><strong>内容数据</strong>: <code v-pre>src/data/diary.ts</code></p>
<ul>
<li>这个文件是日记内容的&quot;数据库&quot;。所有的日记条目都以数组的形式存储在这里。</li>
<li>每一篇日记都是一个对象，包含 <code v-pre>id</code>, <code v-pre>content</code>, <code v-pre>date</code> 和 <code v-pre>images</code> 等属性。</li>
<li><strong>添加、修改或删除日记，都在这个文件中操作。</strong></li>
</ul>
</li>
</ul>
<hr>
<h4 id="_2-src-data-diary-ts-文件详解" tabindex="-1"><a class="header-anchor" href="#_2-src-data-diary-ts-文件详解"><span><strong>2. <code v-pre>src/data/diary.ts</code> 文件详解</strong></span></a></h4>
<p>打开 <code v-pre>src/data/diary.ts</code>，你会看到类似下面的代码结构：</p>
<div class="code-block-title" data-title="src/data/diary.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/diary.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> DiaryItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	images</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	mood</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	tags</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 示例日记数据</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">diaryData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">DiaryItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">			"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">The falling speed of cherry blossoms is five centimeters per second!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2025-01-15T10:30:00Z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		images</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/diary/sakura.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/diary/1.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><strong>数据结构说明</strong>:</p>
<ul>
<li>
<p><strong><code v-pre>interface DiaryItem</code></strong>: 这是一个TypeScript接口，它定义了每一篇日记必须包含的字段和它们的类型。</p>
<ul>
<li><code v-pre>id: number</code>: (必填) 日记的唯一标识符。<strong>必须是数字，且不能重复</strong>。通常按时间顺序递增。</li>
<li><code v-pre>content: string</code>: (必填) 日记的正文内容。可以是纯文本，也可以包含换行符 (<code v-pre> </code>)。</li>
<li><code v-pre>date: string</code>: (必填) 日记的发布日期和时间。<strong>必须是ISO 8601格式</strong>的字符串，例如 <code v-pre>2025-01-15T10:30:00Z</code>。<code v-pre>Z</code> 表示UTC时间，主题会自动将其转换为本地时间显示。</li>
<li><code v-pre>images?: string[]</code>: (可选) 日记附带的图片路径数组。<code v-pre>?</code> 表示这个字段是可选的。如果一篇日记没有图片，可以省略这个属性。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>export const diaryData: DiaryItem[] = [...]</code></strong>: 这是实际的日记数据数组。</p>
<ul>
<li>数组中的每一个对象都遵循上面 <code v-pre>DiaryItem</code> 接口的定义。</li>
<li>日记在页面上的显示顺序<strong>通常是按照数组中的顺序</strong>，从上到下排列。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_3-添加一篇新日记" tabindex="-1"><a class="header-anchor" href="#_3-添加一篇新日记"><span><strong>3. 添加一篇新日记</strong></span></a></h4>
<p>按照以下步骤添加一篇新的日记：</p>
<ol>
<li>
<p><strong>准备图片（如果需要）</strong>:</p>
<ul>
<li>将你想要展示的图片文件（如 <code v-pre>my-new-photo.webp</code>）复制到项目的 <code v-pre>public</code> 目录下。建议创建一个专门的文件夹，例如 <code v-pre>public/images/diary/</code>。</li>
<li><strong>注意</strong>: 路径是从 <code v-pre>public</code> 文件夹开始计算的。如果图片放在 <code v-pre>public/images/diary/</code> 下，那么它的路径就是 <code v-pre>/images/diary/my-new-photo.webp</code>。</li>
</ul>
</li>
<li>
<p><strong>编辑 <code v-pre>diary.ts</code> 文件</strong>:</p>
<ul>
<li>打开 <code v-pre>src/data/diary.ts</code>。</li>
<li>在 <code v-pre>diaryData</code> 数组中，复制一个现有的日记对象作为模板。</li>
<li>修改模板中的属性：
<ul>
<li><strong><code v-pre>id</code></strong>: 给一个新的、唯一的数字（例如，在最后一篇日记的<code v-pre>id</code>基础上加1）。</li>
<li><strong><code v-pre>content</code></strong>: 输入你的日记内容。如果需要换行，可以使用 <code v-pre> </code>。</li>
<li><strong><code v-pre>date</code></strong>: 设置日记的日期和时间。你可以在网上搜索&quot;ISO 8601 时间生成器&quot;来获取正确格式的字符串。</li>
<li><strong><code v-pre>images</code></strong>: (如果有图片) 添加图片的路径数组。如果没有图片，可以直接删除 <code v-pre>images</code> 这一行。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>示例：添加一篇新日记</strong></p>
<p>假设我们要在现有两篇日记后添加一篇新的，内容如下：</p>
<ul>
<li>内容：&quot;今天尝试了新的咖啡配方，味道很棒！&quot;</li>
<li>日期：2025年1月20日下午3点</li>
<li>图片：<code v-pre>coffee.jpg</code> (已放入 <code v-pre>public/images/diary/</code> 目录)</li>
</ul>
<p>修改后的 <code v-pre>diaryData</code> 数组会是这样：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">diaryData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">DiaryItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">The falling speed of cherry blossoms is five centimeters per second!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2025-01-15T10:30:00Z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    images</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/diary/sakura.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/diary/1.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">今日は晴れで、公園でピクニックをしました。とても楽しかったです！</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2025-01-10T14:00:00Z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // --- 这是我们新添加的日记 ---</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 新的ID</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">今天尝试了新的咖啡配方，味道很棒！绵密的奶泡是关键。</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 内容，使用换行</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    date</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2025-01-20T15:00:00Z</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 新的日期</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    images</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/diary/coffee.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 新的图片路径</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h4 id="_4-修改或删除日记" tabindex="-1"><a class="header-anchor" href="#_4-修改或删除日记"><span><strong>4. 修改或删除日记</strong></span></a></h4>
<ul>
<li><strong>修改日记</strong>: 直接在 <code v-pre>diaryData</code> 数组中找到对应的日记对象，修改其 <code v-pre>content</code>, <code v-pre>date</code> 或 <code v-pre>images</code> 属性即可。</li>
<li><strong>删除日记</strong>: 找到对应的日记对象，将其从数组中完全移除。注意不要留下多余的逗号，以免造成语法错误。</li>
</ul>
<hr>
<h4 id="_5-最佳实践与建议" tabindex="-1"><a class="header-anchor" href="#_5-最佳实践与建议"><span><strong>5. 最佳实践与建议</strong></span></a></h4>
<ul>
<li><strong>图片优化</strong>: 建议使用现代的图片格式如 <code v-pre>.webp</code>，并在上传前进行压缩，以保证页面加载速度。</li>
<li><strong>日期格式</strong>: 严格遵守 ISO 8601 格式 (<code v-pre>YYYY-MM-DDTHH:mm:ssZ</code>)，否则日期可能无法正确显示。</li>
<li><strong>ID管理</strong>: 保持 <code v-pre>id</code> 的连续性和唯一性，这有助于你管理日记，也便于未来可能的功能扩展（如按ID查询）。</li>
<li><strong>内容排版</strong>: 在 <code v-pre>content</code> 中适当使用 <code v-pre> </code> 进行换行，可以让你的日记在页面上显示得更美观、易读。</li>
</ul>
<p>通过以上步骤，你就可以轻松地管理你的日记页面了。定期更新 <code v-pre>src/data/diary.ts</code>，让你的博客充满生活气息吧！</p>
</div></template>


