<template><div><p>本指南详细说明如何在 Mizuki 中使用内容分离功能,包括基础配置、私有仓库、CI/CD 部署等所有场景。</p>
<hr>
<h2 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h2>
<h3 id="新手推荐-本地模式-最简单" tabindex="-1"><a class="header-anchor" href="#新手推荐-本地模式-最简单"><span>新手推荐: 本地模式 (最简单)</span></a></h3>
<p><strong>不需要任何配置</strong>,直接开始使用:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 克隆项目</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/matsuzaka-yuki/Mizuki.git</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Mizuki</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 直接开发</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内容存放在 <code v-pre>src/content/</code> 和 <code v-pre>public/images/</code> 目录,与代码一起管理。</p>
<h3 id="进阶-启用内容分离" tabindex="-1"><a class="header-anchor" href="#进阶-启用内容分离"><span>进阶: 启用内容分离</span></a></h3>
<p>如果需要将内容独立管理(多人协作、私有内容、独立版本控制),按以下步骤配置:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 1. 创建 .env 文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .env.example</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 2. 编辑 .env,启用内容分离</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 3. 同步内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync-content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 4. 启动开发</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🎛️-enable-content-sync-控制开关" tabindex="-1"><a class="header-anchor" href="#🎛️-enable-content-sync-控制开关"><span>🎛️ ENABLE_CONTENT_SYNC 控制开关</span></a></h2>
<h3 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明"><span>功能说明</span></a></h3>
<p><code v-pre>ENABLE_CONTENT_SYNC</code> 是一个一键开关,控制是否启用内容分离功能。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
<th>适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>false</code> 或未设置</td>
<td><strong>禁用内容分离</strong> (默认)</td>
<td>新手、个人博客、内容较少</td>
</tr>
<tr>
<td><code v-pre>true</code></td>
<td><strong>启用内容分离</strong></td>
<td>团队协作、私有内容、大量文章</td>
</tr>
</tbody>
</table>
<h3 id="配置位置" tabindex="-1"><a class="header-anchor" href="#配置位置"><span>配置位置</span></a></h3>
<p>在项目根目录的 <code v-pre>.env</code> 文件中:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 禁用内容分离 (使用本地内容)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或启用内容分离 (从远程仓库同步)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景对比" tabindex="-1"><a class="header-anchor" href="#使用场景对比"><span>使用场景对比</span></a></h3>
<h4 id="场景-1-本地模式-推荐新手" tabindex="-1"><a class="header-anchor" href="#场景-1-本地模式-推荐新手"><span>场景 1: 本地模式 (推荐新手)</span></a></h4>
<p><strong>特点</strong>:</p>
<ul>
<li>✅ 无需额外配置</li>
<li>✅ 内容和代码一起管理</li>
<li>✅ 适合个人博客、小型项目</li>
</ul>
<p><strong>配置</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># .env (或不创建 .env 文件)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工作流程</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 直接编辑 src/content/ 下的文章</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 提交时一起提交代码和内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Update content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="场景-2-独立仓库-分离-模式" tabindex="-1"><a class="header-anchor" href="#场景-2-独立仓库-分离-模式"><span>场景 2: 独立仓库（分离）模式</span></a></h4>
<p><strong>特点</strong>:</p>
<ul>
<li>✅ 内容独立仓库管理</li>
<li>✅ 支持私有内容仓库</li>
<li>✅ 多人协作方便</li>
<li>✅ 独立的内容版本控制</li>
</ul>
<p><strong>配置</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># .env</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工作流程</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 自动同步内容后启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 内容在独立仓库编辑</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki-Content</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 编辑文章</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Update article</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模式切换" tabindex="-1"><a class="header-anchor" href="#模式切换"><span>模式切换</span></a></h3>
<h4 id="从本地切换到独立仓库" tabindex="-1"><a class="header-anchor" href="#从本地切换到独立仓库"><span>从本地切换到独立仓库</span></a></h4>
<ol>
<li>创建内容仓库 (参考 <VPLink href="./CONTENT_MIGRATION.md">CONTENT_MIGRATION.md</VPLink>)</li>
<li>编辑 <code v-pre>.env</code>:<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>同步内容: <code v-pre>pnpm run sync-content</code></li>
</ol>
<h4 id="从独立仓库切换回本地" tabindex="-1"><a class="header-anchor" href="#从独立仓库切换回本地"><span>从独立仓库切换回本地</span></a></h4>
<ol>
<li>编辑 <code v-pre>.env</code>:<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>直接开发: <code v-pre>pnpm dev</code></li>
</ol>
<hr>
<h2 id="⚙️-配置方式" tabindex="-1"><a class="header-anchor" href="#⚙️-配置方式"><span>⚙️ 配置方式</span></a></h2>
<h3 id="环境变量说明" tabindex="-1"><a class="header-anchor" href="#环境变量说明"><span>环境变量说明</span></a></h3>
<p>在 <code v-pre>.env</code> 文件中配置:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ============================================</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 功能开关</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ============================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 是否启用内容分离功能</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># false = 使用本地内容 (推荐新手)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># true = 从远程仓库同步内容</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ============================================</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 内容仓库配置 (仅当 ENABLE_CONTENT_SYNC=true 时需要)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ============================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 内容仓库地址</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 支持 HTTPS 和 SSH 方式</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 公开仓库: https://github.com/username/repo.git</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 私有仓库 (SSH): git@github.com:username/repo.git</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 私有仓库 (Token): https://TOKEN@github.com/username/repo.git</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 内容目录路径 (默认 ./content 一般无需改动)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_DIR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./content</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3>
<h4 id="示例-1-完全本地-最简单" tabindex="-1"><a class="header-anchor" href="#示例-1-完全本地-最简单"><span>示例 1: 完全本地 (最简单)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># .env</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者<strong>不创建 <code v-pre>.env</code> 文件</strong>,直接使用本地内容。</p>
<h4 id="示例-2-公开仓库-https" tabindex="-1"><a class="header-anchor" href="#示例-2-公开仓库-https"><span>示例 2: 公开仓库 (HTTPS)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># .env</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-3-私有仓库-ssh" tabindex="-1"><a class="header-anchor" href="#示例-3-私有仓库-ssh"><span>示例 3: 私有仓库 (SSH)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># .env</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">git@github.com:your-username/Mizuki-Content-Private.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🔄-自动构建触发-内容更新时" tabindex="-1"><a class="header-anchor" href="#🔄-自动构建触发-内容更新时"><span>🔄 自动构建触发 (内容更新时)</span></a></h2>
<h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h3>
<p>启用内容分离后，默认只有代码仓库更新会触发部署，内容仓库更新<strong>不会</strong>自动触发。</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3>
<p><strong>推荐使用 Repository Dispatch</strong>，5 步快速配置，适用所有部署平台。</p>
<p>详细步骤请查看:</p>
<ul>
<li><strong><VPLink href="./AUTO_BUILD_TRIGGER.md">自动构建触发快速参考</VPLink></strong> - 最简洁的配置指南 ⭐</li>
<li><strong><VPLink href="./DEPLOYMENT.md#%E5%86%85%E5%AE%B9%E4%BB%93%E5%BA%93%E6%9B%B4%E6%96%B0%E8%A7%A6%E5%8F%91%E6%9E%84%E5%BB%BA">部署文档 - 完整说明</VPLink></strong> - 包含多种方案</li>
<li><strong><VPLink href="../Mizuki-Content/.github/workflows/README.md">内容仓库配置指南</VPLink></strong> - 工作流详细说明</li>
</ul>
<hr>
<h2 id="🔐-私有仓库配置" tabindex="-1"><a class="header-anchor" href="#🔐-私有仓库配置"><span>🔐 私有仓库配置</span></a></h2>
<p>完全支持私有内容仓库! 推荐使用 SSH 方式,安全且方便。</p>
<h3 id="方案-a-ssh-密钥-推荐" tabindex="-1"><a class="header-anchor" href="#方案-a-ssh-密钥-推荐"><span>方案 A: SSH 密钥 (推荐)</span></a></h3>
<h4 id="_1-生成-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#_1-生成-ssh-密钥"><span>1. 生成 SSH 密钥</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 推荐使用 Ed25519</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ed25519</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -C</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">your_email@example.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或使用 RSA</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rsa</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -b</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 4096</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -C</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">your_email@example.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按提示操作,默认保存到 <code v-pre>~/.ssh/id_ed25519</code>。</p>
<h4 id="_2-添加公钥到-git-平台" tabindex="-1"><a class="header-anchor" href="#_2-添加公钥到-git-平台"><span>2. 添加公钥到 Git 平台</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看公钥</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/.ssh/id_ed25519.pub</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Windows PowerShell</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Get-Content</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/.ssh/id_ed25519.pub</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GitHub</strong>:</p>
<ul>
<li>Settings → SSH and GPG keys → New SSH key</li>
<li>粘贴公钥内容</li>
</ul>
<p><strong>GitLab</strong>:</p>
<ul>
<li>Preferences → SSH Keys → Add new key</li>
</ul>
<p><strong>Gitee</strong>:</p>
<ul>
<li>设置 → SSH 公钥 → 添加公钥</li>
</ul>
<h4 id="_3-配置-mizuki" tabindex="-1"><a class="header-anchor" href="#_3-配置-mizuki"><span>3. 配置 Mizuki</span></a></h4>
<p>在 <code v-pre>.env</code> 文件中使用 SSH URL:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">git@github.com:your-username/Mizuki-Content-Private.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-测试连接" tabindex="-1"><a class="header-anchor" href="#_4-测试连接"><span>4. 测试连接</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 测试 GitHub 连接</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -T</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> git@github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 测试 GitLab 连接</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -T</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> git@gitlab.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 同步内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync-content</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案-b-https-personal-access-token" tabindex="-1"><a class="header-anchor" href="#方案-b-https-personal-access-token"><span>方案 B: HTTPS + Personal Access Token</span></a></h3>
<h4 id="_1-生成-token" tabindex="-1"><a class="header-anchor" href="#_1-生成-token"><span>1. 生成 Token</span></a></h4>
<p><strong>GitHub</strong>:</p>
<ul>
<li>Settings → Developer settings → Personal access tokens → Generate new token</li>
<li>权限: 勾选 <code v-pre>repo</code> (完整访问)</li>
</ul>
<p><strong>GitLab</strong>:</p>
<ul>
<li>Preferences → Access Tokens</li>
<li>Scopes: <code v-pre>read_repository</code></li>
</ul>
<p><strong>Gitee</strong>:</p>
<ul>
<li>设置 → 私人令牌 → 生成新令牌</li>
<li>权限: <code v-pre>projects</code> (读取)</li>
</ul>
<h4 id="_2-配置-env" tabindex="-1"><a class="header-anchor" href="#_2-配置-env"><span>2. 配置 .env</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://YOUR_TOKEN@github.com/your-username/Mizuki-Content-Private.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️ <strong>安全提示</strong>:</p>
<ul>
<li><strong>不要将 <code v-pre>.env</code> 提交到 Git!</strong> (已在 <code v-pre>.gitignore</code> 中)</li>
<li>Token 具有完整权限,请妥善保管</li>
</ul>
<hr>
<h2 id="🌐-ci-cd-部署" tabindex="-1"><a class="header-anchor" href="#🌐-ci-cd-部署"><span>🌐 CI/CD 部署</span></a></h2>
<h3 id="快速配置" tabindex="-1"><a class="header-anchor" href="#快速配置"><span>快速配置</span></a></h3>
<p>所有部署平台都使用相同的自动同步机制:</p>
<ul>
<li>✅ <code v-pre>pnpm build</code> 执行前自动运行 <code v-pre>prebuild</code> 钩子</li>
<li>✅ 根据 <code v-pre>ENABLE_CONTENT_SYNC</code> 决定是否同步内容</li>
<li>✅ 同步失败不会中断构建,回退到本地内容</li>
</ul>
<p><strong>只需配置环境变量,无需修改构建命令!</strong></p>
<h3 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置"><span>环境变量配置</span></a></h3>
<p>在部署平台添加以下环境变量:</p>
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
<td><code v-pre>ENABLE_CONTENT_SYNC</code></td>
<td><code v-pre>true</code></td>
<td>启用内容分离</td>
</tr>
<tr>
<td><code v-pre>CONTENT_REPO_URL</code></td>
<td>仓库地址</td>
<td>内容仓库的 URL</td>
</tr>
</tbody>
</table>
<h3 id="支持的平台" tabindex="-1"><a class="header-anchor" href="#支持的平台"><span>支持的平台</span></a></h3>
<ul>
<li>✅ <strong>GitHub Pages</strong> - 使用 GitHub Actions</li>
<li>✅ <strong>Vercel</strong> - 环境变量配置</li>
<li>✅ <strong>Netlify</strong> - 环境变量配置</li>
<li>✅ <strong>Cloudflare Pages</strong> - 环境变量配置</li>
</ul>
<h3 id="详细配置指南" tabindex="-1"><a class="header-anchor" href="#详细配置指南"><span>详细配置指南</span></a></h3>
<p>不同平台的具体配置步骤、私有仓库认证、故障排查等详细信息，请查看：</p>
<p>📖 <strong><VPLink href="./DEPLOYMENT.md">部署指南</VPLink></strong> - 完整的部署文档，包含：</p>
<ul>
<li>GitHub Pages 自动部署配置</li>
<li>Vercel 部署详细步骤</li>
<li>Netlify 部署配置</li>
<li>Cloudflare Pages 部署</li>
<li>私有仓库认证配置</li>
<li>常见问题故障排查</li>
</ul>
<hr>
<h2 id="📋-常用命令" tabindex="-1"><a class="header-anchor" href="#📋-常用命令"><span>📋 常用命令</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>pnpm run init-content</code></td>
<td>运行交互式初始化向导</td>
</tr>
<tr>
<td><code v-pre>pnpm run sync-content</code></td>
<td>手动同步内容仓库</td>
</tr>
<tr>
<td><code v-pre>pnpm run check-env</code></td>
<td>检查环境变量配置</td>
</tr>
<tr>
<td><code v-pre>pnpm dev</code></td>
<td>启动开发服务器 (自动同步)</td>
</tr>
<tr>
<td><code v-pre>pnpm build</code></td>
<td>构建项目 (自动同步)</td>
</tr>
</tbody>
</table>
<h3 id="自动同步时机" tabindex="-1"><a class="header-anchor" href="#自动同步时机"><span>自动同步时机</span></a></h3>
<p>当 <code v-pre>ENABLE_CONTENT_SYNC=true</code> 时,以下命令会自动同步内容:</p>
<ul>
<li><code v-pre>pnpm dev</code> - 开发前自动同步</li>
<li><code v-pre>pnpm build</code> - 构建前自动同步</li>
</ul>
<p>同步失败不会中断开发,会显示警告并继续。</p>
<hr>
<h2 id="🔍-故障排查" tabindex="-1"><a class="header-anchor" href="#🔍-故障排查"><span>🔍 故障排查</span></a></h2>
<h3 id="问题-1-提示-未启用内容分离功能" tabindex="-1"><a class="header-anchor" href="#问题-1-提示-未启用内容分离功能"><span>问题 1: 提示 &quot;未启用内容分离功能&quot;</span></a></h3>
<p><strong>原因</strong>: <code v-pre>ENABLE_CONTENT_SYNC</code> 未设置或设置为 <code v-pre>false</code>。</p>
<p><strong>解决</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 检查 .env 文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 确认有以下配置</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题-2-提示-未设置-content-repo-url" tabindex="-1"><a class="header-anchor" href="#问题-2-提示-未设置-content-repo-url"><span>问题 2: 提示 &quot;未设置 CONTENT_REPO_URL&quot;</span></a></h3>
<p><strong>原因</strong>: 启用了内容分离但未配置仓库地址。</p>
<p><strong>解决</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 在 .env 中添加</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题-3-私有仓库认证失败" tabindex="-1"><a class="header-anchor" href="#问题-3-私有仓库认证失败"><span>问题 3: 私有仓库认证失败</span></a></h3>
<p><strong>SSH 方式</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 测试 SSH 连接</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -T</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> git@github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 应该看到: Hi username! You've successfully authenticated...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果失败,检查:</p>
<ul>
<li>SSH 密钥是否生成: <code v-pre>ls ~/.ssh/</code></li>
<li>公钥是否添加到 GitHub</li>
<li>SSH agent 是否运行: <code v-pre>ssh-add -l</code></li>
</ul>
<p><strong>HTTPS + Token 方式</strong>:</p>
<ul>
<li>检查 Token 是否有效</li>
<li>检查 Token 权限是否正确 (<code v-pre>repo</code> 权限)</li>
<li>确认 URL 格式: <code v-pre>https://TOKEN@github.com/user/repo.git</code></li>
</ul>
<h3 id="问题-4-env-文件不生效" tabindex="-1"><a class="header-anchor" href="#问题-4-env-文件不生效"><span>问题 4: .env 文件不生效</span></a></h3>
<p><strong>检查清单</strong>:</p>
<ol>
<li>
<p>文件位置正确 (项目根目录)</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -la</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .env</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # Linux/Mac</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">dir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .env</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     # Windows</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>文件格式正确</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ✅ 正确</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ❌ 错误 (多余空格)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ❌ 错误 (不需要引号,除非值中有空格)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ENABLE_CONTENT_SYNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>文件权限可读</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chmod</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 644</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .env</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # Linux/Mac</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>运行检查命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> check-env</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="问题-5-内容同步失败" tabindex="-1"><a class="header-anchor" href="#问题-5-内容同步失败"><span>问题 5: 内容同步失败</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 手动同步内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync-content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 检查内容目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -la</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> content/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 手动克隆内容仓库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/your-username/Mizuki-Content.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> content</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题-6-部署时内容未同步" tabindex="-1"><a class="header-anchor" href="#问题-6-部署时内容未同步"><span>问题 6: 部署时内容未同步</span></a></h3>
<p><strong>Vercel/Netlify</strong>:</p>
<ul>
<li>确认环境变量已添加</li>
<li>检查构建日志,查看同步步骤是否执行</li>
<li>确认 Token 在部署环境有效</li>
</ul>
<p><strong>GitHub Actions</strong>:</p>
<ul>
<li>检查工作流配置</li>
<li>查看 Actions 运行日志</li>
<li>确认 Secrets 已正确添加</li>
</ul>
<hr>
<h2 id="💡-最佳实践" tabindex="-1"><a class="header-anchor" href="#💡-最佳实践"><span>💡 最佳实践</span></a></h2>
<h3 id="新手建议" tabindex="-1"><a class="header-anchor" href="#新手建议"><span>新手建议</span></a></h3>
<ol>
<li><strong>从本地模式开始</strong> - 不需要额外配置,立即可用</li>
<li><strong>内容稳定后再分离</strong> - 等内容积累到一定程度</li>
<li><strong>使用 SSH 方式</strong> - 比 Token 更安全方便</li>
</ol>
<h3 id="进阶用户" tabindex="-1"><a class="header-anchor" href="#进阶用户"><span>进阶用户</span></a></h3>
<ol>
<li><strong>使用独立仓库模式</strong> - 清晰的版本控制</li>
<li><strong>内容仓库添加 CI</strong> - 自动检查文章格式、图片优化等</li>
<li><strong>分支管理</strong> - main 分支用于生产,develop 用于预览</li>
</ol>
<h3 id="团队协作" tabindex="-1"><a class="header-anchor" href="#团队协作"><span>团队协作</span></a></h3>
<ol>
<li><strong>统一环境变量</strong> - 团队成员使用相同的配置</li>
<li><strong>权限控制</strong> - 内容仓库设置为私有,精细控制访问权限</li>
<li><strong>Git Hooks</strong> - 提交前检查文章格式、图片大小等</li>
</ol>
<hr>
<h2 id="🤝-需要帮助" tabindex="-1"><a class="header-anchor" href="#🤝-需要帮助"><span>🤝 需要帮助?</span></a></h2>
<ul>
<li>查看 <a href="https://github.com/matsuzaka-yuki/Mizuki/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
<li>运行 <code v-pre>pnpm run check-env</code> 检查配置</li>
</ul>
<p>祝你使用愉快! 🎉</p>
</div></template>


