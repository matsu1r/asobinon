
---
title: 「/gamemode 1」←このコマンド、1.13では使えません
description: /gamemode 1 ― 「自分のゲームモードをクリエイティブモードに変更する」コマンドです。PC版プレイヤーならだれでも使ったことがあると言っても過言ではないでしょう。建築作業の時、コマンドの動作確認の時、ズルしたい時… 脊髄反射的に入力してきた「/gamemode 1」は、バージョン1.13で使えなくなります。
---

![gamemode1死ぬ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104700.png)  
使用フォント: [「Splatfont 2」](http://paperyoshi.at/product/splatfont-2/) by Philippさん(@PaperYoshi2001)

/gamemode 1 ― **「自分のゲームモードをクリエイティブモードに変更する」**コマンドです。PC版プレイヤーならだれでも使ったことがあると言っても過言ではないでしょう。**建築作業の時、コマンドの動作確認の時、ズルしたい時… 脊髄反射的に入力してきた「/gamemode 1」は、バージョン1.13で使えなくなりました。**

## バージョン1.13で、gamemodeコマンドで数字や略称が使えなくなりました

バージョン1.13に移行したワールドでは、gamemodeコマンドは以下のように書き直す必要があります。

*   /gamemode 1 → /gamemode creative
*   /gamemode sp → /gamemode spectator

**数字や略称ではなく「creative」などのゲームモード名を”必ず”書かないといけません。**

ゲームモード名・数字・略称の対照表

モード

数字

略称

これから必須になる”モード名”

サバイバルモード

0

s

survival

クリエイティブモード

1

c

creative

アドベンチャーモード

2

a

adventure

スペクテイターモード

3

sp

spectator

追加で例を挙げるとこんな感じ。

*   /gamemode 2 @a\[team=Red\] → /gamemode adventure @a\[team=Red\]
*   /gamemode c @a\[score\_creative\_min=1\] → /gamemode creative @a\[score\_creative=1..\]

面倒臭いですが、Tabの補完機能でなんとかしましょう…

## difficultyコマンドも数字・略称が使えなくなりました

*   /difficulty 2 → /difficulty normal
*   /difficulty p → /difficulty peaceful

という風に、バージョン1.13では**difficultyコマンドでも数字や略称が使えなく**なりました。

ゲームモード名・数字・略称の対照表

難易度

数字

略称

これから必須になる”難易度名”

ピースフル

0

p

peaceful

イージー

1

e

easy

ノーマル

2

n

normal

ハード

3

h

hard

これも面倒臭いですが、Tabの補完機能でなんとかするしかないですね…

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105254.png)

ん?

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102607.png)

ゴゴゴ…

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103937.png)

見覚えのある桜の木…

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105348.png)

qpwakaba… Kingさん！？

## ありがとうKing氏 救いのプラグインをありがとう

> \[Spigot/CraftBukkit 1.13\] 1.13 で gamemode 1 できるプラグイン [https://t.co/RuHX9enbse](https://t.co/RuHX9enbse)
> 
> 例のアレ，公開しました。
> 
> — K͏i͏n͏g͏ (@qpwakaba@misskey.xyz) (@qpwakaba) [2018年8月18日](https://twitter.com/qpwakaba/status/1030764230457221120?ref_src=twsrc%5Etfw)

\[8/19追記\]うおお！King氏がついに「gamemode 1できる」プラグインを公開されました！！！！！**しかもdifficultyコマンドにも対応しています！！！**ありがとうございます！！！

ワールド制作者必見。1.13の技術的な変更点まとめ

[![113コマンド変更点まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104542.png)  
https://www.napoan.com/java-113-command-changes/](https://www.napoan.com/java-113-command-changes/)

この他、**バージョン1.13にはコマンドの書き方を大きく変える破壊的な変更が大量に含まれています。**それらを詳しく▲の記事にまとめていますので、**コマンドを触る方は是非ご一読下さい。**
