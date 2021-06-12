---
title: 特殊な要素の書き方
---

以下の要素は、環境によっては使えない場合もあります。

## 絵文字

GitHubやDiscordと同じように、`:smile:`(:smile:)、`:rage:`(:rage:) といったemojiが使える。

```md
|バージョン|対応|
|---|---|
|v1.16|:white_check_mark:|
|v1.17|:x:|
```

|バージョン|対応|
|---|---|
|v1.16|:white_check_mark:|
|v1.17|:x:|

## お知らせ・警告など
:::caution
Docusaurus v2以外では使えないので注意。**GitHub上ではただの文章になる。**
:::

### 通常のお知らせ
:::note
ここにお知らせ
:::

```md
:::note
ここにお知らせ
:::
```

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

### タイトル付き

`:::note タイトル`と書けば、`タイトル`がタイトルになる。(別にwarningとかでも構わない)

:::note タイトル
タイトル付きお知らせ
:::

```md
:::note タイトル
タイトル付きお知らせ
:::
```

## 数式

[KaTeX](https://katex.org/)を使える。(いつ使うんだよってツッコミは無しな! ...ウマ娘の育成論とかでワンチャン使えるんじゃね?)

```md
Let $f:[a,b] \to \R$ be Riemann integrable. Let $F:[a,b]\to\R$ be $F(x)=
\int_{a}^{x}f(t)dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.
```

Let $f:[a,b] \to \R$ be Riemann integrable. Let $F:[a,b]\to\R$ be $F(x)=
\int_{a}^{x}f(t)dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

### ブロック

```md
$$
I = \int_0^{2\pi} \sin(x) dx
$$
```

$$
I = \int_0^{2\pi} \sin(x) dx
$$

## カスタムブロック

https://github.com/zestedesavoir/zmarkdown/tree/master/packages/remark-custom-blocks

`remark-custom-blocks`により、普通のMarkdownにはない**独自のブロックを追加している。**

`[[ブロック名]]`または`[[ブロック名|タイトル]]`で使う。内容の各行に`|`をつける。

:::caution
ASOBINON以外では使えないので注意。**GitHub上ではただの文章になる。**
:::
### 「dl」

タイトル付きボックスが作れます。

[[dl | ここにタイトル]]
| ここに内容を入力
|
| もう一つ段落

```md
[[dl | ここにタイトル]]
| ここに内容を入力
|
| もう一つ段落
```

### 「big」

文字がでかくなります。

[[big]]
| ここに内容を入力
|
| もう一つ段落

```md
[[big]]
| ここに内容を入力
|
| もう一つ段落
```
