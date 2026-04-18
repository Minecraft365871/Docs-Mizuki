<template><div><p>代码块配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>expressiveCodeConfig</code> 对象，控制博客文章内代码块的显示设置。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">expressiveCodeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ExpressiveCodeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	// 注意：某些样式（如背景颜色）已被覆盖，请参阅 astro.config.mjs 文件。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	// 请选择深色主题，因为此博客主题目前仅支持深色背景</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">github-dark</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	// 是否在主题切换时隐藏代码块以避免卡顿问题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	hideDuringThemeTransition</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="代码块-expressivecodeconfig-配置项详细说明" tabindex="-1"><a class="header-anchor" href="#代码块-expressivecodeconfig-配置项详细说明"><span><strong>代码块 (<code v-pre>expressiveCodeConfig</code>) 配置项详细说明</strong></span></a></h3>
<h4 id="_1-主题-theme" tabindex="-1"><a class="header-anchor" href="#_1-主题-theme"><span><strong>1. 主题 (<code v-pre>theme</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">github-dark</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>theme</code>：代码块的显示主题，默认值为 &quot;github-dark&quot;。
<ul>
<li>一般来说不要修改这个配置项!除非你自己有修改主题的能力!</li>
</ul>
</li>
</ul>
<h4 id="_2-主题切换时隐藏代码块-hideduringthemetransition" tabindex="-1"><a class="header-anchor" href="#_2-主题切换时隐藏代码块-hideduringthemetransition"><span><strong>2. 主题切换时隐藏代码块 (<code v-pre>hideDuringThemeTransition</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">hideDuringThemeTransition</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>hideDuringThemeTransition</code>：是否在主题切换时隐藏代码块，默认值为 <code v-pre>true</code>。
<ul>
<li>为 <code v-pre>true</code> 时：在主题切换时，代码块会被隐藏，避免在切换过程中出现卡顿问题。</li>
<li>为 <code v-pre>false</code> 时：在主题切换时，代码块会立即显示，可能会导致切换过程中出现闪烁或卡顿。</li>
</ul>
</li>
</ul>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1>
</div></template>


