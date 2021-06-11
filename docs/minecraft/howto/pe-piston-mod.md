---
title: 【マインクラフトPE】0.14対応! ピストンを追加するMODの導入方法と、両開き自動ドアの作り方
---

![PEピストンMOD](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145716.png)

Minecraft PEの[アップデート「0.13」](https://www.napoan.com/pe-alpha-013/)でレッドストーン関連のアイテムが追加されましたが、まだ物足りないですね。例えば**ガシャっと開く自動ドアや隠し扉**を作るには… そう、**「ピストン」と「粘着ピストン」**が必要! 今回は**PE0.13にピストンを追加するMODと、ピストンを使った自動ドアの作り方**を解説します。

PEのバージョン0.14に対応していることを確認しました。**\[2016年2月23日追記\]ベータ版じゃないBlockLauncherでも動かせるようになりました。**

アップデート「0.15.0」の内容まとめ記事はこちらです。

[![Minecraft:Pocket Edition 0.15.0内容まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092340.png)  
https://www.napoan.com/pe-alpha-015/](/pe-alpha-015/)

## 目次

*   [まずはBlockLauncherを導入しましょう。](#blocklauncher)
*   [「Piston mod」をURLからインポートしてMOD導入](#import)
*   [追加される「ピストン」「粘着ピストン」の使い方](#howtouse)
*   [粘着ピストンを使った両開き自動ドアの作り方](#door)

## まずはBlockLauncherを導入しましょう。

「BlockLauncher」のダウンロード(Google Play)

[![BlockLauncherが必要です](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208083451.jpg)  
http://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher&hl=ja](http://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher&hl=ja)

今回紹介するMOD、というかパッチを使うには**「BlockLauncher」が必要**です。インストールしていない方は今すぐ入れましょう。ちなみに、このアプリはAndroid限定です。Google Playに加え**[Amazonアプリストア](http://www.amazon.co.jp/Zhuowei-Zhang-BlockLauncher/dp/B00BXTTRO2/)からもダウンロードできますので、Kindle Fireシリーズの端末でもインストールできます。**

ちなみに私は、この前有料の[「BlockLauncher Pro」](http://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher.pro)を購入しました。今回の記事ではBlockLauncher Proを使って導入作業を進めていきます。

## 「Piston mod」をURLからインポートしてMOD導入

「Piston mod」作者の動画(ダウンロードリンクは概要欄)

[![作者の動画の概要欄からjsを表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124540.png)  
http://www.youtube.com/watch?v=13Rne7O4b-Q](http://www.youtube.com/watch?v=13Rne7O4b-Q)

▲この動画はMOD作者でありBlockLauncher作者でもあるZhuowei氏のものです。**説明欄にMODのjsファイルへのリンクがありますのでタップしましょう。**

![MODのjsファイルが表示された](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132553.png)

するとこんな風に英数字の羅列が表示されます。これはMODそのものの「piston.js」というファイルです。保存して使ってもいいのですが、**今回はダウンロードが面倒なので別の方法を使って導入します。**

![URLをコピーしよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161036.png)

表示されたファイルの**アドレスを全てコピー**しましょう。最後が「piston.js」になっているはずです。

BlockLauncherを起動し、上のスパナマークのメニューを開いて**「Manage modPE scripts」**をタップしましょう。

![WebAddressをタップ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208175752.png)

**「Import」→「Web Address」**をタップします。実はBlockLauncher、jsファイルをダウンロードせずに**Web上のアドレスから導入できるんです。**

![アドレスを貼り付けてスイッチをONに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131623.png)

先ほどコピーしたアドレスを貼り付けてOKを押せば、パッチ一覧に「piston.js」が追加されます。**右上のスイッチをONにして有効化**するのも忘れずに!

## 追加される「ピストン」「粘着ピストン」の使い方

![ピストンや粘着ピストンが追加されます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144023.png)

このMODを導入すると、**「Crap piston(ガラクタピストン)」と「Crap sticky piston(ガラクタ粘着ピストン)」**が追加されます。なんだか自信無さげな名前ですが、大丈夫なんでしょうか… **ちなみに2015/12/05現在、レシピは用意されていないようです。**

![通常のピストンはブロックがくっつかない](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161535.png)

こちらの「Crap piston」は、PC版などで言う**「ピストン」**です。**ブロックはくっつかず、一度押したらそれっきりです。**例えば**砂を押し出して海を埋め立てたりする**だけならこちらで十分です。

![粘着ピストンはブロックがくっ付く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145357.png)

**「Crap sticky piston」(粘着ピストン)**なら、押し出したブロックがくっ付いて戻ってきます。例えば**自動ドアですとか、Mob圧殺トラップなら何度もブロックを動かす必要がある**ので粘着ピストンで作りましょう。

![本来押せないはずのブロックが押せる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162120.png)

このMODで追加されるピストンは、**「かまど」「黒曜石」などのPC版ではピストンで動かせないブロックも動かせてしまいます。**チェストを動かせるのかは未検証ですが、中身はどうなるんでしょうか…

## 粘着ピストンを使った両開き自動ドアの作り方

![両開き自動ドアの作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150425.png)

それでは最後に、このMODで追加される**「粘着ピストン」を使った「両開き自動ドア」の作り方を解説します。**といってもとっても簡単に作れるので、私が解説する必要はないかも知れませんが…

![自動ドアの回路の解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140108.png)

こちらが回路の全体図です。**ブロックを2つずつ置いて、図のようにレッドストーントーチを刺し、粘着ピストンを内側に向けて4つ置くだけ。**あとは下のブロックにワイヤーを繋げて感圧板へ繋げて下さい。

**ピストンと合わせて作りたい、回路のパーツまとめ**

[![レッドストーン回路のパーツまとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161417.png)  
https://www.napoan.com/pe-circuits-without-repeater/](/pe-circuits-without-repeater/" "レッドストーン回路のパーツまとめ")

私には簡単な自動ドアしか思い付きませんでしたが、**他のレッドストーン関連のアイテムと組み合わせれば可能性は無限大です。**皆さんもピストンをうまく回路に組み込んで、色々な装置を作ってみては。

**「こんなMODを紹介してほしい!」「●●の方法を解説してほしい」**など、コメント待ってます。
