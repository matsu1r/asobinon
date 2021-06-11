---
title: tellrawコマンドを驚くほど直感的に作成できるツールのご紹介
sidebar_position: 0
slug: /minecraft-je/howto/tellraw-command-generator/
---

チャット欄に様々なテキストを流す**「tellraw」コマンド**。ただ文章を流すだけでなく、**マウスオーバーした際にさらに何か表示したり、クリックで様々なイベントを発動したり、メッセージ内にプレイヤー名やスコアボードの値を表示したり…** 多機能な分コマンドも複雑(というかJSON書くのが面倒)なのでツールに頼りましょう。今回紹介するツールなら、**まさに”見たまま編集”**ですらすらtellrawコマンドを作成できちゃいます。

:::warning
情報が古すぎます。更新してください。
:::

## 直感的に文章を書いてtelllrawコマンドを生成できるツールはこちら

[[dl|直感的にtellrawコマンドを生成できるツール「/tellraw editor」]]
|![tellrawコマンドを簡単に生成できるツール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111712.jpg)  
|<http://minecraft.tools/en/tellraw.php>

前振り無しでいきなりご紹介します、「/tellraw editor for Minecraft」のご登場です! 拍手! [この前ご紹介した看板のツール](/minecraft-je/howto/sign-command-generator/)と同じサイトです。

![ここにテキストが入ります.jpg](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111715.jpg)

「Text:」の下に文章を入力していきます。「JSON Creator for Minecraft」などと違って複数行に渡って自由に書けるのでとっても楽。ちなみに**10行以上書いた場合はゲーム内のチャット表示領域からはみ出てしまいます。**(チャット欄を開けば全文表示できます)

## 文字を太字にしたり、色を付けたりして装飾したり、特殊な記号を入力したり

![文字を太字にしたりが楽々](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110937.jpg)

このツールはブログの記事編集画面みたいな感じで”見たまま編集”できるんです。文字を選択して**「B」で太字**、**「I」で斜体**、**「U」で下線**、**「S」で取り消し線**、**「よく分かんない記号」を押せば読みづらく**できます。

![文字に色を付けてみよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111718.jpg)

これもこの前の看板のツールと同じく、16種類の色を自由に付けられます。

![特殊な記号を入力できる機能](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103718.jpg)

ユニコード記号をクリックで簡単に入力できる機能も健在。**「Ω」マークをクリックして使います。**

## クリック時のイベントを設定しよう。コマンドを実行したりリンクを開いたり

![クリックすると何か起こる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123735.png)

tellrawコマンドで最も便利な機能とも言える**「文字をクリックすると何か起こす」クリックイベント機能**。**クリックをきっかけに色々な装置を起動させる**ことも可能です。

![文字を選択してクリックイベントを設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110039.jpg)

このツールでクリックイベントを設定するのはとても簡単。文字を選択してボタンを押すだけ。

![クリックイベントの種類を選ぼう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103526.jpg)

クリック時のイベントを設定するウィンドウが出てきたら、イベントの種類を選びましょう。

### クリック時のイベント一覧

|項目の種類と説明|実際にクリックした結果|
|---|---|
|**「Open URL」**|![URLを開く機能](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122706.png)<br />WebページのURLを開きます。リンクをクリップボードにコピーすることも可能です。
|「Suggest Command」|![suggest command](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090403.png)<br />設定したコマンドが入力された状態のチャット欄が自動で開きます。ここからコマンドを自由に弄って使えるわけです。|
|「Run Command」|![Run command](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091436.png)<br />好きなコマンドを実行します。クリックしたプレイヤー自身が実行したことになるのでご注意下さい。**「クリックした人に○○する」時はセレクターを「@p」にして下さい。**|
|「Suggest Text」|![Suggest Text](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091440.png)<br />設定した文章が入力された状態のチャット欄が自動で開きます。**Shiftキーを押しながらクリックする必要があるので注意。**|

### クリックイベントを削除/再編集するには

![クリックイベントを削除するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105829.jpg)

設定したクリックイベントを削除するには、**消したい部分を選択した状態でイベント削除ボタンを押して下さい。**部分的にイベント解除も可能です。

![クリックイベントを再編集するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102540.jpg)

設定してしまった**イベントを後から編集するには、エディタ上のマウスカーソルマークをダブルクリック**します。

### クリック時に複数のコマンドを実行するには

![大きな装置を動かしたい時は](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100445.png)

一回のクリックで複数のコマンドを一気に実行したい場合は、別の場所にコマンドブロックの塊を用意して、**クリックイベントを「Run command」にしてsetblockコマンドでレッドストーンブロックを設置して装置を起動させましょう。** setblockコマンドは`/setblock x y z minecraft:redstone_block` です。

## マウスオーバー時の表示を設定しよう。実績/統計など色々表示可能

![マウスオーバー時に何か表示する機能](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122904.png)

テキストにマウスオーバー(ホバー)時に**任意の文章からアイテム/エンティティ、実績/統計の情報まで表示させられる**「hoverEvent」機能を設定してみましょう。

![マウスオーバー時のツールチップを設定するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102619.jpg)

ホバーイベントを設定したい部分を選択して、右上の”ツールチップ作成”ボタンを押します。

### マウスオーバー時のイベント一覧

|項目の種類と説明|実際にクリックした結果|
|---|---|
|**「Custom text」**|![Show text](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091443.png)<br />自由に文章を表示させられます。装飾したテキストを表示させたい場合は、表示させたいテキストを書いて**「GENERATE THE COMMAND」を押し、生成されたJSONテキストのほうを使えばOK**です。|
|「Item or Block」|![Show Item](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123444.png)<br />アイテムのNBTタグを入力すれば情報を表示させられます。例えば `{id:”minecraft:diamond”,tag:{display:{Name:”すごいダイヤモンド”,Lore:\[“何の変哲もない(1行目)”,”ダイヤです(2行目)”\]}}}` という感じの形式です。|
|「Player, Mob or Entitiy」|![Show Entity](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102035.png)<br />**実在しないものでもいいので、好きなように**エンティティの情報を書いて表示させられます。**F3+Hでアイテムの詳細表示をONにしておかないと表示されません。ご注意下さい。**|
|「Archievement」|![Show Archievement](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110814.png)\n実績のIDを入力すれば、名前と説明を表示してくれます。**実績IDは[こちらの表](http://minecraft.gamepedia.com/Achievements#List_of_achievements)で確認して下さい。**|
|「Statistic」|![統計を表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124218.png)<br />統計の名前だけを表示してくれます。[こちらのページ](http://minecraft.gamepedia.com/Achievements#List_of_achievements)に書いてある`stat.XXX`の`XXX`部分を入力して下さい。|

### マウスオーバー時の表示を削除/再編集するには

(画像は省略)

マウスオーバー時のイベントも、クリックイベントと同様に**選択して削除ボタンを押すことで削除**できます。(部分的に解除も可能) また**再編集したい時はエディター上の吹き出しマークをダブルクリック**して下さい。

## プレイヤーの名前やエンティティの名前を表示させよう

![プレイヤーやエンティティの名前を表示する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091037.png)

サーバーにログインした時など、**「ようこそ○○さん」などプレイヤー名がチャットに流れる機会って結構ありますよね。**この機能もツールを使えばとても簡単に設定できます。他にもエンティティ(Mob等)の名前まで表示できちゃうんです。

![セレクターを書いてボタンを押そう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101522.jpg)

エディター上に「@p」など、コマンドで使うセレクターを直接書きます。「@a\[score\_○○=1\]」など引数付きで書いても構いません。**書いたセレクターを選択して「@」マークを押せば設定は完了です。簡単でしょ。**

## プレイヤーやエンティティのスコアボードの値を表示させよう

![スコアの値を表示する機能](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091446.png)

チャットのメッセージの中に、スコアボードの値を表示できたら便利ですよね。例えば**PvPならゲーム終了時にキル数をチャットに流すだとか**、tellrawの中で一番実用性が高い機能かもしれません。

![スコアを挿入したい場所でボタンを押す](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102015.jpg)

エディター上の**スコアを挿入したい場所で**このボタンを押しましょう。

![スコアの持ち主のセレクターとオブジェクト名を入力](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103218.jpg)

出てきた画面に、表示するスコアの持ち主とスコアボードのオブジェクト名を入力します。例えば上の欄は「@p」など**コマンドで使うセレクターを入力**します。

![エディター上を編集しても意味無いです](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123011.jpg)

エディター上に**「@p->Test1」などと表示されますが、ここを自分で書き換えても反映されません。**ご注意下さい。スコアを削除したい時は専用の削除ボタンを押します。

## テキストを流す対象のプレイヤーを指定してコマンドを生成

それでは最後に、テキストを流す相手を指定してtellrawコマンドを生成する手順を解説します。

![セレクターとプレビュー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111546.jpg)

**「Selector」欄でテキストを流す相手を指定**します。コマンドで使うセレクターを書いて下さい。プレビューを表示する機能もありますが、フォントが違うのであまりあてになりません。

![コマンドの生成とコピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102637.jpg)

下の**「GENERATE THE COMMAND」**をクリックすればtellrawコマンドと文章のJSONが生成されます。**上の「THE /TELLRAW COMMAND」の中身をコピー**しましょう。

![コマンドブロックに貼り付けて使う](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104313.png)

生成されたコマンドは長いので、**コマンドブロックにCtrl+Vで貼り付けて**使いましょう。

## 参考にさせて頂いたページ様

**1.9 – JSON Text Component – Minecraft Forum**  
[http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/351959-1-9-json-text-component-for-tellraw-title-books](http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/351959-1-9-json-text-component-for-tellraw-title-books)
