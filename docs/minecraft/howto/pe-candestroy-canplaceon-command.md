---
title: アドベンチャーモードで壊せる/置けるブロックを指定したアイテムを入手する方法
---

![PEcandestroyとcanplaceon](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123802.png)

マイクラPE1.1で追加された「アドベンチャーモード」。ブロックを自由に破壊したり設置したりできないモードです。そんなアドベンチャーモードでブロックを壊したり置いたりするには、**コマンドを使って「壊せるブロック」「置けるブロック」を設定したアイテムを入手する必要がある**んです。この記事では、NBTタグ…ではなく「コンポーネント」の**「can\_destroy」「can\_place\_on」を設定したアイテムの入手方法**を解説します。

## アップデート「1.1」の内容まとめはこちら

PEバージョン1.1のアップデート内容まとめ記事

[![PE11アップデート内容まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122355.png)  
https://www.napoan.com/pe-update-11/](https://www.napoan.com/pe-update-11/)

いつもの。読んでね

**【2019年8月30日追記】ダブルクオーテーションとシングルクォーテーションは必ず「半角」で入力してください。「”」「’」は全角なので使えません。「”」「’」を使ってください。**

## 「壊せるブロック」「置けるブロック」を設定したアイテムとは? 仕組みを解説

![このままじゃ何もできない](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124150.png)

/gamemode 2でアドベンチャーモードに切り替えましょう。すると持っている道具やブロックが一切使えなくなります。何故かと言うと**「壊せるブロック」や「置けるブロック」の設定をしていないから**です。

![can_destroyの仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113052.png)

ということで、道具にcan\_destroyという**「コンポーネント」**を設定すればいいんです。NBTタグじゃないので書き方がPC版とちょっと違いますよ。**設定すれば指定したブロックを壊せるようになります。**

![can_place_onの仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113057.png)

ブロックにcan\_place\_onというコンポーネントを設定すれば、今度は 「置けるブロック」を設定できます。**指定したブロックに隣接する状態でならブロックを設置できます。**

## 壊せるブロック(can\_destroy)を設定したアイテムを入手するコマンドを解説

それでは早速「壊せるブロック」を設定した木のシャベルを入手してみましょう。

土と草ブロックと砂と砂利だけ壊せる木のシャベルを入手するコマンド

**/give @p wooden\_shovel 1 0 {“can\_destroy”:{“blocks”:\[“dirt”,”grass”,”sand”,”gravel”\]}}**

こちらのコマンドはgiveコマンドですのでインベントリの空きスロットにアイテムが出ます。

土と草ブロックと砂と砂利だけ壊せる木のシャベルをホットバーの左端にセットするコマンド

![replaceitemコマンドの結果](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122405.png)  
**/replaceitem entity @p slot.hotbar 0 wooden\_shovel 1 0 {“can\_destroy”:{“blocks”:\[“dirt”,”grass”,”sand”,”gravel”\]}}**  
**もし「指定したスロットにアイテムを置きたい！」場合はこちらを使って下さい。****ホットバー(手持ちバー)の左端のアイテムが強制的に置き換わります。**。

![replaceitemコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113101.png)

使う場面は少ないですが、一応replaceitemコマンドの書き方を説明しておきます。replaceitemコマンドはチェストなどのブロックに対しても使えるのですが、今回はプレイヤーにアイテムを与える(置き換える)のでentityモードにして、@pなどと書いてターゲットを指定しましょう。次にスロットの指定ですが、ここではslot.hotbar 0と書くことで**「ホットバーの左端」**を指定しています。後はgiveコマンドと同じようにID 数 データ値の順で書きましょう。

![slot.hotbar](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121922.png)

slot.hotbarでホットバーのスロットを指定する場合の番号はこんな感じ。**左端は1ではなく0なので注意**しましょう。

![slot.inventory](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122531.png)

slot.inventoryにすればインベントリにアイテムを配置することもできます。**インベントリ画面の上一段はホットバー**なので注意。

![can_destroyの書き方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113105.png)

最後にcan\_destroyコンポーネントの書き方をマスターしましょう。{“can\_destroy”:{“blocks”:\[“ID”,”ID”,…\]}}という風に、四角カッコの中にIDを並べて書きます。もちろん単体で指定することもできます。

## 置けるブロック(can\_destroy)を設定したアイテムを入手するコマンドを解説

土と草ブロックと砂と砂利にだけ置けるオークの木材を入手するコマンド

**/give @p planks 1 0 {“can\_place\_on”:{“blocks”:\[“dirt”,”grass”,”sand”,”gravel”\]}}**

土と草ブロックと砂と砂利にだけ置けるオークの木材をホットバーの左端にセットするコマンド

![木材](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105239.png)  
**/replaceitem entity @p slot.hotbar 0 planks 1 0 {“can\_place\_on”:{“blocks”:\[“dirt”,”grass”,”sand”,”gravel”\]}}**  
**もし「指定したスロットにアイテムを置きたい！」場合はこちらを使って下さい。**

先程のコマンドのcan\_destroyがcan\_place\_onに変わっただけです。

![can_place_onの書き方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113110.png)

can\_place\_onの設定の書き方。2つのアンダーバーを忘れないように注意。
