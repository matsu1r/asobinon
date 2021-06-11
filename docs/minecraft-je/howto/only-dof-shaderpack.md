
---
title: DOF(被写界深度)効果だけを追加するシェーダーパック「Nonameguy's DOF Shaders」の紹介
slug: /minecraft-je/howto/only-dof-shaderpack
description: 皆さんDOF(Depth Of Field)ってご存知ですか。焦点を合わせた物以外がぼやける「被写界深度」効果のことです。ピントを合わせている物はくっきり、近くや遠くはぼかすことでリアルな立体感が生まれるので、格好いいスクショを撮りたいなら是非使いたい効果なのですが… 後からスクショを編集するのも面倒なので、最初からシェーダーで付けちゃいましょう。今回紹介するのは、nonameguy798氏制作の「Nonameguy’s Dof Shaders」です。
---

![OnlyDOFShadersの紹介](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111328.png)

皆さんDOF(Depth Of Field)ってご存知ですか。**焦点を合わせた物以外がぼやける「被写界深度」**効果のことです。ピントを合わせている物はくっきり、**近くや遠くはぼかすことでリアルな立体感が生まれる**ので、格好いいスクショを撮りたいなら是非使いたい効果なのですが… **後からスクショを編集するのも面倒なので、最初からシェーダーで付けちゃいましょう。**今回紹介するのは、nonameguy798氏制作の「Nonameguy’s Dof Shaders」です。

## DOFってどんな効果? シェーダーを使ったスクショをどうぞ

ハイエンドなシェーダーパックはDOFが付いている場合が多いですが、DOF付きのシェーダーパックを使うには大抵高いスペックが要求されます。**DOFだけ使いたい、そんな声に応えるのが「Only DOF Shaders」。**

※以下の画像は全て、一切加工しておりません。

![DOF1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091605.png) ![DOF2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091609.png) ![DOF3](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091613.png) ![DOF4](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091616.png)

どうです? うまく物にピントを合わせれば存在感を演出できますし、遠景を撮影した場合もうまい具合にぼやけてより奥行きが分かりやすくなります。**何気ない景色を少しだけ格好良くしてくれる、それがOnly DOF Shaders。**

## 「Nonameguy’s Dof Shaders」のダウンロードと導入方法

シェーダーパックを使うには2つの方法があります。一つは「ShadersMod」を導入する方法、もう一つは最新版の**Optifineを使う**方法です。私のおすすめは後者。

Optifineを使った簡単な影の導入方法の解説記事

[![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091403.png)  
https://www.napoan.com/optifine-integrated-shadersmod/](https://www.napoan.com/optifine-integrated-shadersmod/)

管理人おすすめの**「Optifineを導入することでシェーダーパックを使えるようにする」手順**については▲の記事で解説しています。シェーダーパックを使うのが初めての方は是非お読み下さい。

GameDirectoryに設定したフォルダーにshaderpacksフォルダーが生成されたら、シェーダーパックを使う準備は完了です。それでは「Only DOF Shaders」をダウンロードしましょう。

「Only DOF Shaders」のダウンロード

[![Only DOF Shadersのダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111740.jpg)  
https://www.planetminecraft.com/mod/nonameguys-dof-shaders/](https://www.planetminecraft.com/mod/nonameguys-dof-shaders/)

▲\[2019/06/24追記\] フォーラムが閲覧不能になっているので、別の作者の同じ内容のシェーダーのリンクに差し替えました。

![シェーダーパックをshaderpacksフォルダーに入れる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090455.jpg)

ダウンロードしたzipファイルを、shaderpacksフォルダーに入れましょう。

![シェーダーパックを適用](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105452.png)

Shaders…画面にOnlyDOFが表示されたら選択して適用しましょう。これでいつでもイカしたスクショが撮れるようになります。

## 暗い所の描画に違和感を覚えたらOld LightingをONにしよう

![景色に違和感が](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091620.png)

シェーダーパックを適用し、さあ遊ぼう! …と思ったら強烈な違和感が。そう、**なんだかブロックの陰影がのっぺりしてます**よね。**バニラの影の表現に戻すには**どうすればいいのでしょうか。

![OldLightingをONに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091624.png)

そんな時はShaders…画面の****Old Lighting**をDefaultまたはONに**しましょう。オンもデフォルトも効果は同じで、バニラの光源表現を復活させてくれます。

## 遠くの景色をぼかす機能を無効化するには

![遠景をぼかす機能](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105923.png)

「Nonameguy’s Dof Shaders」には、**何かにピントを合わせていなくても遠くの景色をぼかす機能**が付いています。これはこれで味があるのですが、お口に合わない方は無効化出来ますのでご安心を。

![DISTANT_BLURをOFFに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104637.png)

Shaders…画面でOnlyDOFを選択し、右下の**Shader Options**をクリックするとシェーダーパックの詳細設定画面が開きます。(**ボタンがない場合はOptifineの最新版をお使い下さい**)その中の**DISTANT\_BLUR**をOFFにしましょう。

[![DISTANT_BLURについて](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095602.png)](//exr-nap.sakura.ne.jp/www.napoan.com/wp-content/uploads/2016/03/0b85f7ba89d01827531bfa5130b9e369.png)  
▲クリックで別タブで大きく表示します。

「DISTANT\_BLUR」(遠景ぼかし)機能のON/OFFの変化はこんな感じです。

---

**「○○についてまとめてほしい/解説してほしい」**などのご意見ご感想、コメント欄や[Twitter](https://twitter.com/napoan)でお待ちしています。
