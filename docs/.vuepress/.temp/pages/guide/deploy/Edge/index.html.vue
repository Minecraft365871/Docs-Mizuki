<template><div><p>EdgeOne Pages 是腾讯云提供的静态网站托管服务，支持自动部署，与 GitHub 集成良好，非常适合部署 Mizuki 博客。</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li>拥有一个 GitHub 账号</li>
<li>准备好你的 Mizuki 博客项目代码</li>
<li>注册腾讯云账号（如果还没有）</li>
</ol>
<h2 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤"><span>部署步骤</span></a></h2>
<h3 id="第一步-创建-github-仓库" tabindex="-1"><a class="header-anchor" href="#第一步-创建-github-仓库"><span>第一步：创建 GitHub 仓库</span></a></h3>
<ol>
<li>登录你的 <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> 账号</li>
<li>点击右上角的 &quot;+&quot; 号，选择 &quot;New repository&quot;</li>
<li>填写仓库名称（如：mizuki-blog）</li>
<li>选择公开（Public）或私有（Private）仓库</li>
<li>勾选 &quot;Add a README file&quot;（可选）</li>
<li>点击 &quot;Create repository&quot; 创建仓库</li>
<li>将你的 Mizuki 博客代码推送到这个仓库</li>
</ol>
<h3 id="第二步-配置-edgeone-pages" tabindex="-1"><a class="header-anchor" href="#第二步-配置-edgeone-pages"><span>第二步：配置 EdgeOne Pages</span></a></h3>
<ol>
<li>登录 <a href="https://console.cloud.tencent.com/" target="_blank" rel="noopener noreferrer">腾讯云控制台</a></li>
<li>在搜索框中输入 &quot;EdgeOne&quot;，点击进入 EdgeOne 产品页面</li>
<li>在左侧导航栏找到 &quot;EdgeOne Pages&quot; 并点击</li>
<li>点击 &quot;添加站点&quot; 或 &quot;新建应用&quot; 按钮</li>
</ol>
<h3 id="第三步-连接-github-仓库" tabindex="-1"><a class="header-anchor" href="#第三步-连接-github-仓库"><span>第三步：连接 GitHub 仓库</span></a></h3>
<ol>
<li>在部署设置页面，选择 &quot;GitHub&quot; 作为代码源</li>
<li>系统会跳转到 GitHub 授权页面，点击 &quot;Authorize&quot; 授权 EdgeOne 访问你的 GitHub 账号</li>
<li>返回 EdgeOne 页面后，从下拉列表中选择你刚刚创建的仓库</li>
<li>选择要部署的分支（通常是 main 或 master）</li>
</ol>
<h3 id="第四步-配置构建设置" tabindex="-1"><a class="header-anchor" href="#第四步-配置构建设置"><span>第四步：配置构建设置</span></a></h3>
<p>这是关键步骤，需要正确配置构建命令：</p>
<ol>
<li><strong>框架预设</strong>：选择 &quot;Astro&quot; 或 &quot;静态网站&quot;</li>
<li><strong>构建命令</strong>：修改为 <code v-pre>pnpm i &amp;&amp; pnpm build</code></li>
<li><strong>输出目录</strong>：设置为 <code v-pre>dist</code></li>
<li><strong>Node.js 版本</strong>：建议选择 18.x 或更高版本</li>
</ol>
<p>完成配置后，EdgeOne Pages 会自动开始构建你的网站。</p>
<h3 id="第五步-访问网站" tabindex="-1"><a class="header-anchor" href="#第五步-访问网站"><span>第五步：访问网站</span></a></h3>
<p>构建完成后，EdgeOne Pages 会提供一个默认的域名（通常是一个随机字符串加上 <code v-pre>.edgeone.pages.dev</code>）。你可以：</p>
<ol>
<li>使用这个默认域名访问你的网站</li>
<li>在域名设置中绑定自定义域名（可选）</li>
</ol>
<h2 id="重要提示" tabindex="-1"><a class="header-anchor" href="#重要提示"><span>重要提示</span></a></h2>
<h3 id="_1-构建命令配置" tabindex="-1"><a class="header-anchor" href="#_1-构建命令配置"><span>1. 构建命令配置</span></a></h3>
<p><strong>必须</strong>使用以下构建命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x26;&#x26;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意</strong>：不要使用默认的 <code v-pre>npm install</code> 或 <code v-pre>yarn install</code>，因为 Mizuki 项目使用 pnpm 作为包管理器。</p>
<h3 id="_2-构建失败排查" tabindex="-1"><a class="header-anchor" href="#_2-构建失败排查"><span>2. 构建失败排查</span></a></h3>
<p>如果构建失败，检查以下几点：</p>
<ol>
<li><strong>包管理器</strong>：确认使用了 <code v-pre>pnpm</code> 而不是 <code v-pre>npm</code> 或 <code v-pre>yarn</code></li>
<li><strong>Node.js 版本</strong>：使用 18.x 或更高版本</li>
<li><strong>构建输出</strong>：确认输出目录设置正确（<code v-pre>/dist</code>）</li>
<li><strong>依赖安装</strong>：检查 package.json 中的依赖是否完整</li>
</ol>
<h3 id="_3-自动部署" tabindex="-1"><a class="header-anchor" href="#_3-自动部署"><span>3. 自动部署</span></a></h3>
<p>EdgeOne Pages 会自动监听你的 GitHub 仓库变化：</p>
<ul>
<li>当你向仓库推送新代码时，EdgeOne 会自动触发构建</li>
<li>构建成功后，网站会自动更新</li>
<li>可以在 EdgeOne 控制台查看构建历史和日志</li>
</ul>
<h2 id="自定义域名-可选" tabindex="-1"><a class="header-anchor" href="#自定义域名-可选"><span>自定义域名（可选）</span></a></h2>
<p>如果你想使用自己的域名：</p>
<ol>
<li>在 EdgeOne Pages 控制台点击 &quot;域名设置&quot;</li>
<li>添加你的自定义域名（如：blog.yourdomain.com）</li>
<li>按照提示配置 DNS 记录</li>
<li>等待 SSL 证书自动颁发</li>
</ol>
<h2 id="优化建议" tabindex="-1"><a class="header-anchor" href="#优化建议"><span>优化建议</span></a></h2>
<ol>
<li><strong>启用缓存</strong>：在 EdgeOne 中开启适当的缓存策略，提高网站访问速度</li>
<li><strong>CDN 加速</strong>：EdgeOne 自带全球 CDN，无需额外配置</li>
<li><strong>压缩资源</strong>：EdgeOne 会自动压缩静态资源，无需手动配置</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>通过 EdgeOne Pages 部署 Mizuki 博客非常简单，只需要：</p>
<ol>
<li>创建 GitHub 仓库</li>
<li>在 EdgeOne 中连接仓库</li>
<li>配置正确的构建命令（<code v-pre>pnpm i &amp;&amp; pnpm build</code>）</li>
<li>等待自动部署完成</li>
</ol>
<p>整个过程通常只需要几分钟，而且完全免费，非常适合个人博客使用。</p>
</div></template>


