
---
title: インベントリのアイテムをクリックする仕掛けの作り方 – サーバーや配布ワールドに是非
description: インベントリ内に「必殺技発動」やら「ロビーに戻る」などのボタンを設置して、クリックすると何かが起こる、という仕掛けの作り方を解説します。RPG風の戦闘を作ったり、テレポートなどに使えそうな仕掛けです。レゴブロックリソースパックの作者であるSaziumR氏から頂いたコマンドを、私の手でなんとかマルチプレイ(バージョン1.8~)に対応させました。
---

![クリックで○○するアイテムの作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100419.png)

**インベントリ内に「必殺技発動」やら「ロビーに戻る」などのボタンを設置して、クリックすると何かが起こる**、という仕掛けの作り方を解説します。**RPG風の戦闘を作ったり**、テレポートなどに使えそうな仕掛けです。レゴブロックリソースパックの作者であるSaziumR氏から頂いたコマンドを、私の手でなんとかマルチプレイ(バージョン1.8~)に対応させました。

\[2016年2月1日追記\] 死亡時にイベントが誤作動するとのご指摘を頂き、コマンドを修正しました。必要なスコアボードも増えていますので、申し訳ないのですが装置の作り直しをお願いします。

\## インベントリのアイテムをクリックする仕掛けとは !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208192904.png) サーバー内のテレポートなど、 \*\*「いつでも押したら○○する」機能を作りたい場合\*\* 、あなたならどうしますか? tellrawコマンドで「クリックで○○する」などと放送してクリックさせたりもできますが、常時放送し続けるわけにはいきません。

![RPG風ワールドの制作に使えそう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100920.png)

そこで、**インベントリ内にアイテムを設置して、ボタンとしてクリックさせる仕掛けはいかがですか**。このボタンアイテムは動かすことはできませんが、状況に応じて表示/非表示を切り替えることもできます。

![The Heistの再スタート用アイテム](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095739.png)

この仕掛けの例として、この前紹介した配布ワールド「The Heist」では、**インベントリのトランシーバーをクリックするとそのフロアを再スタートできる仕掛け**がありましたね。そんなの知らねえよ! って方はダウンロードして遊んでみてください。ハマりますよ。日本語化もされています。

日本語化もされているパズル系配布ワールド「The Heist」

[![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121942.png)  
//exr-nap.sakura.ne.jp/www.napoan.com/the-heist-supported-japanese/](https://www.napoan.com/the-heist-supported-japanese/)

![SaziumR氏の装置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095833.png)

実は以前、レゴブロックリソースパックでおなじみの**[SaziumR氏](https://twitter.com/SaziumR)が、この「インベントリのアイテムをクリックする」仕掛けを作って下さりました!**(ワールドのダウンロードは[こちら](http://www.dropbox.com/s/fnkfzv0hnndrja4/SaziumR%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E6%A9%9F%E6%A7%8B2.zip?dl=0)) 1.8/1.9両対応とのことで、非常にありがたかったのですが…

残念なことに、SaziumR氏の機構はマルチプレイでうまく動かなかったのです。**そこで私が無理やりマルチプレイに対応させました。**これで大きなサーバーでも「アイテムをクリックする」仕掛けが使えます!

\## クリックするとテレポートできるアイテムのコマンドの解説 !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091408.pn) それでは、クリックするとテレポートできるアイテムの作り方を解説します。

\### 下準備! アイテムを設置してスコアボードを作成 まずはインベントリの真ん中に、クリックするとテレポートするアイテムを設置します。

プレイヤーのインベントリの真ん中にテレポートアイテムを設置するコマンド

**/replaceitem entity @a slot.inventory.13 minecraft:diamond 1 0 {display:{Name:”ロビーに戻る”,Lore:\[“クリックでロビーに戻ります”\]}}**  
▲この仕掛けを動かす前に、必ずこのコマンドを実行してアイテムを設置して下さい。

![アイテムは設置できましたか](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123232.png)

次に、以下のscoreboardコマンドでオブジェクトを作成しておきます。

クリックするとテレポートするアイテムの動作に必要なスコアボードを作成

**/scoreboard objectives add clickLobbyItem dummy**  
**/scoreboard objectives add spawnTime stat.timeSinceDeath**  
▲「stat.timeSinceDeath」のスコアは、死ぬと0になりリスポーンすると増え続けます。死んだ時にイベントを一時無効化するためのスコアなんです。

\### いつものfillクロックの設置 !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095938.png) いつものfillクロックを設置します。

Aのコマンドブロック

/fill ~ ~-1 ~ ~3 ~-1 ~ redstone\_block

Bのコマンドブロック

/fill ~ ~1 ~ ~3 ~1 ~ stone

\### 常時実行する6つのコマンドを解説 !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095747.png) fillクロックの上に「1」～「6」までのコマンドブロックを設置して、内容を入力します。

「1」のコマンド

**/scoreboard players remove @a clickLobbyItem 1**  
後で作成する「clickLobbyItem」のスコアは、常に1づつ減らされていきます。

「2」のコマンド

**/scoreboard players set @a clickLobbyItem 1 {Inventory:\[{Slot:22b,id:”minecraft:diamond”,Count:1b,tag:{display:{Name:”ロビーに戻る”,Lore:\[“クリックでロビーに戻ります”\]}}}\]}**  
インベントリに「ロビーに戻る」**アイテムがあるプレイヤーは、「clickLobbyItem」の値が1に**なります。この際、**「Slot:22b」というのはインベントリの真ん中を意味しています**のでそれ以外の場所に置いても「ない」と判断されます。

![公式Wikiより転載](//hydra-media.cursecdn.com/minecraft.gamepedia.com/b/b2/Items_slot_number.png)  
▲公式Wikiの[こちらのページ](http://minecraft.gamepedia.com/Player.dat_format#Inventory_slot_numbers)の画像です。この画像を参考に、**「Slot:○○b」の数字を適宜変更して下さい。**

「3」のコマンド

**/tp @a\[score\_clickLobbyItem\=-1,score\_spawnTime\_min=4\] テレポート先のx y z**  
**もしプレイヤーがアイテムをクリックしたら、インベントリからアイテムが一時的になくなる**ので「clickLobbyItem」スコアは減らされてしまいます。**「-1」まで減らされたら(つまりアイテムをクリックして浮かせたら)**テレポートを実行します。  
\[2016年2月1日修正\]「spawnTime」スコアはリスポーン時に0から増え続けるので、ここで**「spawnTimeが4以上」と書くことでリスポーン直後はイベントを無効化しています。**

「4」のコマンド

**/clear @a\[score\_clickLobbyItem\=-1,score\_clickLobbyItem\_min=-1\] minecraft:diamond 0 1 {display:{Name:”ロビーに戻る”,Lore:\[“クリックでロビーに戻ります”\]}}**  
「3」と同時に実行されます。インベントリ上のテレポートアイテムを消します。

「5」のコマンド

**/replaceitem entity @a\[score\_clickLobbyItem\=-1\] slot.inventory.13 minecraft:diamond 1 0 {display:{Name:”ロビーに戻る”,Lore:\[“クリックでロビーに戻ります”\]}}**  
「3」と同時に実行されます。アイテムが無くなった場所に即座にテレポートアイテムを再設置します。「slot.inventory.13」の数字は、**「2」のコマンドブロックの「Slot:○○b」の数字とは違います**のでご注意下さい。例えば装備なら「slot.**armor**.head」などで、手持ちバーなら「slot.**hotbar**.○○」です。

「6」のコマンド

**/execute @a\[score\_spawnTime=0\] ~ ~ ~ kill @e\[type=Item,c=1\] {Item:{id:”minecraft:diamond”,Name:”ロビーに戻る”,Lore:\[“クリックでロビーに戻ります”\]}}**  
「spawnTime」スコアは死亡時に0になるので、死んだ時に実行されます。**死亡時に落としたアイテムを後で回収した時に、イベントが誤発動するのを防止**するために、死亡時にアイテムを消します。

\### クリックするアイテムの位置を変えるには !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095635.png) クリックするためのアイテムの位置を変更するには、「2」と「5」のコマンドブロックのこれらの数字をずらします。同じスロットを指定したい場合でも、 \*\*「Slot:○○b」「inventory.○○」それぞれで指定する数字が違います\*\* のでご注意下さい。

また、**アイテムの位置を変更する前にかならずその位置に該当するアイテムを設置して下さい!** でないとテレポートなどが発動してしまいます。

---

**この仕掛けを使った楽しい配布ワールドが沢山作られるのを楽しみにしています。**この仕掛けを応用して素晴らしい仕掛けを作ってみてください。また、皆さんが**コマンドや回路で気になること**などコメント下さい。
