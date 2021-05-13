/** @type {import('@docusaurus/types').DocusaurusConfig} */

const remarkCustomBlocks = require('remark-custom-blocks');

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  title: 'Markdown Gaming',
  tagline:
    'マークダウンゲーミング。ゲームメディアをWebという視点から再定義する',
  url: 'https://md.napoan.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sasigume',
  projectName: 'markdown-gaming',
  themeConfig: {
    /* 申請し、審査を通ったのでAlgolia DocSearchを使っています
    ここは絶対に変えないでください */
    algolia: {
      apiKey: '2a6a7c9faf0bdfffc0af68c6e9d16ff4',
      indexName: 'napoan',
    },
    googleAnalytics: {
      trackingID: 'UA-182248553-8',
    },
    gtag: {
      trackingID: 'UA-182248553-8',
    },
    metadatas: [
      {
        property: 'og:image',
        content: 'https://md.napoan.com/img/ogp/logo-ogp.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://md.napoan.com/img/ogp/logo-ogp.png',
      },
      { name: 'twitter:site', content: '@napoancom' },
    ],
    navbar: {
      title: 'Markdown Gaming',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/howtoedit/intro',
          label: 'Contribute',
        },
        {
          to: '/docs/minecraft/intro',
          label: 'Minecraft',
        },
        {
          to: '/docs/hytale/intro',
          label: 'Hytale',
        },
        {
          to: '/eula',
          label: 'Terms',
          position: 'right',
        },
        {
          to: '/privacy-policy',
          label: 'Privacy Policy',
          position: 'right',
        },
        {
          href: `https://github.com/sasigume/markdown-gaming`,
          label: 'Repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sitemap',
          items: [
            {
              to: '/docs/minecraft/intro',
              label: 'Minecraft',
            },
            {
              to: '/docs/minecraft/intro',
              label: 'Hytale',
            },
            {
              to: '/docs/special/intro',
              label: 'Special pages',
            },
            {
              to: '/blog',
              label: 'Blog',
            },
            {
              to: '/eula',
              label: '利用規約',
            },
            {
              to: '/privacy-policy',
              label: 'プライバシーポリシー',
            },
          ],
        },
        {
          title: 'Special pages',
          items: [
            {
              to: '/docs/special/gcp-wordpress/intro',
              label: 'GCP+WordPress',
            },
            {
              to: '/docs/special/vercel/intro',
              label: 'Vercel',
            },
            {
              to: '/docsspecial/napoan-no-maikura/intro',
              label: 'ナポアンのマイクラ辞典',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/markdowngaming`,
            },
            {
              label: 'Discord',
              href: `https://discord.gg/invite/ASAXKMH`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} imaicu. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sasigume/markdown-gaming/edit/main/',
          remarkPlugins: [
            [
              remarkCustomBlocks,
              {
                dl: {
                  classes: 'remark-custom-blocks__dl',
                  title: 'required',
                },
              },
            ],
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} imaicu.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '全ての投稿',
          editUrl: 'https://github.com/sasigume/markdown-gaming/edit/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@saucelabs/theme-github-codeblock'],
};
