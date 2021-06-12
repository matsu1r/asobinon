---
title: LiteLoader導入方法の目次
slug: /minecraft-je/howto/install-liteloader/
sidebar_position: 0
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

<a href="/minecraft-je/howto/install-forge/" class="button burron-primary">Forgeの導入方法のページ</a>

Forgeの導入方法については、**ページの尺の都合上▲の記事に全てまとめていますの記事を参考にして下さい。**modsフォルダーが生成されて様々なMODが導入できるようになれば準備完了です。

