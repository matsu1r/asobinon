---
title: Splatoon風トラップの作り方 コマンド解説編part2 – ダメージを与えたり音を鳴らす仕組み
---

[![Splatoonのトラップコマンド解説編part2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142647.png)](#6/8/68e45895.png "Splatoonのトラップコマンド解説編part2")

**巷で話題のSplatoonに登場するサブウェポン「トラップ」をマイクラで作る解説part2です。**  
今回は、前回スコアボードとチームの用意などをした続きです。いよいよダメージを与えられるようにしていきます。**各コマンドの仕組みの解説を分かりやすい図付きで解説するので、**これからPvPマップを作りたい方は、**ブキ開発入門**として是非最後までお読み下さい。また、**scoreboardコマンドを使った仕掛けの作り方がよく分からない!** という方もどうぞ最後までお付き合い下さい。

\[2016年3月23日\] バージョン1.9用のコマンドも追記しました。

## 目次

*   [「トラップ」で遊びたい方は紹介編をお読み下さい](#part1)
*   [一から自分で作りたい! 方のために、コマンドと仕組みを解説](#build)
    *   [トラップに接触してしばらくするとダメージを与える仕組みの解説](#damage)
    *   [触れたトラップから煙を出し、トラップを消去する](#particle-and-remove)
    *   [リリリと警告音を鳴らしスコアをリセットする](#sound-and-reset)
    *   [一定時間が経過するとトラップを爆発させる](#trapage-over)
    *   [トラップアイテムのテクスチャを差し替えよう](#texture)

## 「トラップ」を今すぐ手に入れて遊びたい方は、紹介編をお読み下さい

[![トラップに完全敗北した君](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154440.png)](#b/0/b0ea99ef.png "トラップに完全敗北した君")

▲細い通路に設置した**「赤チームのトラップ」**が、青チームのプレイヤーを瞬殺! **殴り合いが苦手なプレイヤーでもチームに貢献できる**、新感覚のPvPを提供する**バトルアイテム「トラップ」**はいかが?

[![コマンドをペーストして実行!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151114.png)](#9/1/9130cd0c.png "コマンドをペーストして実行!")

なんとこの「トラップ」は、**とある1つのコマンドを実行するだけで手に入ります。**詳しい入手方法や使い方については、以下の記事で解説していますので、**この「コマンド解説編」の前にそちらをお読み下さい。**

トラップを入手するコマンドや使い方をまとめた紹介編はこちら!

[![Splatoonのトラップを作ってみた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154425.png)  
https://www.napoan.com/splatoon-trap-show/](/splatoon-trap-show/)

## コマンドと仕組みを解説 part2

### トラップに接触してしばらくするとダメージを与える仕組みの解説

[![おっと! ダメージを受けたぞ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145044.png)](#7/d/7dbd0e65.png "おっと! ダメージを受けたぞ")

私が作ったこの「トラップ」は、敵チームのプレイヤーが触れると起動し、**逃げたとしても「リリリ」と音を発してすぐ爆発します。**要するに、**敵が来たらカウントダウンを開始して、特定のタイミングでダメージを与える**のです。ただ単に「近くのプレイヤーにダメージを与える」というコマンドではダメです。**2つのスコアを上手く使って、自分の好きなタイミングで爆発できるよう設定していきます。**(つまりは敵に逃げる余裕を与えるということです)

[![カウントダウンしてダメージを与えるコマブロ達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132629.png)](#2/a/2acabeae.png "カウントダウンしてダメージを与えるコマブロ達")

さあ、コマンドを入力していきましょう。先ほどの**「1」~「6」のコマンドブロックの下側の5つ**を編集します。

「7」に入力するコマンド

**/execute @e\[type=armor\_stand,name=RedTrap\] ~ ~ ~ scoreboard players set @a\[r=1,team=Blue\] DamageFlag 1**  
**「RedTrap」つまり赤チームのトラップ**の**半径1ブロック以内に入ってしまった青チームのプレイヤーの、「DamageFlag」というスコアを1にセット**します。**「こいつは触れた」というフラグを立てるんです。**

「8」に入力するコマンド

**/execute @e\[type=armor\_stand,name=BlueTrap\] ~ ~ ~ scoreboard players set @a\[r=1,team=Red\] DamageFlag 1**  
これは「7」のコマブロの逆で、**青チームのトラップ**に触れてしまった**赤チームのプレイヤー**の**「DamageFlag」スコアを1にセット**します。**とにかく敵のトラップに触れたらフラグが立つんです。**

「9」に入力するコマンド

**/scoreboard players add @a\[score_DamageFlag_min=1\] TrapTimer 1**  
フラグ**「DamageFlag」が1になった人**の**「TrapTimer」スコア**を**1づつadd**、増やしていきます。

「10」に入力するコマンド

**/execute @e\[type=armor\_stand,name=RedTrap\] ~ ~ ~ effect @a\[score_TrapTimer\_min=11,r=2,team=Blue\] 7 1 1_**_  
さあついにダメージを与える時がやって来ました。**「赤チームのトラップ」**の近くに、先ほどのフラグのせいで**「TrapTimer」がどんどん増えて11になってしまった人がいたらダメージ効果を与えます。この時点で半径2ブロックより遠くに逃げていたらダメージの範囲外になります。****「TrapTimer」スコアは1秒で20増えます**から、**およそ0.5秒でダメージを受ける**のです。 この時「7 1 1」と書いていますが、ここを**「7 1 2」にすれば即死するレベルのダメージを与えられます!**_

「11」に入力するコマンド

**/execute @e\[type=armor\_stand,name=BlueTrap\] ~ ~ ~ effect @a\[scoreTrapTimer\_min=11,r=2,team=Red\] 7 1 1**  
スこちらは**青チームのトラップ**が**赤チームのプレイヤー**にダメージを与えるコマンドです。赤チームの人も同様、トラップにフラグを付けられ**「TrapTimer」スコアが増え続けています**から、逃げなければいつかはダメージを受けてしまうわけです。**フラグスコアと増えるスコアの二段構えが重要なのです。**

[![ダメージを与える仕組み1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160330.jpg)](#c/3/c3a83b59.jpg "ダメージを与える仕組み1")  
図で解説いたします。まず「7」のコマンドブロックが、**「赤トラップの近くの敵プレイヤーにフラグを立てろ!」**と命令します。すると**赤トラップに触れてしまった青チームのプレイヤーの**(もしくは**青トラップに触れた赤チームのプレイヤーの**)**「DamageFlag」スコアが1に**なります。そして**フラグを立てられたプレイヤーの「TrapTimer」スコアがどんどん増え続け…**

[![ダメージを与える仕組み2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131316.jpg)](#1/c/1ca0e57a.jpg "ダメージを与える仕組み2")

ついにダメージを与えるフェーズに突入します。先ほど**トラップに触れてしまったプレイヤーの「TrapTimer」スコアが、すぐに「11」まで増えます。**その時**トラップの近くにいれば、effectコマンドを受けてしまいダメージを食らいます。**でもこの一瞬の間に逃げることができればノーダメージです。****「TrapTimer」スコアが11まで増えていることを条件に**エフェクトコマンドを発動するで、**約0.5秒の遅延を作っている****のです。

### 触れたトラップから煙を出し、トラップを消去する

[![煙を出してスコアをリセットするコマブロ達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131118.png)](#1/a/1a3c1299.png "煙を出してスコアをリセットするコマブロ達")

さあどんどんコマンドを入力していきますよ。お次は「10」「11」のコマンドの右隣、**スクショでは水色の羊毛が置いてある場所の、「12」～「16」のコマンド**を入力します。コマンド解説でこんな番号まで進んだのは初めて。

「12」に入力するコマンド

**/execute @a\[team=Blue\] ~ ~ ~ scoreboard players set @e\[type=armor\_stand,name=RedTrap,r=1\] TrapFlag 1**  
**青チームのプレイヤー**が、**赤チームのトラップ**に触れたら、触れた赤チームのトラップに**「TrapFlag」スコア**を与えます。

「13」に入力するコマンド

**/execute @a\[team=Red\] ~ ~ ~ scoreboard players set @e\[type=armor\_stand,name=BlueTrap,r=1\] TrapFlag 1**  
これは「12」のコマブロの逆で、**赤チームのプレイヤー**が**青チームのトラップ**に触れたら、青チームのトラップに**「TrapFlag」スコア**を与えます。**とにかく触れたらトラップ側にもフラグが立つんです。**

「14」に入力するコマンド

**/execute @e\[type=armor\_stand,score_TrapFlag_min=1\] ~ ~ ~ particle explode ~ ~ ~ 0.2 0.2 0.2 1 10**  
**「TrapFlag」**が1になった、つまり**敵チームが触れてしまったトラップの周囲に爆発のパーティクルを発生させます。**particleコマンドは/particle パーティクル名 x y z 大きさx y z スピード (長さ)という構文です。

「15」に入力するコマンド

**/scoreboard players add @e\[type=armor\_stand,score_TrapFlag_min=1\] TrapRemove 1**  
こちらは、**触れてしまったトラップを一定時間後に消す処理のためのコマンド**です。敵が触れたトラップは**「TrapFlag」**スコアが1になっていますから、**そのトラップの「TrapRemove」を増やし続けます。**

「16」に入力するコマンド

**/kill @e\[type=armor\_stand,score_TrapRemove_min=12\]**  
敵プレイヤーが一回でも触れると**「TrapRemove」**スコアが増え続けるようになり、**ついに12まで増えたらトラップが殺される(=消される)のです。**「フラグを立てて、スコアを増やし続ける」が肝です。

[![任意のタイミングでコマンドを実行する仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152126.jpg)](#9/b/9b9e9130.jpg "任意のタイミングでコマンドを実行する仕組み")

▲こちらが今回のscoreboardコマンドの活用法です。

1.  条件に合ったらフラグのスコアを1にする
2.  フラグのスコアを手がかりに**もう一つのスコアをaddし続ける**
3.  **好きな数字までスコアが増えたら別のコマンドを発動**

scoreboardコマンドのaddモードと、スコアセレクタを上手く使えば、**流れるように次々と好きな処理ができるようになります。**これは武器の仕組みに限らず色々な場面で活用できるので、是非覚えておきましょう!

### リリリと警告音を鳴らしスコアをリセットする

**▲こちらがトラップで使っている警告音です。**古いブラウザの場合再生できないかもしれません。ごめんなさい。playsoundコマンドで再生するわけですが、**これはマイクラのどの効果音を使った音か分かりますか?**

答えは**金床が地面に落ちる時の音**です。ピッチを上げるとリリリン! と警告音っぽくなるんです。

[![音を鳴らしてトラップを消去するコマブロ達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124639.png)](#0/1/01c109d5.png "音を鳴らしてトラップを消去するコマブロ達")

お次は4つのコマンドブロックの中身を入力していきます。part1で解説した**「5」「6」の右隣、スクショではピンクの羊毛が置いてある場所**のコマンドブロックです。

「17」に入力するコマンド

**/execute @e\[type=armor\_stand,name=RedTrap,score\_TrapRemove\_min=1\] ~ ~ ~ playsound random.anvil\_land @a\[team=Blue,r=1\] ~ ~ ~ 0.6 1.5**  
**バージョン1.9の場合**:**/execute @e\[type=armor\_stand,name=RedTrap,score\_TrapRemove\_min=1\] ~ ~ ~ playsound block.anvil.place **master** @a\[team=Blue,r=1\] ~ ~ ~ 0.6 1.5**  
これちょっと自信の無いコマンドなんですが、**とりあえず赤チームのトラップから半径1ブロックの青チームのプレイヤーに先ほどの警告音を聞かせています。**音量は0.6、ピッチは1.5でお送りいたします。

「18」に入力するコマンド

**/execute @e\[type=armor\_stand,name=BlueTrap,score\_TrapRemove\_min=1\] ~ ~ ~ playsound random.anvil\_land @a\[team=Red,r=1\] ~ ~ ~ 0.6 1.5**  
**バージョン1.9の場合**:**/execute @e\[type=armor\_stand,name=BlueTrap,score\_TrapRemove\_min=1\] ~ ~ ~ playsound block.anvil.place **master** @a\[team=Red,r=1\] ~ ~ ~ 0.6 1.5**  
「17」の逆で、**青チームのトラップ**から**赤チームのプレイヤー**へ警告音を再生しています。

「19」に入力するコマンド

**/scoreboard players reset @a\[score_TrapTimer_min=12\] DamageFlag**  
scoreboardコマンドの**リセット機能**を使います。「9」のコマンドブロックで登場した**「TrapTimer」スコア**は、トラップに触れてしまった人にどんどん追加されるスコアですが、**これが「12」になった瞬間に「DamageFlag」スコアをリセットしています。(普通にもう要らないので)**用済みのスコアはどんどんリセットしましょう。

「20」に入力するコマンド

**/scoreboard players reset @a\[score_TrapTimer_min=12\] TrapTimer**  
**「TrapTimer」スコア**が12まで増えた人は、**その人自身の「TrapTimer」スコアもリセット**します。

![AssetsListenerが役立ちました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153649.jpg)

数あるマイクラの効果音の中から、警告音にピッタリなSEを探し当てるのは大変です。そんな時はこれ、[のと氏](https://twitter.com/notosanz)制作の**「Minecraft Assets Listener」**です。**マイクラのBGM/SEを検索して、音量とピッチを変更して何度でも聞けます。**使い方は以前に以下の記事にて紹介していますので、気になったら是非チェックしてみてください。

マイクラの音声を自由に聞けるツール「Minecraft Assets Listener」の紹介記事

[![AssetsListener](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208174603.png)  
https://www.napoan.com/44137681/](/44137681/ "ホラゲー制作に便利! マイクラの効果音/音楽を、自由な音程で聞けるツール「Minecraft Assets Listener」")

### 一定時間が経過するとトラップを爆発させる

[![トラップは設置後11秒で爆発する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132732.png)](#2/c/2c2806e2.png "トラップは設置後11秒で爆発する")

本家「Splatoon」のトラップは、どうやら設置後しばらくすると勝手に爆発してしまうらしいですね。ということで、**この「トラップ」も設置後11秒経つと自然に爆発するようにしています。**同時にダメージも与えます。

[![トラップを一定時間後自然に爆発させるコマブロ達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160706.png)](#c/7/c75f3f4b.png "トラップを一定時間後自然に爆発させるコマブロ達")

さあ、最後のコマンド入力です。**説明の便宜上、番号の順番がややこしいです**がコマブロの位置は動作に関係ないので気にしないでください。**それではあと6つのコマンドでトラップ完成です、頑張りましょう!**

< td>**/execute @e\[type=armor\_stand,score_TrapAge\_min=210\] ~ ~ ~ particle largeexplode ~ ~ ~ 0.2 0.2 0.2 1 1_**_  
ついにparticleコマンドの登場です。スコア「TrapAge」は増え続けていますが、**210になる(=10.5秒経過する)**と**「largeexplode」という名前のパーティクル**を0.2の大きさで通常の速度と数(1 1)で発生させます。_

「21」に入力するコマンド

**/scoreboard players add @e\[type=armor\_stand,name=RedTrap\] TrapAge 1**  
これ「RedTrap」つまり赤チームのトラップに対して、**常に「TrapAge」という新しいスコアを増やし続けます。**このスコアは**「トラップが設置されてどれくらい経過したか」を計る**ためのダミースコアです。

「22」に入力するコマンド

**/scoreboard players add @e\[type=armor\_stand,name=BlueTrap\] TrapAge 1**  
上と同様、今度は**青チームのトラップ**の「TrapAge」を増やし続けます。

「23」に入力するコマンド

「24」に入力するコマンド

**/kill @e\[type=armor\_stand,scoreTrapAge\_min=220\]**  
トラップが誰にも触れられなかった場合、**いつかは消さないといけません。**増え続ける**「TrapAge」が220になった(=11秒経過した)ら、どちらのチームのトラップでも消されてしまう**のです。 

「25」に入力するコマンド

**/execute @e\[type=armor\_stand,name=RedTrap,score_TrapAge\_min=215,score_TrapAge=215\] ~ ~ ~ effect @a\[r=2,team=Blue\] 7 1 1**  
トラップが消える直前、**実は周囲の敵プレイヤーにダメージを与えているんです。**先ほどの「TrapAge」スコアが215(=10.75秒経過)になったら、このコマンドですと**赤チームのトラップが青チームのプレイヤーにダメージを与えます。**

「26」に入力するコマンド

**/execute @e\[type=armor\_stand,name=BlueTrap,score_TrapAge\_min=215,score_TrapAge=215\] ~ ~ ~ effect @a\[r=2,team=Red\] 7 1 1**  
**トラップが消える直前に**今度は青チームのトラップが赤チームのプレイヤーにダメージを与えます。

_

[![スコアを増やし続けた場合の秒数のカウントについて](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124818.jpg)](#0/3/03a17a11.jpg "スコアを増やし続けた場合の秒数のカウントについて")

先ほど「『TrapAge』スコアが220になったら」などと解説しましたが、どうしてそんな大きな数字を条件にするのかといいますと、この図に書いてあるとおりです。最速クロックでスコアを増やし続けると、**スコアが「20」になった時が1秒経過、「220」になったら11秒経過している**のです。

[![コマンドは完成したので、後はテクスチャです](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151909.png)](#9/9/9965266e.png "コマンドは完成したので、後はテクスチャです")

お疲れ様でした!! ついに全てのコマンドの準備が完了したので、以下のコマンドで**赤チームもしくは青チームに参加**して、各チーム用の「トラップ」を受け取れば使えます。 …テクスチャの差し替えをしなきゃ!

赤チームもしくは青チームに参加するコマンド

赤チームに参加させる場合:  
**/scoreboard teams join Red プレイヤー名(セレクタも可)**  
青チームに参加させる場合:  
**/scoreboard teams join Blue プレイヤー名(セレクタも可)**  
※前回紹介したコマンドでチームを作成していないと参加できません。

各チーム用のトラップを入手するコマンド

**/give @p minecraft:paper 16 0 {display:{Name:赤チームのトラップ,Lore:\[“投げて設置だゾ”\]}}**  
**/give @p minecraft:slime\_ball 16 0 {display:{Name:青チームのトラップ,Lore:\[“投げて設置してね”\]}}**

### トラップアイテムのテクスチャを差し替えよう

[![これが「トラップ」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140039.png)](#4/f/4f53c6d4.png "これが「トラップ」")

さあ、最後に**トラップのテクスチャを差し替える作業**をします。これまでコマンド解説記事では何回かリソースパック同梱の方法を解説していますので、慣れた方も多いでしょう。

![トラップのテクスチャの配置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153422.jpg)

デスクトップなど**適当な場所に「assets」というフォルダを作り**、その中に_**「minecraft」>「textures」>「items」**_という構造でフォルダを作っていきます。最後に、**以下の名前でテクスチャ画像を「items」に入れましょう。**

アイテムの種類

画像の名前

適用されるアイテム

私が作ったテクスチャ画像

赤チームのトラップ

paper.png

紙

![paper](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134036.png)

青チームのトラップ

slimeball.png

スライムボール

![slimeball](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208083447.png)

※上記画像は**ぼやけて見えますが、保存すればくっきり見える**のでご安心下さい。

![「assets」フォルダを圧縮](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152640.jpg)

3つの画像を入れたら、**「assets」フォルダを右クリック→送る→「圧縮」しましょう。**すると_「assets.zip」_という名前でzipファイルが生成されると思います。**このままじゃ使えません**ね。

![「resources.zip」に改名](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134102.jpg)

生成されたzipを、回路を作った**セーブデータのフォルダ内に移動させましょう。**そして**「resources.zip」**に名前を変えます。スペルミスに注意! こうすることで、この**ワールドとテクスチャをセットで**使えます。

_

_![最後までお読み頂きありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131436.png)

いかがでしたか。**PvPがより楽しくなれば幸いです。**  
**「これはどうするの?」**などコメント待ってます。

最近書いたコマンド解説記事

*   [**空中浮遊PvP**の作り方/オフハンドのアイテムを判定する方法~](/45837670/) _**New!!**_
*   [**攻撃を受けない不死身のMob**を召喚する方法](/cannot-kill-entity/)
*   [投げ捨てても戻ってくる、**捨てられないアイテム**の作り方](/cannot-drop-item/)
*   [**子供のまま、成長しない動物**を召喚する方法 – 新NBTタグ”Age”](/forever-baby-animal-command/)_
