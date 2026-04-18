<template><div><p>Mizuki 主题内置了 Mermaid 支持，让你可以在 Markdown 文档中轻松创建各种类型的图表和流程图。</p>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2>
<p>Mermaid 使用 ```mermaid 代码块来定义图表：</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    A[开始] --> B{判断条件}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B -->|是| C[执行操作1]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B -->|否| D[执行操作2]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C --> E[结束]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    D --> E</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的图表类型" tabindex="-1"><a class="header-anchor" href="#支持的图表类型"><span>支持的图表类型</span></a></h2>
<h3 id="_1-流程图-flowchart" tabindex="-1"><a class="header-anchor" href="#_1-流程图-flowchart"><span>1. 流程图 (Flowchart)</span></a></h3>
<p>流程图是最常用的图表类型，用于表示工作流程、决策过程等。</p>
<h4 id="基本流程图" tabindex="-1"><a class="header-anchor" href="#基本流程图"><span>基本流程图</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    A[开始] --> B[数据输入]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B --> C{数据验证}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C -->|有效| D[处理数据]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C -->|无效| E[错误提示]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    D --> F[输出结果]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    E --> G[记录错误]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    F --> H[结束]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    G --> H</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子流程图" tabindex="-1"><a class="header-anchor" href="#子流程图"><span>子流程图</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    A[开始] --> B{条件检查}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B -->|是| C[处理步骤1]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B -->|否| D[处理步骤2]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C --> E[子流程]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    D --> E</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph E [子流程详情]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        E1[子步骤1] --> E2[子步骤2]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        E2 --> E3[子步骤3]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    E --> F{另一个决策}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    F -->|选项1| G[结果1]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    F -->|选项2| H[结果2]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    F -->|选项3| I[结果3]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    G --> J[结束]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    H --> J</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    I --> J</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-序列图-sequence-diagram" tabindex="-1"><a class="header-anchor" href="#_2-序列图-sequence-diagram"><span>2. 序列图 (Sequence Diagram)</span></a></h3>
<p>序列图用于展示对象之间的交互顺序。</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    participant 用户</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    participant 前端</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    participant 后端</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    participant 数据库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    用户->>前端: 发起请求</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    前端->>后端: API调用</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    后端->>数据库: 查询数据</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    数据库-->>后端: 返回数据</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    后端-->>前端: 响应结果</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    前端-->>用户: 显示结果</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-类图-class-diagram" tabindex="-1"><a class="header-anchor" href="#_3-类图-class-diagram"><span>3. 类图 (Class Diagram)</span></a></h3>
<p>类图用于展示类的结构和关系。</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">classDiagram</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class Animal {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +String name</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +int age</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +eat()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +sleep()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class Dog {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +String breed</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +bark()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class Cat {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +String color</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        +meow()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Animal &#x3C;|-- Dog</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Animal &#x3C;|-- Cat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-状态图-state-diagram" tabindex="-1"><a class="header-anchor" href="#_4-状态图-state-diagram"><span>4. 状态图 (State Diagram)</span></a></h3>
<p>状态图用于展示对象的不同状态和状态转换。</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">stateDiagram-v2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    [*] --> 待处理</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    待处理 --> 处理中: 开始处理</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    处理中 --> 已完成: 处理完成</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    处理中 --> 已取消: 取消处理</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    已完成 --> [*]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    已取消 --> [*]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-饼图-pie-chart" tabindex="-1"><a class="header-anchor" href="#_5-饼图-pie-chart"><span>5. 饼图 (Pie Chart)</span></a></h3>
<p>饼图用于展示数据的占比关系。</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pie</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    title 浏览器使用统计</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    "Chrome" : 45</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    "Firefox" : 25</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    "Safari" : 15</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    "Edge" : 10</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    "其他" : 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-甘特图-gantt-chart" tabindex="-1"><a class="header-anchor" href="#_6-甘特图-gantt-chart"><span>6. 甘特图 (Gantt Chart)</span></a></h3>
<p>甘特图用于项目管理和时间规划。</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">gantt</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    title 项目开发计划</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    section 需求分析</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    需求调研           :done,    des1, 2023-01-01, 2023-01-10</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    需求文档编写       :done,    des2, 2023-01-11, 2023-01-20</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    section 设计阶段</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    系统设计           :active,  des3, 2023-01-21, 2023-01-30</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    数据库设计         :         des4, 2023-01-25, 2023-02-05</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    section 开发阶段</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    前端开发           :         des5, 2023-02-01, 2023-02-20</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    后端开发           :         des6, 2023-02-01, 2023-02-25</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    section 测试部署</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    系统测试           :         des7, 2023-02-21, 2023-02-28</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    部署上线           :         des8, 2023-03-01, 2023-03-05</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级技巧" tabindex="-1"><a class="header-anchor" href="#高级技巧"><span>高级技巧</span></a></h2>
<h3 id="自定义样式" tabindex="-1"><a class="header-anchor" href="#自定义样式"><span>自定义样式</span></a></h3>
<p>你可以为节点和连接线添加自定义样式：</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    A[开始] --> B[处理]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B --> C{判断}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C -->|是| D[成功]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C -->|否| E[失败]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    style A fill:#f9f,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    style D fill:#9f9,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    style E fill:#f99,stroke:#333,stroke-width:2px</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用注释" tabindex="-1"><a class="header-anchor" href="#使用注释"><span>使用注释</span></a></h3>
<p>在复杂的图表中添加注释可以提高可读性：</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph LR</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    A[开始] --> B[数据验证]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B --> C{验证通过?}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C -->|是| D[数据处理]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C -->|否| E[错误处理]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    D --> F[结果输出]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    E --> F</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 这是注释，不会在图表中显示</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 主要流程线</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    linkStyle 0 stroke:blue,stroke-width:2px;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    linkStyle 4 stroke:green,stroke-width:2px;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子图和分组" tabindex="-1"><a class="header-anchor" href="#子图和分组"><span>子图和分组</span></a></h3>
<p>使用子图可以组织复杂的图表结构：</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph 输入模块</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        A[数据采集] --> B[数据清洗]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph 处理模块</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        C[数据分析] --> D[数据建模]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        E[模型训练] --> F[模型验证]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph 输出模块</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        G[结果展示] --> H[报告生成]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B --> C</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    D --> E</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    F --> G</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<ol>
<li><strong>保持简洁</strong>：避免在单个图表中展示过多信息，可以拆分为多个相关图表</li>
<li><strong>使用清晰的方向</strong>：TB（从上到下）和 LR（从左到右）是最常用的方向</li>
<li><strong>添加说明文字</strong>：为重要的节点和连接添加说明</li>
<li><strong>保持一致性</strong>：在整个文档中保持图表样式的一致性</li>
<li><strong>测试图表</strong>：在预览中检查图表是否按预期显示</li>
</ol>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="q-图表不显示怎么办" tabindex="-1"><a class="header-anchor" href="#q-图表不显示怎么办"><span>Q: 图表不显示怎么办？</span></a></h3>
<p>A: 确保：</p>
<ul>
<li>使用了正确的 ```mermaid 代码块语法</li>
<li>语法没有错误（可以通过 Mermaid 在线编辑器验证）</li>
</ul>
<h3 id="q-如何调整图表大小" tabindex="-1"><a class="header-anchor" href="#q-如何调整图表大小"><span>Q: 如何调整图表大小？</span></a></h3>
<p>A: 可以通过添加 CSS 来调整图表大小，或者在图表周围添加容器。</p>
<h3 id="q-图表中的中文显示不正常" tabindex="-1"><a class="header-anchor" href="#q-图表中的中文显示不正常"><span>Q: 图表中的中文显示不正常？</span></a></h3>
<p>A: 确保网页编码设置为 UTF-8，并且 Mermaid 配置中设置了正确的字体。</p>
<h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源"><span>参考资源</span></a></h2>
<ul>
<li><a href="https://mermaid-js.github.io/mermaid/" target="_blank" rel="noopener noreferrer">Mermaid 官方文档</a></li>
<li><a href="https://mermaid.live/" target="_blank" rel="noopener noreferrer">Mermaid 在线编辑器</a></li>
</ul>
</div></template>


