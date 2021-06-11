
---
title: 配布ワールド制作を変える。Advancements(進捗)自作完全ガイド #0 ～プロローグ～
description: Minecraft バージョン1.12の最大の新要素、これまでの「実績」に代わる「Advancements(進捗)」。実績と同じように、ゲームを進めて目標を達成していく… のですが、大きく進化した点があります。
 それは、Advancementsを自分で自由に作れるという点です。編集するだけではありません。いくらでも追加でき、自分だけの進捗タブやツリーを作って、自分だけのクリア条件、自分だけのクリア報酬を設定できるのです。
 1.12の「ファンクション」システムと組み合わせれば、配布ワールド制作に大いに役立つでしょう。Advancementsの自作は非常に奥が深いので、記事は複数に分けて投稿します。#0の今回は、そもそもAdvancementsってどんなシステム? 配布ワールド制作にどう役立つの? という皆さんの疑問を解決します。
---

!\[Advancementsプロローグ\](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111137.png) Minecraft バージョン1.12の最大の新要素、これまでの「実績」に代わる\*\*「Advancements(進捗)」\*\*。実績と同じように、ゲームを進めて目標を達成していく… のですが、\*\*大きく進化した点があります。 それは、Advancementsを自分で自由に作れるという点です。\*\*編集するだけではありません。\*\*いくらでも追加でき、自分だけの進捗タブやツリーを作って、自分だけのクリア条件、自分だけのクリア報酬を設定できるのです。\*\* 1.12の「ファンクション」システムと組み合わせれば、配布ワールド制作に大いに役立つでしょう。 Advancementsの自作は非常に奥が深いので、記事は\*\*複数に分けて投稿します\*\*。#0の今回は、 \*\*そもそもAdvancementsってどんなシステム?配布ワールド制作にどう役立つの?という皆さんの疑問を解決します。\*\* \[#1 タブやツリーの作成と表示設定\](next.napoan.com/advancements-custom-guide-1)

※この記事の内容は「1.12-pre4」に準拠しています。今後仕様が変わる可能性もありますのでご注意下さい。

## そもそもAdvancementsってどんなシステム? 何ができるの?

![とは](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105441.jpg)

バージョン1.12の新要素、**「Advancements(進捗、進歩)」**とはどんなシステムなんでしょうか。

### 実績と違ってタブで分かれており、途中から解除もできる

![場所はどこ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123050.jpg)

1.12(のSnapShot)でゲームメニューを開くと、**これまで実績があった場所に「Advancements」があります。**クリックしてみましょう。

![なんもない](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122304.jpg)

**何もありません。**「実績」の場合はやるべき事が書かれていたのに…どうすればいいんでしょう?

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123429.jpg)

とりあえず木を伐って作業台を作ってみて下さい。すると進捗の画面が更新され、**「Minecraft」という名前の進捗**を解除できます。

![Adventure達成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103623.jpg)

エンティティ(Mobなどのブロックじゃない物体のこと)を倒したり、倒されたりしてみましょう。すると進捗画面に「Adventure」というタブが追加され、同時に「Adventure」という進捗が解除できます。  
**進捗はカテゴリごとに分類されており、それぞれのタブの最初の進捗の名前はタブ名と共通なのです。**

![途中からでも](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090705.jpg)

Advancementsの特徴は、タブに分かれていることだけではありません。実績と違って、**“前の進捗”を無視して途中からでも解除可能**なのです。

![いきなり解除](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090326.jpg)

例えば、**運良く宝箱からいきなりダイヤの装備品を入手した**とします。するとAdventureタブの「Cover Me With Diamonds」が、**前の進捗をガン無視して解除可能なんです!**  
しかもこれ、**解除する進捗のタブが表示されていない状態でもいきなり解除可能なんです。**実績は順番が正直面倒臭かったですからね。嬉しい!

### 自作すればこんなことができる!

![こいつら全部](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124121.jpg)

**そして進捗システムの最大の特徴…それは全てがJSON文書でできているという点です!** つまりは**自分で自由に編集し、追加できるということ!** これからの配布ワールド作成に大きく関わるシステムなんです。

![こんな感じで自作](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101626.jpg)

例えばこんな感じで、**新しいタブを追加し、その中にオリジナルの”進捗ツリー”を構築できる**んです。**背景やアイコン、それぞれの進捗のタイプや名前などを何でも自由に設定可能。**ワクワクするでしょ?

![トリガーたち](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123750.jpg)

カスタマイズできるのは見た目だけではありません。**それぞれの進捗を解除する色々な「トリガー(trigger)」を選んで設定できます。**一つの進捗に複数のトリガーを設定することも可能。

![コンディションたち](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102629.jpg)

トリガーには、それぞれ複数の**「コンディション(conditions)」**を設定できます。例えばトリガーが「placed\_block(ブロックを置いた)」なら、「どのブロックを置いたのか」の**条件を設定するのがコンディションです。**[LootTableの書き方](https://www.napoan.com/loot-table-perfect-guide/)を知っている方ならすんなり分かる仕組みですね。

### リワード(報酬)としてコマンドを実行できる→コマンドブロックの代わりになる!

![リワードとは](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122528.jpg)

**進捗を自作してもおまけ要素になるだけだよね?** ― いえいえ、**進捗システムはワールド制作における革命です。**  
なぜなら、**進捗を達成した報酬として”複数のコマンドを実行”できてしまうのです! **つまりコマンドブロックの塊をJSONファイルに置き換えられるということ!****

![ゾンビを爆発で倒すと](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110117.jpg)

例えばこちらのJSON文書は、**「ゾンビを爆発で倒す」進捗**を設定したものです。リワードに「ダイヤをgiveする」「この進捗を非達成状態にする」コマンドを書いた**ファンクションのテキストファイルの場所を指定**しているので、**ゾンビを爆発で倒す度にダイヤモンドが与えられる**わけです。配布ワールドに使えそうでしょ?

「ファンクション」システムの解説

[![function解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122759.png)  
https://next.napoan.com/pc-112-functions-guide/](https://next.napoan.com/pc-112-functions-guide/)

![これから解説していきます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101248.jpg)

ということで、この「Advancements(進捗)の自作完全ガイド」シリーズの記事では**「配布ワールド制作に役立つ」**Advancementsの作り方を解説していきます。次回は自作の基本、**書くためのツールや保存場所、タブとツリーの作り方**を解説します。

[#1 タブやツリーの作成と表示設定 >>](https://exr-nap.sakura.ne.jp/www.napoan.com/advancements-custom-guide-1/)
