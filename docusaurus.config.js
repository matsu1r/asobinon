/** @type {import('@docusaurus/types').DocusaurusConfig} */
require('dotenv').config();
module.exports = {
  title: process.env.SITE_NAME ?? '環境変数を設定してください',
  tagline: 'ナポアンのマイクラを運用する時のドキュメントです',
  url: process.env.HTTPS_URL ?? 'https://docs.napoan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sasigume',
  projectName: 'projectnapoancom',
  themeConfig: {
    navbar: {
      title: process.env.SITE_NAME ?? '環境変数を設定してください',
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
          href: `https://twitter.com/${process.env.TWITTER_ID}`,
          label: 'Twitter',
          position: 'right',
        },
        {
          href: `https://github.com/${process.env.GITHUB_ID}`,
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
              to: '/docs/contentful',
            },
            {
              label: 'WordPress編',
              to: '/docs/wordpress',
            },
            {
              label: 'クライアント編',
              to: '/docs/client',
            },
            {
              label: 'バックエンド編',
              to: '/docs/backend',
            },
          ],
        },
        {
          title: 'SNS',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/${process.env.TWITTER_ID}`,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${process.env.GITHUB_ID}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${
        process.env.COPYRIGHT
      } Built with Docusaurus.`,
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
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus2-dotenv'],
};
