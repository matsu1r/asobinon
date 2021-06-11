
---
title: バージョン1.9のコマンドに関する新機能と変更点まとめ (+配布ワールド制作も)
description: PC版のバージョン1.9、「The Combat Update」がついに配信されましたね。その名の通り戦闘に関する新要素と変更点が盛り沢山なアップデートですが、それに匹敵するほどコマンドや配布ワールド制作に関する新機能/変更点が盛りだくさんなんです。例えばAreaEffectCloud、タグ機能、Loot table、エンドゲートウェイ、新ステータス効果、MobのNBTタグの仕様変更など… この記事では、公式Wikiの情報をもとに配布ワールドの製作者さんには特に知って頂きたい、1.9のサバイバル”以外の主な”新機能や変更点をまとめました。
---

![1.9のコマンド関連まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122409.png)

PC版の**バージョン1.9、「The Combat Update」がついに配信されましたね。**その名の通り戦闘に関する新要素と変更点が盛り沢山なアップデートですが、それに匹敵するほど**コマンドや配布ワールド制作に関する新機能/変更点が盛りだくさんなんです。**例えばAreaEffectCloud、タグ機能、Loot table、エンドゲートウェイ、新ステータス効果、MobのNBTタグの仕様変更など… この記事では、[公式Wiki](http://minecraft.gamepedia.com/1.9)の情報をもとに**配布ワールドの製作者さんには特に知って頂きたい、1.9のサバイバル”以外の”主な新機能や変更点をまとめました。**

\[2016年3月13日追記\] JSONの記法が厳しくなったことについて追記。

## コマンドブロックが新しくなり、クロック回路やコンパレーターが不要に

![1.9のコマンドブロックの3つのモード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091045.png)

バージョン1.9のコマンド関連の新要素と言えば、まず思い浮かぶのはこのコマンドブロックの3つのモードでしょう。**オレンジ色のインパルスモード**、**水色のチェーンモード**、**紫色のリピートモード**が用意されたことによって何が変わるのでしょうか。

![1.9からのコマンドを常時実行する装置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101103.png)

そう、このコマンドブロック達によって**fillクロックが不要になるんです。**まず左に**リピートモード**(Needs Redstone(レッドストーン動力が必要))****のコマンドブロックを置いて、ON/OFF可能にします。それに繋がるように**チェーンモードのコマンドブロック**(Always Active(常時実行))****を並べていけば、ON/OFF可能なコマンド常時実行装置のできあがりです。向きをちゃんと合わせる必要があるので注意。

![Conditional(条件付き)モードの使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208192900.png)

そして**Unconditional(無条件)**と**Conditional(条件付き)**モードを正しく使えば、コンパレーターも不要になります。

![Conditional(条件付き)モードの使い方2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122555.png)

**Conditional(条件付き)**状態のコマンドブロックは、**接続元のコマンドの実行が成功したら実行されます。**例えばコマンドブロックに**/testfor @a\[r=3\]**と入力して、隣に**Conditional(条件付き)**の**/say Oh!**と書いたコマンドブロックを設置すれば、これまでコンパレーターで行っていたことがコマンドブロックだけで可能になるんです。ちなみに**Conditional(条件付き)**の**さらに先のコマンドブロックは、条件が合っていなくても実行されます**のでご注意下さい。

## Mobやプレイヤーの当たり判定を無効化する方法

![バージョン1.9では貫通せず押してしまう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122051.png)

バージョン1.9の大きな変更点の一つに、**「Mobやプレイヤーが衝突した際に貫通しなくなった」**点があります。例えばゾンビに道を塞がれたりすると、なかなか突破できなくなるんです。既存のアドベンチャーマップの難易度が大きく変わったりしそうで心配。

Mobやプレイヤーの当たり判定を無効化する方法の解説

[![エンティティの当たり判定を設定するコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100423.png)  
https://www.napoan.com/collision-setting-command/](https://www.napoan.com/collision-setting-command/)

いきなり記事の宣伝で申し訳ないのですが、**エンティティの当たり判定を無効化する方法(collisionRuleオプションについて)は別記事に詳しくまとめております**ので気になる方はチェックしてみてください。

## Mobの騎乗/HP/装備品を設定する際の書き方が変わり、従来のコマンドは使えなくなった

![1.8までのコマンドを1.9で使うと](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121816.png)

1.9の変更点ではこれが最も重大かも知れません。**なんとRiding、HealF、Equipmentタグが廃止されました。**つまり**Mobを重ねたり、HPや装備品を設定したりしている従来のコマンドは1.9で使えなくなった**んです。

### HealFやRiding、Equipmentタグに置き換わる新しいNBTタグとは

バージョン1.9で置き換わったエンティティに関するNBTタグ

バージョン1.8まで

バージョン1.9

Riding

Passengers

下に重なるエンティティを指定します。

**上に乗るエンティティを指定**します。四角カッコ内に複数のエンティティを書くことで、同じ階層に複数のエンティティを置くこともできます。  
例:Passengers:\[{id:”Creeper”},{id:”Skeleton”}\]

HealF

Health

HPを指定します。  
例:HealF:100

HPを指定します。  
例:Health:100.0f

▲Attributes:\[{Name:generic.maxHealth,Base:○○}\]で最大HPを増やす必要がある場合もあるので注意

Equipment

HandItems

**右手と左手に持つアイテムだけを指定**します。  
例:HandItems:\[{[id:diamond\_sword](http://blog.hatena.ne.jp/diamond_sword/)},{[id:shield](http://blog.hatena.ne.jp/shield/)}\]

手に持つアイテム+防具を指定します。  
例:Equipment:\[{[id:diamond\_sword](http://blog.hatena.ne.jp/diamond_sword/)},{[id:diamond\_boots](http://blog.hatena.ne.jp/diamond_boots/)},{[id:diamond\_leggings](http://blog.hatena.ne.jp/diamond_leggings/)},{[id:diamond\_chestplate](http://blog.hatena.ne.jp/diamond_chestplate/)},{[id:diamond\_helmet](http://blog.hatena.ne.jp/diamond_helmet/)}\]

ArmorItems

**体に付ける装備品だけを指定**します。  
例:ArmorItems:\[{[id:diamond\_boots](http://blog.hatena.ne.jp/diamond_boots/)},{[id:diamond\_leggings](http://blog.hatena.ne.jp/diamond_leggings/)},{[id:diamond\_chestplate](http://blog.hatena.ne.jp/diamond_chestplate/)},{[id:diamond\_helmet](http://blog.hatena.ne.jp/diamond_helmet/)}\]

DropChances

HandDropChances

**右手と左手に持つアイテムの**ドロップ確率を指定します。  
例:HandDropChances:\[0.2F,0.8F\]

手に持つアイテムと体に付ける装備品のドロップ確率をこのタグ1つで指定します。  
例:DropChances:\[0.2F,0.6F,0.5F,0.4F,0.3F\]

ArmorDropChances

**体に付ける装備品の**ドロップ確率を指定します。  
例:ArmorDropChances:\[0.6F,0.5F,0.4F,0.3F\]

![Passengersタグを上手に使おう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090815.png)

特にRidingの代わりに登場した**Passengers**タグには注目ですね。Passengers:\[{id:”Cow”},{id:”Pig”}\]とすれば**ウシとブタを同じ階層に配置**できます。さらに、/summon Zombie ~ ~ ~ {**Passengers**:\[{id:”Creeper”,**Passengers**:\[{id:”Skeleton”}\]}\]}と重ねて書けば何層も重ねられます。

![EquipmentタグとDropChancesタグが分離した](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111339.png)

それともう一つ、**従来のEquipmentとDropChancesタグが1.9では手と体に分離しました。**手に持つアイテムはHandItems、体に付ける装備品はArmorItems、手に持つアイテムのドロップ確率はHandDropChances、体に付ける装備品のドロップ確率はArmorDropChancesタグに書きます。

バージョン1.9のMobのNBTタグの仕様変更に伴うコマンドの変化

1.8まで  
**/summon Zombie ~ ~1 ~ {Equipment:\[{[id:diamond\_sword](http://blog.hatena.ne.jp/diamond_sword/)},{},{[id:diamond\_leggings](http://blog.hatena.ne.jp/diamond_leggings/)},{},{[id:diamond\_helmet](http://blog.hatena.ne.jp/diamond_helmet/)}\],DropChances:\[0.7F,0.085F,0.5F,0.085F,0.3F\]}**

1.9から  
**/summon Zombie ~ ~1 ~ {ArmorItems:\[{},{[id:diamond\_leggings](http://blog.hatena.ne.jp/diamond_leggings/)},{},{[id:diamond\_helmet](http://blog.hatena.ne.jp/diamond_helmet/)}\],HandItems:\[{[id:diamond\_sword](http://blog.hatena.ne.jp/diamond_sword/)},{}\],ArmorDropChances:\[0.085F,0.5F,0.085F,0.3F\],HandDropChances:\[0.7F,0.085F\]}**

▲要するに同じ装備内容でもコマンドが長くなってしまったわけです。手書きするのが面倒な方は[MCStacker](http://mcstacker.bimbimma.com/)などの**コマンド生成ツールで作成することをおすすめします。**

### 1.8仕様のsummonコマンドを1.9仕様に変換できるツールの紹介

1.8のsummonコマンドを1.9仕様に変換するツールの紹介記事

[![Summonコマンドを変換するツールの紹介](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095729.png)  
https://www.napoan.com/summon-command-converter/](https://www.napoan.com/summon-command-converter/)

従来の形式で書かれたsummonコマンドを、**1.9仕様の形式に一瞬で変換してくれる**ツールもあります。気になる方は是非上記記事をチェックしてみてください。

## 新機能「Loot table(ドロップ表)」でチェストの中身やMobのドロップアイテムを設定可能に

![LootTableの仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102833.png)

見づらい図ですが、これが1.9の大きな新機能「Loot table(ドロップ表)」です。**自然生成されるチェストの中身やMobのドロップアイテム、釣れるアイテムのデータが「Loot table」と呼ばれるjsonファイルに格納されていて**、自由に呼び出して使えるんです。

Loot tableを呼び出して使うコマンドの例

チェストの場合:  
**/setblock ~ ~1 ~ minecraft:chest 0 replace {LootTable:”Loottableの場所と名前”}**

エンティティ(例えばクリーパー)の場合:  
**/summon Creeper ~ ~1 ~ {DeathLootTable:”Loottableの場所と名前”}**

チェスト/ホッパー/チェスト付きトロッコ/ホッパー付きトロッコの場合は**LootTable**タグ、エンティティの場合は**DeathLootTable**タグを使って指定します。

Loot table(ドロップ表)の呼び出し方/JSONの書き方完全ガイド

[![LootTable(ドロップ表)完全ガイド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123329.png)  
https://www.napoan.com/loot-table-perfect-guide/](https://www.napoan.com/loot-table-perfect-guide/)

ここで解説すると非常に長くなりますので、**各種ルートテーブルの呼び出し方、さらに自作する場合のJSONの書き方と各種設定項目を徹底解説**した上記記事を是非お読み下さい。**多分コマンド解説カテゴリでこのブログ最長の記事**です。

## プレイヤーやMobに「タグ」を付けて分類できるようになった

[![新機能「Tag」の概要](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208175551.jpg)](#f/4/f4297250.jpg "新機能「Tag」の概要")

こちらは新システム「Tag」の概要図です。これまでプレイヤーやMobなどを分類するには、チームやスコアボードの値を使っていましたが、**1.9からは「タグ」を付けて分類できるように**なりました。

新システム「tag」に関するコマンド一覧

タグを付与するには

**/scoreboard players tag <ターゲット> add _<タグ名>_ (条件となるデータタグ)**

タグを削除するには

**/scoreboard players tag <ターゲット> remove _タグ名_ (データタグ)**

タグの一覧を取得するには

**/scoreboard players tag <ターゲット(@eなど)> list**

新システム「tag」の使い方の解説記事

[![Tag機能の使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153050.png)  
https://www.napoan.com/howtouse-tag-system/](https://www.napoan.com/howtouse-tag-system/)

**最初からタグをつけた状態でエンティティを召喚したり、複数のタグを条件にコマンドを実行したりする方法**につきましては上記記事で詳しく解説しています。タグ機能をマスターしたい方は是非お読み下さい。

## エンティティを好きな場所にテレポートできる「エンドゲートウェイ」が登場

![これがエンドゲートウェイだ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123435.png)

エンダードラゴンを倒した後に出現する「エンドゲートウェイ」。本来はエンド内の島から島へとワープするための装置ですが、**真ん中の黒い部分をコマンドで我が物にできるんです。**

![Mobもテレポートできます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122817.png)

このエンドゲートウェイ、**/setblock ~ ~1 ~ minecraft:end\_gateway 0 replace {ExactTeleport:1,ExitPortal:{X:X座標,Y:Y座標,Z:Z座標}}**という風にテレポート先の座標を指定して設置すれば、**様々なエンティティを指定した場所に瞬時にテレポート**させることができます。

エンドゲートウェイの使い方解説記事

[![エンドゲートウェイのコマンド解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092210.png)  
https://www.napoan.com/end-gateway-command-guide/](https://www.napoan.com/end-gateway-command-guide/)

**例えばオリジナルのポータルを作るだとか**、さらなるエンドゲートウェイの使い方については上記記事で解説しています。

## ポーション効果を範囲的に与えられる「AreaEffectCloud」が登場

![ダンジョン系ワールドでの使用例1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091530.png)

新アイテム「残留ポーション」の正体である「AreaEffectCloud」という新エンティティ。**効果やパーティクル、大きさなどを自由にカスタマイズ**できるんです。いかにも配布ワールド作成にピッタリって感じでしょ?

AreaEffectCloudの解説記事

[![AreaEffectCloudのコマンド解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104332.png)  
https://www.napoan.com/area-effect-cloud-command/](https://www.napoan.com/area-effect-cloud-command/)

例えば**触れると一定間隔でダメージを受けるだとか、回数制限付きで回復するだとか**色々な設定をする手順の解説を別記事にまとめました。ご興味のある方は是非お読み下さい。

## スポーンエッグからスポーンするエンティティを自由にカスタマイズできるように

![オリジナルのスポーンエッグを作ってみよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102252.png)

スポーンエッグから出てくるMobを自由にカスタマイズできたら… そんなあなたの夢が1.9で叶いました。バージョン1.9から、やっと**スポーンエッグの中身を自由に設定可能になった**んです。簡単な作り方を解説します。

高機能コマンド生成ツール MCStacker

[http://mcstacker.bimbimma.com/](http://mcstacker.bimbimma.com/)

![MCstackerでsummonコマンドを作成しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090221.jpg)

上記リンクからMCStackerにアクセスしたら、まずは**スポーンエッグで召喚したいMobの、summonコマンドを作成しましょう。**主な設定項目の解説は[こちらの表](https://www.napoan.com/mobspawner-command-customize/#summon)にまとめています。生成されたsummonコマンドをコピーしておきましょう。

![summonコマンドを入力してスポーンエッグのコマンドを作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090922.jpg)

次にgiveコマンドモードに切り替えて、アイテム欄にspawn\_eggと入力すればスポーンエッグの設定画面が出てきます。ちなみに「Spawn Egg Creeper」とか書かれていますが、**ここに書かれているMobの種類は一切関係ありません**のでご注意。**Entity Tag(1.9)**の欄に**先程作ったsummonコマンドを貼り付ければスポーンエッグのgiveコマンドが生成されます。**

![giveコマンドは長いのでコマンドブロックで使おう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091459.png)

できあがったgiveコマンドは長いので、コマンドブロックにCtrl+Vで貼り付けて使いましょう。

## tellrawやtitleコマンドなどで使うJSONの記法が厳格化された

\[2016年3月13日\] 地味に重大な変更点なのですが書き忘れてました。実は**tellrawコマンドやtitleコマンドなどで使うJSONの記法が厳しくなり、各設定項目も引用符で囲まないといけなくなりました。**今までがガバガバだったのでやっと普通のJSONのルールになった、ということです。(コマンドは相変わらず簡易的なJSONです)

バージョン1.9からのJSONの書き方

バージョン1.8まで:  
**/tellraw @a \[“”,{text:”これが”},{text:”装飾”,bold:”true”,color:”aqua”},{text:”した”,bold:”true”},{text:”テキスト”,color:”red”},{text:”です”}\]**

バージョン1.9から:  
**/tellraw @a \[“”,{“text”:”これが”},{“text”:”装飾”,”bold”:”true”,”color”:”aqua”},{“text”:”した”,”bold”:”true”},{“text”:”テキスト”,”color”:”red”},{“text”:”です”}\]**

手書きするのが余計面倒になったので、私はツールに頼ることをおすすめします。tellrawコマンドなら[こちら](https://www.napoan.com/tellraw-command-generator/)、看板の文章を装飾するなら[こちら](https://www.napoan.com/sign-command-generator/)、titleコマンドなら[こちら](http://minecraft.tools/en/title.php)のツールをお使い下さい。

[ポーションやplaysoundコマンドの仕様変更、新しいパーティクル… まだまだ盛り沢山です >>](2/)

## ポーションを入手するコマンドが変わりました

![従来のポーション入手コマンドを使うと](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150437.png)

バージョン1.9でポーションを入手するコマンドが変わったことはご存じですか。**これまでデータ値で指定していたポーションの種類が、Potion:”ポーションID”というNBTタグで指定する仕様に変わりました。**

新しいポーションの入手コマンドの解説記事

[![ポーション入手コマンドが変わった](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152855.png)  
https://www.napoan.com/custom-potion-command/](https://www.napoan.com/custom-potion-command/)

ポーションのコマンドの**新仕様については上記記事に詳しくまとめています**ので、気になる方はチェックしてみてください。

## scoreboardコマンドで取得できる新しい統計項目まとめ(空腹度など)

![scoreboardの値として取得できる項目が色々増えた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090915.png)

scoreboardコマンドを使えば、キル数やデス数、HPを取得できることは皆さんご存知ですよね。バージョン1.9では、**作成できるオブジェクトの種類が増えてよりいろいろな項目を数値化出来るようになりました。**

スコアボードのオブジェクトを作成するコマンド

**/scoreboard objectives add <スコア名> <種類> _(表示名)_**

バージョン1.9で追加された、スコアボードのオブジェクトの種類

xp

プレイヤーが**取得した経験値の量**の正確な数値です。

food

プレイヤーの**満腹度を0から20で表した数値**です。

air

プレイヤーが水中に**潜っている際の残りの空気の量**です。  
最初は300ですが、水中にいると1tickごとに1減っていきます。

armor

![防具ゲージ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091503.png)  
画面に表示されている防具ゲージを0から20で表した数値です。**「ダメージ軽減」などで防御力を上げても増えません。**あくまで表示されている防具ゲージを数値化しただけです。

level

プレイヤーの**経験値レベル(画面に表示されている数字)**です。

stat.sleepInBed

**ベッドで眠った回数**です。

stat.sneakTime

**スニークした時間**です。スニークするだけで数値が増えます。

stat.pickup

**アイテムを拾った回数**です。特定のアイテムを拾った回数を計測する方法については[こちらの記事](https://www.napoan.com/scoreboard-stat-count/#stat-pickup)で解説しています。

stat.drop

**アイテムを落とした回数**です。特定のアイテムを落とした回数を計測する方法については[こちらの記事](https://www.napoan.com/scoreboard-stat-count/#stat-drop)で解説しています。

stat.aviateOneCm

新アイテム**「elytra(エリトラ)」で飛んだ距離**です。

判定できるプレイヤーの行動一覧

[![プレイヤーの行動をカウントするscoreboardコマンドまとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121439.png)  
https://www.napoan.com/scoreboard-stat-count/](https://www.napoan.com/scoreboard-stat-count/)

スコアボードを活用すれば、他にも様々なプレイヤーの行動を計測可能です。**全てのカウント項目の一覧は上記記事にまとめています**ので、ご興味のある方は是非お読み下さい。

## 新しいステータス効果(ポーション効果)まとめ

バージョン1.9で追加されたステータスエフェクト一覧

Glowing

**/effect <セレクタ> minecraft:glowing (秒数) (レベル) (パーティクルを隠すならtrueと書く)**  
または**/summon エンティティID ~ ~ ~ {Glowing:1b}**

![Glowing効果](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124109.png)  
枠が光ってどこからでも場所が分かるようになります。レベルに意味はありません。

Levitation (浮遊)

**/effect <セレクタ> minecraft:levitation (秒数) (レベル) (true)**

![浮遊効果](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091508.png)  
1秒に(レベル+1)ブロック分上昇します。**レベルを255にすると、ジャンプしたり落下したり階段を登ったりできなくなります。**この浮遊効果を使った[「空中浮遊PvP」のワールドを配布しました](https://www.napoan.com/float-battle-show/)よね。

Luck (運)

**/effect セレクタ minecraft:luck 秒数 レベル (true)**

「luck(幸運)」がレベルの分だけ与えられます。この「運」は、**例えばLoot tableでアイテムを決定する際に使われます。**詳しくは[こちらの解説](https://www.napoan.com/loot-table-perfect-guide/2/#basic)をお読み下さい。

Bad Luck

**/effect <セレクタ> minecraft:unluck (秒数) (レベル) (true)**

レベルの分だけ、「luck(幸運)」のレベルが下がります。

## playsoundコマンドが色々強化された。カテゴリ指定 / サウンド大量追加

### 音源の「カテゴリ」を指定して再生できるようになった

バージョン1.9ではplaysoundコマンドの書き方がちょっと変わりました。

バージョン1.9からの新しいplaysoundコマンドの書き方

**/playsound <音源> <カテゴリ> <プレイヤー> (x) (y) (z) (音量) (ピッチ) (最小音量)**  
「カテゴリ」には、「master」「music」「record」「weather」「block」「hostile」「neutral」「player」「ambient」「voice」が入ります。

例えば「声」カテゴリとしてブタの鳴き声を再生する場合は、**/playsound mob.pig.say voice @p** と書くわけです。**なんでカテゴリを指定しないといけなくなったか**と言いますと…

![playsoundコマンドのカテゴリはサウンド設定と対応している](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123543.png)

…そう、**「サウンド設定」でカテゴリごとに音量を調節できるようにするためです。**例えば配布ワールドに音声データを同梱して再生する際、**カテゴリを「声」にすればサウンド設定で「声」をOFFにしている人には再生されなくなります。**

### 大量のサウンドが追加された

バージョン1.9を遊んでみると、効果音がより豊富になったのがお分かり頂けるかと思います。例えば**バケツをひっくり返した時の音、装備品を付けた時の音…** つまり**playsoundコマンドで使えるサウンドがその分増えたということです!**

1.9のサウンドイベント一覧がまとめてある記事様

[![赤石愛氏のブロマガ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111730.jpg)  
http://ch.nicovideo.jp/akaishi\_ai/blomaga/ar928909](http://ch.nicovideo.jp/akaishi_ai/blomaga/ar928909)

あまりにも膨大過ぎて書くに書けない**1.9のサウンド一覧**を、赤石愛先生がブロマガにまとめられています。ご興味のある方は是非お読み下さい。ありがたや～

## particleコマンドが色々強化された + 追加パーティクル一覧

### パーティクルが見えるプレイヤーを指定できるようになった

particleコマンドに新しい機能が追加されました。なんと**「パーティクルが見える人」を指定できるように**なったんです。

1.9からはparticleコマンド末尾にセレクターを追記して見える人を指定できるようになった

**/particle explode <x> <y> <z> <xd> <yd> <zd> <スピード> (カウント) (モード) **<セレクター>****  
「(モード)」を「normal」にすれば通常、「force」にすれば256ブロック離れても、またビデオ設定で「パーティクル:最小」にしても見えるようになります。

▲セレクターに「@a\[m=1\]」と書けば、クリエイティブモードの人だけに見えるパーティクルになります。

![特定のプレイヤーだけドッキリ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105752.png)

例えば**/particle mobappearance ~ ~ ~ 1 1 1 1 1 force @p**とすれば**最寄りのプレイヤー一人だけにエルダーガーディアンのドッキリを見せる**ことが可能です。プレイヤー名で指定することも可能ですので、マルチプレイで誰かさんに仕掛けてみては?

### 一部のパーティクルで、ブロック/アイテムの種類を指定する方法が変わった

例: ピンク色の羊毛を破壊した際のパーティクルを表示

![blockcrackの数値の書き方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091541.png)  
**/particle blockcrack <x> <y> <z> <xd> <yd> <zd> <スピード> (カウント) (モード) @a 24611**

▲ブロックを破壊した際のパーティクルである、blockcrackパーティクルではこれまでblockcrack\_(id+(データ値\*4096))と書いて指定していましたが、1.9では**id+(データ値\*4096)をコマンドの末尾に書く仕様に変更されました。**例えばピンク色の羊毛の場合、35 + (6\*4096)なので24611と末尾に書きます。

例: ラピスラズリブロックのblockdustパーティクルを表示

![blockdustパーティクルでラピスラズリのパーティクルを表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102312.png)  
**/particle blockdust <x> <y> <z> <xd> <yd> <zd> <スピード> (カウント) (モード) @a 22**

blockdustのパーティクルを使う際、これまではblockdust\_(id)という風にIDを指定していましたが、blockcrack同様末尾にブロックID + (データ値 \* 4096)を数字で指定することで、パーティクルのブロックを指定できるようになりました。例えばラピスラズリの場合、「22+(0\*4096)」なので「22」と書いています。

例: 骨粉のアイコンを破壊した際のパーティクルを表示

![骨粉を破壊した際のパーティクル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091511.png)  
**/particle iconcrack <x> <y> <z> <xd> <yd> <zd> <スピード> (カウント) (モード) @a 35 6**

iconcrackパーティクルも書き方が変わり、これまでiconcrack\_id\_データ値だったのがIDとデータ値は末尾に書く仕様に変更されました。iconcrackだけは、**ID データ値という風に2つの数値を分けて書きます。**

### 1.9で追加されたパーティクル一覧

バージョン1.9で追加されたパーティクル一覧

endRod

エンドロッドやシュルカーの撃ち出す弾のパーティクル

![endRodパーティクル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091515.png)

dragonbreath

エンダードラゴンのブレス

![dragonbreathパーティクル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091518.png)

damageIndicator

ダメージを与えた際のパーティクル

![damageIndicatorパーティクル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091522.png)

sweepAttack

範囲攻撃(sweep攻撃)のパーティクル

![sweepAttackパーティクル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091526.png)

## エンダークリスタルのビームの向きを自由に設定できるようになった

![エンダークリスタルのビームの向きを設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103122.png)

バージョン1.9では、エンダードラゴンの復活にも使われる「エンダークリスタル」。**ビームの向きを自由に設定できるようになった**んです。

エンダークリスタルのビームのターゲット座標を設定するコマンド

**/summon EnderCrystal ~ ~ ~ {BeamTarget:{X:X座標,Y:Y座標,Z:Z座標}}**

## Attribute Modifiersでスロットを指定できるようになった

![胸に装備した時だけ効果を発揮](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122805.png)

「手に持った時/装備した時に能力を変化させる」AttributeModifiers機能。バージョン1.9では、**「このスロットに装備した時だけ効果を発揮する」という「スロット」を指定できるように**なりました。

/give @p minecraft:diamond\_chestplate 1 0 {
AttributeModifiers:\[
 {
AttributeName:"generic.maxHealth",
Name:"generic.maxHealth",
Amount:5,
Operation:0,
Slot:"chest"
}
\],
display:{
Name:"すごいチェストプレート",
Lore:\[
胸に装備した時だけ効果を発動します
\]
}
}

▲各属性にSlotタグが追加されたんです。Slot:には“mainhand”、“offhand”、“head”、“torso”、“legs”、“feet”が指定できます。mainhandは利き手、offhandは反対の手、torsoはチェストプレートのスロットのことです。

![AttributeModifiersのスロットの指定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102837.jpg)

[MCStacker](http://mcstacker.bimbimma.com/)で属性効果のスロットを指定するのはとっても簡単。「Attirbute Modifies」にチェックを入れて、**各効果の数値を設定後、**Slot**を選択するだけ**です。

ちなみに装備品じゃなくてもAttributeModifiersは付けられます。

---

**「○○についてまとめてほしい/解説してほしい」**などのご意見ご感想、コメント欄や[Twitter](https://twitter.com/napoan)でお待ちしています。
