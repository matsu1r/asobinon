
---
title: ボスのような体力バーを作り、MobのHPを反映させる方法
description: JE1.13のコマンド関連の新要素の1つ、/bossbarコマンド。なんとボスMobのような体力バーを自作できるんです。しかもデザインや値を自由に編集可能。エンティティのHPとバーを同期させる方法も解説します。
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102219.png)

JE1.13のコマンド関連の新要素の1つ、/bossbarコマンド。なんと**ボスMobのような体力バーを自作できる**んです。しかもデザインや値を自由に編集可能。**エンティティのHPとバーを同期させる方法**も解説します。

## ボスバーの作成とID・名前の設定

ボスバーは同時にたくさん作成することができます。以下のコマンドで作ってみましょう。

新しいボスバーを作成するコマンド

**/bossbar create 名前空間:ID 表示名(JSON)**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208114818.png)

名前空間:ID の欄には、ボスバーの名前(ID)を自由に入力してください。この時コロンを付けて「名前空間」を指定することもできます。省略すると名前空間はminecraftになります。**つまり、単にtestと書くとminecraft:testになるのです。**

バニラで用意されているボスバーは今のところありませんが、もしもの時のために**独自の名前空間を設定することをおすすめします。**例えば自分の名前:testという風にすればいいんです。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090926.png)

表示名(JSON)の欄に、普通に文字を書くとエラーになります。なぜなら**ここではJSONテキストしか使えない**から。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094546.png)

**「JSONテキストなんて書けないよ！」**って方は、**ダブルクオーテーションで囲ってみてください。**これでJSONとして認識されます。

JSONなので、文字の装飾は§記号ではなく、\[“ここは変えない”,{“text”:”ここは赤色”,”color”:”red”}\] という風に書きましょう。tellrawやtitleコマンドと同じ書き方をすればいいんです。

IDは変更できませんが、表示名は変更できます。

ボスバーの表示名を後から変えるコマンド

**/bossbar set 名前空間:ID name 新しい表示名**

※名前空間を省略して作成したボスバーを指定する時は、名前空間を省略して指定しても構いません。

## ボスバーを見ることができるプレイヤーを設定しよう

**ボスバーを作成しただけでは、画面に何も表示されません。**ボスバーは、**それぞれ表示するプレイヤーを設定する必要がある**んです。

指定したボスバーを見れる人を設定するコマンド

**/bossbar set 名前空間:ID players プレイヤー**

「プレイヤー」の部分には、プレイヤー名またはターゲットセレクタを入れてください。例えば /bossbar set napoan:test players @a なら、napoan:test が全員に見えるようになります。

やっとさっき作ったボスバーが見えるようになりました。**初期状態では値は0/100です。**

## ボスバーの表示・非表示を変えてみよう

表示した後、**やっぱり非表示にしたい！**って時は以下のコマンドを使います。

指定したボスバーを非表示にするコマンド

**/bossbar set 名前空間:ID visible false**

逆にtrueにすれば、もう一度表示できます。

## ボスバーの一覧表示と削除

デザインを変えてみたりする前に、ボスバーの管理方法を知っておきましょう。

ボスバーの一覧を表示するコマンド

**/bossbar list**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094553.png)

18w05a現在、表示名しか表示されないので不便。IDも表示してほしい

指定したボスバーを削除するコマンド

**/bossbar remove 名前空間:ID**

ボスバーを削除する時はremove。

## ボスバーの色を変えてみよう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103410.png)

このままでは地味なので、とりあえず**色を変更**してみましょう。

指定したボスバーの色を変更するコマンド

**/bossbar set 名前空間:ID color (blue|green|pink|purple|red|white|yellow)**

![ボスバーの色](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102144.png)

デフォルトはwhiteです。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094556.png)

色を変えると表示名の色も変わりますが、**既にJSONで色を指定している箇所の色は変わりません。**

## ボスバーに目盛りを付けてみよう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094559.png)

こんな風に、経験値バーみたいな目盛りを付けることもできます。

指定したボスバーのスタイルを変更するコマンド

**/bossbar set 名前空間:ID style (notched\_10|notched\_12|notched\_20|notched\_6|progress)**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094602.png)

デフォルトはprogressです。そういえばnotchって切り目って意味だったなぁ…

## ボスバーの最大値と値を変更してみよう

いよいよボスバーの値を編集してみます。その前に、**ボスバーの「最大値」を変更しましょう。**デフォルトでは100ですが、あなたの好みに変えることができます。

指定したボスバーの最大値を変更するコマンド

**/bossbar set 名前空間:ID max 最大値**

最大値を変更したからといって、**横幅は変わりません。**ボスバーはパーセンテージを可視化したものなので。

それでは値を変更してみましょう。

指定したボスバーの値を変更するコマンド

**/bossbar set 名前空間:ID value 値**

デフォルトは0です。設定できるのは自然数のみです。また、**最大値より大きな値を指定した場合、見た目は最大値と同じになります。(はみ出ることはありません)**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094606.png)

最大値より大きな値にしても、値は保持されます。後から最大値を変えて確認してみてください。

注意: ボスバーはプレイヤーごとに内容を変えられない

スコアボードと違って、ボスバーには1つの値しか保存できません。つまり、**同じボスバーがプレイヤー毎に異なる値を表示することはできない**のです。

## ボスバーの値を取得するコマンド

ボスバーの値は**「取得」**してスコアボードに代入できます。こういうのプログラミングっぽくてワクワクしません?

指定したボスバーの値を取得するコマンド

**/bossbar get 名前空間:ID (max|players|value|visible)**

*   max – 最大値を取得
*   players – 見れるプレイヤーの数を取得
*   value – 現在の値を取得
*   visible – 表示なら1、非表示なら0

これらの値は、1.13で進化した**executeコマンドを使えばスコアボードに代入できる**んです。

指定したボスバーの値をスコアボードに代入するコマンド

**/execute store result **score** ターゲット オブジェクト **run** bossbar get 名前空間:ID (max|players|value|visible)**

ターゲットには代入するエンティティ、オブジェクトにはスコアボード名を入れてください。これがexecuteコマンドのstore機能です。

例: /execute store result score napoan bb1 run bossbar get napoan:test value : napoanのスコア「bb1」に、「napoan:test」の現在の値を代入する

## MobのHPをリアルタイムでボスバーに反映させるコマンド

ボスバーの値を代入する方法は分かりました。逆に、**ボスバーに値を代入するには**どうすればいいのでしょうか。実は/bossbarコマンドの実装と同時に**executeコマンドのstore機能が進化し、ボスバーに直接値を代入できるようになっている**んです。

指定したエンティティのHPをボスバーに代入するコマンド

**/execute store result **bossbar** 名前空間:ID (value|max) **run** data get **entity** エンティティ Health**

エンティティには、HPを取得したいエンティティを指定します。プレイヤーでも構いません。そして/dataコマンドを使い、指定したエンティティの Health NBTタグの値を取得して、**そのままボスバーに値もしくは最大値として代入する**んです! すごいでしょ!

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094543.png)

例えば /execute store result bossbar napoan:test value run data get entity napoan Health を常時実行すれば、napoanのHPが「napoan:test」のバーに表示されます。

実用性皆無ですね。例を変えましょう。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094613.png)

まず、以下のコマンドでスーパーゾンビを召喚します。

1.13版 スーパーゾンビ君召喚コマンド

**/summon zombie ~ ~ ~ {CustomName:”{“text”:”スーパーゾンビ”}”}**

JSONテキストしか使えないので注意。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094609.png)

/execute store result bossbar napoan:test value run data get entity @e\[type=zombie,name=”スーパーゾンビ”,limit=1\] Health を常時実行すれば、**「スーパーゾンビ」のHPが「napoan:test」に表示されます。**ゾンビなので、ボスバーの最大値は20にしとくと丁度いいですよ。

1.13のコマンド関連の変更点

[![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103811.png)  
https://www.napoan.com/java-113-command-changes/](https://www.napoan.com/java-113-command-changes/)

いかがでしたか。ボスバトル系の配布ワールドが作りたくなったでしょ。この他にも、1.13では**コマンドに関する様々な新要素がやってきました。**詳しくは▲の記事をお読みください。
