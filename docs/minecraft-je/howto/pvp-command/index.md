---
title: チームのキル数を合計して表示する方法 – ゼロから自作するPvP作成講座 part1
slug: /minecraft-je/howto/pvp-command/
---

[![チームのスコアを合計表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161031.png)](#c/b/cbb5d54a.png "チームのスコアを合計表示")

マルチプレイの楽しみ方の一つである**「PvP」を、自分で最初から作ってみませんか?**  
今回はチーム戦のPvPを作る上で重要な**「チーム全体のキル数を集計して表示する」仕組みの作り方**を解説します。4チームの場合、クロックで実行するコマンドはわずか5つだけ。**コマンド初心者の方にも分かりやすいように、ゼロからPvPを作る手順のうち基本的な「スコアのカウント」を解説いたします。**

## 「チームのキル数を合計して表示」ってどんな感じ?

[![4チームでキル数を競います](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152440.png)](#9/e/9eb2cb67.png "4チームでキル数を競います")

只今私はPvPワールドを少しづつ作っているのですが、とりあえず**4チームに分かれて”チームのキル数の合計を競う”**というシンプルなPvPにしようと考えました。**そこで、ある問題が…**

[![チームでスコアをまとめたい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144608.png)](#7/a/7a663125.png "チームでスコアをまとめたい")

チーム戦となると**チームでスコアを合計して表示させたいですよね…** どうすれば良いんでしょうか。

[](#9/e/9eb2cb67.png "4チームでキル数を競います")[![チームごとにスコアを合計して表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153745.png)](#a/a/aa387490.png "チームごとにスコアを合計して表示")

そんな声に応えるべく、私が一瞬で解決方法を開発しました。**上図のように、画面の右側にはチーム全員のキル数がリアルタイムで合計されて表示されます。**一人一人のキル数を確認したい時は、Tabキーを押せば表示される**プレイヤー一覧の、黄色い数字を見れば個人のスコアが確認できます。**

もちろん、この**「チームのキル数」は試合が終わった後に表示させることもできます。**リアルタイムで戦況を確認できるようにするか、結果発表でドバーンと発表するかはあなたのお好みで。

[  
](#9/e/9eb2cb67.png "4チームでキル数を競います")

## まずは下準備。チームとスコアボードを作成しよう

[![準備をしていきます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151324.png)](#9/3/938fcc40.png "準備をしていきます")

それでは、何もない状態からシンプルなチーム戦のPvPを作っていきます。まずは「チーム」と「スコアボード」を作らないといけません。**これから約20のコマンドをチャット欄で入力して準備します。**

対戦用の4つの「チーム」を作成するコマンド(チャット欄で実行)

**/scoreboard teams add Red**  
**/scoreboard teams add Blue**  
**/scoreboard teams add Yellow**  
**/scoreboard teams add Green**

▲**「Red」「Blue」「Yellow」「Green」**の4種類のチームを作成します。

それぞれのチームの「色」を設定するコマンド

**/scoreboard teams option Red color dark\_red**  
**/scoreboard teams option Blue color dark\_blue**  
**/scoreboard teams option Yellow color yellow**  
**/scoreboard teams option Green color green**

▲ここで各チームに色を設定すれば、**所属しているプレイヤーの名前がその色に染まります。**

PvPを動かすのに必要な「スコアボード」を作成するコマンド

**/scoreboard objectives add killCount playerKillCount _個人のキル数_**  
**/scoreboard objectives add teamKills dummy _チームのキル数_**  
**/scoreboard objectives add dummyKill playerKillCount**

▲それぞれのスコアボードがどのような働きをするかは、後ほど解説します。

「チームのキル数」を表示するためのおまじないコマンド

**/scoreboard teams join Red _red_**  
**/scoreboard teams join Blue _blue_**  
**/scoreboard teams join Yellow _yellow_**  
**/scoreboard teams join Green _green_**  
[![右側に表示されているのは架空のプレイヤー名](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208125026.png)](#0/6/06cb3f01.png "右側に表示されているのは架空のプレイヤー名")

▲この後画面右側にチームのキル数を表示するのですが、本来ここはプレイヤーのスコアを表示する場所なので、**ダミーの「red/blue/yellow/green」さんを各チームに参加させています。**

[![スコアを表示させてみよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208130442.png)](#1/3/134ed40d.png "スコアを表示させてみよう")

さあ、準備が大体整いました。試しに**以下のコマンドを実行して、スコアを表示させてみましょう。**

[**/scoreboard objectives setdisplay sidebar teamKills**  
](#9/e/9eb2cb67.png "4チームでキル数を競います")

あれ、何も表示されませんね。実は、**ここで表示させようとしている「teamKills」スコアはみんなまだ空っぽなので何も表示されないのです。**0でも何でもいいので、数値をセットすれば表示されます。

チームのキル数を表示させるために0の値をセットするコマンド

**/scoreboard players set red teamKills 0**  
**/scoreboard players set blue teamKills 0**  
**/scoreboard players set yellow teamKills 0**  
**/scoreboard players set green teamKills 0**

▲見て分かるとおり、ここでは「red/blue/yellow/green」さん(架空のプレイヤー)の「teamKills」スコアをセットしています。つまり**この架空のプレイヤー達のスコアが、そのまま「チームのキル数」として表示されている**わけです。**←ここ重要!**

プレイヤー一覧に個人のキル数を表示させるコマンド

**/scoreboard objectives setdisplay list killCount**  
![スコアを表示させてみよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208130442.png)

▲**「list」はプレイヤー一覧の黄色い数字のこと**です。そこに**「killCount」スコア**、つまり個人のキル数を表示させます。

プレイヤーをチームに参加させるコマンド

**/scoreboard teams join Red <参加させる人(@pなども可)>**  
**/scoreboard teams join Blue <参加させる人(@pなども可)>**  
**/scoreboard teams join Yellow <参加させる人(@pなども可)>**  
**/scoreboard teams join Green <参加させる人(@pなども可)>**

**▲プレイヤーをチームに参加させないと何も出来ません。**チームに参加しない場合は、個人のキル数は分かりますがチームへスコアが加算されないのでご注意下さい。

[![準備は終わりましたか](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135423.png)](#4/a/4a63736d.png "準備は終わりましたか")

約20個のコマンドの入力、お疲れ様でした。さあ、次の章で**いよいよスコアを集計する仕掛けを作ります。**

[  
](#9/e/9eb2cb67.png "4チームでキル数を競います")

## キルしたらチームのスコアを1増やしていく仕組みと回路の解説

[![高速fillクロックの作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208141856.png)](#6/0/60eec0c1.png "高速fillクロックの作り方")

ここからは簡単な回路、というかコマンドブロックの機械を作ります。まずは**お決まりのfillクロック**から。以下のコマンドを入力して、**真ん中に赤石ブロックを挟めばクロックが起動します。**

「A」に入力するコマンド

/fill ~ ~-1 ~ ~3 ~-1 ~ redstone\_block

「B」に入力するコマンド

/fill ~ ~1 ~ ~3 ~1 ~ stone

[![スコアを集計する回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134632.png)](#4/3/4381aa51.png "スコアを集計する回路")

先ほどのクロック回路に加えて、**右側に「1」～「5」のコマンドブロックをくっつけます。**この「1」~「5」の順番には意味があって、**中身のコマンドが入れ替わったりすると例えば青チームだけスコアが増えないなどの問題が発生してしまいます。**以下、図のコマンドブロックの場所とコマンドの内容が完全に合うようにして下さい!****

「1」に入力するコマンド

**/scoreboard players operation red teamKills += @a\[team=Red\] dummyKill**  
**計算機能「oparation」**を使います。ここでは、**赤チームのプレイヤーの「dummyKill」**を**「red」さんの「teamKill」に足し算**しています。お前は何を言っているんだ、という方は後述する図解へ。

「2」に入力するコマンド

**/scoreboard players operation yellow teamKills += @a\[team=Yellow\] dummyKill**  
「1」と同じことを黄色チームでも常時行います。詳細は図解へ。

「3」に入力するコマンド

**/scoreboard players operation blue teamKills += @a\[team=Blue\] dummyKill**  
「1」「2」と同じことを青チームでも常時行います。詳細は図解へ。

「4」に入力するコマンド

**/scoreboard players operation green teamKills += @a\[team=Green\] dummyKill**  
「1」「2」「3」と同じこ  
とを緑チームでも常時行います。詳細は図解へ。

「5」に入力するコマンド

**/scoreboard players set @a\[score\_dummyKill\_min=1\] dummyKill 0**  
キルすると勝手に増える**「dummyKill」スコア**が1を超えたら、即座に0に戻します。

[![スコアを集計する仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208083516.jpg)](#3/3/33f5a024.jpg "スコアを集計する仕組み")

文章だけでは仕組みがさっぱり分からないので、いつもの雑パワポ図解です。  
まず、準備の段階で**「dummyKill」というスコアボードを作成しました**が、実はあのスコアは誰かをキルすると1増える仕様になっています。(これはscoreboardコマンドの機能) **誰かが他の人をキルすると、「dummyKill」が1増えます。それを回路のコマンドで、架空のプレイヤーの「teamKills」に足し算していました。**

[![スコアを集計する仕組み2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153729.jpg)](#a/9/a9f2626b.jpg "スコアを集計する仕組み2")

キルすると増える「dummyKill」スコアを「teamKills」に足し算するのですが、このまま放置しておくと「dummyKill」がキルする度に増えてしまい、チームのキル数が異常に増加します。そこで、**dummyKillスコアは1になったら即座に「5」のコマンドブロックによって0に戻るようにしています。**  
このスコア集計システムは、**キルする度にダミーのキル数スコアを増やし、それをチームのキル数のスコアに足し算して、ダミーのキル数スコアを0に戻して… を繰り返して動きます。**合計というより加算し続けていくのです。
