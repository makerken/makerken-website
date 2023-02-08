import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default {
  themeConfig: {
    sidebar: getSidebar({ contentRoot: '/', contentDirs: ['docs'], collapsible: true, collapsed: true })
  }
}