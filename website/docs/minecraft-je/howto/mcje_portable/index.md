---
sidebar_position: 0
slug: /minecraft-je/mcje_portable/
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

それから、「Minecraft USB 持ち運ぶ」で検索すると、「set APPDATA=…」みたいなバッチファイルを作る、と書いてあるサイトが多いのですが、この方法が通用するのは**Minecraft 1.5.2以前のランチャーだけ**です。私はこのことを知らず、かなり時間を浪費しました。


***

## 方法の概要

### Step1 MinecraftLauncher.exeを入手する

- Minecraft Launcherの実行ファイルです。
- お手持ちのPCにMinecraftがインストールされている場合は、インストール先(デフォルトでは`C:\Program Files (x86)\Minecraft Launcher`)にあるMinecraftLauncher.exeをコピーして、
- または[公式ダウンロードページ](https://www.minecraft.net/ja-jp/download/alternative)から「Minecraft.exe」(内容は上のMinecraftLauncher.exeと全く同じ)をダウンロードして、

![ダウンロードページで「Minecraft.exe」を選択](/minecraft-je/howto/mcje_portable/Launcher_Download.png)

- インストールしたい場所(ここではUSBメモリの中のフォルダ `X:\Minecraft\`とします)に突っ込みます。

### Step2 起動用バッチファイルを作る

- メモ帳でも何でも良いので、テキストエディタを開き、以下のコマンドを入力して「Portable.bat」など適当なな名前のバッチファイルにして、先程入れたランチャーのexeファイルと同じ場所に保存します。

```MinecraftLauncher.exe --workdir "%CD%"```

**USBメモリからMinecraftを起動する際は必ず今作ったバッチファイルをダブルクリックして起動するようにしましょう**

