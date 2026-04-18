<template><div><p>Mizuki 主题支持自定义字体配置，让您可以自定义站点的字体风格，提升用户体验和品牌识别度。</p>
<h2 id="配置概述" tabindex="-1"><a class="header-anchor" href="#配置概述"><span>配置概述</span></a></h2>
<p>自定义字体功能分为两种类型：</p>
<ul>
<li><strong>英文字体 (asciiFont)</strong>：用于显示 ASCII 字符集，优先级最高</li>
<li><strong>中日韩字体 (cjkFont)</strong>：用于显示中文、日文、韩文等字符，作为回退字体</li>
</ul>
<h2 id="字体配置示例" tabindex="-1"><a class="header-anchor" href="#字体配置示例"><span>字体配置示例</span></a></h2>
<p>在主题配置中添加以下字体配置：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 字体配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">font</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	// 注意：自定义字体需要在 src/styles/main.css 中引入字体文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	// 注意：字体子集优化功能目前仅支持 TTF 格式字体,开启后需要在生产环境才能看到效果,在Dev环境下显示的是浏览器默认字体!</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	asciiFont</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 英文字体 - 优先级最高</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 指定为英文字体则无论字体包含多大范围，都只会保留 ASCII 字符子集</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		fontFamily</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ZenMaruGothic-Medium</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		fontWeight</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">400</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		localFonts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ZenMaruGothic-Medium.ttf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		enableCompress</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 启用字体子集优化，减少字体文件大小</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	cjkFont</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 中日韩字体 - 作为回退字体</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		fontFamily</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">萝莉体 第二版</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		fontWeight</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">500</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		localFonts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">萝莉体 第二版.ttf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		enableCompress</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 启用字体子集优化，减少字体文件大小</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="配置参数详解" tabindex="-1"><a class="header-anchor" href="#配置参数详解"><span>配置参数详解</span></a></h2>
<h3 id="asciifont-英文字体" tabindex="-1"><a class="header-anchor" href="#asciifont-英文字体"><span>asciiFont (英文字体)</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>fontFamily</td>
<td>string</td>
<td>字体名称</td>
</tr>
<tr>
<td>fontWeight</td>
<td>string</td>
<td>字体粗细，如 &quot;400&quot;、&quot;500&quot;、&quot;bold&quot; 等</td>
</tr>
<tr>
<td>localFonts</td>
<td>string[]</td>
<td>本地字体文件路径列表</td>
</tr>
<tr>
<td>enableCompress</td>
<td>boolean</td>
<td>是否启用字体子集优化</td>
</tr>
</tbody>
</table>
<h3 id="cjkfont-中日韩字体" tabindex="-1"><a class="header-anchor" href="#cjkfont-中日韩字体"><span>cjkFont (中日韩字体)</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>fontFamily</td>
<td>string</td>
<td>字体名称</td>
</tr>
<tr>
<td>fontWeight</td>
<td>string</td>
<td>字体粗细，如 &quot;400&quot;、&quot;500&quot;、&quot;bold&quot; 等</td>
</tr>
<tr>
<td>localFonts</td>
<td>string[]</td>
<td>本地字体文件路径列表</td>
</tr>
<tr>
<td>enableCompress</td>
<td>boolean</td>
<td>是否启用字体子集优化</td>
</tr>
</tbody>
</table>
<h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h2>
<h3 id="_1-准备字体文件" tabindex="-1"><a class="header-anchor" href="#_1-准备字体文件"><span>1. 准备字体文件</span></a></h3>
<p>将您的字体文件（推荐使用 TTF 格式）放置在项目目录中，例如：</p>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="public" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-public" /></template><FileTreeNode expanded type="folder" filename="fonts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-fonts" /></template><FileTreeNode type="file" filename="ZenMaruGothic-Medium.ttf" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-font" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="萝莉体" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-file" /></template><template #comment>第二版.ttf</template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="styles" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-style" /></template><FileTreeNode type="file" filename="main.css" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-css" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="file" filename="config.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<h3 id="_2-引入字体文件" tabindex="-1"><a class="header-anchor" href="#_2-引入字体文件"><span>2. 引入字体文件</span></a></h3>
<p>在 <code v-pre>src/styles/main.css</code>（或类似的样式文件）中引入字体：</p>
<div class="code-block-title" data-title="src/styles/main.css"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-css"/>src/styles/main.css</span></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 英文字体 */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">font-face</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  font-family</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ZenMaruGothic-Medium</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/fonts/ZenMaruGothic-Medium.ttf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> format</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">truetype</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  font-weight</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 400</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  font-display</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> swap</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 中日韩字体 */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">font-face</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  font-family</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">萝莉体 第二版</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/fonts/萝莉体 第二版.ttf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> format</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">truetype</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  font-weight</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 500</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  font-display</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> swap</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_3-配置主题" tabindex="-1"><a class="header-anchor" href="#_3-配置主题"><span>3. 配置主题</span></a></h3>
<p>在 <code v-pre>src/config.ts</code> 中添加字体配置：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 其他配置...</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  font</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    asciiFont</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      fontFamily</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ZenMaruGothic-Medium</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      fontWeight</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">400</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      localFonts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ZenMaruGothic-Medium.ttf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      enableCompress</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    cjkFont</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      fontFamily</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">萝莉体 第二版</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      fontWeight</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">500</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      localFonts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">萝莉体 第二版.ttf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      enableCompress</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 其他配置...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="字体子集优化" tabindex="-1"><a class="header-anchor" href="#字体子集优化"><span>字体子集优化</span></a></h2>
<p>当 <code v-pre>enableCompress</code> 设置为 <code v-pre>true</code> 时，系统会对字体进行子集优化，仅保留必要的字符，从而减少字体文件大小，提高加载速度。</p>
<p><strong>注意事项：</strong></p>
<ul>
<li>字体子集优化功能目前仅支持 TTF 格式字体</li>
<li>该功能需要在生产环境中才能看到效果</li>
<li>在开发环境下可能显示为浏览器默认字体</li>
</ul>
<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<ol>
<li><strong>字体文件大小</strong>：选择合适大小的字体文件，避免过大的字体文件影响加载速度</li>
<li><strong>格式选择</strong>：推荐使用 TTF 格式，其他格式可能需要额外配置</li>
<li><strong>回退方案</strong>：提供系统默认字体作为回退方案，确保在字体加载失败时也能正常显示</li>
<li><strong>字体授权</strong>：确保您使用的字体有适当的授权许可</li>
</ol>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="q-如何同时设置多个字体" tabindex="-1"><a class="header-anchor" href="#q-如何同时设置多个字体"><span>Q: 如何同时设置多个字体？</span></a></h3>
<p>A: 可以在 <code v-pre>fontFamily</code> 中使用字体栈，例如：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">fontFamily</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">CustomFont, Helvetica, Arial, sans-serif</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="q-为什么在开发环境中字体没有生效" tabindex="-1"><a class="header-anchor" href="#q-为什么在开发环境中字体没有生效"><span>Q: 为什么在开发环境中字体没有生效？</span></a></h3>
<p>A: 字体子集优化功能需要在生产环境中才能正常工作。在开发环境中，可以临时禁用 <code v-pre>enableCompress</code> 进行测试。</p>
<h3 id="q-如何使用-web-字体" tabindex="-1"><a class="header-anchor" href="#q-如何使用-web-字体"><span>Q: 如何使用 Web 字体？</span></a></h3>
<p>A: 可以从 Google Fonts 或其他 Web 字体服务获取字体，然后按照上述步骤进行配置。</p>
<h2 id="相关链接" tabindex="-1"><a class="header-anchor" href="#相关链接"><span>相关链接</span></a></h2>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face" target="_blank" rel="noopener noreferrer">CSS @font-face 规则</a></li>
<li><a href="https://transfonter.org/" target="_blank" rel="noopener noreferrer">字体格式转换工具</a></li>
<li><a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a></li>
</ul>
</div></template>


