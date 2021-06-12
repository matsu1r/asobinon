---
title: コマンド最低1つ! アイテムがランダムに出る「ガチャ」の簡単な作り方。LootTableを使って設定
---

![LootTableを使ったガチャ装置の作り方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123630.png)

**ランダムに色々なアイテムが出てくる「ガチャ(ガシャ)」装置。**例えば「運が良ければダイヤモンドが出てくる」「運が悪ければゴミアイテムが出てくる」など、マルチプレイのサーバーや配布ワールドに設置してみたいですよね。今回は**バージョン1.9の新機能「Loot Table」を使って、コマンド最少1つだけ(回路無し)でのガチャ装置の作り方を解説します。****この方法なら、json文書を編集するだけで**高度な条件/確率の設定ができる**んです。**世界に一つだけのガチャを作ってみませんか。

記事公開当初は「コマンドは最低2つ」としていましたが、**なんと1コマンドだけで実現できた**のでコマンド解説の部分を書き直しました。[棒レンジ氏](https://twitter.com/bourange)、ありがとうございました!

この記事で解説する装置は、Minecraft**バージョン1.9以上でしか動きません**のでご注意下さい。

## マイクラで「ガチャ」ってどんな感じ? ダイヤ等を投入して回せます

![ガチャの会場](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091805.png)

どこかで見たことあるようなないようなこのレッドカーペットの通路。奥にはドラゴンが構えています。御存知の通り**某ソシャゲのガチャ画面を再現した**わけですが、果たしてマイクラではどのようにガチャを回すのでしょうか。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092344.gif)

事前に**特別な「オーブ」というアイテム**が用意されていて、それを**5個ホッパーに投入するとポイッとアイテムが出てきます。**“回す”と言うより”出す”ガチャですね。

![経験値を消費して回す例](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103750.png)

ただアイテムを投入して引くだけでなく、**経験値を消費して引く、だとか様々な方法でガチャを回せます。**単純にボタンを押すと回せる、でもいいですし、配布ワールドで**「ランダムに○○する」イベントを発動するきっかけ**の装置にもできます。

![各アイテムには出やすさが設定できます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090856.png)

もちろんただアイテムがポンポン出ているだけではなく、**各アイテムごとに出やすさを設定できます。**「運」効果を持っていれば特定のアイテムを出やすくすることも可能です。

![ガチャの必要最低限のコマブロはこれだけ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104725.png)

もう少し噛み砕いていいますと、なんと**▲1コマンドだけでガチャが作れちゃう**んです。**「アイテムを複数出したりできるの?」**と心配な方もいらっしゃるかもしれませんが、**マイクラ1.9からはたった1つのコマンドで大量の種類のアイテムを自由自在な確率で出すことが可能なんです。**そう、Loot Tableがあればね。

![LootTableを使ったガチャ装置の仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091140.png)

いつもの雑パワポ図解にするとこんな感じ。ガチャで出てくるアイテムを、あらかじめLoot TableのJSONファイルに書いておいて、出やすさやエンチャ等を設定しておきます。それをマイクラ内で**ガチャを引く時に、Loot Tableを設定した、即死ぬ透明なエンダーマイトを召喚すればドロップ表に設定してあるアイテムが出てくるわけですよ。**これならコマンドは1つだけで済みます。

**「エンダーマイトって敵だからピースフルじゃ使えないでしょ」**とお思いの方、私も最初はそう思っていたのですが**どちらにせよ即死するのでこのエンダーマイトはピースフルでも使えます。**

## アイテムの種類や量、出てくる確率や条件を決める「Loot Table」を用意しよう

ガチャで出てくるアイテムの出やすさや量、エンチャントやNBTタグ等を定義するために、**これから「Loot Table」のファイルを作成していきます。**JSON形式なので書き方はとっても単純。

![これがLoot Tableだ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111820.jpg)

こちらがLoot Tableを実際に書いてみた例です。**“pools”(=まとまり)**に出てくるアイテムの合計量を指定して、**“entries”(=項目)**にアイテムを書いていきます。それぞれに**“function”(=機能)**を設定してエンチャント効果やNBTタグなどを付けていきます。さらに**pool/entry(アイテム)/functionに多種多様な”condition”(=条件)を設定できます。****どんどん書き足すことで、いくらでも複雑なガチャが作れちゃうんです。**

**「こんなの手書きできねえよ!」**と思った方も安心して下さい、[こちら](#lt-tool)でJSONを書かずともLootTableが作れるツールを紹介しています。

### Loot Table(ドロップ表)のファイルを書く準備

![ワールドフォルダー内にsaves→loot_tablesフォルダーを作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104722.jpg)

まずは使っているワールドのフォルダーを開き、dataフォルダーの中に**loot\_tablesフォルダーを作成**します。

![さらにフォルダーを作成してjsonを配置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103901.jpg)

loot\_tablesフォルダーの中に、**さらに好きな名前のフォルダーを作成**します。例えば配布ワールドの名前だとか、オリジナルの名前を付けると良いでしょう。このフォルダーの名前が、LootTableを指定する際の“Foo:bar/baz”のFoo部分になります。バニラのLoot tableを上書きする場合はminecraftという名前にします。この記事では、napoanという名前にした前提で解説を進めます。

作ったフォルダーの中に、好きな名前のjsonファイルを作成します。Windowsの場合は右クリック→新規作成→テキスト(ryで**txtファイルを作った後、拡張子をjsonに変更しましょう。**

![高機能なテキストエディタを使おう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124307.jpg)  
▲ダブルクオーテーションを打ち忘れるなど、間違いがあると分かりやすく視覚的にお知らせしてくれる。

JSONファイルを編集するソフトについてですが、Windows付属のメモ帳ははっきり言ってダメです。SublimeTextやAtomなどの、**構文チェックや自動補完機能付きの高機能なテキストエディタ**を使うことをおすすめします。各テキス  
トエディタの導入方法については割愛させていただきます。

### ガチャアイテム一覧のLootTableの書き方を解説

作成したJSONファイルを開いて中身を書いていきます。突然ですが完成品の例。

{
"pools": \[
{
"rolls": 1,
"entries": \[
{
"type": "item",
"name": "minecraft:diamond\_block",
"weight": 1,
"quality": 5
},
{
"type": "item",
"name": "minecraft:diamond",
"weight": 9,
"quality": 2
},
{
"type": "item",
"name": "minecraft:stone",
"weight": 10,
"quality": 0
}
\]
}
\]
}

初めての方は、**これをコピーしてテキストエディタに貼り付けて**ください。[こちらの記事](https://www.napoan.com/loot-table-perfect-guide/)を既に読まれた方なら構造が丸わかりだと思いますが、読んでいない方のためにも要点を掻い摘んで解説いたします。

*   “rolls”: 数値 – 出てくるアイテムの**項目(entry)の数**です。一般的なガチャの場合は1でいいでしょう。
    *   “entries”: – この中に項目を書いていきます。
        
        *   “type”: “種類” – ここでは単純にアイテムを指定するので”item”にします。
        *   “name”: “アイテムID” – アイテムIDを指定します。**必ずminecraft:を付けましょう。**
        *   “weight”: 数値 – その**アイテムの出やすさ**です。確率というよりは”出る比重”ですね。
        *   “quality”: 数値 – 運効果による出やすさの増減の大きさです。**よく分からない場合は書かなくて構いません。**  
            **“weight”の値 + (“quality”の値 × luck効果のレベル)**  
            詳しくは[こちら](https://www.napoan.com/loot-table-perfect-guide/2/#basic)で解説しています。
        

要するにentries:の中にアイテムを書いていくわけです。それぞれアイテムIDと出やすさを指定していくだけ。

LootTableで使うJSON記法の基本的なルール

*   数値はそのまま、**文字列は””で囲む!**
*   複数項目があるときは\[\]で囲む!
*   **最後の項目の後にコンマを付けるとエラー**になる

{
"pools": \[
{
"rolls": 1,
"entries": \[
{
"type": "item",
"name": "minecraft:iron\_ingot",
"weight": 6,
 "functions": \[
{
"function": "minecraft:set\_count",
"count": {
"min": 5,
"max": 10
}
}
\]
},
{
"type": "item",
"name": "minecraft:diamond",
"weight": 1,
 "functions": \[
{
"function": "minecraft:set\_count",
"count": {
"min": 1,
"max": 3
}
}
\]
},
{
"type": "item",
"name": "minecraft:wool",
"weight": 3,
 "functions": \[
{
"function": "minecraft:set\_data",
"data": 10
}
\]
}
\]
}
\]
}

▲(新機能!)マウスオーバーすると説明が表示される箇所を用意しています

Loot Tableは**コマンドとは違った方法でアイテムの数やデータ値(羊毛などの種類を指定する数値)を指定します。**“weight”等と並べて“functions”:\[\]と書き、中に”function”(機能)を書きます。

各種function、condition等LootTableの全要素を網羅した大長編解説記事はこちら

[![LootTable(ドロップ表)完全ガイド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123329.png)](https://www.napoan.com/loot-table-perfect-guide/)

**ここで登場した機能は全体のほんの一部に過ぎません。****この記事では全然解説できてませんので、LootTableの書き方については▲の記事を是非お読みください。**全ての機能、さらには”条件”等を片っ端から解説しています。(前も言った気がしますが**多分このブログで最長の技術系記事**です)

### JSONを書くのが面倒な方は、ツールを使って簡単にLoot Tableを生成しよう

![め゛ん゛どぐぜえ゛](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101735.png)

**め゛ん゛どぐぜえ゛！！！**

![これ使ってみ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123114.png)

「これ使ってみ。」

Loot Tableがクリックポチポチでとっても簡単に作れるサイト

[![LootTable作成ツール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111824.jpg)  
http://minecraft.tools/en/loots.php](http://minecraft.tools/en/loots.php)

LootTableのJSONを書くのが面倒なあなたに朗報です。いとも簡単にLootTableが作成できてしまうサイトがあるんです。当ブログで度々登場しているサイト**「Minecraft Tools」のLootTableコーナー**です。

![まずモードを選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102112.jpg)

サイトにアクセスしたらまずLootTable自体の種類を選びましょう。「Kill a Mob or Entity (Mob Drops)」にします。

※このツールではLootTableを「チェスト用」「ドロップアイテム用」に分けて扱っていますが、実際LootTableは別け隔てなく使えるものです。こ**のツールではこの選択によっていくつかのオプションが非表示になるのでご注意下さい。**手書きなら好き放題全機能を使えます。

![基本的な設定項目](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103338.jpg)

画面は単純明快なので説明するまでもないかもしれませんが、一応図で項目の場所を示しておきます。

![More options](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091149.jpg)

**「More Options」**をクリックするとさらに設定項目が表示されます。それぞれの項目の効果については[こちらの記事](https://www.napoan.com/loot-table-perfect-guide/)で詳しく解説していますので是非お読みください。特にエンチャント指定とNBTタグ欄はよく使います。

![jsonを生成してファイルをダウンロードするかコピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090247.jpg)

**「GENERATE YOUR LOOTS TABLE」**をクリックするとJSONが生成されます。自動生成ではないので使う度に押しましょう。そして下の**Click here to download**の「here」をクリックします。するとJSONファイルがダウンロードできます。

![jsonをコピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122414.jpg)

記事前半のこちらの解説を読んでLootTable専用フォルダーを作成して下さい。配置する準備が整ったら、**ダウンロードしたJSONファイルをloot\_tableフォルダー内の好きな場所に設置**します。一緒に**名前を分かりやすいものに変えておきましょう。**

## ガチャのコマンドと装置の作り方を解説

![ここからはコマンドの解説です](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103456.png)

LootTableの作成お疲れ様でした。ここからはコマンドを解説していきます。

### アイテムをホッパーに投入して回す方式の作り方

![2つの座標を確認](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101136.png)

まずは**「”オーブ”等のアイテムを投入して回すガチャ」**の作り方を解説します。装置作成前に、以下の2つの場所を決めておきましょう。

事前に確認しておく座標

*   **ホッパーの座標** – 以下、座標Hとします
*   **アイテム排出場所の座標** – 以下、座標Oとします

ガチャを回すためのアイテムを事前に入手しておきましょう▼。コマンドの作成なら[MCStacker](http://mcstacker.bimbimma.com/)が便利です

ガチャを回す対価となるアイテムを入手するコマンド

![オーブ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101211.png)  
**/give @p diamond 64 0 {display:{Name:”オーブ”,Lore:\[“ガチャに入れてね”,”5個で一回回せるよ”\]},ench:\[{id:34,lvl:5}\],HideFlags:1}**  
▲目立たせるために**適当なエンチャント効果を付けています**が、ひでフラグ:1にしてあるためツールチップには表示されません。

![アイテム払う場合のガチャ装置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104021.png)

4つコマンドブロッ  
クを同じ向きで並べます。

※マウスオーバーすると説明が出る箇所を用意しています。

「1」

**Repeat(リピート)****Unconditional(無条件)****Always Active(常時実行)**

**/testforblock 座標Hのx y z minecraft:hopper 0 {Items:\[{Slot:0b,[id:minecraft](http://blog.hatena.ne.jp/minecraft/):diamond,Damage:0s,Count:5b,tag:{display:{Name:”オーブ”,Lore:\[“ガチャに入れてね”,”5個で一回回せるよ”\]},ench:\[{id:34,lvl:5}\]}}\]}**  
ホッパーの**一番左のスロットに**オーブが5個入ったかどうかをtestforblocksコマンドで判定します。

「2」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/summon Endermite 座標Oのx y z {Tags:\[“GachaDeath”\],Silent:1,Lifetime:2400,DeathLootTable:”LootTableの場所と名前“,ActiveEffects:\[{Id:14,Amplifier:0,Duration:100,ShowParticles:0b},{Id:20,Amplifier:127,Duration:20}\]}**  
「1」が成功したら実行。座標Oに、**LootTableを設定した、ライフタイム2400でウィザー効果も付けた即死エンダーマイトを召喚**します。(ちなみにライフタイムを2400にするのは煙を消すためです)  
![loottableの指定方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111828.jpg)  
LootTableの場所と名前についてはこの図の通りです。例: DeathLootTable:”napoan:gacha/gacha1″

「3」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/blockdata 座標Hのx y z {Items:\[{Slot:0b,[id:minecraft](http://blog.hatena.ne.jp/minecraft/):air}\]}**  
ホッパーの**一番左のスロットを**空にします。

「4」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/playsound minecraft:entity.player.levelup master @a 音源にしたい座標x y z**  
▲ガチャを回すと同時に効果音を鳴らします。

![数が多すぎると](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121750.png)

注意点として、ホッパーに**必要以上に一気に入れても認識されません**のでご注意下さい。

※LootTableに変更を加えた場合、ワールドに入り直さないと反映されないのでご注意下さい。

### 経験値レベルを消費して回す方式の作り方

![レベルが足りないと警告してくれる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121742.png)

次は「レベルを消費してガチャを回す」装置の作り方を解説します。

![経験値払うガチャ装置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101518.png)

※マウスオーバーすると説明が出る箇所を用意しています。

「a」

**Repeat(リピート)****Unconditional(無条件)****Always Active(常時実行)**

**/testfor @p\[l=9\]**  
最寄りの人のレベルが**9以下か**どうか判定します。

「b」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/tell @p レベルが足りませんぜ!**  
レベル9以下なら警告。

「c」

**Repeat(リピート)****Unconditional(無条件)****Always Active(常時実行)**

**/testfor @p\[lm=10\]**  
これはUnconditionalなので無条件に実行。今度はレベルが**10以上か**どうか判定します。

「d」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/xp -10L @p**  
レベル10以上ならレベルを10マイナス。

「e」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/summon Endermite 排出場所のx y z {Tags:\[“GachaDeath”\],Silent:1,Lifetime:2400,DeathLootTable:”LootTableの場所と名前“,ActiveEffects:\[{Id:14,Amplifier:0,Duration:100,ShowParticles:0b},{Id:20,Amplifier:127,Duration:20}\]}**  
指定した座標に**LootTableを設定した即死エンダーマイトを召喚**します。

「f」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/playsound minecraft:entity.player.levelup master @a 音源にしたい座標x y z**  
効果音を鳴らします。< /td>

※LootTableに変更を加えた場合、ワールドに入り直さないと反映されないのでご注意下さい。

---

![最後までお読みいただきありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091810.png)

**Loot Tableさえ用意すれば、後はそれをドロップアイテムに設定した即死エンダーマイトを召喚するだけ。**それが新時代のガチャ装置の作り方です。皆さんも自由にLootTableとガチャ装置周辺の回路を設計して、思い通りの”ガチャ”を作ってみてください。最後までお読みいただきありがとうございました。
