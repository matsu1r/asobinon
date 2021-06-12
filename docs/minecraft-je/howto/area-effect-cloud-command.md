---
title: (8/25更新)好きな範囲にダメージなどの効果を設置できる、AreaEffectCloudのコマンドと使い方を解説。
---

![AreaEffectCloudのコマンド解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104327.png)

例えば**触れるとダメージを喰らう毒の霧や、指定した回数だけ回復できる回復スポットだとか…** バージョン1.9では、配布ワールド制作に便利な新エンティティ「AreaEffectCloud」が追加されました。「残留ポーション」から出てくる効果付きのパーティクルのことです。今回は、**ポーション効果や時間などをカスタマイズしたAreaEffectCloudを設置するコマンドを解説**します。

**\[8/25追記\] バージョン1.10で追加された新NBTタグを使って、blockcrack/blockdust/iconcrackパーティクルの種類を指定する方法を追記しました。**

## AreaEffectCloudって何? 配布ワールド作成に使える使用例をいくつか

![AreaEffectCloudとはこれのこと](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122359.png)

1.9の新アイテム「残留ポーション」は、エンダードラゴンのドラゴンブレスを採取してポーションに加える事で作れます。この**効果付きパーティクルの部分が「AreaEffectCloud」というエンティティ**なんです。

![ダンジョン系ワールドでの使用例1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091530.png)

そしてこのAreaEffectCloud(略してAEC)は、NBTタグでパーティクルや効果の種類、大きさなどを細かく設定できるんです。**ダメージを喰らったり毒状態になってしまったりなど、ダンジョン系の配布ワールドの制作にピッタリ**なトラップを作れるわけです。

さらに**「使うと半径を変化させる」機能を使えば、使用回数に制限が付いたAECも作れます。**例えば3回だけ回復させてくれる回復スポットだとか、一度だけ様々なポーション効果を与えてくれる泉だとか…

## MCStackerを使ってAreaEffectCloudのコマンドを作成しよう

1.9対応の高機能コマンド生成ツール「MCStacker」

[![MCStacker](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100303.jpg)  
http://mcstacker.bimbimma.com/](http://mcstacker.bimbimma.com/)

最近頼りまくりですが、今回もMCStackerでコマンドを生成してみましょう。

![summonコマンドでAECを選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090311.jpg)

**summonコマンドモードで「AreaEffectCloud」を選択**し、必要ならば名前を入力します。(右のHide Nameにチェックを入れれば名前は隠せます。)加えてTag欄に[タグ](https://www.napoan.com/howtouse-tag-system/)を入力して分類すると後々便利ですね。

### パーティクルや範囲、秒数、効果などの設定項目を解説

![パーティクルやその他色々の設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102732.jpg)

それではパーティクルや大きさ、秒数などを設定していきます。

項目名

説明

Particle

パーティクルの種類を選びます。公式Wikiの[パーティクル一覧](http://minecraft.gamepedia.com/Particles#Types_of_particles)をご参照下さい。

Reapplication Delay

一度効果を与えた後、次に効果を与えるまでの間隔をtickで指定します。

Radius

AECの大きさを**半径のブロック数**で指定します。**入力しないとAEC自体が表示されません。**

Radius Per Tick

**1tickでどれくらいAECの大きさを変化させるかの数値**を入力します。マイナスの値にすればだんだん小さくなります。例えば\-0.1にした場合、1秒で2ブロック分半径が小さくなります。

Radius On Use

**効果を与えた際にどれくらいAECの大きさを変化させるか**の数値を入力します。プラスの値なら大きく、マイナスの値なら小さくします。

Duration

AECが残る時間をtickで指定します。**32768にすれば永久に残ります。**

Duration On Use

Wikiの解説によると「不明」とのことで、特に意味はないようです。

Age

**設置時にどれだけ時間が経過したことにするか**、をtickで指定します。

Wait Time

設置されてから効果が付与されるまでの待ち時間をtickで指定します。**Ageが指定してある場合はその分待ち時間は短くなります。**

Color

チェックを入れると好きな色を選べます。しかし私が確認した限りでは**mobSpellパーティクル以外には効きません**のでご注意下さい。

![エルダーガーディアン最終形態](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091534.png)

ちなみにParticle:でmobappearanceを選んでしまうとエルダーガーディアンのグロ画像最終形態を嫌でも見せられるのでご注意下さい。これってパーティクルだったんですね…

![付与するポーション効果の設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090146.jpg)

次にAECから付与されるステータスエフェクト(ポーション効果)を設定していきます。**Select Potion Typeのプルダウンメニューは無視して、下のStatus Effectsにチェックを付けて**効果を選んで下さい。

効果名

日本語訳

Speed

移動速度上昇

Slowness

移動速度低下

Haste

採掘速度上昇

Mining Fatigue

採掘速度低下

Strength

攻撃力上昇

Instant Health

即時回復

Instant Damage

即時ダメージ

Jump Boost

跳躍力上昇

Nausea

吐き気

Regeneration

再生能力

Resistance

耐性

Fire Resistance

火炎耐性

Water Breathing

水中呼吸

Invisibility

透明化

Blindness

盲目

Night Vision

暗視

Hunger

空腹

Weakness

弱体化

Poison

毒

Wither

枯渇 (**1.8までは”ウィザー”**だった)

Health Boost

体力増強

Absorption

衝撃吸収

Saturation

満腹度回復

Glowing(1.9)

発光

Levitation(1.9)

浮遊

Luck(1.9)

幸運

Bad Luck(1.9)

不運

それぞれの効果には**Amplifier(強さのレベル)**と**Duration(秒数)**が指定でき、右の**Hide particles**にチェックを付ければパーティクルを非表示に出来ます。

作成例: 1秒おきにダメージを喰らうAEC

![作成例: 1秒おきにダメージを喰らうAEC](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091537.png)  
**/summon AreaEffectCloud ~ ~1 ~ {CustomName:”一定間隔でダメージを与える”,CustomNameVisible:1,Particle:witchMagic,ReapplicationDelay:20,Radius:3f,Duration:32768,Effects:\[{Id:7,Amplifier:0,Duration:20}\]}**  
▲ReapplicationDelayを20にすることで20tick、すなわち1秒間隔で効果を与えます。

### 効果を与えると小さくなる(使える回数が限られた)AreaEffectCloudの作り方

![AECの効果が付与される回数を制限するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110842.png)

例えば**「三回だけ役立つ効果が付与される」**だとか、AreaEffectCloudから効果が付与される回数を制限するにはどうすればいいのでしょうか。答えは簡単。**使う度にAECを小さくして消してしまえばいい**のです。

![Radius÷RadiusOnUse=使える回数](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101511.jpg)

MCstackerの設定画面の**Radius On Useに、マイナスの数値を入力します。**すると**効果が付与される度に半径がその分小さくなります。**つまりRadius÷(-RadiusOnUse)=使える回数なんです。

## \[8/25追記\] brockdust/brockcrack/iconcrackのパーティクルの種類を指定するには

![blockdust等の種類を指定するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101649.png)

さて、AreaEffectCloudには様々なパーティクルを設定することができますが、**追加でNBTタグを書いて、アイテム/ブロックの種類を指定しないと表示されないパーティクルがあります。**それは以下の通り。

*   blockcrack : ブロックを破壊した際のパーティクル
*   blockdust : 本来は防具立てや砂が壊れる際のパーティクル。コマンドなら様々なブロックを指定可能
*   iconcrack : 食べる時、投げた卵、スプラッシュポーション、エンダーアイ、道具が壊れた際に出るパーティクル。コマンドならどんなアイテムでも出せる

以下、それぞれのパーティクルのアイテム指定方法をまとめました。ちなみに**このアイテム指定機能はバージョン1.10以降でないと使えません。**

また、**2016年8月25日現在MCStackerがこのNBTタグに対応していない**ので、手動で追記する必要があります。

blockcrackパーティクルでブロックの種類を指定するNBTタグの書き方

![blockcrackの指定方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104911.png)  
**{ParticleParam1:ブロックID+データ値\*4096}**  
例:赤色の堅焼き粘土の場合、159+14\*4096=57503 {ParticleParam1:57503}

blockdustパーティクルでブロックの種類を指定するNBTタグの書き方

![blockdustの種類の指定方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105538.png)  
**{ParticleParam1:ブロックID}**  
例:ダイヤモンドブロックの場合:{ParticleParam1:57}

iconcrackパーティクルでアイテムの種類を指定するNBTタグの書き方

![iconcrackの種類の指定方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122834.png)  
**{ParticleParam1:アイテムID,ParticleParam2:データ値}**  
例:チューリップの場合:{ParticleParam1:38,ParticleParam2:4}

実際のコマンドは、**/summon AreaEffectCloud ~ ~1 ~ {Particle:iconcrack,Radius:5f,Duration:32768,ParticleParam1:38,ParticleParam2:4}**といった感じになります。このNBTタグ名もうちょっと短くなりませんかね…

## AreaEffectCloudを削除したり、後からパーティクルなどを変更するには

### AreaEffectCloudを削除するkillコマンド

AreaEffectCloudはエンティティなので、**削除**する際はkillコマンドを使います。

AreaEffectCloudを削除するコマンド

*   **最寄りの1つを削除する場合:**  
    **/kill @e\[type=AreaEffectCloud,c=1\]**
*   **名前を指定して削除する場合:**  
    **/kill @e\[type=AreaEffectCloud,name=名前\]**  
    ▲名前が日本語の場合はエラーになるのでご注意下さい。
*   **全て削除してしまう場合:**  
    **/kill @e\[type=AreaEffectCloud\]**

### 後からAreaEffectCloudの設定を変更するentitydataコマンド

パーティクルが気に入らないだとか、大きさを変えたいだとか、**後から色々設定を変更したい時はentitydataコマンドを使いましょう。**使い方はとっても簡単。

例1: 最寄りのAreaEffectCloudのパーティクルを後から変更するコマンド

![entitydataコマンドでパーティクル等を変更しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111103.png)  
**/entitydata @e\[type=AreaEffectCloud,c=1\] {Particle:パーティクル名}**

例2: ボタンを押すと最寄りのAECの成長が始まり、もう1つのボタンを押すと成長が止まる

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092234.gif)  
成長を開始する:**/entitydata @e\[type=AreaEffectCloud,c=1\] {RadiusPerTick:0.1f}**  
成長を止める:**/entitydata @e\[type=AreaEffectCloud,c=1\] {RadiusPerTick:0f}**

MCStackerで設定したRadius、Ageなど、様々な値を弄れます。例えばDurationを32767以下に設定しておいて、**後からAgeを設定してAEC内の時間を進めてAECの消滅を早めることだってできます。**entitydataコマンドをうまく使って、変幻自在にAECを操りましょう。

## 参考にさせて頂いたページ様

**Chunk format – Minecraft Wiki**  
[http://minecraft.gamepedia.com/Chunk\_format](http://minecraft.gamepedia.com/Chunk_format#Other)

---

**「○○についてまとめてほしい/解説してほしい」**などのご意見ご感想、コメント欄や[Twitter](https://twitter.com/napoan)でお待ちしています。
