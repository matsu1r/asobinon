---
title: (1.13) しばらく寝てないと何か起こる仕掛けの作り方
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110121.png)

JE1.13のSnapShot18w07aで、気になる新要素が追加されました。**プレイヤーが最後に起きてからの時間を計測**する、time\_since\_sleepという”統計”です。これを**コマンドで利用して作れる仕掛け**を簡単にご紹介します。

関連記事: 1.13のコマンド関連の変更点

[![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103811.png)  
https://www.napoan.com/java-113-command-changes/](https://www.napoan.com/java-113-command-changes/)

\## スコアボードを作成しよう ※以下で解説する仕掛けは、18w07a以降のバージョンでしか使えません。

time\_since\_sleepのスコアボードを作成するコマンド

**/scoreboard objectives add <スコアボード名> minecraft.custom:minecraft.time\_since\_sleep \[表示名\]**

*   <スコアボード名> – 半角英数字しか使えません。
*   minecraft.custom:minecraft.time\_since\_sleep　- 1.12までと違い、**統計の種類の書き方が大幅に変わっている**ので注意しましょう。

スコアを作ったら、画面右側に表示させてみましょう。

スコアボードを画面右側に表示させるコマンド

**/scoreboard objectives setdisplay sidebar <スコアボード名>**

*   sidebar – 代わりにlistと書けばTabキーで表示するプレイヤー一覧にスコアが表示されます。belowNameならマルチプレイで頭上に表示されます。
*   <スコアボード名> – 先ほど作成したスコアボードの名前を指定します。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094617.png)

sidebar に表示してみました。値がどんどん増えているのが分かると思います。これ、一体どういうふうに増えるのでしょうか?

\## 「time\_since\_sleep」の値はこう変わる \`minecraft.custom:minecraft.time\_since\_sleep\`、長いので\`time\_since\_sleep\`と書きますが、この統計は \*\*「最後に起きてからの時間」を「tick」で記録したもの\*\* です。つまり、\*\*起きている限り毎秒20増えていきます。\*\*

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123606.png)

この統計はベッドがカギになっています。**ベッドで横になっている間は、値の増加が止まります。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110627.png)

そして**起きるとスコアがリセット。また値が増えていきます。**この統計を使ってファントムは「プレイヤーがどれだけ起きているのか」を判定しているんですね。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104138.png)

ここで豆知識。**この統計における「起きる」の定義はちょっと特殊**で、**途中でベッドから出ても値はリセットされます。**つまり、**ファントムと会いたくなかったら、ちょっとベッドに入ってすぐ出ればいいのです。**

\## 仕掛けのちょっとした例

スコアボードに慣れている人なら、わざわざ解説する必要はないでしょうが、一応このスコアの使用例を載せておきます。

\### 2日寝ないと吐き気がするシステム

まずは以下のコマンドを実行してスコアを作成してください。(この仕掛け専用のスコアを作ります)

time\_since\_sleepのスコアボードを作成するコマンド

**/scoreboard objectives add hakikeTime minecraft.custom:minecraft.time\_since\_sleep**

次に以下のコマンドを両方リピートコマブロやファンクションで常時実行してください。

2日間寝てない人に吐き気効果を与えるコマンド

**/effect give @a\[scores={hakikeTime=48000..}\] minecraft:nausea 60 0**

スコアをリセットするコマンド

**/scoreboard players reset @a\[scores={hakikeTime=48000..}\] hakikeTime**  
**※effectコマンドの構文や、スコア引数の書き方は変更されていますのでご注意ください。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094620.png)

何気に恐ろしいシステム…

\### 「あなたは○日間寝ていません!」と表示する

まずは以下のコマンドを実行してスコアを作成してください。(この仕掛け専用のスコアを作ります)

time\_since\_sleepのスコアボードを作成するコマンド

**/scoreboard objectives add okiteruTime minecraft.custom:minecraft.time\_since\_sleep**

一日が何tickか定義するためのスコアボードを作成するコマンド

**/scoreboard objectives add oneDay dummy**

一日が何tickか定義するコマンド

**/scoreboard players set #DUMMY oneDay 48000**  
(#DUMMYはダミープレイヤーです)

日数を記録するためのスコアボードを作成するコマンド

**/scoreboard objectives add okiteruDays dummy**

次に以下のコマンドをすべてリピートコマブロやファンクションで常時実行してください。

各プレイヤーが各自のokiteruTimeの値を各自のokiteruDaysに代入するコマンド

**/execute as @a run scoreboard players operation @s okiteruDays = @s okiteruTime**

各プレイヤーが各自のokiteruDaysの値を#DUMMYさんのoneDayで割るコマンド

**/execute as @a run scoreboard players operation @s okiteruDays /= #DUMMY oneDay**

okiteruDaysの値を各プレイヤーが各自のアクションバーに表示するコマンド

**/execute as @a\[scores={okiteruDays=1..}\] run title @s actionbar \[{“text”:”あなたは”},{“score”:{“name”:”@s”,”objective”:”okiteruDays”},”color”:”yellow”,”bold”:true},{“text”:”日間寝ていません!”}\]**  
(0日間寝ていない人に表示する必要はないと思うので、executeの対象に条件を付けています。)

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094624.png) ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208094628.png)

okiteruTimeの値を常時okiteruDaysに代入し、okiteruDaysをダミープレイヤー#DUMMYのoneDayの48000で割り、それをtitleコマンドでアクションバーに表示しています。マルチプレイに対応させるため、executeで各自に実行させています。

スコアボードって面白いでしょ。基礎の解説とかしてほしかったらコメント下さい。ほなまた。
