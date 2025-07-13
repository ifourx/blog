import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import StatusBadge from './components/StatusBadge.vue'
import './my-fonts.css'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StatusBadge', StatusBadge)
  }
} satisfies Theme
