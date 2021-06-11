
---
title: プレイヤーの行動,アイテム使用などのカウント方法/判定項目一覧
description: 今回は、プレイヤーの行動、Mobのキル数やアイテムの使用をカウントする方法を解説します。scoreboardコマンドの「stat」を使えば、統計に表示されるような様々な情報を数値化出来るんです。例えばジャンプをした回数、プレイ時間、特定のMobを倒した回数、特定のアイテムを落とした回数など… コマンドで作れる仕掛けの幅がさらに広がりますね。
---

![プレイヤーの行動をカウントするscoreboardコマンドまとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121439.png)

今回は、**プレイヤーの行動、Mobのキル数やアイテムの使用をカウント**する方法を解説します。scoreboardコマンドの「stat」を使えば、統計に表示されるような様々な情報を数値化出来るんです。例えば**ジャンプをした回数、プレイ時間、特定のMobを倒した回数、特定のアイテムを落とした回数など…** コマンドで作れる仕掛けの幅がさらに広がりますね。

※この記事は2015年1月30日に公開した記事を再編集したものです。

## プレイヤーの行動を判定する基本的な仕組み

プレイヤーがジャンプしたり、クラフトしたり、Mobを倒したり、逆に倒されたり… 「統計」に表示される物も含めて、**プレイヤーの様々な行動を数値化できるのがscoreboardコマンド。**今回は、scoreboardコマンドで判定できる様々な項目をまとめました。

プレイヤーの行動を判定する流れ

*   先にscoreboardを作っておく。**この時”種類”を「stat.○○」など判定する項目名にする。**  
    例: **/scoreboard objectives add Test1 **stat.jump** _ジャンプした回数_**
*   先程作ったスコアを手掛かりにコマンドを実行する。  
    例: **/give @a\[score\_Test1\_min=1\] diamond**なら”Test1″が1以上の人にダイヤモンドを与える。
*   必要に応じて、アクションを起こした後**スコアをリセットする。**  
    例: **/scoreboard players reset @a\[score\_Test1\_min=1\] Test1**

プレイヤーの行動などをカウントするscoreboardを作成するコマンド

**/scoreboard objectives add _<好きな名前(英数)>_ 判定する項目 <表示する名前>**

▲最初に手動でスコアボードを作成する際、**普段はdummyなどと入れている所にこれから解説する項目名を入力します。**例えば「stat.jump」や「stat.killEntity.zombie」ですね。**この**「判定する項目」**を設定することで、**特定の行動でスコアを加算してくれます。****そしてプレイヤーの行動に応じて増えたスコアを条件に、何か起こすことが出来るのです。便利な機能でしょ。

## scoreboardの「stat」で判定/カウントできる項目一覧

ここからは、scoreboardの**「判定する項目」**を**一覧でまとめて**解説します。表の左側の「判定する項目」を**先ほどの「判定する項目名」の部分に書いて使います。**

### ジャンプなど、プレイヤーの基本的な行動をカウントする「stat」

scoreboardコマンドで判定する項目のうち、統計に表示されるような行動をカウントするものをまとめました。

判定する項目

判定される内容

**stat.animalsBred**

動物を繁殖させるとスコアが増えます。

(1.8.2で追加) **stat.armorCleaned**

**大釜で防具を洗うと**増えます。

(1.9で追加) **stat.aviateOneCm**

新アイテム**「elytra(エリトラ)」で飛んだ距離**です。

(1.8.2で追加) **stat.bannerCleaned**

大釜で**旗を洗うと**増えます。

(1.8.2で追加) **stat.beaconInteraction**

**ビーコンの画面を開く**と増えます。

**stat.boatOneCm**

**ボートに乗っている間**、スコアが増え続けます。  
乗る瞬間に何故か200ほど一気に増えます。

(1.8.2で追加) **stat.brewingstandInteraction**

**醸造台の画面を開く**と増えます。

**stat.cakeSlicesEaten**

**置いてあるケーキを食べる**と増えます。

**stat.cauldronFilled**

**大釜に水を入れる**と増えます。

(1.8.2で追加) **stat.cauldronUsed**

**大釜を使うと**増えます。

(1.8.2で追加) **stat.chestOpened**

**チェストを開く**と増えます。

**stat.climbOneCm**

ハシゴやツタなどを**登っている間**、スコアが増え続けます。

(1.8.2で追加) **stat.craftingTableInteraction**

**作業台の画面を開く**と増えます。

**stat.crouchOneCm**

**スニークしながら動くと**スコアが増え続けます。1.9で追加された「stat.sneakTime」と違って移動しないと増えません。

**stat.damageDealt**

プレイヤーがエンティティに**ダメージを与えた量**だけスコアが増えます。  
例えばダイヤの剣でゾンビを攻撃すると70増えます。

**stat.damageTaken**

プレイヤーが**ダメージを受けた量**だけスコアが増えます。  
例えばハート1.5個分ダメージを受けるとスコアが30増えます。

**stat.deaths**

**死んだらスコアが増えます。**これ使わなくてもdeathCountでいいんじゃ?

(1.8.2で追加) **stat.dispenserInspected**

**ディスペンサーの画面を開く**と増えます。

**stat.diveOneCm**

**水中を歩いた距離**の分だけスコアが増えます。

**stat.drop**

**アイテムをドロップ(投げ捨てる)**するとスコアが増えます。  
バージョン1.9で強化され、特定のアイテムだけをカウント対象にできるようになりました。詳しい使い方は[こちら](#stat-drop)。

(1.8.2で追加) **stat.dropperInspected**

**ドロッパーの画面を開く**と増えます。

(1.8.2で追加) **stat.enderchestOpened**

**エンダーチェストを開く**と増えます。

**stat.fallOneCm**

**高い場所から落ちる**とスコアが増えます。ジャンプした場合はカウントされません。

**stat.fishCaught**

**魚を釣る**とスコアが増えます。

(1.8.2で追加) **stat.flowerPotted**

**花瓶に花を挿す**と増えます。

**stat.flyOneCm**

クリエイティブモードなどで**空を飛んだ距離の分だけ**スコアが増えます。  
真上にとんでもスコアは増えず、横や斜めに上昇すると増えます。

(1.8.2で追加) **stat.furnaceInteraction**

**かまどの画面を開く**と増えます。

(1.8.2で追加) **stat.hopperInspected**

**ホッパーの画面を開く**と増えます。

**stat.horseOneCm**

**馬に乗っている間スコアが増え続けます。**

(1.8.2で追加) **stat.itemEnchanted**

**アイテムをエンチャントする**と増えます。

**stat.jump**

**プレイヤーがジャンプする**とスコアが増えます。

**stat.junkFished**

釣り竿で**ゾンビ肉などのゴミを釣る**とスコアが増えます。詳細な種類は[こちら](http://minecraft.gamepedia.com/Fishing#Junk_and_treasures)。

**stat.leaveGame**

**ワールドからプレイヤーが出る**とスコアが増えます。

**stat.minecartOneCm**

**トロッコに乗っている間**スコアが増え続けます。

**stat.mobKills**

**Mobを倒すとスコアが増えます。**防具立てなどの非生物は含まれません。

(1.8.2で追加) **stat.noteblockPlayed**

**音符ブロックで音を再生する**と増えます。

(1.8.2で追加) **stat.noteblockTuned**

**音符ブロックの音階を調節する**と増えます。

**stat.pigOneCm**

**ブタに乗っている間**だけスコアが増え続けます。

**stat.playerKills**

プレイヤーが**他のプレイヤーを倒すと**スコアが増えます。

**stat.playOneMinute**

**ゲームを遊んでいる間、スコアが増え続けます。**タイマーなどに使えるのでは?

(1.8.2で追加) **stat.recordPlayed**

**ジュークボックスでレコードを再生する**と増えます。

(1.9で追加) **stat.sneakTime**

**スニークしている間**増え続けます。「stat.crouchOneCm」と違ってスニークするだけで増えます。

**stat.sprintOneCm**

**プレイヤーがダッシュしている間**、スコアが増え続けます。

**stat.swimOneCm**

**プレイヤーが泳いでいる間**、スコアが増え続けます。

**stat.talkedToVillager**

**村人を右クリックすると**スコアが増えます。これを利用した「右クリックすると何か起こるアイテム」については[こちらの記事](https://www.napoan.com/right-click-item/)で解説しましたね。

**stat.timeSinceDeath**

**プレイヤーがリスポーンしてからの時間**をカウントします。

(1.9で追加) **stat.sleepInBed**

**ベッドで横になるだけ**で増えます。

**stat.tradedWithVillager**

**村人と取引するとスコアが増えます。**

(1.8.2で追加) **stat.trappedChestTriggered**

**トラップチェストを開く**と増えます。

**stat.treasureFished**

**釣りで「お宝」アイテムを釣ると**増えます。具体的なお宝アイテムの種類は[こちら](http://minecraft.gamepedia.com/Fishing#Junk_and_treasures)。

**stat.walkOneCm**

**プレイヤーが歩いている間**、スコアが増え続けます。歩数制限を設けたりできそう

配布ワールドの作成やマルチプレイに大活躍しそうなものばっかりですね。

### 特定のアイテムをクラフトしたらカウントする「stat.craftItem」

次にご紹介するのは、**特定のアイテムをクラフトするとスコアが増える**「stat.craftItem」です。例を挙げて解説します。

ダイヤの剣をクラフトした回数をカウントするSBを作成

![2015-1-30_22-17-11](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124950.jpg)  
**/scoreboard objectives add _<好きな名前>_ stat.craftItem.minecraft.diamond\_sword**

▲このように、**判定する項目**を**「stat.craftItem.minecraft.アイテム名(ID)」**にします。

アイテムを作業台やインベントリ画面でクラフトして、**完成したアイテムの数だけスコアが増えます。****例えば棒64個と石炭64個で松明を作ると、256スコアが増えます。**

### 特定のアイテムを使ったらカウントする「stat.useItem」

次は、**特定のアイテムを使用したらスコアが増える**「stat.useItem」をご紹介します。

火打ち石と打金を使った回数をカウントするSBを作成

**/scoreboard objectives add _<好きな名前>_ stat.useItem.minecraft.flint\_and\_steel**

先ほどの「stat.craftItem」と似ていますね。**同じようにアイテム名(ID)を書けばいいだけです。**しかし、**「アイテムを使った」**と言っても、**どうすれば「使った」ことになるのか分かりにくい**ですね。そこで表を用意しました。

使うアイテムの種類

判定される条件など

**シャベル、ツルハシ、斧、火打ち石と打金、ハサミ、クワ、弓、剣**

**持ってブロックを破壊すると**スコアが増えます。  
**耐久値が減らなくても「使った」事になります。**  
ピッケルで松明を壊してもスコアが増えるのです。

**釣り竿と棒付きのニンジン**

**右クリックしただけでスコアが増えます。**

**防具類**

耐久値が減ってもスコアは増えません。

**数々のブロック**

**設置するとスコアが増えます。**

**絵画、スポーンエッグ、トロッコ類、額縁、ボート、卵、雪球、弓、スプラッシュポーション、経験値ボトル**

それらを使って、**エンティティが生成されれば**「使った」とみなされスコアが増えます。

**カカオの種、骨粉**

それぞれ**原木に設置した**、**植物の成長を促進した**らスコアが増えます。

**バケツに入った牛乳、ポーション、素材の食料、ケーキ**

クラフトする時などに設置しただけでスコアが増えます。

**ボウルとバケツ**

それぞれ、**きのこシチューや牛乳バケツになってもスコアは増えません。**

**各種レコード**

ジュークボックスに入れるとスコアが増えます。  
**レコードの種類によって別々に数えられます。** 

### アイテムの耐久値が無くなった(装備品が壊れた)回数をカウントする「stat.breakItem」

ツルハシや防具など**耐久値を持つアイテムを壊した回数をカウント**する「stat.breakItem」をご紹介します。例えば「防具が壊れるとゲームオーバー」とかいう仕掛けが作れますね。

ダイヤのブーツが壊れた回数をカウントするSBを作成

**/scoreboard objectives add _<好きな名前>_ stat.breakItem.minecraft.diamond\_boots**  
▲**stat.breakItem.minecraft.アイテム名** の順番です。

「stat.breakItem」で使えるアイテム名一覧

*   fishing\_rod (釣り竿)
*   flint\_and\_steel (火打ち石と打ち金)
*   bow (弓)
*   carrot\_on\_a\_stick (ニンジン付きの棒)
*   shears (ハサミ)
*   wooden\_axe (木の斧)
*   wooden\_hoe (木のクワ)
*   wooden\_pickaxe (木のツルハシ)
*   wooden\_shovel (木のシャベル)
*   wooden\_sword (木の剣)
*   stone\_axe (石の斧)
*   stone\_hoe (石のクワ)
*   stone\_pickaxe (石のツルハシ)
*   stone\_shovel (石のシャベル)
*   stone\_sword (石の剣)
*   iron\_axe (鉄の斧)
*   iron\_hoe (鉄のクワ)
*   iron\_pickaxe (鉄のツルハシ)
*   iron\_shovel (鉄のシャベル)
*   iron\_sword (鉄の剣)
*   iron\_boots (鉄のブーツ)
*   iron\_chestplate (鉄のチェストプレート)
*   iron\_helmet (鉄のヘルメット)
*   iron\_leggings (鉄のレギンス)
*   golden\_axe (金の斧)
*   golden\_hoe (金のクワ)
*   golden\_pickaxe (金のツルハシ)
*   golden\_shovel (金のシャベル)
*   golden\_sword (金の剣)
*   golden\_boots (金のブーツ)
*   golden\_chestplate (金のチェストプレート)
*   golden\_helmet (金のヘルメット)
*   golden\_leggings (金のレギンス)
*   diamond\_axe (ダイヤの斧)
*   diamond\_hoe (ダイヤのクワ)
*   diamond\_pickaxe (ダイヤのツルハシ)
*   diamond\_shovel (ダイヤのシャベル)
*   diamond\_sword (ダイヤの剣)
*   diamond\_leggings (ダイヤのレギンス)
*   diamond\_boots (ダイヤのブーツ)
*   diamond\_chestplate (ダイヤのチェストプレート)
*   diamond\_helmet (ダイヤのヘルメット)
*   leather\_boots (革のブーツ)
*   leather\_chestplate (革のチェストプレート)
*   leather\_helmet (革のヘルメット)
*   leather\_leggings (革のレギンス)
*   chainmail\_boots (チェーンのブーツ)
*   chainmail\_chestplate (チェーンのチェストプレート)
*   chainmail\_helmet (チェーンのヘルメット)
*   chainmail\_leggings (チェーンのレギンス)

### 特定のブロックを掘ったらカウントする「stat.mineBlock」

次は、**特定のブロックを壊したらスコアが増える**「stat.mineBlock」をご紹介します。

ダイヤモンドを採掘した回数をカウントするSBを作成

**/scoreboard objectives add _<好きな名前>_ stat.mineBlock.minecraft.diamond\_ore**  
**stat.mineBlock.minecraft.ブロック名** の順番です。

![18](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131546.png)

注意点として、クリエイティブモードで壊してもカウントされません。**サバイバルモードで自力で壊した時のみカウントされます。**また、**ブロックに対して適切なツールで壊さないとカウントされません。****例えば砂利を素手で壊してもスコアは増えません。**(※スコアボードを作成しただけでは、右のスコアは表示されませんのでご安心下さい。)

### 特定のエンティティを倒したらカウントする「stat.killEntity」

次にご紹介するのは**、特定のエンティティ(Mob)を倒したらスコアが増える**「stat.killEntity」です。これを活用すれば、**ゾンビ狩り対決とかできる**のでかなり役に立ちますよ。

ゾンビを倒した回数をカウントするSBを作成

**/scoreboard objectives add _<好きな名前>_ stat.killEntity.Zombie**

▲とっても単純で、**「stat.killEntity.エンティティID」**と書くだけです。エンティティIDは、以下のものが使えます。

「stat.killEntity.○○」に入るエンティティ名一覧

*   Bat (コウモリ)
*   Blaze (ブレイズ)
*   CaveSpider (洞窟グモ)
*   Chicken (ニワトリ)
*   Cow (牛)
*   Creeper (クリーパー)
*   Enderman (エンダーマン)
*   Endermite (エンダーマイト)
*   EntityHorse (馬)
*   Ghast (ガスト)
*   Guardian (ガーディアン)
*   LavaSlime (マグマキューブ)
*   MushroomCow (ムーシュルーム)
*   Ocelot (ネコ)
*   Pig (ブタ)
*   PigZombie (ゾンビピッグマン)
*   Rabbit (ウサギ)
*   Sheep (ヒツジ)
*   Silverfish (シルバーフィッシュ)
*   Skeleton (スケルトン)
*   Slime (スライム)
*   Spider (クモ)
*   Squid (イカ)
*   Villager (鼻がでかく臭くて大きなオモチャ、村人)
*   Witch (魔女)
*   Wolf (オオカミ)
*   Zombie (ゾンビ)

**ほとんど全てのMobに対して設定できます。**例として、**ゾンビを先に20体倒した方が賞品をもらえる、とか良さそうですね。**

### 特定のエンティティに倒されたらカウントする「stat.entityKilledBy」

最後にご紹介するのは、**プレイヤーが特定のエンティティに倒されたら**スコアが増える、その名も**「stat.entityKilledBy」**です。倒されたら増えます。面白い機能ですね。

ゾンビに倒された回数をカウントするSBを作成

[![2015-1-30_22-23-51](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142553.jpg)](#6/7/67c75540.jpg "2015-1-30_22-23-51")  
**/scoreboard objectives add _<好きな名前>_ stat.entityKilledBy.Zombie**

▲**「stat.entityKilledBy.エンティティID」**の順番に書きます。エンティティIDは、先述した一覧のものを使って下さい。当たり前ですが、**ヒツジなどの動物に設定しても永遠にスコアが増えることはないでしょう。**

### (バージョン1.9から) 特定のアイテムを拾った回数をカウントする「stat.pickup」

バージョン1.9で**「stat.pickup」が追加され、「特定のアイテムを拾った回数」をカウントできるように**なりました。例えば「ハズレアイテムを拾ってしまったらゲームオーバー」などのミニゲームが作れますね。

ダイヤモンドを拾った回数をカウントするSBを作成

**/scoreboard objectives add _<好きな名前>_ stat.pickup.minecraft.diamond**  
▲**stat.pickup.minecraft.アイテム名** の順番です。

### (バージョン1.9から) 特定のアイテムを落とした回数をカウントする「stat.drop.○○」

バージョン1.9で「stat.drop」が強化され、後ろにアイテム名を追記して**特定のアイテムをドロップした回数のみカウントできるように**なりました。例えば「ダイヤモンドを落とした人は死亡」などの仕掛けが作れますね。

ダイヤモンドを落とした回数をカウントするSBを作成

**/scoreboard objectives add _<好きな名前>_ stat.drop.minecraft.diamond**  
▲**stat.drop.minecraft.アイテム名** の順番です。

## 参考にさせて頂いたページ

[Scoreboard – Minecraft Wiki](http://minecraft.gamepedia.com/Scoreboard)  
[Statistics – Minecraft Wiki](http://minecraft.gamepedia.com/Statistics)
