<template><div><h3 id="友链页面配置教程" tabindex="-1"><a class="header-anchor" href="#友链页面配置教程"><span>友链页面配置教程</span></a></h3>
<p>Mizuki 主题内置了一个美观的友情链接（Friends）页面，用于展示与您的博客相关的其他网站或朋友的博客链接。与传统博客文章不同，友情链接更侧重于快速访问和分类管理。</p>
<p>本教程将详细指导你如何添加、修改和管理友情链接数据。</p>
<hr>
<h4 id="_1-核心概念-页面与数据分离" tabindex="-1"><a class="header-anchor" href="#_1-核心概念-页面与数据分离"><span><strong>1. 核心概念：页面与数据分离</strong></span></a></h4>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="pages" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-view" /></template><FileTreeNode type="file" filename="friends.astro" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="data" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-db" /></template><FileTreeNode type="file" filename="friends.ts" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>在 Mizuki 主题中，友情链接页面的<strong>展示逻辑</strong>和<strong>内容数据</strong>是分开的：</p>
<ul>
<li>
<p><strong>展示逻辑</strong>: <code v-pre>src/pages/friends.astro</code></p>
<ul>
<li>这个文件负责友情链接页面的HTML结构、CSS样式和JavaScript交互逻辑。</li>
<li>它定义了友情链接如何在页面上排列、头像如何展示、标签如何分类等。</li>
<li><strong>通常情况下，你不需要修改这个文件。</strong></li>
</ul>
</li>
<li>
<p><strong>内容数据</strong>: <code v-pre>src/data/friends.ts</code></p>
<ul>
<li>这个文件是友情链接内容的&quot;数据库&quot;。所有的友情链接都以数组的形式存储在这里。</li>
<li>每一个友情链接都是一个对象，包含 <code v-pre>id</code>, <code v-pre>title</code>, <code v-pre>imgurl</code>, <code v-pre>desc</code>, <code v-pre>siteurl</code> 和 <code v-pre>tags</code> 等属性。</li>
<li><strong>添加、修改或删除友情链接，都在这个文件中操作。</strong></li>
</ul>
</li>
</ul>
<hr>
<h4 id="_2-src-data-friends-ts-文件详解" tabindex="-1"><a class="header-anchor" href="#_2-src-data-friends-ts-文件详解"><span><strong>2. <code v-pre>src/data/friends.ts</code> 文件详解</strong></span></a></h4>
<p>打开 <code v-pre>src/data/friends.ts</code>，你会看到类似下面的代码结构：</p>
<div class="code-block-title" data-title="src/data/friends.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/friends.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> FriendItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	imgurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	desc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	siteurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 友情链接数据</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">friendsData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">FriendItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Astro</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		imgurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://avatars.githubusercontent.com/u/44914786?v=4&#x26;s=640</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		desc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">The web framework for content-driven websites</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		siteurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/withastro/astro</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Framework</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><strong>数据结构说明</strong>:</p>
<ul>
<li>
<p><strong><code v-pre>interface FriendItem</code></strong>: 这是一个TypeScript接口，它定义了每一个友情链接必须包含的字段和它们的类型。</p>
<ul>
<li><code v-pre>id: number</code>: (必填) 友情链接的唯一标识符。<strong>必须是数字，且不能重复</strong>。通常按添加顺序递增。</li>
<li><code v-pre>title: string</code>: (必填) 网站或博客的名称。</li>
<li><code v-pre>imgurl: string</code>: (必填) 网站头像或Logo的URL地址。建议使用正方形图片，尺寸为640x640像素。</li>
<li><code v-pre>desc: string</code>: (必填) 网站的简短描述。</li>
<li><code v-pre>siteurl: string</code>: (必填) 网站的URL地址，需要包含协议（http://或https://）。</li>
<li><code v-pre>tags: string[]</code>: (必填) 标签数组，用于分类。至少包含一个标签。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>export const friendsData: FriendItem[] = [...]</code></strong>: 这是实际的友情链接数据数组。</p>
<ul>
<li>数组中的每一个对象都遵循上面 <code v-pre>FriendItem</code> 接口的定义。</li>
<li>友情链接在页面上的显示顺序<strong>通常是按照数组中的顺序</strong>，但可以使用随机排序函数使其随机展示。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_3-添加一个新的友情链接" tabindex="-1"><a class="header-anchor" href="#_3-添加一个新的友情链接"><span><strong>3. 添加一个新的友情链接</strong></span></a></h4>
<p>按照以下步骤添加一个新的友情链接：</p>
<ol>
<li>
<p><strong>准备头像图片</strong>:</p>
<ul>
<li>获取或制作一个网站头像图片，建议使用正方形图片，尺寸为640x640像素。</li>
<li>推荐使用GitHub头像、网站Logo或其他代表性图片。</li>
<li>确保图片URL可以正常访问。</li>
</ul>
</li>
<li>
<p><strong>编辑 <code v-pre>friends.ts</code> 文件</strong>:</p>
<ul>
<li>打开 <code v-pre>src/data/friends.ts</code>。</li>
<li>在 <code v-pre>friendsData</code> 数组中，复制一个现有的友情链接对象作为模板。</li>
<li>修改模板中的属性：
<ul>
<li><strong><code v-pre>id</code></strong>: 给一个新的、唯一的数字（例如，在最后一个友情链接的<code v-pre>id</code>基础上加1）。</li>
<li><strong><code v-pre>title</code></strong>: 输入网站或博客的名称。</li>
<li><strong><code v-pre>imgurl</code></strong>: 设置头像图片的URL。</li>
<li><strong><code v-pre>desc</code></strong>: 输入网站的简短描述，建议控制在50个字符以内。</li>
<li><strong><code v-pre>siteurl</code></strong>: 设置网站的URL地址，确保包含协议。</li>
<li><strong><code v-pre>tags</code></strong>: 添加适当的标签，至少一个。标签用于分类和筛选。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>示例：添加一个新的友情链接</strong></p>
<p>假设我们要在现有友情链接后添加一个新的，内容如下：</p>
<ul>
<li>名称：&quot;Vue.js&quot;</li>
<li>头像：Vue.js的Logo</li>
<li>描述：&quot;渐进式JavaScript框架&quot;</li>
<li>网址：&quot;https://vuejs.org&quot;</li>
<li>标签：[&quot;Framework&quot;, &quot;JavaScript&quot;]</li>
</ul>
<p>修改后的 <code v-pre>friendsData</code> 数组会是这样：</p>
<div class="code-block-title" data-title="src/data/friends.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/friends.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">friendsData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">FriendItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Astro</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    imgurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://avatars.githubusercontent.com/u/44914786?v=4&#x26;s=640</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    desc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">The web framework for content-driven websites</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    siteurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/withastro/astro</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Framework</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Mizuki Docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    imgurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&#x26;spec=640&#x26;img_type=jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    desc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Mizuki User Manual</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    siteurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://docs.mizuki.mysqil.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ... 其他友情链接 ...</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // --- 这是我们新添加的友情链接 ---</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">9</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 新的ID</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Vue.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 名称</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    imgurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://avatars.githubusercontent.com/u/6128107?v=4&#x26;s=640</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 头像URL</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    desc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">渐进式JavaScript框架</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 描述</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    siteurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://vuejs.org</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 网站URL</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Framework</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">JavaScript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 标签</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></li>
</ol>
<hr>
<h4 id="_4-修改或删除友情链接" tabindex="-1"><a class="header-anchor" href="#_4-修改或删除友情链接"><span><strong>4. 修改或删除友情链接</strong></span></a></h4>
<ul>
<li><strong>修改友情链接</strong>: 直接在 <code v-pre>friendsData</code> 数组中找到对应的友情链接对象，修改其 <code v-pre>title</code>, <code v-pre>imgurl</code>, <code v-pre>desc</code>, <code v-pre>siteurl</code> 或 <code v-pre>tags</code> 属性即可。</li>
<li><strong>删除友情链接</strong>: 找到对应的友情链接对象，将其从数组中完全移除。注意不要留下多余的逗号，以免造成语法错误。</li>
</ul>
<hr>
<h4 id="_5-高级功能-随机排序" tabindex="-1"><a class="header-anchor" href="#_5-高级功能-随机排序"><span><strong>5. 高级功能：随机排序</strong></span></a></h4>
<p>友情链接页面支持随机排序功能，确保所有链接都有平等的展示机会：</p>
<div class="code-block-title" data-title="src/data/friends.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/friends.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 获取随机排序的友情链接数据</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> getShuffledFriendsList</span><span style="--shiki-light:#999999;--shiki-dark:#666666">():</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> FriendItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">shuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">friendsData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	for</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> shuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> - </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ></span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">--</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">		const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">j</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">floor</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">random</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> + </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">shuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> shuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">j</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">shuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">j</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> shuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> shuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>你可以在页面组件中调用 <code v-pre>getShuffledFriendsList()</code> 函数来获取随机排序后的友情链接列表。</p>
<hr>
<h4 id="_6-最佳实践与建议" tabindex="-1"><a class="header-anchor" href="#_6-最佳实践与建议"><span><strong>6. 最佳实践与建议</strong></span></a></h4>
<ul>
<li><strong>头像图片</strong>: 建议使用正方形的高质量图片，尺寸为640x640像素。可以使用GitHub头像、网站Logo或其他代表性图片。</li>
<li><strong>描述长度</strong>: 保持描述简洁，建议控制在50个字符以内，避免过长的文本影响页面布局。</li>
<li><strong>标签管理</strong>: 使用一致的标签命名，便于分类和管理。建议使用英文标签，如&quot;Framework&quot;、&quot;Docs&quot;等。</li>
<li><strong>链接有效性</strong>: 定期检查友情链接的有效性，移除失效链接。</li>
<li><strong>ID管理</strong>: 保持 <code v-pre>id</code> 的连续性和唯一性，这有助于你管理友情链接，也便于未来可能的功能扩展（如按ID查询）。</li>
</ul>
<hr>
<h4 id="_7-页面特性与自定义" tabindex="-1"><a class="header-anchor" href="#_7-页面特性与自定义"><span><strong>7. 页面特性与自定义</strong></span></a></h4>
<p>友情链接页面具有以下特性：</p>
<ul>
<li>
<p><strong>响应式设计</strong>: 在不同设备上都能良好显示</p>
<ul>
<li>桌面端：2列网格布局</li>
<li>移动端：1列布局</li>
</ul>
</li>
<li>
<p><strong>标签显示</strong>: 每个友情链接可以显示相关标签，帮助访客了解网站类型</p>
</li>
<li>
<p><strong>悬停效果</strong>: 鼠标悬停时有过渡动画效果</p>
</li>
<li>
<p><strong>随机排序</strong>: 支持随机排序，确保公平展示</p>
</li>
</ul>
<p>如需自定义样式，可以修改对应的CSS类或使用主题提供的自定义样式选项。</p>
<hr>
<h4 id="_8-导航栏配置" tabindex="-1"><a class="header-anchor" href="#_8-导航栏配置"><span><strong>8. 导航栏配置</strong></span></a></h4>
<p>要在导航栏中显示友情链接，请确保在 <code v-pre>src/config.ts</code> 的 <code v-pre>navBarConfig</code> 中包含了友情链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Friends</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 友情链接</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>或者手动添加友情链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">友情链接</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/friends/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ri:links-line</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>
<h4 id="_9-友情链接申请" tabindex="-1"><a class="header-anchor" href="#_9-友情链接申请"><span><strong>9. 友情链接申请</strong></span></a></h4>
<p>如果你想让其他站长能够申请友情链接，可以考虑创建一个友情链接申请页面。这里是一个简单的建议：</p>
<ol>
<li>创建一个联系表单，收集申请者的网站信息</li>
<li>定期审核申请，将符合条件的网站添加到 <code v-pre>friendsData</code> 数组中</li>
<li>在友情链接页面上方说明申请规则和联系方式</li>
</ol>
<hr>
<p>通过以上步骤，你就可以轻松地管理你的友情链接页面了。定期更新 <code v-pre>src/data/friends.ts</code>，让你的博客与其他优质网站建立联系吧！</p>
</div></template>


