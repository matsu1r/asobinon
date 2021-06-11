
---
title: 配布ワールド作成に! 指定範囲内でダッシュを禁止する方法 – マルチプレイや1.8、1.9両方対応
description: アスレチック系の配布ワールド作成者の皆さん、ワールドに新しい”縛り”を作ってみませんか? 今回は「ダッシュ」を禁止する – つまりプレイヤーが走れなくなるコマンドを解説します。指定した範囲のプレイヤーのみに縛りをかけることも可能です。例えばダッシュできる部屋とダッシュできない部屋を作ったりして、あなたが作ったダンジョンに訪れた人を自在に縛り上げましょう!
---

[![ダッシュを禁止する方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208130455.png)](#1/3/136c4ef2.png "ダッシュを禁止する方法")

アスレチック系の配布ワールド作成者の皆さん、**ワールドに新しい”縛り”を作ってみませんか?** 今回は**「ダッシュ」を禁止する – つまりプレイヤーが走れなくなるコマンドを解説します。**  
**指定した範囲のプレイヤーのみに縛りをかけることも可能**です。例えばダッシュできる部屋とダッシュできない部屋を作ったりして、あなたが作ったダンジョンに訪れた人を自在に縛り上げましょう!

## 目次

*   [ダッシュを禁止するってどんな感じ? 範囲を指定して縛れます](#about)
*   [1.8と1.9共通の下準備、scoreboardの作成](#objectives)
*   [1.8の場合の仕掛けの作り方。fillクロックを使います](#buildon18)
*   [バージョン1.9での仕掛けの作り方。とてもコンパクトです](#buildon19)
*   [ダッシュを禁止の範囲を指定する方法。一部の場所だけ走れなくする](#set-range)
*   [SaziumR氏の1.9用ダッシュ禁止機構をご紹介。](#saziumr)

## ダッシュを禁止するってどんな感じ? 範囲を指定して縛れます

[![ダッシュしないでほしい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150515.png)](#8/a/8a9ba8d1.png "ダッシュしないでほしい")

アスレチック系の配布ワールド、またはサーバーのマップを作成している皆さん、▲のスクショをご覧ください。**ダッシュジャンプすれば溶岩を飛び越えられますが、もしダッシュできなかったら…?**

[![走れない縛りを作ってみましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150950.png)](#8/f/8fc904f5.png "走れない縛りを作ってみましょう")

ということで今回は、**「いくら頑張ってもダッシュできない」縛りを作る方法**を解説します。**もちろんマルチプレイにも対応しています**ので、みんなで集まって遊ぶ際にもご活用下さい。

![ダッシュを止めている様子](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208074827.gif)

▲ダッシュできない、というよりはダッシュに「鈍化」の効果を上書きして止めている感じです。走っている感覚はしますが、**実際の移動速度は通常の歩行ぐらいに**なります。

[![範囲を指定してダッシュ禁止にできます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162720.png)](#d/c/dc73bbc2.png "範囲を指定してダッシュ禁止にできます")

ワールド全域でダッシュを禁止だなんてキツい縛りはいたしません。**▲のように、アスレチック内の指定した範囲だけ走れなくすることも可能です**。**例えば”鉄骨渡り”はダッシュ禁止**、など色々な場面で使えますね。

## 1.8と1.9共通の下準備、scoreboardの作成

[![共通の下準備、scoreboardの作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152631.png)](#a/0/a01b5729.png "共通の下準備、scoreboardの作成")

ここからは、**バージョン1.8もしくはバージョン1.9での仕掛けの作り方**を解説していきます。1.8と1.9では作る回路の形は違いますが、**どちらのバージョンでも以下のコマンドでscoreboardを作成しましょう。**

ダッシュ禁止の仕掛けを動かすために必要なscoreboardを作成するコマンド

**/scoreboard objectives add sprintTime stat.sprintOneCm _走った時間_**

新しいscoreboardのオブジェクトを作成します。名前は「sprintTime」、表示名は「走った時間」にします。スコアを**数える基準を「stat.sprintOneCm」とすればダッシュの時間がスコアに**なります。

[![scoreboardコマンドのstat機能を使っています](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208164620.jpg)](#e/4/e43afba9.jpg "scoreboardコマンドのstat機能を使っています")

scoreboardコマンド内に**「stat.sprintOneCm」**という言葉が出てきましたが、これは**scoreboardコマンドの「stat」機能で、プレイヤーのあらゆる行動をスコアにしてくれる**んです。[Wiki](http://minecraft.gamepedia.com/Scoreboard#Objectives)にカウントできる行動が一覧で載っていて、例えば何か食べたら吐き気がするだとか、ジャンプすると死亡する仕掛けなどが作れます。

プレイヤーの行動をスコアにする便利な「stat」機能の完全ガイド

[![行動とアイテムを判定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140837.png)  
https://www.napoan.com/43129260/](/43129260/ "[Minecraft]ジャンプで死亡! プレイヤーの行動,アイテム使用などのカウント方法/判定項目一覧[コマンド解説]")

▲だいぶ前の記事なので多少見苦しい部分もありますが、実は**stat機能でカウントできる行動一覧の日本語版**を書いています。様々な種類の”縛り”を設けてみたい方はご一読下さい。

## 1.8の場合の仕掛けの作り方。fillクロックを使います

[![ダッシュ禁止の仕掛けの作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208143122.png)](#6/c/6c61b9ce.png "ダッシュ禁止の仕掛けの作り方")

バージョン1.8でこの仕掛けを作る手順を解説していきます。**コマンド解説恒例の赤石クロックを使い、横2ブロックのレッドストーンブロックを出現させた後**、上下に「1」「2」のコマンドブロックを設置します。

「A」に入力するコマンド

**/fill ~ ~-1 ~ ~1 ~-1 ~ redstone\_block**

「B」に入力するコマンド

**/fill ~ ~1 ~ ~1 ~1 ~ stone**

「1」に入力するコマンド

**/scoreboard players reset @a\[score_sprintTime_min=2\] sprintTime**  
▲実はこちらのコマンドのほうが後に実行されるので  
すが、便宜上先に解説します。  
先ほど作成した**「sprintTime」スコアは、プレイヤーがダッシュすると増えます。**これが**「2」になったら、sprintTimeスコアをリセット**します。走り続けるとスコア増加→リセット を繰り返すんです。

「2」に入力するコマンド

**/effect @a\[score_sprintTime_min=1\] slowness 1 0 true**  
走り初めようとして、**「sprintTime」**スコアが1になったプレイヤーに**「slowness」**、つまり鈍化の効果レベル1を1秒与えます。**走り続けるとリセット→増加→リセットを繰り返しますから、延々と足が遅くなります。**

## バージョン1.9での仕掛けの作り方。とてもコンパクトです

[![コンパクトになったダッシュ禁止回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150946.png)](#8/f/8fc2c3a4.png "コンパクトになったダッシュ禁止回路")

バージョン1.8だとクロックのせいで余計な場所を取りますが、**バージョン1.9なら▲のように2つのコマンドブロックだけで動きます。「Repeat」「Always Active(常時実行)」**等、1.9からのコマンドブロックの設定項目については[こちらの記事](/new-command-block/ "1.9の新しいコマンドブロックの使い方を解説。クロック回路/コンパレータ要らずで回路を小さく!")で解説しています。さらに、**左のレッドストーンブロックを消せば回路をOFFにもできて便利!**

#map-table span.mode{display:inline-block;margin:3px;padding:3px 5px 3px;border-radius:3px;color:#fff;font-weight:bold;font-size:1.1em;}</p> <h1>map-table span.repeat{background-color:#68228B;}</h1> <h1>map-table span.chain{background-color:#48D1CC;color:#000000!important;}</h1> <h1>map-table span.con{background-color:#fff;border:solid 2px #000000!important;padding:1px 3px 1px!important;color:#000000!important;}</h1> <h1>map-table span.unc{background-color:#000000;}</h1> <h1>map-table span.nee{background-color:#DDD;color:#000000!important;}</h1> <h1>map-table span.alw{background-color:#CD0000;}</h1>

「1」のコマンド

RepeatUnconditional(無条件)Needs Redstone(レッドストーン動力が必要)

**/scoreboard players reset @a\[score_sprintTime_min=2\] sprintTime**  
「リピート」モードなので常時実行されます。「Needs Redstone(レッドストーン動力が必要)」にしているので、**レッドストーンブロックなどの動力がないと以降のコマンドは実行されません。**

「2」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/effect @a\[score_sprintTime_min=1\] slowness 1 0 true**  
「チェーン」モードでUnconditional(無条件)なので、「1」に動力が繋がっていれば一緒に動作します。

## ダッシュ禁止の範囲を指定する方法。一部の場所だけ走れなくする

[![コマンドで範囲を指定する書き方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142329.png)](#6/5/6599452b.png "コマンドで範囲を指定する書き方")

ワールド内ので、部分的にダッシュ禁止ゾーンを作るには、先ほどのコマンドを実行するターゲットの範囲を絞り込みましょう。**走れなくしたい範囲を大きな四角として捉え、北西の端っこを「原点」とします。**

[![四角括弧内に原点の座標を追記](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151926.png)](#9/9/99777251.png "四角括弧内に原点の座標を追記")

原点の座標を調べたら、先ほど解説した「1」「2」のコマンドの四角括弧内に「x=○,y=○,z=○」という形式で追記します。**例えば原点がx=100,y=64,z=-200だった場合、コマンド2つは以下のようになります。**

**/scoreboard players reset @a\[score_sprintTime_min=2,x=100,y=64,z=-200\] sprintTime**  
**/effect @a\[score_sprintTime_min=1,x=100,y=64,z=-200\] slowness 1 0 true**

[![四角括弧に範囲の広がりを追記](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153819.png)](#a/b/ab396039.png "四角括弧に範囲の広がりを追記")

次に、さらに「範囲の広がり」を「dx=○,dy=○,dz=○」の形で追記します。**例えば原点から東へ13ブロック、上へ5ブロック、南へ9ブロックの範囲でダッシュ禁止にする場合は以下のようなコマンドに**なります。

**/scoreboard players reset @a\[score_sprintTime_min=2,x=100,y=64,z=-200,dx=13,dy=5,dz=8\] sprintTime**  
**/effect @a\[score_sprintTime_min=1,x=100,y=64,z=-200,dx=13,dy=5,dz=8\] slowness 1 0 true**

## SaziumR氏の1.9用ダッシュ禁止機構をご紹介。

[![SaziumR氏の完璧なダッシュ禁止機構](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208125748.png)](#0/e/0e619dca.png "SaziumR氏の完璧なダッシュ禁止機構")

今回の「ダッシュ禁止の仕掛け」を作るきっかけになったのは、SaziumR氏が制作したこちらの仕掛けです。[DropBoxでダウンロード](http://www.dropbox.com/s/pj2sfzei0qvfn9d/SaziumR%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E6%A9%9F%E6%A7%8B.zip?dl=0)できます。この機構は**バージョン1.9用**で、ダッシュをやめると速やかに通常の速度に戻り、動作は完璧! …なのですが、**私の力ではマルチプレイやバージョン1.8に対応させられませんでした。**

[![素晴らしい機構をありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208174547.png)](#e/9/e9c6bdc8.png "素晴らしい機構をありがとうございました")

SaziumR氏、素晴らしい機構をありがとうございました。丁寧な解説もあり大変勉強になりました。**私もコマンドをもっと使いこなせるようになって、いつかSaziumR氏のものをマルチや1.8にも対応させたいです..**

![最後までお読みいただきありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134704.png)

いかがでしたか。**この仕掛けを色々な場面で使って頂けたら幸いです。**  
**「これはどうするの?」**などコメント待ってます。

最近書いたコマンド解説記事

*   [**乗るだけでチーム分け**できる装置の作り方 – PvP作成#2](/pvp-grouping-machine/) _**New!!**_
*   [**チームのキル数を合計して表示**する方法 – PvP作成#1](/display-team-total-killscore/)
*   [**Splatoon風トラップ**の作り方 – チーム戦に対応してます](/splatoon-trap-command-part1/)
*   [**空中浮遊PvP**の作り方/オフハンドのアイテムを判定する方法~](/45837670/)
