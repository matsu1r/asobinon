
---
title: MINECON2016でマイクラPE/Win10版のアップデート情報チラ見せ。Mobの挙動をカスタマイズ可能に
slug: /minecraft-je/howto/minecon2016-update-chiramise
description: カリフォルニアで絶賛開催中の「MINECON 2016」。今日の午前三時にオープニングセレモニーがあり、マイクラPEとWindows10版の将来的なアップデート情報がチラ見せされました。なんとMobの大きさや様々な挙動を、自由にカスタマイズ可能になる予定とのことです。画像と一緒に概要をお届けします。
---

![MINECON2016のアプデ情報チラ見せ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101705.png)

(ニュース記事です)

カリフォルニアで絶賛開催中の「MINECON 2016」。今日の午前三時にオープニングセレモニーがあり、**マイクラPEとWindows10版の将来的なアップデート情報がチラ見せされました。**なんと**Mobの大きさや様々な挙動を、自由にカスタマイズ可能になる予定**とのことです。画像と一緒に概要をお届けします。

\[2016/09/25-7:49追記\] Mojangブログの[この記事](http://mojang.com/2016/09/add-ons-ahoy-boss-update-coming-october-18/)にて、0.16に含まれることが発表されました!

▲Mojang公式によるMINECONの生放送です。以下、生放送のキャプチャーと概要です。(**翻訳ではありません!**)

![壇上に上がった人達](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112238.png)

壇上に上がった3人。右はマイクラ開発チームのリーダー的存在のJeb氏([@jeb\_](https://twitter.com/jeb_))。左はゲームクリエイターのSaxs氏。([@saxs](https://twitter.com/saxs)) 3人がMINECONで発表することについて話した後、ビデオが始まりました。

![アドオン機能の発表](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112242.png)

**E3 2016(毎年行われるゲームの発表会。ゼルダ新作が話題になった時)**にて、Mojangは**「マイクラPE/Win10に”アドオン”機能を追加すること」**を発表しました。その時に公開された映像の振り返りです。E3 2016では、村人の行動を変えたり、ゴーレムの形を変えたりしている様子が公開されました。

![モデル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112145.png)

さあ、ここからは将来的に実装予定の**“アドオン”の作り方**についての解説です。  
まず、Mobの形状を決めるために「モデル」を作成します。

![テクスチャ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112149.png)

さらに見た目を決めるために、「テクスチャ」を作る必要があります。ここはリソースパックみたいですね。

![挙動](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112153.png)

そこに「behavior」、つまり**Mobの”挙動”を決める「JSON」形式のファイルも作ります。**これらのファイルをリソースパックのように追加できるのが”アドオン”機能ということです。

![jsonファイル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112157.png)

挙動を決めるJSONファイルの中身はこんな感じ。どうやらクリーパーの「爆発する」という行動に関しての設定が書かれているようです。”power”の値を「3」から「25」に書き換えて…

![クリーパーにインプット](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112203.png)

クリーパーにインプット! (要するにJSONを保存)

![大爆発](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112206.png)

大爆発! **JSONファイルを編集することによって、クリーパーの爆発力を上げることができる**んですね。

![子だくさんウサギ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112209.png)

このカスタマイズ機能を使えば、例えば**子だくさんなウサギ**を作ったり…

![巨大クリーパー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112213.png)

巨大クリーパーを作ったり…

![乗れるニワトリ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112217.png)

なななんと**乗れるニワトリ**を作ったり…

![爆発するブタ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112222.png)

**爆発して炎を撒き散らし連鎖して爆発する大きなブタ**を作ったり…もうなんでもありです。

![より詳細な情報は日本時間26日午前3時](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112225.png)

この**“アドオン”機能についての詳細は、日本時間2016年9月26日の午前7時**にMINECONで発表される予定です。[こちら](https://www.youtube.com/watch?v=z27f6WkDWwk)で待機しましょう!

---

![E3で発表された時1](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112234.png) ![E3で発表された時2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112230.png)

(Twitchの[こちらの放送](https://www.twitch.tv/xbox/v/72220716?t=55m0s)のキャプチャー画像です)  
ちなみに、**E3 2016で”アドオン機能”が発表された時の様子**はこんな感じ。▲PCでWindows10版を動かしてJSONを編集していますね。これ、**スマホやタブレットだとMobのカスタマイズがめっちゃ面倒なのでは…**
