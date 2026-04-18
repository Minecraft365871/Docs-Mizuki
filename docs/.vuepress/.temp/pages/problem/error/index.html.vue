<template><div><p>本页面收录了使用Mizuki主题时可能遇到的常见错误及其解决方法，帮助您快速定位并解决问题。</p>
<h2 id="页面404错误专题" tabindex="-1"><a class="header-anchor" href="#页面404错误专题"><span>页面404错误专题</span></a></h2>
<h3 id="q-为什么访问页面会显示404错误" tabindex="-1"><a class="header-anchor" href="#q-为什么访问页面会显示404错误"><span>Q: 为什么访问页面会显示404错误？</span></a></h3>
<p><strong>A:</strong> 404错误是最常见的问题之一，可能由以下多种原因导致：</p>
<h4 id="_1-部署环境配置问题" tabindex="-1"><a class="header-anchor" href="#_1-部署环境配置问题"><span>1. 部署环境配置问题</span></a></h4>
<ol>
<li>
<p><strong>Base路径配置错误</strong></p>
<ul>
<li>当部署到子目录时，必须正确设置 <code v-pre>base</code> 路径</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// astro.config.mjs</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 部署到 https://username.github.io/repo/ 需要设置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  base</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/repo/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 其他配置...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>GitHub Pages自动部署通常不需要设置base路径</li>
<li>自定义域名部署时，确保base设置为 <code v-pre>'/'</code></li>
</ul>
</li>
<li>
<p><strong>部署平台路由配置</strong></p>
<ul>
<li>某些平台需要额外配置路由规则</li>
<li>Vercel/Netlify通常自动处理，但有时需要自定义 <code v-pre>vercel.json</code> 或 <code v-pre>netlify.toml</code></li>
<li>GitHub Pages可能需要 <code v-pre>_config.yml</code> 配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># GitHub Pages _config.yml</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jekyll-sitemap</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">include</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> _redirects</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>适配器(Adapters)配置</strong></p>
<ul>
<li>确保使用了正确的Astro适配器</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// astro.config.mjs</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> vercel</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@astrojs/vercel/server</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  output</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">server</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  adapter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> vercel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 其他配置...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_2-本地开发环境问题" tabindex="-1"><a class="header-anchor" href="#_2-本地开发环境问题"><span>2. 本地开发环境问题</span></a></h4>
<ol>
<li>
<p><strong>文件路径问题</strong></p>
<ul>
<li>Astro路由基于文件系统，确保文件名和目录正确</li>
<li>动态路由需要正确的参数格式，如 <code v-pre>[slug].astro</code></li>
<li>确保文件扩展名为 <code v-pre>.astro</code>（而不是 <code v-pre>.md</code>）</li>
</ul>
</li>
<li>
<p><strong>路由冲突</strong></p>
<ul>
<li>检查是否有多个文件映射到同一路由</li>
<li>静态路由优先于动态路由</li>
<li>确保没有不正确的索引文件（如多个 <code v-pre>index.astro</code>）</li>
</ul>
</li>
</ol>
<h4 id="_3-构建和部署问题" tabindex="-1"><a class="header-anchor" href="#_3-构建和部署问题"><span>3. 构建和部署问题</span></a></h4>
<ol>
<li>
<p><strong>构建输出不完整</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 确保构建成功且没有错误</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 检查dist目录结构是否符合预期</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>检查 <code v-pre>dist</code> 目录是否包含所有必要文件</li>
<li>某些文件可能因构建错误而未被生成</li>
</ul>
</li>
<li>
<p><strong>服务器配置问题</strong></p>
<ul>
<li>服务器需要正确配置以处理Astro路由</li>
<li>对于SSR模式，确保服务器支持Node.js环境</li>
<li>对于SSG模式，确保所有静态资源可访问</li>
</ul>
</li>
<li>
<p><strong>缓存问题</strong></p>
<ul>
<li>浏览器缓存可能显示旧的错误页面</li>
<li>CDN缓存可能延迟更新</li>
<li>尝试强制刷新(Ctrl+F5)或清除缓存</li>
</ul>
</li>
</ol>
<h4 id="_4-特殊场景排查" tabindex="-1"><a class="header-anchor" href="#_4-特殊场景排查"><span>4. 特殊场景排查</span></a></h4>
<ol>
<li>
<p><strong>多语言站点</strong></p>
<ul>
<li>国际化路由需要正确配置</li>
<li>确保语言前缀路由正确映射到文件</li>
</ul>
</li>
<li>
<p><strong>自定义404页面</strong></p>
<ul>
<li>可以创建自定义404页面提升用户体验</li>
</ul>
<div class="language-astro line-numbers-mode" data-highlighter="shiki" data-ext="astro" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-astro"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">---</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// src/pages/404.astro</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">---</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">html</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">en</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">404 - 页面未找到</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">404 - 页面未找到</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">抱歉，您访问的页面不存在。</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>API路由问题</strong></p>
<ul>
<li>API路由可能与其他路由冲突</li>
<li>确保API路由位于正确的目录结构中</li>
</ul>
</li>
</ol>
<h3 id="q-如何系统性排查404错误" tabindex="-1"><a class="header-anchor" href="#q-如何系统性排查404错误"><span>Q: 如何系统性排查404错误？</span></a></h3>
<p><strong>A:</strong> 按以下步骤系统性排查：</p>
<ol>
<li>
<p><strong>本地环境测试</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清除构建缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重新构建</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 本地预览构建结果</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> preview</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>检查路由映射</strong></p>
<ul>
<li>使用Astro路由调试工具</li>
<li>检查是否有未预期的路由重写</li>
</ul>
</li>
<li>
<p><strong>审查部署日志</strong></p>
<ul>
<li>查看部署平台的构建日志</li>
<li>检查是否有错误或警告</li>
</ul>
</li>
<li>
<p><strong>验证文件结构</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 检查dist目录内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -la</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dist/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 确认关键文件存在</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dist/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">*.html</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> head</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -10</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>测试特定路由</strong></p>
<ul>
<li>尝试访问不同的路由，确定404是全局问题还是特定路由</li>
<li>检查子页面是否正常工作</li>
</ul>
</li>
</ol>
<h3 id="q-不同部署平台的404错误特殊处理" tabindex="-1"><a class="header-anchor" href="#q-不同部署平台的404错误特殊处理"><span>Q: 不同部署平台的404错误特殊处理</span></a></h3>
<p><strong>A:</strong> 各平台的特殊处理方式：</p>
<ol>
<li>
<p><strong>Vercel</strong></p>
<ul>
<li>通常自动处理路由，无需额外配置</li>
<li>对于SSG项目，确保 <code v-pre>vercel.json</code> 正确配置</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cleanUrls</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">trailingSlash</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Netlify</strong></p>
<ul>
<li>可能需要 <code v-pre>_redirects</code> 文件处理SPA路由</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>/*    /index.html   200</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>GitHub Pages</strong></p>
<ul>
<li>确保仓库设置正确</li>
<li>检查是否使用正确的分支(GitHub Actions部署时)</li>
<li>可能需要 <code v-pre>.nojekyll</code> 文件</li>
</ul>
</li>
<li>
<p><strong>Cloudflare Pages</strong></p>
<ul>
<li>检查构建设置是否正确</li>
<li>可能需要自定义 <code v-pre>_redirects</code> 文件</li>
</ul>
</li>
<li>
<p><strong>自托管服务器</strong></p>
<ul>
<li>确保服务器配置正确处理路由</li>
<li>Nginx/Apache需要适当的重写规则</li>
</ul>
</li>
</ol>
<h2 id="图片相关问题" tabindex="-1"><a class="header-anchor" href="#图片相关问题"><span>图片相关问题</span></a></h2>
<h3 id="q-为什么图片路径正确但无法显示" tabindex="-1"><a class="header-anchor" href="#q-为什么图片路径正确但无法显示"><span>Q: 为什么图片路径正确但无法显示？</span></a></h3>
<p><strong>A:</strong> 这是最常见的问题之一，通常由以下原因导致：</p>
<ol>
<li>
<p><strong>路径格式不正确</strong></p>
<ul>
<li><code v-pre>public</code> 目录下的图片应以 <code v-pre>/</code> 开头：<code v-pre>/images/example.jpg</code></li>
<li><code v-pre>src</code> 目录下的图片无需 <code v-pre>/</code> 开头：<code v-pre>src/assets/example.jpg</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 正确写法</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">images</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/diary/test.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // public目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 错误写法</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">images</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">images/diary/test.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 缺少开头斜杠</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>文件名大小写不匹配</strong></p>
<ul>
<li>服务器通常区分大小写，确保文件名与引用完全一致</li>
<li>建议：统一使用小写字母和连字符命名</li>
</ul>
</li>
<li>
<p><strong>文件扩展名错误</strong></p>
<ul>
<li>检查实际文件扩展名是否与引用一致</li>
<li>特别注意 <code v-pre>.jpeg</code> 和 <code v-pre>.jpg</code> 的区别</li>
</ul>
</li>
</ol>
<h3 id="q-图片在本地正常但部署后显示404" tabindex="-1"><a class="header-anchor" href="#q-图片在本地正常但部署后显示404"><span>Q: 图片在本地正常但部署后显示404？</span></a></h3>
<p><strong>A:</strong> 通常由部署环境配置问题导致：</p>
<ol>
<li>
<p><strong>静态资源未正确部署</strong></p>
<ul>
<li>确保 <code v-pre>public</code> 目录内容包含在部署包中</li>
<li>检查部署平台是否需要额外配置静态资源路径</li>
</ul>
</li>
<li>
<p><strong>部署后路径变化</strong></p>
<ul>
<li>部署到子目录时，可能需要修改 <code v-pre>base</code> 配置</li>
<li>某些平台会自动添加路径前缀</li>
</ul>
</li>
<li>
<p><strong>缓存问题</strong></p>
<ul>
<li>清除浏览器缓存后重试</li>
<li>检查部署平台是否有缓存设置</li>
</ul>
</li>
</ol>
<h2 id="markdown-渲染问题" tabindex="-1"><a class="header-anchor" href="#markdown-渲染问题"><span>Markdown 渲染问题</span></a></h2>
<h3 id="q-为什么自定义样式没有生效" tabindex="-1"><a class="header-anchor" href="#q-为什么自定义样式没有生效"><span>Q: 为什么自定义样式没有生效？</span></a></h3>
<p><strong>A:</strong> 检查以下几点：</p>
<ol>
<li>
<p><strong>样式文件位置</strong></p>
<ul>
<li>自定义CSS应放在 <code v-pre>src/styles/global.css</code> 或类似位置</li>
<li>确保在Astro布局文件中正确引入</li>
</ul>
</li>
<li>
<p><strong>样式优先级</strong></p>
<ul>
<li>主题样式可能覆盖自定义样式</li>
<li>使用更高优先级的选择器或 <code v-pre>!important</code>（谨慎使用）</li>
</ul>
</li>
<li>
<p><strong>构建后样式丢失</strong></p>
<ul>
<li>确保样式文件被正确导入到构建流程</li>
<li>检查样式文件语法是否有错误</li>
</ul>
</li>
</ol>
<h3 id="q-为什么数学公式不显示或显示异常" tabindex="-1"><a class="header-anchor" href="#q-为什么数学公式不显示或显示异常"><span>Q: 为什么数学公式不显示或显示异常？</span></a></h3>
<p><strong>A:</strong> 数学公式需要特殊配置：</p>
<ol>
<li>
<p><strong>缺少KaTeX依赖</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> katex</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> katex</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>配置问题</strong></p>
<ul>
<li>确保 <code v-pre>astro.config.mjs</code> 中启用了数学公式支持</li>
<li>检查Markdown中的公式语法是否正确</li>
</ul>
</li>
<li>
<p><strong>与代码块冲突</strong></p>
<ul>
<li>公式中的 <code v-pre>$</code> 符号可能与代码块语法冲突</li>
<li>尝试使用不同语法表示公式</li>
</ul>
</li>
</ol>
<h2 id="页面布局问题" tabindex="-1"><a class="header-anchor" href="#页面布局问题"><span>页面布局问题</span></a></h2>
<h3 id="q-为什么侧边栏不显示" tabindex="-1"><a class="header-anchor" href="#q-为什么侧边栏不显示"><span>Q: 为什么侧边栏不显示？</span></a></h3>
<p><strong>A:</strong> 侧边栏显示需要满足特定条件：</p>
<ol>
<li>
<p><strong>配置问题</strong></p>
<ul>
<li>检查 <code v-pre>src/config.ts</code> 和 <code v-pre>astro.config.mjs</code> 中的配置是否正确</li>
</ul>
</li>
<li>
<p><strong>文件路径不匹配</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- notes.ts 中配置 --></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">link: '/Basic-Layout/'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 文件中的 permalink --></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">permalink: '/Basic-Layout/site-config/' &#x3C;!-- 正确 --></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>目录结构问题</strong></p>
<ul>
<li>确保文件位于配置的目录中</li>
<li>检查文件名和目录名是否匹配配置</li>
</ul>
</li>
</ol>
<h3 id="q-为什么导航栏显示异常" tabindex="-1"><a class="header-anchor" href="#q-为什么导航栏显示异常"><span>Q: 为什么导航栏显示异常？</span></a></h3>
<p><strong>A:</strong> 导航栏配置常见问题：</p>
<ol>
<li>
<p><strong>图标未加载</strong></p>
<ul>
<li>确保使用了支持的图标集（如 <code v-pre>ri:</code> 图标集）</li>
<li>检查图标名称是否正确</li>
</ul>
</li>
<li>
<p><strong>链接失效</strong></p>
<ul>
<li>验证链接路径是否正确</li>
<li>相对路径需要与当前页面位置匹配</li>
</ul>
</li>
<li>
<p><strong>配置格式错误</strong></p>
<ul>
<li>检查配置文件中的语法是否正确</li>
<li>确保所有必要的引号和逗号都已添加</li>
</ul>
</li>
</ol>
<h2 id="构建与部署问题" tabindex="-1"><a class="header-anchor" href="#构建与部署问题"><span>构建与部署问题</span></a></h2>
<h3 id="q-为什么本地构建正常但部署后页面404" tabindex="-1"><a class="header-anchor" href="#q-为什么本地构建正常但部署后页面404"><span>Q: 为什么本地构建正常但部署后页面404？</span></a></h3>
<p><strong>A:</strong> 通常由以下原因导致：</p>
<ol>
<li>
<p><strong>Base路径配置</strong></p>
<ul>
<li>部署到子目录时，需要修改 <code v-pre>base</code> 配置</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 部署到 https://username.github.io/repo/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  base</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/repo/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 其他配置...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>路由模式问题</strong></p>
<ul>
<li>Astro需要适配器(Adapters)处理SSG/SSR路由</li>
<li>部署平台可能需要特殊配置（如 <code v-pre>_redirects</code> 文件）</li>
</ul>
</li>
<li>
<p><strong>资源路径问题</strong></p>
<ul>
<li>相对路径在部署环境中可能失效</li>
<li>使用绝对路径或动态路径配置</li>
</ul>
</li>
</ol>
<h3 id="q-为什么部署后样式丢失" tabindex="-1"><a class="header-anchor" href="#q-为什么部署后样式丢失"><span>Q: 为什么部署后样式丢失？</span></a></h3>
<p><strong>A:</strong> 常见原因及解决方案：</p>
<ol>
<li>
<p><strong>资源未正确部署</strong></p>
<ul>
<li>确保 <code v-pre>dist</code> 目录内容全部上传</li>
<li>检查服务器是否正确设置静态资源MIME类型</li>
</ul>
</li>
<li>
<p><strong>CDN或缓存问题</strong></p>
<ul>
<li>清除CDN缓存</li>
<li>禁用浏览器缓存进行测试</li>
</ul>
</li>
<li>
<p><strong>路径配置错误</strong></p>
<ul>
<li>检查 <code v-pre>base</code> 配置是否与部署路径匹配</li>
<li>确保资源使用正确的引用路径</li>
</ul>
</li>
</ol>
<h2 id="配置相关问题" tabindex="-1"><a class="header-anchor" href="#配置相关问题"><span>配置相关问题</span></a></h2>
<h3 id="q-为什么配置更改后不生效" tabindex="-1"><a class="header-anchor" href="#q-为什么配置更改后不生效"><span>Q: 为什么配置更改后不生效？</span></a></h3>
<p><strong>A:</strong> 检查以下几点：</p>
<ol>
<li>
<p><strong>配置文件位置</strong></p>
<ul>
<li>确保修改了正确的配置文件（通常是 <code v-pre>astro.config.mjs</code>）</li>
<li>有些配置可能在 <code v-pre>src/config.ts</code> 或其他文件中</li>
</ul>
</li>
<li>
<p><strong>开发服务器未重启</strong></p>
<ul>
<li>修改某些配置后需要重启开发服务器</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 停止当前服务器 (Ctrl+C)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 然后重新启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>配置语法错误</strong></p>
<ul>
<li>检查TypeScript语法是否正确</li>
<li>使用IDE检查配置文件是否有错误提示</li>
</ul>
</li>
</ol>
<h3 id="q-为什么主题选项不生效" tabindex="-1"><a class="header-anchor" href="#q-为什么主题选项不生效"><span>Q: 为什么主题选项不生效？</span></a></h3>
<p><strong>A:</strong> 主题配置常见问题：</p>
<ol>
<li>
<p><strong>配置层级错误</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 正确 (astro.config.mjs)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  integrations</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    mizuki</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 主题配置放在这里</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 错误</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 主题配置不应放在这里</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>配置版本不匹配</strong></p>
<ul>
<li>确保主题版本与配置文档匹配</li>
<li>新版本可能已弃用某些选项</li>
</ul>
</li>
<li>
<p><strong>配置被覆盖</strong></p>
<ul>
<li>检查是否有多个配置文件相互冲突</li>
<li>确认加载顺序是否正确</li>
</ul>
</li>
</ol>
<h2 id="性能问题" tabindex="-1"><a class="header-anchor" href="#性能问题"><span>性能问题</span></a></h2>
<h3 id="q-为什么网站加载速度很慢" tabindex="-1"><a class="header-anchor" href="#q-为什么网站加载速度很慢"><span>Q: 为什么网站加载速度很慢？</span></a></h3>
<p><strong>A:</strong> 优化建议：</p>
<ol>
<li>
<p><strong>大文件优化</strong></p>
<ul>
<li>压缩图片（使用WebP格式）</li>
<li>减少不必要的JavaScript和CSS</li>
</ul>
</li>
<li>
<p><strong>资源加载优化</strong></p>
<ul>
<li>启用Gzip压缩</li>
<li>配置适当的缓存策略</li>
</ul>
</li>
<li>
<p><strong>第三方资源</strong></p>
<ul>
<li>检查是否有加载缓慢的外部资源</li>
<li>考虑使用CDN加速</li>
</ul>
</li>
</ol>
<h3 id="q-为什么内存使用过高" tabindex="-1"><a class="header-anchor" href="#q-为什么内存使用过高"><span>Q: 为什么内存使用过高？</span></a></h3>
<p><strong>A:</strong> 常见原因及解决方案：</p>
<ol>
<li>
<p><strong>构建内存不足</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 增加Node.js内存限制</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> NODE_OPTIONS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">--max-old-space-size=4096</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>开发服务器内存泄漏</strong></p>
<ul>
<li>重启开发服务器</li>
<li>检查是否有未关闭的文件监听器</li>
</ul>
</li>
<li>
<p><strong>依赖问题</strong></p>
<ul>
<li>更新到最新版本的依赖</li>
<li>检查是否有已知内存泄漏的依赖</li>
</ul>
</li>
</ol>
<h2 id="浏览器兼容性问题" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性问题"><span>浏览器兼容性问题</span></a></h2>
<h3 id="q-为什么在safari上显示异常" tabindex="-1"><a class="header-anchor" href="#q-为什么在safari上显示异常"><span>Q: 为什么在Safari上显示异常？</span></a></h3>
<p><strong>A:</strong> Safari特定问题解决：</p>
<ol>
<li>
<p><strong>CSS前缀问题</strong></p>
<ul>
<li>添加适当的浏览器前缀</li>
<li>使用Autoprefixer自动处理</li>
</ul>
</li>
<li>
<p><strong>Flexbox或Grid布局问题</strong></p>
<ul>
<li>检查是否使用了Safari不完全支持的属性</li>
<li>添加回退方案</li>
</ul>
</li>
<li>
<p><strong>JavaScript兼容性</strong></p>
<ul>
<li>检查是否使用了Safari不支持的JavaScript API</li>
<li>考虑使用Polyfill</li>
</ul>
</li>
</ol>
<h2 id="提交问题时的建议" tabindex="-1"><a class="header-anchor" href="#提交问题时的建议"><span>提交问题时的建议</span></a></h2>
<p>如果您遇到本页面未涵盖的问题，建议按以下方式提交：</p>
<ol>
<li>
<p><strong>提供详细信息</strong></p>
<ul>
<li>操作系统、浏览器版本</li>
<li>Mizuki和依赖版本</li>
<li>完整的错误信息和重现步骤</li>
</ul>
</li>
<li>
<p><strong>提供最小复现示例</strong></p>
<ul>
<li>简化配置，仅保留导致问题的部分</li>
<li>提供相关代码片段</li>
</ul>
</li>
<li>
<p><strong>附上截图</strong></p>
<ul>
<li>对于UI问题，截图可以直观展示问题</li>
<li>标注关键区域或错误位置</li>
</ul>
</li>
</ol>
<hr>
<p>如果本页面未能解决您的问题，建议查阅<VPLink href="/problem/question/">提问的艺术</VPLink>了解如何更有效地寻求帮助。</p>
</div></template>


