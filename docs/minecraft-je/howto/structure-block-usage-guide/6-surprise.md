---
title: あらかじめ設置せずに、好きな座標/エンティティの場所に建物を出現させるには
---

ストラクチャーブロックで保存した地形や建物って、設置する際にロードモードのストラクチャーブロックを設置する必要がありますよね。しかし、**配布ワールドでロードモードをあらかじめ設置していたのでは景観が崩れますしネタバレにも繋がります。**好きな座標に、いきなりストラクチャーを出現させるには**どうすればいいのでしょうか。

## 「いきなりストラクチャーを出現させる」とはどういうこと?

![空中の橋](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092017.png)

例えば、空中の通路を進んでいくステージがあったとします。

![ロードモードで橋を設置する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092021.png)

ここにロードモードのストラクチャーブロックを使って橋を出現させるとします。

![あらかじめ回路を用意するのも...](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101124.png)

しかし、あらかじめロードモードのストラクチャーブロックと起動用の回路を設置すると場所取りますしダサいですよね。「あそこに何か設置される」というネタバレにもなってしまいます。

![遠く離れた場所から建物を出現させるには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102212.png)

▲の例では通路の下にロードモードを忍ばせれば大丈夫ですが、マジの何もない場所に出現させたい時など、**遠く離れた場所から遠隔でストラクチャーブロックを設置して、出す建物を指定して起動するには**どうしたらいいのでしょうか。

## ストラクチャーを設置するコマンドを解説。NBTデータ付きでSBを設置すればいい

![Wikiのデータタグ一覧を見ましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124035.jpg)

といっても、私が解説せずともコマンドに慣れてる方はもう分かりますよね。**ストラクチャーブロックをデータ付きで設置して赤石を一緒に設置するだけ**なんです。データタグは[Wiki](http://minecraft.gamepedia.com/Structure_Block)に全部載ってます。ありがたや

![コマンドブロック達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122838.png)

それでは、好きな座標にいきなりストラクチャーを出現させるコマンドを解説します。

※建物を設置する座標をx y zとします。

[[dl|「1」]]
|Impulse(インパルス) / Unconditional(無条件) / Needs Redstone(レッドストーン信号が必要)
|```
|/setblock x y z minecraft:structure_block 0 replace {mode:”LOAD”,name:”ストラクチャー名“,posX:1}
|```
|例: `/setblock -827 219 598 minecraft:structure_block 0 replace {mode:”LOAD”,name:”purple-bridge”,posX:1}`
|
|▲ストラクチャー名には、出現させるストラクチャーの名前を入れます。**「posX:1」と書かないとストラクチャーブロックと建物が重なってしまい、後のfillコマンドで建物が欠けてしまいます。**

[[dl|「2」]]
|Chain(チェーン) / Unconditional(無条件) /Always Active(常時実行)
|```
|/setblock x yに1足した数 z minecraft:redstone_block 0 replace
|```
|例: `/setblock -827 220 598 minecraft:redstone_block 0 replace`
|
|y座標を1増やして、「1」で設置する**ストラクチャーブロックの上にレッドストーンブロックを設置**します。

[[dl|「3」]]
|Chain(チェーン) /Unconditional(無条件) /Always Active(常時実行)
|```
|/fill x y z x yに1足した数 z minecraft:air 0 replace
|```
|例: `/fill -827 219 598 -827 220 598 minecraft:air 0 replace`
|
|ストラクチャーブロックと赤石ブロックを**空気で上書きして消します。**

### なぜずらして設置するか

![posX:1を指定するわけ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111958.jpg)

上記コマンドで建物を設置する際、指定した座標より東に1ブロックずれた場所に設置されます。**なぜposX:1と書いてズラしているか**といいますと…

![もしposX:1を指定しなかった場合](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122420.png)

ずらさないと、ストラクチャーブロック(以下SB)内の「Relative Position」が`0,0,0`となってしまい、SBと赤石を、建物が上書きするんです。

それで終わりで良くない? と思うかも知れませんが、建物が「木」だった場合を想像してみてください。SBが残ってしまうので、「3」のfillコマンドで消す必要が出てきます。

ずらさない場合、「建物が上書きするか否か」で処理を分岐しないといけません。どちらにも対応するために、最初からずらして設置しているんです。

![ロード時は北西基準に](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104318.png)

「ストラクチャーをセーブした際のセーブモードの位置によって変える必要があるんじゃない?」と思われるかもしれませんが、**どの位置からストラクチャーをセーブして読み込んでも北西を基準に設置されます**のでご安心下さい。

![ストラクチャーの設置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104600.gif)

装置をゆっくり動かしてGIFにするとこんな感じ。(実際はこの処理が一瞬で行われます) これを応用して、どんな場所にでもストラクチャーが出現する楽しいワールドが作れそうですね!

## エンティティの場所にストラクチャーを出現させるコマンド

![村人を牢屋に閉じ込める](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092026.png)

例えば **「村人の場所に牢屋を出現させる」** など、エンティティの場所にストラクチャーを貼り付けるにはどうすればいいのでしょうか。

![まずは牢屋を用意](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092029.png)

まずは出現させたい建物を用意してセーブしておきましょう。

![村人の場所に牢屋を設置するコマンド達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090629.png)

コマンドブロックの構成は、座標を指定して出現させる時と一緒です。中身のコマンドは違いますが。

[[dl|「1」]]
|Impulse(インパルス) / Unconditional(無条件) / Needs Redstone(レッドストーン信号が必要)**
|```
|/execute @e[type=Villager,r=30] ~-2 ~ ~-1 setblock ~ ~ ~ minecraft:structure_block 0 replace {mode:”LOAD”,name:”ストラクチャー名“,posX:1}
|```
|▲エンティティの種類などは適宜変更して下さい。上記の場合は半径30m以内の村人を閉じ込めます。**executeコマンドを実行する座標自体を動かす**ことで、村人が牢屋にすっぽり収まるようにしています。

[[dl|「2」]]
|Chain(チェーン) / Unconditional(無条件) / Always Active(常時実行)
|```
|/execute @e[type=Villager,r=30] ~-2 ~ ~-1 setblock ~ ~1 ~ minecraft:redstone_block 0 replace
|```
|ストラクチャーブロックの上にレッドストーンブロックを設置。

[[dl|「3」]]
|Chain(チェーン) / Unconditional(無条件) / Always Active(常時実行)**
|```
|/execute @e[type=Villager,r=30] ~-2 ~ ~-1 fill ~ ~ ~ ~ ~1 ~ minecraft:air 0 replace
|```
|最後にストラクチャーブロックと赤石ブロックを消します。

ポイントは、**executeコマンドの実行座標自体をずらす**ことで後の座標の数値を考えやすくしている点ですね。別にsetblockやfillコマンド内の座標をずらしてもいいですが、こちらのほうが考えやすいかと。

それと注意点として、**3つのコマンドのエンティティセレクターは全て同じにする必要があります。**例えば半径に差があれば、近さによって処理が中断されてしまいます。



この「エンティティの場所にストラクチャーを設置」という仕組みが実際に使われているのがこちら。**夜にゾンビの場所にタワーが出現して成長し、それを登っていく…というDragnoz氏の素晴らしい仕掛け**です。

:::success

以上で本チュートリアルは完了です! お疲れ様でした。

:::
