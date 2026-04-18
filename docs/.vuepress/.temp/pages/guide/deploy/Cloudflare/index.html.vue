<template><div><p>Cloudflare Pages 是一个优秀的静态网站托管平台，具有全球 CDN、自动部署和免费 SSL 证书等特性。本指南将详细介绍如何将 Mizuki (Astro项目) 部署到 Cloudflare Pages。</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li><strong>Git 仓库</strong>：确保您的 Mizuki 项目已上传到 GitHub、GitLab 或其他支持的 Git 平台</li>
<li><strong>Cloudflare 账号</strong>：注册一个免费的 Cloudflare 账号</li>
</ol>
<h2 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤"><span>部署步骤</span></a></h2>
<h3 id="_1-登录-cloudflare-pages" tabindex="-1"><a class="header-anchor" href="#_1-登录-cloudflare-pages"><span>1. 登录 Cloudflare Pages</span></a></h3>
<p>访问 <a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare Dashboard</a>，使用您的账号登录，然后选择 &quot;Pages&quot; 服务。</p>
<h3 id="_2-创建新项目" tabindex="-1"><a class="header-anchor" href="#_2-创建新项目"><span>2. 创建新项目</span></a></h3>
<ol>
<li>点击 &quot;Create a project&quot; 或 &quot;Connect to Git&quot; 按钮</li>
<li>选择您的 Git 提供商（GitHub、GitLab 等）并授权</li>
<li>从列表中选择您的 Mizuki 项目仓库</li>
</ol>
<h3 id="_3-配置构建设置" tabindex="-1"><a class="header-anchor" href="#_3-配置构建设置"><span>3. 配置构建设置</span></a></h3>
<p>在项目设置页面中，配置以下构建设置：</p>
<h4 id="基本设置" tabindex="-1"><a class="header-anchor" href="#基本设置"><span>基本设置</span></a></h4>
<ul>
<li><strong>Project name</strong>: 输入您的项目名称（如 <code v-pre>mizuki-blog</code>）</li>
<li><strong>Production branch</strong>: 设置主分支（通常为 <code v-pre>main</code> 或 <code v-pre>master</code>）</li>
</ul>
<h4 id="构建配置" tabindex="-1"><a class="header-anchor" href="#构建配置"><span>构建配置</span></a></h4>
<div class="code-block-title" data-title="Cloudflare Pages 构建设置"><div class="code-block-title-bar"><span class="title">Cloudflare Pages 构建设置</span></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 构建设置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Build command</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pnpm i &#x26;&#x26; pnpm build</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Build output directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dist</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Root directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="环境变量-可选" tabindex="-1"><a class="header-anchor" href="#环境变量-可选"><span>环境变量（可选）</span></a></h4>
<p>如果您的项目需要环境变量，可以在 &quot;Environment variables&quot; 部分添加：</p>
<table>
<thead>
<tr>
<th>变量名</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>NODE_VERSION</td>
<td>18</td>
<td>指定 Node.js 版本</td>
</tr>
<tr>
<td>PNPM_VERSION</td>
<td>8</td>
<td>指定 pnpm 版本</td>
</tr>
</tbody>
</table>
<h3 id="_4-部署项目" tabindex="-1"><a class="header-anchor" href="#_4-部署项目"><span>4. 部署项目</span></a></h3>
<p>配置完成后，点击 &quot;Save and Deploy&quot; 开始首次部署：</p>
<ol>
<li>Cloudflare Pages 会克隆您的仓库</li>
<li>安装依赖（<code v-pre>pnpm i</code>）</li>
<li>构建项目（<code v-pre>pnpm build</code>）</li>
<li>将 <code v-pre>dist</code> 目录部署到全球 CDN</li>
</ol>
<p>首次部署可能需要几分钟时间。</p>
<h3 id="_5-获取部署信息" tabindex="-1"><a class="header-anchor" href="#_5-获取部署信息"><span>5. 获取部署信息</span></a></h3>
<p>部署完成后，您将获得：</p>
<ul>
<li><strong>站点 URL</strong>：如 <code v-pre>https://mizuki-blog.pages.dev</code></li>
<li><strong>自动生成的 SSL 证书</strong></li>
<li><strong>全球 CDN 分发</strong></li>
</ul>
<h2 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h2>
<h3 id="自定义域名" tabindex="-1"><a class="header-anchor" href="#自定义域名"><span>自定义域名</span></a></h3>
<ol>
<li>在项目设置中，选择 &quot;Custom domains&quot;</li>
<li>添加您的域名（如 <code v-pre>blog.yourdomain.com</code>）</li>
<li>按照提示配置 DNS 记录</li>
<li>Cloudflare 会自动配置 SSL 证书</li>
</ol>
<h3 id="部署钩子" tabindex="-1"><a class="header-anchor" href="#部署钩子"><span>部署钩子</span></a></h3>
<p>如果需要触发部署，可以使用部署钩子：</p>
<ol>
<li>在项目设置中找到 &quot;Deploy hooks&quot;</li>
<li>创建新的部署钩子</li>
<li>保存生成的 URL，用于触发重新部署</li>
</ol>
<h3 id="预览部署" tabindex="-1"><a class="header-anchor" href="#预览部署"><span>预览部署</span></a></h3>
<p>每个推送的 PR 都会自动创建预览部署：</p>
<ul>
<li>URL 格式：<code v-pre>https://&lt;branch-name&gt;-&lt;project-name&gt;.pages.dev</code></li>
<li>可以用于预览更改，不影响生产环境</li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="q-构建失败怎么办" tabindex="-1"><a class="header-anchor" href="#q-构建失败怎么办"><span>Q: 构建失败怎么办？</span></a></h3>
<p>A: 检查以下几点：</p>
<ol>
<li>确保 <code v-pre>package.json</code> 中包含 <code v-pre>pnpm</code> 的构建脚本</li>
<li>检查 Node.js 版本是否兼容</li>
<li>查看构建日志中的错误信息</li>
<li>确保所有依赖已正确安装</li>
</ol>
<h3 id="q-如何使用自定义镜像源" tabindex="-1"><a class="header-anchor" href="#q-如何使用自定义镜像源"><span>Q: 如何使用自定义镜像源？</span></a></h3>
<p>A: 在根目录创建 <code v-pre>.npmrc</code> 文件：</p>
<div class="code-block-title" data-title=".npmrc"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-npm"/>.npmrc</span></div><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-ini"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">registry</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">https://registry.npmmirror.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div><h3 id="q-如何优化构建速度" tabindex="-1"><a class="header-anchor" href="#q-如何优化构建速度"><span>Q: 如何优化构建速度？</span></a></h3>
<p>A: 可以尝试以下方法：</p>
<ol>
<li>启用构建缓存</li>
<li>优化依赖安装，使用 <code v-pre>.npmrc</code> 配置</li>
<li>减少不必要的依赖</li>
</ol>
<h2 id="本地预览部署" tabindex="-1"><a class="header-anchor" href="#本地预览部署"><span>本地预览部署</span></a></h2>
<p>在部署前，您可以在本地预览构建结果：</p>
<div class="code-block-title" data-title="本地构建命令"><div class="code-block-title-bar"><span class="title">本地构建命令</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 构建项目</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 本地预览</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> preview</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>访问 <code v-pre>http://localhost:4321</code> 查看构建后的网站。</p>
<h2 id="ci-cd-集成" tabindex="-1"><a class="header-anchor" href="#ci-cd-集成"><span>CI/CD 集成</span></a></h2>
<p>Cloudflare Pages 支持自动部署，当您推送代码到指定分支时：</p>
<ol>
<li>自动触发构建流程</li>
<li>构建成功后自动更新网站</li>
<li>失败时发送通知</li>
</ol>
<p>您可以在项目设置中配置：</p>
<ul>
<li>部署分支</li>
<li>部署条件</li>
<li>失败时的操作</li>
</ul>
<h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2>
<h3 id="图片优化" tabindex="-1"><a class="header-anchor" href="#图片优化"><span>图片优化</span></a></h3>
<p>Cloudflare Pages 自动提供图片优化服务：</p>
<ul>
<li>自动转换格式（如 WebP）</li>
<li>根据设备调整尺寸</li>
<li>自动压缩</li>
</ul>
<h3 id="缓存策略" tabindex="-1"><a class="header-anchor" href="#缓存策略"><span>缓存策略</span></a></h3>
<p>默认缓存配置：</p>
<ul>
<li>HTML 文件：不缓存</li>
<li>静态资源（CSS、JS、图片）：长期缓存</li>
</ul>
<p>您可以在 <code v-pre>_headers</code> 文件中自定义缓存策略：</p>
<div class="code-block-title" data-title="public/_headers"><div class="code-block-title-bar"><span class="title">public/_headers</span></div><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-ini"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/cache-control/*</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Cache-Control: public, </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">max-age</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">31536000, immutable</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="监控与分析" tabindex="-1"><a class="header-anchor" href="#监控与分析"><span>监控与分析</span></a></h2>
<p>Cloudflare 提供内置的分析工具：</p>
<ol>
<li><strong>页面访问量</strong>：查看访问统计</li>
<li><strong>性能指标</strong>：监控加载速度</li>
<li><strong>安全分析</strong>：查看威胁检测</li>
</ol>
<p>访问 &quot;Analytics&quot; 部分查看详细数据。</p>
<h2 id="成本" tabindex="-1"><a class="header-anchor" href="#成本"><span>成本</span></a></h2>
<p>Cloudflare Pages 的免费计划包括：</p>
<ul>
<li>每月 500 次构建</li>
<li>无限静态请求</li>
<li>20,000 次服务器请求</li>
<li>全球 CDN 分发</li>
<li>免费 SSL 证书</li>
</ul>
<p>对于个人博客和小型网站，免费计划通常足够使用。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Cloudflare Pages 是部署 Mizuki (Astro项目) 的优秀选择，具有以下优势：</p>
<ul>
<li>🚀 部署简单，配置直观</li>
<li>🌍 全球 CDN，访问速度快</li>
<li>🔒 免费 SSL 证书</li>
<li>🔄 自动部署</li>
<li>📊 内置分析工具</li>
</ul>
<p>按照本指南操作，您应该能够成功将 Mizuki 博客部署到 Cloudflare Pages，享受快速、稳定的访问体验。</p>
</div></template>


