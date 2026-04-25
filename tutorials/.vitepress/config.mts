import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '产品经理学习教程',
  description: '从零开始系统学习产品经理 — 概念、方法论、工具、实战',
  lang: 'zh-CN',
  base: '/my-pm-tutorial/',

  themeConfig: {
    logo: '📦',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路线', link: '/README' },
      {
        text: '基础认知',
        items: [
          { text: '认识产品经理', link: '/01-what-is-pm/' },
          { text: '核心术语', link: '/02-core-concepts/' },
        ],
      },
      {
        text: '方法论',
        items: [
          { text: '用户研究', link: '/03-user-research/' },
          { text: '产品设计', link: '/04-product-design/' },
          { text: 'PRD', link: '/05-prd/' },
        ],
      },
      {
        text: '执行与战略',
        items: [
          { text: '项目管理', link: '/06-project-management/' },
          { text: '数据驱动', link: '/07-data-driven/' },
          { text: '产品战略', link: '/08-product-strategy/' },
        ],
      },
      {
        text: '实战 & 资源',
        items: [
          { text: '实战演练', link: '/09-real-world-practice/' },
          { text: '学习资源', link: '/10-resources/' },
        ],
      },
    ],

    sidebar: {
      '/01-what-is-pm/': [
        {
          text: '01 · 认识产品经理',
          items: [
            { text: '模块概览', link: '/01-what-is-pm/' },
            { text: '角色定义与职责', link: '/01-what-is-pm/01-pm-role' },
            { text: 'PM 的分类', link: '/01-what-is-pm/02-pm-types' },
            { text: '职业发展路径', link: '/01-what-is-pm/03-pm-career' },
          ],
        },
      ],
      '/02-core-concepts/': [
        {
          text: '02 · 核心概念与术语',
          items: [
            { text: '模块概览', link: '/02-core-concepts/' },
            { text: '商业术语', link: '/02-core-concepts/01-business-terms' },
            { text: '产品术语', link: '/02-core-concepts/02-product-terms' },
            { text: '技术术语', link: '/02-core-concepts/03-tech-terms' },
            { text: '设计术语', link: '/02-core-concepts/04-design-terms' },
          ],
        },
      ],
      '/03-user-research/': [
        {
          text: '03 · 用户研究与需求分析',
          items: [
            { text: '模块概览', link: '/03-user-research/' },
            { text: '用户画像', link: '/03-user-research/01-user-persona' },
            { text: '调研方法', link: '/03-user-research/02-user-research-methods' },
            { text: '需求分析与优先级', link: '/03-user-research/03-requirement-analysis' },
            { text: '用户旅程地图', link: '/03-user-research/04-user-journey' },
          ],
        },
      ],
      '/04-product-design/': [
        {
          text: '04 · 产品设计',
          items: [
            { text: '模块概览', link: '/04-product-design/' },
            { text: '信息架构', link: '/04-product-design/01-information-architecture' },
            { text: '线框图与原型', link: '/04-product-design/02-wireframe-prototype' },
            { text: '交互设计', link: '/04-product-design/03-interaction-design' },
            { text: 'Figma 实操入门', link: '/04-product-design/04-figma-hands-on' },
          ],
        },
      ],
      '/05-prd/': [
        {
          text: '05 · PRD',
          items: [
            { text: '模块概览', link: '/05-prd/' },
            { text: 'PRD 结构与规范', link: '/05-prd/01-prd-structure' },
            { text: 'PRD 模板与范例', link: '/05-prd/02-prd-template' },
            { text: '其他产品文档', link: '/05-prd/03-other-documents' },
          ],
        },
      ],
      '/06-project-management/': [
        {
          text: '06 · 项目管理与协作',
          items: [
            { text: '模块概览', link: '/06-project-management/' },
            { text: '敏捷与 Scrum', link: '/06-project-management/01-agile-scrum' },
            { text: '协作工具', link: '/06-project-management/02-tools' },
            { text: '跨团队沟通', link: '/06-project-management/03-cross-team' },
          ],
        },
      ],
      '/07-data-driven/': [
        {
          text: '07 · 数据驱动',
          items: [
            { text: '模块概览', link: '/07-data-driven/' },
            { text: '核心指标体系', link: '/07-data-driven/01-metrics' },
            { text: 'A/B 测试', link: '/07-data-driven/02-ab-testing' },
            { text: '数据工具', link: '/07-data-driven/03-data-tools' },
          ],
        },
      ],
      '/08-product-strategy/': [
        {
          text: '08 · 产品战略',
          items: [
            { text: '模块概览', link: '/08-product-strategy/' },
            { text: '竞品分析', link: '/08-product-strategy/01-competitive-analysis' },
            { text: '商业模式', link: '/08-product-strategy/02-business-model' },
            { text: '产品生命周期', link: '/08-product-strategy/03-product-lifecycle' },
          ],
        },
      ],
      '/09-real-world-practice/': [
        {
          text: '09 · 实战演练',
          items: [
            { text: '模块概览', link: '/09-real-world-practice/' },
            { text: '案例拆解', link: '/09-real-world-practice/01-case-study' },
            { text: '模拟产品设计', link: '/09-real-world-practice/02-practice-project' },
            { text: '面试准备', link: '/09-real-world-practice/03-interview-prep' },
          ],
        },
      ],
      '/10-resources/': [
        {
          text: '10 · 学习资源',
          items: [
            { text: '模块概览', link: '/10-resources/' },
            { text: '推荐书单', link: '/10-resources/01-books' },
            { text: '推荐课程', link: '/10-resources/02-courses' },
            { text: '社区与持续学习', link: '/10-resources/03-communities' },
          ],
        },
      ],
    },

    socialLinks: [],
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '多语言',
  },
})
