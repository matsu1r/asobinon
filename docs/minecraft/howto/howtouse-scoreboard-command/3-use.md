---
title: ステップ3. スコアの数値を他のコマンドで使ってみよう
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115958.png)

**スコアボード機能の真価は、その数値を他のコマンドで使うことで発揮されます。**試しに**test**というオブジェクティブを作成した後、/tell @a`scores={test=2..}` aaa を実行してみましょう。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120003.png)

すると「セレクターに合う対象がありません」と言われるはずです。実は、@a`scores={test=2..}` は**「testが2以上のプレイヤー全員」**という意味なのです。

こんな風に`scores={オブジェクティブの名前=数字}`と書けば、**スコアを条件にエンティティを選べるのです。**これを応用すれば、**マイクラの中であたかも別のゲームを作り出すようなことが可能になる**んです。

`scores={オブジェクティブの名前=数字,オブジェクティブの名前=数字}`という風に書けば、**複数のスコアを条件にすることも可能**です。

## スコアの条件の書き方一覧

[[dl|testが**1の時だけ**実行する]]
|`scores={test=1}`


[[dl|testが**1以上**の時だけ実行する]]
|`scores={test=1..}`

[[dl|testが**1から3**の時だけ実行する]]
|`scores={test=1..3}`

[[dl|testが**3以下**の時だけ実行する]]
|`scores={test=..3}`

[[dl|**fooが1かつbarが1から5の時だけ**実行する]]
|`scores={foo=1,bar=1..5}`

前にJava版でスコアボードコマンドを使っていた人はちょっと困惑するかもしれません。BEのスコアの書き方は、**Java版の「1.13」と同じ仕様になっている**んです。

## 例えばこんなことができます

/tp @a`scores={test=5}` ~ ~50 ~

testが5**ぴったり**のプレイヤー全員をコマンド実行場所から50m上に移動させる

/give @a`scores={test=1..,foo=5..}` diamond

testが1**以上**かつfooが5**以上**のプレイヤー全員にダイヤモンドを与える

/execute @a`scores={test=3..}` ~ ~ ~ kill @a`r=5,scores={foo=..5}`

testが3**以上**の人が、その**半径5m**以内のfooが5**以下**のプレイヤー全員をキルする

- - -

いかがでしたか。まだダミーのスコアを操ることしかできないBEのスコアボードコマンドですが、**使いこなすことで素晴らしいワールドが作れるはずです。**みなさんも応用法を考えてみて下さい！

:::success

以上で本チュートリアルは完了です! お疲れ様でした。

:::
