---
title: Mobをジャンプさせる方法 (かつAI無効) – 配布ワールド作成に[コマンド解説 for1.8]
---

[![Mobをジャンプさせる方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208155749.png)](#b/e/be92667b.png "ジャンプ")  
Mobを**自由にジャンプ**させたりできたら楽しそうですよね。  
今回は、Minecraft 1.8で**MobのAIを無効化しつつ動かす**方法を解説します。  
**「Motion」タグを付けただけじゃ動かせません。あるエンティティが活躍します。**  
**あなたの配布ワールドが、もっと楽しくなりますように。** 

## Mobをジャンプさせる方法 ~動きを止めたMobを動かす~

![Eqyeb6un](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208074751.gif)  
**クリーパーや村人などのMobが、楽しくぴょんぴょんする….**  
そんな仕掛けがあったらプレイヤーの心もぴょんぴょんしてきますね。

### AIを無効化したMobはジャンプできない!?

という事で、まずはジャンプさせるMobを召喚しましょう。  
**この時、勝手に動かないようにするためにAIを無効化しています。  
**![AIを無効化した村人を召喚](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180540.png)

**AIを無効化した「JumpV」村人を召喚するコマンド  
/summon Villager ~ ~1 ~ {NoAI:1b,CustomName:“JumpV”,CustomNameVisible:1}**

**「NoAI:1b」でAIを無効化し、勝手にどこかへ行ってしまわないようにしています。**  
また、後でジャンプさせる時のために**「JumpV」**という名前もつけています。  
**鳴き声を消したい**場合はMobに**「Silent:1b」**を付けて下さい。  
また**無敵状態**にしたい場合は**「Invulnerable:1b」**を付けて下さい。  
(この時点で**Mobの向きが気に入らない**場合、**「Rotation:\[90f\]」**などを追記して調整して下さい。)

そしてこいつをジャンプさせるわけですが、**この時点でお察しになられた方もいるでしょう。**  
**_上へ動かす「Motion」タグをentitydataコマンドで設定すればジャンプするんじゃないか?_**

**「Motion」タグとは、Mobに動きをつけるタグです。** これをentitydataコマンドで**後から村人に設定すれば、ジャンプしてくれるのでは….?**

**「JumpV」村人をジャンプさせられるはずのコマンド  
/entitydata @e\[type=Villager,name=JumpV\] **{Motion:\[0.0,0.5,0.0\]}****

このコマンドでは、**「JumpV」**の村人を**上へ0.5の力で持ち上げられるはず**です。

[![14 - コピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208141821.png)](#6/0/605fa98d.png "14 - コピー")  
**しかし、動きません。**  
なんと**「NoAI」でAIを無効化して動きを止めたMobには、Motionが効かないのです。**  
これじゃ困りますね。**どうすれば、AIを無効化したMobをジャンプさせられるのでしょうか。**

### 防具立てとtpコマンドで連動させれば解決!

**そこで、あるエンティティが役に立ちます。**  
**「A r m o r S t a n d -BOGUTATE-」**の出番です。**要するに防具立てを使います。**  
[![32 - コピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208164633.png)](#e/4/e471a1ec.png "32 - コピー")

**透明化した「JumpAS」防具立てを召喚するコマンド  
/summon armor\_stand ~ ~1 ~ {Invisible:1b,CustomName:“JumpAS”,CustomNameVisible:1}**

**※名前を表示していますが、見えなくしたい場合は「CustomNameVisible」を0にして下さい。**

次に、下図のように**クロック回路を組み立てて起動**します。  
[![tpコマンドを実効するためのクロック回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144415.png)](#7/7/77a69e17.png "37 - コピー")  
クロック回路は、これまで何度も使った**コマブロ式最速クロック**です。  
**間にレッドストーンを置けば起動します。**その隣の**「X」**には以下のコマンドを入力します。

**「X」のコマンドブロックに入力するコマンド (常時実行)  
/tp @e\[type=Villager,name=JumpV,c=1\] @e\[type=armor\_stand,name=JumpAS,c=1\]**

**「JumpV」**の村人を、常に**「JumpAS」**のアマスタに**テレポートさせます。**  
**つまり、防具立てが動けば村人が一緒に動くようになるのです。**

準備は整いました。**村人をジャンプさせてみましょう。**  
[![防具立てを動かしてジャンプさせる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132608.png)](#2/a/2a66bbcc.png "59")

**「JumpAS」防具立てをジャンプさせ、間接的にMobをジャンプさせるコマンド  
/entitydata @e\[type=armor\_stand,name=JumpAS,c=1\] {Motion:\[0.0,0.5,0.0\]}**

この時、**「Motion:\[0.0,0.5,0.0\]」**と0.5だけ上に上げてますが、**これだけでかなりジャンプします。**  
**「5」とか設定しちゃうと空の彼方へ消えてしまいそうなほど飛びます。**

[![55 - コピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133913.png)](#3/c/3cc92cb5.png "55 - コピー")  
他のMobをジャンプさせたい場合は、まず**オリジナルの名前でMobを召喚します。**  
そして先ほどの「X」のコマンドの内容を、**Mobの種類や名前に合ったものに変更します。**  
**例えば、「JumpC」のクリーパーを召喚した場合はXに  
以下のコマンドを入力します。**

**「X」のコマンドブロックに入力するコマンド (常時実行)  
/tp @e\[type=Creeper,name=JumpC,c=1\] @e\[type=armor\_stand,name=JumpAS-C,c=1\]**

**※複数のMobをジャンプさせる場合、それぞれ別の名前に設定し、別の名前の防具立てを準備して下さい。  
また**tpコマンドのコマンドブロックもジャンプさせるMobの数だけ用意して下さい。****

## 色々なエンティティをジャンプさせてみた

さて、色々なMobをジャンプさせていきたいわけですが、**ジャンプできないMobは居るのでしょうか。  
**  
[![三大奇形Mobのジャンプ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133711.png)](#3/a/3a5eab8b.png "38")  
**ガーディアン、ブレイズ、エンダーマン**という3大奇形Mobは**見事にジャンプできてしまいました。**  
**ガーディアンはポケモンの「はねる」のようですね。**

[![49 - コピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150059.png)](#8/6/869fc257.png "49 - コピー")  
ウィザーさんは元気にジャンプしてくれました。  
**しかしエンダードラゴンはうんともすんとも言わず**…. 操るのはまだ早いようです。

[![動かないエンティティをジャンプさせる場合](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151752.png)](#9/7/979fac1b.png "45 - コピー")  
**アイテムやトロッコのような元から動かないエンティティ**をジャンプさせる場合、**防具立てやクロック回路などは全く必要ありません。 以下のコマンドだけ実行すればジャンプしてくれます。**

**エンティティをジャンプさせる共通のコマンド  
/entitydata @e\[type=エンティティID,name=名前\] **{Motion:\[0.0,0.5,0.0\]}****

基本的にはこれでMobが動いてくれます。  
**動くエンティティには防具立てとクロック回路、動かないエンティティには一つのコマンド**だけでいいのです。

[![39](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150510.png)](#8/a/8a5d274f.png "39")  
しっかしこのジャンプさせるコマンド、特に使い時が思い付きませんね….  
**ダンジョンクリアのお祭とか、お化け屋敷ワールドとかに良いんじゃないでしょうか。**

## 覚えておきたい! 今回の要点まとめ

色々ごちゃごちゃしてしまいましたので、要点だけまとめます。

*   **NoAI**で動かなくしたエンティティに**Motionタグは効かない!**
*   **エンティティをダミーの防具立てに常時テレポートさせれば解決!**
*   **動かないエンティティは「Motion」タグ**でジャンプさせる!
*   **鳴き声を消す**時は**「Silent:1b」**、**無敵**にする時は**「Invulnerable:1b」**
*   Mobを**回転**させたい時は**「Rotation:\[角度f\]」**で設定!

## 参考にさせて頂いたページ様

[**NEW NBT TAG: Marker** | Minecraft Mapmaking – YouTube](http://www.youtube.com/watch?v=Vgc_tZ2GHvg)  
_(↑アマスタと連動させるアイデアを頂きました。)_  
[**Commands** – Minecraft Wiki](http://minecraft.gamepedia.com/Commands)  
[**Chunk format** – Minecraft Wiki](http://minecraft.gamepedia.com/Chunk_format)
