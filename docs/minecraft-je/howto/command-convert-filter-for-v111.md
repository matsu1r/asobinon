
---
title: 1.11でも動くようにワールドのコマンドをまるごと変換するMCEditフィルターとツールのご紹介
slug: /minecraft-je/howto/command-convert-filter-for-v111
description: 先日の記事で多少大袈裟に書きましたが、このままいけばPC版バージョン1.11ではエンティティに関わる既存の多くのコマンドが使えなくなります。防具立てを含む数十種類ものエンティティIDが変わっちゃったので…
 誰かが一刻も早く変換ツールを作ってくれたら… ふふふ、既に作られてました。今回紹介するのは、防具立てのアニメーションツールの作者のMrGarretto氏が光の如く速さで制作したMCEditフィルター「Entity Command Converter for 1.11 filter」です。既存のコマンド装置をまるごと選択してパパパッと変換して終わり!
---

![新しいエンティティIDへコマンドを変換するツール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101743.png)

[先日の記事](https://www.napoan.com/version111-entity-id-changes/)で多少大袈裟に書きましたが、このままいけば**PC版バージョン1.11ではエンティティに関わる既存の多くのコマンドが使えなくなります。防具立てを含む数十種類ものエンティティIDが変わっちゃったので…**  
誰かが一刻も早く変換ツールを作ってくれたら… ふふふ、既に作られてました。今回紹介するのは、[防具立てのアニメーションツール](https://www.napoan.com/armorstand-model-animation-generator/)の作者のMrGarretto氏が光の如く速さで制作したMCEditフィルター「Entity Command Converter for 1.11 filter」です。**既存のコマンド装置をまるごと選択してパパパッと変換して終わり!**

## バージョン1.11で既存のコマンド装置に何が起こるのか?

先日、PC版バージョン1.11最初のSnapShot「16w32a」がリリースされました。

16w32a – Official Minecraft Wiki

[![16w32aのWikiのページ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112030.jpg)  
http://minecraft.gamepedia.com/16w32a](http://minecraft.gamepedia.com/16w32a)

数種類のスポーンエッグの追加。それだけなら良かったのですが… **同時に大変な仕様変更が行われてしまいました。**  
**35種類ものエンティティのIDが変更され、今までNBTタグで区別してきたウィザースケルトンやロバなどに新しいIDが割り振られたのです。**

![防具立てのIDが...](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103951.png)

一番深刻なのはこれ。コマンドの装置で幾度と無く使われてきたアマスタ君のIDが突然変わっちゃって、**防具立てを召喚したりターゲットにしたりする既存の装置は1.11ではちゃんと動きません。**

バージョン1.11で変更/分割されるエンティティID一覧

[![111で変更分割されるエンティティID一覧](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123054.png)  
https://www.napoan.com/version111-entity-id-changes/](https://www.napoan.com/version111-entity-id-changes/)

IDが変更されたのは防具立てだけではありません。**▲の記事では変更された全てのIDと、新しくウマ類ゾンビ類などに割り振られたIDをまとめています。**ご自分のコマンド装置の互換が心配な方は是非お読み下さい。

![修正が面倒](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103331.png)

今までの装置のコマブロいちいち開いて直すとか面倒過ぎる、訴訟

…ちょっと待った! **こういう時にはツールに頼りましょう。**

▲こちらがMrGarretto氏本人による変換ツールの紹介動画です。前半はWebツール、後半はフィルターを紹介しています。この記事ではまず、**コマンドブロックをまるごと選択&中身を一括変換できるフィルター**の使い方から解説します。

## まずはMCEdit1.xをインストール

MCEdit バージョン1.xシリーズの最新版のダウンロードページ

[http://www.mcedit-unified.net/](http://www.mcedit-unified.net/)

![MCEditのダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104202.jpg)

万能ツール**MCEDitのバージョン1.xの最新版をダウンロード**します。Windowsの方は64bit版が動かなかったら32bit版をダウンロードしましょう

「MCEdit 2.x」という新バージョンも開発されていますが、まるっきり使い方が違うのでご注意下さい。

![MCEditのインストール手順](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104736.jpg)

インストール手順ですが、MCEditは好きな場所にインストールできます。**デスクトップを指定してOKをクリックすれば、デスクトップ内に「mcedit」フォルダーが生成され、その中にmcedit.exeが配置されます。**  
ちなみに私はCドライブ直下にマイクラツール専用フォルダーを作って配置しています。

(Macの場合はダウンロードしたzipを展開すればその場にappファイルが出てきます)

![MCEditを一回起動しておこう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090156.jpg)

この後フィルターを導入するので、MCEditは一回起動しておきましょう。

## フィルターのダウンロードと導入

MrGarretto氏のホームページのフィルターダウンロードページ

[![フィルターのダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123728.jpg)https://mrgarretto.com/filter/entityconverter](https://mrgarretto.com/filter/entityconverter)

拡張子が.pyのファイルがダウンロードされます。pythonで書かれてるのね。

![フィルターの導入方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102000.jpg)

Windowsの方は、**ドキュメント→MCEdit→Filters**内にダウンロードしたpyファイルを入れれば導入完了です。

Macの方は、アプリケーションフォルダーの**MCEditを右クリック**し、パッケージの内容を表示をクリックすると中身のデータが表示されます。そこで検索窓から**「filters」で検索して、**上の選択肢で「このMac」ではなく「”MCEdit”」に切り替え**れば「stock-filters」というフォルダーが出てきます**ので、そこにpyファイルを入れましょう。

## コマンドを一括で1.11用に変換する手順

MCEditを起動したら、Quick loadまたはOpen…からワールドを開きましょう。Open…の場合はlevel.datを開きます

![MCEditで範囲選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110807.jpg)

コマンドブロックたちをまとめて選択しちゃいましょう。  
**青と黄色のNudgeボタンを押しながらWASDキーで選択範囲を微調整できます。**端っこをドラッグするより絶対こっちの方が楽で正確。

![フィルターを選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103858.jpg)

コマンドブロックを囲めたら、下のFilterボタンをクリック。**メニューから「Entity Command Converter for MC 1.11」を選択**します。無い場合は左下のUpdate Filtersをクリック。

![Filter!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110020.jpg)

Filterボタンを押下。

一瞬で変換完了です。Ctrl+SでセーブしてCtrl+Wで閉じましょう。

![ウィザースケルトンを変換](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092134.png)

例えば1.10以前の仕様のNBTタグは、変換すると1.11の新エンティティIDに統合されます。

![セレクター内も変換されます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105841.png)

セレクターのtype引数もバッチリ新IDになります。

## フィルターでうまく変換できない場合はWebツールを使おう

![不具合発見](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123141.png)

\[2016年8月14日\] 先程、**このフィルターではNBTタグ内のエンティティIDをうまく変換できない不具合を見つけました。**いつ修正されるか不明ですが、代替策を書いておきます

※フィルターの不具合が修正され次第この項は削除します。**フィルターで変換した後、うまく変換できていないコマンドが見つかった場合に以下のWebツールをお使いください**

同じMrGarretto氏制作のWebツール

[![Webツール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112034.jpg)  
https://mrgarretto.com/entityconverter](https://mrgarretto.com/entityconverter)

![Webツールは不具合無し](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122703.jpg)

**8/14現在フィルターの方はNBTタグ内がうまく変換できないようですが、こちらなら正常に変換できます。**使い方は簡単、上にコマンドをペーストして下の入力欄を触るだけ!

この不具合については既にMrGarreto氏の動画のコメントで報告したんですが、早く修正されるといいな…
