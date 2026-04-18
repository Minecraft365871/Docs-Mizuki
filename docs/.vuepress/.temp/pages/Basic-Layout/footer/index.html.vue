<template><div><p>页脚配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>footerConfig</code> 对象，控制博客底部页脚的显示设置。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">footerConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">FooterConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	customHtml</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="页脚-footerconfig-配置项详细说明" tabindex="-1"><a class="header-anchor" href="#页脚-footerconfig-配置项详细说明"><span><strong>页脚 (<code v-pre>footerConfig</code>) 配置项详细说明</strong></span></a></h3>
<h4 id="_1-启用页脚功能-enable" tabindex="-1"><a class="header-anchor" href="#_1-启用页脚功能-enable"><span><strong>1. 启用页脚功能 (<code v-pre>enable</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>enable</code>：是否启用页脚功能，默认值为 <code v-pre>false</code>。
<ul>
<li>为 <code v-pre>true</code> 时：启用页脚功能，博客底部会显示自定义的页脚内容。</li>
<li>为 <code v-pre>false</code> 时：禁用页脚功能，博客底部不会显示任何页脚内容。</li>
</ul>
</li>
</ul>
<h4 id="_2-自定义页脚内容-customhtml" tabindex="-1"><a class="header-anchor" href="#_2-自定义页脚内容-customhtml"><span><strong>2. 自定义页脚内容 (<code v-pre>customHtml</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">customHtml</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>customHtml</code>：自定义页脚内容，默认值为空字符串。
<ul>
<li>若留空：页脚内容将从 <code v-pre>FooterConfig.html</code> 文件中读取。</li>
<li>若填写 HTML 内容：页脚将显示自定义的 HTML 内容。
<ul>
<li>例如：<code v-pre>&lt;p&gt;备案号：&lt;a href=&quot;https://beian.miit.gov.cn/&quot;&gt;粤ICP备2023000000号&lt;/a&gt;&lt;/p&gt;</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="_3-footerconfig-html-文件" tabindex="-1"><a class="header-anchor" href="#_3-footerconfig-html-文件"><span><strong>3. FooterConfig.html 文件</strong></span></a></h4>
<ul>
<li><code v-pre>FooterConfig.html</code> 文件用于存放自定义的页脚内容。</li>
</ul>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode type="file" filename="config.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="FooterConfig.html" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-html" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<ul>
<li>该文件默认位于 <code v-pre>src/FooterConfig.html</code>。</li>
<li>若 <code v-pre>customHtml</code> 留空，页脚内容将从该文件中读取。</li>
<li>若 <code v-pre>customHtml</code> 填写 HTML 内容，页脚将显示自定义的 HTML 内容。</li>
<li>注意：<code v-pre>FooterConfig.html</code> 文件可能会在未来的某个版本弃用，建议优先使用 <code v-pre>customHtml</code> 配置项进行自定义。</li>
</ul>
</div></template>


