---
title: 特殊な要素の書き方
---

## お知らせ・警告など
:::caution
Docusaurus v2以外では使えないので注意。**GitHub上ではただの文章になる。**
:::

### 警告
:::warning
ここに警告
:::

```md
:::warning
ここに警告
:::
```

### 注意
:::caution
ここに注意
:::

```md
:::caution
ここに注意
:::
```

### 情報
:::info
ここに情報
:::

```md
:::info
ここに情報
:::
```

### 成功
:::success
できました!
:::

```md
:::success
できました!
:::
```

## カスタムブロック

https://github.com/zestedesavoir/zmarkdown/tree/master/packages/remark-custom-blocks

`remark-custom-blocks`により、普通のMarkdownにはない**独自のブロックを追加している。**
:::caution
ASOBINON以外では使えないので注意。**GitHub上ではただの文章になる。**
:::
### 「dl」

[[dl | ここにタイトル]]
| ここに内容を入力

```md
[[dl | ここにタイトル]]
| ここに内容を入力
```
