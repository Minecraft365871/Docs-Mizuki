<template><div><h2 id="🎯-问题" tabindex="-1"><a class="header-anchor" href="#🎯-问题"><span>🎯 问题</span></a></h2>
<p>启用内容分离后,内容仓库 (Mizuki-Content) 更新不会自动触发代码仓库 (Mizuki) 的重新部署。</p>
<h2 id="✅-解决方案-推荐" tabindex="-1"><a class="header-anchor" href="#✅-解决方案-推荐"><span>✅ 解决方案 (推荐)</span></a></h2>
<p>使用 <strong>Repository Dispatch</strong> 让内容更新时自动触发构建,适用于所有部署平台。</p>
<hr>
<h2 id="📝-5-步快速配置" tabindex="-1"><a class="header-anchor" href="#📝-5-步快速配置"><span>📝 5 步快速配置</span></a></h2>
<h3 id="step-1-创建-github-token" tabindex="-1"><a class="header-anchor" href="#step-1-创建-github-token"><span>Step 1: 创建 GitHub Token</span></a></h3>
<p>访问: https://github.com/settings/tokens</p>
<ul>
<li>点击 <strong>Generate new token (classic)</strong></li>
<li>Note: <code v-pre>Mizuki Content Trigger</code></li>
<li>Scopes: 勾选 ✅ <code v-pre>repo</code></li>
<li>点击生成并<strong>复制 Token</strong> ⚠️ (只显示一次)</li>
</ul>
<h3 id="step-2-添加-secret" tabindex="-1"><a class="header-anchor" href="#step-2-添加-secret"><span>Step 2: 添加 Secret</span></a></h3>
<p>在<strong>内容仓库</strong> (Mizuki-Content):</p>
<p>Settings → Secrets and variables → Actions → New repository secret</p>
<ul>
<li>Name: <code v-pre>DISPATCH_TOKEN</code></li>
<li>Secret: 粘贴刚才的 Token</li>
</ul>
<h3 id="step-3-修改触发器配置" tabindex="-1"><a class="header-anchor" href="#step-3-修改触发器配置"><span>Step 3: 修改触发器配置</span></a></h3>
<p>编辑内容仓库的 <code v-pre>.github/workflows/trigger-build.yml</code></p>
<p>找到第 27 行,修改为你的代码仓库:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">repository</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your-username/Mizuki</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 改为你的</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例如: <code v-pre>matsuzaka-yuki/Mizuki</code></p>
<h3 id="step-4-更新代码仓库工作流" tabindex="-1"><a class="header-anchor" href="#step-4-更新代码仓库工作流"><span>Step 4: 更新代码仓库工作流</span></a></h3>
<p>编辑<strong>代码仓库</strong>的 <code v-pre>.github/workflows/deploy.yml</code></p>
<p>在 <code v-pre>on:</code> 部分添加:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">on</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  push</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    branches</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> main</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  repository_dispatch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 👈 添加这个</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    types</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> content-updated</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  workflow_dispatch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-5-测试" tabindex="-1"><a class="header-anchor" href="#step-5-测试"><span>Step 5: 测试</span></a></h3>
<p>在内容仓库推送一次:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">test: trigger build</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看:</p>
<ol>
<li>内容仓库 Actions - 确认触发器运行</li>
<li>代码仓库 Actions - 确认部署被触发</li>
</ol>
<hr>
<h2 id="🔍-故障排查" tabindex="-1"><a class="header-anchor" href="#🔍-故障排查"><span>🔍 故障排查</span></a></h2>
<h3 id="token-问题" tabindex="-1"><a class="header-anchor" href="#token-问题"><span>Token 问题</span></a></h3>
<p><strong>错误</strong>: <code v-pre>Bad credentials</code></p>
<p><strong>解决</strong>:</p>
<ul>
<li>确认 Token 复制完整</li>
<li>确认 Token 有 <code v-pre>repo</code> 权限</li>
<li>重新生成 Token</li>
</ul>
<h3 id="仓库名称问题" tabindex="-1"><a class="header-anchor" href="#仓库名称问题"><span>仓库名称问题</span></a></h3>
<p><strong>错误</strong>: <code v-pre>Not Found</code></p>
<p><strong>解决</strong>:</p>
<ul>
<li>确认格式: <code v-pre>owner/repo</code> (用斜杠分隔)</li>
<li>确认拼写正确</li>
<li>示例: <code v-pre>matsuzaka-yuki/Mizuki</code></li>
</ul>
<h3 id="代码仓库未触发" tabindex="-1"><a class="header-anchor" href="#代码仓库未触发"><span>代码仓库未触发</span></a></h3>
<p><strong>检查</strong>:</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> <code v-pre>.github/workflows/deploy.yml</code> 包含 <code v-pre>repository_dispatch</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Event type 为 <code v-pre>content-updated</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 代码仓库 Actions 已启用</label></li>
</ul>
<hr>
<h2 id="💡-提示" tabindex="-1"><a class="header-anchor" href="#💡-提示"><span>💡 提示</span></a></h2>
<p>配置成功后:</p>
<ul>
<li>✅ 内容仓库每次推送都会自动触发部署</li>
<li>✅ 可在 Actions 页面查看触发历史</li>
<li>✅ 支持手动触发 (workflow_dispatch)</li>
</ul>
<hr>
<p><strong>配置时间</strong>: 约 5 分钟<br>
<strong>一次配置,长期有效</strong> ✨</p>
</div></template>


