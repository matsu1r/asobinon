
---
title: Java版17w47aの隠しアイテム「デバッグ棒」の入手方法と使い方
description: Java版のSnapShot「17w47a」にて、面白いアイテムが見つかりました。その名は「Debug Stick」。なんとブロックの状態を、クリックだけでホイホイと変更できるのです。早速入手方法を見ていきましょう。
---

![デバッグ棒](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121733.png)

Java版のSnapShot「17w47a」にて、面白いアイテムが見つかりました。その名は**「Debug Stick」**。なんと**ブロックの状態を、クリックだけでホイホイと変更できる**のです。**早速入手方法を見ていきましょう。**

※以下の内容は、SnapShot「17w47a」で動作を確認したものです。

## 「Debug Stick」を入手するコマンド

「Debug Stick」を入手するコマンド

**/give @p minecraft:debug\_stick**

IDはシンプルにdebug\_stick。

![これがデバッグ棒](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093648.png)

これがデバッグ棒です。見た目はエンチャントされた棒。スタックはできません。

## デバッグ棒を使う前に、「ブロックの状態」について理解しておこう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091311.png)

ここに、**「南を向いた」「火が付いた」**かまどがあります。このかまどの「ブロックの状態」を、コマンドで書くとしたらどうなるか分かりますか?

![ブロックの状態](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122143.png)

順番はどうでもいいですが、\[facing=south,lit=true\]ですね。バージョン1.13なら、/setblock ~ ~ ~ minecraft:furnace\[facing=south,lit=true\]で、南を向いて火が付いたかまどを設置できます。**(1.12以前はIDとブロックの状態の間にスペースを空けます)**

この**「ブロックの状態」を簡単に変更できる**のが、「デバッグ棒」なのです。

1.13のコマンド関連の変更点

[![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103811.png)  
https://www.napoan.com/java-113-command-changes/](https://www.napoan.com/java-113-command-changes/)

**「ブロックの状態」をこういう風に指定する機能は1.13以前からありました**が、**1.13では「ブロックのIDに続けてブロックの状態やNBTタグを書く」仕様に変わりました。**詳しくは▲の記事で解説していますのでお読みください。

## デバッグ棒の使い方。左クリックで変更するプロパティを選択し、右クリックで値を変更

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105543.png)

デバッグ棒を持ったら、状態を変更したいブロックを左クリックしてみましょう。すると「Selected “状態名” (現在の状態)」と表示されます。左クリックすることで、**「これから変更する状態を選んだ」**のです。**まだ変更はされていません。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093651.png)

例えばかまどならfacingとlitが選べますが、草ブロックにはsnowyというプロパティしかないので何回左クリックしてもsnowyが選択されます。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123136.png)

変更したいプロパティを選択しました。それから**右クリックすると、選択したプロパティが変更されます。**例えばかまどのlitの値にはtrueとfalseがあり、trueなら火が付きます。

今まで、**ブロックの状態を変更するならいちいち状態を書く必要がありました**が、デバッグ棒なら右クリックするだけで変更できるのです。便利でしょ。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093643.png)

例えば、草ブロックのsnowyというプロパティを右クリックで変更すれば、**雪を積もらせたりできる**のです。(正確には積もってるんじゃなくて雪状態になってるだけだけど)

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093656.png)

レールにはshapeというプロパティしかありませんが、いじれば色々な芸術品を作れます。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093701.png)

ハシゴのfacingを変えると、ブロックと分離して残すことができます。また、フェンスは左クリックと右クリックを交互に押せばこんな感じになります。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093705.png)

_Unlimited Ladder Works._

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093709.png)

ベッドのpartというプロパティを変更すれば、**クソデカベッド**が作れます。

## 「Debug Stick」はこの先どうなる? Mojangスタッフによると…

こんな面白いアイテム、開発中に消し忘れたのかな? と思ってしまいますが、そうではなさそうです。

> 話題の「Debug Stick」ですが、assets内の言語ファイルには翻訳が可能になっているので、開発者が誤って削除をするのを忘れてしまった可能性は低いと思われます。
> 
> — SaziumR (@SaziumR) [2017年11月23日](https://twitter.com/SaziumR/status/933661471640186880?ref_src=twsrc%5Etfw)

SaziumR氏よると、どうやら言語ファイルで翻訳可能みたいで、「消し忘れた」とかではなさそうですね。

では、「デバッグ棒」は正式な機能として追加されるのでしょうか?

「デバッグ棒を正式な機能として実装して!」っていうスレ

[https://www.reddit.com/r/Minecraft/comments/7etky4/mojang\_should\_turn\_the\_debug\_stick\_into\_a\_wrench/](https://www.reddit.com/r/Minecraft/comments/7etky4/mojang_should_turn_the_debug_stick_into_a_wrench/)

こちらは「(クリエイティブ限定だとしても)Mojangはデバッグ棒を正式な機能として実装すべきだ」というRedditのトピックです。

[Comment](https://www.reddit.com/r/Minecraft/comments/7etky4/mojang_should_turn_the_debug_stick_into_a_wrench/dq7i14v/) from discussion [Mojang should turn the debug stick into a wrench and make it a proper feature of the game. (even if only in creative)](https://www.reddit.com/r/Minecraft/comments/7etky4/mojang_should_turn_the_debug_stick_into_a_wrench/).

そこにMojangスタッフのErik氏([@\_grum](https://twitter.com/_grum))が**「No, sorry :)」**と書き込んでいるのです。残念ながら、「正式な機能として実装」されることはないということですが…

[Comment](https://www.reddit.com/r/Minecraft/comments/7etky4/mojang_should_turn_the_debug_stick_into_a_wrench/dq7mgfm/) from discussion [Mojang should turn the debug stick into a wrench and make it a proper feature of the game. (even if only in creative)](https://www.reddit.com/r/Minecraft/comments/7etky4/mojang_should_turn_the_debug_stick_into_a_wrench/).

このトピックに付いた_「完全に削除されるか、デバッグ機能として残されるかどっちなの?」_という質問に対して、SonicwaveMCって方が「他のみんなが言ったことからすると、削除はされないけど、完全にサポートされることもない、と思うよ。(例えば不完全なNoAIタグやエフェクトの強度が、ゲーム内部の仕組みに手を加えるからずっと修正がされてないように)」とリプライしてます。

それに対してErik氏が**「これ^」**とリプライしているんですよね。つまり、**「デバッグ棒は削除はされないけど、正式な機能としてサポートされることもない」**という認識でいいんじゃないでしょうか。

とにかくデバッグ棒が1.13正式版で削除されませんように…!
