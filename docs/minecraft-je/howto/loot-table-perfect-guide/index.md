---
title: 「Loot Table (ドロップ表)」の使い方 Part1 Mobとチェストへの適用方法
slug: /minecraft-je/howto/loot-table-perfect-guide/
---

![LootTable(ドロップ表)完全ガイド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123329.png)

バージョン1.9では、配布ワールド制作などに便利な**「Loot table」**という新システムが追加されました。「ルートテーブル」と呼ばれるファイルをワールドに同梱して、**ダンジョンの宝箱の中身やMobのドロップアイテムを自分好みに置き換えられるんです。**

全3回に分けて、Loot table(ドロップ表)の使い方からJSONの書き方まで詳細に解説します。[Part2](./part2/)および[Part3](./part3/)も合わせてご覧ください。

## 不思議なsetblockコマンドとsummonコマンドを使ってみよう

皆さん、突然ですが以下のコマンドを実行してみてください。

謎のsetblockコマンド (もちろん1.9以上用)

**/setblock ~ ~1 ~ minecraft:chest 0 replace {LootTable:”minecraft:entities/witch”}**

[![setblockコマンドでチェストを設置してみよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122614.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122614.png)

するとチェストが設置されたはずです。中身を見てみるとあれ、**グロウストーンや火薬?** (中身が無い場合は何度か実行して下さい) これってどこかで見覚えのあるアイテムの組み合わせですよね。そう、**魔女のドロップアイテムです。**一体何故こんな所に勝手に出現したんでしょう。

もう1つコマンドを実行してみましょう。次はsummonコマンドです。

謎のsummonコマンド (もちろん1.9以上用)

**/summon Creeper ~ ~1 ~ {DeathLootTable:”minecraft:chests/nether\_bridge”}**

![クリーパーのドロップアイテムが...](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101542.png)

上記コマンドで召喚されるクリーパーを倒すと、こんな豪華なアイテムがドロップされます。あれ、これもどこかで見覚えが… そう、**ネザー砦(ネザー要塞)のチェストに入ってるアイテム達です。**どうしてクリーパーからそんな宝物が…?

## 1.9で実装された「Loot table(ドロップ表)」とは。仕組みを解説

不思議なsetblockコマンドとsummonコマンド。あの2つは、**バージョン1.9で追加された新システム「Loot table」**を活用したものなんです。一体Loot tableとはどんな機能なんでしょうか。

[![LootTableの仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095851.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095851.png)  
(▲クリックで大きく表示します。)

バージョン1.9から、**各種ダンジョンの宝箱の中身、Mobのドロップアイテム、釣りで出てくるアイテムの種類や確率などのデータ**は、「Loot table」とよばれるファイルに格納されるようになりました。この「Loot table(ドロップ表)」は、**チェストやチェスト付きトロッコなどを設置したり、Mobを召喚したりする際にNBTタグで指定することで呼び出せます。**

さらに各種ルートテーブルはフォルダーで分類されていて、**「minecraft」の中に「chests」「entities」「gameplay」の分類があり、その中にルートテーブルのデータが記述されたjsonファイルが入っている**んです。先程の”不思議なコマンド”では、**「minecraft:entities/witch」と書くことでウィッチ**の、**「minecraft:chests/nether\_bridge」と書くことでネザー要塞のチェストの**データを呼び出していたわけです。

## バニラで用意されているルートテーブル(ドロップ表)一覧



バニラで用意されているLoot table一覧

ドロップ表の種類  
(クリックでWikiのアイテム一覧に飛びます)

呼び出す際の書き方

[廃坑のチェスト](http://minecraft.gamepedia.com/Abandoned_mine_shaft#Loot)

minecraft:chests/abandoned\_mineshaft

[砂漠の寺院(ピラミッド)のチェスト](http://minecraft.gamepedia.com/Desert_temple#Loot)

minecraft:chests/desert\_pyramid

[エンドシティのチェスト](http://minecraft.gamepedia.com/End_city#Loot)

minecraft:chests/end\_city\_treasure

[イグルーの地下のチェスト](http://minecraft.gamepedia.com/Igloo#Loot)

minecraft:chests/igloo\_chest

[ジャングルの寺院のチェスト](http://minecraft.gamepedia.com/Jungle_temple#Loot)

minecraft:chests/jungle\_temple

[ネザー要塞のチェスト](http://minecraft.gamepedia.com/Nether_fortress#Loot)

minecraft:chests/nether\_bridge

[スポーン部屋(ダンジョン)のチェスト](http://minecraft.gamepedia.com/Dungeon#Loot)

minecraft:chests/simple\_dungeon

[ワールド新規作成時の  
ボーナスチェスト](http://minecraft.gamepedia.com/Chest#Bonus_chest)

minecraft:chests/spawn\_bonus\_chest

[要塞の通路のチェスト](http://minecraft.gamepedia.com/Stronghold#Slab_altars)

minecraft:chests/stronghold\_corridor

[要塞の倉庫のチェスト](http://minecraft.gamepedia.com/Stronghold#Store_rooms)

minecraft:chests/stronghold\_crossing

[要塞の図書館のチェスト](http://minecraft.gamepedia.com/Stronghold#Libraries_2)

minecraft:chests/stronghold\_library

[村の鍛冶屋のチェスト](http://minecraft.gamepedia.com/Village#Loot)

minecraft:chests/village\_blacksmith

羊 (羊毛以外のドロップアイテム)

minecraft:entities/sheep

黒の羊 (羊毛以外のアイテムも含む)

minecraft:entities/sheep/black

青の羊 (〃)

minecraft:entities/sheep/blue

茶色の羊 (〃)

minecraft:entities/sheep/brown

シアン色の羊 (〃)

minecraft:entities/sheep/cyan

灰色の羊 (〃)

minecraft:entities/sheep/gray

緑色の羊 (〃)

minecraft:entities/sheep/green

水色の羊 (〃)

minecraft:entities/sheep/light\_blue

ライム色の羊 (〃)

minecraft:entities/sheep/lime

マゼンタ色の羊 (〃)

minecraft:entities/sheep/magenta

オレンジ色の羊 (〃)

minecraft:entities/sheep/orange

ピンク色の羊 (〃)

minecraft:entities/sheep/pink

紫色の羊 (〃)

minecraft:entities/sheep/purple

赤色の羊 (〃)

minecraft:entities/sheep/red

銀色の羊 (〃)

minecraft:entities/sheep/silver

白色の羊 (〃)

minecraft:entities/sheep/white

黄色の羊 (〃)

minecraft:entities/sheep/yellow

コウモリ

minecraft:entities/bat

ブレイズ

minecraft:entities/blaze

洞窟グモ

minecraft:entities/cave\_spider

ニワトリ

minecraft:entities/chicken

クリーパー

minecraft:entities/creeper

エルダーガーディアン

minecraft:entities/elder\_guardian

エンダーマン

minecraft:entities/enderman

エンダーマイト

minecraft:entities/endermite

ガスト

minecraft:entities/ghast

ジャイアント(巨大ゾンビ)

minecraft:entities/giant

ガーディアン

minecraft:entities/guardian

ウマ

minecraft:entities/horse

アイアンゴーレム

minecraft:entities/iron\_golem

マグマキューブ

minecraft:entities/magma\_cube

ムーシュルーム(キノコ牛)

minecraft:entities/mushroom\_cow

ヤマネコ(オセロット)

minecraft:entities/ocelot

ブタ

minecraft:entities/pig

ウサギ

minecraft:entities/rabbit

シュルカー

minecraft:entities/shulker

シルバーフィッシュ

minecraft:entities/silverfish

スケルトン

minecraft:entities/skeleton

スケルトン馬

minecraft:entities/skeleton\_horse

スライム

minecraft:entities/slime

スノーゴーレム

minecraft:entities/snowman

クモ

minecraft:entities/spider

イカ

minecraft:entities/squid

ウィッチ(魔女)

minecraft:entities/witch

オオカミ

minecraft:entities/wolf

ゾンビ

minecraft:entities/zombie

ゾンビ馬

minecraft:entities/zombie\_horse

ゾンビピッグマン

minecraft:entities/zombie\_pigman

釣れるアイテム全体

minecraft:gameplay/fishing

釣れる魚

minecraft:gameplay/fishing/fish

釣れるゴミ

minecraft:gameplay/fishing/junk

釣れるお宝

minecraft:gameplay/fishing/treasure

空っぽ

minecraft:empty

## チェストなどの中身、MobのドロップアイテムとしてLoot tableを呼び出すコマンド

### チェスト、ホッパー、トロッコなどにLoot tableを設定するコマンド

[![チェストやトロッコ類にloottableを設定するコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104633.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104633.png)

新しく設置する場合

チェスト/トラップチェスト/ホッパーの場合:  
**/setblock ~ ~1 ~ ブロックID 0 replace {LootTable:”minecraft:フォルダ/ファイル名”}**  
▲「ブロックID」には**minecraft:chest か minecraft:trapped\_chest か minecraft:hopper、さらに1.9.1以降はminecraft:dispenser か minecraft:dropper**が入ります

チェスト付きトロッコ/ホッパー付きトロッコの場合:  
**/summon エンティティID ~ ~ ~ {LootTable:”minecraft:フォルダ名/ファイル名”}**  
▲「エンティティID」には **MinecartChest か MinecartHopper** が入ります

既に設置してあるブロックやトロッコに設定する場合

チェスト/トラップチェスト/ホッパーの場合:  
**/blockdata ~ ~1 ~ {LootTable:”minecraft:フォルダ/ファイル名”}**  
▲「ブロックID」には**minecraft:chest か minecraft:trapped\_chest か minecraft:hopper、さらに1.9.1以降はminecraft:dispenser か minecraft:dropper**が入ります

チェスト付きトロッコ/ホッパー付きトロッコの場合:  
**/entitydata @e\[type=エンティティID,c=1\] {LootTable:”minecraft:フォルダ名/ファイル名”}**  
▲「エンティティID」には **MinecartChest か MinecartHopper** が入ります  
上記コマンドでは「c=1」なので最寄りの1個のトロッコのみが対象になります

こちらがチェストやホッパー、トロッコ達にLoot tableを設定した状態で召喚する/後から設定するコマンドです。**トロッコはチェストやホッパーと違ってエンティティなのでコマンドの書き方が違います。**

例: 釣りで釣れるゴミが入ったホッパーを設置

**/setblock ~ ~1 ~ minecraft:hopper 0 replace {LootTable:”minecraft:gameplay/fishing/junk”}**

[![設置しただけでは中身は入っていない](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101039.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101039.png)

チェスト等にルートテーブルを設定した際の注意点として、「設置/設定しただけでは中身は決定されない」点があります。**/blockdata ~ ~-1 ~ {:}**で調査しても中身は分かりません。**初めて開いて中身を見た時や、コンパレーターを隣に設置した際に中身が決定されます。**つまり、設置/設定時に「運」効果がなくても、初めて開く時に「運」を持っていれば豪華な中身になるわけです。

### MobのドロップアイテムとしてLoot tableを設定するコマンド

[![MobにLootTableを設定するコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111022.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111022.png)

新しく召喚する場合

**/summon エンティティID ~ ~1 ~ {DeathLootTable:”minecraft:フォルダ/ファイル名”}**  
▲「エンティティID」は[こちらのページ](http://minecraft.gamepedia.com/Data_values/Entity_IDs)を参照して入力して下さい

既に召喚してあるMobに設定する場合

**/entitydata @e\[type=エンティティID,c=1\] {DeathLootTable:”minecraft:フォルダ名/ファイル名”}**  
▲「エンティティID」は[こちらのページ](http://minecraft.gamepedia.com/Data_values/Entity_IDs)を参照して入力して下さい  
上記コマンドでは「c=1」なので最寄りの1体のMobのみが対象になります

MobのドロップアイテムとしてLoot tableを設定する際は、**「DeathLootTable」タグ**を使います。

例: ボーナスチェストのアイテムを落とすゾンビを召喚

**/summon Zombie ~ ~1 ~ {DeathLootTable:”minecraft:chests/spawn\_bonus\_chest”}**

## セーブデータにLoot tableを同梱して、バニラのものを置き換えたり追加したりできる

[![既存のルートテーブルを置き換えよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110811.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110811.jpg)

そしてこの「Loot table」は、セーブデータの中に同梱することもできるんです。ワールドのフォルダの「data」内に「loot\_tables」というフォルダを作成し、そこに後述する書き方でJSONファイルを書いて設置すれば、**そのワールドの各種宝箱やドロップアイテム、釣りのアイテムが思い通りに!** 面白いシステムでしょ。**自分でルートテーブル(ドロップ表)を作成する方法Part2で解説します。**

[Part2では、loot tableを作成する手順と各種設定項目を解説します。 >>](./part2/)
