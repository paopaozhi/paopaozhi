import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: '主页',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: '项目',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: '博客',
  icon: 'i-lucide-file-text',
  to: '/blog'
},  {
  label: '关于我',
  icon: 'i-lucide-user',
  to: '/about'
}]
