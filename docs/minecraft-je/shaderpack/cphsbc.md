
---
title: マイクラの世界をモノクロに! 色相彩度明度を自由に調整できるシェーダー「CPHSBC」の紹介
description: マッドマックスのモノクロ版なるものが劇場公開されるらしいっすね。時間無くて本編すら見れてないんですが。それはさておきマイクラの世界をモノクロにしてみませんか? ReplayModの作者、CrushedPixel氏がまたまた面白そうなものを制作されたようです。それが「CPHSBC (CrushedPixelHueSaturationBrightnessContrast)」というシェーダー。このシェーダーパックを使えば、画像編集ソフトを使わずに、目に映る物をモノクロにしたり、コントラストを上げたり、色相/彩度を変えたりできちゃいます。ある意味閲覧注意なおもしろ機能も入ってますのでご紹介します。
---

![CPHSBCシェーダー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122343.png)

マッドマックスのモノクロ版なるものが劇場公開されるらしいっすね。時間無くて本編すら見れてないんですが。それはさておき**マイクラの世界をモノクロにしてみませんか?**

[ReplayMod](https://www.napoan.com/replay-mod-part1/)の作者、**[CrushedPixel氏](https://twitter.com/CrushedPixel)**がまたまた面白そうなものを制作されたようです。それが**「CPHSBC (CrushedPixelHueSaturationBrightnessContrast)」というシェーダー。**このシェーダーパックを使えば、**画像編集ソフトを使わずに、目に映る物をモノクロにしたり、コントラストを上げたり、色相/彩度を変えたりできちゃいます。****ある意味閲覧注意なおもしろ機能**も入ってますのでご紹介します。

## 目次

*   [CrushedPixel氏による「CPHSBC」シェーダーパックの解説動画。](#video)
*   [Optifineのインストールとシェーダーパックのダウンロード・導入](#inst)
*   [コントラスト/彩度/明るさ/色相それぞれの設定方法](#settings)
*   [「Acid」機能で幻覚体験をして目を傷めよう](#asid)

## CrushedPixel氏による「CPHSBC」シェーダーパックの解説動画。

英語での解説ですが、このシェーダーパックがどんな物かはこちらの動画を見て頂ければご理解頂けると思います。**私がわざわざ記事書かなくてもこの動画で完結するんですけどね。**便乗アクセス稼ぎ乙。

## Optifineのインストールとシェーダーパックのダウンロード・導入

シェーダーパックを導入するには、昔は「ShadersMod」を入れる必要があったのですが**今はOptifineをインストールするなりForgeに入れるなり煮るなり焼くなりするだけ**でシェーダーパックを導入できちゃいます。

Optifineの導入方法と、シェーダーパックの導入方法の解説記事

[![Optifineの導入方法と設定を解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104342.png)  
https://www.napoan.com/optifine-setup-guide/](https://www.napoan.com/optifine-setup-guide/)

▲PC版の記事で一番読まれてるんじゃないかってぐらい好評の**導入方法解説記事**をご用意しております。Optifineをまだ導入していない方、これからシェーダー使いになりたい方は是非お読み下さい。

![シェーダーのダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092915.png)

で、肝心のシェーダーパックのダウンロードはどこかというと[先程貼った動画](https://www.youtube.com/watch?v=zgGl-xLlOcs)の説明文にリンクがあります。ダウンロードしたzipをshaderpacksフォルダーにぶち込んで下さい。

## コントラスト/彩度/明るさ/色相それぞれの設定方法

![ShaderOptionsを開く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110054.png)

このシェーダーパックは、適用しただけでは何も変わりません。Shaders(シェーダーの詳細設定)画面右下のShader Options…(シェーダーのオプション設定)をクリックして下さい。

![シェーダーの設定画面](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105249.png)

シェーダーの設定画面はこんな感じ。左上のAcidについては後述します。**コントラスト、彩度、明るさ、色相**の順に設定例を見ていきましょう。

![コントラスト](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104337.png)

Contrast(コントラスト)は陰影の濃さです。デフォルトは0.5。**最大の1にするとめっちゃくっきり、0にすると灰色一色に**なってしまいます。

![彩度](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122914.png)

Saturation(彩度)は色の鮮やかさです。デフォルトは0.5。**0にするとモノクロになり**、**最大の1にするとめっさ鮮やかに**なります。

![明るさ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104847.png)

Brightness(明度)は明るさです。デフォルトは0.5。0にすると真っ黒、最大の1にすると真っ白になります。

![色相](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111128.png)

Hue(色相)は… 説明しづらいですね。**「色をずらす」って感じ**でしょうか。デフォルトは0。0.5にすると補色(反対の色)になります。1にしようとすると0に戻ってきます。

![使用例](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092146.png)

4つのオプションをうまく組み合わせて、理想の世界を作り出しましょう。

## 「Acid」機能で幻覚体験をして目を傷めよう

![Acid](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092151.png)

ところで左上のAcidって何なんでしょうね。**何回かクリックして「1」にしてみてください。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103445.gif)

ぐるぐるぐるぐる… 色相が目まぐるしく変化します。Acidを弄れば、こういう風に**色が変化していくスピードを設定できる**のです。

▲「マイクラで\[自主規制\]使ってみた」という動画。**このシェーダーパックの大胆な使用例動画です。**これ幻覚というか目がチカチカするだけですね…\[自主規制\]の幻覚ってどんな感じなんでしょ。

最後までお読み頂きありがとうございました。ReplayModといい[PixelCam](https://www.napoan.com/camera-mod-pixelcam-guide/)といいこちらのシェーダーといい、CrushedPixel氏にはいくら感謝しても足りません…
