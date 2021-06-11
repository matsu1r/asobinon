
---
title: PC版のテクスチャをPEで使う方法 – リソースパックをPE向けに変換するアプリの紹介
slug: /minecraft-je/howto/convert-texture-pc-to-pe
description: マイクラPEのアップデート「0.15」で、ついにリソースパック(ゲーム内での呼称は”テクスチャパック”)が使えるようになりました。しかし… PE向けのテクスチャパックってまだまだ少ないですよね。多彩なリソースパックが使えるPC版が羨ましい… ん? PC版のテクスチャをPE用に変換してくれるアプリとかないの? ― ありました。ということでこの記事では「PC版のテクスチャをPEで使う方法」と題して、UTK.io制作の便利なアプリ「Resource Converter」を紹介します。PC版のリソースパックのzipを用意すれば、パパパッと変換して終わり!
---

![PC版のテクスチャをPEで使う方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102846.png)

マイクラPEのアップデート「0.15」で、ついにリソースパック(ゲーム内での呼称は”テクスチャパック”)が使えるようになりました。しかし… **PE向けのテクスチャパックってまだまだ少ないですよね。多彩なリソースパックが使えるPC版が羨ましい…** ん? **PC版のテクスチャをPE用に変換してくれるアプリとかないの? ― ありました。**ということでこの記事では「PC版のテクスチャをPEで使う方法」と題して、UTK.io制作の便利なアプリ**「Resource Converter」**を紹介します。PC版のリソースパックのzipを用意すれば、パパパッと変換して終わり!

この記事の内容は、記事を作成した時点のものです。(2016年8月2日) 今後アプリの使い方が変わったり、ダウンロードできなくなる可能性もありますのでご注意下さい。

## PC版のテクスチャをPE用に変換してくれるアプリ「Resource Converter」はAndroid専用です

![テクスチャパックの選択画面](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090743.jpg)

マイクラPEの大型[アップデート「0.15」](https://www.napoan.com/pe-alpha-015/)。もう一ヶ月以上前のことなんですね。ウマやピストンの影に隠れて**「リソースパックの読み込み」機能が追加されました**が… 残念ながら公式が提供した二つは有料でしたし、PE向けリソースパックもあまり作られていません。

![PC版はいいなぁ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122434.jpg)

検索して出てくるのはPC版向けのものばかり。まあ何年もの歴史の差がありますから当然なんですけどね… **ところで、これらのPC版向けテクスチャがPEで使えたらどれほど嬉しいことでしょう。 って、もう実現してるんですけどね。**

![Resource Converter](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104134.png)

こちらがそんな夢を叶えてくれるアプリ、**「Resource Converter」**です。制作は[マップとかダウンロードできるこのアプリ](https://play.google.com/store/apps/details?id=io.utk.android)を作った「UTK.io」。

![このアプリはAndroid専用です](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102050.png)

今更ですが、iOSユーザーの皆様申し訳ありません! **このアプリはAndroid端末専用なんです。**  
そうそう、安めのAndroidタブレット探してる方、「SHIELD Tablet K1」ってめっちゃコスパ良いですよ。PCゲームをリモートプレイできる独自機能付き。

## アプリのダウンロードとインストール、野良アプリなので注意

この「Resource Converter」は、2016年8月2日時点ではまだGooglePlayで配信されているのではなく、**サイト上でapkファイルをダウンロードしてインストールする、いわゆる”野良アプリ”**です。

![設定を変えておきましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123358.png)

ということでこのアプリはAndroidの**設定→「セキュリティ」→「提供元不明のアプリ…」をONにしておかないとインストールできない**のでご注意下さい。

「Resource Converter」のダウンロード

[![アプリのダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092544.png)  
http://eckoxsoldier.com/mcpe-0-15-0-convert-any-pc-texturepack-minecraft-pocket-edition-0-15-0-pc-texturepack-converter/](http://eckoxsoldier.com/mcpe-0-15-0-convert-any-pc-texturepack-minecraft-pocket-edition-0-15-0-pc-texturepack-converter/)

▲Adf.lyが出てきますが慌てず騒がず落ち着いてSKIP ADをタップしましょう。

![apkを開いてインストール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092608.png)

落ちてきたapkを叩けばインストールできます。はい。

## まずは解像度がx16のリソースパックを用意しよう

**さあ、PC版のリソースパックをダウンロードしまくろう!** …というわけにはいかないんです。**マイクラPEはまだ高解像度なテクスチャ(x32やx64など)に対応していない →訂正、対応はしていますがPC版のx32のテクスチャを変換して成功したことがないので、解像度が16×16のリソースパックを探すことをおすすめします**。

![Curseドーン](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092643.jpg)

そこで登場するのが「Curse」。MODをダウンロードする際によく目にするあのサイトです。あそこってリソースパックの配布場所でもあったんですね。

x16のリソースパックだけ探せるページ

[https://mods.curse.com/texture-packs/minecraft/category/sixteen-x](https://mods.curse.com/texture-packs/minecraft/category/sixteen-x)

![解像度でリソースパックを絞り込める](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092618.jpg)

上記リンクから、x16のリソースパック一覧にアクセスできます。**解像度で絞り込んで、さらにダウンロード数などで並び替えてテクスチャを探せる**、それがCurseです。

![PixelPerfectionを使います](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092622.jpg)

今回は、こちらの**「Pixel Perfection」**ってリソースパックを使ってみます。([リンク](https://mods.curse.com/texture-packs/minecraft/pixel-perfection-freshly-updated)) XSSheepさん、素晴らしいリソースパックをありがとうございます!

![ダウンロードボタン](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092637.png)

ダウンロードボタンは右上。Adf.lyとかを経由せずに直接ダウンロードさせてくれる親切なCurse。プレミアムユーザーのおかげですね…

## アプリを使ってリソースパックを変換! さらにPEで使えるようにしてくれる

x16のリソースパックをダウンロードできたら、いよいよアプリ「Resource Converter」の出番です。

![PICK A PC RESOURCE PACK .ZIP](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092626.png)

アプリを起動したら、まずPICK A PC RESOURCE PACK .ZIPをタップ。 ![リソースパックを選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092632.png)

するとフォルダー一覧が出てくるので、**下の方のDownloadフォルダーを開きましょう。**中に先程ダウンロードしたリソースパックのzipがあるのでタップ。

![変換ボタンをタップ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092600.png)

上にリソースパック名が表示されるので、確認してCONVERT…(以下略)をタップしましょう。

![Apply](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092613.png)

変換が成功した旨のメッセージが表示されたら、**APPLY…(以下略)をタップすれば自動でPEにインストールしてくれます!**

![PEを起動](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092604.png)

PEの起動ボタンまで用意してあるという親切設計。

![リソースパックが追加されている](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092549.png)

マイクラPEを既に起動している場合はアプリを再起動しましょう。設定→テクスチャ パックの管理ボタンを押せば、変換したリソースパックが出現しているはずです!

![いやー素晴らしい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110448.png)

お見事、綺麗にPC版のテクスチャを使えました! ツール制作者のUTK.ioの皆様、それからテクスチャ制作者のXSSheep氏に感謝です!

## PEが起動しなくなった時の対処法

![クラッシュ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110541.png)

間違えて高解像度のテクスチャを変換してインストールすると、**マイクラPEが落ちちゃう**んですよね…

![このテキストを消しましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105244.png)

もしそうなってしまった場合は、ESファイルエクスプローラーなどのアプリで**sdcard→games→com.mojang→minecraftpe→resource\_packs.txtを削除してからPEを再起動**しましょう。
