/** @type {import('@docusaurus/types').DocusaurusConfig} */
const DefaultLocale = 'ja';

const isDeployPreview =
  process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: isDeployPreview
      ? // プレビュー高速化
        ['ja']
      : // プレビュー以外
        ['ja', 'en', 'zh-CN'],
  },
  title: 'ナポアンのマイクラMD',
  tagline: 'Markdown版ナポアンのマイクラです,',
  url: 'https://md.napoan.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sasigume',
  projectName: 'projectnapoancom-docs-saurus2021',
  themeConfig: {
    navbar: {
      title: 'ナポアンのマイクラMD',
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
          docId: 'admin/intro',
          position: 'left',
          label: '管理編',
        },
        {
          type: 'doc',
          docId: 'posts/intro',
          position: 'left',
          label: '記事',
        },
        {
          type: 'doc',
          docId: 'people/intro',
          position: 'left',
          label: '関わった人々',
        },
        {
          href: `https://twitter.com/sasigume`,
          label: 'Twitter',
          position: 'right',
        },
        {
          href: `https://github.com/sasigume/projectnapoancom-docs-saurus2021`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '管理編',
          items: [
            {
              label: 'Contentful',
              to: '/docs/admin/contentful/intro',
            },
            {
              label: 'クライアント(Next)',
              to: '/docs/admin/client/next-2021/intro',
            },
            {
              label: 'クライアント(WP)',
              to: '/docs/admin/client/wordpress/intro',
            },
            {
              label: 'バックエンド',
              to: '/docs/admin/backend/intro',
            },
          ],
        },
        {
          title: 'その他',
          items: [
            {
              label: 'ブログ',
              to: '/blog',
            },
            {
              label: '関わった人',
              to: '/docs/people/intro',
            },
            {
              label: '貢献する',
              to: '/docs/join/intro',
            },
            {
              label: '記事のバックアップ',
              to: '/docs/posts/intro',
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
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/napoancom-docs-saurus2021/${locale}`;
            }
            return `https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({ locale, blogDirPath, blogPath }) => {
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/napoancom-docs-saurus2021/${locale}`;
            }
            return `https://github.com/sasigume/projectnapoancom-docs-saurus2021/edit/main/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
