---
slug: /minecraft/howto/howtomake-redstone-circuits/
title: 覚えておきたい11種類のレッドストーン回路の作り方
sidebar_position: 0
---

![PEレッドストーン回路の作り方まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103758.png)

マイクラPEのアップデート「0.14」がリリースされ、リピーター(反復装置)やコンパレーター、ディスペンサー(発射装置)などレッドストーン回路に関する追加ブロック/アイテムが色々追加されました。それぞれを上手く組み合わせれば立派な装置が作れますが、まずはレッドストーン装置の「パーツ」 – **例えば「クロック回路」や「AND回路」、「パルサー回路」「ラッチ回路」などの作り方をマスターしないと大きな装置は作れません。**今回は、全て画像付きでそれぞれのレッドストーン回路の作り方を解説していきます。

※この記事は2015年11月21日に公開した記事を再編集したものです。

## 信号のオンオフを逆にする”NOT回路”の作り方

[![信号のオンオフを逆にするNOT回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160226.jpg)](#c/3/c30d7f57.jpg "信号のオンオフを逆にするNOT回路")

例えば、「レバーをONにするとドアが閉まる」のような装置を作りたい場合は、パウダーで伝えた**信号のON/OFFを逆に**しなければいけませんね。そんな時はこの**「NOT回路」**を作りましょう。**ブロックにレッドストーントーチを指すだけでほら、もう信号のON/OFFが反転します。**

## 高速で信号をON/OFFする”クロック回路”の作り方

[![クロック回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123255.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123255.jpg)

レッドストーン回路の中で最もポピュラーなのが「クロック回路」。**一定の周期で信号のON/OFFを繰り返すこのクロック回路**ですが、リピーター(反復装置)を輪っか状に繋げて一瞬だけ信号を与えれば、簡単に作れます。

[![最速で動くクロック回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122709.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122709.jpg)

これがリピーター(反復装置)を使った**最速で動くクロック回路**。2つのリピーターだけで輪っかを作るのですが、起動する際には**本当に一瞬だけ信号を与えないと動かない**のでご注意下さい。後述する[パルサー回路](#pulser)を作って信号を送ると楽ですね。

![ホッパーを使ったクロック回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105210.jpg)

**0.14で追加された「ホッパー」を使ってもクロック回路が作れます。**向かい合わせて接続し、**(スニークしながら設置すれば繋がるはずです)**片方に適当なアイテムを入れ、コンパレーターを設置すれば定期的にON/OFFが繰り返されます。

![コンパレーターを使ったクロック回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104107.jpg)

さらにコンパレーターを使っても簡単にクロック回路が作れます。**コンパレーターをタップすると赤く光り減算モードになる**ので、そこに図のようにパウダーとレバーを設置してONにすればカチカチと周期的に信号を発します。

## 信号のオンオフを保持し、切り替え可能な”ラッチ回路”の作り方

[![信号のオンオフを保持するラッチ回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132659.jpg)](#2/b/2b6c039b.jpg "信号のオンオフを保持するラッチ回路")

こちらは「ラッチ回路」といって、ボタン(またはレバー)を押すと一方がONになりもう一方がOFFになります。そしてその状態を保持してくれる優れものです。**ボタンでレバーのようにトグル切り替えのできる仕掛け**、と言ったら分かりやすいですね。

![コンパレーターを使ったラッチ回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104546.jpg)

0.14で追加されたコンパレーターとリピーター(反復装置)を使ってもラッチ回路は作れます。この作り方の場合、**片方のボタンを押すとON、もう片方を押すとOFF**、と役割が決まっているので注意。それと**コンパレーターは一回タップして”減算モード”に**切り替えてください。

## ボタンを押す度にON/OFFが切り替わる”トグル回路”の作り方

[![ボタンを押す度にオンオフが切り替わるトグル回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121429.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121429.jpg)

PE0.14でリピーター(反復装置)が追加されたことで、トグル回路も簡単に作れるようになりました。こちらは**「ボタンを押す度にオンオフが切り替わる」トグル回路**です。リピーターを3個置いて、上の2つは3回タップして遅延を調整します。

[![トグル回路の別視点からのスクショ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111706.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111706.jpg)

上のスクショがごちゃごちゃして見づらかったのでもう一枚。**リピーターの向きや遅延、RSトーチの挿し忘れなどに注意して下さい。**

ちなみにリピーターの見た目が変だと思われた方も居るかもしれませんが、あれは**「リピーターロック」といってリピーターに横からリピーターで信号を送るとああいう見た目になる**んです。私自身よく分かっていないのですが、信号をロックというか保持して色々できるらしいです。

## レバーなどを両方オンにすると出力される”AND回路”の作り方

[![AND回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208140610.jpg)](#5/5/5514e765.jpg "AND回路の作り方")

こちらは「AND回路」といって、**「入力A」「入力B」がどちらもONになると、向こう側の信号がONになる**、という回路です。例えば「1Fと2Fの両方のレバーを倒すとドアが開く」なんて謎解きっぽい仕掛けが作れます。

## レバーなどを両方オンにすると信号が切れる”NAND回路”の作り方

[![AND回路を反転させた「NAND回路」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208163145.jpg)](#e/2/e22ab18d.jpg "AND回路を反転させた「NAND回路」")

続いてこちらは「NAND回路」です。「Not AND」の略で、つまりAND回路のNOT版です。先程解説した**「AND回路」の、レッドストーントーチをパウダーに変えただけ。****両方ONにすると、出力先がOFFに**なります。

| 入力A | 入力B | 出力 |
|---|---|---|
| OFF | OFF | ON |
| ON | OFF | ON |
| OFF | ON | ON |
| ON | ON | OFF |

## どれか一つでもオンになると信号が切れる”NOR回路”の作り方

[![どれかをONにすると切れる「NOR回路」](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165018.jpg)](#e/7/e7eff1e7.jpg "どれかをONにすると切れる「NOR回路」")

こちらはとっても簡単な「NOR回路」。**A/B/CどれかがONになったら信号が切れます。**例えば、「どれでもいいからレバーを倒したら○○する」のような仕掛けが作れますね。

| 入力A | 入力B | 出力 |
|---|---|---|
| OFF | OFF | ON |
| ON | OFF | OFF |
| OFF | ON | OFF |
| ON | ON | OFF |

## 片方がオンなら出力される”XOR回路”の作り方

[![片方だけONなら出力されるXOR回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122749.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122749.jpg)

ちょっと複雑な「XOR回路」の作り方です。**2つコンパレーターを置いて、どちらもタップして「減算モード」にします。**そして図のようにレバーとパウダーを繋げると、**「A/BどちらかがONだと出力し、どちらもONかOFFなら切れる」**という不思議な回路が出来上がるんです。

| 入力A | 入力B | 出力 |
|---|---|---|
| OFF | OFF | OFF |
| ON | OFF | ON |
| OFF | ON | ON |
| ON | ON | OFF |

## 片方がオンなら信号が切れる”XNOR回路”の作り方

[![XNOR回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122331.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122331.jpg)

次は「XOR回路」のNOT版、**「XNOR回路」**の作り方です。XORは「2つの入力が違う状態ならON」でしたが、こちらは**「2つの入力が同じ状態ならON」**なんです。XORと同様、**コンパレーターをタップして減算モードに切り替えるのを忘れずに。**

| 入力A | 入力B | 出力 |
|---|---|---|
| OFF | OFF | ON |
| ON | OFF | OFF |
| OFF | ON | OFF |
| ON | ON | ON |

## 一瞬だけ信号を発信する”パルサー回路”の作り方 {#pulser}

[![パルサー回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101329.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101329.jpg)

こちらは**「パルサー回路」**といって、入力をオフ→オンにした瞬間に出力先に一瞬信号を出します。**リピーター(反復装置)を1回か2回タップしないと動かないので注意。**私には用途がよく分からないのですが、今後複雑な仕掛けを作る時などのために一応覚えておきましょう。

[![もっと簡単なパルサー回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104950.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104950.jpg)

▲こちらは[ライト氏](https://twitter.com/Right_right1013)秘伝のもっと簡単なパルサーの作り方です。リピーター無しでレッドストーントーチだけで作れます。おそらくこちらのほうが信号は短いはずです。

## 決めておいた一方だけオンにすれば信号が切れる”IMPLIES回路”の作り方

[![IMPLIES回路の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142226.jpg)](#6/4/644e3caf.jpg "IMPLIES回路の作り方")

最後に、聞き慣れない「IMPLIES回路」の作り方を紹介します。図のように作ったら、**金ブロックに乗せているレバーを「A」、もう片方を「B」とした時、**「A」だけONなら出力先の信号がOFFに**なり、それ以外の場合はONになります。**文章で説明しても難しいので、以下の表を見て頂ければ分かりやすいと思います。

| 入力A | 入力B | 出力 |
|---|---|---|
| OFF | OFF | ON |
| ON | OFF | OFF |
| OFF | ON | ON |
| ON | ON | ON |

## 参考にさせて頂いたページ様

**Minecraft Japan Wiki – テクニック/レッドストーン回路**  
[http://www26.atwiki.jp/minecraft/pages/26.html](http://www26.atwiki.jp/minecraft/pages/26.html)  
**Minecraft 101**  
[http://www.minecraft101.net/redstone/redstone-latches.html](http://www.minecraft101.net/redstone/redstone-latches.html "Minecraft 101")
