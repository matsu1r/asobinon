
---
title: 装備が消えた/Ridingが効かないなど、1.9で使えなくなったSummonコマンドを変換するツールの紹介
description: バージョン1.9で今までのSummonコマンドを使って、乗っていたMobや装備品が消えたりしてしまった…なんて経験ありませんか? 実はMinecraft 1.9では、Summonコマンドで使うエンティティのNBTタグに大きな変更があり、「Riding」タグが「Passengers」になったり、装備アイテムやHPの書き方が大きく変わったりしました。いちいちコマンドを修正するのは大変なので、便利な新形式への変換ツールを紹介します。
---

![Summonコマンドを変換するツールの紹介](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095729.png)

バージョン1.9で今までのSummonコマンドを使って、**乗っていたMobや装備品が消えたりしてしまった…なんて経験ありませんか?** 実はMinecraft 1.9では、**Summonコマンドで使うエンティティのNBTタグに大きな変更があり**、「Riding」タグが「Passengers」になったり、装備アイテムやHPの書き方が大きく変わったりしました。**いちいちコマンドを修正するのは大変なので、便利な新形式への変換ツールを紹介します。**

バージョン1.9の、コマンドや配布ワールド作成に関する新機能/変更点まとめ

[![1.9のコマンド関連まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122409.png)  
https://www.napoan.com/pcversion19-command-guide/](https://www.napoan.com/pcversion19-command-guide/)  
▲バージョン1.9はコマンドに関する新要素/仕様変更が盛り沢山。

## バージョン1.9で従来のsummonコマンドを使うと色々不具合が…

![装備品やHPをカスタマイズしたMob](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095620.png)

ダンジョン系の配布ワールドでいうボス的な強めのMobを召喚してみました。ゾンビ馬のHPは200、乗っているゾンビのHPは100、そして**ダイヤの剣を持っていて、ダイヤのヘルメットも被っています**。どちらもドロップ確率は100%に設定しています。

バージョン1.8で、馬に乗ったドロップ率100%の装備付きゾンビを召喚するコマンド

**/summon Zombie ~ ~1 ~ {Equipment:\[{[id:diamond\_sword](http://blog.hatena.ne.jp/diamond_sword/),Count:1},{},{},{},{[id:diamond\_helmet](http://blog.hatena.ne.jp/diamond_helmet/),Count:1,tag:{Unbreakable:1}}\],DropChances:\[1.0F,0.085F,0.085F,0.085F,1.0F\],Attributes:\[{Name:generic.maxHealth,Base:100}\],HealF:100,Riding:{id:”EntityHorse”,Type:3,Attributes:\[{Name:generic.maxHealth,Base:200}\],HealF:200,NoAI:1}}**  
(スクショ撮影用に、ゾンビ馬をNoAI:1bにしています)

![1.9では設定内容がパーになる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095933.png)

ところが、バージョン1.9で同じコマンドを実行してみると… **なんと素っ裸のゾンビが一体出てきただけ。**ゾンビ馬や装備品は何処へ言ってしまったのでしょうか。**HP100(♥x50)に設定したはずが、ダイヤ剣x3回で倒れてしまいました。**

これ、ダンジョン系の配布ワールドなんかで**「○○すると敵が出現する」などの仕掛けに絶大な悪影響がありそう**で恐ろしいですね。一体このコマンドの何がいけなかったのでしょうか。

## 1.9で使えなくなったエンティティのNBTタグと、新しいタグとは。

Chunk format – Minecraft Wiki

[![RidingタグについてのWikiの解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111635.jpg)  
//minecraft.gamepedia.com/Chunk\_format#Entity\_format](http://minecraft.gamepedia.com/Chunk_format#Entity_format)

度々お世話になっている、公式WikiのNBTタグ一覧のページ。なんと以下のタグが1.9のSnapShotで「非推奨」になっており、新タグに書き換える必要があるようです。

*   Ridingタグ(下のエンティティを指定) → **Passengersタグ(上に乗るエンティティを書く)**
*   HealFタグ(HPを指定) → **Healthタグ**
*   Equipment (装備品を指定) → **HandItemsタグとArmorItemsタグ**
*   DropChances(装備品のドロップ確率を指定) →　**HandDropChancesタグとArmorDropChancesタグ**

これは大変。**従来のコマンドのままでは、乗るMob/HP/装備品が指定できなくなってしまうのです。**「Riding」「Equipment」「HealF」だなんて、これまで何度使ったことでしょう… バージョン1.9はコマンドの要素は嬉しいことばかりだと思っていたら、裏で大変な仕様変更が行われていたんですね。

## Summonコマンドを1.9の形式に変換するツールの紹介

配布ワールドやサーバーのコマンドを、**手動で1.9形式に書き換えるのは大変。**しかも**「Passengers」「HandItems」「ArmorItems」「HandDropChances」「ArmorDropChances」**など、新しいNBTタグの書き方を覚えないといけないし… 私にはそれらの新タグを解説する自信がありません(というか面倒です)ので、**いつものようにツールに頼っちゃいましょう!**

Summonコマンドを1.9の形式に変換するツールの紹介

[![summonコマンド変換ツール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100300.jpg)  
//bimbimma.com/summonconverter/](http://bimbimma.com/summonconverter/)

おなじみの高機能コマンド生成ツール「MCStacker」と同じ方が制作されたツールです。

![Summon Command Converterの使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100437.jpg)

使い方は説明するまでもないほど簡単。**1.8形式のコマンドを上に貼り付ければ、即座に変換されて1.9仕様のコマンドが表示されます。**コピーしてCtrl+Vキーでコマンドブロックに貼り付けて使いましょう。

![1.9でも装備やゾンビ馬付きで召喚できた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100429.png)

うおお! **バージョン1.9でも、ゾンビ馬+装備付きゾンビを召喚できました。**HPもドロップ確率もそのままです。しっかし1.9の攻撃システムでは中々の強敵になりそうですね… 配布ワールドを制作したいる方は、1.9で少しバランス調整が必要かも。

## バージョン1.9でも、Summonコマンドの作成にはMCStackerが便利!

バージョン1.9になっても、**やはりSummonコマンドを手書きするのは大変です。**以前よりタグの種類も増えましたし。やっぱりコマンド生成ツールに頼るのが楽です。ということでやっぱり「MCStacker」。

1.9対応の高機能コマンド生成ツール「MCStacker」

[![MCStacker](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100303.jpg)  
http://mcstacker.bimbimma.com/](http://mcstacker.bimbimma.com/)

![バージョン1.9モードに切り替え](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090804.jpg)

右上の**「Minecraft Version」を「1.9 SnapShot」(将来は”1.9″になるでしょう)に**切り替えれば、生成するコマンドは1.9仕様の新形式になります。**既に1.8形式で作ってしまったコマンドも、ここを切り替えるだけで変換してくれます。**

![Mobを重ねるには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111638.jpg)

Mobを上下に積み重ねる時は、ちょっと分かりにくいですが**「Add Entity」の+ボタン**を押します。矢印ボタンで直感的にエンティティの上下関係を動かせるのが結構便利。

「MCStacker」の使い方をもっと知りたい方は

[![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135321.png)  
//exr-nap.sakura.ne.jp/www.napoan.com/42534067/](https://www.napoan.com/42534067/)

MCStackerでは、他にも**giveコマンドを生成したり、コマンドをWeb上に保存して共有したり**など便利な機能が盛り沢山です。詳しい使い方は▲の記事で解説していますので、英語でよく分からないという方は是非お読み下さい。

---

![1.9のコマンド解説、頑張ります](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095641.png)

Minecraft1.9には、**まだ解説できていない配布ワールド作成やコマンドに関する新機能が盛り沢山です。**最近PEの記事ばかりですが、やっぱり私はコマンドが好きですのでなんとかコマンド解説を充実させるべく頑張ります。「この機能を解説して欲しい」などコメント待ってます。
