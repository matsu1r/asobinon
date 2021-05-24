---
title: 「アイテムID」「ブロックID」
---

giveコマンドでアイテムを入手したり、setblockコマンドでブロックを設置したりする時に**アイテム/ブロックの種類を指定する文字列がID**。アイテムを指定するIDは「アイテムID」と呼ばれ、ブロックを指定するIDは「ブロックID」と呼ばれる。例えば「ダイヤモンドの剣」のIDはdiamond\_sword。**PC版ではminecraft:を付けるのが正確だが、BEではminecraft:を付けるとエラーになるので注意!**

![アイテムIDとブロックID](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112722.png)

ブロックを指定する場合は、giveコマンド中に書くと「アイテムID」だし、setblockコマンド中に書くと「ブロックID」である。**アイテムの「アイテムID」「ブロックID」が異なることは絶対にない。**あくまで分かりやすくするために「ブロックID」や「アイテムID」と呼ばれるだけである。

**BEではかつての数字形式のIDは一切使えず、全て文字列を書く必要があるので注意。**  
例: 1→\`stone\`、100→\`red\_mushroom\_block\`、276→\`diamond\_sword\`

[[dl|IDを簡単に検索できるサイト]]
|<http://minecraft-ids.grahamedgecombe.com/>

上記サイトを使えば、アイテム/ブロック名から簡単にIDが調べられる。**ただしBEでは`minecraft:`を抜いた形で書く必要があるので注意。**