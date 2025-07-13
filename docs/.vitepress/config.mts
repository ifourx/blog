import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  appearance: false,
  base: '/blog/',
  title: "Flygar's Blog",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // siteTitle: '111111',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: "Pages", items: [
        {
            items: [
              { text: 'Linux', link: '/pages/linux/index' },
            ]
          },  

          {
            items: [
          { text: 'Rust', link: '/pages/rust/index' },
          { text: 'Golang', link: '/pages/golang/index' },
          { text: 'Python', link: '/pages/python/index' },
        ]},
          
           

          {
            items: [
              { text: 'Misc', link: '/pages/misc/' },
            ]
          }
      ]},
      
      {component: 'StatusBadge',},

    ],

    sidebar: {
      "/pages/misc/":[
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/pages/misc/markdown-examples' },
          { text: 'Runtime API Examples', link: '/pages/misc/api-examples' }
        ]
      },
      ],
      "/pages/linux/": [
            {
        text: 'Linux',
          items: [
            { text: 'VPS 安全指北', link: '/pages/linux/vps_reload' },
            { text: 'H-UI 面板', link: '/pages/linux/hui' },
        ]
        },
        {
        text: 'Tools',
          items: [
            { text: 'oh-my-zsh', link: '/pages/linux/tools/ohmyzsh' },
            { text: 'starship', link: '/pages/linux/tools/starship' },
        ]
        },
        
      ],
      "/pages/rust/": [
              {
        text: 'Rust',
          items: [
          { text: 'rust1', link: '/pages/rust/rust1' },
        ]
      }
      ],

      "/pages/python/": [
              {
        text: 'python',
          items: [
          { text: 'test1', link: '/pages/python/test1' },
        ]
      }
      ],

      "/pages/golang/": [
              {
        text: 'golang',
          items: [
          { text: 'defer', link: '/pages/golang/defer' },
        ]
      }
      ],

    },
  
  }
})
