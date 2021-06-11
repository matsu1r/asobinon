---
title: 看板の文字に色を付けたり、クリックすると何か起こる看板が作れるツールの紹介
sidebar_position: 0
slug: /minecraft-je/howto/sign-command-generator/
---

配布ワールドやマルチプレイのサーバーでよく見かける**「右クリックすると何か起こる看板」**や**「文字が部分的に装飾された看板」**。ですがバニラで文字入力する際にはそんな設定はできません。コマンドを考えるのも非常に面倒だし… 困っていた矢先に、**なんといわゆる「見たまま編集」で文字に色を付けたり太字にしたりできるコマンドジェネレーターを発見してしまいました。**


:::warning
情報が古すぎます。更新してください。
:::

## 文字が部分的に装飾された看板や、クリックすると何か起こる看板とは?

![文字を装飾しまくった看板](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095711.png)

この画像は極端な例ですが、看板の文字には色を付けたり、下線を付けたり**太字にしたり**など様々な装飾ができます。例えばサーバーの道案内などで、それぞれの地域ごとに色分けすればとっても分かりやすくなりますね。

![右クリックすると何か起こる看板](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095951.png)

そして誰もが一度は作りたいと思うであろう、**「右クリックすると何か起こる看板」**。例えばPvPサーバーで試合のフィールドへテレポートするだとか、ダンジョン系のワールドで「拠点に帰る」などの仕掛けを実装する際に非常に便利ですね。

![看板のコマンドは長くて複雑](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100434.png)

しかし、装飾した看板や機能付きの看板を入手するには長い長いコマンドを作らなくてはなりません。書き方をマスターしていればすらすら書けるかもしれませんが、**JSONの記法やエスケープ記号やらを覚えておかないと思い通りの表現ができません。**(記法を勉強したい方は[赤石愛氏の詳細な解説](http://ch.nicovideo.jp/akaishi_ai/blomaga/ar857358)がおすすめです)

![便利なツールを見つけてしまいました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100321.png)

**でも安心して下さい。便利なツールがありますよ。**このツールを使えば、JSONの書き方なんて全く学ばなくともすらすらっと看板のコマンドを生成できます。

## 直感的に看板のコマンドを生成できるツール「Minecraft custom sign generator」の使い方

まず以下のリンクからツールをひらきます。

[[dl|Minecraft custom sign generator]]
|![Minecraft custom sign generator](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100326.jpg)  
|<http://minecraft.tools/en/sign.php>

### 看板の文章を”見たまま編集”して装飾できる

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111654.jpg)

サイトにアクセスしたら、まず「Sign Text」の欄を見てみてください。左上に、**まるでブログの記事編集画面のようなボタンが並んでいますね。**そう、これはいわゆる「WYSIWYG(What You See Is What You Get)」エディターなのです。**つまりツール内でもマイクラで見たかのような編集画面で直感的にデコれる**ということ。

![様々な種類の装飾ができます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111657.jpg)

色を付けるだけでなく、太字、斜体、下線、打ち消し線、そして何書いてるのか分からない文字など様々な種類の装飾ができます。

![特殊な記号も簡単に入力できます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095557.jpg)

装飾ボタン右のオメガマークをクリックすると、特殊な記号(ここではUnicode記号)が一覧で表示されます。**クリックするだけで簡単に入力できる**ので、例えば「とれーどまーく」で変換して記号を出したりする必要がなくなります。

### 看板を右クリックした際に実行するコマンドを設定するには

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095812.jpg)

**「右クリックすると何か起こる看板」**、このツールなら簡単に作れちゃいます。**文章編集欄下の「Commands…」に、実行したいコマンドを最大4つまで1行に1つづつ書いて下さい。**4つも一気に実行できるなんて知らなかった…

![看板で大きな装置を動かしたい時は](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100445.png)

4つ以上のコマンドを一気に実行したい場合は、別の場所にコマンドを入れたコマンドブロックの塊を用意して、**看板を右クリックした際にsetblockコマンドを実行して装置を動かしましょう。** setblockコマンドは`/setblock x y z redstone_block` です。

### コマンド生成→出てきたblockdata/giveコマンドの使い方

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111700.jpg)

いよいよコマンドを生成して、マイクラで看板を使うのですが、その前に看板の「アイテムとしての名前」を設定できます。**giveコマンドで入手した際に、どれがどんな看板だか区別が付かなくなる**ので入力をおすすめします。  
また、下の「PREVIEW THE SIGN」をクリックすればプレビューできます… が、日本語の場合フォントが違うのであてになりません。

![コマンドの生成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100329.jpg)

さあ、「GENERATE COMMAND」をクリックしてコマンドを生成しましょう。**2016年2月4日現在、コマンドは自動で更新されないので文章を編集する度にクリックして生成させて下さい。**

![giveコマンドはコマンドブロックで実行しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095715.png)

アイテムとして入手したい場合は、生成された「/GIVE COMMAND」をコピーしてコマンドブロックに貼り付けて使いましょう。(チャット欄には入りきらないので)

![blockdataコマンドの使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095954.png)

既に設置してある看板に文章を入れたりするには、blockdataコマンドを使います。**看板の下にコマンドブロックを置いて、生成された「/BLOCKDATA COMMAND」をコピペして実行**すれば上の看板の内容が更新されます。

### 生成したコマンドを保存できる

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100332.jpg" alt="コマンドを保存しよう")

**生成されたコマンドの下の「SAVE」をクリックすれば、コマンドを保存できます。**この際、「Minecraft tools」のアカウントを作成する必要があるので必要に応じて作りましょう。

![保存したコマンドを使おう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100335.jpg)

サイト左上の「MY ACCOUNT」をクリックすれば、保存したコマンドが表示されます。
