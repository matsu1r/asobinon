---
title: 「SEUS」をIntel HD Graphicsで動かす方法。憧れのシェーダーパックをノートPCで! [影MOD]
---

[![SEUSをIntelHDGraphicsで](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152906.jpg)](#a/2/a2671560.jpg "SEUSをIntelHDGraphicsで")

影MODを動かすのに必要な**「シェーダーパック」**の中で、**一番人気なのは「Sonic Ether’s Unbelievable Shaders」、通称SEUS。太陽光の表現などがとても綺麗です。**でも、**ノートPCのIntel HD Graphicsが古かった場合、そのままでは動きません…** そこで、今回はオンボード(グラボ無し)でSEUSを無理やり動かす方法を解説します。

## 目次

*   [今回導入する「SEUS」ってどんなシェーダーパック?](#about)
*   [ドライバーを更新するだけでちゃんと動く場合もあります](#driver)
*   [前提となる影MODを導入しよう。1.8.8のOptifineは影を同梱!](#easy-inst)
*   [「SEUS」のバージョン10.1 Standard版をダウンロード](#dl-seus)
*   [正常に動かない方はSEUSの中身を改造すれば動きます](#edit-seus)

## 今回導入する「SEUS」ってどんなシェーダーパック?

[![ようこそSEUSの世界へ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154505.png)](#b/1/b19fcde4.png "ようこそSEUSの世界へ")

みなさんこんばんは、綺麗なです。いや、綺麗なのは後ろの森でしょ。ということで、**綺麗を追求した大人気、ド定番のシェーダーパック「SEUS」**で遊んでみましょう。それではスクショを何枚かどうぞ。

[![森の中の池](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145002.png)](#7/d/7d22693c.png "森の中の池")  
[![夜のサバンナ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142044.png)](#6/2/627e837f.png "夜のサバンナ")  
[![水辺の朝](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142411.png)](#6/6/665b476b.png "水辺の朝")

いやぁ、綺麗ですねぇ。**SEUS特有の太陽の光と水面の反射がたまりません。**こんなに綺麗なんじゃ、お使いのPCで動くかどうか不安な方も多いことでしょう。**でも大丈夫。このスクショはIntel HD Graphics 4000、つまりグラフィックボード無しのノーパソで撮影しました。**30fps前後で快適に動くんです! …とある方法を使えばね。

## ドライバーを更新するだけでちゃんと動く場合もあります

[![正常に動かないならドライバーを更新](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134357.png)](#4/1/41a84fc6.png "正常に動かないならドライバーを更新")

影MODの動作を左右するのは、グラフィックボード、それが無ければIntel HD Graphicsなどのグラフィック機能です。そしてそれを司るのが”ドライバー”。**ドライバーのソフトをアップデートするだけでSEUSが完璧に動く場合もあります。(更新しても動かないならドライバーの更新に加えてSEUSの改造が必要)**

Intel HD Graphicsのドライバーのダウンロードページ

[http://downloadcenter.intel.com/ja/](http://downloadcenter.intel.com/ja/product/81496 "IntelHDGraphicsのドライバーのダウンロード")  
▲検索欄でCPU名から検索したり、OSから絞り込んだりできます。

▲**必ずお使いのPCに搭載されているHD Graphicsの数字を確認しましょう。**「4000~6200」だとか、最近だと「520」だとか三桁になっています。OSの種類も注意しましょう。

## 前提となる影MODを導入しよう。1.8/1.8.8のOptifineは影を同梱!

[![前提となる影MODを導入しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145913.png)](#8/4/84a454e7.png "前提となる影MODを導入しよう")

シェーダーパック「SEUS」を入れるためには、**影MOD(ShadersMod)が必要**です。しかし、マイクラのバージョン**1.8/1.8.8用の最新版Optifineには、直接シェーダーパックを入れられる**んです。

*   **他のMODと一緒に使いたい場合**: 「Optifine」と「ShadersMod」をForgeに入れる
*   **1.8/1.8.8でOptifineと影だけ使いたい場合**: Optifineの最新版をインストールする

### ForgeのMODと一緒に使いたいならShadersModをダウンロード

バージョン1.8のForgeを導入していて(導入方法は[こちら](/minecraft-je/howto/install-forge/))、**既存のMODと一緒に影MODを使いたい**場合は、**ShadersModの1.8版**をForgeに導入する必要があります。

ShadersModの1.8版をダウンロード

[![ShadersModをダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152530.jpg)  
http://shadersmod.net/version-1-8/](http://shadersmod.net/version-1-8/ "Version 1.8 - Shadersmod.net")

![OotpfineとShadersModをmodsに入れる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162004.jpg)

「ShadersMod」を、**ランチャーでGamde Directoryに設定したフォルダのmodsに**入れましょう。**「そんな設定した覚えは無いぞ!」**って方は[こちらの記事](/minecraft-je/howto/install-forge/)を参考にForgeを導入しなおして下さい。

### 1.8 / 1.8.8以降の最新の環境で影だけ使いたいならOptifineをインストール

[![Optifine最新版は影MODと合体したんです](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142109.png)](#6/2/62bb323a.png "Optifine最新版は影MODと合体したんです")

バージョン1.8/1.8.8/1.8.9の最新のOptifineなら、なんと**Optifineだけでシェーダーパックを読み込めるようになりました!** つまりForgeが無くても影を存分に楽しめるんです。

Forge/ShadersMod不要の影MOD導入方法の解説記事

[![Forge/ShadersMod不要の影MOD導入方法の解説記事](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152620.png)  
optifine-integrated-shadersmod/](/optifine-integrated-shadersmod/ "OptiFine Downloads")

▲ForgeやShadersMod不要の影MOD導入方法(v1.8~)は上記記事で解説しております。**限りなくバニラに近い環境で、安定した  
影MODでのプレイを楽しみたい方**は是非こちらの方法をお使い下さい!

[![FastRenderをOFFに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154201.png)](#a/e/aeac17a7.png "FastRenderをOFFに")

Optifineを導入している場合、**「ビデオ設定」→「Performance…」→「Fast Render」と、「Quality…」→「Anisotropic Filtering(異方性フィルタリング)」「Antialiasing(アンチエイリアス)」をOFFに**しないとシェーダーパックを使えません。

## 「SEUS」のバージョン10.1 Standard版をダウンロード

それでは、信じられないほど美麗な**「SEUS v10.1」のうち「Standard」をダウンロード**します。他のシェーダーパックと違って、ダウンロード方法がちょっとややこしいんです…  
[http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1280299-sonic-ethers-unbelievable-shaders-v10-1](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1280299-sonic-ethers-unbelievable-shaders-v10-1)  
▲まずこちらの公式フォーラムにアクセスしましょう。

![SEUSの公式フォーラムのページ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208163306.jpg)

▲下の方に「SEUS **v10.1 Standard**」のダウンロードリンクがあります。クリックしてAdf.lyへ。

![利用規約を読んでからダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208163148.jpg)

▲Adf.lyからこんなページに飛びます。利用規約を読んでチェックしてからDOWNLOADを押しましょう。 …私の環境では、**何故かChromeでエラーが返されます。Firefoxなら正常にダウンロードできました。**

[![shaderpacksフォルダにzipを入れる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208155542.jpg)](#b/c/bc73781c.jpg "shaderpacksフォルダにzipを入れる")

ダウンロードしたSEUS v10.1 Standardのzipを、**ランチャーでGame Directoryに設定したフォルダの「shaderpacks」フォルダに入れて下さい。**さあ、存分に影を楽しみま…

[![そのままSEUSを導入したらこうなる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208141505.png)](#5/d/5da436a3.png "そのままSEUSを導入したらこうなる")

**ファッ!?** PCにグラボを積んでいる方は関係ない話ですが、**ノートPCなどの「Intel HD Graphics」の古いモデルではSEUSが正常に動かない**んです。**「やっぱりノーパソでSEUSは厳しいでしょ!」** …いいえ、解決策があります。

※Intel HD Graphics 4200以上をお使いの方は、ドライバーを更新済みならこの時点で正しく動いていると思います。**もしドライバーを更新したのに動かない方は、次のステップに進んで下さい。**

## 正常に動かない方はSEUSの中身を改造すれば動きます

▲古いIntel HD GraphicsでなんとかSEUSを動かす方法を探していた所、[こちら](http://www.youtube.com/watch?v=tS_VFzD7MnE)の動画を見つけました。とても分かりやすく解決方法が解説されています。**lybxlpsvさん、役立つ動画をありがとうございます!**

![SEUSのzipを展開](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133351.jpg)

まず、先ほどshaderpacksに置いた**SEUSのzipを展開**してしまいましょう。

![shadersフォルダを開きます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208130725.jpg)

すると「SEUS-v10.1-Standard」という名前のフォルダが出てくるので、**中の「shaders」を開きます。**

![これらのファイルを削除します](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153857.jpg)

中には大量の重要そうなファイルが入っています。**勇気を出して以下の4つを削除しましょう!**

*   gbuffers\_entities.fsh
*   gbuffers\_entities.vsh
*   gbuffers\_terrain.fsh
*   gbuffers\_terrain.vsh

削除できたら、フォルダはそのままにしておいてください。**圧縮する必要はありません。**

[![zipが付いていない方を選択する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160135.png)](#c/2/c2561be7.png "zipが付いていない方を選択する")

ShadersModの場合は「設定」→「Shaders…」、Optifine単体の場合は「ビデオ設定」→「Shaders」からシェーダーパックを選択します。**今回は展開して中身を弄ったので「.zip」が付いていない方を選びます。**

[![処理優先でも木を綺麗にするテクニック](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152645.png)](#a/0/a03d3562.png "処理優先でも木を綺麗にするテクニック")

**SEUSを改造してしまったので草木は揺れません**が、最低限木漏れ日は楽しみたいですよね。「処理優先」でも木を綺麗にするには、**「ビデオ設定」→「Details…」→「Trees:」を「Fancy」に**します。

[![ブロックやMobの影には不具合があります](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140117.png)](#5/0/507635d9.png "ブロックやMobの影には不具合があります")

先ほど一部のファイルを削除したので、当然どこか不完全な箇所があります。**エンティティの影やブロックの影がおかしいのは妥協して下さい…** 美しい太陽の光が拝めるだけで満足ですよね。
