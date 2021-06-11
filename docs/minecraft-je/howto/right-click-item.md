
---
title: マルチプレイ対応! 手に持って右クリックすると何かが起こるアイテムの作り方
description: だいぶ前に公開した「手に持って右クリックすると何か起こるアイテム」のコマンドを、バージョン1.9に対応、さらにマルチプレイでも使えるように改良しました。以前作ってみてうまくいかなかった方も、今回はコマンドブロックを並べてコマンドをコピペして動力を伝えるだけで使えるようになります。
 配布ワールドで”魔法”を使うアイテムを作ってみたり、サーバーでテレポートするためのアイテムを作ったりなど、色々な使い方ができます。この機会にオリジナルのアイテムを作ってみませんか。
---

![右クリックすると何か起こるアイテムマルチプレイ対応版](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095816.png)

だいぶ前に公開した**「手に持って右クリックすると何か起こるアイテム」**のコマンドを、**バージョン1.9以上向けに、マルチプレイでも使えるように**改良しました。以前作ってみてうまくいかなかった方も、今回はコマンドブロックを並べてコマンドをコピペして動力を伝えるだけで使えるようになります。  
配布ワールドで**“魔法”を使うアイテム**を作ってみたり、サーバーで**テレポートするためのアイテム**を作ったりなど、色々な使い方ができます。この機会にオリジナルのアイテムを作ってみませんか。

※この記事は、「【Minecraft】手に持って右クリックすると何かが起こるアイテムの作り方 \[コマンド解説 for1.8\]」という記事の内容を書き直したものです。

## 右クリックすると何か起こるアイテムとは。色々なイベントを設定できます

![これが右クリックするアイテムだ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102447.png)

こちらが今回作る「手に持って右クリックする」アイテム。**どんな種類のアイテムでも大丈夫ですし、名前や説明文も自由に設定できます。**

![右クリックした際のイベントは自由です](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100351.png)

このアイテムを手に持って、カチッと右クリックすればイベントが起動します。**ここで何を実行するかは自由で、いくらでも拡張できます。**例えば次のようなアイテムが考えられますね。

*   右クリックするとロビーにテレポートするアイテム
*   右クリックするとMobを召喚できる”魔法の杖”
*   右クリックで音を鳴らせる”笛”
*   右クリックで近くのMobに雷を落とす”魔法の杖”

このアイテム、RPG風の配布ワールドで”魔法を使う”といった仕掛けにピッタリだと思うんです。本を使って発動させるという手もありますが、マップ製作者の皆さんなら**“杖”や”笛”などよりRPGらしいアイテムを充実させたい**ですよね。

![アイテムの種類を増やすのが楽](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095916.png)

何より私が自慢したいのはこれ。**右クリックするアイテムを新しく追加する際、いちいち回路を作る必要がなく**、2つのコマンドを追加するだけでいいんです。(右クリック時のイベントが1つの場合。複数イベントを実行するなら増えます)

![マルチプレイに対応しました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100401.png)

そして以前解説した装置ではできませんでしたが、**ついにマルチプレイでも使えるようになりました!** それぞれのプレイヤーが同じ/違うアイテムを同時に使うこともできます。

![この装置の欠点、それはゾンビが擦り付くこと](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095859.png)

しかし、この装置にも欠点があります。実は透明な”村人”をプレイヤーの場所に召喚しているので、**右クリックするアイテムを持っている間は**クリエイティブモードでもゾンビが擦り寄ってくるんです。(村人とゾンビを同じチームに参加させれば解決できますが、それだとゾンビをチームに入れる装置などと干渉してややこしいことになりますし、そもそもゾンビが近寄ってきたら剣に持ち替えるよな、ってことで放置)

[次のページでは、装置の作り方と各コマンドの仕組み等を解説します >>](2/)

## 装置の作り方とコマンドの仕組み等を解説

\[2016年5月25日追記\] バージョン1.8で作ることは可能ですが、コマンドブロックの配置とチャンクの境目や方角が関わってくるなど、あまりに条件が複雑で余計混乱を招きかねないのと、私のサポートが手一杯ということでバージョン1.8向けの解説は削除させて頂きました。ですので**以下の解説はバージョン1.9以上用**なのでご注意下さい。

### 動作に必要なスコアボードとチームとアイテムの用意

ここからは、装置を動かすのに必要なスコアボードの準備やアイテムの入手について解説していきます。

右クリックするアイテムの仕掛けを動かすのに共通で必要なオブジェクトを作成

**/scoreboard objectives add hasClickItem dummy**  
**/scoreboard objectives add hasVillager dummy**  
**/scoreboard objectives add clicked stat.talkedToVillager**

次に、動作に必ず必要な「チーム」を作成します。PvP等に影響することはありませんのでご安心下さい。

右クリックするアイテムの仕掛けを動かすのに共通で必要な”チーム”を作成し設定する

**/scoreboard teams add _noCollision_**  
**/scoreboard teams option noCollision collisionRule never**

▲この「collisionRule never」が何を意味しているかといいますと、バージョン1.9ではMobやプレイヤーが接触した際にお互いを押してしまうので、それをOFFにするコマンドなんです。詳しい解説は[こちらの記事](https://www.napoan.com/collision-setting-command/)へどうぞ。

次に、右クリックするためのアイテムを入手しましょう。MCStackerを使って作成します。

Giveコマンドも生成できる最強コマンド生成ツール「MCStacker」

[http://mcstacker.bimbimma.com/](http://mcstacker.bimbimma.com/)

![アイテムの名前や説明文の設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122653.jpg)

▲MCStackerにアクセスしたら、**「Command Type」を「Give」に**して、プレイヤー名に「@p」と入力します(Nearest Playerでもいい)。アイテムIDを入力してアイテムの種類を決め、**名前と説明文を必ず設定して下さい。**

![アイテムを入手出来た](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091412.png)

生成されたコマンドを使って、アイテムを入手します。**このアイテムの名前、説明文、ID(F3+Hで確認できます)を手掛かりに仕掛けが動く**ので、これらを変更した際はコマンドを色々手直しする必要がありますのでご注意下さい。

### 各コマンドの書き方と仕組みの解説

![バージョン1.9の回路の全体図](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100203.png)

こちらがバージョン1.9での回路の全体図です。北から順番に、スコアリセットとアイテムの登録、共通の処理、右クリック時のイベントをそれぞれ設定するコマンドブロックの回路を配置していきます。**スクショには「北」とか書いてますが方角は関係ありません**のでご安心下さい。

#### スコアのリセットとアイテム登録の部分のコマンド

![スコアリセットとアイテム登録のコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124252.png)

「1」「2」「3」のコマンドブロックを並べて、(並べる方角は何でもいい)**それぞれモードを設定して**中身を入力します。

「1」のコマンド

RepeatUnconditional(無条件)Needs Redstone(レッドストーン動力が必要)

**/scoreboard players set @a hasClickItem 0**  
スコアボード「hasClickItem」の値は、特に何もなければ全員「0」にセットされます。

「2」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/execute @a\[score\_clicked\_min=1\] ~ ~ ~ scoreboard players set @a clicked 0**  
スコアボード「clicked」の値が1になった人は「0」にセットされます。

「3」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/scoreboard players set @a hasClickItem 1 {SelectedItem:{id:”アイテムID“,tag:{display:{Name:”名前“,Lore:\[“説明文“\]}}}}**  
**ID、名前、説明文全てが合致する**アイテムを手に持ったプレイヤーの「hasClickItem」を、「1」にセットします。**この「ID」には、必ず「minecraft:」を付けて下さい!**

例:**/scoreboard players set @a hasClickItem 1 {SelectedItem:{id:”minecraft:diamond”,tag:{display:{Name:”魔法のダイヤモンド”,Lore:\[“手に持って右クリックします”\]}}}}**

#### 全アイテムで共通の処理をするためのコマンド

![全アイテム共通の処理を行うコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100225.png)

先程設置したユニットの南に、5つのコマンドブロックを並べて**モードを設定**、コマンドを入力します。

「4」のコマンド

RepeatUnconditional(無条件)Needs Redstone(レッドストーン動力が必要)

**/execute @a\[score\_hasVillager=0,score\_hasClickItem\_min=1\] ~ ~ ~ summon Villager ~ ~ ~ {Team:”noCollision”,CustomName:”ClickMan”,Silent:1b,NoAI:1b,Profession:0,**Offers:{}**,ActiveEffects:\[{Id:14,Amplifier:1,Duration:100000000,ShowParticles:0b}\]}**  
「hasVillager」が0で、「hasClickItem」の値が1以上、つまり**何らかの右クリックするアイテムを持っているプレイヤーの場所に「ClickMan」という消音で透明な村人を召喚**します。右クリックしても何も起きないよう、Offers:{}で取引を消しています。  
さらにTeam:”noCollision”を付けることで、**接触時の跳ね返りを予め無効化しておいた「noCollison」チームに参加させた状態で召喚**しています。

「5」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/execute @e\[type=Villager,name=ClickMan\] ~ ~ ~ scoreboard players set @p hasVillager 1**  
プレイヤーの場所に召喚された村人が、その場のプレイヤーの「hasVillager」を「1」にセットします。こうすることで、**既に村人を召喚済みの人にはそれ以上村人を与えないように**しています。

「6」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/execute @a\[score\_hasClickItem\_min=1\] ~ ~ ~ tp @e\[type=Villager,name=ClickMan,c=1\] @p**  
何らかの右クリックするアイテムを持っている人の場所に、召喚された村人が背後霊のようについてきます。

「7」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/execute @a\[score\_hasClickItem\=0\] ~ ~ ~ tp @e\[type=Villager,name=ClickMan,c=1,r=1\] ~ ~-300 ~**  
**右クリックするアイテムを持たなくなったらhasClickItemの数値は「0」に**なります。するとくっついていた村人は奈落へ真っ逆さま。

「8」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/scoreboard players set @a\[score\_hasClickItem\=0\] hasVillager 0**  
「5」と同様に右クリックするアイテムを持たなくなったら、hasVillagerの値も「0」にします。これで再び右クリックするアイテムを持った時に、 村人を召喚できるわけです。

#### アイテムを右クリックした際の効果を設定するコマンド

![アイテム右クリック時のイベントを設定するコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095943.png)

さらに南に3つコマンドブロックを並べます。これは**右クリック時のイベントを設定するコマンドなので、適宜個数を変えて下さい。**

「9」のコマンド

RepeatUnconditional(無条件)Needs Redstone(レッドストーン動力が必要)

**/execute @a\[score\_hasClickItem\_min=1,score\_hasClickItem\=1,**score\_clicked\_min=1**\] ~ ~ ~ particle explode ~-1 ~-1 ~-1 1 1 1 1.0 1000**  
particleコマンドで煙を出すのですが、この時「score\_hasClickItem\_min=1,score\_hasClickItem\=1」とすれば、「hasClickItemが1以上、1以下」のプレイヤーをターゲットにしてコマンドを実行できます。  
「3」のコマンドブロックで「特定の名前/説明文のダイヤを持っていたらhasClickItemは1にする」と決めたので、”1″を条件にする=あのダイヤモンドを持っている人、という意味になります。

「10」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/title @a\[score\_hasClickItem\_min=1,score\_hasClickItem\=1,**score\_clicked\_min=1**\] times 5 15 5**  
titleコマンドで文章を表示するので、事前に表示時間を設定しています。  
こちらもお好みで書き換えて下さい。とにかく**「hasClickItem」が「1」のコマンドで設定した任意の数値と一致**して、さらに**「clicked」が1以上**のプレイヤーをターゲットに実行すれば何でもOKです。

「11」のコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/title @a\[score\_hasClickItem\_min=1,score\_hasClickItem\=1,**score\_clicked\_min=1**\] title {“text”:”Clicked!”,”color”:”red”,”bold”:”true”}**  
titleコマンドで文章を表示しています。

とにかく、右クリックした際に実行するコマンドのターゲットとして  
**@a\[score\_hasClickItem\_min=1,score\_hasClickItem\=1,**score\_clicked\_min=1**\]**  
を指定すればいいのです。例えばgiveコマンドでしたら  
**/give @a\[score\_hasClickItem\_min=1,score\_hasClickItem\=1,**score\_clicked\_min=1**\] diamond\_sword 1 0 …**  
って感じです。

![もし装置が動かない場合は](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095946.png)

ちゃんとコマンドブロックを全て置いたのに動かない場合は、**レッドストーンブロックを置き直したり、レバーをONにし直したりすれば動き出します。**もしそれでも動かない場合は、コマンドブロックを接続した向きや、モード(Needs Redstone(レッドストーン動力が必要)とAlways Active(常時実行)に注意!)を確認して下さい。

### アイテムの種類を追加する際の手順。とっても簡単です

今回の仕掛けでは、コマンドブロックの塊を3つに分けて設置しました。何故ひとまとめにしてはいけないかといいますと**、「右クリックするアイテムの種類を増やす際に最小限の作業で済ますため」**です。アイテムの種類を増やす具体的な手順を解説します。

![2種類目のアイテムのコマンドをMCStackerで作ろう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111649.jpg)

1種類目と同じように、[MCStakcer](http://mcstacker.bimbimma.com/)でアイテムの種類/名前/説明文を決めてコマンドを作り、入手します。

![追加するアイテムを登録するコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095616.png)

次に、最初に作成した**「スコアリセット&アイテム登録ユニット」の先っぽに新しいコマンドブロックをくっつけます。(向きに注意!)**そして以下のコマンドを入力して下さい。

追加アイテムのスコアを設定するコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/scoreboard players set @a hasClickItem 任意の数値 {SelectedItem:{id:”2つめのアイテムのID“,tag:{display:{Name:”2つめのアイテムの名前“,Lore:\[“2つめのアイテムの説明文“\]}}}}**  
**先程作成した2つめのアイテム**を手に持ったプレイヤーの「hasClickItem」を、任意の数値(1以上)にセットします。(「ID」には、必ず「minecraft:」を付けて下さい)  
![「任意の数値」の決め方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111646.jpg)  
▲「任意の数値」とはこういうことです。右クリックの判定の際に、「hasClickItemが○以上○以下なら…」という条件で判断するので、**各アイテムを持った際にhasClickItemの数値がバラバラになればいいのです。**

例:**/scoreboard players set @a hasClickItem 2 {SelectedItem:{id:”minecraft:gold\_ingot”,tag:{display:{Name:”2つめの右クリックするアイテム”,Lore:\[“手に持って右クリックします”\]}}}}**

![追加アイテムの右クリック時のイベントを設定するコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208192855.png)

続いて**追加アイテムを持って右クリックした際のイベント**を設定します。**一番南に設置してあるイベント設定ユニットにコマブロを追加して下さい。(これも向きに注意!)**

追加アイテムの右クリック時のイベントを設定するコマンド

ChainUnconditional(無条件)Always Active(常時実行)

**/title @a\[score\_hasClickItem\_min=先程設定した数値,score\_hasClickItem\=先程設定した数値,score\_clicked\_min=1\] title {“text”:”Clicked 2nd item!”,”color”:”green”,”bold”:”true”}**  
先程、**2つめのアイテムを持った際のhasClickItemの数値を設定しました**ね。それを手掛かりに、ここでは「2以上2以下」なので2種類目のアイテムを持っていて、かつ右クリックした人をターゲットに実行しています。

![スコアの数値とアイテムの対応表](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100310.jpg)

図にまとめるとこんな感じ。**「アイテム登録ユニット」のコマンドでセットしたhasClickItemの数値に応じて、イベントの実行条件も「○以上○以下」とする**ことで「○○のアイテムを持っている人が右クリックしたらこうする」という風に処理しています。

右クリックするアイテムの種類を増やしたい場合は、**「スコアリセット&アイテム登録」ユニットと「右クリックイベント設定」ユニットにコマンドブロックを追加していくだけ**です。各処理部分を分離させたおかげで、いちいち装置を作りなおさなくて済むんです。

---

![最後までお読み頂きありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095706.png)

いかがでしたか。[SQRTdude氏の動画](http://www.youtube.com/watch?v=FiPWOe4M_vw)を見て**「村人と取引する実績で右クリックを判定すれば良いのか!」**と知って、あれから1年。私もコマンドをどんどん勉強して、ついにはオリジナルの装置を完成させることができました。Twitterで私の端ない質問に答えてくださるフォロワーの皆様、毎度毎度本当に情報ありがとうございます。

**今回解説した装置が、少しでも多くの方のお役に立てたら光栄です。**是非自作の配布ワールドや、サーバーでコマンドをうまく活用してみてください。それでは次回のコマンド解説記事もお楽しみに。
