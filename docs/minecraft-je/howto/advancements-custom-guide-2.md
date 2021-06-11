
---
title: Advancements(進捗)自作完全ガイド #2: 達成条件の組み合わせと報酬の設定
slug: /minecraft-je/howto/advancements-custom-guide-2
description: Minecraft バージョン1.12の最大の新要素「Advancements(進捗)」。前回は「タブやツリーの作成とアイコンや背景の設定」を解説しました。 第二回目となる今回は、 進捗の達成条件を決める「Require… 続きを読む Advancements(進捗)自作完全ガイド #2: 達成条件の組み合わせと報酬の設定
---

![Advancements解説2](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124412.png)

Minecraft バージョン1.12の最大の新要素**「Advancements(進捗)」**。前回は「タブやツリーの作成とアイコンや背景の設定」を解説しました。

第二回目となる今回は、

*   進捗の達成条件を決める「Requirements」とは?
*   (A && B) や (A || B) といった達成条件の組み合わせを設定するには?
*   進捗を達成した際の報酬の設定方法
*   進捗達成時にコマンドを実行するには?

といった**「達成条件と報酬の仕組み」**を解説します。**配布ワールドを自作したいなら、絶対押さえておくべき機能です。**前回と同様、JSON文書を弄ったことがない方にも分かりやすいよう解説しました。一度読んでいってくださいな。

[<< #1 タブやツリーの作成とアイコンや背景の設定](https://www.napoan.com/advancements-custom-guide-1/)

## 目次

*   [進捗の達成条件の組み合わせを指定する「Requirements」の書き方](#requirements)
*   [進捗達成時の報酬を設定する「Rewards」の書き方](#rewards)
    *   [進捗達成時にレシピをアンロックするには](#recipe)
    *   [進捗達成時にLoot Tableの戦利品を与えるには](#loot)
    *   [進捗達成時に経験値を与えるには](#exp)
    *   [進捗達成時にファンクション(複数のコマンド)を実行するには](#function)
    *   [複数の種類の報酬を同時に使えます](#mix)

## 参考にさせて頂いたページ様

**Advancements – Official Minecraft Wiki**  
[https://minecraft.gamepedia.com/Advancements](https://minecraft.gamepedia.com/Advancements)

**1.12 – Custom Advancements (AKA Achievements)**  
[http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/commands-command-blocks-and/2809368-1-12-custom-advancements-aka-achievements](http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/commands-command-blocks-and/2809368-1-12-custom-advancements-aka-achievements)

その他公式Wikiのいろいろな記事

## 進捗の達成条件の組み合わせを指定する「Requirements」の書き方

![Requirementsを解説します](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090952.jpg)

ここからは、Advancementsを構成するJSONの中の**「Requirements」**の部分の書き方を解説します。

![requirementsとは](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123101.jpg)

進捗にはそれぞれ、複数の達成条件を設定できます。**達成条件を複数書くと、通常は「全ての条件をクリアすると進捗達成」となります。**

しかし、criteriaと合わせてrequirementsを書くことで、**「条件1と2をクリアする、もしくは条件3だけクリアする」といった達成条件の組み合わせを指定できるようになります。**

{
"criteria": {
"trigger1": {
"trigger": "minecraft:cured\_zombie\_villager"
},
"trigger2": {
"trigger": "minecraft:slept\_in\_bed"
}
}
}

▲例えばこちらの進捗には、trigger1とtrigger2の2つの達成条件が設定されています。このままだと、trigger1とtrigger2の**2つの条件を両方クリアしないと**進捗達成になりません。

{
"criteria": {
"trigger1": {
"trigger": "minecraft:cured\_zombie\_villager"
},
"trigger2": {
"trigger": "minecraft:slept\_in\_bed"
}
},
 "requirements": \[
\["trigger1", "trigger2"\]
\]
}

しかし、“requirements”:[“trigger1”, “trigger2”](http://d.hatena.ne.jp/keyword/%22trigger1%22%2C%20%22trigger2%22)を追記すると、trigger1**または**trigger2をクリアするだけで進捗達成になります。論理演算子を使うとtrigger1 || trigger2ということです。**マイクラなのにプログラミングみたいで楽しいでしょ?**

{
"criteria": {
"trigger1": {
"trigger": "minecraft:cured\_zombie\_villager"
},
"trigger2": {
"trigger": "minecraft:slept\_in\_bed"
}
},
 "requirements": \[
\["trigger1"\], \["trigger2"\]
\]
}

“requirements”: \[\[“trigger1”\], \[“trigger2”\]\]と書くと、trigger1とtrigger2を両方クリアしないと進捗達成になりません。しかし**「全ての条件をクリアすれば進捗達成」がデフォルトの動作なので、これをわざわざ書く必要はありません。**

{
"criteria": {
"trigger1": {
"trigger": "minecraft:cured\_zombie\_villager"
},
"trigger2": {
"trigger": "minecraft:slept\_in\_bed"
},
"trigger2": {
"trigger": "minecraft:slept\_in\_bed"
}
},
 "requirements": \[
\["trigger1"\],
\["trigger2", "trigger3"\]
\]
}

この場合はどうでしょう? 1つめの四角括弧にはtrigger1だけ書かれていて、2つめの四角括弧にはtrigger2とtrigger3が書かれています。

答えは「trigger1をクリアして**なおかつ**、trigger2**または**trigger3をクリアすれば進捗達成」なんです。論理演算子を使うとtrigger1 && (trigger2 || trigger3)というわけです。**面白いでしょ?**

{
"criteria": {
"trigger1": {
"trigger": "minecraft:cured\_zombie\_villager"
},
"trigger2": {
"trigger": "minecraft:slept\_in\_bed"
},
"trigger2": {
"trigger": "minecraft:slept\_in\_bed"
}
},
 "requirements": \[
\["trigger1", "trigger2", "trigger3"\]
\]
}

ちなみに▲の場合はtrigger1**または**trigger2**または**trigger3をクリアすれば進捗達成です。

これで解決! Requirementsの書き方

*   \[“A”\], \[“B”\] → A && B
*   \[“A”, “B”\] → A || B
*   \[“A”\], \[“B”, “C”\] → A && (B || C)
*   \[“A”, “B”, “C”\] → A || B || C

## 進捗達成時の報酬を設定する「Rewards」の書き方

![rewardsの解説します](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104905.jpg)

ここからは、進捗を達成した時の報酬を設定する「Rewards」を解説します。

![rewardsの種類](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123638.jpg)

進捗達成の報酬には**「レシピのアンロック」「経験値の付与」「戦利品の付与」「ファンクションの実行」**の4種類があります。「戦利品の付与」にはLootTableのJSONファイルが、「ファンクションの実行」にはファンクションのJSONファイルが必要です。

以下、4種類の報酬の設定方法を解説します。**それぞれの報酬は組み合わせて使うこともできます。**

### 進捗達成時にレシピをアンロックするには

{
"criteria": {
"joken1": {
"trigger": "minecraft:used\_ender\_eye"
}
},
 "rewards": {
"recipes": \["minecraft:jukebox", "minecraft:noteblock"\]
}
}

“recipes”: \[“ID”, “ID”,”ID”…\]と書くことで、進捗達成時に**指定したIDのアイテムのレシピがレシピブックに表示されるように**なります。

{
"criteria": {
"joken1": {
"trigger": "minecraft:used\_ender\_eye"
}
},
 "rewards": {
"recipes": \["minecraft:compass"\]
}
}

ちなみにIDを1つだけ指定するならこう書きます。

### 進捗達成時にLoot Tableの戦利品を与えるには

{
"criteria": {
"joken1": {
"trigger": "minecraft:used\_ender\_eye"
}
},
 "rewards": {
"loot": \["minecraft:entities/zombie", "minecraft:chests/nether\_bridge"\]
}
}

“loot”: \[“名前空間:LootTableへのパス”, “名前空間:LootTableへのパス”\]と書くことで、進捗達成時に**指定したLootTableのアイテムを与える**ことが出来ます。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093220.png)

ちなみに上記の進捗を達成すると、ゾンビのドロップアイテムと、ネザー要塞のチェストの中身がもらえます。

{
"criteria": {
"joken1": {
"trigger": "minecraft:used\_ender\_eye"
}
},
 "rewards": {
"loot": \["napoan:chest/test1"\]
}
}

自作のLootTableを指定することも出来ます。例えばワールド/data/loot\_tables/napoan/chestにtest1.jsonという名前でLoottableのJSONファイルが置いてある場合は“loot”: \[“napoan:chest/test1”\]と書きます。

Loot table(ドロップ表)の呼び出し方/JSONの書き方完全ガイド

[![LootTable(ドロップ表)完全ガイド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123329.png)  
https://www.napoan.com/loot-table-perfect-guide/](https://www.napoan.com/loot-table-perfect-guide/)

**LootTableについて詳しく知りたい方、自作したい方はこちらの記事をお読み下さい。**おそらくコマンド解説カテゴリでこのブログ最長の記事です。

### 進捗達成時に経験値を与えるには

{
"criteria": {
"joken1": {
"trigger": "minecraft:used\_ender\_eye"
}
},
 "rewards": {
"experience": 810
}
}

進捗を達成した時に、シンプルに経験値を与えることもできます。“experience”: 経験値の量と書くだけです。

### 進捗達成時にファンクション(複数のコマンド)を実行するには

{
"criteria": {
"joken1": {
"trigger": "minecraft:used\_ender\_eye"
}
},
 "rewards": {
"function": "napoan:challenges/test1"
}
}

これが一番配布ワールド制作に役立つ機能です。進捗達成時に、ファンクションを実行できるんです。“function”:”名前空間:ファンクションファイルへのパス”を書くだけです。**複数のファンクションを指定することはできない**のでご注意下さい。

「ファンクション」システムの解説

[![function解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122759.png)  
https://www.napoan.com/pc-112-functions-guide/](https://www.napoan.com/pc-112-functions-guide/)

ファンクションの作成についてはこちらの記事をお読みください。可能性が無限大な素晴らしい機能です。

### 複数の種類の報酬を同時に使えます

{
"criteria": {
"joken1": {
"trigger": "minecraft:used\_ender\_eye"
}
},
 "rewards": {
"recipes": \["minecraft:map", "minecraft:noteblock"\],
"loot": \["minecraft:entities/skeleton", "napoan:boss/boss1"\],
"experience": 1000,
"function": "napoan:challenges/test1"
}
}

「レシピのアンロック」「戦利品」「経験値」「ファンクションの実行」の**4種類の報酬は、同時に使うことができます。**めちゃくちゃ報酬が豪華な進捗を作ってみましょう!

{
"criteria": {
"joken1": {
"trigger": "minecraft:minecraft:bred\_animals"
},
"joken2": {
"trigger": "minecraft:player\_killed\_entity"
},
"joken3": {
"trigger": "minecraft:used\_ender\_eye"
},
},
"requirements": \[
\["joken1"\],
\["joken2", "joken3"\]
\],
"rewards": {
"recipes": \["minecraft:map", "minecraft:noteblock"\],
"loot": \["minecraft:entities/skeleton", "napoan:boss/boss1"\],
"experience": 1000,
"function": "napoan:challenges/test1"
}
}

“requirements”も使うとこんな感じです。こちらの場合は「動物を繁殖させて、なおかつエンティティをキルするかエンダーアイを使うと、地図と音符ブロックのレシピがアンロックされ、スケルトンと自作ボスの戦利品を入手し、1000経験値がたまり、自作のファンクション「test1」が実行される」というものです。色々組み合わせると楽しいでしょ。

## 次回予告

![次回は3](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103541.jpg)

次回の#3では、進捗達成条件として使える**トリガーの種類と、それぞれの使い方**を解説する予定です。お楽しみに。
