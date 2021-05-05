/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  title: 'ナポアンのマイクラ管理用ドキュメント',
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
      title: 'ナポアンのマイクラ管理用ドキュメント',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
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
          type: 'doc',
          docId: 'wordpress/intro',
          position: 'left',
          label: 'WordPress',
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
              label: 'WordPress編',
              to: '/docs/wordpress/intro',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
