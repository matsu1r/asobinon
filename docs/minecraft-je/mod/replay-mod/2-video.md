---
title: ReplayMod完全ガイド Part2 (動画書き出し/360°)
---

[![ReplayMod2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133826.png)](#3/b/3bce12d5.png "ReplayMod2")

「"後から"プレイを撮影できる」 という革新的なカメラMOD**「ReplayMod」**。[前回の記事](/minecraft-je/mod/replay-mod/)では、リプレイを鑑賞したり、カメラを動かすための操作を解説しました。**今回はリプレイを動画として書き出す手順を解説します。**  
**低スペックPCでも、高画質で滑らかな動画を保存できます。**例えばTNTの大量爆破や、ラグいマルチプレイのPvPでも、**よりダイナミックで自由な視点で、ヌルヌルな動画を作れます。**  
さあ、"時を操るカメラMOD"ReplayModを使って、新時代の動画制作を始めましょう。  
(サムネ内のロゴは作者さんのものをお借りしました)

※この記事は**2015年8月15日現在**最新のReplayModとffmpeg安定版を使っています。今後のバージョンアップによって、作業の手順が変更になる場合もありますのでご注意下さい。

## ReplayModの基本的な使い方、カメラの動きの設定はpart1へ

[![今アツい「ReplayMod」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132425.png)](#2/8/28cf8482.png "今アツい「ReplayMod」")

リプレイを録画し、**後から自由に鑑賞**したり、**カメラの動きを設定**して動画を作ったり...  
今アツいカメラMOD、それが**「ReplayMod」**です。私もだいぶ前からチェックしてました。  
機能がとても豊富なので、今回は2回に分けて解説記事を書きました。  

**リプレイの閲覧やカメラの動きの設定**は、**["ReplayMod解説part1"](/minecraft-je/mod/replay-mod/)**をご覧ください。

## 動画を書き出すための準備! 「ffmpeg」をインストールする手順

[![動画を書き出そう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132304.jpg)](#2/7/2723d327.jpg "動画を書き出そう")

さあ、早速前回作った**美しいリプレイを動画として書き出しましょう。**  
しかし、このままでは動画にできません。**あるソフトをPCにインストールする必要がある**のです。

[![ReplayModで動画を書き出すための準備](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150524.jpg)](#8/a/8ad1202c.jpg "ReplayModで動画を書き出すための準備")

それは「ffmpeg」という動画エンコード用ソフトで、普通のソフトと違って**ファイルをPCに置いてバッチを使ってインストール作業をする**ことで使えるようになります。

動画エンコード用ソフト「ffmpeg」のダウンロード

[![ffmpegをダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208125611.jpg)](#0/d/0d488ff6.jpg "ffmpegをダウンロード")  
[http://ffmpeg.zeranoe.com/builds/](http://ffmpeg.zeranoe.com/builds/)  
▲一番上のボタンが安定版です。Macの方は「[Homebrew](http://brew.sh/)」を使ってインストールと書かれていました... Macの場合のインストール方法は割愛させて頂きます。

![7zipで展開](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134443.jpg)

ダウンロードした.7zファイルを、**「7-zip」などのソフトを使って展開**しましょう。すると「bin」というフォルダが出てきます。中のファイルは触らないで下さい。(というか何もできません)

  
![ffmpegフォルダを作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208125404.jpg)

次に、**Cドライブ直下に「ffmpeg」というフォルダを作って**下さい。ここにファイルを設置してインストールします。

![binフォルダを設置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208125634.jpg)

作った「ffmpeg」フォルダに、展開して出てきた**「bin」フォルダを入れます。**これで第一段階は完了。

[![バッチファイルをダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151140.jpg)](#9/1/9185a2dc.jpg "バッチファイルをダウンロード")

さらに、[ReplayModの公式サイト](http://www.replaymod.com/docs/#installation-ffmpeg-windows)から**「インストール用バッチ」をダウンロード**しましょう。ブラウザやセキュリティソフトによっては、ダウンロードを拒否されるかもしれません。

![バッチファイルを実行](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165013.jpg)

ダウンロードした**「ffmpeg-path-installer.bat」を、ffmpegフォルダに入れて実行**しましょう。黒い画面が出てきて「成功」とか言ってたら閉じて下さい。「見つかりません」と言われたら、binフォルダや中のファイルがちゃんと設置されているか確認して下さい。

さあ、次のステップでいよいよReplayModを使って**ヌルヌル動画を作成します!**

## 動画を書き出す設定項目の解説、実際に書き出し!

[![書き出しボタンをクリック](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162908.png)](#d/f/df1e0b6e.png "書き出しボタンをクリック")

カメラの動きを設定したら、**忘れずセーブ**しておきましょう。動画の書き出し中に何が起こるか分かりませんからね。カメラの設定及びセーブの方法については、[part1](/minecraft-je/mod/replay-mod/)で詳しく解説しています。

### ffmpegのパスを設定しておこう

[![先に詳細設定へ進もう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208143215.png)](#6/d/6d33125a.png "先に詳細設定へ進もう")

動画の書き出しの設定画面が表示されますが、**まずは「Advanced Settings」をクリック**します。

[![コマンドライン設定へ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154720.png)](#b/3/b36e9ace.png "コマンドライン設定へ")

さらに他の設定を無視して、**「Command Line Settings」をクリック**します。

[![ffmpegのパスを設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208174914.png)](#e/d/edb41bc7.png "ffmpegのパスを設定")

すると難しそうな文字列が表示されますが、ひとまず**左の欄を全消し**しましょう。  
そして**C:ffmpegbinffmpeg.exe**と入力します。先ほど**Cドライブ直下にffmpegをインストールしたので、そのパスを指定している**わけです。別の場所にインストールした場合(Macの方など)は、適宜ffmpeg.exeのパスを入力して下さい。

### 書き出しモードと、書き出す画質や形式の解説

[![書き出しの設定項目の解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135627.png)](#4/c/4c0d878b.png "書き出しの設定項目の解説")

「Video Settings」ボタンから、**再度1ページ目の基本的な設定画面を開きます。**それでは、動画の書き出しに必要な各種設定項目を見て行きましょう。**YouTube等にアップロードする予定の方は必読です!**

**「Rendering Method」**の解説

Default Rendering

![デフォルトで書き出し](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208155658.png)  
設定したカメラから撮影した映像を、**そのまま動画に**します。特に理由がない限りは、このモードで書き出ししましょう。 

Stereoscopic Rendering

![擬似的3Dモードで書き出し](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153725.png)  
動画を横に2つ並べることで、**擬似的に3Dの動画**を作り出します。超簡易版マジカルアイです。

Cubic Rendering

![キューブモードで書き出し](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145232.png)  
動画を6面に分けて、360°の動画を作ります。しかし**YouTubeは非対応**で、Oculus Rift等の機器で使うための特殊な形式です。

Equirectangular Rendering

![360°モードで書き出し](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131149.png)  
こちらも360°の動画を作るのですが、**このモードで作ればYouTubeでも360°再生が可能です。(スマホを動かしてダイナミックに視点を動かせる)** YouTubeで使うには、**AdvancedSettings画面に切り替えて「Inject 360° Metadata」にチェックを入れる必要があります。**  
どんな風に360°で再生できるのかは、[こちらの動画](http://www.youtube.com/watch?v=lHGSG-0CVZw)をご鑑賞下さい。

  

**「Encoding Quality」**の解説

MP4 - Custom Bitrate

ビットレートを指定して書き出します。極限まで高画質で書き出せます。

MP4 - High Quality

[![画質の比較](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165133.png)](#e/9/e973d127.png "画質の比較")  
▲クリックで大きく表示できます。  
**YouTubeにアップロードする場合は、できるだけ「Hight Quality」を選ぶようにしましょう。**ファイルサイズを節約したい場合はDefault Qualityがおすすめです。「Potato Quality」を選んでしまうと、数年前のガラケーで撮った動画みたいになってしまいます。

高画質で書き出しします。

MP4 - Default Quality

デフォルトの画質です。

MP4 - Potato Quality

低画質で書き出します。

WEBM - Custom Bitrate

Web上で動画を使う際の形式「.webm」として書き出せます。しかし、**IEやSafariには非対応**なので、Videoタグで動画を埋め込む際にはmp4で書きだすことをおすすめします。

MKV - Lossless

劣化の少ない**「MKV」形式**で書き出します。聞きなれない形式ですね...  
AviUtlなどで編集することを考えると、広く使われているmp4の方が使いやすいでしょう。 

PNG Sequence

**フレームを全てpng画像として書き出します。**無尽蔵に画像が生成されるので、めちゃくちゃ容量を食います。需要があるのかよく分からないモードです...

  

次に**「Video Resolution」**を設定します。ここには**動画の縦横のサイズ**を入力します。  
値を間違えると、アップロードした時に余白ができてしまうので注意しましょう。

-   YouTubeに1080pの画質で上げたい・・・ **1920x1080**
-   YouTubeに720pの画質で上げたい・・・ **1280x720**
-   長い動画になりそうだけど、ニコニコに上げたい・・・ **854x480** (480p)

  

### 傾きを安定させたり、空の色を変更する設定

[![AdvancedSettingsの解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140009.png)](#4/f/4f1b56e1.png "AdvancedSettingsの解説")

次に「Advanced Settings」画面の解説です。まず**「Render Name  Tags」**ですが、チェックを入れるとプレイヤー名やMobに付けた名前が動画内で表示されます。  
下の**「Stabilize Camera」**は、3Dや360°モードで書き出す時限定の設定です。**Yaw、Pitch、Rollという3方向の傾きを安定させることで、不快な画面の回転を防止します。**

[![空の色を変更](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180619.png)](#f/d/fd1fa03d.png "空の色を変更")

**「Chroma Keying」**にチェックを入れて色を設定すると、**空を好きな色に染めることができます。**これは本来、**動画編集ソフトでクロマキー合成をするための設定**なのですが、ちょっとした演出にもなりますね。

[![書き出し画面](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208141212.png)](#5/b/5ba34625.png "書き出し画面")

**「Render」**を押すと実際に動画の書き出しが始まります。**この時、ffmpegのパスが間違っていると書き出しできません。**  
書き出しと言っても、そこまで時間は掛かりません。プレビューを眺めていればすぐ終わります。→PCのスペックと動画の画質/解像度/フレームレートによって左右されるのですぐ終わるわけではないです! 書きだした動画は、Forgeのフォルダの**「replay\_videos」というフォルダに保存されます。**

  

## 書きだした動画はエンコードしなおしてから使おう

書き出した動画は、**そのままでは容量が大きすぎてアップロードに適していません。**無編集でアップロードしたい方も、一旦AviUtlなどの動画編集ソフトで読み込んで、エンコードし直しましょう。

[![動画のサイズを設定しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161812.jpg)](#d/3/d3e89948.jpg "動画のサイズを設定しよう")

例えばAviUtlで読み込んだ場合は、**「設定」→「サイズの変更」で書きだした動画とサイズを合わせましょう。**この設定を忘れると、書きだした時に画質が劣化してしまったり、YouTubeで黒枠ができちゃいます。

[![x264guiExの設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154910.jpg)](#b/5/b52f3be1.jpg "x264guiExの設定")

今回は「[x264guiEx](http://rigaya34589.blog135.fc2.com/blog-category-5.html)」を使ってエンコードしてみます。YouTubeにアップするので、「YouTube720p」というプロファイルを選びました。

[![サイズを節約できた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140459.jpg)](#5/4/5443ac89.jpg "サイズを節約できた")

**80%以上サイズが小さくなりました。**画質もほとんど劣化していません。高画質で書き出すと、どうしてもギガ級のサイズに膨らんでしまうのですが、x264guiExがあればへっちゃらですね。

  

\[2016年5月4日追記\] **360°動画を編集ソフトで書き出すとYouTube用のメタデータが無くなってしまいます。**ですから[こちらのツール](https://github.com/google/spatial-media/releases/tag/v2.0)を使ってメタデータを付けてあげる必要があるのでご注意下さい。


**360°でTNTの大量爆破**をどうぞ。相変わらず絶望的な選曲センスです。

:::info
これで動画編は終了です! [Part2 シェーダー編](./withshader/)に進みましょう。
:::

## 参考にさせて頂いたページ様

[**Minecraft Replay Mod - Documentation**](http://www.replaymod.com/docs/)  
[**Minecraft - How to create 360° and VR Videos - YouTube**](https://www.youtube.com/watch?v=i_eZmgpw8nY)  
