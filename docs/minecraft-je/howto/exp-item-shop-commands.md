
---
title: 経験値でアイテムを買うショップ(警告文付き)の作り方
slug: /minecraft-je/howto/exp-item-shop-commands
description: [2016年6月16日改訂] バージョン1/9/1.10に対応した、経験値アイテムショップのコマンドを解説します。経験値レベルが足りないと警告する機能付きです。
---

![経験値でアイテムを買うショップ](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578380790/db6e48253bfaf7e2fa951d0d3755e671_an83tj.png)

\[2016年6月16日改訂\] バージョン1/9/1.10に対応した、経験値アイテムショップのコマンドを解説します。経験値**レベルが足りないと警告する**機能付きです。

   
![経験値払う装置](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578383437/2de0bb2bee699b765ee3484947eed715-1_h0qzt7.png)

以下のコマンドでは、レベルが10以上ならレベルを10減らしてアイテムを与え、9以下なら「レベルが足りません」と警告を表示します。

※マウスオーバーすると説明が出る箇所を用意しています。

「a」

**Impulse(インパルス)****Unconditional(無条件)****Needs Redstone(赤石必要)**

**/testfor @p\[l=9\]**  
最寄りの人のレベルが**9以下か**どうか判定します。

「b」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/tell @p レベルが足りません**  
レベル9以下なら警告。

「c」

**Chain(チェーン)****Unconditional(無条件)****Always Active(常時実行)**

**/testfor @p\[lm=10\]**  
これはUnconditionalなので無条件に実行。今度はレベルが**10以上か**どうか判定します。

「d」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/xp -10L @p**  
レベル10以上ならレベルを10マイナス。

「e」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/give @p minecraft:アイテムID 数量 データ値**  
「数量」「データ値」は無くても構いません。  
例: /give @p minecraft:diamond 1

「f」

**Chain(チェーン)****Conditional(条件付き)****Always Active(常時実行)**

**/playsound minecraft:entity.player.levelup master @p**  
最寄りのプレイヤーに対して、効果音を鳴らします。
