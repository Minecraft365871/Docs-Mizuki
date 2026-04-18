<template><div><p><strong>关于页面修改教程</strong></p>
<p>Mizuki 主题的关于页面内容存储在 Markdown 文件中，您可以轻松地自定义页面内容。</p>
<h2 id="关于页面结构" tabindex="-1"><a class="header-anchor" href="#关于页面结构"><span>关于页面结构</span></a></h2>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="pages" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-view" /></template><FileTreeNode type="file" filename="about.astro" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="content" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="spec" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-test" /></template><FileTreeNode type="file" diff="add" filename="about.md" :level="4">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>关于页面的内容位于 <code v-pre>src/content/spec/about.md</code> 文件中。该文件使用 Markdown 格式编写，支持标准 Markdown 语法以及 Mizuki 主题扩展的语法。</p>
<h2 id="修改页面内容" tabindex="-1"><a class="header-anchor" href="#修改页面内容"><span>修改页面内容</span></a></h2>
<p>要修改关于页面的内容，请直接编辑 <code v-pre>src/content/spec/about.md</code> 文件：</p>
<ol>
<li>打开文件查看现有内容</li>
<li>使用 Markdown 语法修改文本内容</li>
<li>可以添加或删除章节</li>
<li>保存文件后重新启动开发服务器即可看到更改</li>
</ol>
<h2 id="支持的-markdown-扩展语法" tabindex="-1"><a class="header-anchor" href="#支持的-markdown-扩展语法"><span>支持的 Markdown 扩展语法</span></a></h2>
<p>Mizuki 主题支持多种 Markdown 扩展语法：</p>
<h3 id="_1-github-卡片" tabindex="-1"><a class="header-anchor" href="#_1-github-卡片"><span>1. GitHub 卡片</span></a></h3>
<p>使用 <code v-pre>::github{repo=&quot;用户名/仓库名&quot;}</code> 语法嵌入 GitHub 仓库卡片：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>::github{repo="matsuzaka-yuki/mizuki"}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-注意框" tabindex="-1"><a class="header-anchor" href="#_2-注意框"><span>2. 注意框</span></a></h3>
<p>使用 <code v-pre>&gt; [!NOTE]</code>、<code v-pre>&gt; [!TIP]</code>、<code v-pre>&gt; [!WARNING]</code> 等语法创建美观的注意框：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>> [!NOTE]</span></span>
<span class="line"><span>> 这是一个注意框。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数学公式" tabindex="-1"><a class="header-anchor" href="#_3-数学公式"><span>3. 数学公式</span></a></h3>
<p>使用 <code v-pre>$inline$</code> 和 <code v-pre>$$block$$</code> 语法编写 LaTeX 数学公式：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>行内公式：$E = mc^2$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>块级公式：$$</span></span>
<span class="line"><span>E = mc^2</span></span>
<span class="line"><span>$$</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面样式" tabindex="-1"><a class="header-anchor" href="#页面样式"><span>页面样式</span></a></h2>
<p>关于页面的样式由 <code v-pre>src/pages/about.astro</code> 文件控制。除非您需要修改页面布局或添加新功能，否则通常不需要修改此文件。</p>
</div></template>


