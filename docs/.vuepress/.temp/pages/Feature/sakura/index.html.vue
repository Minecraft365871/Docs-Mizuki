<template><div><p>樱花飘落特效配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>sakuraConfig</code> 对象，控制博客页面的樱花飘落效果。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">sakuraConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">SakuraConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 默认关闭樱花特效</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	sakuraNum</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">21</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 樱花数量</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	limitTimes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 樱花越界限制次数，-1为无限循环</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 樱花最小尺寸倍数</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 樱花最大尺寸倍数</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0.3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 樱花最小不透明度</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0.9</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 樱花最大不透明度</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	speed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		horizontal</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1.7</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 水平移动速度最小值</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 水平移动速度最大值</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		vertical</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 垂直移动速度最小值</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 垂直移动速度最大值</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		rotation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0.03</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 旋转速度</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		fadeSpeed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0.03</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 消失速度，不应大于最小不透明度</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	zIndex</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 层级，确保樱花在合适的层级显示</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>我们来详细解析 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>sakuraConfig</code> 对象，并为你提供一份配置教程。</p>
<p>这个配置项用于在你的博客页面上添加一个美观的樱花飘落动态效果，通常作为背景装饰，能为网站增添一份浪漫或日式的氛围。</p>
<hr>
<h3 id="樱花飘落特效-sakura-配置教程" tabindex="-1"><a class="header-anchor" href="#樱花飘落特效-sakura-配置教程"><span><strong>樱花飘落特效 (Sakura) 配置教程</strong></span></a></h3>
<p><code v-pre>sakuraConfig</code> 对象提供了对樱花飘落特效的全面控制，从是否启用、数量多少到飘落的速度和样式，都可以自定义。</p>
<h4 id="核心配置项详解" tabindex="-1"><a class="header-anchor" href="#核心配置项详解"><span><strong>核心配置项详解</strong></span></a></h4>
<h4 id="_1-启用特效-enable" tabindex="-1"><a class="header-anchor" href="#_1-启用特效-enable"><span><strong>1. 启用特效 (<code v-pre>enable</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制整个樱花飘落特效的开关。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>true</code>: 启用樱花特效，页面上会开始飘落樱花。</li>
<li><code v-pre>false</code>: (默认) 禁用樱花特效，页面上不会显示任何樱花。</li>
</ul>
</li>
</ul>
<h4 id="_2-樱花数量-sakuranum" tabindex="-1"><a class="header-anchor" href="#_2-樱花数量-sakuranum"><span><strong>2. 樱花数量 (<code v-pre>sakuraNum</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sakuraNum</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 21</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 设置同时在屏幕上显示的樱花数量。</li>
<li><strong>配置</strong>:
<ul>
<li>一个正整数。数值越大，屏幕上的樱花越多，视觉效果越密集，但可能会对页面性能产生一定影响，尤其是在配置较低的设备上。</li>
<li><strong>建议</strong>: 从一个较小的值（如 10-20）开始尝试，根据你的视觉偏好和页面性能来调整。</li>
</ul>
</li>
</ul>
<h4 id="_3-越界限制次数-limittimes" tabindex="-1"><a class="header-anchor" href="#_3-越界限制次数-limittimes"><span><strong>3. 越界限制次数 (<code v-pre>limitTimes</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">limitTimes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制樱花在屏幕上消失后是否重新生成。这决定了特效是无限循环还是只播放一段时间。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>-1</code>: (默认) 无限循环。樱花从屏幕顶部飘落，当它们完全离开屏幕底部后，会在屏幕顶部重新生成，继续飘落。</li>
<li>一个非负整数 <code v-pre>N</code>: 樱花只会飘落 <code v-pre>N</code> 次。当樱花第 <code v-pre>N</code> 次从屏幕底部消失后，它们将不再重新生成，特效会自然结束。</li>
</ul>
</li>
</ul>
<h4 id="_4-樱花尺寸-size" tabindex="-1"><a class="header-anchor" href="#_4-樱花尺寸-size"><span><strong>4. 樱花尺寸 (<code v-pre>size</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 樱花最小尺寸倍数</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 樱花最大尺寸倍数</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制樱花的大小。通过设置一个范围，使得每个樱花的大小都有所不同，增加视觉的随机性和自然感。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>min</code>: 樱花的最小尺寸（以一个基础大小为倍数）。</li>
<li><code v-pre>max</code>: 樱花的最大尺寸（以一个基础大小为倍数）。</li>
<li>每个新生成的樱花都会随机获得一个介于 <code v-pre>min</code> 和 <code v-pre>max</code> 之间的尺寸。例如，如果基础大小是 10px，<code v-pre>min</code> 是 0.5，<code v-pre>max</code> 是 1.1，那么樱花的实际大小会在 5px 到 11px 之间。</li>
</ul>
</li>
</ul>
<h4 id="_5-樱花透明度-opacity" tabindex="-1"><a class="header-anchor" href="#_5-樱花透明度-opacity"><span><strong>5. 樱花透明度 (<code v-pre>opacity</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 樱花最小不透明度</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.9</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 樱花最大不透明度</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制樱花的透明程度。同样，设置一个范围可以让效果更自然。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>min</code>: 樱花的最小不透明度。值的范围是 <code v-pre>0</code> (完全透明) 到 <code v-pre>1</code> (完全不透明)。</li>
<li><code v-pre>max</code>: 樱花的最大不透明度。</li>
<li>每个樱花都会随机获得一个介于 <code v-pre>min</code> 和 <code v-pre>max</code> 之间的不透明度值。例如，<code v-pre>0.3</code> 表示 30% 的不透明度，看起来比较淡；<code v-pre>0.9</code> 表示 90% 的不透明度，看起来比较实。</li>
</ul>
</li>
</ul>
<h4 id="_6-飘落速度与动画-speed" tabindex="-1"><a class="header-anchor" href="#_6-飘落速度与动画-speed"><span><strong>6. 飘落速度与动画 (<code v-pre>speed</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">speed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    horizontal</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1.7</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 水平移动速度最小值</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 水平移动速度最大值</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    vertical</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        min</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 垂直移动速度最小值</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 垂直移动速度最大值</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    rotation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.03</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 旋转速度</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    fadeSpeed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.03</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 消失速度</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 这是最核心的动画配置，控制樱花如何飘落、旋转和消失。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>horizontal</code>: 控制樱花的水平（左右）移动速度。
<ul>
<li>值为负数表示向左移动，值为正数表示向右移动。</li>
<li>设置一个从 <code v-pre>-1.7</code> 到 <code v-pre>-1.2</code> 的范围，意味着樱花会以一个随机的、向左的速度飘落，营造出风吹过的效果。</li>
</ul>
</li>
<li><code v-pre>vertical</code>: 控制樱花的垂直（上下）移动速度。
<ul>
<li>值为正数表示向下移动（符合自然下落）。</li>
<li>设置一个范围，使得樱花下落的速度有快有慢。</li>
</ul>
</li>
<li><code v-pre>rotation</code>: 控制樱花在飘落过程中的旋转速度。
<ul>
<li>值为正数表示顺时针旋转，值为负数表示逆时针旋转。</li>
<li>数值越大，旋转得越快。<code v-pre>0.03</code> 是一个比较缓慢、自然的旋转速度。</li>
</ul>
</li>
<li><code v-pre>fadeSpeed</code>: 控制樱花在生命周期结束时（通常是即将离开屏幕底部时）的淡出速度。
<ul>
<li>这个值决定了樱花的不透明度每秒减少多少。</li>
<li><strong>重要</strong>: 此值不应大于 <code v-pre>opacity.min</code>，否则樱花可能会在完全消失前就变成完全透明，效果会显得突兀。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="_7-层级-zindex" tabindex="-1"><a class="header-anchor" href="#_7-层级-zindex"><span><strong>7. 层级 (<code v-pre>zIndex</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">zIndex</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制樱花特效在页面元素堆叠顺序中的层级。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>zIndex</code> 的值越大，元素在垂直于屏幕的堆叠顺序中就越靠上。</li>
<li>设置一个较高的值（如 <code v-pre>100</code>）可以确保樱花会显示在页面的大部分内容之上，但又不会覆盖掉导航栏、侧边栏等重要的交互元素（假设这些元素的 <code v-pre>zIndex</code> 更高）。</li>
<li>如果发现樱花被其他内容遮挡，可以适当提高此值；如果樱花遮挡了需要点击的按钮等，可以适当降低此值。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="快速配置与效果调整建议" tabindex="-1"><a class="header-anchor" href="#快速配置与效果调整建议"><span><strong>快速配置与效果调整建议</strong></span></a></h3>
<ol>
<li>
<p><strong>启用并预览</strong>:</p>
<ul>
<li>将 <code v-pre>enable</code> 设置为 <code v-pre>true</code>。</li>
<li>保存文件并启动博客，初步预览效果。</li>
</ul>
</li>
<li>
<p><strong>调整数量</strong>:</p>
<ul>
<li>如果觉得樱花太多或太少，修改 <code v-pre>sakuraNum</code> 的值。</li>
</ul>
</li>
<li>
<p><strong>调整飘落效果</strong>:</p>
<ul>
<li><strong>想让樱花飘得更慢/更快</strong>: 减小/增大 <code v-pre>speed.vertical.min</code> 和 <code v-pre>speed.vertical.max</code> 的值。</li>
<li><strong>想让樱花向左飘得更明显</strong>: 让 <code v-pre>speed.horizontal.min</code> 和 <code v-pre>speed.horizontal.max</code> 的值更负（例如 <code v-pre>-2.5</code> 到 <code v-pre>-1.8</code>）。</li>
<li><strong>想让樱花向右飘</strong>: 将 <code v-pre>speed.horizontal</code> 的值设置为正数（例如 <code v-pre>1.2</code> 到 <code v-pre>1.7</code>）。</li>
<li><strong>不想要旋转效果</strong>: 将 <code v-pre>speed.rotation</code> 设置为 <code v-pre>0</code>。</li>
</ul>
</li>
<li>
<p><strong>调整视觉样式</strong>:</p>
<ul>
<li><strong>想要更透明、更梦幻的樱花</strong>: 减小 <code v-pre>opacity.min</code> 和 <code v-pre>opacity.max</code> 的值。</li>
<li><strong>想要更大的樱花</strong>: 增大 <code v-pre>size.min</code> 和 <code v-pre>size.max</code> 的值。</li>
</ul>
</li>
<li>
<p><strong>性能考虑</strong>:</p>
<ul>
<li>如果在低端设备上预览时发现页面卡顿，可以尝试减小 <code v-pre>sakuraNum</code> 的值，或者降低 <code v-pre>speed.rotation</code> 和 <code v-pre>speed.fadeSpeed</code> 等动画相关的数值。</li>
</ul>
</li>
</ol>
<hr>
<p>通过以上配置和调整，你可以轻松地在你的博客页面上实现一个美丽的樱花飘落特效，为访客带来愉悦的视觉体验。根据你的喜好和网站风格，灵活调整各项参数，打造独一无二的动态背景效果吧！</p>
</div></template>


