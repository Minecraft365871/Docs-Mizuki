# Mizuki 文档站

基于 VuePress 2 + vuepress-theme-plume 构建的现代化文档网站。

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动本地开发服务器（支持热重载）：

```bash
pnpm docs:dev
```

访问 `http://localhost:8080/` 预览网站。

### 构建生产版本

生成静态文件到 `dist` 目录：

```bash
pnpm docs:build
```

### 预览生产版本

在本地预览构建后的静态文件：

```bash
pnpm docs:preview
```

### 清理缓存并开发

如果遇到缓存问题，可清理后启动：

```bash
pnpm docs:dev-clean
```

---

## 📝 文章编写指南

### 目录结构

```
docs/
├── .vuepress/           # VuePress 配置目录
│   ├── config.ts        # 主配置文件
│   ├── theme.ts         # 主题配置文件
│   └── ...              # 其他配置
├── posts/               # 博客文章目录
│   ├── 2024/            # 按年份组织
│   │   └── 01/          # 按月份组织
│   │       └── article.md
│   └── ...
├── guide/               # 指南文档目录
│   ├── introduction.md
│   └── ...
├── notes/               # 笔记目录
│   └── ...
└── README.md            # 首页内容
```

### 创建新文章

#### 1. 博客文章

在 `docs/posts/YYYY/MM/` 目录下创建 Markdown 文件：

```markdown
---
title: 文章标题
date: 2024-01-15
categories: [分类名]
tags: [标签 1, 标签 2]
description: 文章简短描述
cover: /images/cover.jpg  # 可选，封面图片
sticky: 0  # 可选，置顶文章（数字越大越靠前）
---

这里是文章内容...
```

**必填字段：**
- `title`: 文章标题
- `date`: 发布日期（格式：YYYY-MM-DD）

**可选字段：**
- `categories`: 分类数组
- `tags`: 标签数组
- `description`: 文章描述（用于 SEO 和列表页）
- `cover`: 封面图片路径
- `sticky`: 置顶权重（仅用于首页推荐）

#### 2. 指南文档

在 `docs/guide/` 或其他自定义目录下创建文件：

```markdown
---
title: 指南标题
description: 指南描述
---

这里是指南内容...
```

### Front Matter 配置

所有 Markdown 文件顶部的 YAML 区域称为 Front Matter，用于配置页面元数据。

#### 常用配置项

```yaml
---
# 基础信息
title: 页面标题
description: 页面描述（用于 SEO）
keywords: [关键词 1, 关键词 2]  # 可选

# 博客特有
date: 2024-01-15  # 发布日期
categories: [技术, 教程]  # 分类
tags: [Vue, VuePress]  # 标签
cover: /path/to/image.jpg  # 封面图
sticky: 10  # 置顶权重

# 页面控制
outline: true  # 显示右侧大纲（默认 true）
comment: true  # 启用评论（如果配置了评论系统）
editLink: true  # 显示编辑链接
lastUpdated: true  # 显示最后更新时间

# 导航控制
navbar: true  # 显示导航栏
sidebar: auto  # 侧边栏模式：'auto' | 布尔值 | 配置对象
---
```

### Markdown 语法

本项目支持标准 Markdown 语法和 VuePress 增强功能。

#### 基础语法

```markdown
# 标题

**粗体文本**

*斜体文本*

- 列表项 1
- 列表项 2

[链接文本](https://example.com)

![图片描述](/path/to/image.jpg)

`行内代码`

```javascript
// 代码块
const hello = 'world';
console.log(hello);
```

> 引用文本
```

#### 高级功能

**容器组件**

```markdown
::: tip 提示
这是一个提示框
:::

::: warning 警告
这是一个警告框
:::

::: danger 危险
这是一个危险提示
:::

::: details 点击查看详情
这是折叠内容
:::
```

**代码组**

````markdown
```js
// JavaScript
console.log('Hello');
```

```ts
// TypeScript
console.log('Hello');
```
````

会自动渲染为可切换的代码组。

**自定义组件**

可以使用 Vue 组件：

```vue
<Badge type="tip" text="新功能" />

<CodeGroup>
  <CodeGroupItem title="npm">
  
  ```bash
  npm install package
  ```
  
  </CodeGroupItem>
</CodeGroup>
```

### 图片资源

将图片放在 `docs/public/images/` 目录下，然后在文章中使用：

```markdown
![描述](/images/photo.jpg)
```

或者使用相对路径：

```markdown
![描述](./assets/photo.jpg)
```

### 内部链接

链接到其他文档：

```markdown
[查看指南](/guide/introduction.md)

[返回首页](/)
```

### 数学公式

支持 LaTeX 数学公式：

行内公式：`$E = mc^2$`

块级公式：

````markdown
```math
\int_{a}^{b} f(x) dx = F(b) - F(a)
```
````

---

## ⚙️ 配置说明

### 主题配置

主要配置文件位于 `docs/.vuepress/theme.ts`，可配置：

- 导航栏菜单
- 侧边栏结构
- 社交链接
- 页脚信息
- 博客设置
- 搜索配置
- 主题颜色

### 站点配置

主配置文件位于 `docs/.vuepress/config.ts`，可配置：

- 站点标题和描述
- 语言设置
- 插件配置
- 打包选项

---

## 🌐 部署

### Cloudflare Pages

本项目已配置为自动部署到 Cloudflare Pages。

1. 推送代码到 GitHub
2. Cloudflare Pages 会自动触发构建
3. 构建产物会自动部署

**构建设置：**
- 构建命令：`pnpm docs:build`
- 输出目录：`dist`

### 其他平台

构建后，将 `dist` 目录的内容部署到您的服务器或静态托管服务：

```bash
# 构建
pnpm docs:build

# 然后将 dist/ 目录上传到：
# - Vercel
# - Netlify
# - GitHub Pages
# - 自己的 Nginx/Apache 服务器
```

#### GitHub Pages 示例

```bash
# 安装 gh-pages
pnpm add -D gh-pages

# 部署
pnpm docs:build
npx gh-pages -d dist
```

---

## 🛠️ 故障排除

### 常见问题

**1. 开发服务器启动失败**

```bash
# 清理缓存
pnpm docs:dev-clean

# 或删除 node_modules 重新安装
rm -rf node_modules docs/.vuepress/.cache docs/.vuepress/.temp
pnpm install
pnpm docs:dev
```

**2. 构建时出现 "Output directory not found"**

确保运行的是 `pnpm docs:build` 而不是 `pnpm build`，并且输出目录配置正确。

**3. 样式异常**

清除浏览器缓存或尝试无痕模式访问。

**4. 图片无法加载**

检查图片路径是否正确，确保图片存在于 `docs/public/` 目录或使用正确的相对路径。

---

## 📚 参考文档

- [VuePress 2 官方文档](https://v2.vuepress.vuejs.org/)
- [vuepress-theme-plume 主题文档](https://theme-plume.vuejs.press/)
- [Markdown 语法指南](https://commonmark.org/help/)

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

MIT License

---

**Happy Writing! ✍️**
