/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  title: 'ナポアンのマイクラMD',
  tagline:
    'ゲームメディアをWebという視点から再定義する - Transform gaming media with modern web techs',
  url: 'https://md.napoan.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sasigume',
  projectName: 'napoancom-md',
  themeConfig: {
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
      title: 'ナポアンのマイクラMD',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/howtomakenapoancom/gcp-wordpress/intro',
          label: 'GCP+WordPressを利用したサイトの構築',
        },
        {
          to: '/docs/howtomakenapoancom/vercel/intro',
          label: 'Vercel+Firebaseを利用したサイトの構築',
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
          href: `https://github.com/sasigume/napoancom-md`,
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
              to: '/docs/howtomakenapoancom/gcp-wordpress',
              label: 'GCP+WordPress',
            },
            {
              to: '/docs/howtomakenapoancom/vercel',
              label: 'vercel',
            },
            {
              to: '/docs/howtoedit/intro',
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
              href: `https://github.com/sasigume/napoancom-md`,
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sasigume/napoancom-md/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Aelyone.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '全ての投稿',
          editUrl: 'https://github.com/sasigume/napoancom-md/edit/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@saucelabs/theme-github-codeblock'],
};
