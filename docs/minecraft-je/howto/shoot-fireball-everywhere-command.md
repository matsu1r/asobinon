
---
title: 右クリックで見ている方向にファイアボール爆弾を飛ばすバズーカの作り方 (マルチプレイ対応)
description: バズーカを持ち、オフハンドにファイアチャージをセットして右クリック! 視点の方向へファイアボールを発射! そんな「コマンドで作れたらいいな」の当ブログ要望No.1の仕掛けがついに完成しました。「視点をryやrxで判定して飛ばすんでしょ?」いいえ、この装置はたった6つのコマンドを常時動かせば動作します。マルチプレイでも使えるので、PvPの新しい武器として是非お使いください。
---

![バズーカの作り方解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090241.png)

**バズーカを持ち、オフハンドにファイアチャージをセットして右クリック! 視点の方向へファイアボールを発射!** そんな「コマンドで作れたらいいな」の**当ブログ要望No.1の仕掛けがついに完成しました。**「視点をryやrxで判定して飛ばすんでしょ?」いいえ、この装置は**たった6つのコマンドを常時動かせば動作**します。マルチプレイでも使えるので、PvPの新しい武器として是非お使いください。

## 動画をご用意しました。合わせてご覧ください

最近記事だけでなく動画の制作にも力を入れてます。今回は初めてコマンド解説の動画を作ってみました。**バズーカがどのように動作するのかは、▲の動画でご確認下さい。**

![スクショだとこんな感じ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091919.png) ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092407.gif)

スクショとGIFだとこんな感じ。ちなみに爆発の威力は自由に変えられます。**ブロックを破壊せずダメージだけ与えることも可能。**こんなバズーカが使えるPvPって面白そうじゃないですか…?

![残りの弾数はこちらです](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102241.png)

ちなみに**バズーカの右下の数字がちょうど弾数を表しています。**弾切れすると銃自体が消える仕様となっております。

## 今回の装置は「Fragment」製作者の漆丸氏のアイデアで完成しました! 感謝!

![方向を検知する手もあるが面倒](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124206.jpg)

最初にコメントか何かで**「視点の方向に飛ばせるファイアボールの作り方を解説して!」**と依頼された時、最初に考えたのはセレクタの「rx/ry」引数を使った方法でした。前に「[向いている視点の向きを判定する方法](https://www.napoan.com/44870887/)」と題して解説記事を書きましたよね。ああやって角度ごとに飛ばす向きを設定すれば… **しっかしこれがまた面倒なこと。非常に無駄な装置を考えてしまったなと自分の非力さを痛感します…**

漆丸氏のTwitter

[![漆丸氏のTwitter](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111835.jpg)  
https://twitter.com/gol559](https://twitter.com/gol559)

そんな時救いの手を差し伸べて下さったのが漆丸氏でした。なんと**雪球を使えばいい**とのこと。何故そんな御名答を即座にアドバイスして頂けたのかといいますと…

RPG風アドベンチャー配布ワールド「Fragment」の配布ページ (非公式フォーラム)

[![Fragmentの配布ページ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111846.jpg)  
http://forum.minecraftuser.jp/viewtopic.php?f=10&t=30340](http://forum.minecraftuser.jp/viewtopic.php?f=10&t=30340)

そう、漆丸氏は**本格的配布ワールドの制作者**なのです。▲は**戦闘に重点を置いたRPG風アドベンチャーマップ、その名も「Fragment」**の配布ページです。遊びたい気持ちは山々なのですが多忙で遊べてないままです…

![PV内で登場したアイテム](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111839.jpg)

ニコニコ動画にアップされている[「Fragment」のPV](http://www.nicovideo.jp/watch/sm28294136)の1:37あたりに登場するのが、今回作り方を解説するアイテムです。**雪球(解説する装置ではこれをバズーカのテクスチャに差し替えてそれっぽくします)を持ってオフハンドにファイアボールをセットすると火球モードになり、爆発する球を好きな方向にどんどん飛ばせる…** あなたのワールドでも作ってみませんか。

## コマンドの解説

### まずはスコアボードとバズーカとファイアチャージを用意しよう

まずは動作に必要なスコアボードを作成します。

動作に必要な、雪球の使用回数をカウントするスコアボードを作成するコマンド

**/scoreboard objectives add useBall stat.useItem.minecraft.snowball**

stat.useItem.minecraft.snowballという種類を指定すれば、雪球を投げた回数が自動で代入されます。この**統計カウント機能の詳しい使い方や他の項目一覧は[こちらの記事](https://www.napoan.com/scoreboard-stat-count/)にまとめてあります**ので是非お読み下さい。

次に、「バズーカ(正体は雪球)」と「飛ばせる火の球(正体はファイアチャージ)」を入手しましょう。

「バズーカ」と名付けた雪球をコマンド

**/give @p minecraft:snowball 16 0 {display:{Name:”バズーカ”,Lore:\[“右クリックで使用”\]}}**

「飛ばせる火の球」と名付けたファイアチャージを入手するコマンド

**/give @p minecraft:fire\_charge 1 0 {display:{Name:”飛ばせる火の球”,Lore:\[“オフハンドにセットせよ”\]}}**

![現時点では雪球です](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091923.png)

この時点ではまだただの雪球です。テクスチャの差し替えは最後にするのでご安心下さい。

### メインハンドとオフハンドのアイテムを検知してファイアボールを飛ばすコマンド

![コマンドブロック達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123717.png)

6つのコマンドブロックを同じ向きに並べて、以下のコマンドを入力して下さい。

以下のコマンドは漆丸氏のアドバイスを元に初心者の私が書いたはしたないコマンドですので、見苦しい部分等あるかも知れません。コメントやTwitterで「こうすればいいよ」等助言を下されば嬉しいです。

※マウスオーバーすると説明が出る箇所を用意しています。

「1」

**Repeat(リピート)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players tag @a add hasSnowball {SelectedItem:{[id:minecraft](http://blog.hatena.ne.jp/minecraft/):snowball,tag:{display:{Name:”バズーカ”,Lore:\[“右クリックで使用”\]}}}}**  
「バズーカ」をメインハンドに持っているプレイヤーに、hasSnowballタグを付与します。

「2」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players tag @a add offhandFB {Inventory:\[{Slot:-106b,id:”minecraft:fire\_charge”,tag:{display:{Name:”飛ばせる火の球”,Lore:\[“オフハンドにセットせよ”\]}}}\]}**  
オフハンドに「飛ばせる火の球」を持っているプレイヤーに、offhandFBタグを付与します。

「3」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/execute @a\[tag=hasSnowball,score\_useBall\_min=1\] ~ ~ ~ execute @p\[tag=offhandFB,r=0\] ~ ~ ~ execute @e\[type=Snowball,c=1\] ~ ~ ~ summon Fireball ~ ~ ~ {direction:\[0.0,0.0,0.0\],power:\[0.,0.0,0.0\],ExplosionPower:1}**  
2つのタグを持っていて、さらにuseBall(雪球の使用回数)が1以上のプレイヤーの、最寄りの雪球エンティティの位置にファイアボールを召喚します。  
**ExplosionPower:1の数値が爆発力**になります。少ない数値でもかなり大きな爆発が起こるので注意。

「4」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players set @a useBall 0**  
このままだとバズーカを持って右クリックする度に雪球の使用回数、useBallのスコアが延々と増えるので常時0にセットします。**こうすることで、useBallは右クリックした瞬間だけ1になります。**

「5」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players tag @a remove hasSnowball**  
このままでは一度バズーカを持つとずっとタグを持ったままになるので、**常時強制的にタグを消します。**

「6」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players tag @a remove offhandFB**  
「5」と同様の理由でoffhandFBタグを削除。

![仕組みの図解](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111843.jpg)

「3」のコマンドについての図解がこちら。**メインハンドにバズーカ、オフハンドに火の球を持っていれば2つのタグが付与されます。**その状態で**右クリックしてバズーカ(雪球)を使えばuseBallスコアが増える**ので、その瞬間に**一番近くの雪球(つまり今発射した雪球)の位置にファイアボールを召喚**します。すると雪球の力でファイアボールが飛んで行くわけです。

## 雪球のテクスチャを置き換える手順

![テクスチャを差し替えよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091926.png)

それでは最後に、**雪球のテクスチャをバズーカっぽく置き換える手順**を解説します。

![ファイル名拡張子を表示させて](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111849.jpg)  
当ブログでは**ファイルの拡張子が表示されている前提で解説を進めていく**ので、もし表示させてないのであればまず先に表示させておいて下さい。

![ワールドフォルダー内にフォルダーを作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103802.jpg)

まずワールドデータのフォルダーを開き、**assetsという名前のフォルダーを作成**します。さらに**その中にminecraft→textures→itemsという順番でフォルダーを作成**していきます。

![snowball.pngを配置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101020.jpg)

itemsフォルダーの中に、snowball.pngという名前でバズーカのテクスチャを配置します。画像についてですが、**背景が透明な画像を作れるソフトで作りましょう。**

![assetsフォルダーを圧縮](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121721.jpg)

ワールドデータ内の一番上の階層に戻り、**assetsフォルダーを選択してzipに圧縮**します。

![resources.zipという名前にリネーム](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104419.jpg)

生成されたzipの名前をresources.zipという名前にしましょう。こうすることで、**ワールド読み込み時に一緒にこのリソースパックを読み込むようになります**。(1.8以上なら使えるテクニック)

## YouTubeのチャンネル登録してね

![YouTubeを活発に](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111527.png)

今回初めてコマンド解説を動画化してみました。(動画では全然ちゃんと解説できてませんが) こんな風に**動画の投稿をこれからもっと活発にする予定なのでご期待下さい。**[アンケート](https://www.napoan.com/2016-spring-survey/)で「YouTubeを充実させてほしい」とのご意見があり、そろそろ本格的にチャンネルを始動させたいなと思っている次第です。

[チャンネル登録](https://www.youtube.com/channel/UCBVFh_pGrysolohOzXMGqIA)

目指すは登録者1000人! お気軽にチャンネル登録よろしくお願いします。
