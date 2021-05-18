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
      { name: 'twitter:site', content: '@asobinon' },
    ],
    navbar: {
      hideOnScroll: true,
      title: 'ASOBINON',
      logo: {
        alt: 'Asobinon Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/minecraft/',
          label: 'Minecraft (BE)',
          items: [
            {
              to: '//minecraft/reference/command-bedrock/',
              label: 'BEのコマンド',
            },
            {
              to: '//minecraft/howto/bedrock-friend-multiplayer-guide/',
              label: 'マルチプレイ',
            },
          ],
        },
        {
          to: '/minecraft-je/',
          label: 'Minecraft (JE)',
          items: [
            {
              to: '/minecraft-je/howto/install-forge/',
              label: 'MOD(Forge)導入方法',
            },
            {
              to: '/minecraft-je/howto/install-optifine/',
              label: 'OptiFine導入方法',
            },
          ],
        },
        {
          to: '/hytale/',
          label: 'Hytale',
        },
        {
          to: '/umamusume/',
          label: 'ウマ娘',
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
          title: 'ゲーム',
          items: [
            {
              to: '/minecraft/',
              label: 'Minecraft (BE)',
            },
            {
              to: '/minecraft-je/',
              label: 'Minecraft (JE)',
            },
          ],
        },
        {
          title: '特別なページ',
          items: [
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
          title: 'コミュニティ',
          items: [
            {
              label: 'Twitter',
              href: `https://twitter.com/asobinon`,
            },
            {
              label: 'Discord',
              href: `https://discord.gg/Nw8mEKSeut`,
            },
            {
              label: 'お問い合わせ',
              href: `https://client.asobinon.org/contact`,
            },
            {
              label: '運営',
              href: `https://aely.one`,
            },
          ],
        },
      ],
      copyright: `当サイトのソースコード・文章はMITライセンスで配布されていますが、リンク先や画像はライセンスの範囲外です。文章内に著作物が含まれている場合は削除、運営への通報をお願いします。Copyright © ${new Date().getFullYear()} AELYONE. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/minecraft/howto/bedrock-friend-multiplayer-guide/',
            from: ['/minecraft/howto/bedrock-friend-multiplayer-guide/intro'],
          },
          {
            to: '/minecraft-je/howto/install-optifine/',
            from: ['/minecraft-je/howto/install-optifine/intro'],
          },
          {
            to: '/minecraft-je/howto/install-forge/',
            from: ['/minecraft-je/howto/install-forge/intro'],
          },
        ],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),

          /* https://github.com/aelyone/asobinon-client/tree/main/src/pages/edit/index.tsx
          //XXXが渡される */
          editUrl: 'https://client.asobinon.org/edit/?path=',
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
          editUrl: 'https://client.asobinon.org/edit/?path=',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@saucelabs/theme-github-codeblock'],
};
