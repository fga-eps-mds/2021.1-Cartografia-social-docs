const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cartografia social - Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  base: '/2021.1-Cartografia-social-docs/',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'O projeto',
        link: '/projeto/',
      },
      {
        text: 'Documentação',
        link: '/docs/',
      },
      {
        text: 'Lean inception',
        link: '/lean/',
      },
    ],
    sidebar: {
      '/projeto/': [
        {
          title: 'A equipe',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Sobre o projeto',
          collapsable: false,
          children: [
            'projeto',
          ]
        }
      ],
      '/docs/': [
        {
          title: 'Product Backlog',
          collapsable: false,
          children: [
            'product-backlog',
          ]
        },
        {
          title: 'Definições arquiteturais',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Prototipação',
          collapsable: false,
          children: [
            'prototipos/baixa_fidelidade',

          ]
        },
        {
          title: 'Contribuição',
          collapsable: false,
          children: [
            'contribuicao',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
