
---
title: スポナーのカスタマイズを徹底解説。複数種類のMobの召喚 / 装備品等の設定まで解説
description: 配布ワールド(特に戦闘/RPG系)の制作で大いに役立つのが「スポナー」。コマンドを使えば、出てくるMobの装備品や能力を自由にカスタマイズできます。 しかしスポーンブロックのコマンドは非常に長く、しかも1.9から仕様が変わって色々面倒… ということで今回は、「MCStacker」を使って簡単にスポナーを極限までカスタマイズする手順を解説します。今回解説する方法を使えば、1つのスポナーで複数種類のエンティティを出現させられます。
---

![スポナーを極限までカスタマイズ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091049.png)

配布ワールド(特に戦闘/RPG系)の制作で大いに役立つのが**「スポナー」**。コマンドを使えば、**出てくるMobの装備品や能力を自由にカスタマイズできます。** しかしスポーンブロックのコマンドは非常に長く、**しかも1.9から仕様が変わって色々面倒…** ということで今回は、「MCStacker」を使って簡単にスポナーを極限までカスタマイズする手順を解説します。今回解説する方法を使えば、**1つのスポナーで複数種類のエンティティを出現させられます。**

バージョン1.9の、コマンドや配布ワールド作成に関する新機能/変更点まとめ

[![1.9のコマンド関連まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122409.png)  
https://www.napoan.com/pcversion19-command-guide/](https://www.napoan.com/pcversion19-command-guide/)  
▲バージョン1.9はコマンドに関する新要素/仕様変更が盛り沢山。

※この記事は2014年9月23日に公開した記事の代替として作成しました。

## 1.9対応! 簡単にスポナーのコマンドを作成したいなら「MCStacker」を使おう

![スポナーって便利ですよね](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091449.png)

Mobを定期的に湧かせられるスポナー。RPG/戦闘系の配布ワールド([AcrossTheTime](//exr-nap.sakura.ne.jp/www.napoan.com/tag/AcrossTheTime/)など)に必ずと言っていいほど使われていますよね。ご存知の通り、コマンドを使えば**出てくるMobの種類、装備品、能力などを多岐に渡ってカスタマイズできます。**

![1.9でEntityIDタグが非推奨に](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101043.png)

もう御存知の方もいるかもしれませんが、バージョン1.9で仕様が変わり、「EntityID」タグでエンティティの種類を指定できなくなってしまいました。単体なら**SpawnData**、複数種類なら**SpawnPotentials**タグに召喚するエンティティの情報を書かなければいけません。

バージョン1.9のスポナーのコマンドの仕様変更

1.8まで  
**/setblock ~ ~1 ~ minecraft:mob\_spawner 0 replace {EntityId:”Zombie”}**

1.9から  
**/setblock ~ ~1 ~ minecraft:mob\_spawner 0 replace {SpawnData:{id:”Zombie”}}**

▲例えばこんな感じで、同じ内容でも少し書くのが面倒になっちゃいました…

1.9対応の高機能コマンド生成ツール「MCStacker」

[![MCStacker](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100303.jpg)  
http://mcstacker.bimbimma.com/](http://mcstacker.bimbimma.com/)

そこで登場するのが**MCstacker**。これならリアルタイムでサクサクとコマンドを生成してくれます。スポナーを極限までカスタマイズするために、今回も手助けしてもらいましょう。

![最初からspawnerモードは使いません](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105107.jpg)

MCStackerには「Spawner」モードが用意されていますが、**今回はあえて最初からSpawnerモードを使いません。**「複数種類のMobを出す」ためには、まずはsummonコマンドから作成する必要があるんです。

## まずは召喚させたいMobのsummonコマンドを作成しよう

![summonモードにしてバージョン選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104525.jpg)

MCStackerにアクセスしたら、「Command Type:」を**「Summon」**にして、右の選択肢から**バージョンを選びましょう。**

![summonコマンドの設定項目](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111722.jpg)

いつものように好きなMobを選んでカスタマイズしていきましょう。以下によく使いそうな項目の簡単な説明をまとめました。

項目名

説明

項目名

説明

Entity

エンティティの種類を選びます。

Name

名前を設定します。

Persistence Required

チェックするとデスポーンしなくなります。

Tags (1.9)

1.9の新機能、タグを設定します。タグ機能の詳しい使い方は[こちらの記事](https://www.napoan.com/howtouse-tag-system/)で解説しています。

No AI

チェックするとAIが無効化されて動きが止まります。

Holding

利き手に持つアイテムを指定します。

Silent

チェックすると音を発しなくなります。

L Drop Chance

そのアイテムのドロップ確率を指定します。

HealF/Health

HPを数値で指定します。

L Count

そのアイテムの量を指定します。

Max Health

最大HPです。

L Name

そのアイテムの名前を設定します。

Movement Speed

移動速度です。

L Lore

そのアイテムの説明文を設定します。

Attack Damage

攻撃力です。

L Can Place On

そのブロックと隣接して置けるブロックを指定します。

Invulnerable

無敵にします(クリエイティブでは攻撃できます)。詳しい使い方は[こちらの記事](https://www.napoan.com/cannot-kill-entity/)で解説しています。

L Can Destroy

そのアイテムを使って壊せるブロックを指定します。

Left Handed (1.9)

左利きにします。

L Hide Flags

攻撃力などの表示を隠します。詳しい使い方は[こちらの記事](https://www.napoan.com/43851879/)で解説しています。

Team (1.9)

所属チームを設定します。

L Attribute Modifiers

チェックすると、そのアイテムを持った際の効果を設定できるようになります。

Death Loot Table (1.9)

1.9の新機能、「Loot table」を指定します。

Offhand (1.9)

オフハンド(利き手と反対の手)に持つアイテムを設定します。

Status Effects

チェックするとポーション効果を設定できるようになります。

Head / Body / Leg / Boot

それぞれ、頭、体、脚、足に付けるアイテムを設定します。装備品でなくても構いません。

![生成されたsummonコマンドをコピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123432.jpg)

下の欄に自動的にsummonコマンドが生成されますので、**コピー**しましょう。

## 一つのスポナーに複数のMobを設定するには。summonコマンドと位置を入力してコマンド生成!

ここからは、先程作成したsummonコマンドをスポナーの設定画面に入力して「Spawn Potential」に変換する作業を行います。なんとMCStackerは、**summonコマンドを合成してスポナーのコマンドを作ってくれるんです。**

![setblockモードでスポナーを選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124116.jpg)

MCStacker左上のモード選択から、****Spawner**ではなく**Set Block**モードに切り替えます。**そしてBlock欄にmob\_spawnerと入力すればスポナーが選択されるはずです。

![summonコマンドを貼り付け](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124331.jpg)

すると下にこんなフォームが出現するので、**「Summon Command」欄に先程作成したsummonコマンドを貼り付けて下さい。**するとsummonコマンドに合わせてスポナーのコマンドを自動で生成してくれます。

![出現するエンティティを追加するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121629.jpg)

さらに、左上の****Add Spawn Potential**をクリックすれば項目が増え、summonコマンドを追加で入力できるように**なります。好きなだけsummonコマンドを入力したら、左の**Weight**の値で確率を調節して下さい。

![Spawn Positionについて](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105928.png)

Summonコマンドを入力する欄の右に、「Spawn Position」という欄がありますが、ここに入力した座標は**相対座標ではなく絶対座標として扱われる**のでご注意下さい。**指定した座標ぴったりに必ずスポーンします。**

\[2016年3月24日追記\] **summonコマンドにHandItemsタグかArmorItemsタグが含まれる場合、座標がちゃんと設定できない不具合**があるようです。(一応報告済み) 座標の設定が効かない場合はコマンド内の「Pos」タグの位置を適切な位置に移動しましょう。

また、エンティティの項目を消すにはSpawn Position右の**Remove**をクリックします。

## スポーン間隔や範囲など、スポナー自体の設定項目の解説

![スポナーのその他の設定項目](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111725.jpg)

スポーンさせるMobの欄の上には、スポナー自体の設定項目が用意されています。

項目名

説明

Spawn Count

一度にスポーンするエンティティの数です。

Spawn Range

スポーンする範囲の半径です。

Required Player Range

この半径の範囲にプレイヤーがいないとスポナーが動かない、という数値です。

Max Nearby Entities

(SpawnRange\*2+1)x(SpawnRange\*2+1)x8ブロックの範囲に、この数のエンティティがいればスポーンが止まります。

Delay

プレイヤーが範囲に入り、スポナーが起動してからスポーンされるまでの遅延をtickで指定します。20で1秒です。

Min Spawn Delay

スポーンの間隔の最小値をtickで指定します。

Max Spawn Delay

スポーンの間隔の最大値をtickで指定します。

![スポナーでも忘れずにバージョン選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105806.jpg)

Summonコマンドを作った時と同様、スポナーのコマンドを作る際もバージョン選択を忘れずに。**SummonとSetblock、どちらも1.9にしないと1.9では使えません。**

![最後までお読み頂きありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091453.png)

理想のスポナーは作成できましたか。Summonコマンドを合成してスポナーのコマンドを生成するだなんて、MCStackerはいつも私を驚かせてくれます。他にもMCStackerには、**コマンドを保存/共有したりなど便利な機能が盛り沢山。**さらに使い方を知りたい方は是非[こちらの記事](https://www.napoan.com/42534067/)をお読み下さい。最後までお読み頂きありがとうございました。

## 参考にさせて頂いたページ様

**Chunk format – Minecraft Wiki**  
[http://minecraft.gamepedia.com/Chunk\_format#Block\_entity\_format](http://minecraft.gamepedia.com/Chunk_format#Block_entity_format)

---

**「○○についてまとめてほしい/解説してほしい」**などのご意見ご感想、コメント欄や[Twitter](https://twitter.com/napoan)でお待ちしています。
