/** @type {import('@docusaurus/types').DocusaurusConfig} */

const remarkCustomBlocks = require('remark-custom-blocks');

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  title: 'ASOBINON',
  tagline: 'アソビノン。GitHubで管理するゲーム攻略サイト',
  url: 'https://asobinon.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aelyone',
  projectName: 'asobinon',
  themeConfig: {
    /* 申請し、審査を通ったのでAlgolia DocSearchを使っています
    ここは絶対に変えないでください */
    algolia: {
      apiKey: '2a6a7c9faf0bdfffc0af68c6e9d16ff4',
      indexName: 'napoan',
    },
    /* GA4は「GTAG」を使う */
    gtag: {
      trackingID: 'G-TZJCD1SKG6',
    },
    metadatas: [
      {
        property: 'og:image',
        content: 'https://asobinon.org/img/ogp/logo-ogp.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://asobinon.org/img/ogp/logo-ogp.png',
      },
      { name: 'twitter:site', content: '@napoancom' },
    ],
    navbar: {
      hideOnScroll: true,
      title: 'ASOBINON',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/minecraft/intro',
          label: 'Minecraft',
          items: [
            {
              to: '/docs/minecraft/reference/command-bedrock/intro',
              label: 'BEのコマンド',
            },
            {
              to:
                '/docs/minecraft/howto/bedrock-friend-multiplayer-guide/intro',
              label: 'マルチプレイ',
            },
            {
              to: '/docs/minecraft/howto/install-forge/intro',
              label: 'MOD(Forge)導入方法',
            },
            {
              to: '/docs/minecraft/howto/install-optifine/intro',
              label: 'OptiFine導入方法',
            },
          ],
        },
        {
          to: '/docs/hytale/intro',
          label: 'Hytale',
        },
        {
          to: 'https://discord.gg/Nw8mEKSeut',
          label: 'Discord',
          position: 'right',
        },
        {
          href: `https://github.com/aelyone/asobinon`,
          label: 'レポジトリ',
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
          title: 'Links',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/markdowngaming`,
            },
            {
              label: 'Discord',
              href: `https://discord.gg/Nw8mEKSeut`,
            },
            {
              label: 'お問い合わせ',
              href: `https://md-contact.ima.icu`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} aelyone. Built with Docusaurus.`,
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

          /* https://github.com/aelyone/asobinon-client/tree/main/src/pages/edit/index.tsx
          /docs/XXXが渡される */
          editUrl: 'https://mdg.ima.icu/edit/?path=',
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
            copyright: `Copyright © ${new Date().getFullYear()} aelyone.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '全ての投稿',
          /* https://github.com/aelyone/asobinon-client/tree/main/src/pages/edit/index.tsx
          /blog/XXXが渡される */
          editUrl: 'https://mdg.ima.icu/edit/?path=',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@saucelabs/theme-github-codeblock'],
};
