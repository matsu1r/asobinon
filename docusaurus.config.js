/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  title: 'ナポアンのマイクラMD',
  tagline: '全てを記録。公開。全く新しい形のマイクラ攻略',
  url: 'https://md.napoan.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sasigume',
  projectName: 'projectnapoancom-docs-saurus2021',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-182248553-8',
    },
    navbar: {
      title: 'ナポアンのマイクラMD',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/blog',
          label: 'ブログ',
        },
        {
          to: '/docs/intro',
          label: 'ドキュメント',
        },
        {
          to: '/docs/people/intro',
          label: 'メンバー',
        },
        {
          to: '/eula',
          label: '利用規約',
          position: 'right',
        },
        {
          to: '/privacy-policy',
          label: 'プライバシーポリシー',
          position: 'right',
        },
        {
          href: `https://github.com/sasigume/projectnapoancom-docs-saurus2021`,
          label: 'レポジトリ',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'サイトマップ',
          items: [
            {
              to: '/blog',
              label: 'ブログ',
            },
            {
              to: '/docs/intro',
              label: 'ドキュメント',
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
          title: 'ドキュメント',
          items: [
            {
              to: '/docs/admin-tech/intro',
              label: '技術的な解説',
            },
            {
              to: '/docs/people/intro',
              label: 'メンバー',
            },
            {
              to: '/docs/posts/intro',
              label: '記事のバックアップ',
            },
            {
              to: '/docs/howtoeditmdver/intro',
              label: 'このサイトの編集方法',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/sasigume`,
            },
            {
              label: 'GitHub',
              href: `https://github.com/sasigume/projectnapoancom-docs-saurus2021`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aelyone. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/edit-this-branch/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/edit-this-branch/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
