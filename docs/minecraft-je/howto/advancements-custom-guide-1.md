
---
title: Advancements(進捗)自作完全ガイド #1: タブやツリーの作成とアイコンや背景の設定
slug: /minecraft-je/howto/advancements-custom-guide-1
description: Minecraft バージョン1.12の最大の新要素「Advancements(進捗)」。前回は「進捗とはどんなシステムなのか」を解説しました。今回からついに実践的な解説に入ります。#1と題した今回は、Advancementsの自作をするには何が必要? Advancementsってどこのフォルダーに書けばいいの?
 Advancementsのタブを追加するには? 進捗のツリーを作るには?
 といった「進捗自作の基本」を解説します。”進捗自作”って変な響きですが、これから配布ワールドを作るなら絶対押さえておきたい機能です。JSON文書を弄ったことがない方にも分かりやすい解説になるよう心がけましたので、一度読んでいって下さいな。
---

![Advancements解説1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110837.png)

\[4/28更新\] 1.13仕様に更新しました。1.12ではこの方式は使えないのでご注意ください。

Minecraft バージョン1.12の最大の新要素**「Advancements(進捗)」**。前回は「進捗とはどんなシステムなのか」を解説しました。今回からついに実践的な解説に入ります。

#1と題した今回は、

*   Advancementsの自作をするには何が必要?
*   Advancementsってどこのフォルダーに書けばいいの?
*   Advancementsのタブを追加するには?
*   進捗の名前やアイコンや背景などを設定するには?
*   進捗のツリーを作るには?

といった**「進捗自作の基本」**を解説します。”進捗自作”って変な響きですが、**これから配布ワールドを作るなら絶対押さえておきたい機能です。**JSON文書を弄ったことがない方にも分かりやすい解説になるよう心がけましたので、一度読んでいって下さいな。

[<< #0 Advancementsって何?](//exr-nap.sakura.ne.jp/www.napoan.com/advancements-custom-guide-prolog/)

[#2 達成条件の組み合わせと報酬の設定 >>](https://www.napoan.com/advancements-custom-guide-2/)

## 目次

*   [Advancementsの自作をするには何が必要?](#tool)
*   [Advancementsってどこに書けばいいの?](#where)
*   [自分でAdvancementsのタブを追加してみよう](#tab)
*   [進捗の名前/説明文/アイコン/枠の形/背景の設定方法](#display)
*   [タブの中に進捗のツリーを構築してみよう](#tree)

## 参考にさせて頂いたページ様

**Advancements – Official Minecraft Wiki**  
[https://minecraft.gamepedia.com/Advancements](https://minecraft.gamepedia.com/Advancements)

**guides/advancements.md at master · skylinerw/guides · GitHub**  
[https://github.com/skylinerw/guides/blob/master/java/advancements.md](https://github.com/skylinerw/guides/blob/master/java/advancements.md)

その他公式Wikiのいろいろな記事

## Advancementsの自作をするには何が必要?

![自作には何が必要](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104400.jpg)

Advancements(進捗)はマイクラの中で作れるものではありません。以前解説した「[Loot Table](https://www.napoan.com/loot-table-perfect-guide/)」のように、**テキストエディタ(文書を書くソフト)を使って外部からファイルを書いていく必要があります。**

![自作に必要なもの](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122831.jpg)

な、なんだって

テキストエディタを使ったことがない

でもこれはチャンス

マイクラを飛び出してエディタを弄ろう

人の二倍JSONを書くことで””圧倒的成長””できる

JSONを採用したMojangに””圧倒的感謝””

のおすすめはSublimeText 3

[![Sublime Text 3](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113208.png)  
https://www.sublimetext.com/3](https://www.sublimetext.com/3)

私のおすすめのテキストエディタは**SublimeText 3**です。ライセンスは70$なんですがマシンの数に制限はありません。1人1ライセンス。**BracketHighlighterとPrettyJSON**っていうプラグインを入れればJSON書く時に便利です。プラグインの入れ方とかはぐぐってね

## Advancementsってどこに書けばいいの?

![どこに書けばいいの](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100936.jpg)

それでは早速、Advancements(進捗)を自作していきましょう。まずは**自作進捗を置くフォルダーの場所**を知っておかないと始まりません。

「データパック」の作成手順/フォルダ構成/使い方 (Java版1.13)

[![データパック作成解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090736.png)  
https://www.napoan.com/data-pack-perfect-guide/](https://www.napoan.com/data-pack-perfect-guide/)

まずは▲の記事を参考に、あなたのワールドの中に「データパック」を作ってください。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121926.png)

上記記事でも解説したと思いますが、今回はバニラのものを置き換えるのではなく、新しく追加していきます。ですから**dataフォルダの下に好きな名前の(名前空間)フォルダを作ってください。**好きな名前とはいえ、**全て小文字のアルファベット**を書いてくださいね。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101812.png)

(名前空間)フォルダの下に、functionsフォルダを作りましょう。一文字でも間違えるとダメですよ。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090929.png)

functionsフォルダを作ったら、フォルダ構成がこんな感じになっているか確認しましょう。dapapacks/(データパック名)/data/(名前空間)/functions/となっていれば正解です。**データパック内にdataフォルダを作るのを忘れやすいので注意！！！**

## 自分でAdvancementsのタブを追加してみよう

![タブを自作したい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102018.png)

Advancements(進捗)は、タブで分類されています。まずはこの**タブを自作してみましょう**。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123933.png)

functionsフォルダの中に、さらに好きな名前のフォルダーを作成しましょう。

![root.jsonを作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113211.png)

自作フォルダー内に、root.jsonという名前でJSONファイルを作成します。(rootという名前でなくてもタブは作れますが、**どれがタブ名などを司っているファイルなのか分かりやすくするためにroot.jsonという名前で統一して書いています**)

このroot.jsonの中に、**「タブの名前」「アイコン」「背景画像」などタブの設定をする情報を書いていきます。**将来的にはこのroot.jsonから、進捗の”ツリー”を繋げていきます。

![rootjsonの中身](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105558.jpg)

バニラの「Minecraft」という進捗を例にすると、ここではroot.jsonは「Minecraft」という**タブの名前やアイコンなどを設定すると同時に、「Minecraft」という進捗の内容も設定しています。**  
**つまり、タブの名前&アイコンと最初の進捗の名前&アイコンを異なるものにすることはできません。** ちなみに、**タブ内の最初の進捗が達成されて初めてタブが表示される**のでご注意下さい。

前置きが長くなってしまいましたが、それではroot.jsonの中身を書きましょう!

![root.jsonを書いていきます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113214.png)

先ほど作成したroot.jsonをお気に入りのテキストエディタで開きましょう。ここに書いていきます…と言いたかったのですが、**書き方を0から説明するのは非常に大変なので先に完成品を載せておきます。**

{
"display": {
"title": "の挑戦状",
"description": "スケルトンとゾンビとクリーパーの頭を入手しろ",
"icon": {
"item": "minecraft:skull",
"data": 3
},
"background": "minecraft:textures/block/quartz\_block\_top.png",
"frame": "challenge"
},
"criteria": {
"getSkeletonSkull": {
"trigger": "minecraft:inventory\_changed",
"conditions": {
"items": \[
{
"item": "minecraft:skull",
"data": 0
}
\]
}
},
"getZombieSkull": {
"trigger": "minecraft:inventory\_changed",
"conditions": {
"items": \[
{
"item": "minecraft:skull",
"data": 2
}
\]
}
},
"getCreeperSkull": {
"trigger": "minecraft:inventory\_changed",
"conditions": {
"items": \[
{
"item": "minecraft:skull",
"data": 4
}
\]
}
}
},
"rewards": {
"experience": 500
}
}

自分で書きたいって方もとりあえずこれをコピペするか書き写して下さい。カスタマイズは後でやりますから

![BOMなしUTF-8で保存しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091108.png)

コピペしたら、**BOM無しのUTF-8形式で保存**しましょう。TeraPadなどでは「UTF-8**N**」を選びます。秀丸エディタなどでは「BOMを付ける」のチェックボックスを外します。

![最初は表示されない](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105422.png)

保存したら/reloadコマンドで再読込して…あれ、タブが追加されてません。  
それもそのはず、**タブの最初の進捗(root.jsonの進捗)を達成しないとタブは表示されない**からです。

![達成したらタブ表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093205.png)

先程コピペして頂いた進捗は**「スケルトンとゾンビとクリーパーの頭を集める」が条件かつ”チャレンジ”タイプ**の進捗ですので、それら3つを全て入手すれば「Challenge complete!」と出てやっとタブが追加されます。進捗に複数の条件を設定すると、3/3といった風に達成状況が数字で表示されます。  
また、達成すれば報酬(rewards)として設定してある経験値500個が手に入ります。

豆知識: Lキーで進捗画面が開ける

進捗の画面は、いちいちEscキーでメニューを開かなくても、Lキー一発で開くことが出来ます。

![もう一つフォルダーを作ってみよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111553.png)

もう一つタブを追加してみましょう。「challenges」フォルダーの外まで戻って、**隣に「test」という名前のフォルダーを作ります。**

ちょっと待った! 実はフォルダーを分けなくてもタブは作れるぞ

![親がなければタブに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101057.png)  
**この解説では、タブのまとまりを分かりやすくするためにJSONをフォルダーで分けています。**しかし、「親」を指定していないJSONファイルがあれば、それ1つだけでタブが追加されます。つまり、先程の内容のJSONファイルを何個も作れば、その数だけタブが追加されます。  
**親がなければそれが根本になり、タブになるのです。**

![rootjsonを作ろう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122633.png)

例によってタブの根本を分かりやすくするためにroot.jsonという名前でJSONファイルを作成します。  
その中に、今度は以下の内容をコピペします。

{
"display": {
"title": "テスト用タブ",
"description": "テストです",
"icon": {
"item": "minecraft:stick"
},
"background": "minecraft:textures/colormap/foliage.png"
},
"criteria": {
"test": {
"trigger": "impossible"
}
}
}

そしてBOMなしUTF-8で保存し、**マイクラ内で/reloadコマンドを実行して読み込みます。**  
ところで皆さん、**この進捗はどうやって達成すると思います?**

"criteria": {
"test": {
 "trigger": "impossible"
}
}

“trigger”は進捗を達成するきっかけです。“impossible”、つまり達成”不可能”に設定してあります。てことはこの「テスト用タブ」は永遠に表示されないんでしょうか…!?

![advancementコマンドで解除](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123925.png)

そんな事はありません。/advancementコマンドを使えば達成できます。

名前空間:test/root.jsonを達成するadvancementコマンド

**/advancement grant @p only 名前空間:test/root**

「only」ってのは「ツリーの中でこの進捗だけ達成」という意味です。「名前空間」には最初にadvancementsフォルダー内に作った全てを包括するフォルダーの名前を書きましょう。進**捗を指定するパスでは「.json」は書きません。**

![タブが表示された](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093210.png)

advancementコマンドでtestフォルダーのroot.jsonの「テスト用タブ」進捗を達成したので、同時にタブが追加されます。**タブの名前を想定して名前を付けても、それが進捗の名前にもなりますので名付けの際は注意しましょう。**  
にしてもカラーマップ画像を活用した背景かっこいいでしょ?

## 進捗の名前/説明文/アイコン/枠の形/背景の設定方法

![表示設定をしよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103100.jpg)

ここからは、進捗の名前や説明文、アイコンや枠の形、タブの背景を設定する方法を解説していきます。

![jsonの構造](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103825.jpg)

まずこちらの画像をご覧下さい。AdvancementsのJSONの構造です。  
これから解説する表示設定は、すべて“display”:{}の山括弧の中に書いていきます。

なお、**「名前」「説明文」「アイコン」は必須**でそれ以外は任意で設定します。

### 進捗の名前(root.jsonの場合はタブ名にもなる)を設定するには (必須)

{
"display": {
 "title": "の挑戦状",
"description": "スケルトンとゾンビとクリーパーの頭を入手しろ",
"icon": {
"item": "minecraft:skull",
"data": 3
},
"background": "minecraft:textures/block/quartz\_block\_top.png",
"frame": "challenge"
}

“title”: “名前”で進捗の名前、root.jsonの場合は同時にタブ名を設定します。

### 進捗の説明文を設定するには (必須)

{
"display": {
"title": "の挑戦状",
 "description": "スケルトンとゾンビとクリーパーの頭を入手しろ",
"icon": {
"item": "minecraft:skull",
"data": 3
},
"background": "minecraft:textures/block/quartz\_block\_top.png",
"frame": "challenge"
}

“description”: “説明文”で進捗の説明文を設定します。

### 進捗のアイコン(root.jsonの場合はタブのアイコンにもなる)を設定するには (必須)

{
"display": {
"title": "の挑戦状",
"description": "スケルトンとゾンビとクリーパーの頭を入手しろ",
 "icon": {
"item": "minecraft:skull",
"data": 3
},
"background": "minecraft:textures/block/quartz\_block\_top.png",
"frame": "challenge"
}

“icon”: {“item”:”アイテムID”}で進捗のアイコン、root.jsonの場合は同時にタブのアイコンを設定します。”data”でデータ値を指定できます。

### 進捗の枠の形を設定するには (任意)

{
"display": {
"title": "の挑戦状",
"description": "スケルトンとゾンビとクリーパーの頭を入手しろ",
"icon": {
"item": "minecraft:skull",
"data": 3
},
"background": "minecraft:textures/block/quartz\_block\_top.png",
 "frame": "challenge"
}

“frame”: “種類”で進捗の枠の形を指定できます。以下の表を参考にして下さい。

“frame”: “枠の形”の一覧

種類の英語名 / 日本語名

JSON

こんな形

タスク / 進捗 (デフォルト)

“frame”: “task”

![task](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105202.png)

チャレンジ / 挑戦

“frame”: “challenge”

![challenge](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093214.png)

ゴール / 目標

“frame”: “goal”

![goal](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093216.png)

### タブの背景を設定するには (任意)

{
"display": {
"title": "の挑戦状",
"description": "スケルトンとゾンビとクリーパーの頭を入手しろ",
"icon": {
"item": "minecraft:skull",
"data": 3
},
 "background": "minecraft:textures/block/quartz\_block\_top.png",
"frame": "challenge"
}

“background”: “画像のパス”でタブの背景を指定できます。リソースパック内の画像も指定できます。ただし**背景を指定できるのはroot.jsonだけです**のでご注意下さい。

## タブの中に進捗のツリーを構築してみよう

![進捗ツリーを作ろう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122107.png)

最後に、タブの中に複数の進捗を用意して、**線で繋いで”ツリー”を構築する手順**を解説します。

### 複数のJSONを作って、「親」を設定してつなげよう

![4つ作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113218.png)

まずはchallengesフォルダーに、以下の内容で4つのJSONファイルを作成して下さい。

2.json

{
"display": {
"title": "挑戦状2",
"description": "ダイヤモンドをゲットせよ",
"icon": {
"item": "minecraft:diamond"
}
},
 "parent": "名前空間:challenges/root",
"criteria": {
"getDiamond": {
"trigger": "minecraft:inventory\_changed",
"conditions": {
"items": \[
{
"item": "minecraft:diamond"
}
\]
}
}
},
"rewards": {
"experience": 1000
}
}

3-lava.json

{
"display": {
"title": "挑戦状3 マグマ編",
"description": "マグマダイブしろ",
"icon": {
"item": "minecraft:lava\_bucket"
}
},
 "parent": "名前空間:challenges/2",
"criteria": {
"diveIntoLava": {
"trigger": "minecraft:enter\_block",
"conditions": {
"block": "minecraft:lava"
}
}
},
"rewards": {
"experience": 1500
}
}

3-mesa.json

{
"display": {
"title": "挑戦状3 メサ編",
"description": "メサに入れ",
"icon": {
"item": "minecraft:deadbush"
}
},
 "parent": "名前空間:challenges/2",
"criteria": {
"enterMesa": {
"trigger": "minecraft:location",
"conditions": {
"biome": "minecraft:mesa"
}
}
},
"rewards": {
"experience": 1500
}
}

final.json

{
"display": {
"title": "最後の挑戦状",
"description": "ビーコンを設置しろ",
"icon": {
"item": "minecraft:beacon"
},
"frame": "goal"
},
 "parent": "名前空間:challenges/3-mesa",
"criteria": {
"setBeacon": {
"trigger": "minecraft:placed\_block",
"conditions": {
"block": "minecraft:beacon"
}
}
},
"rewards": {
"experience": 3000
}
}

それぞれ**「名前空間」の部分は最初に作ったフォルダーの名前に書き換えて下さい。**全てBOMなしUTF-8で保存して、マイクラ内で/reloadコマンドを実行しましょう。

![4つめはどこ?](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090208.png)

4つとも保存して/reloadしたのに…4つ目の「最後の挑戦状」が表示されません。なぜでしょう?  
答えは、達成済みの進捗から3つ以上離れているから。ということで**2つ目の「ダイヤモンドをゲットせよ」をクリアしましょう。**

![表示された](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101430.png)

するとやっと最後の目標が表示されます。**あまりに離れている進捗は表示されない**ので、こういう事が起きても**慌てず騒がず落ち着いて(A.S.O.)**対処しましょう。

![ツリーの構築方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122339.jpg)

それぞれのJSONに“parent”: “名前空間:親/への/パス”と書いて「親」を指定することで、最終的に大きなツリーが出来上がるのです。**複数の進捗に同じ「親」を指定すると、ツリーが分岐します。**

### フォルダー外の進捗を親に指定したらどうなるの?

![この子はどうなる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121433.jpg)

進捗の親を指定する時、”parent”:”名前空間:親/への/パス”と書きます。つまりフォルダーの垣根を超えて親を指定できるということ。例えばchallengesフォルダーにhoge.jsonを作り、親をtestフォルダーのroot.jsonにした場合、ツリーはどうなるのでしょうか?

![フォルダー分けが無視される](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090756.jpg)

答えはこれ。**フォルダー分けは無視されて、「テスト用タブ」のroot.jsonの子になります。****マイクラ側は、フォルダー分けではなく各々のJSONの「親」を見てタブとツリーを作成します。**フォルダー分けはあくまで分かりやすくするためですので、親の設定がタブとツリーを作る全てなのです。

## 次回予告

![次回は2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103832.jpg)

次回の#2では、

*   進捗を達成した報酬を設定するには?
*   進捗の報酬としてコマンドを実行するには?
*   進捗の達成条件を簡単に設定してみよう
*   必要な条件の組み合わせを設定するには?

といった**「条件と報酬」の仕組み**を解説しています。

[<< #0 Advancementsって何?](//exr-nap.sakura.ne.jp/www.napoan.com/advancements-custom-guide-prolog/)

\[#2 達成条件の組み合わせと報酬の設定\](https://next.napoan.com/advancements-custom-guide-2/)
