
---
title: アップデート「1.8」内容まとめ – パンダ/ネコ！
slug: /minecraft-je/howto/mcbe-update-18
description: “ホリデーアップデート” ― かわいい仲間が登場します！パンダ、竹、クロスボウ、足場、ネコ… スマホ・タブレット・NintendoSwitch・Windows10アプリ・XboxOneの「Minecraft(BE,統合版)」のアップデート「1.8」の更新内容をまとめました。 開発者さんのツイート、公式Wikiの情報を基に画像付きで詳しくまとめています。
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102708.png)

アップデート配信はいつ?

*   iOS: 配信されました
*   Android: 配信されました
*   Windows10: 配信されました
*   XboxOne: 配信されました
*   Switch: 配信されました

[<< バージョン1.7の内容まとめ](https://www.napoan.com/mcbe-update-17/)  
[バージョン1.9の内容まとめ >>](https://www.napoan.com/mcbe-update-19/)

“ホリデーアップデート” ― かわいい仲間が登場します！**パンダ、竹、クロスボウ、足場、ネコ…** **スマホ・タブレット・NintendoSwitch・Windows10アプリ・XboxOneの**「Minecraft(BE,統合版)」のアップデート「1.8」の更新内容**をまとめました。** 開発者さんのツイート、公式Wikiの情報を基に画像付きで詳しくまとめています。

**最終更新：**  
**もうすぐリリースされるので更新**

## 参考にさせて頂いたページ様

*   **Bedrock Edition 1.8 – Official Minecraft Wiki**  
    [https://minecraft.gamepedia.com/Bedrock\_Edition\_1.8](https://minecraft.gamepedia.com/Bedrock_Edition_1.8)

他、各種アイテムの英語版公式Wikiの解説を参考にしました。分かりやすい説明、豊富なデータをまとめてくださった英語版公式Wikiの編集者の皆様には、感謝してもしきれません。

## 目次

*   [エンティティ(Mob,乗り物など)に関する追加/変更点](#entity)
    *   [「パンダ」を追加。ジャングルにスポーン](#panda)
    *   [「ネコ」を追加。ヤマネコとは別だぞ](#cat)
    *   [ヤマネコはペットにできなくなったが、信頼は得られる](#ocelot)
    *   [ファントムがネコを怖がるようになった](#phantom)
    *   [熱帯魚のサイズが小さすぎたので大きく修正](#toropical-fish)
    *   [スケルトン馬やゾンビ馬の子供をスポーンエッグで出せるように](#horse-foals)
*   [ブロックやアイテムの追加、変更点](#block-and-item)
    *   [(試験的) クロスボウと3つのエンチャントが追加](#crossbow)
    *   [新植物「竹」追加、タケノコから成長するぞ](#bamboo)
    *   [新ブロック「足場」追加、高所の建築が楽に](#scaffolding)
    *   [氷9個で氷塊ブロックをクラフトできるように](#packed-ice)
    *   [白・黒・茶・青の染料が追加、従来のアイテムもまだ使える](#dyes)
*   [コマンドに関する変更点](#command)
    *   [particleコマンド実装、しかし使えるパーティクルは少ない](#particle)
    *   [reloadコマンド実装、アドオンのファンクションをリロードする](#reload)
    *   [いくつかのgameruleコマンドがチートOFFでも使えるように](#gamerule)
    *   [/gamerule randomTickSpeedが使えるようになった](#randomtickspeed)
    *   [summonコマンドでアドオンのMobと区別するためにminecraft:を書けるようになった](#summon-prefix)
    *   [コマンドブロックのデフォルトの名前が「@」から「!」になった](command-block)
    *   [チャット欄で打つコマンドでプレイヤー名を自動補完できるように](#player-autocomplete)
*   [システム・総合的なことに関する追加/変更点](#system)
    *   [ローディング画面が新しくなり、何を読み込んでいるか判断可能に](#loading)
    *   [スキン選択画面に「+」ボタンが設置され、各スキンパックの中身を確認可能に](#skin)
    *   [ストアの並び替え機能が改善された](#store)

<

p class=”strong-notice”>※どう考えても1つの記事に収められる量ではないので、アドオン関連の新機能はまた別の機会があれば解説します。(詳細は[公式Wikiのこちらのページ](https://minecraft.gamepedia.com/Bedrock_Beta_Add-On_Documentation)にまとめられています)

## エンティティ(Mob,乗り物など)に関する追加/変更点

### 「パンダ」を追加。ジャングルにスポーン

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105047.png)

パンダ (Panda)

ID

panda

HP

10(♥x5)

攻撃力

3(♥x1.5)

サイズ

大人: 1.825m x 1.125m x 1.25m(奥x幅x高)

スポーン場所ジャングル

ドロップアイテム[  
竹](bamboo) x1~2個

経験値1~3

#### パンダの種類と性格

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115843.png)

*   仰向けで寝たり、集まった時は座ったりする

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104806.png)  
(画像は[公式Wiki](https://minecraft.gamepedia.com/File:Panda_variations.png)より)

*   普通のパンダに加えて、**レアな茶色のパンダ**も存在する
*   パンダには**5種類の性格**がある。顔で見分けよう:
    *   攻撃的なパンダ: 攻撃されると何度でも反撃する。他のパンダや赤ちゃんを守る
    *   なまけたパンダ: プレイヤーや落ちている食べ物に反応しない。仰向きで寝る。動きが遅い
    *   怖がりのパンダ: パンダ以外のMobを避ける。雷が落ちると顔を隠して怖がる
    *   わんぱくパンダ: 他のパンダより頻繁に転がったりジャンプしたりする
    *   泣いているパンダ: くしゃみの頻度が高い。HPが20ではなく10しかない
*   攻撃的以外のパンダは攻撃されると1回だけ反撃する
*   攻撃されたパンダは近くの攻撃的なパンダに助けを求める
*   茶色のパンダは性格の特徴はない

#### パンダの食べ物

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115847.png)

*   **[  
    竹](bamboo)を持っていると追いかけてくる**
*   落ちている[  
    竹](bamboo)やケーキ(アイテム状態)を食べる

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120017.png)

*   [  
    竹](bamboo)を**タップ/右クリックで与えると、座って食べてくれる**
*   怖がっていたり怒っていたとしても食べてくれる

#### パンダの繁殖

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120022.png)

*   パンダがラブモードになるには、**パンダ達の半径5m以内に最低8個の竹ブロックがないといけない**
*   条件を満たしたら竹を与えることで子供を産む

#### 子供のパンダ

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120026.png)

*   子供のパンダは時々**くしゃみ**をする
*   **くしゃみをすると、時々スライムボールを落とすことがある**
*   子供のパンダを倒してもアイテムや経験値は落ちない

### 「ネコ」を追加。ヤマネコとは別だぞ

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111445.png)

ネコ (Cat)

ID

cat

HP

10(♥x5)

攻撃力

3(♥x1.5)

サイズ

大人: 0.7m x 0.6m(高さと幅)  
子供: 0.35m x 0.3m(高さと幅)

スポーン場所村 (黒猫は魔女の小屋にも)

ドロップアイテム  
糸 x0~2個

経験値大人: 1~7  
子供: 1~3

*   今までのヤマネコから分離し、**別のMobとして「ネコ」が誕生した**
*   **ヤマネコの「飼う」機能は全てこちらに引き継がれ、さらにネコ限定の機能もいくつか実装されている**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115851.png)

*   ネコは**村にスポーンし、村をぶらぶら**する

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115855.png)

*   黒猫だけは魔女の小屋にも1匹スポーンする

*   ネコには以下のカラバリがある:
    *   パンサー: オレンジ色の目をした黒猫
    *   シャム: 青い目をした白黒の猫
    *   タキシード: 緑色の目をした黒猫
    *   レッドタビー: 緑色の目をした金色の猫
    *   タビー: 黄色の目をした茶色の猫
    *   ホワイト: 黒い目の白猫
    *   ラグドール: 青い目のグレーの猫
    *   ペルシャ: 青い目をした黄褐色の猫
    *   ブリティッシュショートヘア: 黒目の灰色の猫
    *   キャリコ: 目の色は様々で、オレンジと白と黒のぶち
    *   グレータビー: (自然にスポーンしないがテクスチャはある)

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115858.png)

*   魚を使えば懐かせることができる
*   懐いたネコの挙動や使い方はヤマネコと同じ
*   ただしネコ限定でチェストやベッドの上に座ったりする

#### ネコの添い寝とプレゼント

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104211.png)

*   ネコには**添い寝とプレゼント**機能が付いている
*   プレイヤーが寝る時、近くで一緒に寝てくれる
*   プレイヤーが起きると、ネコも起きる
*   **起きた時に時々以下のプレゼントのいずれかをくれる**:
    *   ウサギの足: 優先度10
    *   ウサギの皮: 優先度10
    *   糸: 優先度10
    *   ゾンビ肉: 優先度10
    *   羽: 優先度10
    *   生の鶏肉: 優先度10
    *   ファントムの皮膜: 優先度2(レア)

### ヤマネコはペットにできなくなったが、信頼は得られる

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104718.png)

*   ネコが実装されたため、ヤマネコ(オセロット)はペットにできなくなった
*   ただし魚をあげて信頼を得ることはできる

### ファントムがネコを怖がるようになった

*   **ファントムはネコが嫌い**なので、ネコがいれば降りて攻撃してこない

### 熱帯魚のサイズが小さすぎたので大きく修正

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115902.png)

*   **「JEに比べて熱帯魚が小さすぎる」**という問題が報告されており、やっと修正された

### スケルトン馬やゾンビ馬の子供をスポーンエッグで出せるように

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115907.png)

*   スポーンエッグを使って**スケルトン馬やゾンビ馬の子供**をスポーンさせられるようになった

## ブロックやアイテムの追加、変更点

### (試験的) クロスボウと3つのエンチャントが追加

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111046.png)

*   新武器**「クロスボウ」**が試験的機能として実装された
*   ワールド設定で「試験的なゲームプレイ」を有効にし、\[EX\]付きのワールドを開けば使える
*   材料は**棒 x3 / 糸 x2 / 鉄インゴット x1 / トリップワイヤーフック x1**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124112.png)

*   弓と違って、引いている途中で発射はできない。最後まで引く必要がある
*   引いている途中は弓と同様歩くのが遅くなる(走れない)

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090258.png)

*   **最後まで引くとそのまま固定され、長押しの必要はなくなる**
*   この状態のまま普通の速度で歩くことも走ることも可能

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120034.png)

*   **発射モードでタップ/右クリックすれば発射可能**
*   左クリックだと発射モードのままクロスボウで殴る
*   弓と同様、オフハンドにある矢が最優先で使われ、それ以外の場合はインベントリの左上から優先して使われる
*   弓よりまっすぐ遠くへ飛ぶ
*   プレイヤーの攻撃力上昇効果はダメージに影響しない
*   クロスボウでも矢をエンダーマンに当てることはできない

#### クロスボウのエンチャント

*   **クイックチャージ**: (レベル1~3) 装填時間を減らす。レベル3なら弓よりわずかに短くなる
*   **マルチショット**: (レベル1のみ) **3つの矢を同時に放つ。**しかも矢は1個しか消費しない
*   **Piercing(ピアシング:突き刺す)**: (レベル1~4) **スナイパーライフルみたいに、矢がMobを貫通する。**レベル+1の数のMobを貫通するので、レベル3ならクアッドフィードが取れる

#### ロケット花火

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120038.png)

*   **オフハンドにロケット花火を入れておけば、装填して発射できる**
*   もちろん花火をカスタマイズすればそのパーティクルもちゃんと出るぞ

### 新植物「竹」追加、タケノコから成長するぞ

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103837.png)

*   新植物**「  
    竹」**追加
*   **1.8時点では自然に生えない**ので、代わりに釣りやチェストから竹が入手可能になっている
*   竹林は[1.9](/mcbe-update-19)で実装される予定だ
*   サトウキビのように、途中を壊せば上は全て壊れる
*   壊すとそのままアイテムとしてドロップする
*   草ブロック/土/砂/ポドゾル/粗い土/赤砂の上に植えられる
*   骨粉を使う以外に、**竹を持って竹をタップ**することでも成長可能

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111630.png)

*   成長の限界は12m~16mと、バラつきがある

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115910.png)

*     
    竹 x2で棒が作れる
*   また燃料としても使えるが、**4つ集めてやっと1個燃やせる**ほどの火力しか無い

### 新ブロック「足場」追加、高所の建築が楽に

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111005.png)

*   新ブロック**「足場」**追加
*   **MODで見たことある？そう、あれの上位互換だ**
*   材料は**  
    竹x6と  
    糸x1**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104528.png)

*   **高い所に登らなくても積み上げる**ことができる
*   **足場の上部をタップすれば、勝手に上に積み上がる**のだ!

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120046.png)

*   **支え無しで5つ以上横に伸ばそうとすると落ちてしまう**
*   **支え無しでは4メートルしか耐えられないのだ**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120049.png)

*   横4メートル以内なら、別に縦に伸ばしても構わない。「重さ」の心配はいらないのだ

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104834.png)

*   足場は横からするっと入ることができ、中にはいって登り降りする
*   ハシゴと違い、**ジャンプボタンで上に登り、スニークボタンで降りる**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110554.png)

*   下の足場を壊すと上は全て壊れる
*   フォートナイトごっこができるじゃん！と思ったのは私だけだろうか

### 氷9個で氷塊ブロックをクラフトできるように

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120030.png)

*   **氷ブロック9個**で氷塊ブロックをクラフトできるようになった

### 白・黒・茶・青の染料が追加、従来のアイテムもまだ使える

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120053.png)

*   骨粉で「白の染料」、イカ墨で「黒の染料」、カカオ豆で「茶色の染料」、ラピスラズリで「青色の染料」が作れるようになった
*   例えばカカオ豆をどのチェストに入れるか迷うことは無くなったわけだ

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123918.png)

*   従来のアイテムで染色することもできる

## コマンドに関する変更点

### particleコマンド実装、しかし使えるパーティクルは少ない

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120123.png)

*   particleコマンドがついに実装された
*   ただしJava版に比べるとかなり簡素なもの
*   /particle パーティクル名 x y z
*   アドオンでパーティクルを追加することもできる

*   ベータ版1.8.0.13現在以下のパーティクルしか使えない
*   minecraft:mobflame\_emitter
*   minecraft:test\_beziercurve
*   minecraft:test\_bounce
*   minecraft:test\_catmullromcurve
*   minecraft:test\_colorcurve
*   minecraft:test\_combocurve
*   minecraft:test\_highrestitution
*   minecraft:test\_linearcurve
*   minecraft:test\_mule
*   minecraft:test\_smoke\_puff
*   minecraft:test\_sphere
*   minecraft:test\_spiral
*   minecraft:test\_watertest

### reloadコマンド実装、アドオンのファンクションをリロードする

*   アドオンでスクリプトAPIを使った「ファンクション」が書けるようになったため、それを再読込するコマンドとしてreloadコマンドが実装された

### いくつかのgameruleコマンドがチートOFFでも使えるように

*   gameruleコマンドのうち、座標の表示やTNTの爆発など、**一部の重要なゲームルールが、チートOFFでも変更できるように**なった
*   チートOFFでも使えるgameruleコマンドは以下の通り:
    *   /gamerule showcoordinates (座標の表示)
    *   /gamerule dofiretick (火の延焼)
    *   /gamerule tntexplodes (TNTの爆発)
    *   /gamerule domobloot (Mobのアイテムドロップ)
    *   /gamerule naturalregeneration (満腹時の自然回復)
    *   /gamerule dotiledrops (ブロックのアイテムドロップ)
    *   /gamerule pvp (プレイヤー同士のダメージ)

### /gamerule randomTickSpeedが使えるようになった

*   gameruleコマンドにrandomTickSpeedが追加された
*   作物などの成長速度を決めるティック速度を変更できる
*   JEではデフォルトで3だがBEのデフォルトは1
*   /gamerule randomTickSpeed <数字> で設定する

### summonコマンドでアドオンのMobと区別するためにminecraft:を書けるようになった

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120120.png)

*   アドオンで新Mobを追加できるようになったため、IDの前にminecraft:を付けることで区別できるようになった
*   必須ではないので従来どおりの書き方でも召喚できる

### コマンドブロックのデフォルトの名前が「@」から「!」になった

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115924.png)

*   コマンドブロックのデフォルトの名前が**「@」から「!」に**なった

### チャット欄で打つコマンドでプレイヤー名を自動補完できるように

*   もう名前を打ち間違えることはないだろう

## システム・総合的なことに関する追加/変更点

### ローディング画面が新しくなり、何を読み込んでいるか判断可能に

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115928.png)

*   ロード画面の下に、棒グラフのようなアニメーションが追加された
*   適当に表示しているわけではなく、何をロードしているかを示している
*   **今後ロード画面でフリーズしたら、スクショを使って助けを求めよう**

### スキン選択画面に「+」ボタンが設置され、各スキンパックの中身を確認可能に

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115915.png) ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115920.png)

*   今までのスキン選択画面では、購入していないスキンパックの中身は全部確認できず、ストアページに飛ぶ必要があった
*   今回スキン選択画面に新設された「+」ボタンから、**ストアに行くこと無くそのパックのスキンの一覧を確認できるようになった**
*   一覧画面からストアに行くこともできる

### ストアの並び替え機能が改善された

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120042.png)

*   ストアの検索画面の並び替え基準に「評価の高い順/低い順」が追加された
*   また購入済み商品をアップデートがあるもの優先で並び替えできるようになった
