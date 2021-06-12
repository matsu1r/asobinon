---
title: Mobやアイテムを好きな場所へテレポート! エンドゲートウェイの使い方とコマンドを解説
---

![](https://www.napoan.com/wp-content/uploads/2016/02/59391eb69ec820deae7837e94f17688f_qcvwrq.jfif)

バージョン1.9の**隠された新ブロック、「エンドゲートウェイ」**。エンダードラゴンを倒すと出現する怪しげなポータルの中身のブロックです。いつもはジ・エンド内をテレポートする時に触れる”物体”ですが、**コマンドを使えば便利なブロックに早変わり。**例えば**オリジナルの”ワープポイント(ポータル)”を作ったり、アイテムを遠く離れた場所へ輸送したりできるんです。**今回はそれらの機能を使うためのコマンドを解説します。

バージョン1.9の、コマンドや配布ワールド作成に関する新機能/変更点まとめ

[![1.9のコマンド関連まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122409.png)  
https://www.napoan.com/pcversion19-command-guide/](https://www.napoan.com/pcversion19-command-guide/)  
▲バージョン1.9はコマンドに関する新要素/仕様変更が盛り沢山。

## エンドゲートウェイブロックの入手方法/設置方法

[![これがエンドゲートウェイだ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123435.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123435.png)

PC版[バージョン1.9](http://minecraft-ja.gamepedia.com/1.9)では、エンダードラゴンを倒すと「エンドゲートウェイポータル」と呼ばれる物体が出現するようになりました。**岩盤で挟まれた中には、怪しげな雰囲気を放つ謎の黒いブロックが配置されていますね。**あのブロック、ゲットしてみたくないですか?

[![setblockコマンドで設置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124334.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124334.png)

ということで、コマンドを使ってエンドゲートウェイを我が物にしましょう。以下のコマンドを実行します。

エンドゲートウェイのブロックを頭上に設置するコマンド

**/setblock ~ ~3 ~ minecraft:end\_gateway**  
※giveコマンドで**アイテムとして入手することはできない**ので、最初からブロックとして設置します。

[![設置直後は紫色のビームが出る](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103841.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103841.png)

エンドゲートウェイブロックは、設置すると10秒間紫色のビームを出します。これを**非表示にしたい場合は**、**/setblock ~ ~3 ~ minecraft:end\_gateway 0 replace {Age:200}**とします。

[![触れると黄色いビームが出るだけ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090528.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090528.png)

しかしこのままでは、**「触れると黄色いビームが出る」だけのハリボテ**です。怪しげな雰囲気を醸し出したい時の”飾り”にしかなりません。こいつを「テレポート装置」として機能させるにはどうすればいいのでしょうか。

## プレイヤー/Mob等のテレポート先を設定してオリジナルポータルを作ろう

[![コマンドブロックでブロックを設置しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111133.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111133.png)

それでは、コマンドの力で**「テレポート機能を持ったエンドゲートウェイブロック」**を設置します。ゲートウェイブロックを設置したい場所の1ブロック下にコマンドブロックを設置して、以下のコマンドを入力して実行しましょう。

テレポート先の座標を設定したエンドゲートウェイブロックを設置するコマンド

**/setblock ~ ~1 ~ minecraft:end\_gateway 0 replace {ExactTeleport:1,ExitPortal:{X:X座標,Y:Y座標,Z:Z座標}}**  
※「0 replace」が抜けると設置できないのでご注意下さい。

**「ExitPortal」タグでテレポート先を指定します。**例えばx=-114,y=51,z=4の座標へワープする場合**/setblock ~ ~1 ~ minecraft:end\_gateway 0 replace {ExactTeleport:1,ExitPortal:{X:-114,Y:51,Z:4}}**  
と書きます。

[![Mobもテレポートできます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122817.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122817.png)

エンドゲートウェイブロックを設置する際、なんとプレイヤーだけでなく、**村人やゾンビ、アイテムやトロッコなどあらゆるエンティティを瞬時にワープさせることができるんです!**

[![オリジナルのポータル(ゲート)を作ろう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104743.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104743.png)

エンドゲートウェイブロックを固めて設置すれば、**オリジナルの大きなポータル**を作れます。

テレポート先の座標を設定したエンドゲートウェイブロックを設置するコマンド

**/fill ~ ~1 ~ ~1 ~3 ~ minecraft:end\_gateway 0 keep {ExactTeleport:1,ExitPortal:{X:X座標,Y:Y座標,Z:Z座標}}**  
※「keep」モードなので、既に設置されているブロックは保持されます。

[![ExactTeleport:1を書かない場合の挙動](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122243.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122243.png)

setblockコマンド内の**「ExactTeleport:1」**は、「指定した座標ピッタリにテレポートする」という意味です。もし書かなかった場合は、上図のように**周囲の11×11ブロックの範囲内の北西からブロックの有無が検証され、ブロックが見つかり次第そこへテレポート**します。つまり、**ExactTeleportを書き忘れると指定した座標より大抵は北西にズレた場所にワープしてしまうのです。**

もし、テレポート時に理想の場所とズレてしまう場合は**/blockdata ~ ~-1 ~ {ExactTeleport:1}**をゲートウェイブロックの**上に立って**実行してください。

## バニラでテレポートパイプ! アイテムを読み込み範囲外に転送できる

[![アイテムの輸送もできます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123118.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123118.png)

この「エンドゲートウェイブロック」はあらゆるエンティティをテレポート出来るのですが、その中には当然”アイテム”も含まれています。ということは、**バニラでも工業化MODの「テレポートパイプ」が作れてしまう**わけですよ。コマンドが必要ですが。

[![読み込み範囲外へアイテムをテレポートできる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103557.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103557.png)

このエンドゲートウェイポータルの何が便利かって、**チャンクの読み込み範囲外でも瞬時にテレポートできる**んです。ベテランのクラフターの方ならお気づきですね、この特徴が何を示しているかというと…

## エンドゲートウェイは一時的なチャンクローダーになる

[![何かがテレポートすると一時的にチャンクを読み込む](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103959.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103959.png)

…そう、**エンドゲートウェイはチャンクローダーになるんです。**エンティティ(プレイヤーやMobやアイテムなど)がゲートウェイを通ってテレポートすると、**テレポート先のチャンクが数秒間読み込まれます。**何度もテレポートを繰り返せば立派なチャンクローダーとして使えるわけです。

エンドゲートウェイを使ったチャンクローダーについては、Dragnoz先生が詳しく実証/解説されています。動画では**ゲートウェイの上にアイテムを召喚してテレポさせる**ことで、遠くのチャンクを読み込んでいました。

ちなみに、2つのゲートウェイでアイテムを無限テレポートさせたら無限にチャンクローダーが作動してくれるのでは? と思い付いて作ってみたのですがうまくいきませんでした… テレポートを繰り返すうちに読み込みが中断されてしまいます。今のところ、**定期的に何かエンティティをテレポートさせて読み込ませ、テレポート先でkillする**、ぐらいしか方法はないようです…

---

## エンドゲートウェイの使い方まとめ/あとがき

エンドゲートウェイブロックのコマンドまとめ

*   エンドゲートウェイブロックはアイテムとして入手できない。
*   設置するには**/setblock x y z minecraft:end\_gateway**
*   テレポート先の座標を設定するには**{ExitPortal{X:X座標,Y:Y座標,Z:Z座標}}**
*   設定した座標に正確にテレポートするなら**{ExactTeleport:1}**
*   チャンクの読み込み範囲外でもテレポート可能!
*   テレポートすると黄色いビームが出て、**テレポ先のチャンクが数秒間読み込まれる**

参考にさせていただいたページ:  
[End Gateway (block) – Minecraft WIki](http://minecraft.gamepedia.com/End_Gateway_(block))

![最後までお読み頂きありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091421.png)

最後までお読み頂きありがとうございました。テレポート先を自由に設定できるだなんて、エンドゲートウェイブロックってなんて素敵なブロックなんでしょう。**バージョン1.9からの配布ワールド作成やサーバー作りに、きっと役立つはずです。**
