<template><div><p>MusicPlayer配置位于 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>musicPlayerConfig</code> 对象，控制博客的音乐播放器显示设置。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">musicPlayerConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">MusicPlayerConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 启用音乐播放器功能</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">meting</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 音乐播放器模式，可选 "local" 或 "meting"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	meting_api</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">		"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://www.bilibili.uno/api?server=:server&#x26;type=:type&#x26;id=:id&#x26;auth=:auth&#x26;r=:r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Meting API 地址</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">14164869977</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 歌单ID</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">netease</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 音乐源服务器。有的meting的api源支持更多平台,一般来说,netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">playlist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 播单类型</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>我们来详细解析 <code v-pre>src/config.ts</code> 文件中的 <code v-pre>musicPlayerConfig</code> 对象，并提供一份配置教程。</p>
<p>这个配置项用于在你的博客中集成一个音乐播放器，可以播放来自网易云音乐、QQ音乐等平台的在线音乐或本地音乐文件。</p>
<hr>
<h4 id="核心配置项详解" tabindex="-1"><a class="header-anchor" href="#核心配置项详解"><span><strong>核心配置项详解</strong></span></a></h4>
<h4 id="_1-启用播放器-enable" tabindex="-1"><a class="header-anchor" href="#_1-启用播放器-enable"><span><strong>1. 启用播放器 (<code v-pre>enable</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 控制整个音乐播放器功能的开关。</li>
<li><strong>配置</strong>:
<ul>
<li><code v-pre>true</code>: 启用音乐播放器，它将在博客上显示并可以播放音乐。</li>
<li><code v-pre>false</code>: 禁用音乐播放器，播放器将不会在页面上出现。</li>
</ul>
</li>
</ul>
<h4 id="_2-选择播放模式-mode" tabindex="-1"><a class="header-anchor" href="#_2-选择播放模式-mode"><span><strong>2. 选择播放模式 (<code v-pre>mode</code>)</strong></span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">meting</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 定义播放器的音乐来源模式。</li>
<li><strong>可选值</strong>:
<ul>
<li><code v-pre>&quot;meting&quot;</code>: (推荐) 使用 <strong>Meting API</strong> 来播放来自网易云、QQ音乐等主流音乐平台的在线音乐。这是最常用的模式，因为它无需你自己托管音乐文件。</li>
<li><code v-pre>&quot;local&quot;</code>: 使用你项目中的<strong>本地音乐文件</strong>。你需要将音乐文件放置在项目的 <code v-pre>public</code> 目录下，并通过后续配置指定文件路径。</li>
</ul>
</li>
</ul>
<h4 id="_3-配置-meting-api-模式-推荐" tabindex="-1"><a class="header-anchor" href="#_3-配置-meting-api-模式-推荐"><span><strong>3. 配置 Meting API 模式 (推荐)</strong></span></a></h4>
<p>当 <code v-pre>mode</code> 设置为 <code v-pre>&quot;meting&quot;</code> 时，以下配置项生效。</p>
<h5 id="a-meting-api-地址-meting-api" tabindex="-1"><a class="header-anchor" href="#a-meting-api-地址-meting-api"><span><strong>a. Meting API 地址 (<code v-pre>meting_api</code>)</strong></span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">meting_api</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://www.bilibili.uno/api?server=:server&#x26;type=:type&#x26;id=:id&#x26;auth=:auth&#x26;r=:r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 指定一个可用的 Meting API 服务地址。Meting API 是一个开源项目，它充当了你的博客和各大音乐平台之间的“桥梁”，允许你通过简单的API调用获取播放列表和音乐信息。</li>
<li><strong>配置</strong>:
<ul>
<li>你可以使用一些公开的 Meting API 服务（如示例中的 <code v-pre>bilibili.uno</code>），也可以在你自己的服务器上搭建一个。</li>
<li><strong>重要</strong>: 示例中的 API 地址可能随时失效。如果发现播放器无法加载，请自行寻找一个稳定的公开 API 或搭建自己的实例。搭建教程可以参考 <a href="https://github.com/metowolf/Meting" target="_blank" rel="noopener noreferrer">Meting 项目 GitHub 页面</a>。</li>
<li>URL 中的 <code v-pre>:server</code>, <code v-pre>:type</code>, <code v-pre>:id</code> 等是占位符，会被下面的配置自动替换，你无需修改它们。</li>
</ul>
</li>
</ul>
<h5 id="b-音乐源服务器-server" tabindex="-1"><a class="header-anchor" href="#b-音乐源服务器-server"><span><strong>b. 音乐源服务器 (<code v-pre>server</code>)</strong></span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">netease</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 指定你要播放的音乐来自哪个平台,<code v-pre>bilibili.uno</code> 是我提供给大家的公益API服务,我只测试了支持网易云音乐。</li>
<li><strong>常用可选值</strong>:
<ul>
<li><code v-pre>&quot;netease&quot;</code>: 网易云音乐</li>
<li><code v-pre>&quot;tencent&quot;</code>: QQ音乐</li>
<li><code v-pre>&quot;kugou&quot;</code>: 酷狗音乐</li>
<li><code v-pre>&quot;xiami&quot;</code>: 虾米音乐</li>
<li><code v-pre>&quot;baidu&quot;</code>: 百度音乐</li>
</ul>
</li>
<li>请确保你使用的 Meting API 服务支持你选择的 <code v-pre>server</code>。</li>
</ul>
<h5 id="c-歌单-歌曲-id-id" tabindex="-1"><a class="header-anchor" href="#c-歌单-歌曲-id-id"><span><strong>c. 歌单/歌曲 ID (<code v-pre>id</code>)</strong></span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">14164869977</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 这是你想要播放的<strong>歌单ID</strong>或<strong>单曲ID</strong>。</li>
<li><strong>如何获取 ID</strong>:
<ol>
<li>打开你喜欢的音乐平台（如网易云音乐）。</li>
<li>找到你想要分享的歌单或歌曲。</li>
<li>点击“分享”，选择“复制链接”。</li>
<li>链接中的数字串就是 ID。
<ul>
<li><strong>示例 (歌单)</strong>: <code v-pre>https://music.163.com/playlist?id=14164869977&amp;userid=125924154</code>，其中 <code v-pre>14164869977</code> 就是歌单 ID。</li>
<li><strong>示例 (单曲)</strong>: <code v-pre>https://music.163.com/song?id=19723756&amp;userid=125924154</code>，其中 <code v-pre>19723756</code> 就是歌曲 ID。</li>
</ul>
</li>
</ol>
</li>
</ul>
<h5 id="d-类型-type" tabindex="-1"><a class="header-anchor" href="#d-类型-type"><span><strong>d. 类型 (<code v-pre>type</code>)</strong></span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">playlist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>作用</strong>: 告诉 API 你提供的 <code v-pre>id</code> 是什么类型。</li>
<li><strong>可选值</strong>:
<ul>
<li><code v-pre>&quot;playlist&quot;</code>: 表示 <code v-pre>id</code> 是一个<strong>歌单</strong>的 ID。</li>
<li><code v-pre>&quot;song&quot;</code>: 表示 <code v-pre>id</code> 是一首<strong>单曲</strong>的 ID。</li>
<li><code v-pre>&quot;album&quot;</code>: 表示 <code v-pre>id</code> 是一个<strong>专辑</strong>的 ID。</li>
<li><code v-pre>&quot;artist&quot;</code>: 表示 <code v-pre>id</code> 是一个<strong>艺术家</strong>的 ID（通常会播放该艺术家的热门歌曲）。</li>
</ul>
</li>
</ul>
<h4 id="_4-配置-local-模式" tabindex="-1"><a class="header-anchor" href="#_4-配置-local-模式"><span><strong>4. 配置 Local 模式</strong></span></a></h4>
<p>当 <code v-pre>mode</code> 设置为 <code v-pre>&quot;local&quot;</code> 时，你需要提供一个本地音乐文件的列表。配置会有所不同，通常如下所示（具体字段请参考你使用的主题文档）：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 示例 (请以你的主题实际配置为准)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">local</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">local</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  songs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">歌曲标题1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      artist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">艺术家1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/music/song1.mp3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 相对于 public 文件夹的路径</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/music/cover1.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // (可选) 歌曲封面</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">歌曲标题2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      artist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">艺术家2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/music/song2.mp3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/music/cover2.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意</strong>: 使用 <code v-pre>local</code> 模式时，请确保你拥有所使用音乐文件的版权，并注意网站的带宽消耗。</li>
</ul>
<h6 id="本地模式配置说明" tabindex="-1"><a class="header-anchor" href="#本地模式配置说明"><span>本地模式配置说明</span></a></h6>
<p>本地配置文件位于<code v-pre>/src/components/widget/MusicPlayer.svelte</code>，你可以在其中添加或修改本地音乐文件的列表,请注意相对路径还是绝对路径的问题。</p>
<div class="code-block-title" data-title="src/components/widget/MusicPlayer.svelte"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-svelte"/>src/components/widget/MusicPlayer.svelte</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">localPlaylist</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ひとり上手</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		artist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Kaya</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/music/cover/hitori.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/music/url/hitori.mp3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">240</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">眩耀夜行</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		artist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">スリーズブーケ</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/music/cover/xryx.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/music/url/xryx.mp3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">180</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">春雷の頃</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		artist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">22/7</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/music/cover/cl.jpg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets/music/url/cl.mp3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">		duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">200</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>
<h3 id="快速配置步骤-以-meting-模式为例" tabindex="-1"><a class="header-anchor" href="#快速配置步骤-以-meting-模式为例"><span><strong>快速配置步骤 (以 Meting 模式为例)</strong></span></a></h3>
<ol>
<li>
<p><strong>找到你的歌单</strong>: 在网易云音乐中创建或找到一个你喜欢的歌单。</p>
</li>
<li>
<p><strong>复制歌单 ID</strong>: 从歌单分享链接中复制 <code v-pre>id</code> 部分。</p>
</li>
<li>
<p><strong>填写配置</strong>:</p>
<ul>
<li>将 <code v-pre>musicPlayerConfig.enable</code> 设置为 <code v-pre>true</code>。</li>
<li>确保 <code v-pre>mode</code> 为 <code v-pre>&quot;meting&quot;</code>。</li>
<li>填写一个可用的 <code v-pre>meting_api</code> 地址。</li>
<li>将 <code v-pre>server</code> 设置为 <code v-pre>&quot;netease&quot;</code> (如果你用的是网易云)。</li>
<li>将 <code v-pre>id</code> 设置为你刚刚复制的歌单 ID。</li>
<li>将 <code v-pre>type</code> 设置为 <code v-pre>&quot;playlist&quot;</code>。</li>
</ul>
<p><strong>示例配置好的样子：</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">musicPlayerConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">MusicPlayerConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	enable</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">meting</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	meting_api</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://some-stable-api.com/api?server=:server&#x26;type=:type&#x26;id=:id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 使用一个稳定的API</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">你的歌单ID</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,      </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// &#x3C;-- 替换成你的歌单ID</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">netease</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">playlist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>保存并测试</strong>: 保存 <code v-pre>config.ts</code> 文件，启动或重启你的博客项目，检查播放器是否正常显示并能播放音乐。</p>
</li>
</ol>
<hr>
<h3 id="更多的配置" tabindex="-1"><a class="header-anchor" href="#更多的配置"><span>更多的配置</span></a></h3>
<p>在播放器组件中，还有更多的状态变量可以根据需要进行调整和使用,依然位于<code v-pre>/src/components/widget/MusicPlayer.svelte</code>,这个是音乐播放器的核心源代码文件,适合高级用户使用!</p>
<div class="code-block-title" data-title="src/components/widget/MusicPlayer.svelte"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-svelte"/>src/components/widget/MusicPlayer.svelte</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">meting_type</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> musicPlayerConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">type</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ?? </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">playlist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">isPlaying</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">isExpanded</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">isHidden</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">showPlaylist</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">currentTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">volume</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.7</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">isMuted</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">isLoading</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">isShuffled</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">isRepeating</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">errorMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">showError</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">currentSong</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">示例歌曲</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	artist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">示例艺术家</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/favicon/favicon-light-192.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>我们来详细解析这些在 <code v-pre>MusicPlayer.svelte</code> 组件中定义的状态变量。</p>
<p>理解这些变量是<strong>自定义音乐播放器行为和外观</strong>的关键。它们控制着播放器的几乎所有动态 aspects，从播放状态到 UI 显示。</p>
<hr>
<h3 id="音乐播放器核心状态变量详解" tabindex="-1"><a class="header-anchor" href="#音乐播放器核心状态变量详解"><span><strong>音乐播放器核心状态变量详解</strong></span></a></h3>
<p>以下是对 <code v-pre>MusicPlayer.svelte</code> 文件中关键状态变量的详细说明。这些变量都是使用 Svelte 的 <code v-pre>let</code> 关键字声明的响应式变量。</p>
<h4 id="_1-基础播放状态" tabindex="-1"><a class="header-anchor" href="#_1-基础播放状态"><span><strong>1. 基础播放状态</strong></span></a></h4>
<ul>
<li>
<p><strong><code v-pre>isPlaying: boolean</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制音乐的播放与暂停。这是最核心的状态变量。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 音乐正在播放中。</li>
<li><code v-pre>false</code>: 音乐处于暂停或停止状态。</li>
</ul>
</li>
<li><strong>应用</strong>: 播放/暂停按钮的图标切换（例如，从 ▶️ 变为 ⏸️）、进度条的动画等都依赖此变量。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>currentTime: number</code></strong></p>
<ul>
<li><strong>作用</strong>: 记录当前播放歌曲的已播放时间，单位为<strong>秒</strong>。</li>
<li><strong>值</strong>: 一个浮点数，范围从 <code v-pre>0</code> 到当前歌曲的 <code v-pre>duration</code>。</li>
<li><strong>应用</strong>: 用于更新进度条的填充长度、在 UI 上显示当前播放时间（例如 <code v-pre>1:23</code>）。通常会通过 <code v-pre>audio</code> 元素的 <code v-pre>timeupdate</code> 事件实时更新。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>duration: number</code></strong></p>
<ul>
<li><strong>作用</strong>: 记录当前播放歌曲的总时长，单位为<strong>秒</strong>。</li>
<li><strong>值</strong>: 一个浮点数。在歌曲开始加载前，其值可能为 <code v-pre>0</code>。</li>
<li><strong>应用</strong>: 用于计算进度条的总长度、在 UI 上显示歌曲总时长（例如 <code v-pre>3:45</code>）。通常在 <code v-pre>audio</code> 元素的 <code v-pre>loadedmetadata</code> 事件中获取。</li>
</ul>
</li>
</ul>
<h4 id="_2-ui-界面控制" tabindex="-1"><a class="header-anchor" href="#_2-ui-界面控制"><span><strong>2. UI 界面控制</strong></span></a></h4>
<ul>
<li>
<p><strong><code v-pre>isExpanded: boolean</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制播放器 UI 的展开与收起状态。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 播放器展开，可能显示更多信息（如完整的播放列表、歌词、详细的歌曲信息）。</li>
<li><code v-pre>false</code>: 播放器收起，只显示最核心的控制按钮和进度条。</li>
</ul>
</li>
<li><strong>应用</strong>: 实现一个可折叠的播放器，点击展开/收起按钮时切换此变量。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>isHidden: boolean</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制整个播放器是否在页面上显示。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 播放器被隐藏（例如，通过 <code v-pre>display: none</code> 或从 DOM 中移除）。</li>
<li><code v-pre>false</code>: 播放器正常显示。</li>
</ul>
</li>
<li><strong>应用</strong>: 可以用于实现一个“隐藏播放器”的功能，比如点击一个按钮将播放器彻底隐藏起来以节省空间。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>showPlaylist: boolean</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制播放列表的显示与隐藏。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 显示播放列表。</li>
<li><code v-pre>false</code>: 隐藏播放列表。</li>
</ul>
</li>
<li><strong>应用</strong>: 点击“列表”图标时，切换此变量以显示或隐藏包含所有歌曲的下拉列表或侧边栏。</li>
</ul>
</li>
</ul>
<h4 id="_3-音频控制" tabindex="-1"><a class="header-anchor" href="#_3-音频控制"><span><strong>3. 音频控制</strong></span></a></h4>
<ul>
<li>
<p><strong><code v-pre>volume: number</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制播放器的音量大小。</li>
<li><strong>值</strong>: 一个浮点数，范围从 <code v-pre>0.0</code> (静音) 到 <code v-pre>1.0</code> (最大音量)。默认值为 <code v-pre>0.7</code> (70%)。</li>
<li><strong>应用</strong>: 绑定到一个音量滑块 (<code v-pre>&lt;input type=&quot;range&quot;&gt;</code>)，用户拖动滑块即可改变音量。它直接控制 <code v-pre>audio</code> 元素的 <code v-pre>volume</code> 属性。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>isMuted: boolean</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制播放器的静音状态。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 播放器处于静音状态。</li>
<li><code v-pre>false</code>: 播放器处于非静音状态。</li>
</ul>
</li>
<li><strong>应用</strong>: 绑定到一个静音按钮。点击时切换状态，并相应地设置 <code v-pre>audio</code> 元素的 <code v-pre>muted</code> 属性。<strong>注意</strong>：此状态独立于 <code v-pre>volume</code> 值，静音时只是暂时关闭声音输出，音量值本身不会改变。</li>
</ul>
</li>
</ul>
<h4 id="_4-播放模式控制" tabindex="-1"><a class="header-anchor" href="#_4-播放模式控制"><span><strong>4. 播放模式控制</strong></span></a></h4>
<ul>
<li>
<p><strong><code v-pre>isShuffled: boolean(更新中)</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制是否启用随机播放模式。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 启用随机播放。下一首歌曲将从播放列表中随机选择。</li>
<li><code v-pre>false</code>: 禁用随机播放。歌曲将按顺序播放。</li>
</ul>
</li>
<li><strong>应用</strong>: 绑定到一个“随机”或“ shuffle”按钮。点击时切换状态，并更新播放列表的下一曲逻辑。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>isRepeating: number</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制循环播放模式。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>0</code>: (默认) 不循环。播放列表播放完毕后停止。</li>
<li><code v-pre>1</code>: 单曲循环。当前歌曲播放完毕后，会自动重新开始播放。</li>
<li><code v-pre>2</code>: 列表循环。播放列表中的所有歌曲播放完毕后，会自动从头开始播放。</li>
</ul>
</li>
<li><strong>应用</strong>: 绑定到一个“循环”按钮。点击时可以在不同的循环模式间切换（例如 <code v-pre>0</code> -&gt; <code v-pre>1</code> -&gt; <code v-pre>2</code> -&gt; <code v-pre>0</code>...），并更新相应的播放逻辑。</li>
</ul>
</li>
</ul>
<h4 id="_5-数据与状态" tabindex="-1"><a class="header-anchor" href="#_5-数据与状态"><span><strong>5. 数据与状态</strong></span></a></h4>
<ul>
<li>
<p><strong><code v-pre>currentSong: object</code></strong></p>
<ul>
<li><strong>作用</strong>: 存储当前正在播放或即将播放的歌曲的详细信息。</li>
<li><strong>结构</strong>:<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 歌曲标题</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  artist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 艺术家/歌手名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 专辑封面图片的URL</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     // 歌曲音频文件的URL</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 歌曲时长（秒）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>应用</strong>: UI 上显示的歌曲标题、艺术家、封面图片等都来源于此对象。当切换歌曲时，此对象会被更新为新歌曲的信息。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>meting_type: string</code></strong></p>
<ul>
<li><strong>作用</strong>: 从全局配置中读取并存储当前播放列表的类型（如单曲、歌单、专辑）。</li>
<li><strong>值</strong>: 默认为 <code v-pre>&quot;playlist&quot;</code>，实际值来自 <code v-pre>musicPlayerConfig.type</code>。</li>
<li><strong>应用</strong>: 主要用于内部逻辑，特别是在与 Meting API 交互时，确保请求的是正确类型的资源。</li>
</ul>
</li>
</ul>
<h4 id="_6-加载与错误处理" tabindex="-1"><a class="header-anchor" href="#_6-加载与错误处理"><span><strong>6. 加载与错误处理</strong></span></a></h4>
<ul>
<li>
<p><strong><code v-pre>isLoading: boolean</code></strong></p>
<ul>
<li><strong>作用</strong>: 指示播放器是否正在加载歌曲数据或音频资源。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 正在加载中。</li>
<li><code v-pre>false</code>: 加载完成或未在加载。</li>
</ul>
</li>
<li><strong>应用</strong>: 显示加载指示器（如 spinner 或 &quot;加载中...&quot; 文本），提升用户体验。通常在开始请求歌曲信息或加载新音频时设为 <code v-pre>true</code>，在 <code v-pre>loadeddata</code> 或 <code v-pre>error</code> 事件中设为 <code v-pre>false</code>。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>errorMessage: string</code></strong></p>
<ul>
<li><strong>作用</strong>: 存储当播放器发生错误时的错误信息。</li>
<li><strong>值</strong>: 一个描述错误的字符串，默认为空。</li>
<li><strong>应用</strong>: 当发生错误（如网络错误、音频文件损坏）时，将错误信息存入此变量。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>showError: boolean</code></strong></p>
<ul>
<li><strong>作用</strong>: 控制是否在 UI 上显示错误信息。</li>
<li><strong>值</strong>:
<ul>
<li><code v-pre>true</code>: 显示错误信息。</li>
<li><code v-pre>false</code>: 隐藏错误信息。</li>
</ul>
</li>
<li><strong>应用</strong>: 与 <code v-pre>errorMessage</code> 配合使用。当 <code v-pre>showError</code> 为 <code v-pre>true</code> 时，在界面上某个位置显示 <code v-pre>errorMessage</code> 的内容，告知用户发生了什么问题。</li>
</ul>
</li>
</ul>
<hr>
<p>通过理解和操作这些状态变量，你可以完全掌控 <code v-pre>MusicPlayer.svelte</code> 组件的行为，实现你想要的任何自定义功能和界面效果。</p>
</div></template>


