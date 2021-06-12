---
title: 斜体にせずに様々なアイテム名を付け、さらに多言語対応する方法 – 「LocName」の使い方
---

![LocNameの使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111615.png)

バージョン1.11用のコマンド解説、第三弾。

アイテムに好きな名前を付ける際、display:{Name:”名前”}というNBTタグを付けますよね。しかしこれじゃ名前が斜体になってしまいます。そこで、**langファイルを書き換えることでアイテム名そのものを変える手法**が使われてきました。しかしこれではアイテム1種類につき1つしか斜体じゃない名前を付けられません。  
**先日配信されたMinecraftバージョン1.11では、この問題を解決する画期的なNBTタグ「LocName」が登場しました。 一種類のアイテムに、斜体じゃない名前を複数付けられ、さらに多言語に翻訳可能なのです。** この記事では、そんなLocNameタグの使い方、配布ワールド制作で使う際の活用例をご紹介します。

## 目次

- [目次](#目次)
- [1.11の新NBTタグ「LocName」とは? 従来の方法との違い](#111の新nbtタグlocnameとは-従来の方法との違い)
- [アイテムにLocNameタグを付けてみよう](#アイテムにlocnameタグを付けてみよう)
- [アイテム名設定用のlangファイルを作成しよう](#アイテム名設定用のlangファイルを作成しよう)
- [langファイルをリソースパックにして使おう](#langファイルをリソースパックにして使おう)
- [告知: コマンドをもっと極めたいなら、この本がおすすめ!](#告知-コマンドをもっと極めたいならこの本がおすすめ)

## 1.11の新NBTタグ「LocName」とは? 従来の方法との違い

![Nameタグ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092845.png)

display:{Name:”アイテム名”,Lore:\[“説明文”,”説明文”\]}という風に、displayタグを使えばアイテムに好きな名前と説明文を付けられます。しかしこれ、**アイテム名が斜体になるのが気になる**方も多いはず。

![langファイルを書き換えると](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092911.png)

リソースパックで色々弄れるようになった今、**「langファイルを書き換える」**というアイテム名変更方法も出てきました。例えばitem.chestplateDiamond.name=スーパーアーマーと書いてja\_jp.langという名前で保存しリソースパックにすれば、適用するとダイヤのチェストプレートの名前が「スーパーアーマー」に変わります。

しかしこれ、元の**アイテム名自体を変えちゃってるので1種類につき1パターンの名前しか作れない**んですよね…

そこで、バージョン1.11で追加されたLocNameタグを使ってみましょう。

![LocNameを使うと](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110756.png)

「スーパーアーマー」「ベストアーマー」「ウルトラアーマー」**全てノーマルの書体で名前を変更できていますね。**ちなみにこれは**言語設定が日本語の場合。**

じゃあ、**この状態でEnglish (US)に切り替えてみましょう。**

![英語に切り替えると](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104615.png)

「Super Armor」「Best Armor」「Ultra Armor」― 全て英語に翻訳されちゃいました。自動翻訳じゃないですよ、これもクラフターの皆さんの手で自由に書けるんです。

つまりLocNameタグを使えば、**1種類のアイテムに様々な名前を付け、さらに言語ごとに名前を切り替えることができるんです。**

## アイテムにLocNameタグを付けてみよう

それでは実際にLocNameタグを使ってみましょう。

LocNameタグを付けたダイヤのチェストプレートを入手するコマンド

**/give @p minecraft:diamond\_chestplate 1 0 {display:{LocName:”適当な英数字”}}**

LocNameはdisplayの中に書きます。**「適当な英数字」には、item.superArmorだとか分かりやすい英数字を書いておきましょう。**この文字列を後で使うので覚えておいて下さい。

![item.SuperArmor](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122007.png)

例えばitem.superArmorと入力した場合、**そのままだとアイテム名は「item.superArmor」になります。**これじゃ使えないじゃないか! …いえいえ、**名前は後から付けるんです。**

![LocNameの仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092906.png)

またまた雑パワポ図解ですが、こちらがLocNameの仕組みです。**別途でlangファイルを用意して、LocNameに設定した文字列と実際のアイテム名を結びつけ、それをリソースパックとして読み込む**ことで実際のアイテム名を表示しているんです。

![リソースパックはワールドに同梱しよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090512.png)

配布ワールドの場合、いちいちリソースパックをダウンロードしてもらって読み込んでもらうのは面倒ですから、**手順は後述しますがワールドフォルダーにリソースパックを同梱すればOKです。**

さあ、langファイル入りのリソースパックを作成していきます。

## アイテム名設定用のlangファイルを作成しよう

langファイルを作成していくのですが、もう面倒なのでいきなりワールドフォルダーの中に作っちゃいましょう。

![langフォルダーを作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105120.png)

**セーブデータフォルダーを開き**、assetsフォルダーを作成、その中にminecraftフォルダーを作成、さらにその中にlangフォルダーを作成します。

![テキスト作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092849.png)

langフォルダーを開き、Windowsの場合は右クリック→新規作成→テキスト ドキュメントで**新規テキストファイルを作成**します。  
Macの場合は[XtraFinder](http://www.trankynam.com/xtrafinder/)ってアプリを入れて(XtraFinderの)環境設定→Finderメニューに項目を追加の新規ファイル…にチェックを入れれば同様の作業でテキストファイルを作成できます。

![ja_jp.langに改名](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102744.png)

テキストファイルの名前はja\_jp.langにします。最初から.txtがない人は表示(タブ)→ファイル名拡張子にチェックを付けて。

※バージョン1.11では、**リソースパック内のファイル名を全て小文字にしないとエラーになる**仕様に変わりました。**ja\_JP.langではダメ**なんです。

![高機能なエディタ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111549.png)

この「ja\_jp.lang」を開いて編集するのですが、**メモ帳を使うと余計な「BOM」って奴が寄生するのでメモ帳は使わないで下さい。** **メモ帳代替ならTeraPad、より高機能ならSublimeText3**がおすすめです。SublimeはMacでも使えますし。

item.superArmor=スーパーアーマー
item.bestArmor=ベストアーマー
item.ultraArmor=ウルトラアーマー

ファイルの内容はこんな感じです。文字列=アイテム名 を一行に一個ずつ書いていきます。**ちなみにitem.だとか付けてるのはそれっぽくするだけのカッコつけ**なので別に英数字ならなんでも構いません。(コマンド内の文字列と合わせればいいんです)

![TeraPadでの文字コードの指定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111542.png)

TeraPadの場合は、ファイル→文字/改行コード指定保存をクリックし、**UTF-8Nを選んで保存しましょう。**“N”ってのはBOM付いてませんよって意味です。

![BOM無しを選んで保存](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091010.png)

(日本語化済みの)Sublime Text 3なら、**エンコードを指定して上書き保存→UTF-8を選びましょう。**with BOMはダメです。

他のテキストエディタの場合、例えば「秀丸エディタ」なら保存時にUTF-8を選んで、BOMを付けるのチェックを外します。「サクラエディタ」なら保存時にUTF-8を選んで、BOMのチェックを外します。

![英語版も作ろう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121516.png)

**同様にen\_us.langという名前のlangファイルを作れば英語に対応できます。**こちらも文字コードの指定にはご注意。  
ちなみに、他の言語に対応させる場合は[こちら](http://minecraft.gamepedia.com/Language)の「Locale Code」を小文字に変えてファイル名にしてください。

## langファイルをリソースパックにして使おう

![pack.mcmetaを作成](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101508.png)

langファイル達をリソースパックに封じ込めるために、御札(おふだ)が必要です。セーブデータフォルダーの中に、伝統のpack.mcmetaを作成しましょう。

{
"pack": {
"pack\_format": 3,
"description": "Write description here"
}
}

▲pack.mcmetaの中身はこれをコピペしてください。**バージョン1.11ではまたpack\_formatが更新されて3になっちゃいました。**description欄には英数字しか書けません。  
保存する際の文字コードはUTF-8(BOM無し)で大丈夫です。

![zipにする](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124011.png)

次に、assetsフォルダーとpack.mcmetaを選択して右クリック→送る→圧縮をクリックしてzipを作成します。

![resources](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101747.png)

zipの名前をresources.zipにしてEnter。**これでワールドにリソースパックが紐付けされました。**

![反映された](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092142.png)

ワールドに入り直して、アイテム名が反映されていたら作業完了です。もし反映されない場合は、**resources.zip、langファイルの名前**や**文字コード**を確認し直してzipを作り直しましょう。

あとは**様々なLocNameを持ったアイテムをコマンドで作り、langファイルを書いてリソースパックを更新して…**の繰り返しです。面倒ですが**この作業を繰り返すことで斜体のアイテム名とは完全に決別できます。**

最後までお読み頂きありがとうございました。

## 告知: コマンドをもっと極めたいなら、この本がおすすめ!

マイクラのコマンドに少しでも興味をお持ちの方々に朗報です。**コマンドをもっと学ぶのにぴったりな本**が発売されました。

みんな大好き！マインクラフト るんるんプログラミング コマンドブロック編

[![みんな大好き！マインクラフト るんるんプログラミング コマンドブロック編](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100855.jpg)  
http://www.socym.co.jp/book/1078](http://www.socym.co.jp/book/1078)

「オン・オフの信号を出し続けるクロック回路を作ろう！」「コマンドブロックでよく使うコマンド」「テレポート装置を作る」「『executeコマンド』を使って、いろいろな仕掛けを作ってみよう！」「コマンドを極めれば、こんな配布ワールドを作れる！」など、**レッドストーンの基本からコマンドの応用まで、ありとあらゆる解説が詰まった本**となっています。**応用編の「6章」は私が執筆しました。作例のワールドもダウンロードできます!**

さらにこの本では、仕掛けを作るだけでなく、**配布ワールドやサーバーとして公開する手順も解説されています。**憧れの配布ワールド作りを始めるのにもぴったりですね。  
気になった方はぜひ上のリンクからチェックしてみて下さい！
