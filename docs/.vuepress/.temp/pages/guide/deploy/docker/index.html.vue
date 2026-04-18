<template><div><p>使用 Docker 部署 Mizuki 博客可以实现环境隔离、快速部署和轻松扩展。本文将详细介绍如何使用 Docker 容器化并部署 Mizuki 博客。</p>
<h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2>
<p>开始之前，请确保您已准备好以下环境：</p>
<ol>
<li>已安装 Docker（推荐使用最新稳定版）</li>
<li>已安装 pnpm（Mizuki 使用的包管理器）</li>
<li>基本的 Linux 命令行知识</li>
</ol>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<h3 id="_1-安装-docker" tabindex="-1"><a class="header-anchor" href="#_1-安装-docker"><span>1. 安装 Docker</span></a></h3>
<p>在 Ubuntu/Debian 系统上安装 Docker：</p>
<div class="code-block-title" data-title="安装 Docker"><div class="code-block-title-bar"><span class="title">安装 Docker</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker.io</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>安装完成后，确保 Docker 服务已启动：</p>
<div class="code-block-title" data-title="启动 Docker 服务"><div class="code-block-title-bar"><span class="title">启动 Docker 服务</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_2-准备项目文件" tabindex="-1"><a class="header-anchor" href="#_2-准备项目文件"><span>2. 准备项目文件</span></a></h3>
<p>将 Mizuki 项目克隆到本地：</p>
<div class="code-block-title" data-title="克隆项目"><div class="code-block-title-bar"><span class="title">克隆项目</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/matsuzaka-yuki/Mizuki.git</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Mizuki</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="创建-docker-配置文件" tabindex="-1"><a class="header-anchor" href="#创建-docker-配置文件"><span>创建 Docker 配置文件</span></a></h2>
<h3 id="_1-创建-dockerignore-文件" tabindex="-1"><a class="header-anchor" href="#_1-创建-dockerignore-文件"><span>1. 创建 .dockerignore 文件</span></a></h3>
<p><code v-pre>.dockerignore</code> 文件用于指定在构建 Docker 镜像时需要忽略的文件和目录，这样可以减小镜像体积并提高构建速度。</p>
<p>在项目根目录创建 <code v-pre>.dockerignore</code> 文件：</p>
<div class="code-block-title" data-title=".dockerignore"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-docker"/>.dockerignore</span></div><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>.git</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>dist</span></span>
<span class="line"><span>.gitignore</span></span>
<span class="line"><span>Dockerfile</span></span>
<span class="line"><span>.dockerignore</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span>.github</span></span>
<span class="line"><span>docs</span></span>
<span class="line"><span>scripts</span></span>
<span class="line"><span>.astro</span></span>
<span class="line"><span>frontmatter.json</span></span>
<span class="line"><span>pagefind.yml</span></span>
<span class="line"><span>vercel.json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_2-创建-dockerfile" tabindex="-1"><a class="header-anchor" href="#_2-创建-dockerfile"><span>2. 创建 Dockerfile</span></a></h3>
<p><code v-pre>Dockerfile</code> 定义了如何构建 Docker 镜像。在项目根目录创建 <code v-pre>Dockerfile</code> 文件：</p>
<div class="code-block-title" data-title="Dockerfile"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-docker"/>Dockerfile</span></div><div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-dockerfile"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 使用 Node.js 官方镜像作为基础镜像</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">FROM</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> node:20-alpine </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">AS</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 设置工作目录</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">WORKDIR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 复制 package.json 和 pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> package.json pnpm-lock.yaml ./</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装 pnpm</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> npm install -g pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 复制项目文件</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 构建项目 - 添加容错处理</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> pnpm run build || pnpm exec astro build &#x26;&#x26; pnpm exec pagefind --site dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 使用 nginx 作为运行时镜像</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">FROM</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> nginx:alpine</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 复制构建结果到 nginx 的 html 目录</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> --from=builder /app/dist /usr/share/nginx/html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 设置文件权限</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> chmod -R 755 /usr/share/nginx/html/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> chown -R nginx:nginx /usr/share/nginx/html/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 复制自定义 nginx 配置</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> nginx.conf /etc/nginx/conf.d/default.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 暴露端口 80</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">EXPOSE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 启动 nginx</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CMD</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"nginx"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"-g"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"daemon off;"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_3-创建-nginx-conf" tabindex="-1"><a class="header-anchor" href="#_3-创建-nginx-conf"><span>3. 创建 nginx.conf</span></a></h3>
<p><code v-pre>nginx.conf</code> 文件用于配置 Nginx 服务器。在项目根目录创建 <code v-pre>nginx.conf</code> 文件：</p>
<div class="code-block-title" data-title="nginx.conf"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-config"/>nginx.conf</span></div><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-nginx"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">80</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">localhost</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    root </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/usr/share/nginx/html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    index </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">index.html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 支持前端路由</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> / </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        try_files </span><span style="--shiki-light:#999999;--shiki-dark:#666666">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">uri</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">uri</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/ /index.html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 静态资源缓存</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ~*</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F"> \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        expires </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1y</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        add_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Cache-Control </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"public, immutable"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="构建-docker-镜像" tabindex="-1"><a class="header-anchor" href="#构建-docker-镜像"><span>构建 Docker 镜像</span></a></h2>
<p>完成上述配置后，使用以下命令构建 Docker 镜像：</p>
<div class="code-block-title" data-title="构建镜像"><div class="code-block-title-bar"><span class="title">构建镜像</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li><code v-pre>-t mizuki-blog</code>：为构建的镜像添加标签，命名为 mizuki-blog</li>
<li><code v-pre>.</code>：表示使用当前目录作为构建上下文</li>
</ul>
</div>
<h2 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器"><span>运行容器</span></a></h2>
<p>使用以下命令运行容器：</p>
<div class="code-block-title" data-title="运行容器"><div class="code-block-title-bar"><span class="title">运行容器</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 5090:80</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li><code v-pre>-d</code>：在后台运行容器</li>
<li><code v-pre>--name mizuki-blog</code>：为容器指定名称</li>
<li><code v-pre>-p 5090:80</code>：将主机的 5090 端口映射到容器的 80 端口</li>
</ul>
</div>
<h2 id="访问应用" tabindex="-1"><a class="header-anchor" href="#访问应用"><span>访问应用</span></a></h2>
<p>容器启动成功后，可以通过以下地址访问博客应用：</p>
<ul>
<li>本地访问：<code v-pre>http://localhost:5090</code></li>
<li>远程访问：<code v-pre>http://服务器IP地址:5090</code></li>
</ul>
<h2 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理"><span>容器管理</span></a></h2>
<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3>
<Tabs id="145" :data='[]'>
<a class="header-anchor" href="#查看容器状态"><span>查看容器状态</span></a><a class="header-anchor" href="#启动-停止容器"><span>启动/停止容器</span></a><a class="header-anchor" href="#查看日志"><span>查看日志</span></a><a class="header-anchor" href="#删除容器"><span>删除容器</span></a></Tabs><h3 id="数据持久化" tabindex="-1"><a class="header-anchor" href="#数据持久化"><span>数据持久化</span></a></h3>
<p>如果需要持久化日志或数据，可以使用卷映射：</p>
<div class="code-block-title" data-title="使用卷映射"><div class="code-block-title-bar"><span class="title">使用卷映射</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 5090:80</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/logs:/var/log/nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  mizuki-blog</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h2>
<h3 id="_1-使用-docker-compose" tabindex="-1"><a class="header-anchor" href="#_1-使用-docker-compose"><span>1. 使用 Docker Compose</span></a></h3>
<p>创建 <code v-pre>docker-compose.yml</code> 文件来简化部署：</p>
<div class="code-block-title" data-title="docker-compose.yml"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-light-yaml"/>docker-compose.yml</span></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">services</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  mizuki-blog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    build</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> .</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">5090:80</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> NODE_ENV=production</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>使用 Docker Compose 启动：</p>
<div class="code-block-title" data-title="启动服务"><div class="code-block-title-bar"><span class="title">启动服务</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker-compose</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> up</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div><h3 id="_2-自动重启配置" tabindex="-1"><a class="header-anchor" href="#_2-自动重启配置"><span>2. 自动重启配置</span></a></h3>
<p>添加 <code v-pre>--restart</code> 参数确保容器在崩溃后自动重启：</p>
<div class="code-block-title" data-title="自动重启"><div class="code-block-title-bar"><span class="title">自动重启</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> unless-stopped</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 5090:80</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  mizuki-blog</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="自动更新脚本参考" tabindex="-1"><a class="header-anchor" href="#自动更新脚本参考"><span>自动更新脚本参考</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 脚本功能: 自动构建并部署 mizuki-blog Docker 容器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 构建Docker镜像</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># docker build: Docker构建命令</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># -t mizuki-blog: 为构建的镜像添加标签，命名为 mizuki-blog</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># .: 使用当前目录作为构建上下文，包含Dockerfile和相关文件</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">正在构建Docker镜像...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 检查是否有正在运行的容器并停止</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">检查是否有正在运行的容器...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># docker ps -q --filter "name=mizuki-blog": 查找名称包含 mizuki-blog 的正在运行的容器ID</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># -q: 仅返回容器ID，不显示其他信息</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># --filter "name=mizuki-blog": 按容器名称过滤</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">container_id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -q</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --filter</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">name=mizuki-blog</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 条件判断: 如果找到了容器ID (即 $container_id 不为空)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">$container_id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ];</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> then</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">停止正在运行的容器: $container_id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 停止容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> stop</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $container_id</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 删除容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $container_id</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 运行新容器</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">启动新容器...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># docker run: 运行Docker容器</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># -d: 在后台运行容器</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># -p 5090:5090: 将主机的5090端口映射到容器的5090端口</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># --name mizuki-blog: 为容器指定名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># mizuki-blog: 使用的镜像名称</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 5090:5090</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 显示容器日志 (已注释掉)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 取消注释下面两行可以在部署完成后自动查看容器实时日志</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># echo "显示容器日志..."</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># docker logs -f mizuki-blog</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="端口冲突" tabindex="-1"><a class="header-anchor" href="#端口冲突"><span>端口冲突</span></a></h3>
<p>如果端口 5090 已被占用，可以修改端口映射：</p>
<div class="code-block-title" data-title="修改端口"><div class="code-block-title-bar"><span class="title">修改端口</span></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 8080:80</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mizuki-blog</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div><p>这样应用将通过 <code v-pre>http://localhost:8080</code> 访问。</p>
<h3 id="构建失败" tabindex="-1"><a class="header-anchor" href="#构建失败"><span>构建失败</span></a></h3>
<p>如果构建失败，可能是由于以下原因：</p>
<ol>
<li>网络问题 - 检查网络连接</li>
<li>依赖安装失败 - 尝试更新 Dockerfile 中的 Node.js 版本</li>
<li>权限问题 - 确保当前用户有 Docker 权限</li>
</ol>
<h3 id="容器无法访问" tabindex="-1"><a class="header-anchor" href="#容器无法访问"><span>容器无法访问</span></a></h3>
<p>如果容器无法访问，可以尝试以下步骤：</p>
<ol>
<li>检查容器是否正在运行：<code v-pre>docker ps</code></li>
<li>检查端口映射是否正确</li>
<li>查看容器日志：<code v-pre>docker logs mizuki-blog</code></li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>使用 Docker 部署 Mizuki 博客具有以下优势：</p>
<ul>
<li>🚀 快速部署：一次构建，随处运行</li>
<li>🔒 环境隔离：避免依赖冲突</li>
<li>📦 版本管理：轻松回滚到之前的版本</li>
<li>🔄 水平扩展：轻松创建多个实例</li>
</ul>
<p>通过本教程，您应该能够成功使用 Docker 部署 Mizuki 博客，并掌握基本的容器管理技能。</p>
</div></template>


