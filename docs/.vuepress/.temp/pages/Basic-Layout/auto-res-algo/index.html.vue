<template><div><p>页面自动缩放配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>pageScaling</code> 对象，控制页面的自动缩放行为。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 页面自动缩放配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	pageScaling</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 是否开启自动缩放</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		targetWidth</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2000</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 目标宽度，低于此宽度时开始缩放</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ul>
<li><code v-pre>enable</code>：是否开启自动缩放功能，设置为 <code v-pre>true</code> 则启用页面自动缩放，设置为 <code v-pre>false</code> 则禁用</li>
<li><code v-pre>targetWidth</code>：目标宽度，当页面宽度低于此值时开始缩放，默认值为 2000</li>
</ul>
</div></template>


