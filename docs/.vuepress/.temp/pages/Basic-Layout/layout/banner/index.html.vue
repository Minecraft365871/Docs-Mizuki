<template><div><p><strong>Banner配置说明</strong></p>
<p>Banner配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>banner</code> 对象，控制博客的横幅设置。这个配置会影响你在横幅布局下的显示效果。</p>
<h2 id="配置项详解" tabindex="-1"><a class="header-anchor" href="#配置项详解"><span>配置项详解</span></a></h2>
<h3 id="banner配置" tabindex="-1"><a class="header-anchor" href="#banner配置"><span>Banner配置</span></a></h3>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">banner</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			desktop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/2.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/3.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/4.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/5.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/6.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">			],</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 桌面横幅图片</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			mobile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/2.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/3.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/4.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/5.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/6.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">			],</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 移动横幅图片</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 使用本地横幅图片</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		carousel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 为 true 时：为多张图片启用轮播。为 false 时：从数组中随机显示一张图片</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			interval</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 轮播间隔时间（秒）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		waves</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 是否启用水波纹效果(这个功能比较吃性能)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			performanceMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 性能模式：减少动画复杂度(性能提升40%)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			mobileDisable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 移动端禁用</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// PicFlow API支持(智能图片API)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		imageApi</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 启用图片API</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://domain.com/api_v2.php?format=text&#x26;count=4</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // API地址，返回每行一个图片链接的文本</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 这里需要使用PicFlow API的Text返回类型,所以我们需要format=text参数</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 项目地址:https://github.com/matsuzaka-yuki/PicFlow-API</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 请自行搭建API</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		homeText</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 在主页显示自定义文本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">美しいミズキ</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 主页横幅主标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			subtitle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">特別なことはないけど、君がいると十分です</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">今でもあなたは私の光</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">君ってさ、知らないうちに私の毎日になってたよ</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">君と話すと、なんか毎日がちょっと楽しくなるんだ</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">				"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">今日はなんでもない日。でも、ちょっとだけいい日</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">			],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			typewriter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">				enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 启用副标题打字机效果</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">				speed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 打字速度（毫秒）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">				deleteSpeed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 50</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 删除速度（毫秒）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">				pauseTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2000</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 完全显示后的暂停时间（毫秒）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">			},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		credit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 显示横幅图片来源文本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Describe</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 要显示的来源文本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // （可选）原始艺术品或艺术家页面的 URL 链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		navbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			transparentMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">semifull</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 导航栏透明模式："semi" 半透明加圆角，"full" 完全透明，"semifull" 动态透明</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>我们来将 <code v-pre>src/config.ts</code> 文件中 <code v-pre>banner</code> 配置对象的注释提取出来，并进行更详细的解释和说明。</p>
<p>这份配置文件用于高度自定义博客的横幅（Banner）区域，特别是在 &quot;Banner模式&quot; 布局下。</p>
<hr>
<h3 id="banner-配置项详细说明" tabindex="-1"><a class="header-anchor" href="#banner-配置项详细说明"><span><strong>Banner 配置项详细说明</strong></span></a></h3>
<h4 id="_1-核心图片配置-src" tabindex="-1"><a class="header-anchor" href="#_1-核心图片配置-src"><span><strong>1. 核心图片配置 (<code v-pre>src</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    desktop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/desktop-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> /* ... */</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 桌面端横幅图片数组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    mobile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/assets/mobile-banner/1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> /* ... */</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 移动端横幅图片数组</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 定义博客在桌面端和移动端分别使用的横幅背景图片。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>desktop</code>: 用于桌面显示器的图片路径数组。建议使用宽幅、高分辨率的图片（如 1920px 宽度以上）。</li>
<li><code v-pre>mobile</code>: 专门用于移动设备的图片路径数组。建议使用高度较小、更紧凑的图片（如 1080px 宽度），以避免在手机上显示时被过度裁剪。</li>
<li><strong>数组形式</strong>: 当任一设备类型（桌面/移动）的图片数组长度大于 1 时，系统会自动将其视为一个图片集，用于轮播或随机展示功能。</li>
<li><strong>图片格式</strong>: 示例中使用了 <code v-pre>.webp</code> 格式，这是一种现代的高效图片格式，能在保证画质的同时显著减小文件大小，提升加载速度。你也可以使用 <code v-pre>.jpg</code> 或 <code v-pre>.png</code>。</li>
</ul>
</li>
</ul>
<h4 id="_2-图片定位-position" tabindex="-1"><a class="header-anchor" href="#_2-图片定位-position"><span><strong>2. 图片定位 (<code v-pre>position</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 图片定位方式</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 当背景图片的尺寸与横幅容器的尺寸不匹配时，此选项决定了图片如何在容器内对齐。它直接映射到 CSS 的 <code v-pre>object-position</code> 属性。</li>
<li><strong>可选值</strong>:
<ul>
<li><code v-pre>top</code>: 图片顶部与容器顶部对齐。</li>
<li><code v-pre>center</code>: (默认) 图片在容器内水平和垂直方向都居中。</li>
<li><code v-pre>bottom</code>: 图片底部与容器底部对齐。</li>
</ul>
</li>
<li><strong>应用场景</strong>: 如果你有一张主体在下方的图片（如一个人物站在画面底部），你可能希望设置为 <code v-pre>bottom</code> 以确保主体不会被裁剪掉。</li>
</ul>
<h4 id="_3-轮播-随机展示设置-carousel" tabindex="-1"><a class="header-anchor" href="#_3-轮播-随机展示设置-carousel"><span><strong>3. 轮播/随机展示设置 (<code v-pre>carousel</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">carousel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 是否启用轮播</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    interval</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 轮播切换间隔（秒）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 当 <code v-pre>src</code> 中某个设备类型的图片数组长度大于 1 时，此配置项控制图片的展示方式。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>enable</code>:
<ul>
<li><code v-pre>true</code>: (默认) 启用自动轮播功能。图片会按照数组顺序，每隔一定时间自动切换。</li>
<li><code v-pre>false</code>: 不启用轮播。系统会从图片数组中<strong>随机选择一张</strong>进行展示。每次页面刷新或路由切换时，图片都可能会变化。</li>
</ul>
</li>
<li><code v-pre>interval</code>: 仅在 <code v-pre>enable: true</code> 时有效。定义了轮播切换的时间间隔，单位为秒（seconds）。例如，<code v-pre>1.5</code> 表示每 1.5 秒切换一张图片。</li>
</ul>
</li>
</ul>
<h4 id="_4-视觉效果-waves" tabindex="-1"><a class="header-anchor" href="#_4-视觉效果-waves"><span><strong>4. 视觉效果 (<code v-pre>waves</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">waves</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">          // 是否启用水波纹动画效果</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    performanceMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 是否启用性能模式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    mobileDisable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 是否在移动端禁用此效果</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 为横幅添加动态的、类似水波纹或光效的动画，增强视觉吸引力。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>enable</code>: 总开关，控制整个水波纹效果的启用与禁用。</li>
<li><code v-pre>performanceMode</code>:
<ul>
<li><code v-pre>false</code>: (默认) 完整效果模式，动画效果更丰富、更流畅，但对浏览器性能有一定消耗。</li>
<li><code v-pre>true</code>: 性能优先模式。通过降低动画的复杂度和帧率来减少 CPU/GPU 占用，可提升约 40% 的性能，适合在性能较弱的设备或浏览器上使用。</li>
</ul>
</li>
<li><code v-pre>mobileDisable</code>:
<ul>
<li><code v-pre>false</code>: (默认) 在移动端也显示水波纹效果。</li>
<li><code v-pre>true</code>: 在移动设备上自动禁用此效果，以节省移动设备的电量和性能。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="_5-智能图片api集成-imageapi" tabindex="-1"><a class="header-anchor" href="#_5-智能图片api集成-imageapi"><span><strong>5. 智能图片API集成 (<code v-pre>imageApi</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">imageApi</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 是否启用外部图片API</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://domain.com/api_v2.php?format=text&#x26;count=4</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // API请求地址</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 允许你通过调用一个外部 API 来动态获取横幅图片，而不是使用本地固定的图片文件。这对于实现图片自动更新（如每日一图）非常有用。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>enable</code>: 控制是否启用此功能。</li>
<li><code v-pre>url</code>: 外部图片 API 的请求地址。</li>
<li><strong>特别要求</strong>: 此配置<strong>仅支持</strong>一种特定的 API 返回格式，即 <strong><code v-pre>Text</code> 格式</strong>。API 必须返回一个纯文本字符串，其中每行包含一个图片的 URL 链接。</li>
<li><strong>示例</strong>: 如果 API 返回以下文本：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>https://example.com/image1.jpg</span></span>
<span class="line"><span>https://example.com/image2.jpg</span></span>
<span class="line"><span>https://example.com/image3.jpg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>系统会解析出这三个图片 URL，并将它们作为横幅图片列表使用。</li>
<li><strong>依赖项目</strong>: 文档中提到了一个名为 <strong>PicFlow-API</strong> 的项目作为示例。你需要自行搭建或寻找一个符合这种文本返回格式的 API 服务。注意是构建的时候随机构建出图片,不是实现动态图片!</li>
</ul>
</li>
</ul>
<h4 id="_6-主页文本内容-hometext" tabindex="-1"><a class="header-anchor" href="#_6-主页文本内容-hometext"><span><strong>6. 主页文本内容 (<code v-pre>homeText</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">homeText</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // 是否在主页横幅显示文本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">美しいミズキ</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 主标题文本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    subtitle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">          // 副标题文本数组</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">        "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">特別なことはないけど、君がいると十分です</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // ...更多句子</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    ],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    typewriter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // 打字机效果配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 是否启用打字机效果</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        speed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 打字速度（毫秒/字符）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        deleteSpeed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 50</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 删除速度（毫秒/字符）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        pauseTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2000</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 每句显示完成后的暂停时间（毫秒）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 在横幅图片上叠加显示自定义的标题和副标题文本，是表达博客主题和个性的重要部分。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>enable</code>: 控制是否在主页横幅上显示这些文本。</li>
<li><code v-pre>title</code>: 显示的主标题。通常是博客名称、博主昵称或一句核心Slogan。</li>
<li><code v-pre>subtitle</code>: 一个字符串数组，包含了多句副标题或描述。</li>
<li><code v-pre>typewriter</code>: (打字机效果)
<ul>
<li><code v-pre>enable</code>: 如果为 <code v-pre>true</code>，副标题会以打字机的效果逐字显示，然后逐字删除，再显示下一句。如果为 <code v-pre>false</code>，则直接显示所有副标题（或根据其他逻辑选择一句静态显示）。</li>
<li><code v-pre>speed</code>: 定义了打字机每秒打印多少个字符（字符/秒）。值越小，打字速度越快。</li>
<li><code v-pre>deleteSpeed</code>: 定义了打字机删除字符的速度。</li>
<li><code v-pre>pauseTime</code>: 当一句副标题完全显示后，在开始删除并切换到下一句之前，会暂停的时间长度（以毫秒为单位）。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="_7-图片版权信息-credit" tabindex="-1"><a class="header-anchor" href="#_7-图片版权信息-credit"><span><strong>7. 图片版权信息 (<code v-pre>credit</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">credit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 是否显示图片来源信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Describe</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 版权文本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 版权链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 用于在横幅的角落（通常是右下角）显示图片的版权信息、来源或艺术家署名，这是尊重知识产权的良好实践。</li>
<li><strong>详细解释</strong>:
<ul>
<li><code v-pre>enable</code>: 控制是否显示版权信息。</li>
<li><code v-pre>text</code>: 要显示的版权文本内容，例如 &quot;图片来源: Unsplash&quot; 或 &quot;Art by Artist Name&quot;。</li>
<li><code v-pre>url</code>: (可选) 如果提供了一个 URL，版权文本会变成一个可点击的链接，通常指向图片的原始出处或艺术家的个人页面。</li>
</ul>
</li>
</ul>
<h4 id="_8-导航栏融合-navbar" tabindex="-1"><a class="header-anchor" href="#_8-导航栏融合-navbar"><span><strong>8. 导航栏融合 (<code v-pre>navbar</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">navbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    transparentMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">semifull</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 导航栏透明模式</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制导航栏在 Banner 区域的显示样式，以实现导航栏与 Banner 图片的视觉融合效果。</li>
<li><strong>可选值</strong>:
<ul>
<li><code v-pre>semi</code>: 导航栏背景为半透明，并带有圆角边框，与 Banner 有一定的视觉分离感。</li>
<li><code v-pre>full</code>: 导航栏完全透明，只有文字和图标可见，与 Banner 图片完全融为一体。</li>
<li><code v-pre>semifull</code>: (可能是默认值) 一种动态混合模式。可能在页面顶部时是完全透明 (<code v-pre>full</code>)，当页面开始向下滚动时，逐渐变为半透明 (<code v-pre>semi</code>) 状态，以增强导航栏的可读性。具体行为需参考主题实现。</li>
</ul>
</li>
</ul>
<hr>
</div></template>


