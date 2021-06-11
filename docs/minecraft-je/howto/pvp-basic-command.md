
---
title: PvP作成講座part3 試合開始→カウントダウン→試合終了まで、基本的な流れの作り方
slug: /minecraft-je/howto/pvp-basic-command
description: PvPを自作する講座の第三回です。今回は、試合開始時にプレイヤーをフィールドに配置し、一定時間が経過したら10,9,8…3,2,1とカウントダウンをして、試合が終了したらロビーに戻る、という一連の流れの作り方を解説していきます。以前にカウントダウンタイマーの回路は解説しましたが、あれよりもっとコンパクトで、設定や操作も簡単なので是非お試し下さい。
---

![PvPゲーム開始からカウントダウンと終了](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124555.png)

PvPを自作する講座の第三回です。今回は、試合開始時にプレイヤーをフィールドに配置し、**一定時間が経過したら10,9,8…3,2,1とカウントダウンをして**、試合が終了したらロビーに戻る、という一連の流れの作り方を解説していきます。以前にカウントダウンタイマーの回路は解説しましたが、**あれよりもっとコンパクトで、設定や操作も簡単なので**是非お試し下さい。

[**<< Part2** 乗るだけでチーム分けできる装置の作り方](/pvp-grouping-machine/ "乗るだけでチーム分けできる装置")

## 今回作るPvPの流れやカウントダウンとはどんな物?

前回のPvP作成講座では、簡単にチーム分けできる装置を作りました。今回は、**試合を開始してプレイヤーを配置し、一定時間が経過したら試合を終了してロビーに戻る**、というPvPの一連の流れを作っていきます。

[![チームごとに別れて試合開始する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151718.png)](#9/6/96db6c15.png "チームごとに別れて試合開始する")

OPがボタンを押すと試合が始まります。第一回で作った赤/緑/黄/青チームのプレイヤーが、**それぞれのチームごとに決まった位置に、バランスよくフィールドに配置されます。**と同時に「START!!!」と表示。

[![試合終了までカウントダウンが表示される](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140112.png)](#5/0/50425ea7.png "試合終了までカウントダウンが表示される")

**一定時間が経過すると、画面中央に「10、9、8、7…」とカウントダウンが表示されます。**試合を終了するまでカウントダウンは続きます。もちろん試合の制限時間や文字の色は自由に設定できます。

[![試合終了後はスペクテイターモードで振り返れる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154109.png)](#a/d/adf0676b.png "試合終了後はスペクテイターモードで振り返れる")

試合が終了すると、**一時的にスペクテイターモードになって戦場を眺める**ことができます。この間はみんな透明で攻撃することはできません。例えば**自分の撃った矢の外れ具合を後から見たり**できます。

## まずはチームやスコアボードを準備しよう

PvP作成講座 Part1をお読みになった前提で解説します

[![チームのスコアを合計表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161031.png)  
//exr-nap.sakura.ne.jp/www.napoan.com/display-team-total-killscore/](/display-team-total-killscore/ "PvP作成講座 Part1")

この記事では、▲のPart1をお読みになった前提で解説を進めていきます。**チームを作成したり、スコアをカウントする方法はPart1,2で解説しています**ので、本格的にPvP制作がしたい方はぜひお読み下さい。

そして今回も新しいスコアボードを作成します。カウントダウン用です。

試合の残り時間をカウントするためのオブジェクトを作成するコマンド

**/scoreboard objectives add NapoanTimer dummy**

PvPの**基本的な流れを作るのに必要なのは、このスコアボードとチーム4つ\[Red,Blue,Green,Yellow\]だけ**です。(キル数の表示など機能を増やすには別途でスコアボードが必要です。)

## 試合とカウントダウンを開始するコマンド/回路の解説

[![試合を開始する回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132046.png)](#2/5/251e00b2.png "試合を開始する回路")

それでは早速コマンドブロックを配置していきましょう。「A」~「H」までの**合計8つのコマンドブロックを、2つづつ分けて設置**して回路を繋げます。そして「B」のコマンドブロックにボタンを付けておきましょう。

「A」に入力するコマンド

**/title @a times 5 45 5**  
ゲームスタート時の「START!」の表示時間を設定します。

「B」に入力するコマンド

**/summon armor\_stand ~ ~1 ~ {CustomName:”TimerStand”,Marker:1}**  
このコマンドブロックの上に、残り時間をカウントするための防具立てを召喚します。**「Marker:1」を付ければクリエイティブモードで叩いても撤去できなくなります。**

「C」に入力するコマンド

**/title @a title {“text”:”START!!!”,”color”:blue,”bold”:”true”}**  
ゲーム開始の合図の**「START!!!」**という文章を大きく表示します。

「D」に入力するコマンド

**/scoreboard players set @e\[type=armor\_stand,name=TimerStand,c=1\] NapoanTimer 400**  
「B」で召喚した「TimerStand」という防具立ての、**「NapoanTimer」スコアを400に**セットします。**ここで設定した数値÷20が試合時間の秒数になります。**

「E」に入力するコマンド

**/spreadplayers 赤チームの配置座標x z 0.5 3 false @a\[team=Red\]**  
赤チームのプレイヤーをフィールドに配置します。詳細は後述。

「F」に入力するコマンド

**/spreadplayers 青チームの配置座標x z 0.5 3 false @a\[team=Blue\]**

「G」に入力するコマンド

**/spreadplayers 緑チームの配置座標x z 0.5 3 false @a\[team=Green\]**

「H」に入力するコマンド

**/spreadplayers 黄チームの配置座標x z 0.5 3 false @a\[team=Yellow\]**

[![プレイヤーを配置するspreadplayersコマンドの書き方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208174856.png)](#e/d/ed721721.png "プレイヤーを配置するspreadplayersコマンドの書き方")

「配置座標x z」と書きましたが、例えばこんな**PvP用のフィールドを用意して、赤/青/緑/黄それぞれのスポーン地点を決めます。**そこのx座標とz座標だけをspreadplayersコマンドに書くと、**指定した座標を中心にプレイヤーがバランスよく配置されます。**座標に続いて「0.5 3」と書いていますが、「プレイヤーを0.5ブロック間隔で並べて、最大で3ブロック半径の範囲に配置する」という意味です。

プレイヤーを配置するspreadplayersコマンドの書き方

**/spreadplayers x座標 z座標 配置間隔 最大半径 チームをまとめるか(true|false) ターゲット**

## 残り時間をカウントダウン→試合終了、ロビーに戻すコマンドの解説

[![fillクロック回路の準備](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134927.png)](#4/5/45b40b43.png "fillクロック回路の準備")

それでは、fillコマンドを使った最速クロックを設置します。今回は横に15ブロックも場所をとるので、**東に場所を確保した状態で「X」「Y」のコマンドを入力し、間にレッドストーンブロック**を挟んで下さい。

※バージョン1.9以上では、fillクロックは作らずに、**fillクロックより下の全てのコマンドをリピート+チェイン(常時実行モード)で実行させて下さい!**

「X」に入力するコマンド

/fill ~ ~-1 ~ ~13 ~-1 ~ redstone\_block

「Y」に入力するコマンド

/fill ~ ~1 ~ ~13 ~1 ~ stone

[![大量のコマンドブロックにコマンドを貼り付けましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208083315.png)](#3/2/321c3fdb.png "大量のコマンドブロックにコマンドを貼り付けましょう")

あまりにコマンドブロックの数が多いので、数字を割り振るのは「1」「2」だけにしています。後のピンク色の四角に囲まれたコマンドブロックの内容は、**表にまとめたものを次々ペーストしていって下さい。**

「1」に入力するコマンド

**/scoreboard players remove @e\[type=armor\_stand,name=TimerStand,c=1\] NapoanTimer 1**  
「TimerStand」防具立てが召喚されたら即時に「NapoanTimer」スコアを減らしていきます。TimerStand防具立てが存在し続ける限り減らし続けます。

「2」に入力するコマンド

**/kill @e\[type=armor\_stand,name=TimerStand,score\_NapoanTimer=-95\]**  
NapoanTimerスコアが-95まで減ったら(つまりゲームが終わった後)防具立てを削除します。

以下のコマンドは、スクショでピンクで囲ってあるコマンドブロックに次々貼り付けていって下さい。四角の中ならば順番は動作に関係ありません。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=206,score\_NapoanTimer=206\] ~ ~ ~ title @a times 0 15 5**  
防具立ての「NapoanTimer」スコアが206まで減ったら、以降のカウントダウンの表示時間を「START!!!」と違って短めに設定します。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=205,score\_NapoanTimer=205\] ~ ~ ~ title @a title {“text”:”10″,”color”:blue,”bold”:”true”}**  
表示時間を設定した直後、つまりNapoanTimerスコアが205まで減ったら「10」と表示。以下は同じようにカウントダウンしていきます。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=185,score\_NapoanTimer=185\] ~ ~ ~ title @a title {“text”:”9″,”color”:blue,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=165,score\_NapoanTimer=165\] ~ ~ ~ title @a title {“text”:”8″,”color”:blue,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=145,score\_NapoanTimer=145\] ~ ~ ~ title @a title {“text”:”7″,”color”:blue,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=125,score\_NapoanTimer=125\] ~ ~ ~ title @a title {“text”:”6″,”color”:blue,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=105,score\_NapoanTimer=105\] ~ ~ ~ title @a title {“text”:”5″,”color”:blue,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=85,score\_NapoanTimer=85\] ~ ~ ~ title @a title {“text”:”4″,”color”:blue,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=65,score\_NapoanTimer=65\] ~ ~ ~ title @a title {“text”:”3″,”color”:yellow,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=45,score\_NapoanTimer=45\] ~ ~ ~ title @a title {“text”:”2″,”color”:yellow,”bold”:”true”}**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=25,score\_NapoanTimer=25\] ~ ~ ~ title @a title {“text”:”1″,”color”:yellow,”bold”:”true”}**

**ごめんなさい、一個余分にコマブロを設置してスクショを撮っちゃいました! つまり**スクショ通りに作ると一つのコマンドブロックは空白になります。**申し訳ないです…**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=5,score\_NapoanTimer=5\] ~ ~ ~ title @a times 5 45 5**  
ゲーム終了時の「FINISH!!!」と表示する時間を設定します。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=5,score\_NapoanTimer=5\] ~ ~ ~ title @a title {“text”:”FINISH!”,”color”:green,”bold”:”true”}**  
NapoanTimerスコアが5まで減ったら「FINISH!!!」と表示します。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=5,score\_NapoanTimer=5\] ~ ~ ~ gamemode 3 @a\[team=Red\]**  
ゲーム終了時、すなわちNapoanTimerスコアが5まで減ったら赤チームのプレイヤーをスペクテイターモードに切り替えます。以下、同じように各チームのプレイヤーのモードを変更するコマンドです。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=5,score\_NapoanTimer=5\] ~ ~ ~ gamemode 3 @a\[team=Blue\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=5,score\_NapoanTimer=5\] ~ ~ ~ gamemode 3 @a\[team=Green\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer\_min=5,score\_NapoanTimer=5\] ~ ~ ~ gamemode 3 @a\[team=Yellow\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ gamemode 2 @a\[team=Red\]**  
ゲーム終了から5秒経過(=スコアが終了時から100減って-95に) したらアドベンチャーモードに戻します。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ gamemode 2 @a\[team=Blue\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ gamemode 2 @a\[team=Green\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ gamemode 2 @a\[team=Yellow\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ spreadplayers ロビーの座標x z 0.2 2 false @a\[team=Red\]**  
spreadplayersコマンドを使って、今度はロビーにプレイヤーを戻します。

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ spreadplayers ロビーの座標x z 0.2 2 false @a\[team=Blue\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ spreadplayers ロビーの座標x z 0.2 2 false @a\[team=Green\]**

**/execute @e\[type=armor\_stand,name=TimerStand,c=1,score\_NapoanTimer=-95\] ~ ~ ~ spreadplayers ロビーの座標x z 0.2 2 false @a\[team=Yellow\]**

[![ロビーの座標を設定しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160701.png)](#c/7/c74eff4d.png "ロビーの座標を設定しよう")

最後の方のコマンドで「ロビーの座標x z」が出てきましたが、**フィールドにプレイヤーを配置する時のようにx/z座標だけを指定します。**前回作ったチーム分け装置の前に戻せばどんどんチーム分けして遊べますね。

## 試合の制限時間の設定方法とゲーム開始方法

[![ゲームの制限時間を設定する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154412.png)](#b/0/b0718209.png "ゲームの制限時間を設定する")

回路の作成お疲れ様でした。ゲームの制限時間を設定する場合は、ゲーム開始回路の「C」のコマンドブロックの後ろの方にある数値を変更して下さい。**繰り返しますが、\[この数値÷20\]秒が制限時間です。**

[![ゲーム開始ボタンはここ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133455.png)](#3/8/3856cad8.png "ゲーム開始ボタンはここ")

ゲームを開始するには、「B」のコマンドブロックにくっつけたボタンを押します。それでは皆さん、楽しいPvPをお楽しみ下さい。

![最後に](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180206.png)

いかがでしたか。**この仕掛けを使った楽しいPvPが沢山作られるのを楽しみにしています。**この仕掛けを応用して素晴らしい仕掛けを作ってみてください。また、皆さんが**コマンドや回路で気になること**などコメント下さい。

(この記事の公開時点で)最近書いたコマンド解説記事

*   [キャラに**話しかけて、会話できる**仕掛けの作り方](https://www.napoan.com/rpg-talk-system-command/) New!!
*   [1.9の新機能”TAG”の使い方を解説](/howtouse-tag-system/)
*   [指定範囲内での**ダッシュを禁止する**方法](/cannot-sprint-command/)
*   [**乗るだけでチーム分け**できる装置の作り方 – PvP作成#2](/pvp-grouping-machine/)
