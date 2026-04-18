<template><div><p>PicFlow API v2.0 是一个智能图片服务API，支持多种图片格式转换、设备自适应和外链模式。</p>
<h2 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h2>
<ul>
<li><strong>API版本</strong>: 2.0</li>
<li><strong>请求方式</strong>: GET</li>
<li><strong>响应格式</strong>: JSON (默认) / TEXT / 重定向</li>
<li><strong>字符编码</strong>: UTF-8</li>
</ul>
<h2 id="核心特性" tabindex="-1"><a class="header-anchor" href="#核心特性"><span>核心特性</span></a></h2>
<ul>
<li>🎯 <strong>智能格式检测</strong>: 根据用户浏览器自动选择最优图片格式 (AVIF/WebP/JPEG)</li>
<li>📱 <strong>设备自适应</strong>: 自动检测移动端/桌面端，返回对应尺寸图片</li>
<li>🔄 <strong>多格式支持</strong>: 支持 JPEG、WebP、AVIF 等现代图片格式</li>
<li>🌐 <strong>外链模式</strong>: 支持从外部链接获取图片</li>
<li>⚡ <strong>高性能</strong>: 只处理转换后的优化图片，提升响应速度</li>
</ul>
<h2 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址"><span>请求地址</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>GET /api_v2.php</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数"><span>请求参数</span></a></h2>
<h3 id="基础参数" tabindex="-1"><a class="header-anchor" href="#基础参数"><span>基础参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>count</code></td>
<td>int</td>
<td>1</td>
<td>返回图片数量，范围: 1-50</td>
</tr>
<tr>
<td><code v-pre>type</code></td>
<td>string</td>
<td>auto</td>
<td>设备类型: <code v-pre>pc</code>(桌面端) / <code v-pre>pe</code>(移动端) / auto(自动检测)</td>
</tr>
<tr>
<td><code v-pre>format</code></td>
<td>string</td>
<td>json</td>
<td>响应格式: <code v-pre>json</code> / <code v-pre>text</code> / <code v-pre>url</code></td>
</tr>
<tr>
<td><code v-pre>return</code></td>
<td>string</td>
<td>json</td>
<td>返回类型: <code v-pre>json</code> / <code v-pre>redirect</code>(直接重定向到图片)</td>
</tr>
</tbody>
</table>
<h3 id="图片格式参数" tabindex="-1"><a class="header-anchor" href="#图片格式参数"><span>图片格式参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>img_format</code></td>
<td>string</td>
<td>auto</td>
<td>图片格式: <code v-pre>auto</code>(智能选择) / <code v-pre>jpeg</code> / <code v-pre>webp</code> / <code v-pre>avif</code></td>
</tr>
</tbody>
</table>
<h3 id="外链模式参数" tabindex="-1"><a class="header-anchor" href="#外链模式参数"><span>外链模式参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>external</code></td>
<td>boolean</td>
<td>false</td>
<td>外链模式: <code v-pre>true</code> / <code v-pre>false</code> / <code v-pre>1</code> / <code v-pre>0</code></td>
</tr>
</tbody>
</table>
<h2 id="使用模式" tabindex="-1"><a class="header-anchor" href="#使用模式"><span>使用模式</span></a></h2>
<h3 id="_1-本地模式-默认" tabindex="-1"><a class="header-anchor" href="#_1-本地模式-默认"><span>1. 本地模式 (默认)</span></a></h3>
<p>本地模式从服务器的 <code v-pre>converted</code> 目录获取已转换的优化图片。</p>
<h4 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>converted/</span></span>
<span class="line"><span>├── pc/          # 桌面端图片</span></span>
<span class="line"><span>│   ├── jpeg/    # JPEG格式</span></span>
<span class="line"><span>│   ├── webp/    # WebP格式</span></span>
<span class="line"><span>│   └── avif/    # AVIF格式</span></span>
<span class="line"><span>└── pe/          # 移动端图片</span></span>
<span class="line"><span>    ├── jpeg/    # JPEG格式</span></span>
<span class="line"><span>    ├── webp/    # WebP格式</span></span>
<span class="line"><span>    └── avif/    # AVIF格式</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例"><span>请求示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 获取1张自动格式的图片</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 获取5张桌面端WebP格式图片</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?count=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">img_format</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">webp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 获取移动端图片并直接重定向</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?type=pe</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">return</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">redirect</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 获取AVIF格式图片</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?img_format=avif</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">count</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-外链模式" tabindex="-1"><a class="header-anchor" href="#_2-外链模式"><span>2. 外链模式</span></a></h3>
<p>外链模式从预配置的外部链接获取图片，适用于CDN或第三方图片服务。</p>
<h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h4>
<ul>
<li><code v-pre>pc.txt</code>: 桌面端图片链接列表</li>
<li><code v-pre>pe.txt</code>: 移动端图片链接列表</li>
</ul>
<p>每行一个图片URL，支持任何可访问的图片链接。</p>
<h4 id="请求示例-1" tabindex="-1"><a class="header-anchor" href="#请求示例-1"><span>请求示例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 启用外链模式获取图片</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?external=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 外链模式获取5张移动端图片</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?external=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pe</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">count</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 外链模式直接重定向</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?external=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">return</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">redirect</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应格式" tabindex="-1"><a class="header-anchor" href="#响应格式"><span>响应格式</span></a></h2>
<h3 id="json响应-默认" tabindex="-1"><a class="header-anchor" href="#json响应-默认"><span>JSON响应 (默认)</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">count</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">mode</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">random</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">total_available</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 150</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">timestamp</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1640995200</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">api_version</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">image_format</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">auto</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">return_type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">external_mode</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">detected_format</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">user_agent</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Mozilla/5.0...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">images</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">filename</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">image1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">path</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/path/to/converted/pc/webp/image1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">url</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://example.com/converted/pc/webp/image1.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">extension</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">size</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 45678</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">source</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">converted</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">format</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">filename</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">image2.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">path</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/path/to/converted/pc/webp/image2.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">url</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://example.com/converted/pc/webp/image2.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">extension</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">size</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 52341</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">source</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">converted</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">format</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外链模式响应" tabindex="-1"><a class="header-anchor" href="#外链模式响应"><span>外链模式响应</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">count</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">external_mode</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">images</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">filename</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">external_1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">path</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">url</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://cdn.example.com/image1.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">extension</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">external</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">size</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">external</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">format</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">external</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">converted</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">      "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">external_mode</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="text响应" tabindex="-1"><a class="header-anchor" href="#text响应"><span>TEXT响应</span></a></h3>
<p>当 <code v-pre>format=text</code> 或 <code v-pre>format=url</code> 时，返回纯文本格式：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>https://example.com/converted/pc/webp/image1.webp</span></span>
<span class="line"><span>https://example.com/converted/pc/webp/image2.webp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向响应" tabindex="-1"><a class="header-anchor" href="#重定向响应"><span>重定向响应</span></a></h3>
<p>当 <code v-pre>return=redirect</code> 且 <code v-pre>count=1</code> 时，直接重定向到图片URL：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>HTTP/1.1 302 Found</span></span>
<span class="line"><span>Location: https://example.com/converted/pc/webp/image1.webp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="智能格式检测" tabindex="-1"><a class="header-anchor" href="#智能格式检测"><span>智能格式检测</span></a></h2>
<p>API会根据用户的浏览器User-Agent自动检测支持的最优图片格式：</p>
<h3 id="支持的格式优先级" tabindex="-1"><a class="header-anchor" href="#支持的格式优先级"><span>支持的格式优先级</span></a></h3>
<ol>
<li>
<p><strong>AVIF</strong> - 最新格式，文件最小</p>
<ul>
<li>Chrome 85+</li>
<li>Firefox 93+</li>
</ul>
</li>
<li>
<p><strong>WebP</strong> - 广泛支持，优秀压缩</p>
<ul>
<li>Chrome (所有版本)</li>
<li>Firefox</li>
<li>Edge</li>
<li>Safari 14+</li>
</ul>
</li>
<li>
<p><strong>JPEG</strong> - 兜底格式，最佳兼容性</p>
<ul>
<li>所有浏览器</li>
</ul>
</li>
</ol>
<h3 id="格式检测示例" tabindex="-1"><a class="header-anchor" href="#格式检测示例"><span>格式检测示例</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 自动检测最优格式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?img_format=auto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 强制指定格式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">GET</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /api_v2.php?img_format=webp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h2>
<h3 id="错误响应格式" tabindex="-1"><a class="header-anchor" href="#错误响应格式"><span>错误响应格式</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">message</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">错误描述</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">count</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">images</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> []</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h3>
<table>
<thead>
<tr>
<th>错误信息</th>
<th>原因</th>
<th>解决方案</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>没有找到转换后的图片，请检查 converted 目录</code></td>
<td>converted目录为空或不存在</td>
<td>确保converted目录存在且包含图片文件</td>
</tr>
<tr>
<td><code v-pre>没有找到 webp 格式的图片</code></td>
<td>指定格式的图片不存在</td>
<td>检查对应格式目录是否有图片</td>
</tr>
<tr>
<td><code v-pre>外链文件不存在: pc.txt</code></td>
<td>外链模式配置文件缺失</td>
<td>创建对应的.txt配置文件</td>
</tr>
<tr>
<td><code v-pre>外链文件中没有有效的链接</code></td>
<td>配置文件为空或格式错误</td>
<td>检查.txt文件内容格式</td>
</tr>
</tbody>
</table>
<h2 id="性能优化建议" tabindex="-1"><a class="header-anchor" href="#性能优化建议"><span>性能优化建议</span></a></h2>
<h3 id="_1-图片预处理" tabindex="-1"><a class="header-anchor" href="#_1-图片预处理"><span>1. 图片预处理</span></a></h3>
<ul>
<li>提前将图片转换为多种格式 (JPEG/WebP/AVIF)</li>
<li>按设备类型优化图片尺寸</li>
<li>使用适当的压缩质量</li>
</ul>
<h3 id="_2-缓存策略" tabindex="-1"><a class="header-anchor" href="#_2-缓存策略"><span>2. 缓存策略</span></a></h3>
<ul>
<li>启用浏览器缓存</li>
<li>使用CDN加速图片分发</li>
<li>考虑服务端缓存API响应</li>
</ul>
<h3 id="_3-外链模式优化" tabindex="-1"><a class="header-anchor" href="#_3-外链模式优化"><span>3. 外链模式优化</span></a></h3>
<ul>
<li>使用高性能的图片CDN</li>
<li>定期检查外链有效性</li>
<li>合理配置链接数量</li>
</ul>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="javascript调用" tabindex="-1"><a class="header-anchor" href="#javascript调用"><span>JavaScript调用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 获取随机图片</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">fetch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/api_v2.php?count=5&#x26;img_format=webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">response</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> response</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">json</span><span style="--shiki-light:#999999;--shiki-dark:#666666">())</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">success</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">images</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">forEach</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">img</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">img</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      });</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 直接使用图片URL</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> imgUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/api_v2.php?return=redirect&#x26;img_format=auto</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getElementById</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">myImg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">).</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">src</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> imgUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php调用" tabindex="-1"><a class="header-anchor" href="#php调用"><span>PHP调用</span></a></h3>
<div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-php"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 获取API数据</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">response</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> file_get_contents</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://yoursite.com/api_v2.php?count=3&#x26;type=pc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> json_decode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">response</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">success</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">])</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    foreach</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> as</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">&#x3C;img src="</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> .</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">url</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> .</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">" alt="</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> .</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">filename</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> .</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"></span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html直接使用" tabindex="-1"><a class="header-anchor" href="#html直接使用"><span>HTML直接使用</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 直接重定向到图片 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">img</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/api_v2.php?return=redirect&#x26;img_format=webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> alt</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Random Image</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 背景图片 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">background-image: url('/api_v2.php?return=redirect&#x26;type=pc')</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本更新日志" tabindex="-1"><a class="header-anchor" href="#版本更新日志"><span>版本更新日志</span></a></h2>
<h3 id="v2-0" tabindex="-1"><a class="header-anchor" href="#v2-0"><span>v2.0</span></a></h3>
<ul>
<li>✨ 新增智能格式检测功能</li>
<li>✨ 支持AVIF格式</li>
<li>✨ 优化目录扫描逻辑，只处理converted目录</li>
<li>✨ 改进外链模式支持</li>
<li>🔧 移除original参数，专注转换后图片</li>
<li>🔧 优化错误提示信息</li>
<li>🔧 改进性能和响应速度</li>
</ul>
<h3 id="v1-x" tabindex="-1"><a class="header-anchor" href="#v1-x"><span>v1.x</span></a></h3>
<ul>
<li>基础图片API功能</li>
<li>支持JPEG和WebP格式</li>
<li>基本的设备检测</li>
</ul>
<h2 id="技术支持" tabindex="-1"><a class="header-anchor" href="#技术支持"><span>技术支持</span></a></h2>
<p>如有问题或建议，请联系技术支持团队。</p>
<hr>
<p><strong>PicFlow API v2.0</strong> - 让图片服务更智能、更高效！</p>
</div></template>


