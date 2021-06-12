---
title: 統合版(BE)の全コマンドの使い方一覧
slug: /minecraft/command/
sidebar_position: 0
---

ここでは、Bedrock Editionのコマンドのみを扱います。

## コマンドの入力方法
### タッチパネル

![](https://bn02pap001files.storage.live.com/y4mOlX9qD3v6rdZlYQjLjS6I0N-x7vkioHJ0qQcTUJpQuZbEn1lPiQBNy3z_D_TO_KVaf-Oj1O7Wumlpi4yS_WE8KX-w9C8QVxvwvYFDuioZ4sPGBGWbVHBgg-132JolOVVFolCOfnt8ZOFZsIYiwR31_P-YMoyZYyRJ_c6VDze23cJVtqBlrZW3oChpm3EjB5u?width=643&height=308&cropmode=none)

まずは画面上側のチャットボタンを押す。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105555.png)

チャット画面で**半角スラッシュ**から始まる文章を打てば、それはチャットではなくコマンドの扱いになる。

### 物理キーボード

端末にキーボードを接続している場合は、いきなり/キーを押してもコマンドを入力できる。

## コマンドブロックの入手方法

[[dl|コマンドブロックを1つ手に入れるコマンド]]
|![](https://bn02pap001files.storage.live.com/y4muv1KVBX36wceiiJVeX05Y_q48w960vq7OXvKIK4uytr7Ss71UgLAuPcig9LVrhOX6t65sbwD71s3ojtowoCGwxUvTWL8fVbGxKqHkAnMr3qq1wGkTN3NLN1zOTRDnL287I67MwzuYQyImHDmnx3lK-oCqs-fnQvqg-9GNFpK-9CKFN9L0hTn7_jjN-MKdKQX?width=574&height=412&cropmode=none)
|```
|/give @s command_block
|```

## 凡例

### コマンドの概要表

|項目|内容|
|---|---|
|コマンド|コマンドの名前|
|目的|コマンドの目的|
|必要な権限レベル|下で詳しく解説|
|コマブロで実行|コマンドブロックが実行できるか|
|適用対象|主に何が対象か|

### 権限レベルとは

以下、統合版における「OPレベル」である。

|エンティティ|権限レベル|
|---|---|
|オペレーターがOFFの人|0|
|マルチで、`オペレーター`がONの人|1|
|シングルで、`オペレーター`がONの人|3|
|コマンドブロック(付きトロッコ)|1|
|ファンクションとアドオンのスクリプト|1|
|サーバーのコンソールで実行|4|

### 引数

#### 必須と任意

- `<XXX>` : 必須の引数
- `[XXX]` : 任意の引数

[[dl|場合によって切り替えてね]]
|引数の組み合わせによっては、「任意」が実質必須になる場合もある。
|その場合、条件によって構文を分けて書いてある場合もある。(`/fill`の`replace`など)

#### 型

公式Wikiに倣い、引数の「型」をコロンの後に示す場合がある。

- `XXX:ターゲット型` : `@s`などのターゲットセレクターを表す
- `XXX:数値型` : 数字を入力する
- `XXX:真偽型` : `true`または`false`を入力する
