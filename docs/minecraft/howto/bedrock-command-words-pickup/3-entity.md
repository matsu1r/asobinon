---
title: 「エンティティ」「Mob」
---

![エンティティとMobの関係](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103908.png)  
(各アイコンは[公式Wiki](http://minecraft.gamepedia.com/Minecraft_Wiki)から拝借)

エンティティとは位置と角度、体力を持った物体全般のこと。プレイヤーは召喚不能だがエンティティの一種。他にも投げた雪玉やロープ、ボート、トロッコ等、**要するにブロックじゃないものは大体エンティティ。**

そして**エンティティの中に「Mob」が含まれている。** Mobとは、プレイヤーに友好的/中立的/敵対的などの**AIを持っている生き物たち**のこと。

## 「エンティティID」

summonコマンドでエンティティを召喚したり、killコマンド等のセレクター(後述)でエンティティを選択したりする時に使う文字列。要するに英語で書かれたエンティティの名前。

[[dl|例: summonコマンドの書き方]]
|```
|/summon エンティティID x座標 y座標 y座標
|```

BEでは後述するNBTタグが使えないなどの原因により、一部のエンティティIDはPC版と異なるが、BEのエンティティIDは大体PC版v1.11~のIDと近い(大文字を使わない)。それでも**単語の区切りなどの書き方がところどころ1.11と違うので注意しよう。**

|エンティティ|ID|
|---|---|
| スケルトンの矢 | arrow |
| コウモリ | bat |
| ブレイズ | blaze |
| ボート | boat |
| 洞窟グモ | cavespider |
| ニワトリ | chicken |
| ウシ | cow |
| クリーパー | creeper |
| ロバ | donkey |
| エンダーマン | enderman |
| ガスト | ghast |
| ガーディアン | guardian |
| エルダーガーディアン | guardian.elder |
| ウマ | horse |
| ハスク | husk |
| アイアンゴーレム | irongolem |
| 首ひも(ロープ)の縛った部分 | leash_knot |
| 雷(稲妻) | lightningbolt |
| マグマキューブ | magmacube |
| トロッコ | minecart |
| チェスト付きトロッコ | minecartchest |
| ホッパー付きトロッコ | minecarthopper |
| TNT付きトロッコ | minecarttnt |
| ラバ | mule |
| ムーシュルーム(キノコ牛) | mushroomcow |
| ヤマネコ(オセロット) | ocelot |
| ブタ | pig |
| ゾンビピッグマン | pig_zombie |
| 投げた経験値ポーション(エンチャントのビン) | potion.experience |
| ウサギ | rabbit |
| ヒツジ | sheep |
| シルバーフィッシュ | silverfish |
| スケルトン | skeleton |
| ストレイ | skeleton.stray |
| ウィザースケルトン | skeleton.wither |
| スケルトン馬 | skeletonhorse |
| スライム | slime |
| 雪玉 | snowball |
| スノーゴーレム | snowgolem |
| クモ | spider |
| イカ | squid |
| 投げたタマゴ | thrownegg |
| 投げたスプラッシュポーション | thrownpotion |
| 着火したTNT | tnt |
| 村人 | villager |
| ウィッチ(魔女) | witch |
| ウィザー | wither.boss |
| オオカミ | wolf |
| 経験値オーブ | xporb |
| ゾンビ | zombie |
| 村人ゾンビ | zombie_villager |
| ゾンビ馬 | zombiehorse |
