---
sidebar_position: 0
slug: /minecraft-je/howto/mcje_portable/
---
# Minecraft JEのポータブル化(USBメモリ等で持ち運ぶ)の方法と注意点の備忘録

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

## 方法の概要・流れ

元々パソコンでMinecraft Java Editionをプレイしている前提で話を進めます。元々のデータの方でゲームディレクトリやJavaランタイムのパスを変更していなければ、ここの項目のStepだけで完結できます。

Minecraftが初めてだよ、という方は、こんなことにはまだ挑戦しない方が良いかもしれません。

### Step1 Minecraftのランチャーを入手する

Minecraft Launcherの実行ファイル、ランチャーの本体です。

- お手持ちのPCにMinecraftがインストールされている場合は、インストール先(デフォルトでは`C:\Program Files (x86)\Minecraft Launcher`)にあるMinecraftLauncher.exeをコピーして、
- または[公式ダウンロードページ](https://www.minecraft.net/ja-jp/download/alternative)から「Minecraft.exe」(内容は上のMinecraftLauncher.exeと全く同じ)をダウンロードして(下図参照)、

![Launcher_Download](https://firebasestorage.googleapis.com/v0/b/markdown-gaming.appspot.com/o/images%2Fuserupload%2FVtjimroDpNTowXhTh56Gbh5CAr63%2F9c912c77-818c-4317-ac86-e8cdbc4dd470.png?alt=media&token=0d35ae30-eeff-4071-bfe3-40e45b4b9f31)

インストールしたい場所 (ここではUSBメモリの中のフォルダ `X:\Minecraft\`とします) に突っ込みます。

### Step2 起動用バッチファイルを作る

先程突っ込んだランチャーは、普通にダブルクリックすると予め設定された場所 (後述の`%appdata%`) にデータを保存しようとします。ランチャーにはその場所を別の場所に設定するオプションが存在するので、バッチファイルを使ってその設定を適用します。

メモ帳でも何でも良いので、テキストエディタを開き、以下のコマンドを入力して「Portable.bat」など適当なな名前のバッチファイル(拡張子:.bat)にして、先程入れたランチャーのexeファイルと同じ場所に保存します。

```
MinecraftLauncher.exe --workdir "%CD%\.minecraft"
```

ランチャーを[公式ダウンロードページ](https://www.minecraft.net/ja-jp/download/alternative)からダウンロードした場合は実行ファイルの名前が「Minecraft.exe」なので、

```
Minecraft.exe --workdir "%CD%\.minecraft"
```

となります。どっちでもいいわ

**USBメモリからMinecraftを起動する際は必ず今作ったバッチファイルをダブルクリックして起動するようにしましょう**

### Step3 とりあえずランチャーを起動

先程作ったバッチファイルをダブルクリックして起動します。すると、必要なファイルが一通りダウンロードされ、ランチャーの画面が出てきます。

ここで一旦ランチャーを閉じましょう。すると、「.minecraft」「game」という2つのフォルダーが生成され、下の画像のようになっているはずです。

![is_dot_minecraft_generated?](https://firebasestorage.googleapis.com/v0/b/markdown-gaming.appspot.com/o/images%2Fuserupload%2FVtjimroDpNTowXhTh56Gbh5CAr63%2F0038af96-082e-46fb-a593-e71bd68b6a43.png?alt=media&token=a24c30a5-7e18-4f12-9f72-aa3176e2b48f)

**ここで「.minecraft」が生成されていない場合は何かがうまく行っていないので、ここまでの手順を見直しましょう**

#### Step3.5 元のMinecraftのデータをUSBにコピー

大体マイクラをUSBに入れて持ち運ぼうなんて考える人間は既にそれなりにマイクラをやっているはずなので、そのプレイデータをUSBメモリにコピーします。こうすると、USBに新しくバージョンをダウンロードしたりOptifineやForgeを導入する手間を省くことができます。

 - Minecraftのデータは `C:\Users\(ユーザー名)\AppData\Roaming\.minecraft` に保存されています。

「Windowsキー」と「R」を同時に押して、「ファイル名を指定して実行」に`%appdata%`と入力します。
そうするとRoamingフォルダーが開くので、その中にある「.minecraft」というフォルダーをコピーして、先程USBメモリに生成された「.minecraft」に上書きします。
![dotminecraft_copy](https://firebasestorage.googleapis.com/v0/b/markdown-gaming.appspot.com/o/images%2Fuserupload%2FVtjimroDpNTowXhTh56Gbh5CAr63%2F58aecf59-6333-46bf-a4e3-399f277a7e0a.png?alt=media&token=686e2406-363c-4c6b-a8fb-f3e84441e61b)

### Step4 MinecraftをUSBメモリから起動しよう!

もう一度Portable.batからランチャーを起動してみましょう。

ここでログインしてゲームを起動すると、他に必要なファイルが全てUSBメモリにインストールされ、USBメモリからMinecraftが遊べるようになります。

### OptifineやForgeを直接USBへインストールするには

直接こいつらをインストールする際、インストール先を変更する必要があります。めんどくさいですね。

**起動構成の設定に関しては、この場合少し複雑になるのでまだ待ってください。(後述)**

#### Forgeの場合

細かい方法は当サイトの[Forgeのページ](/minecraft-je/howto/install-forge/download-install)を御覧ください。

インストーラが起動したら、下の画像のようにしてインストール先を変更してから、「OK」を押してインストールするとうまくいきます。

それ以外は[Forgeのページ](/minecraft-je/howto/install-forge/download-install)と同じです。

![install_Forge_USB](https://firebasestorage.googleapis.com/v0/b/markdown-gaming.appspot.com/o/images%2Fuserupload%2FVtjimroDpNTowXhTh56Gbh5CAr63%2F487ab735-43cc-42c0-a587-d478f934a514.png?alt=media&token=82b832ee-54bc-4227-9803-b70ebf7fa842)

#### Optifineの場合

細かい方法は当サイトの[Optifineを「バージョン」としてインストール](/minecraft-je/mod/optifine/install/singleinstall)を御覧ください。

インストーラが起動したら、下の画像のようにしてインストール先を変更してから、「install」を押してインストールするとうまくいきます。

それ以外は[Optifineを「バージョン」としてインストール](/minecraft-je/mod/optifine/install/singleinstall)と同じです。

![install_optifine_USB](https://firebasestorage.googleapis.com/v0/b/markdown-gaming.appspot.com/o/images%2Fuserupload%2FVtjimroDpNTowXhTh56Gbh5CAr63%2Fe9080840-8419-420c-813a-4ab29354c337.png?alt=media&token=da010edd-8c9f-4f63-9ee1-75d4b3d8daab)


## 気をつけるべき設定

### 起動構成

USBから起動する場合、起動構成のディレクトリは必ず相対パスで指定しましょう。