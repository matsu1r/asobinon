---
title: コピー/貼り付け時の便利なテクニック
---

![テクニックを解説していきます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092444.jpg)

ここからが私が一番解説したかった部分です。**建物をめり込ませたり、なんとエンティティをコピーしたり、ブロック量を調節して廃墟のようにする**などの秘伝技を紹介していきます。

## 空気以外だけをコピーしてめり込ませるには。「ストラクチャーヴォイド」の使い方

![空気まで貼り付けされてしまう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102003.png)

木などの凹凸のある物体を保存して貼付けすると、**余計な空気まで設置されて周囲のブロックが消えてしまった…** MCEditなら「空気を貼り付けするか否か」のチェックボックスがありますが、**ストラクチャーブロックで余計な空気をコピーしない(=貼付け時にめり込ませる)にはどうすればいいのでしょうか。**

![Show invisible blocksをON](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105931.png)

セーブモードで地形を保存する前に、**Show invisible blocks(見えないブロックを表示)というボタンがありますのでON**にしてエンターキーを叩きましょう。

![保存しない範囲を指定しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092006.png)

すると選択範囲内に怪しげな青いキューブがズラリ! これは**「保存する空気」を示している**んです。**これから「保存しない範囲」に置き換えていきます**。

![新アイテム「ストラクチャーヴォイド」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111141.png)

そこで登場するのが新アイテム「ストラクチャーヴォイド」。これもコマンドを使って入手するアイテムです。

ストラクチャーヴォイドを入手するコマンド

**/give @p minecraft:structure\_void**

![ヴォイドを設置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122927.png)

ストラクチャーヴォイドを手に持ち、**貼り付け時に残してほしくない空気の部分に設置していきます。**つまり**青いキューブを赤いキューブに置き換える**んです。当たり判定がないので設置にはコツが要ります。

手作業でストラクチャーヴォイドを設置するのが大変な場合は、**fillコマンドで空気をストラクチャーヴォイドに置き換えれば楽**です!

空気をストラクチャーヴォイドに一括置換するコマンド

![fillコマンドの範囲指定について](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104959.png)  
**/fill 範囲の北西の下の角x y z 南東の上の角 x y z minecraft:structure\_void 0 replace minecraft:air**  
▲例: /fill 150 64 -200 160 72 -190 minecraft:structure\_void 0 replace minecraft:air

![ヴォイドを設置完了したらセーブ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123344.png)

保持させたくない空気の場所全てにストラクチャーヴォイドを設置できたら、SAVEしましょう。

![めり込んだ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091325.png)

そしてストラクチャーヴォイドを使ったストラクチャーを設置すれば、**空気が保持されない = めり込みます。**

![あえて青い部分を残す場合も](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101610.png)

そうそう、空気全てを赤いキューブ(=ヴォイド)に置き換えないといけないわけではありません。例えばトンネルを作る時など、**空気として残しておきたい部分は青いキューブのままにしておく必要があります。**

## エンティティも含めてセーブ/ロードするには。ダンジョン作成に便利!

![エンティティもコピーするには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102027.png)

ストラクチャーブロックの機能の中で個人的に最もありがたいのが「エンティティのコピー」機能です。エンティティをコピーできるということは

-   ゾンビやクリーパーやスケルトンなどの**敵Mob**
-   村人やウシやブタなどの**動物Mob**
-   アイアンゴーレムやスノーゴーレム
-   **トロッコやボート**や防具立て
-   **落ちたアイテム**や矢など…

そう、マイクラの世界の**あらゆる物体のほとんどがコピーできる**ということです! なんて革命的。

![Include Entities](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104711.png)

エンティティをコピーする手順はとっても簡単。セーブモードで**エンティティが範囲に含まれる建物を保存する際に、Include entitiesをONにします。そしてSAVE。**

![ロード時にもInclude entities](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111355.png)

そしてそのストラクチャーをロードモードで読み込む際にも、Include entitiesをONにしてLOADします。**セーブ時とロード時にどちらもONにしていないとエンティティはコピーできません。**

![UUIDは生成し直される](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122259.png)

ちなみに、エンティティをストラクチャー内に保存した際、**村人の取引や各種Mobの装備品などのNBTタグは保持されます**が、**UUIDはロード時に新しく生成される**のでご注意。

## ロード時にブロックの量を調節して廃墟のようにしてみよう

![ストラクチャーの整合性とそのシード値](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091002.png)

最後にご紹介する機能は**「Structure Integrity and Seed (ストラクチャーの整合性とそのシード値)」**です。**ロードモードで読み込み時にこの数値を指定すると▲のように廃墟っぽくなります。**

![Structure Integrity and Seed](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092009.png)

左側: **ブロックを設置する量**を、0.0~1.0までの間の数値で指定します。

右側: ブロックを設置するパターンの”シード値”を決めます。**適当な数字を入れればブロックの出現の仕方が変わります。**

:::info

では「ステップ6」へ行きましょう。「次へ」をタップしてください。

:::
