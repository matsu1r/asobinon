
---
title: 1.11対応! ForgeとLiteLoaderを共存させる方法 (ForgeのmodsにLLを入れるには)
slug: /minecraft-je/howto/howto-install-liteloader-into-forge
description: 「WorldEdit CUI」や「VoxelMap」などのクライアントMODの前提として要求される事の多い「LiteLoader」。今回はLiteLoaderを、Forgeに普通のMODとして導入して共存させる手順を解説します。
 [2016年6月12日追記] LiteLoaderがバージョン1.9.4まで対応していたので、導入方法を一部書き直しました。
---

![LiteLoaderをForgeと共存させる方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123321.png)

「WorldEdit CUI」や「VoxelMap」などのクライアントMODの前提として要求される事の多い「LiteLoader」。**今回はLiteLoaderを、Forgeに普通のMODとして導入して共存させる手順を解説します。**  
**\[2017年1月15日追記\] LiteLoaderがバージョン1.11.2/1.11まで対応しています。**

## 今ホットな前提MOD「LiteLoader」って何?

[![2014-11-4_19-16-54](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134805.jpg)](#4/4/44ac7010.jpg "2014-11-4_19-16-54")  
(画像は[公式フォーラム](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1290155-liteloader-for-minecraft-1-7-10)より)  

「LiteLoader」とは、Forgeのように **MODを導入する際に前提となるMOD、というよりプログラムです。**インストーラーからインストールし、**「.litemod」ファイルをmodsにブチ込んでMODを導入**します。

LiteLoaderを前提としているMODなんて何がある…? …色々あります。LiteLoaderは「クライアントサイドで動くMODが作りやすい」のが特徴ですから、**「VoxelMap」「WorldEdit CUI」「Matmos」「Macro / Keybind Mod」などの便利系を使うのに必要なんです。**

![LLだけじゃForgeのMODは使えない](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124144.png)

しかしそれらのMODを使うために**LiteLoaderだけインストールすると、ForgeのMODが使えません。既に遊んでいるMODと一緒に、それらのLiteLoader用のMODを使うには…** そんなあなたのために、この記事では「LiteLoaderをForgeにMODとして導入する手順」を解説します。

## 先にForgeを導入して使える状態にしておいて下さい

まずは、**ほとんどのMODの大前提、Minecraft Forgeを導入しないといけませんね。**_**Forgeを導入しているよ!**_ という方は、[こちら](#LL)をクリックしてスキップして下さい。

新しくて簡単なForgeの導入方法

[![新しいMOD導入方法修正版-min](https://www.napoan.com/wp-content/uploads/2015/11/38939376d8c8d788166244cd9b86945f-1.png)  
https://www.napoan.com/new-way-to-install-mod/](/new-way-to-install-mod/ "[Minecraft]これで絶対導入できる! 修正版新しいMODの導入方法- Forgeやフォルダの設定等を分かりやすく解説")

Forgeの導入方法については、**ページの尺の都合上▲の記事に全てまとめていますの記事を参考にして下さい。**modsフォルダーが生成されて様々なMODが導入できるようになれば準備完了です。

## LiteLoaderのダウンロード

さて、ここからは先ほど導入したForgeに、**LiteLoaderを追加する形で共存させます。**それではLiteLoaderの公式サイトからインストーラーをダウンロードしましょう。

LiteLoaderのダウンロード

[![LLのダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112001.jpg)  
http://www.liteloader.com/download](http://www.liteloader.com/download)

▲遊びたいバージョンを選びましょう。

![ダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112005.jpg)

Windowsの方は上のexe版、MacやLinuxの方は下のjar版をダウンロードします。

## LiteLoaderのjarファイルを取り出してmodsに入れよう

![Extract Jar](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102153.jpg)

ダウンロードしたインストーラーを開いたら、**一番下の「Extract jar file」を選択してOK**しましょう。デフォルトでは.minecraftフォルダーにjarが生成されます。

![jarをMODSに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111622.jpg)

選択されていたフォルダー(デフォルトでは.minecraft)に、**「liteloader-xxx.jar」**が生成されます。これを、お使いのGeme Directoryのmodsフォルダに入れましょう。**これまで通りMODを導入する感覚で、LiteLoaderが導入できてしまうのです。**

[![LiteLoaderロード中...](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160156.jpg)](#c/2/c28da35b.jpg "LiteLoaderロード中...")

LiteLoaderを入れたForgeのProfileで起動。するとMojang ABのロゴの下に見慣れないバーが。

[![LiteLoader導入完了!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180548.png)](#f/c/fc793db4.png "LiteLoader導入完了!")

**Forgeの「Mods」**を残しつつ、**画面右上にチキンマークが!**これでもう**ForgeのMODと一緒に、WorldEditCUIなどのLL用MODを使えるのです。**
