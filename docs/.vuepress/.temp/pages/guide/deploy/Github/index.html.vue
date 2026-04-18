<template><div><h2 id="部署到-github-pages-不在推荐" tabindex="-1"><a class="header-anchor" href="#部署到-github-pages-不在推荐"><span>部署到 GitHub Pages(不在推荐)</span></a></h2>
<p>如果您希望将博客托管在 GitHub Pages 上，Mizuki 项目通常会包含一个 GitHub Actions 工作流，可以帮助您自动化部署过程。您需要确保在 <code v-pre>astro.config.mjs</code> 中配置正确的 <code v-pre>base</code> 路径。</p>
<h3 id="部署到-github-io-网址" tabindex="-1"><a class="header-anchor" href="#部署到-github-io-网址"><span>部署到 github.io 网址</span></a></h3>
<p>在 <code v-pre>astro.config.mjs</code> 中配置文件设置 <code v-pre>base</code> 选项。</p>
<div class="code-block-title" data-title="astro.config.mjs"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-js"/>astro.config.mjs</span></div><div class="language-astro.config.mjs line-numbers-mode" data-highlighter="shiki" data-ext="astro.config.mjs" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-astro.config.mjs"><span class="line"><span>import { defineConfig } from 'astro/config'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  base: 'my-repo',</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><strong>Base</strong></p>
<p><code v-pre>base</code> 的值应该是你的仓库名称，以正斜杠开头，例如 <code v-pre>/my-blog</code>。这样做是为了让 Astro 理解你的网站根目录是 <code v-pre>/my-repo</code>，而不是默认的 <code v-pre>/</code>。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>当配置了这个值后，你所有的内部页面链接都必须以你的 base 值作为前缀：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/my-repo/about</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">关于本站</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查看更多关于配置 <a href="https://docs.astro.build/zh-cn/reference/configuration-reference/#base" target="_blank" rel="noopener noreferrer"><code v-pre>base</code></a> 值的信息。</p>
</div>
<h2 id="部署到自定义域名" tabindex="-1"><a class="header-anchor" href="#部署到自定义域名"><span>部署到自定义域名</span></a></h2>
<p>你需要在<code v-pre>src/config.ts</code>中配置<code v-pre>site</code>为你的自定义域名。</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-ts"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">siteURL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://mizuki.mysqil.com/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div><p><strong>Site</strong></p>
<p><code v-pre>site</code> 的值必须是以下之一：</p>
<ul>
<li>基于你的用户名的以下网址: <code v-pre>https://&lt;username&gt;.github.io</code></li>
<li>为 GitHub 组织的私有页面 自动生成的随机网址：<code v-pre>https://&lt;random-string&gt;.pages.github.io/</code></li>
</ul>
<h3 id="在-github-pages-上使用自定义域名" tabindex="-1"><a class="header-anchor" href="#在-github-pages-上使用自定义域名"><span>在 GitHub Pages 上使用自定义域名</span></a></h3>
<VPCard title="设置一个自定义域" icon="twemoji:astonished-face"><pre><code>你可以选择通过将一个 ./public/CNAME 文件添加到你的项目中，来设置自定义域
这会将你的站点部署在你的自定义域而不是 &lt;YOUR_USERNAME&gt;.github.io。
不要忘记为你的域名提供商配置 DNS。
</code></pre>
</VPCard><div class="language-cname line-numbers-mode" data-highlighter="shiki" data-ext="cname" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cname"><span class="line"><span>sub.mydomain.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>要配置 Astro 以在 GitHub Pages 上使用自定义域名，请将你的域名设置为 site 的值。不要为 <code v-pre>base</code> 设置值：</p>
<div class="language-astro.config.mjs line-numbers-mode" data-highlighter="shiki" data-ext="astro.config.mjs" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-astro.config.mjs"><span class="line"><span>import { defineConfig } from 'astro/config'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    site: 'https://example.com',</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-github-action" tabindex="-1"><a class="header-anchor" href="#配置-github-action"><span>配置 GitHub Action</span></a></h3>
<div class="vp-steps"><ol>
<li>在你的项目中的 <code v-pre>.github/workflows/</code> 目录创建一个新文件 <code v-pre>deploy.yml</code>，并粘贴以下 YAML 配置信息。</li>
</ol>
<div class="language-deploy.yml line-numbers-mode" data-highlighter="shiki" data-ext="deploy.yml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-deploy.yml"><span class="line"><span>name: Deploy to GitHub Pages</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  # 每次推送到 `main` 分支时触发这个“工作流程”</span></span>
<span class="line"><span>  # 如果你使用了别的分支名，请按需将 `main` 替换成你的分支名</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [ main ]</span></span>
<span class="line"><span>  # 允许你在 GitHub 上的 Actions 标签中手动触发此“工作流程”</span></span>
<span class="line"><span>  workflow_dispatch:</span></span>
<span class="line"><span># 允许 job 克隆 repo 并创建一个 page deployment</span></span>
<span class="line"><span>permissions:</span></span>
<span class="line"><span>  contents: read</span></span>
<span class="line"><span>  pages: write</span></span>
<span class="line"><span>  id-token: write</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  build:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Checkout your repository using git</span></span>
<span class="line"><span>        uses: actions/checkout@v4</span></span>
<span class="line"><span>      - name: Install, build, and upload your site</span></span>
<span class="line"><span>        uses: withastro/action@v3</span></span>
<span class="line"><span>        # with:</span></span>
<span class="line"><span>          # path: . # 存储库中 Astro 项目的根位置。（可选）</span></span>
<span class="line"><span>          # node-version: 20 # 用于构建站点的特定 Node.js 版本，默认为 20。（可选）</span></span>
<span class="line"><span>          # package-manager: pnpm@latest # 应使用哪个 Node.js 包管理器来安装依赖项和构建站点。会根据存储库中的 lockfile 自动检测。（可选）</span></span>
<span class="line"><span>  deploy:</span></span>
<span class="line"><span>    needs: build</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      name: github-pages</span></span>
<span class="line"><span>      url: ${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Deploy to GitHub Pages</span></span>
<span class="line"><span>        id: deployment</span></span>
<span class="line"><span>        uses: actions/deploy-pages@v4</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>（可选）如果你在本地开发期间或预览构建期间，将环境变量传入给 Astro 项目，则需要定义 deploy.yml 文件中的任何公共变量，以便在部署到 Github 页面时处理它们。</li>
</ol>
<div class="language-deploy.yml line-numbers-mode" data-highlighter="shiki" data-ext="deploy.yml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-deploy.yml"><span class="line"><span>jobs:</span></span>
<span class="line"><span>   build:</span></span>
<span class="line"><span>     runs-on: ubuntu-latest</span></span>
<span class="line"><span>     steps:</span></span>
<span class="line"><span>       - name: Checkout your repository using git</span></span>
<span class="line"><span>         uses: actions/checkout@v4</span></span>
<span class="line"><span>       - name: Install, build, and upload your site</span></span>
<span class="line"><span>         uses: withastro/action@v3</span></span>
<span class="line"><span>         env:</span></span>
<span class="line"><span>           # 使用单引号来包裹变量值</span></span>
<span class="line"><span>           PUBLIC_EVM_WALLET_ADDRESS: '0x4bFc229A40d41698154336aFF864f61083E76659'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在 GitHub 上，跳转到存储库的 Settings 选项卡并找到设置的 Pages 部分。</li>
<li>选择 GitHub Actions 作为你网站的 Source，然后按 Save。
<strong>小tips:</strong> 提交前记得把workflows里的另外两个文件删了，不然action会报错喔OvO</li>
</ol>
</div><p>你的网站现在应该已完成发布了！当你将更改推送到 Astro 项目的存储库时，GitHub Action 将自动为你部署它们。</p>
</div></template>


