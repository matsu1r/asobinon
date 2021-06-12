---
title: 【スイッチ対応】壁付きのトンネルを一瞬で作るコマンドの書き方
---

クリエイティブモードで山の向こうへ道を伸ばす時、みなさんはどうしますか?僕はコマンドでトンネルを作ります。**スイッチ版でも、「fillコマンド」を使えば、一瞬でトンネルが作れます。**

※この記事はこちらの動画の書き起こしです。

## 1\. 座標の表示

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090353.png)

まずは「設定」の「ゲーム」タブで、**「座標の表示」をONに**しましょう。すると画面の左上に、現在位置の座標が表示されます。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122247.png)

なお、トンネルを作る作業では、座標をいちいちメモする必要はありません！今回紹介するコマンドなら、**同じコマンドでいくらでもトンネルを延長できます。**

では実際に作ってみましょう。

## 2.トンネルを作ってみよう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090943.png)

これから使うのは、Java版でプロが使っているWorldEditではなく、普通のコマンドです。つまり、やり直し機能はありません。**念の為、作業の前にワールドのバックアップを取ることをおすすめします。**

それでは作業を始めます。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103632.png)

トンネルを掘りたい場所を決めたら、その**入り口に床のブロックを置いてください。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103726.png)

今回、トンネルの太さは、内径3メートルで作ります。**トンネル内の壁や床や天井は、コマンドで一緒に設置される**ので、ご安心ください。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103406.png)

床を設置したら、**掘りたい方向にまっすぐ歩いてください。**するとXまたはZのどちらかの座標が変わるはずです。**今回はXが「プラス」されました。ということは、東にトンネルを掘るということです。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104714.png)

**Xがマイナス**の場合は、**西**向き。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090847.png)

**Zがプラス**の場合は、**南**向き。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103946.png)

**Zがマイナス**の場合は、**北**向きです。

## 3.トンネルのコマンドはこれ！

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103257.png)

コマンドを入力する前に、トンネルを作りたい方向の壁に体をくっつけて、**穴が開く場所の、横から見て左下に立ちます。**左下です。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101053.png)

それからコマンドを入力しましょう。**十字ボタンの横を押してください。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090425.png)

**コマンドは、必ず方角にあったものを書き写してください。**

東向き

/fill ~1 ~-1 ~-1 ~30 ~3 ~3 stonebrick 0 hollow

西向き

/fill ~-1 ~-1 ~1 ~-30 ~3 ~-3 stonebrick 0 hollow

南向き

/fill ~1 ~-1 ~1 ~-3 ~3 ~30 stonebrick 0 hollow

北向き

/fill ~-1 ~-1 ~-1 ~3 ~3 ~-30 stonebrick 0 hollow

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102641.png)

なお「スラッシュ」と「うにょうにょ」と「マイナス」は「記号」画面で打ちますが、この時、**「うにょうにょ」は小さい方を打ってください。大きい方はコマンドでは使えません。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121902.png)

また、**マイナスは、短かくて太い方、つまりハイフンを打ちます。**長くて細いアンダーバーを打っても使えないのでご注意ください。

記号の打ち忘れに注意しないと、とんでもないことになります。**例えばうにょうにょを忘れると絶対座標になってしまい、意図しない範囲が一気に破壊されてしまいます。**チルダ有り無しでは全く意味が違うので、本当に気をつけてください。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123333.png)

なお、壁と天井と床のブロックは**石レンガ**にしていますが、変えたい場合は「stonebrick」の部分を別のブロックIDに書き換えてください。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103433.png)

**コマンドを打ち終えたら、「OK」で確定**します。**方角が合っているか、チルダ、マイナス、英語の打ち間違いがないか、よく確かめてください。**

間違いがないことを確認できたら、**Yボタンで実行**しましょう。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123627.png)

コマンドの仕様上、**箱しか作れないので、パット見塞がれています**が、3かける3の範囲を手で壊せば、トンネルのできあがりです。

## 4.コマンドの意味を簡単に解説

コマンドの意味を簡単に解説します。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123303.png)

6個のうにょうにょがありますが、**左の3つが「始点の座標」、右の3つが「終点の座標」**です。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091224.png)

例えば、東向きのトンネルでは、始点は東に1メートル、下に1メートル、北に1メートルの場所。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104747.png)

終点は、自分から見て東に30メートル、上に3メートル、南に3メートルの場所。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122921.png)

この始点から終点を含めた範囲がfillコマンドのターゲットになります。長さを変えたい場合は「30」の部分を変えてください。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101837.png)

次に、「stonebrick」を書いてブロックIDを指定します。その後の「0」は、ブロックのバリエーションを指定する数字です。ほとんどのブロックでは「0」でいいのですが、例えば統合版の羊毛は、この数字で色を指定します。

最後に、「**hollow**」と書いてモードを指定します。これは**「指定したブロックで箱を作り、中身は空気にする」モード**です。トンネルにぴったりですね。

## 5\. 延長するときの注意

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124200.png)

トンネルをさらに伸ばしたい時は、コマンドを実行する位置に気をつけてください。このコマンドでは、壁と床を考慮して1メートルずらした位置を始点にしています。つまり、**延長するときは、最初と同じように、床の上の、横から見て左下に立ってコマンドを実行してください。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110623.png)

また、箱なので設置してもパット見変化がありません。こうやって壊せばやっと延長できたことがわかります。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102456.png)

以上、コマンドで壁付きのトンネルを一瞬で掘る方法でした。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102137.png)

コマンドを入力するのが面倒な場合は、Windows10版で作業した後、レルムにワールドをアップロードして、スイッチでダウンロードする、という手を使うのもありですね。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102536.png)

**チャンネルでは他にも、コマンドブロックの出し方など、スイッチ版に対応したコマンドを解説しています。**是非あわせて御覧ください。ご視聴ありがとうございました。じゃあの！
