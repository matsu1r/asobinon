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
  favicon: 'favicon.ico',
  organizationName: 'sasigume',
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
      trackingID: 'G-B8WX467VDF',
    },
    metadatas: [
      {
        property: 'og:image',
        content: 'https://asobinon.org/ogp/ogp-1200x630.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://asobinon.org/ogp/ogp-1200x630.png',
      },
      { name: 'twitter:site', content: '@asobinon' },
    ],
    navbar: {
      hideOnScroll: true,
      title: 'ASOBINON',
      logo: {
        alt: 'Asobinon Logo',
        src: 'svg/logo.svg',
      },
      items: [
        {
          to: '/minecraft/',
          label: 'Minecraft (BE)',
          items: [
            {
              to: '/minecraft/howto/bedrock-friend-multiplayer-guide/',
              label: 'マルチプレイ方法',
            },
            {
              to: '/minecraft/howto/mobile-switch-world-transfer/',
              label: 'ワールド転送方法',
            },
            {
              to: '/minecraft/howto/howtouse-extra-addon-switch/',
              label: 'スイッチでアドオン',
            },
            {
              to: '/minecraft/howto/bedrock-command-words-pickup/',
              label: 'コマンド用語集',
            },
            {
              to: '/minecraft/howto/howtouse-summon-command/',
              label: 'summonコマンドの使い方',
            },
            {
              to: '/minecraft/reference/command-bedrock/',
              label: 'BEのコマンド一覧',
            },
          ],
        },
        {
          to: '/minecraft-je/',
          label: 'Minecraft (JE)',
          items: [
            {
              to: '/minecraft-je/howto/osusume-mod',
              label: 'おすすめMOD',
            },
            {
              to: '/minecraft-je/howto/install-forge/',
              label: 'MOD(Forge)導入方法',
            },
            {
              to: '/minecraft-je/howto/buy/',
              label: '購入方法',
            },
            {
              to: '/minecraft-je/mod/',
              label: 'MOD一覧',
            },
          ],
        },
        {
          href: 'https://github.com/sasigume/asobinon',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHubレポジトリ',
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
              to: '/eula/',
              label: '利用規約',
            },
            {
              to: '/privacy-policy/',
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
              href: `https://discord.gg/ASAXKMH`,
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
      copyright: `当サイトのソースコード・文章はMITライセンスで配布されていますが、リンク先や画像はライセンスの範囲外です。文章内に著作物が含まれている場合は削除、運営への通報をお願いします。Copyright © ${new Date().getFullYear()} sasigume. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),

          /* https://github.com/sasigume/asobinon-client/tree/main/src/pages/edit/index.tsx
          新エディター */
          editUrl: 'https://client.asobinon.org/editor?path=',
          remarkPlugins: [
            [
              remarkCustomBlocks,
              {
                dl: {
                  classes: 'remark-custom-blocks__dl',
                  title: 'required',
                },
                details: {
                  classes: 'remark-custom-blocks__details',
                  title: 'required',
                  titleElement: 'summary',
                  contentsElement: 'div',
                },
              },
            ],
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} sasigume.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '全ての投稿',
          /* https://github.com/sasigume/asobinon-client/tree/main/src/pages/edit/index.tsx
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
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#ff3f00',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#ff3f00',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/pwa/manifest-icon-512x.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/pwa/manifest-icon-512x.png',
            color: '#ff3f00',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/manifest-icon-512x.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#ff3f00',
          },
        ],
      },
    ],
  ],
};
