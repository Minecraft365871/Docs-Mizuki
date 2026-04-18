<template><div><p>本地构建部署是一种灵活的方式，你可以在本地构建 Mizuki 博客，然后将生成的 dist 文件夹部署到你喜欢的任何平台。这种方式适合对构建过程有完全控制的用户。</p>
<h2 id="为什么选择本地构建" tabindex="-1"><a class="header-anchor" href="#为什么选择本地构建"><span>为什么选择本地构建？</span></a></h2>
<ol>
<li><strong>灵活性高</strong>：可以将构建结果部署到任何支持静态文件的托管平台</li>
<li><strong>控制力强</strong>：可以完全控制构建过程和结果</li>
<li><strong>节省构建时间</strong>：避免每次推送都重新构建</li>
<li><strong>离线工作</strong>：即使没有网络连接也能构建博客</li>
</ol>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li>安装 Node.js（推荐 18.x 或更高版本）</li>
<li>安装 pnpm 包管理器</li>
<li>克隆或拥有 Mizuki 博客源码</li>
</ol>
<h2 id="第一步-安装依赖" tabindex="-1"><a class="header-anchor" href="#第一步-安装依赖"><span>第一步：安装依赖</span></a></h2>
<p>在你的 Mizuki 项目根目录下运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="第二步-构建项目" tabindex="-1"><a class="header-anchor" href="#第二步-构建项目"><span>第二步：构建项目</span></a></h2>
<p>运行构建命令生成静态文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>构建完成后，你会在项目目录下看到 <code v-pre>dist</code> 文件夹，这个文件夹包含了所有需要部署的静态文件。Astro 会生成高度优化的静态文件，包括 HTML、CSS 和 JavaScript。</p>
<h2 id="第三步-预览构建结果" tabindex="-1"><a class="header-anchor" href="#第三步-预览构建结果"><span>第三步：预览构建结果</span></a></h2>
<p>在部署前，你可以本地预览构建结果：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> preview</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者使用任何静态文件服务器：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 使用 Python</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dist</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">python</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> http.server</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 使用 Node.js serve</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> serve</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dist</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 8080</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在浏览器中访问 <code v-pre>http://localhost:8080</code> 查看效果。</p>
<h2 id="第四步-部署到不同平台" tabindex="-1"><a class="header-anchor" href="#第四步-部署到不同平台"><span>第四步：部署到不同平台</span></a></h2>
<p>现在你可以将 <code v-pre>dist</code> 文件夹部署到各种平台。以下是几种常见平台的部署方法：</p>
<h3 id="方案一-传统虚拟主机" tabindex="-1"><a class="header-anchor" href="#方案一-传统虚拟主机"><span>方案一：传统虚拟主机</span></a></h3>
<p>大多数虚拟主机都支持 FTP/SFTP 上传文件：</p>
<ol>
<li>使用 FTP 客户端（如 FileZilla）连接你的虚拟主机</li>
<li>将 <code v-pre>dist</code> 文件夹中的所有文件上传到网站根目录</li>
<li>确保服务器有正确的 MIME 类型配置：
<ul>
<li><code v-pre>.html</code> → <code v-pre>text/html</code></li>
<li><code v-pre>.css</code> → <code v-pre>text/css</code></li>
<li><code v-pre>.js</code> → <code v-pre>application/javascript</code></li>
<li><code v-pre>.json</code> → <code v-pre>application/json</code></li>
</ul>
</li>
</ol>
<h3 id="方案二-对象存储-cdn" tabindex="-1"><a class="header-anchor" href="#方案二-对象存储-cdn"><span>方案二：对象存储 + CDN</span></a></h3>
<p>使用阿里云 OSS、腾讯云 COS 等对象存储服务：</p>
<h4 id="阿里云-oss" tabindex="-1"><a class="header-anchor" href="#阿里云-oss"><span>阿里云 OSS</span></a></h4>
<ol>
<li>登录阿里云控制台，创建 OSS 存储桶</li>
<li>开启静态网站托管功能</li>
<li>将 <code v-pre>dist</code> 文件夹中的所有文件上传到 OSS</li>
<li>配置 CDN 加速（可选）</li>
</ol>
<h4 id="腾讯云-cos" tabindex="-1"><a class="header-anchor" href="#腾讯云-cos"><span>腾讯云 COS</span></a></h4>
<ol>
<li>创建 COS 存储桶</li>
<li>开启静态网站功能</li>
<li>上传 <code v-pre>dist</code> 文件夹中的所有文件</li>
<li>配置自定义域名和 CDN</li>
</ol>
<h3 id="方案三-cdn-边缘平台" tabindex="-1"><a class="header-anchor" href="#方案三-cdn-边缘平台"><span>方案三：CDN 边缘平台</span></a></h3>
<p>使用又拍云、七牛云等 CDN 服务：</p>
<h4 id="又拍云" tabindex="-1"><a class="header-anchor" href="#又拍云"><span>又拍云</span></a></h4>
<ol>
<li>注册又拍云账号，创建云存储服务</li>
<li>开启 CDN 加速</li>
<li>使用又拍云官方工具上传：<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> upx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">upx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> login</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your-operator</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your-password</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">upx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dist</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /your-bucket-name/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="方案四-个人-nas" tabindex="-1"><a class="header-anchor" href="#方案四-个人-nas"><span>方案四：个人 NAS</span></a></h3>
<p>如果你有 NAS 设备（如群晖、威联通）：</p>
<ol>
<li>登录 NAS 管理界面</li>
<li>创建 Web Station 或类似服务</li>
<li>将 <code v-pre>dist</code> 文件夹复制到 Web 目录</li>
<li>配置端口和访问权限</li>
</ol>
<h3 id="方案五-vps-简单部署" tabindex="-1"><a class="header-anchor" href="#方案五-vps-简单部署"><span>方案五：VPS 简单部署</span></a></h3>
<p>在 VPS 上简单部署（不需要复杂配置）：</p>
<ol>
<li>安装 Nginx 或 Apache</li>
<li>创建网站目录</li>
<li>上传 <code v-pre>dist</code> 文件夹内容</li>
<li>配置简单的 Web 服务器：</li>
</ol>
<div class="code-block-title" data-title="nginx.conf"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-config"/>nginx.conf</span></div><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-nginx"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">80</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">your-domain.com</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    root </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/path/to/dist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    index </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">index.html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> / </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        try_files </span><span style="--shiki-light:#999999;--shiki-dark:#666666">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">uri</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">uri</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/ /index.html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="高级技巧" tabindex="-1"><a class="header-anchor" href="#高级技巧"><span>高级技巧</span></a></h2>
<h3 id="自动化构建脚本" tabindex="-1"><a class="header-anchor" href="#自动化构建脚本"><span>自动化构建脚本</span></a></h3>
<p>创建一个自动化脚本来简化部署过程：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># build-and-deploy.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">开始构建 Mizuki 博客...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">构建完成！</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dist 文件夹位置：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">$(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pwd</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/dist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 根据你的部署方式取消注释相应部分</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># FTP 部署（需要安装 lftp）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># lftp -u username,password -e "mirror -R dist /remote/path" ftp.example.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># SCP 部署</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># scp -r dist/* user@server:/path/to/website/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># AWS S3 部署（需要安装 AWS CLI）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># aws s3 sync dist s3://your-bucket-name --delete</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">部署脚本执行完成！</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chmod</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build-and-deploy.sh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./build-and-deploy.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化构建结果" tabindex="-1"><a class="header-anchor" href="#优化构建结果"><span>优化构建结果</span></a></h3>
<p>在 <code v-pre>astro.config.mjs</code> 中添加优化配置：</p>
<div class="code-block-title" data-title="astro.config.mjs"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-js"/>astro.config.mjs</span></div><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">astro/config</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...其他配置</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 启用压缩优化</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 启用压缩</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    minify</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">terser</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 优化图片</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    vite</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        rollupOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">          output</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            manualChunks</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">              vendor</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">astro</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@astrojs/vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">              ui</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="多环境部署" tabindex="-1"><a class="header-anchor" href="#多环境部署"><span>多环境部署</span></a></h3>
<p>为不同环境创建不同的构建命令：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">scripts</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">build</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">astro build</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">build:prod</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">NODE_ENV=production astro build</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">build:dev</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">NODE_ENV=development astro build</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">preview</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">astro preview</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">dev</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">astro dev</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="q-构建后图片不显示" tabindex="-1"><a class="header-anchor" href="#q-构建后图片不显示"><span>Q: 构建后图片不显示</span></a></h3>
<p>A: 检查图片路径是否正确，确保图片文件位于正确的目录中，并且在 Markdown 中使用相对路径引用。</p>
<h3 id="q-部署后页面-404" tabindex="-1"><a class="header-anchor" href="#q-部署后页面-404"><span>Q: 部署后页面 404</span></a></h3>
<p>A: 配置 Web 服务器的重写规则，将所有路由指向 index.html。Nginx 的配置示例在上方已提供。</p>
<h3 id="q-如何处理多语言部署" tabindex="-1"><a class="header-anchor" href="#q-如何处理多语言部署"><span>Q: 如何处理多语言部署</span></a></h3>
<p>A: 构建后的文件结构会保持多语言目录，确保 Web 服务器正确处理路径。</p>
<h3 id="q-如何添加自定义域名" tabindex="-1"><a class="header-anchor" href="#q-如何添加自定义域名"><span>Q: 如何添加自定义域名</span></a></h3>
<p>A: 这取决于你使用的平台。大多数平台都提供域名绑定功能，在平台控制台中查找相关设置。</p>
<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<ol>
<li><strong>定期备份</strong>：保留最新的构建结果和源代码</li>
<li><strong>使用版本控制</strong>：即使使用本地构建，也应该将源码托管在 Git 仓库中</li>
<li><strong>性能监控</strong>：使用 Google PageSpeed Insights 等工具监控网站性能</li>
<li><strong>SEO 优化</strong>：确保所有页面都有正确的 meta 标签和结构化数据</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>本地构建部署提供了最大的灵活性和控制力，适合：</p>
<ul>
<li>需要将博客部署到特殊平台的用户</li>
<li>对构建过程有定制需求的开发者</li>
<li>希望减少依赖，简化部署流程的用户</li>
</ul>
<p>通过这种方式，你可以将 Mizuki 博客部署到任何支持静态文件的平台，同时保持对整个过程的完全控制。</p>
</div></template>


