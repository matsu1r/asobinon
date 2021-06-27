---
title: ReplayMod完全ガイド Part6 建築を倍速で振り返る動画の作り方
---

![Schematicからリプレイを生成するツールの紹介](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101006.png)

ReplayModの作者、CrushePixel氏([Twitter](https://twitter.com/crushedpixel))がまた恐ろしい物を制作されました。それは**「Schematicから建築のリプレイを生成する」**という画期的なツールです。ReplayModを使って建築すれば、第三者視点の早送りの建築過程動画が作れますが、**このツールを使えば建築中にReplayModを使わなくても、大昔に建てた建物でも建築のリプレイ動画を作れるんです。**使い方を見ていきましょう。

## ReplayModを使った「建築のリプレイ動画」とはどんなもの?

![今アツい「ReplayMod」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132425.png)

マイクラのプレイを記録し、後から一人称視点もしくは第三者視点で閲覧できる画期的なMOD「ReplayMod」。[当ブログではこれまで4本の解説記事を書いてきた](https://www.napoan.com/tag/replaymod/)ので、もう使いこなしている方も多いと思います。

![建築作業のリプレイ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092057.png)

そしてReplayModの使用例としては、「PvPの録画」など色々ありますが**「建築作業を第三者視点で記録する」**という使い方をしている方が多いと思います。最近実況動画などでも少しづつ使われ始めてますね。

![ReplayMod使わずに建築しちゃった](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090338.png)

**建築作業のリプレイ動画作りたいけど、もうReplayMod使わずに建築しちゃった…** あるあるですよね。というか「ReplayModなんて知らねえよ! 使っときゃよかった」って方も多いはず。**「過去に建築した建物のリプレイ動画を作りたい…」そんな無理なお願いを叶えてくれるツールができちゃったんです。**

![speedbuildgen.jar](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112018.png)

それがReplayModの作者の一人、天才コマンドクラフター兼モッダーのCrushedPixel氏が作成した「speedbuildgen(SpeedBuildGenerator)」です。なんとこのツール、**既存の建物のSchematicファイルを指定するとリプレイファイルが出てくる**んです。一体どんなリプレイが出てくるかと言いますと…

![ダミープレイヤーが建築してくれる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122536.png)

▲ご覧ください、あなたの建築をダミーのロボットプレイヤーが建築する様子が生成されるんです。**つまりあなたが建築した行程そのままではなく、ツールが判断してブロックの設置順を決め、リプレイ内で一から建築してくれるんです。**Schematicのブロック配置データからこんな物を生成するとはたまげた技術ですねえ

そうそう、このツールはjarですからWindowsだけでなくMacでも使えます! この記事ではMacでの起動方法も解説します。

## まずは建物のSchematicファイルを作ろう。MCEdit1.xのインストールからエクスポート

このツールにはSchematicファイルを入れてやる必要がありますから、まずはMCEDit(1.x)を使って建物のスケスケマティックを作りましょう。

※MCEditは現在「バージョン2.0」シリーズも開発中ですが、この記事では使い方が浸透している&動作が安定している(というか筆者が一度も使ったこと無い)という理由から**MCEDit 1.xシリーズを使います。**

MCEdit バージョン1.xシリーズの最新版のダウンロードページ

[![MCEditのダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092516.jpg)  
http://www.mcedit-unified.net/](http://www.mcedit-unified.net/)

▲Windows版ですが、もう32bitのPCってほとんどありませんよね…もし不安ならばコントロールパネルの「システム」からPCのビット数を確認してPCにあった方を選びましょう。**それとMacの方は「here」をクリックしないとダウンロードリンクが出てきません。**なんで隠すの…

![MCEditのインストール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092519.jpg)

私のおすすめのインストール方法を教えます。  
インストーラーのはBrowse…ボタンを押し、**「PC」→「Cドライブ」を右クリックしてC直下に「Minecraft」フォルダーを作成しましょう。**そして作ったMinecraftフォルダーを指定してExtractします。

(Macの場合はダウンロードしたzipを展開すればその場にappファイルが出てきます)

![mceditフォルダーが生成される](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092513.jpg)

こうすることで、C:Minecraftmcedit **(mceditフォルダーは自動で生成されます)**という階層構造になりmceditが探しやすくなります。

![Export](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104915.jpg)

MCEditの使い方については省略しますが、とにかく**建物を選択してExportを押して名前を決めてschematicファイルを生成**しましょう。

## 建物のSchematicファイルからリプレイを生成「speedbuildgen.jar」のダウンロード

CrushedPixel氏への感謝も込めて、DLリンクではなく動画を貼らせて頂きます。**▲ダウンロードリンクは動画の説明欄にあります**。

![minecraftフォルダーに置こうぜ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092456.jpg)

でちょっと提案なんですけど、このspeedbuildgen.jarも先程作った「Minecraft」フォルダに置けば分かりやすいじゃないすか? **私はこのフォルダーにNBTExplorerとか各種ツールをまとめて置いています。**

## ツールの使い方(CUIです)とリプレイの生成方法を解説 (Win/Mac両対応)

![コマンドプロンプトを開く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092500.jpg)

Windowsの場合は、speedbuildgen.jarを置いた**フォルダーで**Shift+右クリックしてコマンドウィンドウをここで開くを押しましょう。**jarを右クリックするんじゃないです**。

Macでフォルダーからターミナルさんを開く手順

MacではWindowsのような「コマンドウィンドウをここで開く」は出てこないので、(そもそもコマンドウィンドウではなく”ターミナル”ですし) まずはMacのターミナルを開いておき、そこにspeedbuildgenが入ったフォルダーをぶち込みましょう。

Mac買ったら画像貼りますが、アプリ一覧の**「ユーティリティ」内にターミナルが置いてあります**ので起動。

speedbuildgen.jarを**置いたフォルダーを、ターミナルさんにぶち込めば準備完了**です。

![javaコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110619.jpg)

javaコマンドでjarを実行します。java -jar speedbuildgen.jarです。Macでも同じコマンドです。

![schematicのパスをコピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105341.jpg)

同時進行で、リプレイを生成したいschematicファイルのパスを入手しておきましょう。Windowsの場合はShift+右クリックすればパスのコピーが、Macでは右クリック後Optionを押すと“”のパス名をコピーが出現します。

![ダブルクオーテーションを消そう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090302.jpg)

Schematic File:と出てきたらschematicのパスを貼り付けます。**Windowsのパスコピー機能だと余計な引用符が付くので消して下さい。**そしてエンター。

![ReplayModのGameDirectoryをコピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124312.jpg)

いきなりランチャーですが、次は**ReplayModを使っているProfileのGameDirectoryをコピー**しましょう。

![OutputFileの指定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105748.jpg)

黒い画面にOutput File:と出てるはずなので、コピーしたGameDirectoryのアドレスを貼付け。そして以下を追記しましょう。

*   Windows: replay\_recordings好きな名前.mcpr
*   Mac: /replay\_recordings/好きな名前.mcpr

Windowsはバックスラッシュ(￥マーク)、Macはスラッシュという違いだけです。いずれにせよ**replay\_recordingsフォルダー内に「mcpr」ファイルを生成させるんです。**

例えばC:UsersNapoanAppDataRoaming.minecraftmydata\[1.8\]ReplayModreplay\_recordingstest1.mcprといった感じになります。出力パスを入力できたらエンター。

![リプレイが生成できた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122110.jpg)

パスの書き方が正しければリプレイファイルが生成されます。0秒!? 不安になる速さですね…

## 建築のリプレイを見てみよう

![リプレイファイルが書き出しできた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092523.jpg)

**書き出し先として指定したのは、実はリプレイファイルが格納されているフォルダーなんです。**つまり…

![ReplayViewer](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110050.png)

ReplayModのリプレイ一覧にリプレイが出現するということです。見てみましょう。

![見てみた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092053.png)

すごい、ちゃんとブロック1つ1つを歩いて設置していってる… **この建築作業を記録していたわけでもなく、ましてや私の建築でもないのに建築過程が思考されロボットが建築してくれるわけです。**CrushedPixel氏の技術に脱帽!

:::success
これでチュートリアルは終了です!
:::
