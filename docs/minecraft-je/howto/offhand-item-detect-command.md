
---
title: Fキーを押すと何か起こるアイテムの作り方 – オフハンドスロットにアイテムが入った瞬間を検知するには
description: バージョン1.9で追加された「オフハンドスロット」。Fキーで手持ちアイテムをオフハンドスロットと入れ替えられることは皆さんご存知ですよね。今回はあの持ち替えを利用した、「Fキーを押すと何か起こるアイテム」の作り方を解説します。例えば「Fキーでファイアボールを召喚」「Fキーで周囲に爆発を起こす」など配布ワールドの作成にピッタリな仕掛けが作れます。マルチプレイにももちろん対応。新しいタイプの機能付きアイテムを今度こそ作ってみませんか。
---

![Fキーを押すと何か起こるアイテムの作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103009.png)

バージョン1.9で追加された**「オフハンドスロット」**。Fキーで手持ちアイテムをオフハンドスロットと入れ替えられることは皆さんご存知ですよね。今回はあの持ち替えを利用した、**「Fキーを押すと何か起こるアイテム」の作り方を解説します。**例えば**「Fキーでファイアボールを召喚」「Fキーで周囲に爆発を起こす」**など配布ワールドの作成にピッタリな仕掛けが作れます。**マルチプレイにももちろん対応。**新しいタイプの機能付きアイテムを今度こそ作ってみませんか。

\## Fキーで何か起こるアイテムとは? 作成例を紹介 !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090142.png)

こちらの**「魔法のダイヤモンド」**というアイテムは、Fキーを押すと魔法が発動したっぽい音が鳴り、**頭上にファイアボールが召喚されます。**

![周囲のMobにダメージを与える「斬撃のハサミ」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124341.png)

この「斬撃のハサミ」を持ってFキーを押すと、**Sweep攻撃のパーティクルを出し、同時に周囲のMobにダメージを与えます。**確実に範囲攻撃が出来るアイテム、ってことです。

![爆発を巻き起こす「爆発のファイアチャージ」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104149.png)

この「爆発のファイアチャージ」を持ってFキーを押すと、自分を中心に爆発を引き起こします。死にそう? 安心して下さい、**爆発の直前に自分だけ無敵になる**仕様にしています。

![マルチプレイに対応しています](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123401.png)

装置はこんな感じ。**常時実行するコマンドはそれぞれ4個、5個、4個で結構コンパクト**にしたつもりです。([右クリック検知](https://www.napoan.com/right-click-item/)に比べれば相当少ないですよね)そして**マルチプレイにも対応しています。**PvPで活躍する便利アイテムを作ってみましょう!

\## 紹介した3つのアイテムの仕組みとコマンドを解説 ### スコアボードとアイテムを用意しよう まずは動作に必要なスコアボードのオブジェクトとアイテムを用意しましょう。

「魔法のダイヤモンド」を作成するために必要なスコアボードとアイテムを用意するコマンド

**/scoreboard objectives add offhandMagicDia dummy**  
**/give @p diamond 1 0 {display:{Name:”魔法のダイヤモンド”,Lore:\[“Fキーを押して使う”\]}}**

「斬撃のハサミ」を作成するために必要なスコアボードとアイテムを用意するコマンド

**/scoreboard objectives add offhandZangeki dummy**  
**/give @p minecraft:shears 1 0 {display:{Name:”斬撃のハサミ”,Lore:\[“Fキーを押して使う”\]}}**

「爆発のファイアチャージ」を作成するために必要なスコアボードとアイテムを用意するコマンド

**/scoreboard objectives add offhandFC dummy**  
**/give @p minecraft:fire\_charge 1 0 {display:{Name:”爆発のファイアチャージ”,Lore:\[“Fキーを押して使う”\]}}**

### Fキーを押すとファイアボールが出てくる仕組みとコマンドを解説

![魔法のダイヤモンドを動作させるコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123122.png)

左から4つコマンドブロックを繋げて設置します。**左端だけレッドストーン信号が必要モード**にして、オンオフ可能にしています。1,2,3,4それぞれのコマンドは以下の通りです:

「1」

**Repeat(リピート)****Unconditional(無条件)****Needs Redstone(レッドストーン信号が必要)**

**/scoreboard players add @a\[score\_offhandMagicDia\=1\] offhandMagicDia 1 {Inventory:\[{Slot:-106b,id:”minecraft:diamond”,tag:{display:{Name:”魔法のダイヤモンド”,Lore:\[“Fキーを押して使う”\]}}}\]}**  
「魔法のダイヤモンド」を**オフハンドスロット(Slot:-106b)**にセットすると、**offhandMagicDia**のスコアが1づつ増えていき、2で止まります。(スコアが1以下なら増やすので)

「2」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players set @a offhandMagicDia 0 {SelectedItem:{id:”minecraft:diamond”,tag:{display:{Name:”魔法のダイヤモンド”,Lore:\[“Fキーを押して使う”\]}}}}**  
オフハンドに魔法のダイヤがある状態でもう一度Fキーを押すと、メインハンドにダイヤが戻ってきます。(メインハンドのアイテムはSelectedItemタグで判定できる) 戻ってきたら**offhandMagicDiaの値を0にセット**します。

「3」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/execute @a\[score\_offhandMagicDia\_min=1,score\_offhandMagicDia\=1\] ~ ~ ~ summon Fireball ~ ~2 ~ {direction:\[0.0,0.0,0.0\],ExplosionPower:0}**  
「1」のコマンドによって**offhandMagicDiaの値が0→2に増やされる過程で、一瞬だけ値が「1」になります。**そのタイミングでファイアボールを召喚します。

「4」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/playsound entity.zombie.infect player @a\[score\_offhandMagicDia\_min=1,score\_offhandMagicDia\=1\] ~ ~ ~ _5.0_**  
▲「player」はサウンドのカテゴリを示しています。(詳しくは[こちらの解説](https://www.napoan.com/pcversion19-command-guide/2/#playsound-source)へどうぞ) 代わりに「master」「music」「record」「weather」「block」「hostile」「neutral」「ambient」「voice」も使えます。それぞれサウンド設定の音のカテゴリと対応しています。  
「3」と同様のタイミングで、playsoundコマンドで**村人ゾンビが治療される時の効果音を_音量5.0で_鳴らします。**

![Fキーを押すと何か起こるアイテムの仕組み1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102632.png)

仕組みはこんな感じです。オフハンドスロットに該当するアイテムがあると**offhandMagicDia**の値が増加しますが、**2で止まる**ようにしています。その途中で**一瞬だけ「1」になるので、「offhandMagicDiaが1以上1以下の人」をターゲットに**executeコマンドでファイアボールを召喚させているんです。

\### Fキーを押すとパーティクルが出てダメージを与える仕組みとコマンドを解説 !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090554.png)

次は「斬撃のハサミ」を動作させるコマンドを入力していきましょう。先程と同様、左端だけ**レッドストーン信号が必要**モードにしてオンオフ可能にしています。

「5」

**Repeat(リピート)****Unconditional(無条件)****Needs Redstone(レッドストーン信号が必要)**

**/scoreboard players add @a\[score\_offhandZangeki\=1\] offhandZangeki 1 {Inventory:\[{Slot:-106b,id:”minecraft:shears”,tag:{display:{Name:”斬撃のハサミ”,Lore:\[“Fキーを押して使う”\]}}}\]}**  
「斬撃のハサミ」を**オフハンドスロット(Slot:-106b)**にセットすると、**offhandZangeki**のスコアが1づつ増えていき、2で止まります。(スコアが1以下なら増やすので)

「6」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players set @a offhandZangeki 0 {SelectedItem:{id:”minecraft:shears”,tag:{display:{Name:”斬撃のハサミ”,Lore:\[“Fキーを押して使う”\]}}}}**  
メインハンドにハサミを戻したら**offhandZangekiの値を0にセット**します。

「7」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/playsound entity.player.attack.sweep player @a\[score\_offhandZangeki\_min=1,score\_offhandZangeki\=1\] ~ ~ ~ _10.0_**  
**offhandZangekiの値が1になった**プレイヤーに対してsweep攻撃のサウンドを_音量10.0_で再生します。

「8」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/execute @a\[score\_offhandZangeki\_min=1,score\_offhandZangeki\=1\] ~ ~ ~ particle sweepAttack ~ ~ ~ 3 3 3 0.1 300 force**  
「7」と同様のタイミングで、プレイヤーの周辺にsweep攻撃のパーティクルを表示させます。forceと書けばビデオ設定のパーティクルが「最小」でも表示されます。

「9」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/execute @a\[score\_offhandZangeki\_min=1,score\_offhandZangeki=1\] ~ ~ ~ effect **@e\[type=!Player,r=3\]** minecraft:instant\_damage 1 0**  
▲**offhandZangeki**が1以上1以下の人に、**半径3ブロック以内のプレイヤー以外のエンティティ**にダメージ効果を与えるeffectコマンドを実行させています。

\### Fキーを押すと無敵になって爆発が起こる仕組みとコマンドを解説 !\[\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121539.png)

最後に「爆発のファイアチャージ」のコマンドを入力していきましょう。他2つと同様に左端だけ**レッドストーン信号が必要**モードにしてオンオフ可能にしています。

「10」

**Repeat(リピート)****Unconditional(無条件)****Needs Redstone(レッドストーン信号が必要)**

**/scoreboard players add @a\[score\_offhandFC\=1\] offhandFC 1 {Inventory:\[{Slot:-106b,id:”minecraft:fire\_charge”,tag:{display:{Name:”爆発のファイアチャージ”,Lore:\[“Fキーを押して使う”\]}}}\]}**  
「爆発のファイアチャージ」を**オフハンドスロット(Slot:-106b)**にセットすると、**offhandFC**のスコアが1づつ増えていき、2で止まります。(スコアが1以下なら増やすので)

「11」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/scoreboard players set @a offhandFC 0 {SelectedItem:{id:”minecraft:fire\_charge”,tag:{display:{Name:”爆発のファイアチャージ”,Lore:\[“Fキーを押して使う”\]}}}}**  
爆発のファイアチャージをメインハンドに戻したら、**offhandFCの値を0にセット**します。

「12」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/effect @a\[score\_offhandFC\_min=1,score\_offhandFC\=1\] minecraft:resistance 3 255 true**  
**offhandFC**の値が1になったプレイヤーに**レベル255の「耐性」効果を3秒間**与えます。

「13」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/execute @a\[score\_offhandFC\_min=1,score\_offhandFC\=1\] ~ ~ ~ summon PrimedTnt ~ ~ ~ {Fuse:0}**  
「12」の直後に着火済みTNTを召喚します。(Fuse:0なので即爆発)

\## 新しい種類の「Fキーで何か起こるアイテム」を自分で作る際の手順

それでは最後に、オリジナルの「Fキーで何か起こるアイテム」を自作する際の手順を解説します。

オリジナルのFキーで何か起こるアイテムの作り方

下準備:

*   アイテムを動作させるための**スコアボードを作成**する。  
    例: **/scoreboard objectives add スコア名 dummy**
*   使う**アイテムを作成**する。  
    例: **/give @p アイテムID 個数 データ値 {display:{Name:”アイテム名”,Lore:\[“説明文”\]}}**  
    ▲データ値は大抵は0。F3+Hで各アイテムに表示される。「#0035/2」ならデータ値は2

以下、常時実行するコマンドについて:

*   **オフハンドスロットに自作アイテムが入ったらスコアを増やす**コマンドを常時実行する。  
    例: **/scoreboard players add @a\[score\_スコア名\=1\] スコア名 1 {Inventory:\[{Slot:-106b,id:”アイテムID”,Damage:データ値,tag:{display:{Name:”アイテムID”,Lore:\[“説明文”\]}}}\]}**  
    ▲データ値は大抵は0。
*   **メインハンドに戻したらスコアを0に**するコマンドを常時実行する。  
    例: **/scoreboard players set @a スコア名 0 {SelectedItem:{id:”アイテムID”,Damage:データ値,tag:{display:{Name:”アイテム名”,Lore:\[“説明文”\]}}}}**
*   スコアが**1以上1以下のプレイヤーを対象にイベントを起こす**コマンドを常時実行する。  
    例: **/execute @a\[score\_スコア名\_min=1,score\_スコア名\=1\] ~ ~ ~ summon LightningBolt ~ ~ ~** なら雷を落とす。

**※全てのコマンドでアイテムID/データ値/アイテム名/説明文が合致している必要がある。**

---

**「○○についてまとめてほしい/解説してほしい」**などのご意見ご感想、コメント欄や[Twitter](https://twitter.com/napoan)でお待ちしています。
