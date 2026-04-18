<template><div><p>本文档说明如何创建和组织 Mizuki 博客的内容仓库。</p>
<h2 id="📁-推荐的目录结构" tabindex="-1"><a class="header-anchor" href="#📁-推荐的目录结构"><span>📁 推荐的目录结构</span></a></h2>
<div class="vp-file-tree"><FileTreeNode type="folder" filename="Mizuki-Content" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode type="folder" filename="posts" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-docs" /></template><template #comment># 博客文章</template><FileTreeNode type="file" filename="post-1.md" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="post-2.md" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="folder" filename="my-article" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode type="file" diff="add" filename="index.md" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="cover.jpg" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="folder" filename="spec" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-test" /></template><template #comment># 特殊页面</template><FileTreeNode type="file" filename="about.md" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="friends.md" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="folder" filename="data" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-db" /></template><template #comment># 数据文件</template><FileTreeNode type="file" filename="anime.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="projects.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="skills.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="timeline.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="friends.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="diary.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
<FileTreeNode type="file" filename="devices.ts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="folder" filename="images" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-images" /></template><template #comment># 图片资源</template><FileTreeNode type="folder" filename="albums" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><template #comment># 相册图片</template><FileTreeNode type="file" filename="…" :level="3">

</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="folder" filename="diary" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><template #comment># 日记图片</template><FileTreeNode type="file" filename="…" :level="3">

</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="folder" filename="posts" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-docs" /></template><template #comment># 文章图片</template><FileTreeNode type="file" filename="…" :level="3">

</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="file" diff="add" filename="README.md" :level="1">
<template #icon><VPIcon provider="iconify" name="flat-color-icons:info" /></template>
</FileTreeNode>
</FileTreeNode></div>
<h2 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h2>
<h3 id="_1-创建新的内容仓库" tabindex="-1"><a class="header-anchor" href="#_1-创建新的内容仓库"><span>1. 创建新的内容仓库</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 创建新仓库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Mizuki-Content</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Mizuki-Content</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 创建基本目录结构</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> posts</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> spec</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> data</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> images/albums</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> images/diary</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> images/posts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 创建 README</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"># Mizuki 博客内容</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> README.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-从现有-mizuki-项目迁移内容" tabindex="-1"><a class="header-anchor" href="#_2-从现有-mizuki-项目迁移内容"><span>2. 从现有 Mizuki 项目迁移内容</span></a></h3>
<p>如果你已经有一个 Mizuki 项目,可以将内容迁移到新仓库:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 在 Mizuki 项目根目录执行</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 复制内容到新仓库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> src/content/posts/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki-Content/posts/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> src/content/spec/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki-Content/spec/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> src/data/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki-Content/data/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> public/images/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki-Content/images/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-提交到-git" tabindex="-1"><a class="header-anchor" href="#_3-提交到-git"><span>3. 提交到 Git</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki-Content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Initial commit: Add blog content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 添加远程仓库并推送</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remote</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> origin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/your-username/Mizuki-Content.git</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> branch</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> main</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -u</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> origin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> main</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔗-连接到-mizuki-代码仓库" tabindex="-1"><a class="header-anchor" href="#🔗-连接到-mizuki-代码仓库"><span>🔗 连接到 Mizuki 代码仓库</span></a></h2>
<h3 id="方式一-git-submodule-推荐" tabindex="-1"><a class="header-anchor" href="#方式一-git-submodule-推荐"><span>方式一: Git Submodule (推荐)</span></a></h3>
<p>在 Mizuki 代码仓库中:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 添加内容仓库作为 submodule</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> submodule</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/your-username/Mizuki-Content.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 提交 submodule 配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitmodules</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> content</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Add content repository as submodule</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置环境变量 <code v-pre>.env</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">USE_SUBMODULE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二-独立仓库模式" tabindex="-1"><a class="header-anchor" href="#方式二-独立仓库模式"><span>方式二: 独立仓库模式</span></a></h3>
<p>配置环境变量 <code v-pre>.env</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/your-username/Mizuki-Content.git</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_DIR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./content</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">USE_SUBMODULE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行同步:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync-content</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="📝-内容编写指南" tabindex="-1"><a class="header-anchor" href="#📝-内容编写指南"><span>📝 内容编写指南</span></a></h2>
<h3 id="文章前言-frontmatter" tabindex="-1"><a class="header-anchor" href="#文章前言-frontmatter"><span>文章前言 (Frontmatter)</span></a></h3>
<p>每篇文章都应该包含以下前言:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 文章标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">published</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> 2024-01-01</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 文章描述</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./cover.jpg</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">标签1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 标签2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 分类</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">draft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pinned</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zh-CN</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录组织" tabindex="-1"><a class="header-anchor" href="#目录组织"><span>目录组织</span></a></h3>
<ul>
<li><strong>单文件文章</strong>: 直接在 <code v-pre>posts/</code> 目录下创建 <code v-pre>.md</code> 文件</li>
<li><strong>包含图片的文章</strong>: 创建文件夹,将 <code v-pre>index.md</code> 和图片放在一起</li>
</ul>
<p>示例:</p>
<div class="vp-file-tree"><FileTreeNode type="folder" filename="posts" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-docs" /></template><FileTreeNode type="file" filename="simple-post.md" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template><template #comment># 简单文章</template>
</FileTreeNode>
<FileTreeNode type="folder" filename="complex-post" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><template #comment># 复杂文章</template><FileTreeNode type="file" diff="add" filename="index.md" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-markdown" /></template><template #comment># 文章内容</template>
</FileTreeNode>
<FileTreeNode type="file" filename="cover.jpg" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template><template #comment># 封面图</template>
</FileTreeNode>
<FileTreeNode type="file" filename="diagram.png" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-image" /></template><template #comment># 文章中的图片</template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<h2 id="🔄-更新工作流" tabindex="-1"><a class="header-anchor" href="#🔄-更新工作流"><span>🔄 更新工作流</span></a></h2>
<h3 id="本地开发" tabindex="-1"><a class="header-anchor" href="#本地开发"><span>本地开发</span></a></h3>
<ol>
<li>修改内容仓库中的文件</li>
<li>提交并推送更改</li>
<li>在代码仓库中同步内容:<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync-content</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="使用-submodule-时" tabindex="-1"><a class="header-anchor" href="#使用-submodule-时"><span>使用 Submodule 时</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 更新 submodule</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /path/to/Mizuki</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> submodule</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --remote</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --merge</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或者使用同步脚本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync-content</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署时自动同步" tabindex="-1"><a class="header-anchor" href="#部署时自动同步"><span>部署时自动同步</span></a></h3>
<p>在 CI/CD 配置中添加:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">-</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Sync Content</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  run</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pnpm run sync-content</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  env</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ${{ secrets.CONTENT_REPO_URL }}</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    USE_SUBMODULE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📦-数据文件说明" tabindex="-1"><a class="header-anchor" href="#📦-数据文件说明"><span>📦 数据文件说明</span></a></h2>
<h3 id="anime-ts" tabindex="-1"><a class="header-anchor" href="#anime-ts"><span>anime.ts</span></a></h3>
<p>番剧数据配置,包含你观看的动画列表。</p>
<h3 id="projects-ts" tabindex="-1"><a class="header-anchor" href="#projects-ts"><span>projects.ts</span></a></h3>
<p>项目展示数据,展示你的作品集。</p>
<h3 id="skills-ts" tabindex="-1"><a class="header-anchor" href="#skills-ts"><span>skills.ts</span></a></h3>
<p>技能数据,展示你的技术栈。</p>
<h3 id="timeline-ts" tabindex="-1"><a class="header-anchor" href="#timeline-ts"><span>timeline.ts</span></a></h3>
<p>时间线数据,记录重要事件。</p>
<h2 id="🎨-图片管理" tabindex="-1"><a class="header-anchor" href="#🎨-图片管理"><span>🎨 图片管理</span></a></h2>
<h3 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明"><span>目录说明</span></a></h3>
<div class="vp-file-tree"><FileTreeNode type="folder" filename="images" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-images" /></template><FileTreeNode type="folder" filename="albums" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><template #comment># 相册页面的图片</template><FileTreeNode type="file" filename="…" :level="2">

</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="folder" filename="diary" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><template #comment># 日记页面的图片</template><FileTreeNode type="file" filename="…" :level="2">

</FileTreeNode>
</FileTreeNode>
<FileTreeNode type="folder" filename="posts" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-docs" /></template><template #comment># 文章中引用的公共图片</template><FileTreeNode type="file" filename="…" :level="2">

</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<h3 id="图片引用" tabindex="-1"><a class="header-anchor" href="#图片引用"><span>图片引用</span></a></h3>
<p>在文章中引用图片:</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-markdown"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 相对路径 (推荐) --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">描述</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">./image.jpg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 公共图片目录 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">描述</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">/images/posts/image.jpg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2>
<ol>
<li><strong>不要</strong>在内容仓库中包含代码文件</li>
<li><strong>保持</strong>目录结构与主仓库一致</li>
<li><strong>定期</strong>备份重要内容</li>
<li><strong>使用</strong> Git LFS 管理大型图片文件(可选)</li>
</ol>
<h2 id="🔐-私有内容仓库" tabindex="-1"><a class="header-anchor" href="#🔐-私有内容仓库"><span>🔐 私有内容仓库</span></a></h2>
<p>如果你的内容仓库是私有的，需要配置访问权限。详细的配置方法请参考：</p>
<ul>
<li><VPLink href="./CONTENT_SEPARATION.md#-%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93%E9%85%8D%E7%BD%AE">内容分离完整指南 - 私有仓库配置</VPLink></li>
<li><VPLink href="./DEPLOYMENT.md">部署指南</VPLink> - 各平台的私有仓库部署配置</li>
</ul>
<h3 id="快速参考" tabindex="-1"><a class="header-anchor" href="#快速参考"><span>快速参考</span></a></h3>
<p><strong>本地开发</strong>: 推荐使用 SSH 密钥</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CONTENT_REPO_URL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">git@github.com:your-username/Mizuki-Content-Private.git</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">USE_SUBMODULE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CI/CD 部署</strong>: 根据平台选择</p>
<ul>
<li>GitHub Actions: 使用 <code v-pre>GITHUB_TOKEN</code> (同账号) 或 SSH 密钥</li>
<li>Vercel/Netlify: 授权访问或使用 Token</li>
</ul>
<h2 id="📚-参考资源" tabindex="-1"><a class="header-anchor" href="#📚-参考资源"><span>📚 参考资源</span></a></h2>
<ul>
<li><a href="https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">Git Submodule 文档</a></li>
<li><a href="https://docs.mizuki.mysqil.com/" target="_blank" rel="noopener noreferrer">Mizuki 文档</a></li>
<li><a href="https://docs.astro.build/zh-cn/guides/content-collections/" target="_blank" rel="noopener noreferrer">Astro Content Collections</a></li>
</ul>
<hr>
<p>💡 <strong>提示</strong>: 建议先在本地测试内容同步流程,确保一切正常后再配置自动化部署。</p>
</div></template>


