---
title: フォルダ追加ガイド
---

## フォルダ名は半角英数字

**複数のページのURLに影響するので、**必ず半角英数字を使ってください。

また、`?`や`.`をつけないでください。

## \_category\_.json

```json
{
  "label": "ファイル・フォルダ命名ガイド",
  "position": 1
}
```

このような`_category_.json`を作成し、中に入れてください。

## index.mdとスラッグを設定する

フォルダ内で、**どれが目次・最初のページなのか明示するために`index.md`の設置を推奨しています。**

```md
slug: /ゲーム名/フォルダ名1/フォルダ名2/
sidebar_position: 0
```

その際は、

- **上記のように、スラッシュで終わる`slug`を設定してください。**
  - でないと、`(フォルダ名)/index`がURLになってしまいます。
  - 必ず`/ゲーム名/`から書き始める必要があります。
- **`sidebar_position: 0`を設定してください。** 目次を一番上に出すためです。

[[dl|なぜslug指定が必要か]]
|<https://zenn.dev/sasigume/articles/docusaurus-slug-like-index-html>
|
|**`index.md`が`index`フォルダになってしまうからです。**
|`/(フォルダ名)/index/index.html`が作られた結果、`(フォルダ名)/index`がURLになってしまうのです。
