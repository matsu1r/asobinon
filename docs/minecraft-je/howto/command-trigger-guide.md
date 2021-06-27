---
title: 【コマンド解説】triggerコマンドでクイズ大会やイベント分岐、競馬っぽいことをしよう
---

[![trigger](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135139.png)](#4/7/47fd3e1e.png "trigger")  
マルチプレイで、みんなで**クイズ大会**をしたいと思いませんか?  
RPG風の**変数を使った分岐**や、**ちょっとした賭け**をしてみませんか? 

**Minecraft 1.8**で追加された****「trigger」**コマンドとscoreboardコマンドで実現可能です。**

手順を覚えて、楽しいアドベンチャーマップを制作しましょう。 

# 賞品付きクイズ大会を開催する方法

## scoreboardコマンドを使って準備しよう

まずはクイズ大会の準備をします。  
あらかじめコマンドブロックを設置しておき、次のコマンドを実行させます。

**![2014-9-30_22-50-55](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150902.jpg)  
/scoreboard objectives add quiz trigger みんなの回答  
使用方法：/scoreboard objectives add 表の名前 タイプ 表示名** 

**「scoreboard」**コマンドを使っています。
**「quiz」**という名前（表示名はみんなの回答）でスコアボードを追加し、**「trigger」**というタイプにしています。  
これまでは「health」などを入れて、何をカウントするか決めていましたが、  
今回は1.8で追加された「trigger」を入れているわけです。

次に、みんなの回答を画面に表示させてみましょう。

**/scoreboard objectives setdisplay sidebar quiz**

「quiz」と名前をつけた表を表示させます。**なにか起こるまで表示されません。**

全員の数値をリセットしておきましょう。

**/scoreboard players reset @a quiz**

このコマンドで、プレイヤーが数値を操作できるようにします。

**/scoreboard players enable @a quiz**

これによりみんなが回答できるようにする準備ができました。  
 

## tellrawとtriggerを組み合わせてクイズをしよう

次に、tellrawコマンドを使って問題を放送します。  
選択肢をクリックして回答できるようにします。

**[![2014-10-1_18-1-26](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208141140.jpg)](#5/a/5af62763.jpg "2014-10-1_18-1-26")  
/tellraw @a {“text”:”\[チャージマン研! 第四話にて、星くんのユニホームの番号は?\]”,  
extra:\[  
{“text”:”<—1—>”,”color”:yellow,”clickEvent”:{action:run\_command,value:”/trigger quiz set 1“}},  
{“text”:”<—3—>”,”color”:blue,”clickEvent”:{action:run\_command,value:”/trigger quiz set 3“}},  
{“text”:”<—7—>”,”color”:red,”clickEvent”:{action:run\_command,value:”/trigger quiz set 7“}}  
\]  
}**

それぞれの番号をクリックすれば、「みんなの回答」に表示されます。  
表示をしたい場合はリセットのコマンドを実行してください。  
![2014-10-1_18-5-13](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151429.jpg)  
もう一度選ぼうとしても変更できません。**triggerにしたスコアボードは一回のみ変更できるのです。**  
もう一度する場合、[このコマンド](#enable_command)をもう一度実行してください。

この問題の答えはチャー研ファンの皆さんならお分かりでしょう。7です。  
ということで、**「7」を選んだ人にだけ賞品をプレゼントします。**

**/give @a\[score\_quiz=7,score\_quiz\_min=7\] minecraft:gold\_ingot 1**

プレイヤー指定の後に\[score_○○=数字,score_○○\_min=数字\]と追記することで、  
**指定した数値の人のみに賞品をプレゼントすることができます。**

# triggerコマンドの活用例2つ

## RPG風一回しか選べない物語分岐

RPG風のアドベンチャーワールドを作る際、**「あそこで○○を選ぶと以後こうなっていく」**のように、  
**一回しか選べない選択肢を用意して、そこで選んだものに対応して物語がずっと分岐していく、**  
といった仕掛けを作る方法を解説します。  
ポケモンで御三家を選んでおいて、殿堂入り後にそれに合わせてもう一体くれる、といった仕掛けです。  
まずは以下のコマンドを実行しておきましょう。

**/scoreboard objectives add sukinamono trigger あなたの好きな食べ物**

**/scoreboard players reset @e sukinamono**

**/scoreboard players enable @a sukinamono**

scoreboardコマンドで「sukinamono」という表を作っておきます。  
リセットしたあとプレイヤーが操作できるようにしておきます。  
これら3つのコマンドは、選択肢を選ぶシーンに合わせて実行しましょう。

**![2014-10-1_18-56-8](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208132330.jpg)  
/tellraw @a {“text”:”\[あなたの好きな食べ物は?\]”,  
extra:\[  
{“text”:”りんご”,”color”:yellow,”clickEvent”:{action:run\_command,value:”/trigger sukinamono set 1“}},  
{“text”:”ケーキ”,”color”:blue,”clickEvent”:{action:run\_command,value:”/trigger sukinamono set 2“}},  
{“text”:”スイカ”,”color”:red,”clickEvent”:{action:run\_command,value:”/trigger sukinamono set 3“}}  
\]  
}**

好きな食べ物を質問しています。**食べ物によってセットする値を変えておきましょう。**

**（※コマンドブロックで値をセットしたいですが、triggerコマンドはコマブロでは実行できないので、  
必ずtellrawのメッセージ内で使うようにしましょう。）**

プレイヤーに選ばさせたら、triggerなので変更はできません。  
**あとはスコアボードをリセットしない限り選んだ値がずっと保持されます**から、  
**RPGツクールの「変数」**のような使い方ができるわけです。スコアボードって便利でしょ。

ここで選ばせた値を使って物語を分岐させていくわけです。

**使用例 : りんごを選んだ人にだけ金リンゴをあげる  
/give @a\[score\_sukinamono=1,score\_sukinamono\_min=1\] minecraft:golden\_apple 1**

## 村人を走らせてちょっとした賭けをしよう

マルチプレイで、競馬っぽいことをしてみましょう。  
ルールは簡単。村人を走らせて、行き先を予想しておき、当たったら景品がもらえます。

[![19](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144920.png)](#7/c/7ca31f86.png "19")  
まずはフィールドを用意。  
**左に村人をセットしておき、ゾンビを召喚して右へ誘導します。**  
村人が右の3つの感圧板のうちどれかを踏むようにしています。

[![00 - コピー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208144103.png)](#7/4/749eb24b.png "00 - コピー")  
感圧板それぞれの下にコマンドブロックを用意しておき、それぞれにgiveコマンドをセットしておきます。  
このとき「villager」という名前（適当）のスコアを基準に景品を上げるプレイヤーを判断しています。  
**それぞれで判定するスコアの値は変えてください。（1,2,3）**

準備ができたら、イベント開催時にスコアボードをセットしましょう。

**/scoreboard objectives add villager trigger 走れ!村人くん**

**/scoreboard players reset @e villager**

**/scoreboard players enable @a villager**

この三連チャンはtriggerを使う際に必ずセットで使うので覚えておきましょう。

次に選択肢を放送します。

**![2014-10-1_19-36-12](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208155144.jpg)  
/tellraw @a {“text”:”\[村人はどこに進むと思いますか?\]”,  
extra:\[  
{“text”:”ルート1″,”color”:yellow,”clickEvent”:{action:run\_command,value:”/trigger villager set 1“}},  
{“text”:”ルート2″,”color”:blue,”clickEvent”:{action:run\_command,value:”/trigger villager set 2“}},  
{“text”:”ルート3″,”color”:red,”clickEvent”:{action:run\_command,value:”/trigger villager set 3“}}  
\]  
}**

ここでは村人の進む道ごとに「ルート○」という名前をつけています。  
プレイヤーに分かりやすく名前を伝えておきましょう。 

[![32](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208150046.png)](#8/6/8698ce4f.png "32")  
試しにゾンビを召喚したところ、村人はルート3に行きました。  
私はルート1を予想していたので何ももらえませんでした。

![2014-10-1_19-42-43](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208155140.jpg)  
予想が的中した場合はこのようにダイヤモンドがプレゼントされます。

---

いかがでしたか。  
1.8で追加された「trigger」コマンドの便利さがお分かりいただけたかと思います。  
このコマンドをうまく使った楽しいマップが制作されるのを心からお持ちしています。  

# 参考にさせて頂いたサイト様

**14w06bがきてたよー(主にtriggerコマンドについて):赤石愛のれんらくちょう【Minecraft】**  
[http://ch.nicovideo.jp/akaishi\_ai/blomaga/ar450959](http://ch.nicovideo.jp/akaishi_ai/blomaga/ar450959)
