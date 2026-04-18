<template><div><h3 id="时间线页面配置教程" tabindex="-1"><a class="header-anchor" href="#时间线页面配置教程"><span>时间线页面配置教程</span></a></h3>
<p>Mizuki 主题内置了一个专业的时间线（Timeline）页面，用于按时间顺序展示您的人生重要事件、工作经历、教育背景和项目成就等。这个页面可以帮助访客了解您的成长历程和专业发展。</p>
<p>本教程将详细指导你如何添加、修改和管理时间线数据。</p>
<hr>
<h4 id="_1-核心概念-页面与数据分离" tabindex="-1"><a class="header-anchor" href="#_1-核心概念-页面与数据分离"><span><strong>1. 核心概念：页面与数据分离</strong></span></a></h4>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="pages" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-view" /></template><FileTreeNode type="file" filename="timeline.astro" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="data" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-db" /></template><FileTreeNode type="file" filename="timeline.ts" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>在 Mizuki 主题中，时间线页面的<strong>展示逻辑</strong>和<strong>内容数据</strong>是分开的：</p>
<ul>
<li>
<p><strong>展示逻辑</strong>: <code v-pre>src/pages/timeline.astro</code></p>
<ul>
<li>这个文件负责时间线页面的HTML结构、CSS样式和JavaScript交互逻辑。</li>
<li>它定义了时间线如何按时间排序、分组和展示。</li>
<li><strong>通常情况下，你不需要修改这个文件。</strong></li>
</ul>
</li>
<li>
<p><strong>内容数据</strong>: <code v-pre>src/data/timeline.ts</code></p>
<ul>
<li>这个文件是时间线内容的&quot;数据库&quot;。所有的时间线事件都以数组的形式存储在这里。</li>
<li>每一个事件都是一个对象，包含 <code v-pre>id</code>, <code v-pre>title</code>, <code v-pre>description</code>, <code v-pre>type</code> 等属性。</li>
<li><strong>添加、修改或删除时间线事件，都在这个文件中操作。</strong></li>
</ul>
</li>
</ul>
<hr>
<h4 id="_2-src-data-timeline-ts-文件详解" tabindex="-1"><a class="header-anchor" href="#_2-src-data-timeline-ts-文件详解"><span><strong>2. <code v-pre>src/data/timeline.ts</code> 文件详解</strong></span></a></h4>
<p>打开 <code v-pre>src/data/timeline.ts</code>，你会看到类似下面的代码结构：</p>
<div class="code-block-title" data-title="timeline.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>timeline.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> TimelineItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">education</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">work</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">project</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">achievement</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	startDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	endDate</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	organization</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	position</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	skills</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	achievements</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	links</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">website</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">certificate</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">project</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">other</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	}[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	icon</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	featured</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">timelineData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">TimelineItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">current-study</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Studying Computer Science and Technology</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Currently studying Computer Science and Technology, focusing on web development and software engineering.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">education</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		startDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2022-09-01</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		location</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Beijing</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		organization</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Beijing Institute of Technology</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		skills</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Java</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Python</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">JavaScript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">HTML/CSS</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">MySQL</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		achievements</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">			"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Current GPA: 3.6/4.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">			"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Completed data structures and algorithms course project</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">material-symbols:school</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">#059669</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		featured</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><strong>数据结构说明</strong>:</p>
<ul>
<li>
<p><strong><code v-pre>interface TimelineItem</code></strong>: 这是一个TypeScript接口，它定义了每一个时间线事件必须包含的字段和它们的类型。</p>
<ul>
<li><code v-pre>id: string</code>: (必填) 事件的唯一标识符，通常是字符串格式的名称。</li>
<li><code v-pre>title: string</code>: (必填) 事件的标题。</li>
<li><code v-pre>description: string</code>: (必填) 事件的详细描述。</li>
<li><code v-pre>type: &quot;education&quot; | &quot;work&quot; | &quot;project&quot; | &quot;achievement&quot;</code>: (必填) 事件类型，用于分类和筛选。</li>
<li><code v-pre>startDate: string</code>: (必填) 事件开始日期，格式为 &quot;YYYY-MM-DD&quot;。</li>
<li><code v-pre>endDate?: string</code>: (可选) 事件结束日期，格式为 &quot;YYYY-MM-DD&quot;。对于进行中的事件，此字段可省略。</li>
<li><code v-pre>location?: string</code>: (可选) 事件发生的地点。</li>
<li><code v-pre>organization?: string</code>: (可选) 相关的组织或机构名称。</li>
<li><code v-pre>position?: string</code>: (可选) 职位或角色名称。</li>
<li><code v-pre>skills?: string[]</code>: (可选) 事件相关的技能列表。</li>
<li><code v-pre>achievements?: string[]</code>: (可选) 事件中的成就或成果列表。</li>
<li><code v-pre>links?: {...}[]</code>: (可选) 相关链接数组，每个链接包含名称、URL和类型。</li>
<li><code v-pre>icon?: string</code>: (可选) 事件的图标名称，使用Iconify图标集。</li>
<li><code v-pre>color?: string</code>: (可选) 事件的主题颜色，使用十六进制格式。</li>
<li><code v-pre>featured?: boolean</code>: (可选) 是否为特色事件，特色事件会优先展示。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>export const timelineData: TimelineItem[] = [...]</code></strong>: 这是实际的时间线数据数组。</p>
<ul>
<li>数组中的每一个对象都遵循上面 <code v-pre>TimelineItem</code> 接口的定义。</li>
<li>时间线在页面上的显示顺序通常按照日期排序。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_3-添加一个新时间线事件" tabindex="-1"><a class="header-anchor" href="#_3-添加一个新时间线事件"><span><strong>3. 添加一个新时间线事件</strong></span></a></h4>
<p>按照以下步骤添加一个新的时间线事件：</p>
<ol>
<li>
<p><strong>编辑 <code v-pre>timeline.ts</code> 文件</strong>:</p>
<ul>
<li>打开 <code v-pre>src/data/timeline.ts</code>。</li>
<li>在 <code v-pre>timelineData</code> 数组中，复制一个现有的时间线事件对象作为模板。</li>
<li>修改模板中的属性：
<ul>
<li><strong><code v-pre>id</code></strong>: 给一个新的、唯一的字符串ID，通常使用事件名称的小写和连字符形式。</li>
<li><strong><code v-pre>title</code></strong>: 输入事件的标题。</li>
<li><strong><code v-pre>description</code></strong>: 详细描述事件的内容和意义。</li>
<li><strong><code v-pre>type</code></strong>: 设置事件类型：&quot;education&quot;、&quot;work&quot;、&quot;project&quot;或&quot;achievement&quot;。</li>
<li><strong><code v-pre>startDate</code></strong>: 设置事件开始日期。</li>
<li><strong><code v-pre>endDate</code></strong>: (如果事件已结束) 设置事件结束日期。</li>
<li><strong><code v-pre>location</code></strong>: (如果有) 设置事件发生的地点。</li>
<li><strong><code v-pre>organization</code></strong>: (如果有) 设置相关的组织或机构名称。</li>
<li><strong><code v-pre>position</code></strong>: (如果有) 设置职位或角色名称。</li>
<li><strong><code v-pre>skills</code></strong>: (如果有) 添加事件相关的技能列表。</li>
<li><strong><code v-pre>achievements</code></strong>: (如果有) 添加事件中的成就或成果列表。</li>
<li><strong><code v-pre>links</code></strong>: (如果有) 添加相关链接。</li>
<li><strong><code v-pre>icon</code></strong>: (可选) 设置事件的图标。</li>
<li><strong><code v-pre>color</code></strong>: (可选) 设置事件的主题颜色。</li>
<li><strong><code v-pre>featured</code></strong>: (可选) 设置是否为特色事件。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>示例：添加一个工作经历事件</strong></p>
<p>假设我们要添加一个新的工作经历，内容如下：</p>
<ul>
<li>标题：&quot;前端开发实习生&quot;</li>
<li>描述：&quot;在一家互联网公司暑期实习，参与Web应用的前端开发&quot;</li>
<li>类型：工作经历</li>
<li>开始日期：2024-07-01</li>
<li>结束日期：2024-08-31</li>
<li>地点：北京</li>
<li>公司：TechStart互联网公司</li>
<li>职位：前端开发实习生</li>
<li>技能：React, JavaScript, CSS3, Git, Figma</li>
<li>成就：完成用户界面组件开发、学习团队协作和代码规范、获得优秀实习表现证书</li>
</ul>
<p>修改后的 <code v-pre>timelineData</code> 数组会是这样：</p>
<div class="code-block-title" data-title="timeline.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>timeline.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">timelineData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">TimelineItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">current-study</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Studying Computer Science and Technology</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // ... 其他字段 ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ... 其他事件 ...</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // --- 这是我们新添加的事件 ---</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">summer-internship-2024</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 新的ID</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">前端开发实习生</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">在一家互联网公司暑期实习，参与Web应用的前端开发</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 描述</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">work</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 事件类型</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    startDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2024-07-01</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 开始日期</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    endDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2024-08-31</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 结束日期</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    location</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">北京</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 地点</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    organization</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">TechStart互联网公司</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 公司</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">前端开发实习生</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 职位</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    skills</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">React</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">JavaScript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">CSS3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Git</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Figma</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 技能</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    achievements</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">      "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">完成用户界面组件开发</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">      "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">学习团队协作和代码规范</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">      "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">获得优秀实习表现证书</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    ], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 成就</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">material-symbols:work</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 图标</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">#DC2626</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 颜色</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    featured</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 特色事件</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></li>
</ol>
<hr>
<h4 id="_4-修改或删除时间线事件" tabindex="-1"><a class="header-anchor" href="#_4-修改或删除时间线事件"><span><strong>4. 修改或删除时间线事件</strong></span></a></h4>
<ul>
<li><strong>修改时间线事件</strong>: 直接在 <code v-pre>timelineData</code> 数组中找到对应的时间线事件对象，修改其属性即可。</li>
<li><strong>删除时间线事件</strong>: 找到对应的时间线事件对象，将其从数组中完全移除。注意不要留下多余的逗号，以免造成语法错误。</li>
</ul>
<hr>
<h4 id="_5-时间线事件类型" tabindex="-1"><a class="header-anchor" href="#_5-时间线事件类型"><span><strong>5. 时间线事件类型</strong></span></a></h4>
<p>时间线事件按照类型分为四类：</p>
<ul>
<li>
<p><strong>&quot;education&quot;</strong>: 教育经历</p>
<ul>
<li>学校教育、在线课程、培训等</li>
<li>常用字段：<code v-pre>organization</code>, <code v-pre>location</code>, <code v-pre>achievements</code></li>
</ul>
</li>
<li>
<p><strong>&quot;work&quot;</strong>: 工作经历</p>
<ul>
<li>全职工作、实习、兼职等</li>
<li>常用字段：<code v-pre>organization</code>, <code v-pre>location</code>, <code v-pre>position</code></li>
</ul>
</li>
<li>
<p><strong>&quot;project&quot;</strong>: 项目经历</p>
<ul>
<li>个人项目、团队项目、开源贡献等</li>
<li>常用字段：<code v-pre>skills</code>, <code v-pre>achievements</code>, <code v-pre>links</code></li>
</ul>
</li>
<li>
<p><strong>&quot;achievement&quot;</strong>: 成就与荣誉</p>
<ul>
<li>证书、奖项、比赛成果等</li>
<li>常用字段：<code v-pre>organization</code>, <code v-pre>location</code>, <code v-pre>links</code></li>
</ul>
</li>
</ul>
<hr>
<h4 id="_6-最佳实践与建议" tabindex="-1"><a class="header-anchor" href="#_6-最佳实践与建议"><span><strong>6. 最佳实践与建议</strong></span></a></h4>
<ul>
<li><strong>日期格式</strong>: 严格遵守 &quot;YYYY-MM-DD&quot; 格式，确保日期正确显示。</li>
<li><strong>ID管理</strong>: 使用有意义的ID，通常使用事件名称的小写和连字符形式。</li>
<li><strong>描述内容</strong>: 保持描述简洁但信息丰富，突出事件的重要性和影响。</li>
<li><strong>图标和颜色</strong>: 为不同类型的事件使用不同的图标和颜色，增强视觉区分度。</li>
<li><strong>链接管理</strong>: 对于项目经历，添加源代码和演示链接；对于证书，添加证书链接。</li>
<li><strong>特色事件</strong>: 标记最重要的事件为特色事件，它们会在时间线顶部优先展示。</li>
</ul>
<hr>
<h4 id="_7-页面功能与特性" tabindex="-1"><a class="header-anchor" href="#_7-页面功能与特性"><span><strong>7. 页面功能与特性</strong></span></a></h4>
<p>时间线页面提供以下功能：</p>
<ul>
<li><strong>事件筛选</strong>: 按类型（全部/教育经历/工作经历/项目经历/成就与荣誉）筛选事件</li>
<li><strong>时间排序</strong>: 按日期倒序或正序排列事件</li>
<li><strong>事件详情</strong>: 点击事件卡片查看详细信息和相关链接</li>
<li><strong>技能统计</strong>: 展示所有事件中提及的技能及其频率</li>
<li><strong>经历统计</strong>: 显示教育经历、工作经历等类型的数量统计</li>
<li><strong>时间线视图</strong>: 以时间线形式展示事件，直观显示时间跨度</li>
</ul>
<hr>
<h4 id="_8-导航栏配置" tabindex="-1"><a class="header-anchor" href="#_8-导航栏配置"><span><strong>8. 导航栏配置</strong></span></a></h4>
<p>要在导航栏中显示时间线链接，请确保在 <code v-pre>src/config.ts</code> 的 <code v-pre>navBarConfig</code> 中包含了时间线链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Timeline</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 时间线页面</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>或者手动添加时间线链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">人生时间线</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/timeline/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ri:timeline-line</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>
<p>通过以上步骤，你就可以轻松地管理你的时间线页面了。定期更新 <code v-pre>src/data/timeline.ts</code>，让访客了解你的成长历程和专业发展！</p>
</div></template>


