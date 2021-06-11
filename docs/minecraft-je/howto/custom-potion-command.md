---
title: 1.9でポーションの入手コマンドが変わる! 効果を組み合わせる方法や種類を指定するNBTタグを解説
---

[![ポーション入手コマンドが変わる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208152855.png)](#a/2/a23ea1e8.png "ポーション入手コマンドが変わる")

**配布ワールド制作者の皆さん、バージョン1.9から、ポーションを入手するコマンドが大きく変わることはご存じですか?** ツールを使って、**好きな効果を組み合わせたオリジナルのポーションを簡単に作る方法**を解説します。と同時に、バージョン1.9で変わる**ポーションのダメージ値やNBTタグについて詳しく解説**します。

\[2016年3月6日追記\] コメント等でご指摘を頂き、Potionタグでポーションの見た目を設定する際の仕様について訂正しました。間違った記述を放置してしまい申し訳ありませんでした。

バージョン1.9の、コマンドや配布ワールド作成に関する新機能/変更点まとめ

[![1.9のコマンド関連まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122409.png)  
https://www.napoan.com/pcversion19-command-guide/](https://www.napoan.com/pcversion19-command-guide/)  
▲バージョン1.9はコマンドに関する新要素/仕様変更が盛り沢山。

## 目次

*   [好きな効果を組み合わせた、オリジナルポーションのコマンドを解説](#custom)
*   [バージョン1.9で変わった、ポーションの新しい入手コマンドを解説](#on1.9)

## 好きな効果を組み合わせた、オリジナルポーションのコマンドを解説

![オリジナルポーションを作ってみよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208163005.png)

**即時回復Ⅲ、再生Ⅲを10秒、レジスタンスⅢを30秒…** こんな風に、好きな効果を組み合わせた、オリジナルのポーションをコマンドで作ってみましょう。配布ワールドを制作している方ならご存知だと思いますが、**「CustomPotionEffects」機能で好きな効果と時間をいくつも設定したポーションを作成できる**んです。

オリジナルポーションのコマンドの一例(1.7~1.8でしか使えません)

**/give @p minecraft:potion 1 8197 {display:{Name:”魔改造☆回復ポーション”},CustomPotionEffects:\[{Id:6,Amplifier:2,Duration:20},{Id:10,Amplifier:2,Duration:200},{Id:11,Amplifier:2,Duration:600}\]}**

▲ですがこちらをご覧ください。オリジナルポーションを入手するコマンドなのですが、**効果を設定する部分が長く、打つのが面倒くさそうです。**そこで、**簡単にコマンドを生成できる例のツールを使いましょう。**

毎度お世話になっているコマンド生成ツール「MCStacker」

[![毎度お世話になっているMCStacker](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144931.jpg)  
http://mcstacker.bimbimma.com/](http://mcstacker.bimbimma.com/)

うちのコマンド解説記事では度々登場している、**高機能コマンド生成ツール「MCStacker」**。詳しい使い方は[こちらの記事](/42534067/)で解説済みですが、今回はカスタムポーションのgiveコマンドをこのツールで作ります。

![ポーションの見た目を決めよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131722.jpg)

**「Command type:」をgive**コマンドモードに切り替えて、Player Nameに面倒なのでとりあえず**「@p」**と入力。「Item:」に「poti」まで打てば色々なポーションが出てきますが、実はここでオリジナルポーションの見た目を決めているんです。**例えばここでPoisonを選んだからって、後で効果を設定すれば毒は消えます。**  
→\[2016年3月6日追記\]バージョン1.9では、**ここで選んだポーションの効果も残る**ようです。コメント等でのご指摘ありがとうございました。

 table img.potionsprite{max-width:32768px!important;width:1043px;height:32px;position:absolute;margin:0px!important}

作りたいポーションの色

選択するアイテム名

青いポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Water bottle, Awkward Potion, Thick Potion, Mundane Potion

水色のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Swiftness Potion

紺色のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Night Vision Potion

ピンクのポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Regeneration Potion

赤いポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Healing Potion

濃い赤色のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Strength Potion

どす黒い赤色のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Harming Potion

黄色いポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Fire Resistance Potion

黄緑色のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Leaping Potion

抹茶色のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Poison Potion

濃い灰色(若干緑)のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Weakness Potion

薄い灰色のポーション

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208165054.png)

Slowness Potion

![効果の内容を設定しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133728.jpg)

いよいよ効果を設定します。**「Status Effects」にチェックを入れると全ポーション効果の一覧が出てくる**ので、付けたい効果にチェックを入れてレベルと時間を設定しましょう。**「Amprifier」が効果の強さのこと**で、ここに**入れた値に1プラスされたレベルの強さになります。**

![効果の内容を隠したい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208125521.png)

このままだと、ポーションの説明文の下に効果が一覧表示されます。**効果を隠したい時は「Hide Flags」にチェック**しましょう。この「ひでフラグ」機能の正しい使い方は前に[こちらの記事](/43851879/)で解説しましたね。

## バージョン1.9で変わった、ポーションの新しい入手コマンドを解説

[![先ほどのコマンドが使えません](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150437.png)](#8/9/89c9988a.png "先ほどのコマンドが使えません")

先ほどのオリジナルポーションのコマンドを、現在SnapShotがリリースされている**バージョン1.9で使ってみるとうまく動きません。**ポーションの見た目を設定すると該当するアイテムが無い状態になります。実は、Snapshot15w31aにて**ポーションの仕様が変わり、従来の方法ではポーションをコマンドで入手できなくなってしまったのです。**ではどうすればいいんでしょうか。  
(1.9のSnapshotを遊ぶ方法については[この前のフルトン回収の記事](/mgs-fulton-command-by-dragnoz/)をご覧ください)

![水入り瓶を選ぼう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131748.jpg)

1.9に対応させるために、**まずはアイテムの種類を「Water Bottle」、つまり水入り瓶に切り替えましょう。**ポーションの見た目が変わっちゃいそうですが、1.9では**そもそもポーションの種類を指定する方法が変わった**のでこれで大丈夫なんです。見た目はあとから決めますから。

![ポーションの見た目を決めましょう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208160324.jpg)

そしてバージョン1.9向けに「Potion ID」という設定項目が用意されています。バージョン1.9でポーションを入手するためには、**こちらでポーションの種類を設定する**んです。**これまで各ポーションはダメージ値で指定されていましたが、これからは「Potion:」というNBTタグで種類が指定されるんです!**

![スプラッシュポーションは別アイテム扱いに](https://www.napoan.com/wp-content/uploads/imgs/3/1/31cc0092.jpg)

「あれ? スプラッシュポーションは消えたの?」 心配ありません、スプラッシュポーションも健在です。「Potion ID」欄にはスプラッシュの選択肢はありませんが、**上のアイテム選択欄に「(1.9) Splash Potion」として残っています。スプラッシュポーションに「minecraft:splash\_potion」というIDが与えられた**んです。

バージョン1.9からの新しいポーション入手コマンドの書き方

**/give @p minecraft:potion <個数> 0 {Potion:”新しいポーションID”}**  
スプラッシュポーションの場合:  
**/give @p minecraft:splash\_potion <個数> 0 {Potion:”新しいポーションID”}**

▲バージョン1.9からの新しいポーションを入手するコマンドです。今までは、**「/give @p minecraft:potion 個数 8198」**などと**「ダメージ値」**を書いて種類を指定していましたが、**代わりに「{Potion:”ポーションID”}」と書いて種類を指定するようになりました。**



バージョン1.9からの「Potion:」タグに入れるポーションID一覧  
(スプラッシュポーションの場合もIDは同じ)

ポーションの種類

通常

レベルⅡ(強力バージョン)

効果時間延長バージョン

水入り瓶

water

?

?

ありふれたポーション

mundane

?

?

濃厚なポーション

thick

?

?

奇妙なポーション

awkward

?

?

暗視のポーション

night\_vision

?

long\_night\_vision

透明化のポーション

invisibility

?

long\_invisibility

跳躍のポーション

leaping

strong\_leaping

long\_leaping

耐火のポーション

fire\_resistance

?

long\_fire\_resistance

俊敏のポーション

swiftness

strong\_swiftness

long\_swiftness

鈍化のポーション

slowness

?

long\_slowness

水中呼吸のポーション

water\_breathing

?

long\_water\_breathing

治癒のポーション

healing

strong\_healing

?

負傷のポーション

harming

strong\_harming

?

毒のポーション

poison

strong\_poison

long\_poison

再生のポーション

regeneration

strong\_regeneration

long\_regeneration

力のポーション

strength

strong\_strength

long\_strength

弱化のポーション

weakness

?

long\_weakness

この表は、公式Wikiの[こちらのページ](http://minecraft.gamepedia.com/Potion)の表を翻訳したものです。  
「healing」と「harming」を間違えないようご注意! 真逆の効果です。

例えば、**治癒のポーションの見た目**で中身は**ダメージを与える**場合、  
**/give @p minecraft:potion 1 0 {CustomPotionEffects:\[{Id:7,Amplifier:2,Duration:20}\],Potion:”minecraft:healing“}**となります。「Potion」タグで見た目を、「CustomPotionEffects」タグで実際の効果を設定するのです。

\[2016年3月6日追記\] バージョン1.9現在、**「Potion」タグで指定したポーションの効果も一緒に付く**仕様のようです。誤った記述を放置してしまい申し訳ありませんでした。

![いかがでしたか](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144351.png)

いかがでしたか。1.9ではコマンドの変更点が色々あるんです。  
**「これはどうするの?」**などコメント待ってます。

最近書いたコマンド解説記事

*   [Dragnoz氏制作、**MGSVのフルトン回収を再現**してみた](/mgs-fulton-command-by-dragnoz/) _**New!!**_
*   [PvP作成に! **チームのキル数を合計して表示**する方法](/splatoon-trap-command-part1/)
*   [**Splatoon風トラップ**の作り方 – チーム戦に対応してます](/splatoon-trap-command-part1/)
*   [**空中浮遊PvP**の作り方/オフハンドのアイテムを判定する方法~](/45837670/)
