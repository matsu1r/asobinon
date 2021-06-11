
---
title: 「Loot Table (ドロップ表)」の使い方 Part3 エラーへの対処法
description: Loot Table解説のPart3です。今回は、ドロップ表自作においてエラーが出た際の対処法を解説します。Part1およびPart3も合わせてご覧ください。
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100458.png)Loot Table解説のPart3です。今回は、ドロップ表自作においてエラーが出た際の対処法を解説します。[Part1](https://www.napoan.com/loot-table-perfect-guide-part1/)および[Part2](https://www.napoan.com/loot-table-perfect-guide-part2/)も合わせてご覧ください。

## 自作ルートテーブルのエラーを確認する手順と、各種エラーの原因

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100541.jpg)

Loot tableの書き方はマスターできましたか。**設定項目が豊富なので、色々設定していくうちにjsonが半端じゃない長さになるはずです。**私にとってはSublime Textの構文チェック機能の有り難みを改めて感じることができました…

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100453.png)

しかしテキストエディタに頼ってもミスをする時だってあります。**頑張ってルートテーブルを書いたのに、アイテムが出てこない…** そんな時は次の点を確認しましょう。

*   プレイ中にLoot tableのJSONを編集したなら → **F3+Tキーを押そう**
*   押してもアイテムが出てこない → **以下の手順でログを確認しよう**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100513.jpg)

エラーログを確認するには、マイクラを起動する前にランチャーで**「Edit Profile」**から設定画面を開きます。**「Launcher Visibility」にチェック**を入れて、**Keep the launcher open**を選んで**Save Profile**をクリックします。

### JSONの記法が間違っている場合のエラーメッセージと対処法

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100538.jpg)

するとゲーム内でルートテーブルを読み込んだ際に、エラーログがランチャーに表示されます。**… at line 26**と書かれているので、**読み込んだルートテーブルの26行目に異常がある**ということです。

[![コンマ忘れに気付いた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104556.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104556.jpg)

jsonファイルを開いて、該当する行を探すとありました。**カッコの間のコンマを忘れていました。**

[![よくやるミス](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101525.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101525.jpg)

他によくやってしまうミスとして、**「カッコ内の最後の項目にコンマを付けてしまう」**がありますね。項目を追加したけれどやっぱりいいや、と消した際にコンマを消し忘れるんですよ。

### 「Couldn’t find resource table ○○」エラーの対処法

[![ルートテーブルを指定する際のエラー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103440.jpg)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103440.jpg)

**Couldn’t find resource table ○○**というエラーが出た場合は、コマンドでルートテーブルを指定した際の、**ファイル名やフォルダーの指定が間違っていた**ということです。

[![フォルダーの構造とファイル名に注意](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103515.png)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103515.png)

セーブデータの**「data」→「loot\_tables」フォルダ内の構造とファイル名**と、ルートテーブルを指定する記述が合致しているか確認しましょう。

おさらい: Loot tableを指定するコマンドのNBTタグの書き方

*   チェスト/トラップチェスト/ホッパー/チェスト付きトロッコ/ホッパー付きトロッコの場合:  
    **{LootTable:”フォルダ名:ファイル名(.json抜き)“}**
*   Mobのドロップアイテムとして指定する場合:  
    **{DeathLootTable:”フォルダ名:ファイル名(.json抜き)“}**

※フォルダの中にさらにフォルダを作った場合は、「フォルダ:フォルダ/フォルダ/ファイル名(.json抜き)」という風に書きます。

## 参考にさせて頂いたページ様

**Loot table – Minecraft Wiki**  
[http://minecraft.gamepedia.com/Loot\_table](http://minecraft.gamepedia.com/Loot_table "Loot table – Minecraft Wiki")  
**1.9 – Custom Loot Tables – Minecraft Forum**  
[http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/command-blocks/2546347-1-9-custom-loot-tables](http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/command-blocks/2546347-1-9-custom-loot-tables "1.9 - Custom Loot Tables - Command Blocks - Redstone Discussion and Mechanisms - Minecraft Discussion - Minecraft Forum - Minecraft Forum")  
▲LootTableのJSONの記法が使用例とともに分かりやすく解説されています。Skylinerwさん、素晴らしい解説をありがとうございました!  
(その他、公式Wikiの様々なページの情報をもとに執筆しました。)
