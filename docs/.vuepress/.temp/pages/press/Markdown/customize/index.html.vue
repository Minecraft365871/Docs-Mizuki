<template><div><h2 id="一、github-仓库卡片-github-repository-cards" tabindex="-1"><a class="header-anchor" href="#一、github-仓库卡片-github-repository-cards"><span>一、GitHub 仓库卡片（GitHub Repository Cards）</span></a></h2>
<p>支持添加动态 GitHub 仓库卡片，页面加载时会通过 GitHub API 拉取仓库实时信息（如星标数、分支数等）。</p>
<h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3>
<p repo="matsuzaka-yuki/Mizuki">::github</p>
<h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::github{repo="用户名/仓库名"}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>repo</code> 参数：必填，格式为「GitHub 用户名/仓库名称」（如 <code v-pre>matsuzaka-yuki/Mizuki</code>）</li>
</ul>
<h2 id="二、提示框-admonitions" tabindex="-1"><a class="header-anchor" href="#二、提示框-admonitions"><span>二、提示框（Admonitions）</span></a></h2>
<p>支持 5 种预设类型的提示框，用于突出显示不同重要程度的信息，适配多种使用场景。</p>
<h3 id="支持类型及示例" tabindex="-1"><a class="header-anchor" href="#支持类型及示例"><span>支持类型及示例</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>语法标识</th>
<th>效果示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>说明</td>
<td><code v-pre>note</code></td>
<td>:<VPIcon provider="iconify" name="note<br>即使快速浏览，用户也应注意的信息。<br>" />:</td>
</tr>
<tr>
<td>技巧</td>
<td><code v-pre>tip</code></td>
<td>:<VPIcon provider="iconify" name="tip<br>帮助用户更高效完成操作的可选信息。<br>" />:</td>
</tr>
<tr>
<td>重要</td>
<td><code v-pre>important</code></td>
<td>:<VPIcon provider="iconify" name="important<br>用户成功完成操作必需的关键信息。<br>" />:</td>
</tr>
<tr>
<td>警告</td>
<td><code v-pre>warning</code></td>
<td>:<VPIcon provider="iconify" name="warning<br>存在潜在风险，需用户立即关注的重要内容。<br>" />:</td>
</tr>
<tr>
<td>注意（谨慎）</td>
<td><code v-pre>caution</code></td>
<td>:<VPIcon provider="iconify" name="caution<br>某操作可能导致的负面后果提示。<br>" />:</td>
</tr>
</tbody>
</table>
<h3 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法"><span>基础语法</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::类型标识</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">提示框内容（支持换行）</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义标题" tabindex="-1"><a class="header-anchor" href="#自定义标题"><span>自定义标题</span></a></h3>
<p>可修改提示框默认标题，语法如下：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::note</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">我的自定义标题</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是一个带有自定义标题的说明提示框。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：
:<VPIcon provider="iconify" name="note[我的自定义标题]
这是一个带有自定义标题的说明提示框。" />:</p>
<h3 id="github-兼容语法" tabindex="-1"><a class="header-anchor" href="#github-兼容语法"><span>GitHub 兼容语法</span></a></h3>
<p>同时支持 GitHub 官方提示框语法（无缝适配 GitHub 文档风格）：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">!NOTE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> GitHub 语法的说明提示框。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> 支持多行内容。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">!TIP</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#2E808F;--shiki-dark:#5D99A9"> GitHub 语法的技巧提示框。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>GitHub 语法的说明提示框。
支持多行内容。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>GitHub 语法的技巧提示框。</p>
</div>
<h2 id="三、折叠剧透-spoiler" tabindex="-1"><a class="header-anchor" href="#三、折叠剧透-spoiler"><span>三、折叠剧透（Spoiler）</span></a></h2>
<p>支持添加折叠式剧透内容，默认隐藏，hover 或点击时显示，内容支持 Markdown 格式。</p>
<h3 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">这是普通文本，剧透内容：:spoiler[被隐藏的</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold">剧透内容</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">（支持粗体等 Markdown 语法）]！</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果：
这是普通文本，剧透内容：:spoiler[被隐藏的<strong>剧透内容</strong>（支持粗体等 Markdown 语法）]！</p>
<h3 id="语法格式-1" tabindex="-1"><a class="header-anchor" href="#语法格式-1"><span>语法格式</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:spoiler[剧透内容（可包含 Markdown 语法）]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


