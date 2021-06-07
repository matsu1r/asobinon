---
title: ノートPCでも軽いシェーダーパックおすすめ7選
slug: /minecraft-je/howto/best-shaders-for-onboard/
sidebar_position: 0
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092215.png)

**影MODで綺麗なグラフィックを愉しみたい! だけどPCのスペックに自信がない…** 家電量販店で市販されているノートPCなど、ゲーム用でないパソコンで影MODを動かすのは本来厳しいことです。しかし、**これから紹介するシェーダーパックを使えば、低スペックなPCでも軽々影が動いちゃいます。**  

ということで、今回は**「Intel HD Graphicsなどのオンボードでも軽く動くシェーダーパック」を7種類**まとめました。同じ場所を様々なシェーダーパックで撮影して、fpsや美しさの比較もしています。

[[dl|Optifineを使ったシェーダーパックの導入方法の解説]]
|<https://asobinon.org/minecraft-je/mod/optifine/install/>

ここでOptifineを使ったシェーダーパックの導入方法を解説すると長くなりますので、まだ**シェーダーパックの使い方が分からないという方は上記記事を読んで使える状態にしておいて下さい。**

## 今回比較するシェーダーパックのダウンロードリンク/機能一覧

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092223.png)

ここからは**オンボードのノートPCでも軽々動くシェーダーパックを一挙に紹介**します。以下が今回比較する精鋭たちです。

| シェーダーパック名とバージョン(ダウンロードリンク) | 草木の揺れ | DOF(ぼやけるやつ) | Cloud Shadow(雲の影) |
|---|---|---|---|
| [KUDA Shaders v5 Medium](http://dedelner.net/download-v5/) | 対応 | 対応(Shader OptionsからDOFをON、Intel HD GraphicsをOFFにする必要あり) | 非対応 |
| [Chocapic13`s Shaders v5 Medium](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1293898-chocapic13s-shaders) | 対応 | 対応(Shader OptionsからONにすれば使えます) | 非対応 |
| [Rudoplays Shader](http://www.rudoplays.com/shaders/) | 非対応 | 非対応 | 非対応 |
| [Sildur`s Vibrant Shaders v1.09 High](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1291396-sildurs-shaders-pc-mac-intel-update-11-15-1-16) | 対応 | 対応(Shader OptionsからDOFとDOF_gamingを両方ONにすれば使えます) | 非対応 |
| [RRe36`s Shaders v7 High](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1293963-rre36s-shaders) | 対応 | 対応 | 非対応 |
| [Ziipzaap Shaders V2](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1294189-ziipzaaps-shader-pack-v2-100000-downloads) | 対応 | 非対応 | 非対応 |
| [CYBOX Shaders V4-preview-2.1](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/2364704-cyboxshaders-v4-preview-2-1-70k-downloads-pc-mac) | 対応 | 対応 | 非対応 |

なんで「SEUS」が入ってないの? と思われるかもしれませんが、**SEUSは私のIntel HD Graphics4000では改造しないと動かない**ためエントリーしていません。

改造してでもいいからSEUSで遊んでみたい! という方は[こちらの記事](https://asobinon.org/minecraft-je/mod/optifine/shader-error)を参考に導入して下さい。

## 比較時の設定とスペック

### シェーダーパックの動作検証をした際のPCスペック

|パーツ|スペック|
|---|---|
| CPU | Intel Core i5 3210M @2.50GHz |
|解像度|1366x768|
| グラフィック機能 | Intel HD Graphics 4000(オンボード) |
| Intel HD Graphicsのドライバーのバージョン | 10.18.10.4276 |
| RAM (メモリ) | 8GB (うちマイクラに2GB割り当て済) |

▲上記が検証時のPCのスペックです。実は2012年のWindows8が出た頃に買ったPCなので、**今のノートPCならオンボードグラフィックも進化していますからこの記事よりもっと良い結果が出せるはずです。**

:::info
解像度の高いモニターでプレイした場合は、同じマシンスペックでもかなりfpsが違いますのでご注意下さい。
:::

### シェーダーパックの動作検証をした際のビデオ設定

|項目|設定|
| ---|---|
| Optifine | HD H2 Ultra (v1.8版Forgeに導入) |
| 描画タイプ | 処理優先※木が不透明になるのが嫌なので、「Details」→「Trees」をFancy(描画優先)にして葉っぱだけ描画優先にしている |
| 描画距離 | 8チャンク |
| ミップマップレベル | 0 (ミップマップOFF) |
| 代替ブロック | OFF |

### シェーダーパック選択画面の設定

|項目|設定|
| ---|---|
| Anti Aliasing | OFF |
| Normal Map | ON |
| Specular Map | ON |
| Render Quality | 1x |
| Shadow Quality | 1x |
| Hand Depth | 1x |
| Cloud Shadow | OFF |
| Old Lighting | **Default** |

[[dl|OldLightingはONにしよう]]
|![OldLightingはONにしよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100232.png)
|
|シェーダーパック選択画面の設定項目についてですが、今回の比較では**「Old Lighting」を「Deafult(ON)」に**しています。**OldLightingがOFFだと暗い所がのっぺりしてなんだか好きになれない景色になる**んですよ。

## シーンごとに比較

### シーン1 – のどかな真昼の草原を眺めてみる。

それでは第一戦、「のどかな真昼の平原」です。さあ、どのシェーダーパックが一番軽いんでしょう。

[![のどかな真昼の平原でシェーダーパック比較](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095610.png)](//exr-nap.sakura.ne.jp/www.napoan.com/wp-content/uploads/2016/02/15de3e5911150db43ef9c716e49a6bc5.png)

▲クリックすればオリジナルサイズの画像を表示します。かなりサイズが大きいので注意!

| のどかな真昼の平原| fps |
|---|---|
| KUDA v5 Medium | 15 |
| Chocapic v5 Medium | 10 |
| Rudoplays | 15 |
| Sildur`s v1.09 High | 12 |
| RRe36`s v7 High | 12 |
| Ziipzaap V2 | 3 |
| CYBOX V4-preview-2.1 | 5 |


やはり**KUDAが綺麗な割にfpsが高い**ですね。「RudoPlays Shader」はブロックの輪郭が独特なので注目。それと「CYBOX V4」と「RRe36」にはDOF効果が付いており、近くや遠くにぼかしがかかっていますね。その分重いですが。

### シーン2 – 海辺の砂浜から見上げる森

お次の勝負は「海辺の砂浜から見上げる森」。太陽光のレンズフレアに注目です。

[![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092227.png)](https://www.napoan.com/wp-content/uploads/2016/02/d330eaaff6f345787344a7e62c93838e_ouxdzl-1.png)

▲クリックすればオリジナルサイズの画像を表示します。かなりサイズが大きいので注意! それと**「RRe36\`s Shaders」は「Shader Options」から「LENS\_EFFECTS」をOFFにしています。**何故か私の環境ではレンズフレアがおかしい表示になるので…

| 海辺の砂浜から森を見上げる| fps |
|---|---|
| KUDA v5 Medium | 15 |
| Chocapic v5 Medium | 12 |
| Rudoplays | 12 |
| Sildur`s v1.09 High | 10 |
| RRe36`s v7 High | 15 |
| Ziipzaap V2 | 4 |
| CYBOX V4-preview-2.1 | 5 |

レンズフレア(太陽を見た際に出てくるやつ)が一番目立っているのは「Sildur\`s Vibrant Shaders」ですね。Sildur\`sは太陽光が一番強力。一番太陽光が控えめなのはKUDAやChocapicでしょうか。

それと水面にも注目ですね。**KUDAやChocapic,CYBOXはとても透明度が高く、RudoPlaysやRRe36は青色が強い**ですね。私はクリアな方が好きです。**この勝負でも、私の個人的な一位はKUDAですね。**光と影のコントラストが強く、水の透明度も高くて綺麗なのにフルスクで15fpsも出てます。

### シーン3 – 渓谷から見上げる青空

[![渓谷から見上げる青空でシェーダーパック比較](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121352.png)](//exr-nap.sakura.ne.jp/www.napoan.com/wp-content/uploads/2016/02/bc10f05f1cbd4b83aca970050505b912.png)

▲クリックすればオリジナルサイズの画像を表示します。かなりサイズが大きいので注意!

| 渓谷で青空を見上げた |fps |
|---|---|
| KUDA v5 Medium | 20 |
| Chocapic v5 Medium | 10 |
| Rudoplays | 15 |
| Sildur`s v1.09 High | 12 |
| RRe36`s v7 High | 20 |
| Ziipzaap V2 | 5 |
| CYBOX V4-preview-2.1 | 6 |

fpsが上がったのは、前の2つのシーンと比べると映っている葉っぱが少ないからですかね。青空に注目すると、KUDAとRudoplaysは雲がなく、他はシェーダーパック側が美しい雲を追加してくれていますね。  
**\[2016年5月23日追記\] KUDAはShader Options…画面から雲をONにできます。**

### シーン4 – 夜の村で夜空に浮かぶ月を眺める

[![夜の村で夜空に浮かぶ月を眺めるでシェーダーパック比較](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104754.png)](//exr-nap.sakura.ne.jp/www.napoan.com/wp-content/uploads/2016/02/7fee99c3935b7bb26b1013b91d08525a.png)

▲クリックすればオリジナルサイズの画像を表示します。かなりサイズが大きいので注意!

| 夜の村で夜空に浮かぶ月を眺めた | fps |
|---|---|
| KUDA v5 Medium | 12 |
| Chocapic v5 Medium | 10 |
| Rudoplays | 12 |
| Sildur`s v1.09 High | 10 |
| RRe36`s v7 High | 12 |
| Ziipzaap V2 | 5 |
| CYBOX V4-preview-2.1 | 6 |

月の光に注目すると、7つのシェーダーパックの違いが鮮明に現れていますね。とにかくSildur\`sは眩しい。KUDA、Chocapic、CYBOXは全体的にかなり暗いですがRudoPlays、RRe36、Ziipzaapは明るく、色鮮やかな感じです。**個人的にはCYBOXが一番美しいと思いますね。**紫色の霧の空気感がなんとも言えない。

### シーン5 – 上空から朝焼けを眺める

[![上空から朝焼けを眺めるでシェーダーパック比較](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102438.png)](//exr-nap.sakura.ne.jp/www.napoan.com/wp-content/uploads/2016/02/45bf1e9129f306cd49263b1a58403928.png)

▲クリックすればオリジナルサイズの画像を表示します。かなりサイズが大きいので注意!

| 上空から朝焼けを眺めた| fps |
|---|---|
| KUDA v5 Medium | 12 |
| Chocapic v5 Medium | 10 |
| Rudoplays | 12 |
| Sildur`s v1.09 High | 12 |
| RRe36`s v7 High | 12 |
| Ziipzaap V2 | 4 |
| CYBOX V4-preview-2.1 | 5 |

朝焼けの日光の色合いを比べてみてください。**KUDAが一番黄色っぽく、ZiipzaapやCYBOXが白っぽい感じ**です。私は黄色っぽいほうが”朝焼け”っぽくて好きです。それと眼下に広がる森がどう描画されているかにご注目下さい。**KUDAやRRe36、CYBOXでは霧がかかっていてますます幻想的な朝焼けが演出されていますね。**

## まとめ

[![やっぱりKUDAかな](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091416.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091416.png)

いかがでしたか。**あなたの求めていたシェーダーパックは見つかりましたか?**私の個人的なおすすめは「KUDA v5」ですね。▲の画像もKUDAです。今回の記事のように並べてみると、見えてこなかったそれぞれのシェーダーパックの**個性を色々見つけることが出来て書いている私もとても楽しめました。**次はPCを新調して、「ハイスペックなPC向けの超美麗シェーダーパックまとめ」をやってみたいなぁ…
