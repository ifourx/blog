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
        {
          items: [
            { text: 'Linux', link: '/pages/linux/' },
            { text: 'Docker', link: '/pages/docker/' }
          ]
        },
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
      collapsed: false,
      items: [
        { text: 'Markdown Examples', link: '/pages/misc/markdown-examples' },
        { text: 'Runtime API Examples', link: '/pages/misc/api-examples' }
      ]
    },
    {
      text: 'Tips',
      collapsed: false,
      items: [{ text: 'Did You Know', link: '/pages/misc/tips/did_you_know' }]
    }
  ]
}
function sidebarDocker(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Docker',
      items: [{ text: 'Pass', link: '/pages/docker/pass' }]
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
        { text: 'H-UI 面板', link: '/pages/linux/hui' },
        { text: 'Git', link: '/pages/linux/git' },
        { text: 'How To', link: '/pages/linux/how_to' },
        { text: 'ssh', link: '/pages/linux/ssh' }
      ]
    },
    {
      text: 'Tools',
      collapsed: false,
      items: [
        { text: 'oh-my-zsh', link: '/pages/linux/tools/ohmyzsh' },
        { text: 'starship', link: '/pages/linux/tools/starship' },
        { text: 'shortkeys', link: '/pages/linux/tools/shortkeys' },
        { text: 'tmux', link: '/pages/linux/tools/tmux' }
      ]
    }
  ]
}
function sidebarRust(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Rust',
      items: [
        { text: 'cargo', link: '/pages/rust/cargo' },
        { text: '所有权', link: '/pages/rust/ownership' },
        { text: '集合', link: '/pages/rust/collections' },
        { text: '错误处理', link: '/pages/rust/error' },
        { text: '生命周期', link: '/pages/rust/lifetime' },
        { text: '特征', link: '/pages/rust/trait' }
      ]
    }
  ]
}
function sidebarPython(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Python',
      items: [{ text: 'test1', link: '/pages/python/test1' }]
    }
  ]
}
function sidebarGolang(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Golang',
      items: [{ text: 'defer', link: '/pages/golang/defer' }]
    }
  ]
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  // 关闭深色模式
  appearance: false,
  // 1. 使用自定义仓库名才需要配置,但如果还设置了自定义域名那也不需要配置
  // base: '/blog/',
  title: "Flygar's Blog",
  description: 'A flash in the pan.',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: nav(),

    sidebar: {
      '/pages/linux/': sidebarLinux(),
      '/pages/docker/': sidebarDocker(),

      '/pages/rust/': sidebarRust(),
      '/pages/golang/': sidebarGolang(),
      '/pages/python/': sidebarPython(),

      '/pages/misc/': sidebarMisc()
    }
  }
})
