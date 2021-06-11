/** @type {import('@docusaurus/types').DocusaurusConfig} */

const THEME_COLOR = '#ff3f00';
const remarkCustomBlocks = require('remark-custom-blocks');
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {ああああああ
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  title: 'アソビノン',
  tagline: '非営利・オープンソースゲーム攻略サイト',
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
              to: '/minecraft/howto//',
              label: 'ハウツー',
            },
            {
              to: '/minecraft/addon/',
              label: 'アドオン',
            },
            {
              to: '/minecraft/seed/',
              label: 'シード値',
            },
            { to: '/minecraft/command/', label: 'コマンド' },
          ],
        },
        {
          to: '/minecraft-je/',
          label: 'Minecraft (JE)',
          items: [
            {
              to: '/minecraft-je/howto/',
              label: 'ハウツー',
            },
            {
              to: '/minecraft-je/mod/',
              label: 'MOD',
            },
          ],
        },
        { to: '/blog', label: 'ブログ' },
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
            {
              to: '/hytale/',
              label: 'Hytale',
            },
          ],
        },
        {
          title: '編集ガイド',
          items: [
            {
              to: '/ASOBINON/contribute/markdown/',
              label: 'Markdownの書き方',
            },
            {
              to: '/ASOBINON/contribute/image/',
              label: '画像アップ方法',
            },
            {
              to: '/ASOBINON/contribute/local/',
              label: 'ローカルで編集する方法',
            },
          ],
        },
        {
          title: '特別なページ',
          items: [
            {
              to: '/code-of-conduct/',
              label: '行動規範',
            },
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
              label: '管理人に連絡',
              href: `https://twitter.com/sasigume`,
            },
          ],
        },
      ],
      copyright: `当サイトのソースコード・文章はMITライセンスで配布されていますが、リンク先や画像はライセンスの範囲外です。文章内に著作物が含まれている場合は削除、運営への通報をお願いします。Built with Docusaurus.`,
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
          editUrl: 'https://github.com/sasigume/asobinon/edit/main/',
          remarkPlugins: [
            math,
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
                big: {
                  classes: 'remark-custom-blocks__big',
                  title: 'optional',
                },
              },
            ],
          ],
          rehypePlugins: [katex],
        },
        blog: {
          blogTitle: '運営ブログ',
          blogDescription: 'アソビノンの編集に関することを記録するブログです。',
          path: './blog',
          feedOptions: {
            type: 'all',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      // KaTeX用
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
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
            content: THEME_COLOR,
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: THEME_COLOR,
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
            color: THEME_COLOR,
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/manifest-icon-512x.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: THEME_COLOR,
          },
        ],
      },
    ],
  ],
};
