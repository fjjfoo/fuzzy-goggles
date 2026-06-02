import DefaultTheme from 'vitepress/theme'
import CustomHome from './components/CustomHome.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomHome', CustomHome)
  }
}