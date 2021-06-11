
---
title: シェーダーパック「SEUS v10.1」が「Invalid program」エラーで動かない場合の対処法 [影MOD]
slug: /minecraft-je/howto/howtofix-seus101-error
description: シェーダーパックの中で最も人気が高い、「SEUS (Sonic Ether’s Unbilievable Shaders)」。SEUSのバージョン「10.1」を使おうとすると、画面が真っ白になりInvalid program “composite1″と表示されてしまう… 前々からこのエラーに悩まされてきたのですが、解決方法を見つけましたのでメモとして書き残しておきます。
---

![SEUSのエラー修復方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102901.png)

シェーダーパックの中で最も人気が高い、「SEUS (Sonic Ether’s Unbilievable Shaders)」。**SEUSのバージョン「10.1」を使おうとすると、画面が真っ白になりInvalid program “composite1”と表示されてしまう…** 前々からこのエラーに悩まされてきたのですが、**解決方法を見つけました**のでメモとして書き残しておきます。

## SEUS v10.1のエラーってこんな感じ

![問題のシェーダーパック](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111331.jpg)

今回修復するエラーが発生するのは、[こちらのページ](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1280299-sonic-ethers-unbelievable-shaders-v11-0)でダウンロードできる「SEUS v10.1」シリーズのシェーダーパック達です。先日v11.0がリリースされましたが、使い慣れたv10.1もまだまだ使いたいし…

![これがエラー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110947.png)

で、発生するエラーってのがこれ。**シェーダーパックのロード時に\[Shaders\] Error: Invalid program “composite1”と表示され、景色は真っ白。グラボのドライバーを更新してもOptifineのバージョンを変えてもShaderOptionsを弄っても無駄。**諦めかけてました…

## SEUS10.1のエラーを修復する手順を解説。zipを展開して中身を編集しよう

こんな時に大変役に立つのが、世界中のクラフターのディスカッションの場 ― Minecraft Forum。

SEUS v10.1のエラーの解決方法をご教授下さったBilbax2氏の有り難き投稿

[![有り難き投稿](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208112014.jpg)  
http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/mods-discussion/2680927-seus-error-invalid-program-composite1?comment=14](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/mods-discussion/2680927-seus-error-invalid-program-composite1?comment=14)

私と同じエラーで悩んでおられたGhostMvZ氏に、対処法を丁寧にご教授されたのがBilbax2氏。大変有難うございます…! この投稿にしたがって修復してみましょう。

![シェーダーパックのフォルダーを開こう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092047.png)

Optifineの場合は「ビデオ設定」→「シェーダーの詳細設定」、ShadersModの場合は「Shaders…」をクリックしてシェーダーパック一覧画面を表示します。そして**シェーダーのフォルダー…(Shaders Folder)**ボタンをクリックしましょう。

![SEUSのzipを展開してフォルダーを開く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092429.jpg)

するとSEUSなどのzipが入ったshaderpacksフォルダーが開きます。**修復したい「SEUS-v10.1-○○.zip」を展開してしまいましょう。**展開により生成されたフォルダーを開きます。

![shadersフォルダーを開く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092448.jpg)

フォルダー内のshadersフォルダーを開きます。zipの中じゃなくて展開で出てきたフォルダーの中。

![composite1.fshを開く](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092424.jpg)

大量のfsh,vshファイルが入っていますが、その中の**composite1.fshを開いて下さい。vshじゃなくてfshです。**fshとか表示されない場合は 「表示」→「ファイル名拡張子」にチェック。

開くのに使うソフトですが、メモ帳は避けてNotepad++やSublimeTextなどの**高機能なテキストエディタで開くことをおすすめ**します。

![951行目へ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101658.jpg)

**951行目**まで飛びましょう。ここが問題の箇所なんです。

![inをinoutに](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105438.jpg)

951行目の、ComputeFakeSkyReflection(in SurfaceStruct surface)の**「in」**を、in**out**に変更します。そして忘れずに上書き保存。

![zip無しを選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090721.png)

シェーダーパック選択画面を開いたら、エラーの出るSEUS10.1…zipではなく、**「.zip」が付いていない方のSEUS v10.1を選びます。**シェーダーパックって、展開したフォルダーの状態でもロードできるんです。

![SEUS動いた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092043.png)

やったぜ。てことでSEUSv10.1で「composite1が無効」ってエラーが出たらこういう風に修復すれば動きます。

## 先日紹介した「Continuum Shader」で同様のエラーが発生した場合の対処法

ハイスペックPC向けシェーダーパック「Continuum Shader」

[![ContinuumShadersの紹介と比較](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110743.png)  
https://www.napoan.com/continuum-shaders-vs-seus/](https://www.napoan.com/continuum-shaders-vs-seus/)

「SEUS v10.1」をベースにハイスペPC向けにカスタマイズした**「Continuum Shaders」でも、同様のエラーが発生してしまいます**。(筆者はContinuum v1.2で確認、他のバージョンは未確認)

![Continuumの場合](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092033.png)

Continuumの場合は真っ白ではなく、ご覧のように**白黒のなんか芸術的な世界が広がる**んです。いやいや直さなきゃ。

![composite2.fsh](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092421.jpg)

ContinuumのエラーはInvalid program “composite2”なので、シェーダーパックを展開後SEUSと違ってcomposite**2**.fshを編集します。

![851行目を編集](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121953.jpg)

SEUS10.1のちょうど100行前、**851行目**を編集します。**「in」を「inout」に変えたら上書き保存**。ちなみにこの編集は**SEUSがああならContinuumもこうだろう、という私の勝手な判断で行ってます**ので自己責任でお願いします

![zip無しを選択](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103500.png)

zipを展開したのでzip無しバージョンが出現します。これを選択。

![Continuum動いた](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092039.png)

良かったよかった、動きました。SEUSと同じ箇所を同じように修正したら動いたということは、**ContinuumはSEUSの欠陥も引き継いで作られている**というわけです…
