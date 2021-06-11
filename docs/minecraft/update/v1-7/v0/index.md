
---
title: アップデート「1.7」内容まとめ – スコアボード！
description: スコアボード機能がついに実装された、スマホ・タブレット・NintendoSwitch・Windows10アプリ・XboxOneの「Minecraft(BE,統合版)」のアップデート「1.7」の更新内容をまとめました。 開発者さんのツイート、公式Wikiの情報を基に画像付きで詳しくまとめています。
slug: /minecraft/update/v1-7/v0/
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101310.png)

アップデート配信はいつ?

*   iOS: リリースされました
*   Android: リリースされました
*   Windows10: リリースされました
*   XboxOne: リリースされました
*   Switch: リリースされました

[<< バージョン1.6.1の内容まとめ](https://www.napoan.com/bedrock-update-161/)  
[バージョン1.8の内容まとめ >>](https://www.napoan.com/mcbe-update-18/)

スコアボード機能がついに実装された、**スマホ・タブレット・NintendoSwitch・Windows10アプリ・XboxOneの**「Minecraft(BE,統合版)」のアップデート「1.7」の更新内容**をまとめました。** 開発者さんのツイート、公式Wikiの情報を基に画像付きで詳しくまとめています。

**最終更新：**  
**記事を公開。下書きしてたんだけど遅れてゴメンね**

## 参考にさせて頂いたページ様

*   **Minecraft – 1.7.0 (Bedrock) – Minecraft Feedback**  
    [https://feedback.minecraft.net/hc/en-us/articles/360017865652-Minecraft-1-7-0-Bedrock-](https://feedback.minecraft.net/hc/en-us/articles/360017865652-Minecraft-1-7-0-Bedrock-)
*   **Bedrock Edition 1.7 – Official Minecraft Wiki**  
    [https://minecraft.gamepedia.com/Bedrock\_Edition\_1.7](https://minecraft.gamepedia.com/Bedrock_Edition_1.7)

他、コマンド等の英語版公式Wikiの解説を参考にしました。分かりやすい説明、豊富なデータをまとめてくださった英語版公式Wikiの編集者の皆様には、感謝してもしきれません。

## 目次

*   [ゲームプレイに関する追加/変更点](#gameplay)
    *   [クリエイティブモードや難易度ピースフルで食べ物を食べられるように](#food)
    *   [チャット内のプレイヤー名は黄色でハイライトされるように](#highlight)
    *   [チャットでアットマークを打つとプレイヤー名一覧が表示されるように](#atmark)
*   [コマンドに関する追加/変更点](#command)
    *   [scoreboardコマンドが追加された](#scoreboard)
    *   [コマンドブロックを全て有効化/無効化するゲームルールが追加](#commandblocksenabled)
*   [ゲームシステム、全体的なことに関する追加/変更点](#system)
    *   [ストアでどこからでもトップ・購入済み商品・検索画面に飛べるようになった](#store)
    *   [ストアの商品ページに「共有」ボタンが設置された](#store)
    *   [ストアの検索、並び替え、絞り込み機能が改善された](#search)

## ゲームプレイに関する追加/変更点

### クリエイティブモードや難易度ピースフルで食べ物を食べられるように

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115931.png)

*   **クリエイティブモードや、難易度ピースフルでも食べ物を食べられるように**なった
*   ちなみに私は誰がなんと言おうとピースではなく”ピースフル”を貫く

### チャット内のプレイヤー名は黄色でハイライトされるように

*   マルチプレイのチャットでプレイヤー名が書かれたら黄色の文字で表示されるようになった

### チャットでアットマークを打つとプレイヤー名一覧が表示されるように

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120010.png)

*   チャットで@を打つとワールド内のプレイヤー名が一覧表示されるようになった
*   ゲーマータグが長すぎて覚えられない人いるよね。ちなみに自分のゲーマータグは「設定」→「プロフィール」から変更できる

## コマンドに関する追加/変更点

### scoreboardコマンドが追加された

*   ついにScoreboardコマンドが追加された
*   **エンティティにスコアを割り振り、それを使ってコマンドの動作を制御できる、配布ワールド制作に必須のコマンドだ**
*   よりインタラクティブな配布ワールドが続々登場するということだ
*   ただし**体力などを表示する機能やタグ・チーム機能はなく、ダミーのスコアを操作する機能しかない**
*   翻訳された更新履歴では「得点表示」なんて呼ばれているが、**これを得点表示なんて言っている人は見たこと無いので、みんなもスコアボードと呼ぼう**

#### オブジェクティブの作成と表示

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115939.png)

*   スコアボードのオブジェクティブを作成するコマンドは以下の通り
*   /scoreboard objectives add <オブジェクティブの名前> dummy \[表示名\]
*   Java版ならdummy以外も使えるが、**BE1.7ではdummyしか使えない**
*   <オブジェクティブの名前>は入力必須で英数字しか使えない
*   \[表示名\]は日本語も使える。またこれは入力しなくてもいい

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115946.png)

*   /scoreboard objectives list で作成したオブジェクティブの一覧を表示できる
*   /scoreboard objectives remove <オブジェクティブの名前> で指定したオブジェクティブを削除できる

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123655.png)

*   /scoreboard objectives setdisplay sidebar <オブジェクティブの名前> で作成したオブジェクティブを画面横に表示できる
*   /scoreboard objectives setdisplay list <オブジェクティブの名前> で作成したオブジェクティブをポーズメニューに表示できる
*   /scoreboard objectives setdisplay belowname <オブジェクティブの名前> で作成したオブジェクティブをプレイヤー名の下に表示できる
*   **オブジェクティブの名前を入力しなかった場合は、その場所からスコア表示が消去される**
*   Java版と違って、誰もスコアを持っていなくてもオブジェクティブ名が表示されるようになっている

#### スコアの数値の編集

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115942.png) ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115950.png)

*   /scoreboard players set <プレイヤー名> <オブジェクティブの名前> <設定したい数字> で指定したプレイヤーのスコアを**設定**できる
*   /scoreboard players add <プレイヤー名> <オブジェクティブの名前> <追加したい数字> で指定したプレイヤーのスコアを**追加**できる
*   /scoreboard players remove <プレイヤー名> <オブジェクティブの名前> <減算したい数字> で指定したプレイヤーのスコアを**減算**できる

*   /scoreboard players reset <プレイヤー名> <オブジェクティブのの名前> で指定したプレイヤーのスコアを**リセット**できる

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115953.png)

*   /scoreboard players list \[プレイヤー名\] で指定したプレイヤーのスコア一覧を表示できる
*   プレイヤー名を入力しなかった場合はスコアボードでトラッキングされてるエンティティ一覧が表示される

#### スコアの数値を他のコマンドで使ってみよう

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115958.png)

*   **test**というオブジェクティブを作成した後、/tell @a\[scores={test=2..}\] aaa を実行してみよう

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120003.png)

*   すると「セレクターに合う対象がありません」と言われるはずだ
*   実は、@a\[scores={test=2..}\] は**「testが2以上のプレイヤー全員」**という意味なのだ
*   こんな風に\[scores={オブジェクティブの名前=数字}\]と書けば、**スコアを条件にエンティティを選べる**
*   \[scores={オブジェクティブの名前=数字,オブジェクティブの名前=数字}\]という風に、**複数のスコアを条件にすることも可能**
*   スコアの絞り込み方は以下の通り
    *   \[scores={test=1}\] : testが**1の時だけ**実行する
    *   \[scores={test=1..}\] : testが**1以上**の時だけ実行する
    *   \[scores={test=1..3}\] : testが**1から3**の時だけ実行する
    *   \[scores={test=..3}\] : testが**3以下**の時だけ実行する
    *   \[scores={foo=1,bar=1..5}\] : **fooが1かつbarが1から5の時だけ**実行する
*   見ての通り、**スコアの指定方法はJava版1.13仕様になっている**なので注意しよう

*   いくつか例を紹介する
    *   /tp @a\[scores={test=5}\] ~ ~50 ~ : testが5ぴったりのプレイヤー全員をコマンド実行場所から50m上に移動させる
    *   /give @a\[scores={test=1..,foo=5..}\] diamond : testが1以上かつfooが5以上のプレイヤー全員にダイヤモンドを与える
    *   /execute @a\[scores={test=3..}\] ~ ~ ~ kill @a\[r=5,scores={foo=..5}\] : testが3以上の人が、その半径5m以内のfooが5以下のプレイヤー全員をキルする

Scoreboard – Official Minecraft Wiki

[https://minecraft.gamepedia.com/Scoreboard](https://minecraft.gamepedia.com/Scoreboard)

*   ここでは解説しなかったが、スコアの値を使って計算する機能もある。詳しい使い方は上記の公式Wikiを参照してね

### コマンドブロックを全て有効化/無効化するゲームルールが追加

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121754.png)

*   **コマンドブロック全体を有効化/無効化**できるようになった
*   ワールド編集画面から変更できる
*   また、/gamerule commandblocksenabled <true|false> でも変更可能

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120007.png)

*   コマンドブロックを無効化すると、コマンドの入力等は可能だが、コマンドの実行はされなくなる
*   リピートモードのコマンドももちろん実行されなくなるので、**コマンドで事故って操作不能になってしまった場合も安心だ**

## ゲームシステム、全体的なことに関する追加/変更点

### ストアでどこからでもトップ・購入済み商品・検索画面に飛べるようになった

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103324.png)

*   ストアのUIが改善された
*   画面上部に**トップに戻る、購入済み商品、検索**のボタンが表示されるようになった

### ストアの商品ページに「共有」ボタンが設置された

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120014.png)

*   ストアの購入ボタンの右に、**共有ボタン**が新設された
*   押すと、例えばWindows10ではWin10共通の共有画面が出る

### ストアの検索、並び替え、絞り込み機能が改善された

## ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115934.png)

*   ストアの検索機能が改善された
*   並び替え基準に**「関連度」**が追加されている
