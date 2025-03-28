import type { ThemeUserConfig } from 'valaxy-theme-modern'
import { defineValaxyConfig } from 'valaxy'


export default defineValaxyConfig<ThemeUserConfig>({
  theme: 'modern',

  themeConfig: {
    logo: {
      dark: '/logo_dark.png',
      light: '/logo_light.png',
    },

    hero: {
      title: 'SHOMPINICE',
      description: 'Elegant. Modern. Inspiring.',
    },

    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-ri-home-line',
      },
      {
        text: 'MackBook',
        link: '/posts',
        icon: 'i-ri-menu-line',
      },
      {
        text: 'iPad',
        link: '/ipad',
        icon: 'i-ri-chat-1-line',
      },
      {
        text: 'About',
        link: '/about',
        icon: 'i-ri-information-line',
      },
    ],


    footer: {
      since: 2025,
    },
  },
})
