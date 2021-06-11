
---
title: 時間と火事を止める・晴れのままにするコマンドの書き方
slug: /minecraft-je/howto/mcbe-time-weather-fire-command
description: クリエイティブモードで遊んでいるプレイヤーにとって、時間や天気の変化はさぞ建築の邪魔になることだろう。いっそ時間を止めたい。そんなあなたに使ってほしいのが「gamerule」コマンドだ。この記事ではその中から基本の3つを紹介する。
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105155.png)

クリエイティブモードで遊んでいるプレイヤーにとって、**時間や天気の変化**はさぞ建築の邪魔になることだろう。いっそ時間を止めたい。そんなあなたに使ってほしいのが「gamerule」コマンドだ。この記事ではその中から基本の3つを紹介する。

## 時間を止めるコマンド

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105155.png)

**/gamerule dodaylightcycle false**

時間を止めるというより、「太陽と月のサイクルを止める」方が正しい表現だろう。

逆に以下のコマンドでもう一度動かすこともできる。

/gamerule dodaylightcycle true

## 天気を止めるコマンド

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104236.png)

**/gamerule doweathercycle false**

これを実行すれば、現在の気候で固定される。

以下のコマンドで固定を解除できる。

/gamerule doweathercycle true

## 火事を止めるコマンド

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090820.png)

**/gamerule dofiretick false**

これを実行すれば、炎は燃え広がらなくなる。大人数マルチプレイにはほぼ必須だろう。

以下のコマンドで再び延焼するようになる。

/gamerule dofiretick true

[https://www.napoan.com/bedrock-command-list/](https://www.napoan.com/bedrock-command-list/)

その他の色々なコマンドの使い方はこちらを参照してほしい。
