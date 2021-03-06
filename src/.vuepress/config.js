const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Cartografia social - Wiki",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  base: "/2021.1-Cartografia-social-docs/",
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "O projeto",
        link: "/projeto/",
      },
      {
        text: "Documentação",
        link: "/docs/",
      },
      {
        text: "Lean inception",
        link: "/lean/lean-inception",
      },
    ],
    sidebar: {
      "/projeto/": [
        {
          title: "A equipe",
          collapsable: false,
          children: [""],
        },
        {
          title: "Sobre o projeto",
          collapsable: false,
          children: ["projeto"],
        },
      ],
      "/lean/": [
        {
          title: "Documentação",
          collapsable: false,
          children: ["lean-inception"],
        },
      ],
      "/docs/": [
        {
          title: "Documento de Visão",
          collapsable: false,
          children: ["visao/document"],
        },
        {
          title: "Backlog & Sprints",
          collapsable: false,
          children: ["product-backlog", "sprint-1", "sprint-2", "sprint-3", "sprint-4", "sprint-5", "sprint-6", "sprint-7", "sprint-8", "sprint-9"],
        },
        {
          title: "Definições arquiteturais",
          collapsable: false,
          children: ["", 'cicd'],
        },
        {
          title: "Métricas",
          collapsable: false,
          children: ["metricas/quadro-de-conhecimentos"],
        },
        {
          title: "Planejamento de Qualidade",
          collapsable: false,
          children: ["qualidade"],
        },
        {
          title: "Prototipação",
          collapsable: false,
          children: [
            "prototipos/baixa_fidelidade",
            "prototipos/alta_fidelidade",
          ],
        },
        {
          title: "Identidade Visual",
          collapsable: false,
          children: ["identidade-visual"],
        },
        {
          title: "Contribuição",
          collapsable: false,
          children: ["contribuicao"],
        },
        {
          title: "Plano de gerenciamento de risco",
          collapsable: false,
          children: ["risco"],
        },
        {
          title: "Organização",
          collapsable: false,
          children: ["plano-comunicacao"],
        },
        {
          title: "Gerenciamento de Custos",
          collapsable: false,
          children: ["custos"],
        },
        {
          title: "Testes de Aceitação",
          collapsable: false,
          children: ["teste-aceitacao"],
        },
        {
          title: "Dados do Analytics",
          collapsable: false,
          children: ["analytics"],
        },
        {
          title: "Próximos Passos",
          collapsable: false,
          children: ["proximos-passos"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
