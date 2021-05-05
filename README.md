# MD版

## 重要: Crowdinの設定

```crowdin.yml
project_id: '454660'
api_token: 'キー'
preserve_hierarchy: true
files: [
    # JSON translation files
    {
      source: '/i18n/ja/**/*',
      translation: '/i18n/%two_letters_code%/**/%original_file_name%',
    },
    # Docs Markdown files
    {
      source: '/docs/**/*',
      translation: '/i18n/%two_letters_code%/docusaurus-plugin-content-docs/current/**/%original_file_name%',
    },
    # Blog Markdown files
    {
      source: '/blog/**/*',
      translation: '/i18n/%two_letters_code%/docusaurus-plugin-content-blog/**/%original_file_name%',
    },
  ]
```

`crowdin.yml`はこうするが、**`%two_letters_code%`が`zh`になってしまい、正確に簡体中文を指定できない。**

そこで`Language Mapping`を使う。

https://support.crowdin.com/configuration-file/#language-mapping

この通りにやって簡体中文の`two_letters_code`を`zh-CN`にせよ。
