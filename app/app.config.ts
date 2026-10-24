export default defineAppConfig({
  global: {
    picture: {
      dark: '/picture.png',
      light: '/picture.png',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    register: "蜀ICP备2022001928号-3",
    policeRegister: "渝公网安备50010602503953",
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/paopaozhi',
      'target': '_blank',
      'aria-label': 'paopaozhi on GitHub'
    },{
      'icon': 'i-simple-icons-gitee',
      'to': 'https://gitee.com/paopaozhi',
      'target': '_blank',
      'aria-label': 'paopaozhi on Gitee'
    }, {
      'icon': 'i-simple-icons-bilibili',
      'to': 'https://space.bilibili.com/375609633',
      'target': '_blank',
      'aria-label': 'paopaozhi on Bilibili'
    }]
  }
})
