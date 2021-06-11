
---
title: 1.8のシングルでもWorldEditの機能を。ワールド製作者は必須! 「Map Making Tools」
description: 配布ワールド製作者は必須の「World Edit」。しかし、シングルプレイ用の「WorldEdit Wrapper」はバージョン1.8に対応していません。1.8でも、シングルプレイでWorldEditのような機能を使いたい…今回紹介するのは、ProPercivalalbさん制作の「Map Making Tools」。ワールド間の地形コピーや、スポナーのカスタマイズなど、WorldEditには無い機能もあります。 魅力的な新コマンドのある1.8の環境で、より効率的にワールドを作成しましょう。
---

[![MapMakingTools](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144307.png)](#7/6/76b42bfa.png "MapMakingTools")

配布ワールド製作者は必須の**「World Edit」**。しかし、シングルプレイ用の**「WorldEdit Wrapper」はバージョン1.8に対応していません。****1.8でも、シングルプレイでWorldEditのような機能を使いたい…**  
今回紹介するのは、ProPercivalalbさん制作の**「Map Making Tools」**。  
**ワールド間の地形コピーや、IDの入力補助など、WorldEditには無い機能もあります。**  
魅力的な新コマンドのある1.8の環境で、**より効率的にワールドを作成しましょう。**

## 目次

*   [選択範囲が見える! 一括破壊/壁や床を設置する機能](#worldedit)
*   [建物や地形を、ワールドをまたいでコピー/貼り付けできる](#copy)
*   [アイテムの名前/エンチャント効果などをカスタマイズ](#item)
*   [プレイヤーの巨大人形を自動で作ってくれる!](#statue)
*   [地味に便利! アイテムやブロックのIDを簡単に入力](#id-input)
*   [「Map Making Tools」の導入方法](#inst)

b.command{font-size: 1.05em;font-weight: bold;display: inline-block;margin: 2px;padding: 3px;border-radius: 3px;font-weight: bold;color: rgb(0, 0, 0);background: #DBDBDB;}

## 選択範囲が見える! 一括破壊/壁や床を設置する機能

[![いでよ! QuickBuildAxe](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134747.png)](#4/4/4451e3fc.png "いでよ! QuickBuildAxe")

今私が手にしているオノ、ただのオノではありません。**「Quick Build Axe」**といって、このMODのカギとなるアイテムです。もう少し分かりやすく言いますと、**WorldEditっぽい機能を備えた魔法の道具です。**

[![範囲選択だ!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142835.png)](#6/a/6a4c49b2.png "範囲選択だ!")

まず、エディットする範囲を選択しなければいけませんね。**左クリックと右クリックをして、なんとか範囲を選んで下さい。** …これがまた曲者で、**本家WEのようにすんなり選択できません。予期せぬ範囲が勝手に選ばれてしまうんです。**

[![一括設置だ!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132439.png)](#2/9/2924c676.png "一括設置だ!")

それでは、選択した範囲にブロックを設置してみましょう。**//set <ブロックID> <データ値>**のコマンドで一括設置できます。**上図の場合、マツの木材なので「planks 1」となります。**

[![壁を設置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133706.png)](#3/a/3a4aa3d5.png "壁を設置")

選択した範囲に**壁を設置**したい場合は、**//wall <ブロックID> <データ値>**と打ちます。この時、選択範囲の内側に壁が設置されるので注意して下さい。

[![天井と床を設置](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162653.png)](#d/b/dba5de07.png "天井と床を設置")

オリジナル機能じゃないでしょうか。なんと**選択範囲の天井と床を簡単に設置できるんです。**  
天井は**//roof <ブロックID> <データ値>**で、床は**//floor <ブロックID> <データ値>**で設置できます。

[![でーれーデカイ範囲を扱えた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208143251.png)](#6/d/6d9455b8.png "でーれーデカイ範囲を扱えた")

32912! **fillコマンドで扱える限界のブロック数を超えています。**それでも一瞬で破壊出来ました。これなら、見渡すかぎりの範囲を選択しても楽々整地できますね。  
そうそう、**選択解除したい場合は//clearpointsと打ちます。**これさっき知りました。

## 建物や地形を、ワールドをまたいでコピー/貼り付けできる

このMODの革新的な機能、それは**地形や建物をワールドをまたいでコピーできるという機能です。**  
同じ環境(Profile)でワールドを開けば、何でも自由にコピペできます。**バイバイMCEdit。**

[![ワールド間コピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133146.png)](#2/f/2fdb61a5.png "ワールド間コピー")

**コピーしたい部分を選択した状態で、その上に乗って**以下のコマンドを実行します。  
**//worldtransfer copy <名前>**  
▲**「<名前>」**は、後で貼付けする時に使いますから覚えておいて下さい。

[![ワールド間貼り付け](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208125951.png)](#0/f/0ff6c263.png "ワールド間貼り付け")

貼り付けしたいワールドに入って、以下のコマンドを実行します。  
**//worldtransfer paste <名前>**  
**▲コピー時に設定した「名前」を指定して下さい。**この時、**コピー時の位置関係が引き継がれますから、上に乗ってコピーした場合は貼り付け時に自分の下にペーストされる**わけです。WorldEditと同じ感覚ですね。

チャットログを見る限りでは、どうやらシングルプレイのワールドからサーバーに貼り付けることも可能なようです。

[![普通にコピペもできます](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144440.png)](#7/8/786220c9.png "普通にコピペもできます")

こんな面倒な手順を踏まなくても、**ワールド内であればWEのように**//copy**と**//paste**でコピペできます。**//worldtransferは特別な手段として覚えておいて下さい。

## アイテムの名前/エンチャント効果などをカスタマイズ

このMOD、ただのWorldEditの代わりではありません。**配布ワールド制作にとっても嬉しい便利機能が沢山搭載されているんです。**その中の1つ、**アイテムのカスタマイズ機能**をご紹介します。  
[![アイテムの
カスタマイズ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208083232.png)](#3/0/3064d0bf.png "アイテムのカスタマイズ")

**アイテムをマウスオーバーしてMキーを押します。**するとアイテムの設定画面が開きます。**「Display Name」の欄では、アイテム名を好きに弄れます。**金床の名付けと違って、斜体にならない名前です。

[![石にエンチャント効果を付けてみた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145307.png)](#7/f/7fd0b2f4.png "石にエンチャント効果を付けてみた")

左側の**「Enchantments」**ボタンを押すと、エンチャント効果の設定画面が開きます。**石にノックバックや攻撃力上昇を付けてみたのですが、ちゃんと効果出るんですね。**というかレベル10まではギリシャ数字になるんだ。

## プレイヤーの巨大人形を自動で作ってくれる!

[![16x33x16の範囲を選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208155326.png)](#b/9/b9a0ec4f.png "16x33x16の範囲を選択")

皆さん、**いきなりですが上記の範囲を選択して下さい。横16×16、高さは33ブロックです。**  
いいですね? **きっちりと16x33x16、合計8448ブロックを選択しましたか?**  
その状態で、以下のコマンドを打って下さい。  
**//playerstatue painapoandy2 south**

・  
・  
・

[![巨大降臨](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131338.png)](#1/d/1d34dd28.png "巨大降臨")

ドーン! ドドドーン! デデーン!  
はい、なんと**巨大像が突如出現しました。**周りの建築物を破壊しちゃったらごめんなさい。  
実は**この「//playerstatue」機能を使えば、プレイヤーの人形を一瞬で建ててくれるんです。**

[![謎のセンス](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153142.png)](#a/4/a40a1ff0.png "謎のセンス")

勝手に[砂利馬氏](https://twitter.com/RavenTofu)の人形を建ててみましたが、なんでしょうこの素材…  
グーグルの人工知能が加工した画像みたいになっちゃいました。音符ブロックって…

## 地味に便利! アイテムやブロックのIDを簡単に入力

[![ID自動入力機能](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133900.png)](#3/c/3c8d9c1e.png "ID自動入力機能")

ちょっと記事が長くなってしまったので、最後に大事な機能を書き留めておきます。  
コマンドの入力中にShiftキーを押せば、画面上にズラーっとアイテム一覧が表示されます。**右クリックすれば、その場でチャット欄にIDが入力されるんです。**  
**ブロックやアイテムの名前が分からなくても、直感的に入力できる**ので結構便利です。

## 「Map Making Tools」の導入方法

[**#StopModReposts**  
そのダウンロード場所、本物ですか。MODは必ず正規の場所からダウンロードしましょう。](https://www.napoan.com/stop-mod-reposts/)

### 導入方法

このMODは**1.8のForge**用のMODです!

1.  **Forgeを導入**  
    **[こちら](/new-way-to-install-mod/#forge-inst)**の記事を参考にしてください
2.  **「MapMakingTools」をダウンロード**  
    **[こちら](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1287188-map-making-tools-quick-build-system-autobuilding "「MapMakingTools」のダウンロード")**からダウンロードして下さい。
3.  **modsフォルダにブチ込む** 
4.  **紹介しきれなかった色々な機能を、是非あなたの手で見つけて活用して下さい。**
