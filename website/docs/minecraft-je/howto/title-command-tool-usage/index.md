---
slug: /minecraft-je/howto/title-command-tool-usage/
title: titleコマンドを簡単に作れるツールの使い方
sidebar_position: 0
---

![titleコマンドツール解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090407.png)

バージョン1.8で追加され、配布ワールドで必ずといっていいほど使われている**「titleコマンド」**。画面の真ん中にドでかい文字を表示するコマンドですが、**バージョン1.11で新機能が追加されたのをご存知ですか? 画面の中央のやや下、普段は「LSHIFTで降りる」などが表示される「アクションバー」に、好きなメッセージを表示できるようになったんです。**今回はそんなtitleコマンドを、**簡単に作成できるWebツール**の使い方をご紹介します。

## titleコマンドってどんなコマンド?

まずは「titleコマンド」がどんなコマンドかを解説します。

![これがtitleコマンドだ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093135.png)

▲はい、こちらのスクリーンショットを見て分かる通り、**画面の中央に大きなタイトルと小さなサブタイトルを表示するコマンド**です。

![サンプル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093139.png)

titleコマンドは**RPG系の配布ワールドにぴったり**です。例えばこんな風に、物語の節目で表示するとそれっぽくなります。

![サンプル2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093144.png)

PvPにも合いますね。こんな風に、**試合終了などのお知らせ**に使ってみては。

![アクションバー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102554.png)

そして私が何より紹介したいのがこれ。「アクションバー(actionbar)」へ好きなメッセージを表示できる機能です。こちらは[バージョン1.11で追加された](http://minecraft.gamepedia.com/1.11#Command_format)機能で、**普段は”LSHIFTで降りる” “夜になるまで眠れません”などのメッセージが表示される場所**を自由に書き換えられるんです。

![jsonは長いそん](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091348.png)

しかし**titleコマンドって手書きで書くと大変なんです。**なぜならJSON形式で書く必要があり、書式を変える度に括弧で囲って入れ子にしていく必要があるので…  
そこで、面倒くさがりな私は**とあるWebツールを使ってコマンドを作成することに決めました。**

## これがtitleコマンドを簡単に作成できるWebツールだ

それでは便利なWebツールをご紹介します。

Minecraft custom title generator

[![Minecraft custom title generator](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112941.png)  
http://minecraft.tools/en/title.php](http://minecraft.tools/en/title.php)

## まずはタイトルとサブタイトルを入力して表示させてみよう

![タイトル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122118.png)

titleコマンドで表示されるタイトルは、大きな「タイトル」と小さな「サブタイトル」に分かれています。まずは**上の欄に「タイトル」部分の文字を入力しましょう。**日本語も対応しています。

![文字を装飾](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101535.png)

ブログを書く感覚で文字を装飾できます。ここらへんの使い方は[tellrawコマンドのツール](https://www.napoan.com/tellraw-command-generator/#decoration)と同じですので詳しくは説明しません。

![記号を入力するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104230.png)

ちなみに**オメガマークをクリックすると使える記号一覧が表示**され、そのまま挿入可能。

![難読化](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111038.png)

テキストを選択して「難読化」のボタンを押せば、ツール上は文字が二重になるだけです。しかし**マイクラで表示したときには割りとマジで読めなくなります**のでご注意下さい。

![サブタイトル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121604.png)

サブタイトルは下の欄に入力しましょう。(入力しなくてもタイトル表示はできます。お好みで)

![生成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104642.png)

タイトル(とサブタイトル)が書けたら、下にスクロールして**「GENERATE COMMAND」ボタンをクリック**してください。すると3つのコマンドが出てきます。

![コマンドブロック](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122254.png)

さあマイクラでタイトルを表示してみましょう。インパルス/無条件/動力が必要→チェーン/無条件/常時実行→チェーン/無条件/常時実行 の順でコマンドブロックを並べます。  
**(サブタイトル無しの場合は最後のコマンドブロックは必要ありません)**

![コマンド入力](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090520.png)

ツールで生成されたコマンドを、上からコピペしていきましょう。完了かEnterをそれぞれ押すのを忘れずに。(サブタイトル無しの場合は2つのコマンドを2つのコマンドブロックにコピペするわけです)

![結果](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093148.png)

**インパルスコマンドブロックにボタンを付けたりして、動力を入力**するとタイトル(とサブタイトル)が表示されるはずです。

## 表示時間やフェードイン/アウトの時間、ターゲットを変更するには

![時間とターゲット](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110636.png)

表示時間やターゲットのカスタマイズは簡単。サブタイトル欄の下に、**表示時間/フェードイン時間/フェードアウト時間/ターゲットの設定欄**が用意されています。  
**変更したら、コマンドを生成し直す必要があるので注意しましょう。**

## 「アクションバー」に好きなメッセージを表示させるには

![アクションバー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123447.png)

冒頭で紹介した「アクションバー」にメッセージを表示させるには、**タイトル欄の下のチェックボックスにチェックを付けましょう。**するとサブタイトル欄などが消え、コマンドを実行すればタイトル欄の内容がアクションバーに表示されます。  
**(コマンドを生成し直す必要があるので注意!)**
