<template><div><p>Umami 是一个开源、注重隐私的网站分析工具，可以替代 Google Analytics。本教程将指导您如何在 Mizuki 主题中配置 Umami 统计功能。</p>
<p>注意：本教程适用于 Mizuki 8.2(1dcaa61) 或更高版本。</p>
<h2 id="什么是-umami" tabindex="-1"><a class="header-anchor" href="#什么是-umami"><span>什么是 Umami？</span></a></h2>
<p>Umami 是一个开源的网站分析工具，具有以下特点：</p>
<ul>
<li>开源且注重用户隐私</li>
<li>轻量级，不会影响网站性能</li>
<li>提供详细的访问统计信息</li>
<li>可自建服务或使用云服务</li>
</ul>
<h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<h3 id="_1-注册并创建-umami-账户" tabindex="-1"><a class="header-anchor" href="#_1-注册并创建-umami-账户"><span>1. 注册并创建 Umami 账户</span></a></h3>
<p>首先，您需要注册一个 Umami 账户：</p>
<ol>
<li>访问 <a href="https://umami.is/" target="_blank" rel="noopener noreferrer">Umami 官网</a> 或使用自建的 Umami 服务</li>
<li>注册账户并登录</li>
<li>创建一个新的网站，获取网站ID</li>
</ol>
<h3 id="_2-获取必要信息" tabindex="-1"><a class="header-anchor" href="#_2-获取必要信息"><span>2. 获取必要信息</span></a></h3>
<p>在 Umami 仪表板中，您需要获取以下信息：</p>
<ul>
<li><strong>umami统计分享链接</strong> (shareURL)</li>
<li><strong>跟踪脚本地址</strong> (Tracking Script URL)</li>
</ul>
<h3 id="_3-配置-astro-config-mjs" tabindex="-1"><a class="header-anchor" href="#_3-配置-astro-config-mjs"><span>3. 配置 astro.config.mjs</span></a></h3>
<p>打开 <code v-pre>astro.config.mjs</code> 文件，找到 <code v-pre>umami</code> 集成配置项：</p>
<div class="code-block-title" data-title="astro.config.mjs"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-js"/>astro.config.mjs</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> umami</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">oddmisc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  integrations</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    umami</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      shareUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">YOUR_SHARE_URL</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Umami 分享链接（见下方说明）如设置为 false 则禁用组件的umami访问量信息显示,不影响umami统计</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }),</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // ... 其他集成</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Umami Cloud 用户注意</p>
<p>如果您使用的是 <strong>Umami Cloud（官方托管服务）</strong>，请注意：</p>
<p>从仪表盘复制的分享链接格式通常为：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>https://cloud.umami.is/share/xxxxx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>不能直接使用此链接！</strong> 您需要：</p>
<ol>
<li>在浏览器中手动访问该分享链接</li>
<li>等待页面加载完成，浏览器会自动重定向到一个新的地址</li>
<li>复制浏览器地址栏中最终显示的链接（格式类似 <code v-pre>https://cloud.umami.is/analytics/us/share/xxxxxxxxx</code>,具体是us还是eu取决于你注册时选择的数据中心位置）</li>
<li>使用这个最终重定向后的链接作为 <code v-pre>shareUrl</code> 的值</li>
</ol>
</div>
<h3 id="_4-手动插入统计脚本到-layout-astro" tabindex="-1"><a class="header-anchor" href="#_4-手动插入统计脚本到-layout-astro"><span>4. 手动插入统计脚本到 Layout.astro</span></a></h3>
<p>打开 <code v-pre>src/layouts/Layout.astro</code> 文件，在 <code v-pre>&lt;head&gt;</code> 标签内添加 Umami 跟踪脚本：</p>
<div class="code-block-title" data-title="src/layouts/Layout.astro"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro"/>src/layouts/Layout.astro</span></div><div class="language-astro line-numbers-mode" data-highlighter="shiki" data-ext="astro" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-astro"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- Umami 统计脚本 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defer</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://analytics.umami.is/script.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> data-website-id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">your-website-id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- 其他 head 内容 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>如果您使用自建 Umami 服务，请替换为您的服务地址：</p>
<div class="language-astro line-numbers-mode" data-highlighter="shiki" data-ext="astro" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-astro"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defer</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://your-umami-instance.com/script.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> data-website-id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">your-website-id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-完整配置示例" tabindex="-1"><a class="header-anchor" href="#_5-完整配置示例"><span>5. 完整配置示例</span></a></h3>
<h4 id="astro-config-mjs" tabindex="-1"><a class="header-anchor" href="#astro-config-mjs"><span>astro.config.mjs</span></a></h4>
<div class="code-block-title" data-title="astro.config.mjs"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-js"/>astro.config.mjs</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> umami</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">oddmisc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  integrations</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    umami</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      shareUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://cloud.umami.is/analytics/us/share/pNrbzntfHm1jet1f</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }),</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // ... 其他集成</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="layout-astro" tabindex="-1"><a class="header-anchor" href="#layout-astro"><span>Layout.astro</span></a></h4>
<div class="code-block-title" data-title="src/layouts/Layout.astro"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro"/>src/layouts/Layout.astro</span></div><div class="language-astro line-numbers-mode" data-highlighter="shiki" data-ext="astro" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-astro"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- Umami 统计脚本 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defer</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://cloud.umami.is/script.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> data-website-id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">606672ff-6f67-4dc0-8006-bfc094539ecb</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  &#x3C;!-- 其他 head 内容 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_6-保存并重新构建" tabindex="-1"><a class="header-anchor" href="#_6-保存并重新构建"><span>6. 保存并重新构建</span></a></h3>
<ol>
<li>保存所有修改的文件</li>
<li>重新构建您的网站：<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>部署您的网站</li>
</ol>
<h2 id="验证配置" tabindex="-1"><a class="header-anchor" href="#验证配置"><span>验证配置</span></a></h2>
<p>配置完成后，您可以通过以下方式验证是否配置成功：</p>
<ol>
<li>访问您的网站</li>
<li>打开浏览器开发者工具</li>
<li>查看网络请求，确认是否有发送到 Umami 服务器的请求</li>
<li>在 Umami 仪表板中查看实时访问数据</li>
</ol>
<h2 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h2>
<p>如果配置后没有数据，请检查：</p>
<ol>
<li><strong>确认 shareUrl 配置正确</strong>（Umami Cloud 用户请确保使用重定向后的链接）</li>
<li><strong>检查跟踪脚本地址是否正确</strong></li>
<li><strong>查看浏览器控制台是否有错误信息</strong></li>
<li><strong>确认 Umami 服务是否正常运行</strong></li>
</ol>
<h2 id="隐私保护" tabindex="-1"><a class="header-anchor" href="#隐私保护"><span>隐私保护</span></a></h2>
<p>Umami 重视用户隐私，不会收集个人身份信息。您可以在您的隐私政策中添加 Umami 的使用说明，以确保透明度。</p>
</div></template>


