---
title: フルトン回収システムでMobを飛ばそう! Dragnoz氏が見事に再現してるので紹介 [コマンド解説]
---

[![フルトン回収を再現](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208141251.png)](#5/b/5be93ee4.png "フルトン回収を再現")

今話題の最新作、**「MGSV:TPP」に登場する「フルトン回収システム」が、早速マイクラで再現されちゃいました。**制作は私ではなく、**コマンドの動画で有名な[Dragnoz氏](http://www.youtube.com/channel/UCNRt2CNtdt4PZx8KnetjCQA)。**いつもの役立つ動画への感謝を込め、**再現動画のご紹介と、コマンドの解説**をします。ちなみにバージョン1.9(のSnapShot)でないと動きません。

## 目次

- [目次](#目次)
- [フルトン回収システムってどんなの? 元ネタと再現動画をご紹介](#フルトン回収システムってどんなの-元ネタと再現動画をご紹介)
- [バージョン1.9の最新SnapShotでないと遊べません](#バージョン19の最新snapshotでないと遊べません)
- [Dragnoz氏のコマンドを1つ1つ解説します](#dragnoz氏のコマンドを1つ1つ解説します)

## フルトン回収システムってどんなの? 元ネタと再現動画をご紹介

▲こちらの動画で紹介されているのは、**『MGSV:TPP』の「フルトン回収システム」。**ゲーム内では、兵士や動物などをマザーベースに送るための道具なのですが、**見ているうちにマイクラで再現したくなってきませんか?**

なんともう再現されているんです。コマンド解説の動画で有名なDragnoz氏が、バージョン1.9にて作ってしまいました。流石。▲の動画では**コマンドの内容が解説されていて、説明文にもコマンドが書いてありますが、よくわからない方のために私が遊び方を解説**しようと思います。

![フルトン回収](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135642.gif)

**村人を回収してみました。↑動画ではDragnoz氏独自の3Dリソースパックによってちゃんと風船の形になっていました**が、私にモデリングの力はないのでスポンジを頭に被らせる不格好な仕掛けになっちゃいました。

## バージョン1.9の最新SnapShotでないと遊べません

[![SnapShotで遊んでね](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153248.png)](#a/5/a54713ff.png "SnapShotで遊んでね")

このフルトン回収のコマンド、「空中浮遊」やら「tag」システムやらバージョン1.9の新機能をふんだんに使っています。まだ正式版はリリースされていませんが、**1.9のSnapShotを起動すれば作成できます。**


## Dragnoz氏のコマンドを1つ1つ解説します

以下で解説しているコマンドは、**全て私ではなくDragnoz氏が考案したものです。**私自身よく分かってない部分もありますので、上記の動画のコメントなどで質問して下さい!(丸投げ)

[![バックパックを手に入れよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135843.png)](#4/e/4e41b286.png "バックパックを手に入れよう")

まずはこれ、フルトン回収するための「バックパック」を手に入れましょう。**専用のテクスチャは不要で、なんと以下のgiveコマンドを実行すれば自動で▲のテクスチャが貼られます。**モブヘッドすごい。

「バックパック」のモブヘッドを手に入れるコマンド

**/give @p minecraft:skull 64 3 {Tags:\[“backpack”\],SkullOwner:-{Id:”da736e88-1222-44cc-a108-7d9c01-1a775d”,Properties:{textures:\[{Valu-e:”eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVy-bCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQu-bmV0L3RleHR1cmUvYTk5MDlhOTc3OWI5NDZiOTc4-NzQ0MmZhNDgzYWY0ZGU0YjJmMTlmZDQwZGMyMzcw-ZjdhOWI4ZjUyMWYyMWRkYyJ9fX0=”}\]}}}**

次に、仕掛けを動かすためのスコアボードを作成します。

仕掛けを動かすためのスコアボードを作成するコマンド

**/scoreboard objectives add timer dummy**

[![コマンドブロックを設置しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133251.png)](#3/5/35eb6e85.png "コマンドブロックを設置しよう")

次にコマンドブロックを設置します。**上図のように、右端にリピートコマンドブロックを置き、そこから全て同じ向きにチェーンコマンドブロックを置きます。**図のように**Conditional(条件付き)とUnconditional(無条件)モードが混在している**ので間違えないように切り替えましょう。また、**全て「Always Active(常時実行)」**モードに設定しておきます。

[![お前は何を言っているんだ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133354.png)](#3/7/373303f4.png "お前は何を言っているんだ")

[![新しいコマブロの使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140314.png)](#5/2/520e01be.png "新しいコマブロの使い方")

ごめんなさい、ちょっと急ぎ足で説明しちゃいましたが、なんとバージョン1.9のコマンドブロックには3つの設定項目があるんです。**使いこなせば、クロック回路やコンパレーター、さらには赤石ブロックまで不要になります。**

[![コマンドの中身を解説していきます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131819.png)](#2/2/22634728.png "コマンドの中身を解説していきます")

さあ、各コマンドブロックの中身のコマンドを解説、というか紹介していきます。もう一度言っておきますが、****全てのコマンドはDragnoz氏のもの**なので私も仕組みを完全に理解できてません。**フルトン回収で遊ぶためのコマンドのメモ、という風に大目に見て下さい。

「1」のコマンド

RepeatUnconditional(無条件)Needs Redstone(レッドストーン動力が必要)

**/scoreboard players add FLOAT timer 1**  
「リピート」モードなので常時実行されます。架空のプレイヤー「FLOAT」さんの「timer」を1ずつ増やしていきます。

「2」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/scoreboard players test FLOAT timer 14**  
「FLOAT」さんのtimerが14を超えたかどうか判定します。超えていたら「3」を実行。

「3」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/effect @e\[tag=float\] minecraft:levitation 2 8 true**  
**「2」のコマンドが成功したら実行されます。(Conditional(条件付き)モードなので)**  
「float」というtagが付いているモブに、「空中浮遊」効果を弱く与えます。 **このコマンドは何回も実行され、モブがふわふわ浮くわけです。**(tag機能の便利な使い方は[こちらの記事](https://www.napoan.com/howtouse-tag-system/)で解説しています。)

「4」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/scoreboard players test FLOAT timer 30**  
「FLOAT」さんのtimerが30を超えたかどうか**(1.5秒経過したか)判定**します。超えていたら「5」「6」「7」「8」を実行。

「5」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/effect @e\[tag=float\] minecraft:levitation 0 0 true**  
1.5秒経過したら、「float」タグが付いているモブの空中浮遊を解除します。

「6」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/scoreboard players set FLOAT timer 0**  
「5」に続いて、「FLOAT」さんのtimerスコアをゼロにセットします。**こうやってスコアをリセットすることにより、モブを何回もふわふわ浮かせることが出来るんです。**

「7」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/replaceitem entity @e\[tag=float\] slot.armor.head minecraft:spon  
ge**  
「6」につづいて、「float」タグが付いたモブの頭にスポンジを被せます。

「8」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/scoreboard players add @e\[tag=float\] timer 1**  
「7」に続いて、「float」タグが付いたモブのtimerスコアを1増やします。そしてまた「4」に戻ります。

「9」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/effect @e\[tag=float,score\_timer\_min=6\] minecraft:levitation 10 25 true**  
先ほどの「5」～「8」のコマンドを実行することで、モブの「timer」スコアがどんどん増えて「6」になります。**つまり、何回か弱い空中浮遊を与えた後に、強い空中浮遊の効果を与えて空へ飛ばします!**

「10」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/scoreboard players tag @e\[tag=float,score\_timer\_min=6\] remove float**  
「9」が成功したら実行。「float」タグが付いたモブで、さらにtimerスコアが6以上だった場合「float」タグを削除します。

「11」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/scoreboard players add @e\[type=Item\] timer 1 {OnGround:1b,Item:{tag:{Tags:\[0:”ba-ckpack”\]}}}**  
こちらは無条件に常時実行されます。**バックパックを地面に落としたら、アイテムに対し「float」スコアを増やしていきます。**

「12」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/execute @e\[type=Item,score\_timer\_min=20\] ~ ~ ~ /scoreboard players tag @e\[type=!Player,r=2\] add float**  
「11」が成功したら実行。**「timer」が20まで増えたバックパックの半径2ブロック以内に居るモブに、「float」のタグを与えます。**

「13」のコマンド

ChainConditional(条件付き)Always Active(常時実行)

**/kill @e\[type=Item,score\_timer\_min=23\]**  
「float」が23まで増えた要らないバックパックを削除します。

[![動かない方へ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152348.png)](#9/d/9dc7f1f7.png "動かない方へ")

動かない方は、コマンドブロックの下3つの設定項目が合っているか確認して下さい。それでも動かない場合は、**「1」のコマンドブロックの「Always Active(常時実行)」ボタンを2回押して設定し直せば動く**はずです。

[![Unconditional(無条件)とConditional(条件付き)の関係](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208130924.jpg)](#1/7/17e01363.jpg "Unconditional(無条件)とConditional(条件付き)の関係")

▲1.9からのコマンドブロックは、**Unconditional(無条件)とConditional(条件付き)をうまく使い分ければコンパレーターが要らなくなります。**さすがDragnoz氏、追加されたばかりの機能を早速使いこなしていますね。

[![ひゅー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180806.png)](#f/e/fea7dfcb.png "ひゅー")

ﾋｭｰ

[![あれ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152056.png)](#9/b/9b3f91ce.png "あれ")

あれ?

[![落ちるんかい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152727.png)](#a/0/a0c379ed.png "落ちるんかい")

落ちるんかい!

![最後までお読み頂きありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162421.png)

Dragnozさん、いつも素晴らしいコマンドの動画をありがとうございます。  
