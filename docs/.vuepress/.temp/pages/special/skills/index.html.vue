<template><div><h3 id="技能页面配置教程" tabindex="-1"><a class="header-anchor" href="#技能页面配置教程"><span>技能页面配置教程</span></a></h3>
<p>Mizuki 主题内置了一个专业的技能展示（Skills）页面，用于展示您掌握的技术栈、工具和专业能力。这个页面可以帮助访客了解您的技术专长和专业水平。</p>
<p>本教程将详细指导你如何添加、修改和管理技能数据。</p>
<hr>
<h4 id="_1-核心概念-页面与数据分离" tabindex="-1"><a class="header-anchor" href="#_1-核心概念-页面与数据分离"><span><strong>1. 核心概念：页面与数据分离</strong></span></a></h4>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="pages" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-view" /></template><FileTreeNode type="file" filename="skills.astro" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="data" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-db" /></template><FileTreeNode type="file" filename="skills.ts" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>在 Mizuki 主题中，技能页面的<strong>展示逻辑</strong>和<strong>内容数据</strong>是分开的：</p>
<ul>
<li>
<p><strong>展示逻辑</strong>: <code v-pre>src/pages/skills.astro</code></p>
<ul>
<li>这个文件负责技能页面的HTML结构、CSS样式和JavaScript交互逻辑。</li>
<li>它定义了技能如何分类、排序和展示。</li>
<li><strong>通常情况下，你不需要修改这个文件。</strong></li>
</ul>
</li>
<li>
<p><strong>内容数据</strong>: <code v-pre>src/data/skills.ts</code></p>
<ul>
<li>这个文件是技能内容的&quot;数据库&quot;。所有的技能数据都以数组的形式存储在这里。</li>
<li>每一个技能都是一个对象，包含 <code v-pre>id</code>, <code v-pre>name</code>, <code v-pre>description</code>, <code v-pre>level</code> 等属性。</li>
<li><strong>添加、修改或删除技能，都在这个文件中操作。</strong></li>
</ul>
</li>
</ul>
<hr>
<h4 id="_2-src-data-skills-ts-文件详解" tabindex="-1"><a class="header-anchor" href="#_2-src-data-skills-ts-文件详解"><span><strong>2. <code v-pre>src/data/skills.ts</code> 文件详解</strong></span></a></h4>
<p>打开 <code v-pre>src/data/skills.ts</code>，你会看到类似下面的代码结构：</p>
<div class="code-block-title" data-title="src/data/skills.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/skills.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Skill</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">frontend</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">backend</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D" class="highlighted-word">data</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">base</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">tools</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">other</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	level</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">beginner</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">intermediate</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">advanced</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">expert</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	experience</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		years</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		months</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	};</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	projects</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	certifications</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">skillsData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Skill</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">javascript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">JavaScript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">logos:javascript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">frontend</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		level</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">advanced</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		experience</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">years</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">months</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">6</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> },</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		projects</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">mizuki-blog</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">portfolio-website</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D" class="highlighted-word">data</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">-visualization-tool</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">#F7DF1E</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><strong>数据结构说明</strong>:</p>
<ul>
<li>
<p><strong><code v-pre>interface Skill</code></strong>: 这是一个TypeScript接口，它定义了每一个技能必须包含的字段和它们的类型。</p>
<ul>
<li><code v-pre>id: string</code>: (必填) 技能的唯一标识符，通常是技能名称的小写形式。</li>
<li><code v-pre>name: string</code>: (必填) 技能的显示名称。</li>
<li><code v-pre>description: string</code>: (必填) 技能的详细描述，说明掌握程度和应用场景。</li>
<li><code v-pre>icon: string</code>: (必填) 技能的图标名称，使用Iconify图标集。</li>
<li><code v-pre>category: &quot;frontend&quot; | &quot;backend&quot; | &quot;database&quot; | &quot;tools&quot; | &quot;other&quot;</code>: (必填) 技能分类，用于组织和筛选。</li>
<li><code v-pre>level: &quot;beginner&quot; | &quot;intermediate&quot; | &quot;advanced&quot; | &quot;expert&quot;</code>: (必填) 技能水平等级。</li>
<li><code v-pre>experience: { years: number, months: number }</code>: (必填) 技能经验，包含年数和月数。</li>
<li><code v-pre>projects?: string[]</code>: (可选) 相关项目的ID列表。</li>
<li><code v-pre>certifications?: string[]</code>: (可选) 相关证书列表。</li>
<li><code v-pre>color?: string</code>: (可选) 技能卡片的主题颜色，使用十六进制格式。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>export const skillsData: Skill[] = [...]</code></strong>: 这是实际的技能数据数组。</p>
<ul>
<li>数组中的每一个对象都遵循上面 <code v-pre>Skill</code> 接口的定义。</li>
<li>技能在页面上的显示顺序通常是按照分类和水平排序。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_3-添加一个新技能" tabindex="-1"><a class="header-anchor" href="#_3-添加一个新技能"><span><strong>3. 添加一个新技能</strong></span></a></h4>
<p>按照以下步骤添加一个新的技能：</p>
<ol>
<li>
<p><strong>编辑 <code v-pre>skills.ts</code> 文件</strong>:</p>
<ul>
<li>打开 <code v-pre>src/data/skills.ts</code>。</li>
<li>在 <code v-pre>skillsData</code> 数组中，复制一个现有的技能对象作为模板。</li>
<li>修改模板中的属性：
<ul>
<li><strong><code v-pre>id</code></strong>: 给一个新的、唯一的字符串ID，通常使用技能名称的小写形式。</li>
<li><strong><code v-pre>name</code></strong>: 输入技能的显示名称。</li>
<li><strong><code v-pre>description</code></strong>: 详细描述技能掌握程度和应用场景。</li>
<li><strong><code v-pre>icon</code></strong>: 设置技能的图标名称，可以在<a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">Iconify官网</a>搜索。</li>
<li><strong><code v-pre>category</code></strong>: 设置技能分类：&quot;frontend&quot;、&quot;backend&quot;、&quot;database&quot;、&quot;tools&quot;或&quot;other&quot;。</li>
<li><strong><code v-pre>level</code></strong>: 设置技能水平：&quot;beginner&quot;、&quot;intermediate&quot;、&quot;advanced&quot;或&quot;expert&quot;。</li>
<li><strong><code v-pre>experience</code></strong>: 设置技能经验，包含年数和月数。</li>
<li><strong><code v-pre>projects</code></strong>: (如果有) 添加相关项目的ID列表。</li>
<li><strong><code v-pre>certifications</code></strong>: (如果有) 添加相关证书列表。</li>
<li><strong><code v-pre>color</code></strong>: (可选) 设置技能卡片的主题颜色。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>示例：添加一个新的后端技能</strong></p>
<p>假设我们要添加一个新的后端技能，内容如下：</p>
<ul>
<li>名称：Go</li>
<li>描述：Google开发的高效编程语言，适合云原生和微服务开发</li>
<li>分类：后端</li>
<li>水平：初级</li>
<li>经验：8个月</li>
<li>相关项目：微服务演示</li>
</ul>
<p>修改后的 <code v-pre>skillsData</code> 数组会是这样：</p>
<div class="code-block-title" data-title="src/data/skills.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/skills.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">skillsData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Skill</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">javascript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">JavaScript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // ... 其他字段 ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ... 其他技能 ...</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // --- 这是我们新添加的技能 ---</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">go</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 新的ID</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Go</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 名称</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Google开发的高效编程语言，适合云原生和微服务开发</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 描述</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">logos:go</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 图标</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">backend</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 分类</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    level</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">beginner</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 水平</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    experience</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">years</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">months</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 经验</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    projects</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">microservice-demo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 相关项目</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">#00ADD8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 颜色</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></li>
</ol>
<hr>
<h4 id="_4-修改或删除技能" tabindex="-1"><a class="header-anchor" href="#_4-修改或删除技能"><span><strong>4. 修改或删除技能</strong></span></a></h4>
<ul>
<li><strong>修改技能</strong>: 直接在 <code v-pre>skillsData</code> 数组中找到对应的技能对象，修改其属性即可。</li>
<li><strong>删除技能</strong>: 找到对应的技能对象，将其从数组中完全移除。注意不要留下多余的逗号，以免造成语法错误。</li>
</ul>
<hr>
<h4 id="_5-技能水平说明" tabindex="-1"><a class="header-anchor" href="#_5-技能水平说明"><span><strong>5. 技能水平说明</strong></span></a></h4>
<p>技能水平分为四个等级：</p>
<ul>
<li>
<p><strong>&quot;beginner&quot;</strong>: 初级</p>
<ul>
<li>掌握基本概念和语法</li>
<li>能完成简单任务</li>
<li>需要参考资料或指导</li>
</ul>
</li>
<li>
<p><strong>&quot;intermediate&quot;</strong>: 中级</p>
<ul>
<li>掌握核心概念和常用功能</li>
<li>能独立完成常规任务</li>
<li>有一定的项目经验</li>
</ul>
</li>
<li>
<p><strong>&quot;advanced&quot;</strong>: 高级</p>
<ul>
<li>深入理解原理和最佳实践</li>
<li>能处理复杂任务和挑战</li>
<li>有丰富的项目经验</li>
</ul>
</li>
<li>
<p><strong>&quot;expert&quot;</strong>: 专家级</p>
<ul>
<li>全面掌握，能解决难题</li>
<li>能指导他人</li>
<li>有权威性和影响力</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_6-技能分类" tabindex="-1"><a class="header-anchor" href="#_6-技能分类"><span><strong>6. 技能分类</strong></span></a></h4>
<p>技能按照类型分为五类：</p>
<ul>
<li>
<p><strong>&quot;frontend&quot;</strong>: 前端技术</p>
<ul>
<li>框架、库、CSS框架、构建工具等</li>
</ul>
</li>
<li>
<p><strong>&quot;backend&quot;</strong>: 后端技术</p>
<ul>
<li>编程语言、框架、API等</li>
</ul>
</li>
<li>
<p><strong>&quot;database&quot;</strong>: 数据库技术</p>
<ul>
<li>关系型数据库、NoSQL数据库等</li>
</ul>
</li>
<li>
<p><strong>&quot;tools&quot;</strong>: 开发工具</p>
<ul>
<li>IDE、版本控制、容器技术、云服务等</li>
</ul>
</li>
<li>
<p><strong>&quot;other&quot;</strong>: 其他技能</p>
<ul>
<li>测试框架、API设计、部署技术等</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_7-最佳实践与建议" tabindex="-1"><a class="header-anchor" href="#_7-最佳实践与建议"><span><strong>7. 最佳实践与建议</strong></span></a></h4>
<ul>
<li><strong>经验真实性</strong>: 真实反映技能掌握程度和经验时长。</li>
<li><strong>技能描述</strong>: 简洁明了地描述技能特点和应用场景。</li>
<li><strong>图标选择</strong>: 使用官方或广泛认可的图标，增强识别度。</li>
<li><strong>颜色协调</strong>: 为同一类别的技能使用协调的颜色方案。</li>
<li><strong>项目关联</strong>: 关联实际项目，展示技能应用实例。</li>
<li><strong>定期更新</strong>: 随着技术发展和个人成长，定期更新技能水平和经验。</li>
</ul>
<hr>
<h4 id="_8-页面功能与特性" tabindex="-1"><a class="header-anchor" href="#_8-页面功能与特性"><span><strong>8. 页面功能与特性</strong></span></a></h4>
<p>技能页面提供以下功能：</p>
<ul>
<li><strong>技能筛选</strong>: 按分类（全部/前端/后端/数据库/工具/其他）筛选技能</li>
<li><strong>水平筛选</strong>: 按水平（全部/初级/中级/高级/专家）筛选技能</li>
<li><strong>技能搜索</strong>: 通过关键词搜索技能名称和描述</li>
<li><strong>技能统计</strong>: 显示技能总数、按水平和分类的分布统计</li>
<li><strong>经验统计</strong>: 计算并显示总工作年限和月数</li>
<li><strong>技能详情</strong>: 点击技能卡片查看详细信息和相关项目</li>
</ul>
<hr>
<h4 id="_9-导航栏配置" tabindex="-1"><a class="header-anchor" href="#_9-导航栏配置"><span><strong>9. 导航栏配置</strong></span></a></h4>
<p>要在导航栏中显示技能链接，请确保在 <code v-pre>src/config.ts</code> 的 <code v-pre>navBarConfig</code> 中包含了技能链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Skills</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 技能页面</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>或者手动添加技能链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">技能展示</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/skills/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ri:psychology-line</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>
<p>通过以上步骤，你就可以轻松地管理你的技能页面了。定期更新 <code v-pre>src/data/skills.ts</code>，让访客了解你的技术专长和专业水平！</p>
</div></template>


