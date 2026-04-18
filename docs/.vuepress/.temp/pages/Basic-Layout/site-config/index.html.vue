<template><div><p><strong>站点配置说明</strong></p>
<p>站点配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>siteConfig</code> 对象，控制博客的基本信息和全局设置。</p>
<h2 id="配置项详解" tabindex="-1"><a class="header-anchor" href="#配置项详解"><span>配置项详解</span></a></h2>
<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h3>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">SITE_LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ja</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 语言代码，例如：'en', 'zh_CN', 'ja' 等。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">SITE_TIMEZONE</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> //设置你的网站时区 from -12 to 12 default in UTC+8</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">siteConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">SiteConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Mizuki</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	subtitle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">One demo website</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	siteURL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://mizuki.mysqil.com/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 请替换为你的站点URL，以斜杠结尾</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	siteStartDate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2025-01-01</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 站点开始运行日期，用于站点统计组件计算运行天数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	timeZone</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">SITE_TIMEZONE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">SITE_LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	themeColor</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		hue</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">60</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		fixed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 对访问者隐藏主题色选择器</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ul>
<li><code v-pre>siteStartDate</code>：站点开始运行日期，格式为 <code v-pre>YYYY-MM-DD</code>，用于站点统计组件计算运行天数</li>
<li><code v-pre>siteURL</code>：你的网站 URL，必须以斜杠结尾，例如 <code v-pre>https://example.com/</code></li>
<li><code v-pre>title</code>：网站的主标题，显示在浏览器标签页和页面头部</li>
<li><code v-pre>subtitle</code>：网站的副标题，通常显示在主页横幅下方</li>
<li><code v-pre>lang</code>：网站的默认语言，影响日期格式、翻译等功能</li>
<li><code v-pre>timeZone</code>：网站的时区设置，影响日期显示和时间计算</li>
<li><code v-pre>themeColor</code>：网站的主题色配置
<ul>
<li><code v-pre>hue</code>：主题色的色相值，可以是 0-360 之间的任何数值
<ul>
<li>红色: 0</li>
<li>青色: 200</li>
<li>蓝绿色: 250</li>
<li>粉色: 345</li>
</ul>
</li>
<li><code v-pre>fixed</code>：设置为 <code v-pre>true</code> 时，访客将无法更改主题色</li>
</ul>
</li>
</ul>
<h3 id="特色页面开关配置" tabindex="-1"><a class="header-anchor" href="#特色页面开关配置"><span>特色页面开关配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 特色页面开关配置(关闭不在使用的页面有助于提升SEO,关闭后直接在顶部导航删除对应的页面就行)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	featurePages</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 番剧页面开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		diary</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 日记页面开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		friends</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 友链页面开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		projects</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 项目页面开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		skills</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 技能页面开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		timeline</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 时间线页面开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		albums</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 相册页面开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		devices</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设备页面开关</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>featurePages</code>：控制特色页面的启用状态(关闭后系统会返回404状态码)
<ul>
<li><code v-pre>anime</code>：番剧页面</li>
<li><code v-pre>diary</code>：日记页面</li>
<li><code v-pre>friends</code>：友链页面</li>
<li><code v-pre>projects</code>：项目页面</li>
<li><code v-pre>skills</code>：技能页面</li>
<li><code v-pre>timeline</code>：时间线页面</li>
<li><code v-pre>albums</code>：相册页面</li>
<li><code v-pre>devices</code>：设备页面</li>
</ul>
</li>
</ul>
<h3 id="顶栏标题配置" tabindex="-1"><a class="header-anchor" href="#顶栏标题配置"><span>顶栏标题配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	// 顶栏标题配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	navbarTitle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 显示模式："text-icon" 显示图标+文本，"logo" 仅显示Logo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">logo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 顶栏标题文本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">MizukiUI</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 顶栏标题图标路径，默认使用 public/assets/home/home.png</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/home/home.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 网站Logo图片路径</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		logo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/home/default-logo.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>navbarTitle</code>：控制顶栏标题的显示
<ul>
<li><code v-pre>mode</code>：显示模式，<code v-pre>&quot;text-icon&quot;</code> 显示图标+文本，<code v-pre>&quot;logo&quot;</code> 仅显示Logo</li>
<li><code v-pre>text</code>：顶栏标题文本</li>
<li><code v-pre>icon</code>：顶栏标题图标路径，默认使用 <code v-pre>public/assets/home/home.png</code>
<ul>
<li>图标建议尺寸：32x32 像素，格式为 PNG 或 WebP</li>
</ul>
</li>
<li><code v-pre>logo</code>：网站Logo图片路径</li>
</ul>
</li>
</ul>
<h2 id="首页布局配置" tabindex="-1"><a class="header-anchor" href="#首页布局配置"><span>首页布局配置</span></a></h2>
<h3 id="文章区域布局配置" tabindex="-1"><a class="header-anchor" href="#文章区域布局配置"><span>文章区域布局配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	postListLayout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 默认布局模式："list" 列表模式（单列布局），"grid" 网格模式（双列布局）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 注意：如果侧边栏配置启用了"both"双侧边栏，则无法使用文章列表"grid"网格（双列）布局</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		defaultMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">list</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 是否允许用户切换布局</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		allowSwitch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 标签样式配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	tagStyle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 是否使用新样式（悬停高亮样式）还是旧样式（外框常亮样式）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		useNewStyle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>postListLayout</code>：控制首页布局的显示
<ul>
<li><code v-pre>defaultMode</code>：默认布局模式，<code v-pre>&quot;list&quot;</code> 列表模式（单列布局）或 <code v-pre>&quot;grid&quot;</code> 网格模式（双列布局）</li>
<li><code v-pre>allowSwitch</code>：是否允许用户切换布局</li>
</ul>
</li>
<li><code v-pre>tagStyle</code>：标签样式配置
<ul>
<li><code v-pre>useNewStyle</code>：是否使用新样式（悬停高亮样式）还是旧样式（外框常亮样式）</li>
</ul>
</li>
</ul>
<h3 id="整体布局配置" tabindex="-1"><a class="header-anchor" href="#整体布局配置"><span>整体布局配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 整体布局配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	wallpaperMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 默认壁纸模式：banner=顶部横幅，fullscreen=全屏壁纸，none=无壁纸</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		defaultMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">banner</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// 整体布局方案切换按钮显示设置（默认："desktop"）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// "off" = 不显示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// "mobile" = 仅在移动端显示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// "desktop" = 仅在桌面端显示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// "both" = 在所有设备上显示</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		showModeSwitchOnMobile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">desktop</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>wallpaperMode</code>：整体布局配置
<ul>
<li><code v-pre>defaultMode</code>：默认壁纸模式，<code v-pre>&quot;banner&quot;</code> 顶部横幅，<code v-pre>&quot;fullscreen&quot;</code> 全屏壁纸，<code v-pre>&quot;none&quot;</code> 无壁纸</li>
<li><code v-pre>showModeSwitchOnMobile</code>：整体布局方案切换按钮显示设置，<code v-pre>&quot;off&quot;</code> 不显示，<code v-pre>&quot;mobile&quot;</code> 仅在移动端显示，<code v-pre>&quot;desktop&quot;</code> 仅在桌面端显示，<code v-pre>&quot;both&quot;</code> 在所有设备上显示</li>
</ul>
</li>
</ul>
</div></template>


