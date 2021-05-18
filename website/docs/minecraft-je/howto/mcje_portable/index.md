---
sidebar_position: 0
slug: /minecraft-je/howto/mcje_portable/
---
# Minecraft JEをUSBメモリ等に入れて持ち運ぶ方法の備忘録と私が気を配ってた点

:::info
この記事は編集中です。
:::

## はじめに

私が中学生の時、学校のパソコンでやるためにUSBメモリにマイクラを入れて持ち運んでいました。当時そこら辺の知識がいい感じにまとまってるサイトがなかった気がするので今更書きます。

…考えてみるとそれをやり始めたときから既に4年以上経っているんですね、感慨深いものがあります。

***

まず先に言っておきますが、この方法は**Windows限定**です。Mac,Linuxユーザーの方は申し訳ありません。

それから、「Minecraft USB 持ち運ぶ」で検索すると、「set APPDATA=…」みたいなバッチファイルを作る、と書いてあるサイトが多いのですが、**set APPDATAが通用するのはMinecraft 1.5.2以前のランチャーだけ**です。私はこのことを知らず、かなり時間を浪費しました。

作業内容をミスるとマジでデータが消えかねないので注意して作業したほうが良いと思います。自己責任でお願いします。

***

## 方法の概要

### Step1 Minecraftのランチャーを入手する

Minecraft Launcherの実行ファイル、ランチャーの本体です。

- お手持ちのPCにMinecraftがインストールされている場合は、インストール先(デフォルトでは`C:\Program Files (x86)\Minecraft Launcher`)にあるMinecraftLauncher.exeをコピーして、
- または[公式ダウンロードページ](https://www.minecraft.net/ja-jp/download/alternative)から「Minecraft.exe」(内容は上のMinecraftLauncher.exeと全く同じ)をダウンロードして(下図参照)、

![Launcher_Download](https://firebasestorage.googleapis.com/v0/b/markdown-gaming.appspot.com/o/images%2Fuserupload%2FVtjimroDpNTowXhTh56Gbh5CAr63%2F9c912c77-818c-4317-ac86-e8cdbc4dd470.png?alt=media&token=0d35ae30-eeff-4071-bfe3-40e45b4b9f31)

インストールしたい場所(ここではUSBメモリの中のフォルダ `X:\Minecraft\`とします)に突っ込みます。

### Step2 起動用バッチファイルを作る

先程突っ込んだランチャーは、普通にダブルクリックすると予め設定された場所(後述)にデータを保存しようとします。なので、バッチファイルというものを使ってその保存場所をUSBメモリ内に変えてやる必要があります。

メモ帳でも何でも良いので、テキストエディタを開き、以下のコマンドを入力して「Portable.bat」など適当なな名前のバッチファイルにして、先程入れたランチャーのexeファイルと同じ場所に保存します。

```MinecraftLauncher.exe --workdir "%CD%\.minecraft"```

**USBメモリからMinecraftを起動する際は必ず今作ったバッチファイルをダブルクリックして起動するようにしましょう**

### Step3 とりあえずランチャーを起動

先程作ったバッチファイルをダブルクリックして起動します。すると、必要なファイルが一通りダウンロードされ、ランチャーの画面が出てきます。

ここで一旦ランチャーを閉じましょう。すると、「.minecraft」「game」という2つのフォルダーが生成されているはずです。

### Step4 MinecraftのデータをUSBにコピー

大体マイクラをUSBに入れて持ち運ぼうなんて考える人間は既にそれなりにマイクラをやっているはずなので、そのプレイデータをUSBメモリにコピーします。

USBに入れたMinecraftでは、OptifineやForgeなどの導入の際いちいちインストール先を変更するのがうまく行かなかったり面倒臭かったりするので、新しくMinecraftを始めた方もUSBに入れる前に自分のパソコンで一通りの設定を済ましてからそのデータをコピーしたほうが良いかもしれません。

- Minecraftのデータは`C:\Users\(ユーザー名)\AppData\Roaming\.minecraft`に保存されています。
- 「Windowsキー」と「R」を同時に押して、「ファイル名を指定して実行」に`%appdata%`と入力します。
- そうするとRoamingフォルダーが開くので、その中にある「.minecraft」というフォルダーをコピーして、先程USBメモリに生成された「.minecraft」に上書きします。

### Step5 MinecraftをUSBメモリから起動しよう!

ちゃんとUSBメモリから起動できているか確認