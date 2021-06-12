---
title: GitHubのコードを埋め込む方法
---

GitHubのレポジトリに置いてあるコードを埋め込むことができます。

`````md

```tsx reference
https://github.com/sasigume/asobinon/blob/main/docs/ASOBINON/contribute/markdown/7-github-embed.md
```

`````

このように`言語名 reference`と書いてください。

すると以下のようにコードブロックが出ます。

```tsx reference
https://github.com/sasigume/asobinon/blob/main/docs/ASOBINON/contribute/markdown/7-github-embed.md
```

## どうやってるの?

<https://github.com/saucelabs/docusaurus-theme-github-codeblock>

こちらのプラグインを使っています。
