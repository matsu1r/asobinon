
---
title: 低スペでも影付きヌルヌル動画! 影MODを使いながらリプレイ動画を書き出す方法
description: 過去のプレイを動画にできる画期的なMOD「ReplayMod」。最新バージョンの「1.0.7」では、ついに影MOD(シェーダパック)を適用した状態で動画を書き出せるようになりました! 今回は、ReplayModの最新バージョンを導入して、影MODを使いながらリプレイを動画化する手順を解説します。
 この動画書き出し機能を活用すれば、低スペックなPCでも影MOD付きでNullNullな動画を作れます。これまで諦めていた、美しい建築PVなどの動画制作を始めてみませんか。
---

![ReplayMod影MOD動画書き出し](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208164750.png)

過去のプレイを動画にできる画期的なMOD「ReplayMod」。最新バージョンの「1.0.7」では、ついに**影MOD(シェーダパック)を適用した状態で動画を書き出せるようになりました!** 今回は、ReplayModの最新バージョンを導入して、**影MODを使いながらリプレイを動画化する手順**を解説します。  
この動画書き出し機能を活用すれば、**低スペックなPCでも影MOD付きでNullNullな動画を作れます。**これまで諦めていた、美しい建築PVなどの動画制作を始めてみませんか。

[**<< part3** リプレイ内に画像を貼り付ける](/replay-mod-part1/ "【MOD解説】")

## 目次

*   [影MODを使ったリプレイ動画とは。低スペでもヌルヌル!](#about)
*   [「ReplayMod」の最新バージョンをダウンロードしよう](#rm-inst)
*   [「Shaders Mod」を導入して、Optifineは無効化!](#install)
*   [シェーダーパックを適用した状態で動画を書き出す手順](#render)

[**<< part3** リプレイ内に画像を貼り付ける](/replay-mod-part1/ "【MOD解説】")

## 影MODを使ったリプレイ動画とは。低スペでもヌルヌル!

こちらの動画をご覧ください。「ReplayMod」でリプレイ動画を書きだしたのですが、「[KUDA Shaders](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1293662-kuda-shaders-v6-0-82-beta-update-november-3th-2015)」というシェーダーパックを使っています。私のPCは影MODがヌルヌル動かせるようなスペックではありませんが、**ReplayModを使えば低スペックなのに影MODを使ってもヌルヌルな動画を作成できるんです。**

[![これまでも閲覧中は影MODを使えました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133431.png)](#3/8/38119743.png "これまでも閲覧中は影MODを使えました")

「影MODなら前から使えたよ?」とお思いの方、私の説明が分かりにくくてすみません。これまでもReplayModではリプレイ閲覧中なら普通に影MODを使えました。ですので綺麗なスクショを後から撮影することはできたのですが、**綺麗な”動画”を作成することは画面を録画しない限りはできなかった**のです…

[![書きだした動画に音声は付きません](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160049.jpg)](#c/1/c19c64bc.jpg "書きだした動画に音声は付きません")

この動画書き出し機能の欠点を書くとすれば、音声が付かないことと、時間がかかることぐらいでしょう。私のような低スペックPCユーザーはカメラMOD+**影MODを使って画面を録画するとカックカクになってしまいます**が、最新のv1.0.7からは**時間は掛かりますが影付きでヌルヌルな動画を作成してくれる**んです。

## 「ReplayMod」の最新バージョンをダウンロードしよう

「ReplayMod」のダウンロードページ(公式)

[![最新版のReplayModをダウンロードしましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161441.jpg)  
http://www.replaymod.com/download/](http://www.replaymod.com/download/)

公式サイトより、ReplayModの最新バージョンをダウンロードしましょう。**必ず、影MODに対応したv1.0.7以降をダウンロードしてください。** ReplayModの二次配布は確認していませんが、くれぐれも[二次配布サイトには気を付けましょう](https://www.napoan.com/stop-mod-reposts/)。

![Snapshot版をダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111831.jpg)  
\[2016年5月7日追記\] **SEUS等のハイエンドなシェーダーパックを使う場合、「Dec 10」の日付のv1.0.7を使うと書き出し時にクラッシュします。**下の「Latest Snapshot」を使って下さい。私はこれを知らなかったので一生懸命作ったカメラパスデータが消えてしまいました＞＜

「ReplayMod」の使い方(リプレイ閲覧/編集/カメラの設定/動画書き出し/画像挿入)の解説

[![ReplayMod1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135735.png)  
https://www.napoan.com/replay-mod-part1/](/replay-mod-part1/ "【MOD解説】")

ダウンロード以降の導入方法や、ReplayModの基本的な使い方については▲の記事をお読み下さい。第一回と第二回、特別編の3記事をご用意しています。(この記事はReplayModシリーズ第4弾です)

## 「Shaders Mod」を導入して、Optifineは無効化!

「ReplayMod」でシェーダーパックを使うには、現在Karyonix氏が開発を引き継いでいる**「[Shaders Mod](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1286604-shaders-mod-updated-by-karyonix)」が必要**です。マイクラのバージョン1.8版のShadersModをダウンロードして導入しましょう。

「Shaders Mod」のダウンロードページ(公式)

[![ShadersModをダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160213.jpg)  
http://shadersmod.net/version-1-8/](http://shadersmod.net/version-1-8/)

[![Optifineは無効化する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133419.jpg)](#3/7/37b53a8b.jpg "Optifineは無効化する")

ShadersModをmodsフォルダに入れましょう。それともう一つ、**Optifineを導入している方は、拡張子に「うんこ」と付けるなどして無効化して下さい。**私ずっと勘違いしていたのですが、ShadersModってOptifineが無くても動くんですね… むしろOptifineと共存させるには設定を変えたりする必要があって面倒なんですね。

[![Optifineが入っていると動画を書き出せない](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161300.png)](#c/e/ce4136be.png "Optifineが入っていると動画を書き出せない")

part1でも触れましたが、2015年12月15日現在最新の**「ReplayMod v1.0.7」では、Optifineが導入されているとそもそも動画を書き出せないんです。**いつかReplayModとOptifineが仲良くなりますように…

## シェーダーパックを適用した状態で動画を書き出す手順

[![シェーダーパックを適用しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152954.png)](#a/3/a32309ce.png "シェーダーパックを適用しよう")

ShadersModを導入すると、ビデオ設定画面に**「Shaders…」**  
ボタンが現れますのでクリックしましょう。ここで適用するシェーダーパックを選択します。私のおすすめは「[KUDA-Shaders v5](http://dedelner.net/choosedownload/)」です。**とっても動作が軽く、しかも草木の揺れや水の透明感などバッチリ。**

それとリプレイを動画化するには、ReplayModの導入に加えて「ffmpeg」をPCにインストールする必要があります。**詳細な書き出し手順と設定については[part2](/replay-mod-part2/)で解説しています**のでご参照下さい。

[![高画質で動画を書き出しましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145238.png)](#7/f/7f7c20a5.png "高画質で動画を書き出しましょう")

シェーダーパックの細かいグラフィック表現を最大限活かすために、動画を書き出す際、できるだけ**「MP4 – High Quality」を選択**しましょう。**解像度も動画サイトに合わせて、例えばYoutubeなら1920×1080のフルHD画質がおすすめです。**(PCのモニターより高い解像度でも大丈夫!)

▲ちなみにこの動画は、1920×1080で書きだした後AviUtlで文字やBGMを付けました。2回動画を書き出しするため時間は掛かりますが、私にとってヌルヌルな動画を作れた時の達成感は格別です。皆さんも是非[ReplayMod](http://www.replaymod.com)を使って、**綺麗でヌルヌルな建築PV動画など**を制作してみてください。
