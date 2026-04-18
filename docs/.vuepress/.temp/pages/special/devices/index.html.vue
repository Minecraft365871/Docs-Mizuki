<template><div><h3 id="设备页面配置教程" tabindex="-1"><a class="header-anchor" href="#设备页面配置教程"><span>设备页面配置教程</span></a></h3>
<p>Mizuki 主题内置了一个简洁的设备展示（Devices）页面，用于展示您使用或拥有的数码设备。这个页面可以帮助访客了解您的设备偏好和技术环境。</p>
<p>本教程将详细指导你如何添加、修改和管理设备数据。</p>
<hr>
<h4 id="_1-核心概念-页面与数据分离" tabindex="-1"><a class="header-anchor" href="#_1-核心概念-页面与数据分离"><span><strong>1. 核心概念：页面与数据分离</strong></span></a></h4>
<div class="vp-file-tree"><FileTreeNode expanded type="folder" filename="Mizuki" :level="0">
<template #icon><VPIcon provider="iconify" name="vscode-icons:default-folder" /></template><FileTreeNode expanded type="folder" filename="src" :level="1">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-src" /></template><FileTreeNode expanded type="folder" filename="pages" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-view" /></template><FileTreeNode type="file" filename="devices.astro" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-light-astro" /></template>
</FileTreeNode>
</FileTreeNode>
<FileTreeNode expanded type="folder" filename="data" :level="2">
<template #icon><VPIcon provider="iconify" name="vscode-icons:folder-type-db" /></template><FileTreeNode type="file" filename="devices.ts" :level="3">
<template #icon><VPIcon provider="iconify" name="vscode-icons:file-type-typescript" /></template>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode>
</FileTreeNode></div>
<p>在 Mizuki 主题中，设备页面的<strong>展示逻辑</strong>和<strong>内容数据</strong>是分开的：</p>
<ul>
<li>
<p><strong>展示逻辑</strong>: <code v-pre>src/pages/devices.astro</code></p>
<ul>
<li>这个文件负责设备页面的HTML结构、CSS样式和JavaScript交互逻辑。</li>
<li>它定义了设备如何分类和展示。</li>
<li><strong>通常情况下，你不需要修改这个文件。</strong></li>
</ul>
</li>
<li>
<p><strong>内容数据</strong>: <code v-pre>src/data/devices.ts</code></p>
<ul>
<li>这个文件是设备内容的&quot;数据库&quot;。所有的设备数据都以对象的形式存储在这里。</li>
<li>每一个设备都是一个对象，包含 <code v-pre>name</code>, <code v-pre>image</code>, <code v-pre>specs</code>, <code v-pre>description</code>, <code v-pre>link</code> 等属性。</li>
<li><strong>添加、修改或删除设备，都在这个文件中操作。</strong></li>
</ul>
</li>
</ul>
<hr>
<h4 id="_2-src-data-devices-ts-文件详解" tabindex="-1"><a class="header-anchor" href="#_2-src-data-devices-ts-文件详解"><span><strong>2. <code v-pre>src/data/devices.ts</code> 文件详解</strong></span></a></h4>
<p>打开 <code v-pre>src/data/devices.ts</code>，你会看到类似下面的代码结构：</p>
<div class="code-block-title" data-title="src/data/devices.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/devices.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Device</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	specs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> DeviceCategory</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">categoryName</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Device</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x26;</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	自定义</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Device</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">devicesData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">DeviceCategory</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	OnePlus</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">OnePlus 13T</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/device/oneplus13t.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			specs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Gray / 16G + 1TB</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Flagship performance, Hasselblad imaging, 80W SuperVOOC.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://www.oneplus.com/cn/13t</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	Router</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">GL-MT3000</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/device/mt3000.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			specs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1000Mbps / 2.5G</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Portable WiFi 6 router suitable for business trips and home use.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://www.gl-inet.cn/products/gl-mt3000/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><strong>数据结构说明</strong>:</p>
<ul>
<li>
<p><strong><code v-pre>interface Device</code></strong>: 这是一个TypeScript接口，它定义了每一个设备必须包含的字段和它们的类型。</p>
<ul>
<li><code v-pre>name: string</code>: (必填) 设备的名称。</li>
<li><code v-pre>image: string</code>: (必填) 设备图片的路径，通常放在 <code v-pre>public/images/device/</code> 目录下。</li>
<li><code v-pre>specs: string</code>: (必填) 设备的主要规格参数。</li>
<li><code v-pre>description: string</code>: (必填) 设备的简短描述。</li>
<li><code v-pre>link: string</code>: (必填) 设备的官方链接或购买链接。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>DeviceCategory</code></strong>: 这是一个类型定义，它定义了设备分类的结构。</p>
<ul>
<li>键名是分类名称，如 &quot;OnePlus&quot;、&quot;Router&quot; 等。</li>
<li>值是该分类下的设备数组。</li>
<li>可以有 &quot;自定义&quot; 分类，用于放置不属于其他分类的设备。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>export const devicesData: DeviceCategory</code></strong>: 这是实际的设备数据对象。</p>
<ul>
<li>每个属性名是一个分类，属性值是该分类下的设备数组。</li>
<li>分类在页面上的显示顺序通常是按照对象属性的顺序。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_3-添加一个新设备" tabindex="-1"><a class="header-anchor" href="#_3-添加一个新设备"><span><strong>3. 添加一个新设备</strong></span></a></h4>
<p>按照以下步骤添加一个新的设备：</p>
<ol>
<li>
<p><strong>准备设备图片</strong>:</p>
<ul>
<li>获取或制作设备展示图片，建议使用设备官方图片或高质量实物图。</li>
<li>将图片文件（如 <code v-pre>my-device.png</code>）复制到项目的 <code v-pre>public/images/device/</code> 目录下。</li>
<li>如果目录不存在，可以创建它。</li>
</ul>
</li>
<li>
<p><strong>编辑 <code v-pre>devices.ts</code> 文件</strong>:</p>
<ul>
<li>打开 <code v-pre>src/data/devices.ts</code>。</li>
<li>在 <code v-pre>devicesData</code> 对象中，决定要添加到哪个分类。</li>
<li>复制一个现有的设备对象作为模板。</li>
<li>修改模板中的属性：
<ul>
<li><strong><code v-pre>name</code></strong>: 输入设备的名称。</li>
<li><strong><code v-pre>image</code></strong>: 设置设备图片的路径，如 <code v-pre>/images/device/my-device.png</code>。</li>
<li><strong><code v-pre>specs</code></strong>: 设置设备的主要规格参数，简洁明了。</li>
<li><strong><code v-pre>description</code></strong>: 设置设备的简短描述，突出特点。</li>
<li><strong><code v-pre>link</code></strong>: 设置设备的官方链接或购买链接。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>示例：添加一个新分类和设备</strong></p>
<p>假设我们要添加一个新的笔记本电脑分类，并添加一个设备，内容如下：</p>
<ul>
<li>分类：笔记本电脑</li>
<li>名称：ThinkPad X1 Carbon</li>
<li>规格：Intel i7 / 32GB RAM / 1TB SSD</li>
<li>描述：轻薄便携，性能稳定，适合商务和开发使用</li>
</ul>
<p>修改后的 <code v-pre>devicesData</code> 对象会是这样：</p>
<div class="code-block-title" data-title="src/data/devices.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/data/devices.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">devicesData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">DeviceCategory</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  OnePlus</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // ... OnePlus 设备 ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  Router</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // ... 路由器设备 ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // --- 这是我们新添加的分类和设备 ---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  笔记本电脑</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ThinkPad X1 Carbon</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 名称</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/images/device/thinkpad-x1.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 图片路径</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      specs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Intel i7 / 32GB RAM / 1TB SSD</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 规格</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">轻薄便携，性能稳定，适合商务和开发使用</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 描述</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://www.lenovo.com.cn/thinkpad-x1-carbon</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></li>
</ol>
<hr>
<h4 id="_4-修改或删除设备" tabindex="-1"><a class="header-anchor" href="#_4-修改或删除设备"><span><strong>4. 修改或删除设备</strong></span></a></h4>
<ul>
<li><strong>修改设备</strong>: 直接在 <code v-pre>devicesData</code> 对象中找到对应的设备对象，修改其属性即可。</li>
<li><strong>删除设备</strong>: 找到对应的设备对象，将其从数组中完全移除。注意不要留下多余的逗号，以免造成语法错误。</li>
<li><strong>删除分类</strong>: 如果一个分类下的所有设备都被删除，可以删除整个分类属性。</li>
</ul>
<hr>
<h4 id="_5-设备分类说明" tabindex="-1"><a class="header-anchor" href="#_5-设备分类说明"><span><strong>5. 设备分类说明</strong></span></a></h4>
<p>设备按照品牌或类型进行分类，常见的分类包括：</p>
<ul>
<li><strong>品牌分类</strong>: 如 &quot;OnePlus&quot;、&quot;Apple&quot;、&quot;Lenovo&quot; 等</li>
<li><strong>类型分类</strong>: 如 &quot;Router&quot;、&quot;Notebook&quot;、&quot;Phone&quot;、&quot;Tablet&quot; 等</li>
<li><strong>自定义分类</strong>: 使用 &quot;自定义&quot; 分类，用于放置不属于其他分类的设备</li>
</ul>
<hr>
<h4 id="_6-最佳实践与建议" tabindex="-1"><a class="header-anchor" href="#_6-最佳实践与建议"><span><strong>6. 最佳实践与建议</strong></span></a></h4>
<ul>
<li><strong>设备图片</strong>: 使用高质量、统一风格的设备图片，增强页面美观度。</li>
<li><strong>规格简明</strong>: 突出设备的关键规格，避免过于冗长的参数列表。</li>
<li><strong>描述准确</strong>: 客观描述设备特点，避免过度宣传性语言。</li>
<li><strong>链接有效</strong>: 使用官方或可靠的链接，确保链接长期有效。</li>
<li><strong>分类合理</strong>: 按照品牌或类型合理分类，便于用户查找。</li>
<li><strong>定期更新</strong>: 随着设备更新换代，定期更新设备列表。</li>
</ul>
<hr>
<h4 id="_7-页面功能与特性" tabindex="-1"><a class="header-anchor" href="#_7-页面功能与特性"><span><strong>7. 页面功能与特性</strong></span></a></h4>
<p>设备页面提供以下功能：</p>
<ul>
<li><strong>分类浏览</strong>: 按设备分类浏览设备列表</li>
<li><strong>设备详情</strong>: 点击设备卡片查看详细规格和描述</li>
<li><strong>设备链接</strong>: 提供官方链接，便于了解更多信息</li>
<li><strong>响应式设计</strong>: 在不同设备上都能良好显示</li>
<li><strong>图片展示</strong>: 展示设备的高清图片</li>
</ul>
<hr>
<h4 id="_8-导航栏配置" tabindex="-1"><a class="header-anchor" href="#_8-导航栏配置"><span><strong>8. 导航栏配置</strong></span></a></h4>
<p>要在导航栏中显示设备链接，请确保在 <code v-pre>src/config.ts</code> 的 <code v-pre>navBarConfig</code> 中包含了设备链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Devices</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 设备页面</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>或者手动添加设备链接：</p>
<div class="code-block-title" data-title="src/config.ts"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-typescript"/>src/config.ts</span></div><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">navBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavBarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">	links</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">		LinkPreset</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Archive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">我的设备</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/devices/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">			icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ri:devices-line</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		// ... 其他链接</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>
<p>通过以上步骤，你就可以轻松地管理你的设备页面了。定期更新 <code v-pre>src/data/devices.ts</code>，让访客了解你的设备偏好和技术环境！</p>
</div></template>


