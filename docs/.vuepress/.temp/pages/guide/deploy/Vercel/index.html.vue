<template><div><h2 id="如何部署到-vercel" tabindex="-1"><a class="header-anchor" href="#如何部署到-vercel"><span>如何部署到 Vercel</span></a></h2>
<p>你可以通过 Vercel 的网站 UI 或使用 Vercel 提供的官方 CLI（命令行界面）部署 Astro 站点到 Vercel。部署静态站点和按需渲染站点的过程相同。</p>
<h3 id="通过网站ui部署" tabindex="-1"><a class="header-anchor" href="#通过网站ui部署"><span>通过网站UI部署</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p>将你的代码推送到你的在线 Git 存储库（GitHub、GitLab、BitBucket 等）.</p>
</li>
<li>
<p><a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">导入你的项目</a> 至 Vercel.</p>
</li>
<li>
<p>Vercel 将自动检测 Astro 项目并自动为其配置正确的设置.</p>
</li>
<li>
<p>你的应用程序已部署完成了！（例如：astro.vercel.app）</p>
</li>
</ol>
</div><p>在你的项目完成导入和部署后，所有后续内容推送到（生产分支外的）分支都将自动生成 预览部署（Preview Deployments），以及对生产分支（通常是名为“main”的分支）所做的任何更改都将自动被部署为 生产部署（Production Deployment）。</p>
<h3 id="通过-cli-部署-推荐" tabindex="-1"><a class="header-anchor" href="#通过-cli-部署-推荐"><span>通过 CLI 部署(推荐)</span></a></h3>
<div class="vp-steps"><ol>
<li>安装<a href="https://vercel.com/docs/cli" target="_blank" rel="noopener noreferrer">Vercel CLI</a>并运行<code v-pre>vercel</code>进行部署<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vercel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">vercel</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Vercel 将自动检测 Astro 项目并自动为其配置正确的设置.</li>
<li>当被问及<code v-pre>Want to override the settings? [y/N]</code>（想要覆盖配置吗？），选择 N（No）。</li>
<li>你的应用程序已部署完成了！（例如：<a href="https://astro.vercel.app/" target="_blank" rel="noopener noreferrer">astro.vercel.app</a>）</li>
</ol>
</div><h3 id="使用-vercel-json-的项目配置" tabindex="-1"><a class="header-anchor" href="#使用-vercel-json-的项目配置"><span>使用 vercel.json 的项目配置</span></a></h3>
<p>你可以使用 <code v-pre>vercel.json</code> 来覆盖 Vercel 的默认行为并配置其他设置。例如，你可以在部署时为 HTTP 响应附加标头。</p>
<LinkCard title="详细请参考 Vercel 文档的项目配置" href="https://vercel.com/docs/project-configuration">
</LinkCard></div></template>


