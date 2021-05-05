/** @type {import('@docusaurus/types').DocusaurusConfig} */
require('dotenv').config();
module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  title: process.env.SITE_NAME,
  tagline: 'ナポアンのマイクラを運用する時のドキュメントです',
  url: 'https://docs.napoan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sasigume',
  projectName: 'projectnapoancom-docs-saurus2021',
  themeConfig: {
    navbar: {
      title: process.env.SITE_NAME,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'contentful/intro',
          position: 'left',
          label: 'Contentful',
        },
        {
          type: 'doc',
          docId: 'client/intro',
          position: 'left',
          label: 'クライアント',
        },
        {
          type: 'doc',
          docId: 'backend/intro',
          position: 'left',
          label: 'バックエンド',
        },
        {
          href: `https://twitter.com/sasigume`,
          label: 'Twitter',
          position: 'right',
        },
        {
          href: `https://github.com/sasigume`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: 'Contentful編',
              to: '/docs/contentful/intro',
            },
            {
              label: 'クライアント編',
              to: '/docs/client/intro',
            },
            {
              label: 'バックエンド編',
              to: '/docs/backend/intro',
            },
          ],
        },
        {
          title: 'SNS',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/sasigume`,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/sasigume`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sasigume. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // for-editブランチがあるから紛らわしい！
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/for-edit/',
        },
        blog: {
          showReadingTime: true,
          // for-editブランチがあるから紛らわしい！
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/for-edit/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus2-dotenv'],
};
