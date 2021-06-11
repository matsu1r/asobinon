
---
title: ヌルヌル動く! 防具立てを使った3Dモデルやアニメーションを簡単に作れるツールの紹介
description: 防具立て(アーマースタンド)にアイテムやブロックを持たせて透明にすれば、自由な角度で好きな場所にアイテムやブロックのモデルを出現させられることは皆さんご存知ですよね。今回は、アイテムやブロックを組み合わせたモデルや、それらを動かしたアニメーションを簡単に作れるツールを紹介します。これまでブロックでは表現不可能だった細かい造形を直感的に作れて、しかも1つのコマンドをコピペするだけで設置できるんです。
---

![防具立てを使ったモデルやアニメーションのツール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110612.png)

**防具立て(アーマースタンド)にアイテムやブロックを持たせて透明にすれば、自由な角度で好きな場所にアイテムやブロックのモデルを出現させられる**ことは皆さんご存知ですよね。今回は、アイテムやブロックを組み合わせたモデルや、**それらを動かしたアニメーションを簡単に作れるツール**を紹介します。これまでブロックでは表現不可能だった細かい造形を直感的に作れて、しかも1つのコマンドをコピペするだけで設置できるんです。

\[2016年5月24日追記\] 設置した際の向きにに応じて回転する機能について追記しました。

## アイテム/ブロックのモデルやアニメーションとはどんな物?

![防具立てにブロックやアイテムを持たせると](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091544.png)

皆さんご存知の通り、防具立て(armor\_stand)に装備品としてブロックやアイテムを設定すれば、人のように持たせることができます。**さらに防具立てを透明にすると…**

![防具立てを透明にすればブロックやアイテムを自由に配置できる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101715.png)

そう、防具立てを使えば空中に自由にブロックやアイテムを配置できるんですね。例えば**ブロックに剣が突き刺さってるだとか、凝った作りの配布ワールドとかでよく見る造形**はこうやって作るわけです。

![ダイヤモンドのアニメーション](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122558.gif)

そして▲は**防具立てを動かしてアニメーションを作ってみた例**です。**動きを無限ループさせたり、途中で動き方を切り替えたりする**こともできます。

![自力で色々な設定するのは大変](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124224.png)

アイテムの大きさや向きを設定するには防具立ての大きさや頭と四肢の向きを設定すればいいのですが、さらに動きを作るとなると、適切にNBTタグを弄るために相当な手間と根気が必要です。私はそんなコマンド力を持ち合わせていませんから、**とある便利なツールを使いました。**

## これが今回紹介するツールです

Armorstand Model / Animation Generator

[![Armorstand Model / Animation Generator](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111733.jpg)  
https://mrgarretto.com/model/](https://mrgarretto.com/model/)

今回紹介するのは、[MrGarretto氏](https://twitter.com/JustMrGarretto)制作の「Armorstand Model / Animation Generator」です。その名の通り、防具立てを使った3Dモデルやアニメーションのジェネレーターです。

ツール作者さんの動画です。いきなり面白いアニメーション作品が登場していますね。こんな風に、**ブロック/アイテムの角度や大きさをうまく調整すればバニラとは思えない仕掛けが作れてしまう**わけです。

## ブロックとアイテムを設置して、大きさや角度を変更してみよう

それではまず、ツールの画面上にブロックやアイテムを設置してみましょう。

![IDを入力して配置する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110930.jpg)

左上の「ID」欄に、**数字ではないブロック/アイテムのIDを入力**します。IDを調べる際は[こちらのサイト](http://minecraft-ids.grahamedgecombe.com/)をお使い下さい。入力したらEnterを叩きます。

![データ値を指定するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100925.jpg)

羊毛やカーペットなど、**種類を別途「データ値」で指定する**場合はID:データ値という風に書きます。各ブロック/アイテムのデータ値は先程のサイトで確認できるほか、ゲーム内ではF3+Hキーで確認できます。

![基本的な操作方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111737.jpg)

基本的な操作方法は以下のとおり。

*   カメラの向きを動かす: 左ドラッグ
*   カメラをパンする(ずらす): 右ドラッグ
*   ブロック/アイテムを動かす: 赤青緑の線をドラッグ

アイテム/ブロック自体をドラッグしても視点が動いてしまいます。X/Y/Z軸の線をドラッグする必要があるのでご注意下さい。

![後からIDを変更したり削除したり](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124210.jpg)

設置後、左側のパネルを使えば後から位置やID(+データ値)を変更したり、**複製(Duplicate)や削除(Remove)**したりできます。大きなモデルを作る際、複製機能は重宝するはずです。

![アイテム/ブロックの大きさや向きを設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123355.jpg)

アイテムやブロックの大きさを設定するには、左のSmall/Medium/Large/Solidをクリックします。**Solidにするとブロックの場合はそのまま設置されます**のでご注意下さい。アイテムをSolidにするとゲーム内で設置した際に消えてしまいました…

角度を設定する場合は、その下の3つのスライダーを弄ります。文章で説明しづらいので実際に触ってお確かめ下さい。

## コマンドを生成してみよう

ひとまずコマンドを生成して使ってみましょう。

![単体のコマンドを生成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122947.jpg)

左下の**Generate**ボタンをクリックすると、長い長いコマンドが生成されます。左上にSingle(単体)とReusable(何度も設置可能)がありますが、ひとまずSingleを選択しましょう。ほんでコマンドをコピー。

![コマンドはコマンドブロックで使おう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091549.png)

コマンドブロックにCtrl+Vキーで貼り付けて使いましょう。**Singleを選択した場合、コマンドブロックが消えてモデルが1つだけ設置されます。**

![Reusableモードの使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104946.png)

**Reusable**を選択した場合、「Entity to place at」で指定したエンティティの場所に設置されます。**「Give entity spawn egg initially」にチェックを入れておけばコマンド使用時にスポーンエッグが入手できる**ので、エッグを使ってどんどん設置しましょう。

## アニメーションを設定してみよう。キーフレームを設置して設定

このツールの特徴は何といっても「アニメーションを設定できる」点でしょう。ということで**ブロックやアイテムを自由自在にヌルヌル動かす手順**を解説します。

![アニメーションのタイムラインをOPEN](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123318.jpg)

**Animations**ボタンを押すと、**どこぞのAfterなんとかさながらのタイムライン**が表示されます。私はこの時点で興奮しちゃいましたよ、Webアプリでここまでできるとは…

![キーフレームを追加して動きを付けよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103822.jpg)

タイムラインの適当な場所をクリックすると、「キーフレーム」が追加されます。**この状態でブロックやアイテムの位置や向き、さらにVisible/Invisibleを切り替えたりしてアニメーションを作っていきます。**使い方は[ReplayModの画像設置機能](https://www.napoan.com/replaymod-add-image/)と同じですね。  
※**途中でブロックやアイテムの大きさを変えることはできない**のでご注意下さい。

![キーフレームの削除](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122402.jpg)

Delete Keyframeをクリックすると、カーソルが合っているキーフレームを削除できます。

![Interpolationを設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104118.jpg)

**タイムラインをドラッグして範囲を選択**し、**Add Interpolation**をクリックすると「Interpolation(補完)」が設置されます。**設置されたオレンジ色の線を右クリック**して、アニメーションの動き方をEase In/Ease Out/Ease In-Outの中から選べるのですが、これも文章で説明しづらいので是非実際に触って確かめてみてください。動き方をリセットするならRemove Easingを選びます。  
下の「Interpolate every…」の数値を上げる事で… ここよく分かりません。

![アニメーション設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111425.jpg)

タイムライン右上のAnimation Settingsをクリックすると、アニメーションの設定画面が開きます。

Enable Animation

チェックを入れないと、そもそもアニメーションが動きません。

Loop Animation

アニメーションをループさせるならチェック

Play animation once

Loop Animationのチェックを外すと出現。一度だけアニメーションするならチェック。チェックを外すと動きません。

Enable interpolation

先程解説したInterpolation(補完)機能を有効化します。

Length

アニメーションの長さをtickで指定します。タイムラインのものさしが細かくなるのがお分かり?

Strict movement

動かした時に、ふわふわっと**予期せぬ動きになった場合はチェック**を入れるとなめらかになります。

## リソースパック(3Dも!)を読み込んでもっと高度な作品を作ろう

![リソースパックを読み込む](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121524.jpg)

なんとこのツール、リソースパックを読み込めるんです。左下の**Options**をクリックして、「Load resource pack」からリソースパックを選択できるのですが、この際**リソースパックのzipを展開してフォルダー化させておかないと読み込めない**のでご注意下さい。あとpack.mcmetaを1.9仕様に書き換えてなくても使えるみたいです。

例えば[こちらの動画](https://youtu.be/X-SbTHnQGUo?t=3m16s)では車の3Dリソースパックを読み込んで走らせるようなアニメーションを作ってましたね。**3Dリソースパックとアニメーションを組み合わせれば表現の幅は無限大**ですぞ。

## \[2016/05/24追記\] 作ったモデルを、設置した向きに応じて回転する仕様にするには

![回転させたい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121610.jpg)

▲こんな形状のモデルを作った場合、設置した際に**常に同じ方角を向いてしまっては不便**ですよね。例えば道路標識だとか、**設置した際の向きに応じて回転する仕様にするには**どうすればいいのでしょうか。

![2つにチェック](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111921.jpg)

そんな時はコマンド生成画面でReusableモードを選択し、Multi-directional placementとSpawn with auto-directionにチェックを入れます。そしてコマンドを実行して装置を出現させれば…

![バグった](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091937.png)

[こちらのMrGerratto氏の動画](https://www.youtube.com/watch?v=-fqWMge4MG8)では正常に設置できているのですが、2016年5月24日現在私の環境では防具立てが延々に召喚されてしまいます。**皆様正常に設置できた場合は動作報告を頂ければ嬉しいです。**このバグが私の環境限定のものなのかどうか分かりませんのでとても不安です…

▲こうすることによって本来はどんな挙動をしたのかについては、MrGettato氏のこちらの動画をご覧下さい。

## 世界中の人が作った作品を設置してみよう

![Popular Projects](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103045.jpg)

ツールにアクセスした際、左側に**Popular Projects**というボタンが表示されます。クリックしてみると…

![ユーザーさんの作品一覧](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105445.jpg)

なんとこのツールの**ユーザーさんの作品が一挙にビューできちゃう**んですよ。私が試してみたところ、ツールの不具合なのかどれもちゃんと読み込まれませんでしたが…

---

**「○○についてまとめてほしい/解説してほしい」**などのご意見ご感想、コメント欄や[Twitter](https://twitter.com/napoan)でお待ちしています。
