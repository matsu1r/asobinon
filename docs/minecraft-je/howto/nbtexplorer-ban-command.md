---
title: チートコマンド使用を後から禁止する方法 -配布ワールド作成に[NBTExplorer]
---

[![後からコマンド禁止](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162246.png)](#d/7/d7cd8775.png "後からコマンド禁止")  
**配布ワールドを作る時**、**コマンド(チート)を使って制作作業をしますね。**  
しかし、**そのまま配布してしまうと遊んだ人がチートを使えてしまいます。**  
どうすれば、配布直前に**後からコマンド使用を禁止**できるのでしょうか。  
そこで、便利なツール**「NBTExplorer」**を使いましょう。

   
[![35](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140405.png)](#5/3/5383b950.png "35")  
脱出ゲームなど、**配布するためのワールドを作る時に欠かせない**のが**コマンド**ですね。  
そもそも**コマンドブロックを入手するためにもコマンドが必要**なわけですし。 

そしてワールドが完成し、**いよいよ配布する時**がやって来ました。  
セーブデータをzipで圧縮して、Dropboxへｼｭｩｩｩｩｩ….  
**ちょっと待って下さい。大事な作業が抜けています。**

[![31](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144710.png)](#7/b/7b1f9a4e.png "31")  
このままワールドを配布したら、**ダウンロードして遊んだ人がコマンドを使えてしまいますね。**  
**giveコマンドやgamemodeコマンドでズルをされたら大変。**折角のトラップが台無しです。

**チートONで作ったワールド**を、**後からチートOFFにする**にはどうすればいいのでしょうか。  
実はとっても簡単です。**例のツール**を使うのです。

**NBTExplorer – NBT Editor for Windows and Mac**  
[**http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-tools/1262665-nbtexplorer-nbt-editor-for-windows-and-mac**](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-tools/1262665-nbtexplorer-nbt-editor-for-windows-and-mac)  
[![「NBTExplorer」のダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154157.jpg)](#a/e/aea2f745.jpg "2015-3-26_18-26-12")  
▲扱いやすい**zip版**をおすすめします。

![2015-3-26_18-37-57](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152803.jpg)  
ダウンロードしたzipを展開し、中の**「NBTExplorer.exe」**を実行します。

実はこのツール、**だいぶ前に[セーブデータが破損した時](/minecraft-je/howto/restore-world-data/ "気が付くと、そこは奈落の底だった　～セーブデータがぶっ壊れた～")にお世話になりました。**  
**ワールドのシード値、インベントリ内のアイテムなどの情報を編集できます。**

[![セーブデータ内のlevel.datを開く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208155407.jpg)](#b/b/bb0a7633.jpg "セーブデータ内のlevel.datを開く")  
NBTExplorerが起動したら、**セーブデータのフォルダ**を開いて、  
更に中にある**「level.dat」**をダブルクリックで開きます。

![「Data」内の「allowCommands」の値を0にする](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142445.jpg)  
そして**「Data」**の中の**「allowCommands」**をダブルクリックします。  
値を設定するウィンドウが開くので、**「0」と入力**してOKをクリックします。

![編集したら、セーブするのを忘れずに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161711.jpg)  
最後に、**上のフロッピーマークをクリックして保存**するのを忘れないで下さい。

[![53 - コピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153021.png)](#a/3/a3747fa6.png "53 - コピー")  
**ワールドに入ってコマンドを実行しようとすると、警告が出てできません。**  
これならゲームモードを変更されたりといった**ズルは出来なくなります。**  
こうして、ワールドを配布する準備が整いました。

**※禁止されるのはプレイヤーのコマンド実行です。コマンドブロックはちゃんと動きます。**

\[2016年4月23日追記\] コメントで情報頂いたのですが、この作業によりtellrawコマンド等の**“プレイヤーがクリックすると何か起こる”など、実行元がプレイヤーである仕掛けは使えなくなります。**ご注意下さい。

---

いかがでしたか。配布ワールドを作成される方のお役に立てたら嬉しいです。  
**「これの方法を教えて欲しい」「このツールの使い方を解説して」**などのコメント待ってます。
