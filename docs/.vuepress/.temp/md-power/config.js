import { defineClientConfig } from 'vuepress/client'
import Tabs from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import VPVideoEmbed from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/components/VPVideoEmbed.vue'
import Plot from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import VPCollapse from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapse.vue'
import VPCollapseItem from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapseItem.vue'
import { setupMarkHighlight } from '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import '/workspace/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.187_@types+markdown-it@14.1.2_esbuild@0.27.2_markdown_2bd30824088627f1d853baea4ceba726/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('VPVideoEmbed', VPVideoEmbed)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
    app.component('VPCollapse', VPCollapse)
    app.component('VPCollapseItem', VPCollapseItem)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
