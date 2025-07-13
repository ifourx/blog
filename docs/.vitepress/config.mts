import { type DefaultTheme, defineConfig } from 'vitepress'

function nav(): DefaultTheme.NavItem[] {
  return [
    // Home
    {
      text: 'Home',
      link: '/'
    },
    // Pages
    {
      text: 'Pages',
      activeMatch: '/pages/',
      items: [
        { items: [{ text: 'Linux', link: '/pages/linux/' }] },
        {
          items: [
            { text: 'Rust', link: '/pages/rust/' },
            { text: 'Python', link: '/pages/python/' },
            { text: 'Golang', link: '/pages/golang/' }
          ]
        },
        {
          items: [{ text: 'Misc', link: '/pages/misc/' }]
        }
      ]
    },
    // statusBadge
    { component: 'StatusBadge' }
  ]
}

// siderbar Misc
function sidebarMisc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/pages/misc/markdown-examples' },
        { text: 'Runtime API Examples', link: '/pages/misc/api-examples' }
      ]
    }
  ]
}

function sidebarLinux(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Linux',
      collapsed: false,
      items: [
        { text: 'VPS 安全指北', link: '/pages/linux/vps_reload' },
        { text: 'H-UI 面板', link: '/pages/linux/hui' }
      ]
    },
    {
      text: 'Tools',
      collapsed: false,
      items: [
        { text: 'oh-my-zsh', link: '/pages/linux/tools/ohmyzsh' },
        { text: 'starship', link: '/pages/linux/tools/starship' }
      ]
    }
  ]
}
function sidebarRust(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Rust',
      items: [{ text: 'rust1', link: '/pages/rust/rust1' }]
    }
  ]
}
function sidebarPython(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'python',
      items: [{ text: 'test1', link: '/pages/python/test1' }]
    }
  ]
}
function sidebarGolang(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'golang',
      items: [{ text: 'defer', link: '/pages/golang/defer' }]
    }
  ]
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  // 关闭深色模式
  appearance: false,
  base: '/blog/',
  title: "Flygar's Blog",
  description: 'A flash in the pan.',
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: nav(),

    sidebar: {
      '/pages/linux/': sidebarLinux(),

      '/pages/rust/': sidebarRust(),
      '/pages/golang/': sidebarGolang(),
      '/pages/python/': sidebarPython(),

      '/pages/misc/': sidebarMisc()
    }
  }
})
