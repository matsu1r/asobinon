---
title: "1.13ではCustomName:\"○○\"と書くとエラーになります"
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090748.png)

Java版1.13では、ブロック、アイテム、エンティティ、ブロックエンティティに付ける**「名前」のNBTタグの文字列が、厳格なJSONテキストに変更されました。**と言われてもピンと来ないと思いますので、実際のエラー例と正解例をまとめました。

## エンティティに名前を付ける際のこれからの書き方

失敗例1: 召喚できない

**/summon villager ~ ~ ~ {CustomName:”テスト“}**

これが1.12までの標準の書き方でした。「テスト」という名前を付けるなら、CustomName:”テスト”と書いていましたよね。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104423.png)

ですが1.13でCustomName:”テスト”と書くと、**エラーになり何も召喚できません。**なぜなら**「テスト」はただの文字列**であり、JSONテキストコンポーネントではないからです。

失敗例2: 召喚できない

**/summon villager ~ ~ ~ {“CustomName”:”テスト“}**

JSONならこう書けばいいじゃないか! と思うかもしれませんが、**「NBTタグ」イコール「JSON」というわけではない**ので、これでもエラーになります。普通にJSONにしてくれよ…

正解1

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094714.png)  
**/summon villager ~ ~ ~ {CustomName:”“テスト”“}**

ということ**で1つ目の正解はこれです。**{CustomName:””テスト””}という風に、バックスラッシュで引用符をエスケープ処理してやればいいんです。“テスト”という**JSONテキストをさらに引用符の中に挟んでいる**のでこういうややこしい感じになってるんですよね。

失敗例3: 名前がつかない

**/summon villager ~ ~ ~ {CustomName:{text:”テスト”}}**

JSONテキストということは、こういう書き方もできるのでは…? おっと、これはダメですよ。**CustomName:の後の引用符を忘れています。また、textを引用符で囲むのを忘れています。** なおこれを実行すると召喚はできますが名前が付きません。

失敗例4: 召喚できない

**/summon villager ~ ~ ~ {CustomName:”{“text”:”テスト”}“}**

引用符をちゃんと付けました。これなら大丈夫… **ダメです。エスケープ処理を忘れています。**

正解2

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094714.png)  
**/summon villager ~ ~ ~ {CustomName:”{“text”:”テスト”}“}**

ということで、**これが2つ目の正解です。**引用符で囲んで、エスケープ処理をして、やっと完成です。**tellrawコマンドとかと同じ感覚で書けばいいんです。**簡単でしょ?

正解3: 装飾してみる

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102649.png)  
**/summon villager ~ ~ ~ {CustomName:”{“text”:”テスト”,“color”:”blue”}“}**

JSONテキストなので、**tellrawと同じように色を付けたりできます。****ちなみに§記号は使えないので注意。**

## アイテムに名前を付ける際のこれからの書き方

失敗例: 名前が付かない

**/give @s diamond{display:{Name:”だいや“}}**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094706.png)

今までのように{display:{Name:”だいや”}}と書くと、**名前が付きません。**これもJSONテキストが要求されるようになったからです。

**※1.13からはNBTタグを書く場所が変わってます!** アイテムIDの直後に書きます! 末尾ではありません!

正解1

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094712.png)  
**/give @s diamond{display:{Name:”“だいや”“}}**

▲エンティティの時と同様、**バックスラッシュでエスケープ処理しましょう。これで名前が付きます。**面倒くさいですがこれが新しい仕様。

正解2: 装飾してみる

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094709.png)  
**/give @s diamond{display:{Name:”{“text”:”だいや”,“color”:”red”}“}}**

エンティティの時と同様、こんな感じで装飾できます。**§記号は使えません。**

---

Java版1.13のコマンド・配布ワールド制作に関する変更点まとめ

[![113コマンド変更点まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104542.png)  
https://www.napoan.com/java-113-command-changes/](https://www.napoan.com/java-113-command-changes/)

いかがでしたか。バージョン1.13では、**こういった細かい仕様だけでなく、あらゆるコマンドの構文が変わりました。**今一度おさらいしておきましょう。
