---
title: バージョン1.11で変更/分割されたエンティティID一覧。既存のsummonコマンドが死ぬぞ!
---

![111で変更分割されるエンティティID一覧](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123054.png)

やってくれましたねMojang…  
バージョン1.11の最初のSnapShot「16w32a」がリリースされました。(現在16w32″b”が出た所です) もうご存じの方も多いと思いますが、**コマンドに関する恐ろしい変更がされてしまったのです… そう、なんと35種類ものエンティティのIDが変わってしまったのです!** 例えば**「PrimedTnt」が「tnt」に、「FallingSand」が「falling\_block」に、「EntityHorse」が「horse」に、「ArmorStand」が「armor\_stand」に… うわああああああああ!**

おっと、変更だけではありませんよ。**例えばウィザースケルトンに「wither\_skeleton」というIDが与えられたりと、様々なMobのIDが分割されたんです。**来るバージョン1.11の変貌っぷりを見ていきましょう。

## バージョン1.11でエンティティIDに異変が!?

![コマンドを生成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112022.jpg)

いつものように[MCStacker](https://mcstacker.bimbimma.com/)にコマンドを生成してもらって…

![ペースト。](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092117.png)

ペースト。

![ｶﾁｯ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092121.png)

ポチットな。

![は?](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092125.png)

**は?**

---

～数秒後～

![ストレイを召喚するで](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101728.png)

そういえば**ストレイってどうやって召喚するんやったっけ。**…思い…出した! SkeletonType:2ってNBTタグを付けるんやで。

![お前ちゃう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110803.png)

**ファッ!?** お前ちゃうわ!

ん?

―  
―  
―

> Yay! We have a new snapshot for Minecraft PC! [https://t.co/qW0xFPSA8o](https://t.co/qW0xFPSA8o)
> 
> — LadyAgnes (@\_LadyAgnes) [2016年8月10日](https://twitter.com/_LadyAgnes/status/763369305811652610)

天才プログラマーLadyAgens氏「イェイ! PC版の新しいSnapShotだぜ!」

そマ? 早速Wiki見に行くで!

16w32a – Official Minecraft Wiki

[![16w32aのWikiのページ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112030.jpg)  
http://minecraft.gamepedia.com/16w32a](http://minecraft.gamepedia.com/16w32a)

![スポーンエッグ!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112026.jpg)

スポーンエッグ! 便利になるのぉ

![ん?](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101946.png)

ん?

![うせやろ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101420.png)

うせやろ?

## エンティティIDにも「minecraft:」が付くようになった

![minecraft:が付く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104650.png)

IDの変更を解説するその前に、重大なシステムの変更について触れておきます。**バージョン1.11の最初のSnapShot「16w32a」から、エンティティIDにも「minecraft:」が付くようになりました。**ですのでTabキーで補完する際はこの識別子が付きます。MOD対策なんですかね…

個人的には、LootTableのようにオリジナルのエンティティを作れるようになる? …と期待してます。

※以下、**エンティティIDは「minecraft:」を省略した形で書いています**が、正式には「minecraft:」と付けますのでご注意下さい。今のところ付けなくても問題は無いと思いますが…

## 変更されたエンティティID一覧。アンダーバーで区切る方式になった

![エンティティIDの変更という逃れられぬ業](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104803.png)

仕様変更とは逃れられぬ“業”（カルマ）― **防具立てのエンティティID「ArmorStand」が、「armor\_stand」に変更されてしまったのです。** どれだけの装置が影響を喰らうのか想像すると恐ろしいですね…

ということで、以下に[Wiki](http://minecraft.gamepedia.com/16w32a)を参考に変更されたエンティティIDの一覧を載せておきます。

バージョン1.11で変更される予定のエンティティID一覧

 

従来のID

→

新しいID

要するに:

 

AreaEffectCloud

→

area\_effect\_cloud

アンダーバーが付いた

 

ArmorStand

→

armor\_stand

アンダーバーが付いた

 

CaveSpider

→

cave\_spider

アンダーバーが付いた

 

MinecartCommandBlock

→

commandblock\_minecart

名前が変わった

 

DragonFireball

→

dragon\_fireball

アンダーバーが付いた

 

ThrownEgg

→

egg

名前が変わった

 

EnderCrystal

→

ender\_crystal

アンダーバーが付いた

 

EnderDragon

→

ender\_dragon

アンダーバーが付いた

 

ThrownEnderpearl

→

ender\_pearl

名前が変わった

 

EyeOfEnderSignal

→

eye\_of\_ender\_signal

アンダーバーが付いた

 

FallingSand

→

falling\_block

名前が変わった

 

FireworksRocketEntity

→

fireworks\_rocket

名前が変わった

 

MinecartFurnace

→

furnace\_minecart

名前が変わった

 

MinecartHopper

→

hopper\_minecart

名前が変わった

 

EntityHorse

→

horse

名前が変わった

 

ItemFrame

→

item\_frame

アンダーバーが付いた

 

LeashKnot

→

leash\_knot

アンダーバーが付いた

 

LightningBolt

→

lightning\_bolt

アンダーバーが付いた

 

LavaSlime

→

magma\_cube

名前が変わった

 

MinecartRideable

→

minecart

名前が変わった

 

MushroomCow

→

mooshroom

名前が変わった

 

Ocelot

→

ocelot

名前が変わった

 

PolarBear

→

polar\_bear

アンダーバーが付いた

 

ShulkerBullet

→

shulker\_bullet

アンダーバーが付いた

 

SmallFireball

→

small\_fireball

アンダーバーが付いた

 

SpectralArrow

→

spectral\_arrow

アンダーバーが付いた

 

ThrownPotion

→

potion

名前が変わった

 

MinecartSpawner

→

spawner\_minecart

名前が変わった

 

PrimedTnt

→

tnt

名前が変わった

 

MinecartTNT

→

tnt\_minecart

名前が変わった

 

VillagerGolem

→

villager\_golem

アンダーバーが付いた

 

WitherBoss

→

wither

名前が変わった

 

WitherSkull

→

wither\_skull

アンダーバーが付いた

 

ThrownExpBottle

→

xp\_bottle

名前が変わった

 

PigZombie

→

zombie\_pigman

名前が変わった

全体的にみれば、**大文字が小文字になり、より一般的な呼び方に変わり、単語がアンダーバーで区切られるようになった**のです。キャメルケースをやめて、アイテムIDのような書き方になりました。

例えば「PrimedTnT」が単に「tnt」になったり、「EntitiyHorse」が「horse」になったり簡単になっているので、**これからコマンドを学ぶ方にとっては嬉しい変更でしょう。****しかし、既存のコマンドが使えなくなりますよね…**

![type引数の中身も書き換える必要あり](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123029.png)

エンティティIDが変わったということは、**killコマンドなどで使うtype=○○ ―type引数の中身も書き換えなきゃいけません。**ああ大変。ワールドまるごと変換するツールとか誰か作って… **→変換ツール作られてます。**

コマンドブロック内のコマンドをまるごと1.11仕様に変換するMCEDitフィルターの解説記事

[![新しいエンティティIDへコマンドを変換するツール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101743.png)  
https://www.napoan.com/command-convert-filter-for-v111/](https://www.napoan.com/command-convert-filter-for-v111/)

\[2016年9月25日追記\] **ワールドのコマンドブロックをドバーッと選択してまるごと変換するフィルターが制作されました!** 本当に有り難い… 制作はあのアマスタアニメーションツールを作ったMrGarretto氏です。

## 分割されたエンティティID一覧。NBTタグで区別していたMobをIDで区別するように

### スケルトン、ストレイ、ウィザースケルトンの場合

![今までのウィザースケルトンの召喚方法](https://cdn-ak.f.st-hatena.c
om/images/fotolife/s/sasigume/20210208/20210208124416.png)

皆さん、ウィザースケルトンを召喚するコマンドって分かります? …そうです、**スケルトンとウィザースケルトンとストレイ君が同じSkeletonというIDを使っているせいで、いちいちSkeletonTypeというNBTタグで種類を指定しないといけなかった**んです。

![IDが種類ごとに分かれた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104146.png)

それがバージョン1.11(の最初のSnapShot16w32a)で、**それぞれのスケルトンに新しいIDが割り振られました!**

バージョン1.11におけるスケルトンとその亜種の新しいID

 

従来のID

従来の区別するNBTタグ

→

新しいID

  
スケルトン

Skeleton

{SkeletonType:0}  
(実際は省略していい)

→

skeleton

  
ウィザースケルトン

{SkeletonType:1}

→

wither\_skeleton

  
ストレイ

{SkeletonType:2}

→

stray

**SkeletonTypeは1.11で廃止**される予定ですので、1.11で既存のコマンドで召喚するとみんなスケルトンになっちゃいます。

### ウマ、ロバ、ラバ、ゾンビ馬、スケルトン馬の場合

![ウマとその亜種のID](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091025.png)

**ウマ(写ってませんが)、ロバ、ラバ、ゾンビ馬、スケルトン馬**にもそれぞれ専用のIDが割り振られました。

バージョン1.11におけるウマとその亜種の新しいID

 

従来のID

従来の区別するNBTタグ

→

新しいID

  
ウマ

EntityHorse

{Type:0}  
(実際は省略していい)

→

horse

  
ロバ

{Type:1}

→

donkey

  
ラバ

{Type:2}

→

mule

  
ゾンビ馬

{Type:3}

→

zombie\_horse

  
スケルトン馬

{Type:4}

→

skeleton\_horse

ウマ達のTypeは1.11で廃止される予定です。**1.11で既存のコマンドを使うと… IDまるごと変わっちゃったんで何も起こりません。**

### ゾンビ、村人ゾンビ、ハスクの場合

![ゾンビとその亜種のID](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102726.png)

ゾンビ、村人ゾンビ、ハスクにもそれぞれ専用のIDが割り振られました。**村人ゾンビは「villager\_zombie」ではなく「zombie\_villager」なのでご注意下さい!**

バージョン1.11におけるゾンビとその亜種の新しいID

 

従来のID

従来の区別するNBTタグ

→

新しいID

  
ゾンビ

Zombie

{ZombieType:0}  
(実際は省略していい)

→

zombie

  
村人ゾンビ(農家)

{ZombieType:1}

→

zombie\_villager + {Profession:0}

**※1.11以降で職業を指定するには、別途で新しいNBTタグが必要です。**詳細は後述

  
村人ゾンビ(司書)

{ZombieType:2}

→

zombie\_villager + {Profession:1}

  
村人ゾンビ(聖職者)

{ZombieType:3}

→

zombie\_villager + {Profession:2}

  
村人ゾンビ(鍛冶屋)

{ZombieType:4}

→

zombie\_villager + {Profession:3}

  
村人ゾンビ(肉屋)

{ZombieType:5}

→

zombie\_villager + {Profession:4}

  
ハスク

{ZombieType:6}

→

husk

![1.11からの村人ゾンビの職業指定方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102235.png)

ZombieTypeが廃止されるので、**村人ゾンビの職業は新しいProfessionで指定します。**5にすれば話題の緑ローブのフリーター君が出ます。

### ガーディアン、エルダーガーディアンの場合

![ガーディアンとエルダーガーディアンのID](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111258.png)

今まではガーディアンにElder:1を付ければエルダーガーディアンになってたんですが、これからは専用のIDを使います。

< /tr>

バージョン1.11におけるガーディアンとエルダーガーディアンの新しいID

 

従来のID

従来の区別するNBTタグ

→

新しいID

  
ガーディアン

Guardian

{Elder:0}  
(実際は省略していい)

→

guardian

  
エルダーガーディアン

{Elder:1}

→

elder\_guardian

## あとがき

![最後までお読みいただきありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092129.png)

**コマンドの修正めんどくさ。**

PrimedTntがtntになるあたりは納得いくんですが、**あれだけコマンド装置でこき使われているアマスタ君のIDが突如変更されたのが腑に落ちません。** \[2016年9月25日追記\] コマンドをまるごと編集するMCEditフィルターなど、ツールも充実してきたので一安心ですね…
