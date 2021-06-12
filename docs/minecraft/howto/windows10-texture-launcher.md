---
title: Windows10版でテクスチャーパックを使うには? 0.15でより簡単に導入できるようになりました
---

![Windows10版でテクスチャーパック](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105257.png)

マイクラの**Windows10版**といえば、**内容はほぼPEですがWindows上で非常に軽快に動く**ということで最近注目を浴びていますね。そういえばPEはBlockLauncherを使えばテクスチャーパックを導入できますが、**Windows10版でダウンロードしたテクスチャを使うにはどうすればいいのでしょうか。**今回紹介するのは、jocopa3氏制作の**「Texture Pack Launcher for Minecraft Win10」**です。この記事ではこのツールを使って、既存のPE向けのテクスチャーパックをWindows10版に導入する手順を解説します。  
(PEでは”リソースパックが実装された”となっていますが、0.15の時点では実質”テクスチャパック”で翻訳もテクスチャパックですのでこの記事では”テクスチャパック”と書いています)

\[2016年6月21日追記\] バージョン0.15で**テクスチャパックの導入がより簡単になった**ので記事を書き直しました。

## まずはPE用のテクスチャを入手しよう。ダウンロードについての注意

![PE用のテクスチャを使います](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578383215/a6293741ebc8af5e783326d450cb994d_c4aexm.jpg)  
(▲のスクショでは[「Textura Feluxis Ultra Realista HD」](http://mcpehub.com/texture/textura-feluxis-128x128-porteado-por-edward-elric)を使っています)

Windows10版の中身はほぼPEですから、**ツールを使ったとしても、使えるテクスチャーパックはPE用のものだけ**です。つまり普通にテクスチャーパックを探すのではなく、マイクラPE向けの物を探さなければいけません。

![悪質なサイトも存在する](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578383213/4c5af3e0a678796d147983b7919d1a23_clifvl.jpg)

ですがPEのテクスチャーパックは日本ではあまり作成されておらず、基本的に海外のサイトをはしごして探すことになります。そんな時注意が必要なのが、無断で二次配布して作者の収益を横取りしている悪質なサイト。**プレイヤー全員のリテラシーが高いとは言い難いPE向けだからこそ、ユーザーを騙しているサイトがかなり存在するんです。**

![StopModRepostsを使おう](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578383211/b75612ae9ce43e3d949b5be4e3eb4ad3_swei0y.jpg)

そこで登場するのが**「StopModReposts」というChrome/Firefox/Operaのアドオン**。入れておけば、**悪質なサイトにアクセスしたら警告してくれる**優れもの。海外のサイトでテクスチャーパック等マイクラに関するコンテンツを探す際は、この「StopModReposts」を使うことをおすすめします。「#StopModReposts」運動について詳しくは[こちらの記事](https://www.napoan.com/stop-mod-reposts/)で解説しているので合わせてお読み下さい。

色々探した結果、

*   [マイクラの公式フォーラム](http://www.minecraftforum.net/forums/minecraft-pocket-edition/mcpe-texture-packs)
*   「[MCPE Hub](http://mcpehub.com/textures)」
*   「[MCPE Universe](http://mcpeuniverse.com/texture-packs/)」

の3つはテクスチャーパックの作者さん自身が投稿されていると思われ、信頼性が高いと言えそうです。(上記サイトが絶対大丈夫というわけではないです)

Windows10版0.15への対応が確認できたテクスチャ「oCd Texture Pack」

[![oCd Textureのダウンロード](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380698/bandicam-2016-06-21-19-36-08-453_omrv3d.jpg)  
http://mcpedl.com/ocd/](http://mcpedl.com/ocd/)

▲2016年6月21日現在、Windows10版0.15に全てのPE用テクスチャが対応できているわけではありません。探してみたところ、**この「oCd Texture Pack」が0.15で正常に動いたので、まずは上記リンクからoCdをダウンロードすることをおすすめします。**

## テクスチャーパック用フォルダーの準備と導入手順

ここからは、ダウンロードしたテクスチャーパック(この例ではoCd Texture)をWindows10版に導入する手順を解説します。

![Win+Rキーで「%localappdata%」と入力](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578384105/c28b514a_sx2wkj.jpg)

**Windows+Rキーを同時押し**で”ファイル名を指定して実行”画面を開いて、**%localappdata%**と入力してエンター。

[![この順番でフォルダを開こう](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578383295/d0c62086_yyyzfu.jpg)](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578383295/d0c62086_yyyzfu.jpg)

**「Packages」→「Microsoft.MinecraftUWP…」**の順番でフォルダを開いて下さい。**[こちらの記事](https://www.napoan.com/win10-more-render-distance/)でも書きましたが、「Package」フォルダ内は大量の「Microsoft」で「Minecraft」が隠されてます**ので注意して探しましょう!

![com.mojangフォルダーまで開け](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380696/8b6007b4bbc2f963963da4f8c5238ac0_l9eghb.jpg)

MinecraftUWP\_…→LocalState→com.mojang の順番でフォルダーを開いていきましょう。

![resource_packsフォルダーを作成](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380695/52befbb3fa233f0f88fbc4e85aea0ffb_seulzh.jpg)

com.mojangフォルダーの中に、**resource\_packsという名前でフォルダーを作ります。**アンダーバーと間違えてハイフンを打たないように注意!

![テクスチャのzipを置いたら展開](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380693/9ed97ec5ca2e1d0c541c8bd419afd129_asyh2f.jpg)

作成したresource\_packsフォルダーに、ダウンロードしたPE用テクスチャのzipを入れます。**zipのままの状態でWindows10版を起動し、テクスチャパック管理画面が開ければいい**のですが、**大抵の場合クラッシュします。何故ならテクスチャのフォルダー構造が二重になってしまっているから。**  
この「oCd」は最初から二重になってしまっているはずなので、直すためにzipを展開します。

![二重構造を解消](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380692/e722778f3d0cb1cfaddc9523c90926b5_humevr.jpg)

oCdのzipを展開すると、さらに中に「oCd」ってフォルダーが入っているんです。**これを切り取ってresource\_packs直下で貼り付ければ二重構造が解消できます。**

![zipは削除](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380690/effbef6c79ad79620a1541f366f8dc8f_k2jbbt.jpg)

そうそう、こういう問題を修正するためにzipを展開した場合は、**元のzipを削除するのを忘れずに。**残っていると無駄に読み込んでクラッシュします。

![テクスチャパック管理画面](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380688/537fa3a30b3bf1bbee3663327b8225a0_razzq4.jpg)

パックを正しくresource\_packsフォルダーに配置できたら、設定→(テクスチャパックの)管理からテクスチャーパックの管理画面を開きましょう。すると**選べるリソースパックが増えているはずです。**

![テクスチャが適用できた](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380687/bandicam-2016-06-21-19-23-05-840_t6lzp5.jpg)

一覧に追加されたテクスチャーパックを**クリックして右へ移動させると、テクスチャーパックが適用されます。**やったぜ。

---

**「○○についてまとめてほしい/解説してほしい」**などのご意見ご感想、コメント欄や[Twitter](https://twitter.com/napoan)でお待ちしています。
