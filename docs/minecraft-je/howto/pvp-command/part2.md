---
title: 乗るだけでチーム分けできる装置の作り方 -ゼロから自作するPvP作成講座 part2
---

![乗るだけチーム分け装置](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/1/c/1c754126.png)

![乗るだけチーム分け装置](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/1/c/1c754126.png)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/1/c/1c754126.png "乗るだけチーム分け装置")

**コマンドがよく分からない方のための、ゼロからPvPマップを自作する講座の第二回です。**  
前回の「[チームのキル数を合計する方法](https://web.archive.org/web/20201201051401/https://www.napoan.com/display-team-total-killscore/)」に続き、今回は**「乗るだけでチーム分けできる装置」の作り方**を解説します。PvPをするなら欠かせないチーム分け。**色のついた羊毛に乗るだけでチームに参加できる装置を作ってみましょう。**作っていくうちにscoreboardコマンドのチーム機能とexecuteコマンドを学べます。

![](https://web.archive.orghttps://web.archive.org/web/20201201051401im_/https://www.napoan.com/wp-content/themes/Gridnim/img/icon.png)

![](https://web.archive.orghttps://web.archive.org/web/20201201051401im_/https://www.napoan.com/wp-content/themes/Gridnim/img/icon.png)](https://web.archive.orghttps://web.archive.org/web/20201201051401/https://www.napoan.com/author/2687e8/)

[napoan](https://web.archive.orghttps://web.archive.org/web/20201201051401/https://www.napoan.com/author/2687e8/)

[**<< Part1** チームのキル数を合計して表示](/minecraft-je/howto/pvp-command/)


## 「乗るだけでチーム分けできる装置」の概要と使い方


![羊毛に乗るだけでチーム分け](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/4/4/442a7a7a.png)

![羊毛に乗るだけでチーム分け](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/4/4/442a7a7a.png)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/4/4/442a7a7a.png "羊毛に乗るだけでチーム分け")

ゼロからPvPを自作する[講座 #1](https://web.archive.org/web/20201201051401/https://www.napoan.com/display-team-total-killscore/)では、4チームに分かれて合計キル数を競い合う装置を作りました。「チームに参加するにはコマンドを入力」とか書きましたが、**いちいちコマンドを入力するのは面倒**ですよね。そこで今回は、**色のついた羊毛に乗るだけでチームに参加できる装置**を作ってみましょう。

![羊毛に乗ると帽子と名前の色が変わる](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/c/7/c7c899c9.png)

![羊毛に乗ると帽子と名前の色が変わる](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/c/7/c7c899c9.png)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/c/7/c7c899c9.png "羊毛に乗ると帽子と名前の色が変わる")

この4色の羊毛は、それぞれチームの色を表していて、上に乗るだけでその色のチームに参加できます。同時に**頭上に表示されるプレイヤー名(Tabキーでも確認可能)に色がつき**、**色付きの帽子も**与えられます。

## まずはチームと色を設定して羊毛を置こう

![チーム分け用の羊毛を置こう](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/7/a/7a159ff8.png)

![チーム分け用の羊毛を置こう](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/7/a/7a159ff8.png "チーム分け用の羊毛を置こう")

今回は、**「赤」「緑」「黄」「青」**の4チームに加え、**灰色の「OPチーム」**も作ります。これらのチームのうち、赤緑黄青は前回作成したのですが、**今回からPvPの運営を楽にするために「OPチーム」が出てきます。**

対戦用の5つの「チーム」を作成するコマンド(チャット欄で実行)

**/scoreboard teams add Red**  
**/scoreboard teams add Blue**  
**/scoreboard teams add Yellow**  
**/scoreboard teams add Green**  
**/scoreboard teams add OP** _←New!!_

▲**「Red」「Blue」「Yellow」「Green」「OP」**の5種類のチームを作成します。

それぞれのチームの「色」を設定するコマンド

**/scoreboard teams option Red color dark\_red**  
**/scoreboard teams option Blue color dark\_blue**  
**/scoreboard teams option Yellow color yellow**  
**/scoreboard teams option Green color green**  
**/scoreboard teams option OP color dark\_gray** _←New!!_

▲ここで各チームに色を設定すれば、**所属しているプレイヤーの名前がその色に染まります。**

※「New!!」が付いているのは今回から加わったコマンドです。

## チーム分けする回路とコマンドの解説

![高速fillクロックの作り方](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/6/0/60eec0c1.png)

![高速fillクロックの作り方](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/6/0/60eec0c1.png "高速fillクロックの作り方")

やはりこの装置も、**お決まりのfillクロック**を動かさないといけないんです。以下のコマンドを入力して、**真ん中に赤石ブロックを挟めばクロックが起動します。**  
ちなみにコマンドブロックは**/give @p command\_block**で入手します。

「A」に入力するコマンド

/fill ~ ~-1 ~ ~5 ~-1 ~ redstone\_block

「B」に入力するコマンド

/fill ~ ~1 ~ ~5 ~1 ~ stone



![チーム分けするコマンド](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/5/f/5f418e9a.png)

![チーム分けするコマンド](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/5/f/5f418e9a.png "チーム分けするコマンド")

さあ、コマンドを入力していきましょう。まずはレッドストーンブロックの上に5つのコマンドブロックを設置し、以下の表のコマンドをコピペしてください。

「1」に入力するコマンド

**/execute @a\[<装置の中心x>,<装置の中心y>,<装置の中心z>,<装置の半径>\] ~ ~ ~ detect ~ ~-1 ~ minecraft:wool 14 scoreboard teams join Red @p**  
▲**チーム分け装置の範囲内**にある、**赤い羊毛の上**に立っている人を**赤チームに参加**させます。  
[

![装置の中心と半径](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/b/c/bcfa42e5.png)

![装置の中心と半径](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/b/c/bcfa42e5.png "装置の中心と半径")  
**「<装置の中心x>」などの座標は、図のように4つの羊毛が置いてある真ん中の座標を指定してください。**例えばx100,y64,z-500で装置の半径が5ブロックの場合**「@a\[100,64,-500,5\]」**と書きます。「装置の半径」は、実際の半径より大きめの数値を指定してください。参加漏れが生じます。  
**他のチームの羊毛も範囲に入っていますが、羊毛の色を条件にしているので大丈夫です。** 

「2」に入力するコマンド

**/execute @a\[<装置の中心x>,<装置の中心y>,<装置の中心z>,<装置の半径>\] ~ ~ ~ detect ~ ~-1 ~ minecraft:wool 5 scoreboard teams join Green @p**  
「1」と同じ範囲内の、**黄緑の羊毛**に乗っているプレイヤーを**緑チームに参加**させます。

「3」に入力するコマンド

**/execute @a\[<装置の中心x>,<装置の中心y>,<装置の中心z>,<装置の半径>\] ~ ~ ~ detect ~ ~-1 ~ minecraft:wool 4 scoreboard teams join Yellow @p**  
「1」と同じ範囲の、**黄色い羊毛**に乗っているプレイヤーを**黄チームに参加**させます。

「4」に入力するコマンド

**/execute @a\[<装置の中心x>,<装置の中心y>,<装置の中心z>,<装置の半径>\] ~ ~ ~ detect ~ ~-1 ~ minecraft:wool 11 scoreboard teams join Blue @p**  
「1」と同じ範囲の、**青い羊毛**に乗っているプレイヤーを**青チームに参加**させます。

「5」に入力するコマンド

**/execute @a\[<OP参加ゾーンの中心x>,<OP参加ゾーンの中心y>,<OP参加ゾーンの中心z>,<OP参加ゾーンの半径>\] ~ ~ ~ detect ~ ~-1 ~ minecraft:wool 7 scoreboard teams join OP @p**  
[

![OP参加ゾーンの中心と半径](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/7/5/75fffdd4.png)

![OP参加ゾーンの中心と半径](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/7/5/75fffdd4.png "OP参加ゾーンの中心と半径")  
OPチーム、つまり**管理人チームに参加するゾーンは他のチームとは分けていますので、独自に中心と半径を指定します。灰色の羊毛**に乗っているプレイヤーを**OPチームに参加**させます。

[

![チャットログが埋め尽くされるなら](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/1/b/1b196452.png)

![チャットログが埋め尽くされるなら](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/1/b/1b196452.png "チャットログが埋め尽くされるなら")

回路を動かしている時に、チャットログがコマンドブロックのメッセージで埋め尽くされてしまう方は、  
**/gamerule commandBlockOutput false**を実行してください。

## チームの色に応じた帽子を装備させるコマンドの解説

![所属チームに応じた色の帽子を自動で装備](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/a/2/a2fc6d3f.png)

![所属チームに応じた色の帽子を自動で装備](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/a/2/a2fc6d3f.png "所属チームに応じた色の帽子を自動で装備")

チーム分け装置は完成したのですが、このままではTabキーを押したりプレイヤー頭上の名前を見ないと**どのチームに所属しているのか分かりにくい**ですね。それでは、コマンドを使って**チームごとに色付きの帽子、というか革のヘルメットを装備させてみましょう。**

[

![帽子を装備させるコマンド](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/0/e/0e5c05db.png)

![帽子を装備させるコマンド](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://web.archive.org/web/20201201051401/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/0/e/0e5c05db.png "帽子を装備させるコマンド")

先ほどのクロック回路の下側に、**また5つのコマンドブロックを設置**して、それぞれ中身を入力します。

「6」に入力するコマンド

**/replaceitem entity @a\[team=Red\] slot.armor.head minecraft:leather\_helmet 1 0 {display:{Name:"赤チーム",color:16711680}}**  
▲replaceitemコマンドを使って、**プレイヤーの装備を強制的に変更します。**この場合は赤チームのプレイヤーに、**赤く染まった革のヘルメットを装備させています。**

「7」に入力するコマンド

**/replaceitem entity @a\[team=Green\] slot.armor.head minecraft:leather\_helmet 1 0 {display:{Name:"緑チーム",color:47635}}**  
▲replaceitemコマンドを使って、プレイヤーの装備を強制的に変更します。この場合は緑チームのプレイヤーに、緑色の革のヘルメットを装備させています。

「8」に入力するコマンド

**/replaceitem entity @a\[team=Yellow\] slot.armor.head minecraft:leather\_helmet 1 0 {display:{Name:"黄チーム",color:16776960}}**  
▲replaceitemコマンドを使って、プレイヤーの装備を強制的に変更します。この場合は黄色チームのプレイヤーに、黄色く染まった革のヘルメットを装備させています。

「9」に入力するコマンド

**/replaceitem entity @a\[team=Blue\] slot.armor.head minecraft:leather\_helmet 1 0 {display:{Name:"青チーム",color:255}}**  
▲replaceitemコマンドを使って、プレイヤーの装備を強制的に変更します。この場合は青チームのプレイヤーに、青く染まった革のヘルメットを装備させています。

「10」に入力するコマンド

**/replaceitem entity @a\[team=OP\] slot.armor.head minecraft:leather\_helmet 1 0 {display:{Name:"OPチーム",color:10263708}}**  
▲replaceitemコマンドを使って、プレイヤーの装備を強制的に変更します。この場合はOPチームのプレイヤーに、灰色の革のヘルメットを装備させています。

![色付きの帽子](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/b/e/bee0b85f.png)

![色付きの帽子](data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 224'%3E%3C/svg%3E)

**replaceitemコマンドを使えば、プレイヤーやMobの装備を自由に変更できます**。今回は、それぞれのチームに合った5色(画像はOPの帽子を撮影するの忘れてました)の革のヘルメットを装備させました。

色付きの防具の入手コマンドを調べられるサイト「Minecraft armor crafting」

[

![色付き防具のコマンドを調べられるサイト](https://web.archive.org/web/20201201051401im_/https://www.napoan.com/www.napoan.com/wp-content/uploads/imgs/4/a/4abffc85.jpg)

![色付き防具のコマンドを調べられるサイト](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)  
http://minecraft.tools/en/armor.php](https://web.archive.orghttps://web.archive.org/web/20201201051401/http://minecraft.tools/en/armor.php "色付き防具のコマンドを調べられるサイト")

色付きヘルメットを入手するコマンドは、  
**/give @p minecraft:leather\_helmet 1 0 {display:{Name:"名前","color":色コード}}**  
です。**上記サイトでは、様々な色の革の防具を入手するためのコマンドが調べられます。**
