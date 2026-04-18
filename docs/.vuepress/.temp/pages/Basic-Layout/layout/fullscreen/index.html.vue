<template><div><p><strong>Fullscreen Wallpaper 配置说明</strong></p>
<p>全屏布局配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>fullscreenWallpaperConfig</code> 对象，控制博客的整体布局设置。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">fullscreenWallpaperConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">FullscreenWallpaperConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		desktop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/2.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/3.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/4.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/5.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/6.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">			], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 桌面横幅图片</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			mobile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/2.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/3.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/4.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/5.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/6.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">			], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 移动横幅图片</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	}, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 使用本地横幅图片</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 壁纸位置，等同于 object-position</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	carousel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 启用轮播</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		interval</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 轮播间隔时间（秒）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	zIndex</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 层级，确保壁纸在背景层</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0.8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 壁纸透明度</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	blur</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 背景模糊程度</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="全屏壁纸-fullscreen-wallpaper-配置项详细说明" tabindex="-1"><a class="header-anchor" href="#全屏壁纸-fullscreen-wallpaper-配置项详细说明"><span><strong>全屏壁纸 (Fullscreen Wallpaper) 配置项详细说明</strong></span></a></h3>
<h4 id="_1-壁纸图片源-src" tabindex="-1"><a class="header-anchor" href="#_1-壁纸图片源-src"><span><strong>1. 壁纸图片源 (<code v-pre>src</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    desktop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> /* ... */</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 桌面端壁纸图片数组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    mobile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> /* ... */</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 移动端壁纸图片数组</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 定义用于桌面和移动设备的全屏背景图片。</li>
<li><strong>详细解释</strong>:
<ul>
<li>该结构与 <code v-pre>Banner</code> 配置中的 <code v-pre>src</code> 完全相同。它允许你为不同屏幕尺寸提供专门优化的图片。</li>
<li><code v-pre>desktop</code>: 用于桌面显示器的图片路径数组。由于是全屏背景，图片的分辨率应尽可能高，以适应各种屏幕尺寸。</li>
<li><code v-pre>mobile</code>: 用于移动设备的图片路径数组。考虑到移动设备的屏幕尺寸和带宽，图片可以适当减小文件大小。</li>
<li><strong>数组形式</strong>: 当数组长度大于 1 时，结合 <code v-pre>carousel</code> 配置，可以实现壁纸的自动轮播效果。</li>
</ul>
</li>
</ul>
<h4 id="_2-壁纸定位-position" tabindex="-1"><a class="header-anchor" href="#_2-壁纸定位-position"><span><strong>2. 壁纸定位 (<code v-pre>position</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 壁纸位置</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 当壁纸图片的宽高比与浏览器窗口的宽高比不一致时，此选项决定了图片在窗口中的对齐方式。它直接映射到 CSS 的 <code v-pre>object-position</code> 属性。</li>
<li><strong>可选值</strong>:
<ul>
<li><code v-pre>top</code>: 图片顶部与窗口顶部对齐。</li>
<li><code v-pre>center</code>: (默认) 图片在窗口内水平和垂直方向都居中。这是最常用的设置。</li>
<li><code v-pre>bottom</code>: 图片底部与窗口底部对齐。</li>
<li>你也可以使用更复杂的字符串值，如 <code v-pre>&quot;top left&quot;</code>、<code v-pre>&quot;50% 70%&quot;</code> 等，具体取决于主题是否支持完整的 <code v-pre>object-position</code> 语法。</li>
</ul>
</li>
<li><strong>效果</strong>: 如果图片比窗口小，它会在指定位置显示，周围可能会有空白（由 <code v-pre>background-color</code> 填充）。如果图片比窗口大，它会在指定位置居中，并裁剪掉超出窗口的部分。</li>
</ul>
<h4 id="_3-轮播设置-carousel" tabindex="-1"><a class="header-anchor" href="#_3-轮播设置-carousel"><span><strong>3. 轮播设置 (<code v-pre>carousel</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">carousel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 是否启用轮播</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    interval</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 轮播间隔时间（秒）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 当 <code v-pre>src</code> 中的图片数组长度大于 1 时，此配置项控制是否以及如何自动切换壁纸。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>enable</code>:
<ul>
<li><code v-pre>true</code>: 启用自动轮播。壁纸会按照数组顺序，每隔 <code v-pre>interval</code> 秒自动切换一次。</li>
<li><code v-pre>false</code>: 禁用轮播。系统会从图片数组中选择一张（通常是第一张或随机一张）作为静态背景。</li>
</ul>
</li>
<li><code v-pre>interval</code>: 轮播切换的时间间隔，单位为秒（seconds）。例如，<code v-pre>5</code> 表示每 5 秒更换一次壁纸。</li>
</ul>
</li>
</ul>
<h4 id="_4-层级控制-zindex" tabindex="-1"><a class="header-anchor" href="#_4-层级控制-zindex"><span><strong>4. 层级控制 (<code v-pre>zIndex</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">zIndex</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 层级</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制全屏壁纸在页面元素堆叠顺序中的位置。这是一个关键的 CSS 属性。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>zIndex</code> 的值越大，元素在垂直于屏幕的堆叠顺序中就越靠上。</li>
<li>设置为 <code v-pre>-1</code> 意味着壁纸将被放置在所有其他页面内容（如导航栏、文章、侧边栏等）的<strong>下方</strong>，确保它只作为背景存在，不会遮挡任何重要内容。</li>
<li><strong>注意</strong>: 这个值通常不需要修改，除非你遇到了特殊的布局冲突问题。</li>
</ul>
</li>
</ul>
<h4 id="_5-透明度-opacity" tabindex="-1"><a class="header-anchor" href="#_5-透明度-opacity"><span><strong>5. 透明度 (<code v-pre>opacity</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 壁纸透明度</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 调整壁纸的透明程度。</li>
<li><strong>详细解释</strong>:
<ul>
<li>值的范围是 <code v-pre>0</code> 到 <code v-pre>1</code>。</li>
<li><code v-pre>1</code> 表示完全不透明（实心）。</li>
<li><code v-pre>0</code> 表示完全透明（不可见）。</li>
<li><code v-pre>0.8</code> (示例值) 表示 80% 不透明，即有 20% 的透明度。这使得壁纸会稍微“淡”一些，与前景内容有更好的对比度，从而提高文字的可读性。你可以根据壁纸的亮度和颜色来微调这个值。</li>
</ul>
</li>
</ul>
<h4 id="_6-背景模糊-blur" tabindex="-1"><a class="header-anchor" href="#_6-背景模糊-blur"><span><strong>6. 背景模糊 (<code v-pre>blur</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">blur</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 背景模糊程度</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 为壁纸添加高斯模糊效果，创造出一种毛玻璃（Frosted Glass）或景深效果。</li>
<li><strong>详细解释</strong>:
<ul>
<li>值的单位是像素（px），数值越大，模糊效果越明显。</li>
<li><code v-pre>0</code> 表示无模糊。</li>
<li><code v-pre>1</code> (示例值) 表示轻微的模糊。</li>
<li><strong>效果</strong>: 模糊背景可以有效地将前景内容（如白色的文字）与背景分离开来，即使在不降低透明度的情况下也能提升可读性。它还能营造出一种现代、柔和、高级的视觉氛围。但请注意，较高的 <code v-pre>blur</code> 值会增加浏览器的渲染负担。</li>
</ul>
</li>
</ul>
<hr>
</div></template>


