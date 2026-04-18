<template><div><p>目录导航配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>toc</code> 对象，控制博客文章内的目录导航显示设置。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">toc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 启用目录功能</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		depth</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 目录深度，1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		useJapaneseBadge</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 使用日语p假名标记（あいうえお...）代替数字，开启后会将 1、2、3... 改为 ァ、ィ、ゥ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ul>
<li><code v-pre>enable</code>：是否启用目录导航功能，设置为 <code v-pre>true</code> 则在文章侧边显示目录导航</li>
<li><code v-pre>depth</code>：目录导航显示的标题深度，取值范围为 1 到 6
<ul>
<li>1 表示只显示一级标题（<code v-pre>&lt;h1&gt;</code>）</li>
<li>2 表示显示一级和二级标题（<code v-pre>&lt;h1&gt;</code> 和 <code v-pre>&lt;h2&gt;</code>）</li>
<li>依此类推，直到显示所有六级标题（<code v-pre>&lt;h1&gt;</code> 到 <code v-pre>&lt;h6&gt;</code>）</li>
</ul>
</li>
<li><code v-pre>useJapaneseBadge</code>：是否使用日语假名标记代替数字，设置为 <code v-pre>true</code> 则会将目录导航中的数字替换为对应的日语假名（ァ、ィ、ゥ...）</li>
<li>例如：
<ul>
<li>数字标记：1、2、3...</li>
<li>日语假名标记：ァ、ィ、ゥ、ェ、ォ...</li>
</ul>
</li>
</ul>
<p>开启这个配置在首页也有作用,会变成文章列表导航!</p>
</div></template>


