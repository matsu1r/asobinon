---
title: 「Loot Table (ドロップ表)」の使い方 Part2 JSONの書き方と条件分岐
---

<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100801.png" alt="" width="650" height="599" />

Loot Table解説のPart2です。今回はJSONの書き方を解説します。 **「運効果を持っていればこのアイテムが出やすい」「スコアボードの値に応じてアイテムを出す」「燃やして死んだらアイテムのNBTタグを変える」「アイテムにランダムで指定したエンチャントを付ける」** など、様々な「function」と「condition(条件)」の使い方を解説しています。

[Part1](/minecraft-je/howto/loot-table-perfect-guide/)と[Part3](./part3/)も合わせてご覧ください。

:::note 2020/2/22追記
1.14仕様に更新しました。1.13以前ではこの方式は使えないので注意してください。
:::

ここからは、オリジナルのLoot table(ドロップ表)を自作する手順とJSONファイルの書き方を解説します。**サンプルをコピペして少しずつ弄っていけば誰でも思い通りのルートテーブルが作れるはず**なので、是非諦めずに自作に挑戦してみてください。

(簡単にJSONを生成するツールもありますが、また別の機会に紹介するかもです)

\## LootTableを作成する場所とは。セーブデータ内のフォルダの構造を解説

「データパック」の作成手順/フォルダ構成/使い方 (Java版1.13)

[![データパック作成解説](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090736.png)  
https://www.napoan.com/data-pack-perfect-guide/](https://www.napoan.com/data-pack-perfect-guide/)

まずは▲の記事を参考に、あなたのワールドの中に「データパック」を作ってください。 データパックを作る際に名前空間フォルダを作りますが、バニラのルートテーブルを上書きしたい場合は「minecraft」に、そうでない場合は英数字で好きな名前を付けてください。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122103.png)

そして名前空間フォルダの中に、loot\_table**s**という名前のフォルダを作成します。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208114319.png)

`loot_tables`フォルダの中にルートテーブルのJSONを入れていくわけですが、**この中にさらにフォルダを作成して、JSONを整理することもできます。** もちろん`loot_tables` フォルダ直下にJSONを入れても構いません。

そこに新規テキストファイルを作成して、**小文字の英数字とアンダーバーで名前を付け、末尾に.jsonを付けてください。**

## jsonの編集にはメモ帳ではなく高機能なテキストエディタを使おう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124328.jpg)

作成したJSONファイルをいよいよ編集していくのですが、ここで注意点を1つ。**Windows付属の「メモ帳」はおすすめしません。**こういう文書ファイルでは一文字のミスも許されませんから、**自動整形だとか構文チェックをしてくれる多機能なエディタでjsonファイルを開くことをお勧めします。**

ちなみに私は 「Sublime Text 3」にMaterialってテーマを適用して使ってます。

## ルートテーブルの基本の書き方。アイテムのスロット数と出現確率を設定するには

まずは以下のサンプルをコピペしてjsonに貼り付けてみましょう。

```json
{
   "pools":[
      {
         "rolls":3,
         "bonus_rolls":2,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stone",
               "weight":2
            },
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1
            }
         ]
      }
   ]
}
```

基本的な書き方が分かっていただけたかと思います。「pools」の中に「entries」があり、その中にアイテムを書いていくんです。

-   “pools”: – 四角カッコの中にアイテムのパターンを書きます。
    -   “rolls”: 数値 – 出現する項目の数を設定します。アイテム自体の数量ではなく、**例えばチェストなら占有するスロットの数です。**
    -   “bonus\_rolls”: 数値 – バージョン1.9で追加された**「運(luck)」効果を持っていた際に追加で出てくるアイテムの数**です。luck効果は**/effect @p minecraft:luck 100 0 true**で自分に付与できます。**
    -   “entries”: – 四角カッコの中にアイテムなどの項目を書きます。
        -   “type”: “タイプ” – アイテムの場合は”item”, 他のルートテーブルを呼び出す際は”loot\_table”, 何もない場合は”empty”と書きます。
        -   “name”: “何か” – typeをitemにした場合はアイテムID、loot\_tableにした場合はminecraft:chests/nether\_bridgeのようにloot tableを指定します。
        -   “weight”: 数値 – そのアイテムの出やすさです。**weightが多いほど出やすく、少ないほどレアになります。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091425.png)

“roll”: 数値でアイテムの量(というよりスロットの数)を指定するのですが、いつも同じ数のアイテムが出てくるってつまらないですよね。**出てくるアイテムの量をランダムにするには**どうすれば良いのでしょうか。

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stone",
               "weight":2
            },
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1
            }
         ]
      }
   ]
}
```

違いがお分かり頂けましたか? そう、「&#8221;rolls&#8221;」の中にさらにカッコが増えてますね。その中に**「&#8221;min&#8221;」「&#8221;max&#8221;」の値を書くことで、出てくるアイテムの最小の量と最大の量を設定できる**んです。「&#8221;bonus_rolls&#8221;」の数値も同じように最小値と最大値を設定できます。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103104.png)

バージョン1.9では「luck」という新効果が追加されたことはご存知ですよね。この**運効果が付いている間だけ、特定のアイテムが出てくる確率を上げる(=特定のアイテムの量を増やす)には**どうすれば良いのでしょうか。

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stone",
               "weight":2
            },
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "quality":5
            }
         ]
      }
   ]
}
```

“quality”: 数値という項目をダイヤモンドに設定しています。すると以下のようにアイテムの出やすさが増えます。

“quality”を設定した際のluck効果のレベルに応じたアイテムの出やすさの変化の式

アイテムの出やすさ: **“weight”の値 + (“quality”の値 × luck効果のレベル)**

**例えば**“weight”が3、“quality”が5、プレイヤーの「運」がレベル2だった場合は「3+(5\*2) = 13」**となり、最終的なアイテムの出やすさは「13」となります。**プレイヤーの運レベルが高ければ、”quality”をちょっと変えただけで大きく出やすさが変わるんです。**

1ページ目でも述べましたが、このルートテーブルをチェストなどに設定した場合は**「初めて開けて中身を見た時」にluck効果を持っていればアイテムが増えます。**設置/設定時の効果は中身の決定に影響しません。****

## アイテムのまとまり、「pool」とは

```json
{
   "pools":[
      {
         "rolls":11,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stone",
               "weight":10
            },
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1
            }
         ]
      },
      {
         "rolls":3,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stick",
               "weight":2
            },
            {
               "type":"item",
               "name":"minecraft:paper",
               "weight":1
            }
         ]
      }
   ]
}
```

▲このルートテーブルでは、“pool”: \[\]の中に複数のまとまり(pool)がありますよね。こういう風に複数のpoolに分けて書くことで、**アイテムの出やすさ(weightとquality)の比較をバラバラに行える**んです。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208085957.png)

上記ルートテーブルでは、「焼石:ダイヤ=10:1」「棒:紙=2:1」という2つの「pool」で別々に出やすさの比較が行われます。**上手に「pool」を分けて、アイテムの出やすさを思い通りに操りましょう。**

## 基本的な「functions」の使い方

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105534.png)

アイテムを出現させることはできたものの、アイテムはすっぴんのまま。**エンチャント効果を付けたり、NBTタグを使って名前や説明文を付けたり、スタック数を設定したりするには**どうすれば良いのでしょうか。

### アイテムにランダムまたは指定したエンチャント効果を指定した確率で付与するには

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stone",
               "weight":2
            },
            {
               "type":"item",
               "name":"minecraft:diamond_chestplate",
               "weight":1,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:enchant_randomly",
                     "enchantments":[
                        "minecraft:protection",
                        "minecraft:fire_protection",
                        "minecraft:unbreaking"
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
```

<p>ここで新しく「functions」が出てきました。この「functions」内に色々書けば各種設定ができるわけです。上記ルートテーブルでは<span>&#8220;function&#8221;: &#8220;minecraft:enchant_randomly&#8221;</span>と書くことで「enchant_randomly(ランダムにエンチャントする)」機能を設定しています。その下に<span>&#8220;enchantments&#8221;: [&#8220;エンチャントID&#8221;,&#8221;エンチャントID&#8221;]</span>と書けば付与されるエンチャントの種類を指定できます。上記の場合は耐性、火炎耐性、耐久力エンチャントの内**1つだけが**付与されます。</p>

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stone",
               "weight":2
            },
            {
               "type":"item",
               "name":"minecraft:diamond_chestplate",
               "weight":1,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:enchant_randomly"
                  },
                  {
                     "function":"minecraft:enchant_randomly"
                  },
                  {
                     "function":"minecraft:enchant_randomly"
                  }
               ]
            }
         ]
      }
   ]
}
```

<p>▲<span>&#8220;enchantments&#8221;</span>を指定しない<span>&#8220;minecraft:enchant_randomly&#8221;</span>を書けば、そのアイテムに**適合するエンチャントがそれぞれ1つだけ**付与されます。上記のように書けば適合するエンチャントが3つ付くわけです。</p>

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond_chestplate",
               "weight":1,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:enchant_with_levels",
                     "levels":30
                  }
               ]
            },
            {
               "type":"item",
               "name":"minecraft:diamond_leggings",
               "weight":1,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:enchant_with_levels",
                     "levels":{
                        "min":10,
                        "max":30
                     },
                     "treasure":true
                  }
               ]
            }
         ]
      }
   ]
}
```

▲今度は“minecraft:enchant\_with\_levels”というfunctionを使ってみましょう。**“levels”で指定したレベルに応じたエンチャント効果が付与されます。**最小レベルと最大レベルを指定することも可能です。また、“treasure”: trueと書けば「Mending(修繕)(修繕)」や「Frost Walker(氷上歩行)」などのトレジャーエンチャント(エンチャント台では付けられない効果)も出てくるようになります。

### アイテムの数(スタック内の量)を指定するには

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:set_count",
                     "count":5
                  }
               ]
            },
            {
               "type":"item",
               "name":"minecraft:gold_ingot",
               "weight":2,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:set_count",
                     "count":{
                        "min":1,
                        "max":5
                     }
                  }
               ]
            }
         ]
      }
   ]
}
```

“minecaft:set\_count”を使えば、“count”で**アイテムの数を指定できます(スタックされた数)**。これも最小値と最大値を指定可能。

一つの項目に何個も書いてしまった場合は、最後に書いてある数値が適用されます。

### アイテムのデータ値を指定するには

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:wool",
               "weight":2,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:set_data",
                     "data":5
                  }
               ]
            },
            {
               "type":"item",
               "name":"minecraft:wool",
               "weight":2,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:set_data",
                     "data":{
                        "min":6,
                        "max":10
                     }
                  }
               ]
            }
         ]
      }
   ]
}
```

羊毛など、**同じIDでも色々な種類があるアイテムは「データ値」で種類を指定します**ね。ルートテーブルでは、”minecraft:set\_data”というfunctionでデータ値を指定します。“data”の数値にはもちろん最小値と最大値を指定できます。

一つの項目に何個も書いてしまった場合は、最後に書いてある数値が適用されます。

※1.13ではデータ値が廃止されるため、このfunctionは使えません

### アイテムのダメージ値を指定するには

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond_shovel",
               "weight":2,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:set_damage",
                     "damage":0.5
                  }
               ]
            },
            {
               "type":"item",
               "name":"minecraft:diamond_pickaxe",
               "weight":2,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:set_damage",
                     "damage":{
                        "min":0.2,
                        "max":0.9
                     }
                  }
               ]
            }
         ]
      }
   ]
}
```

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091429.png)

道具アイテムの残りの耐久値は”minecraft:set\_damage”というfunctionで設定します。”damage”の値は0~1までで、**1なら耐久値が満タンで、0なら残りの耐久値が無し**、つまり壊れているという意味です。

一つの項目に何個も書いてしまった場合は、最後に書いてある数値が適用されます。

### アイテムのNBTタグを指定するには

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond_shovel",
               "weight":2,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:set_nbt",
                     "tag":"{ench:[{id:32,lvl:3}]}"
                  }
               ]
            },
            {
               "type":"item",
               "name":"minecraft:diamond_pickaxe",
               "weight":2,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:set_name",
                     "name":"つよいツルハシ"
                  },
                  {
                     "function":"minecraft:set_lore",
                     "lore":[
                        {
                           "text":"使ってみなよ"
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
```

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091433.png)

普段giveコマンドなどで使っている**NBTタグをルートテーブル内で使うには**、“minecraft:set\_nbt”というfunctionを使います。”tag”内にNBTタグを書くのですが、**ダブルクオーテーションを使う際はバックスラッシュでエスケープするのを忘れずに!**

ちなみに、**一つの項目に何個もNBTタグを書いた場合は合成されます。**しかし同じNBTタグが複数書かれていたら、最後に書かれている物が適用されます。**

:::note ※2020年2月22日追記
名前と説明文は“minecraft:set\_name”および“minecraft:set\_lore”で指定する形式に変わっています。natu様、ご指摘ありがとうございました。
:::

### アイテムの属性(手に持つ/装備すると発動する効果)を指定するには

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124133.png)

アイテムのNBTタグの**「AttributeModifiers」**はご存じですか。だいぶ前の記事で解説した、**「手に持ったり装備したりするとHPなどの能力が強化される」**やつです。ルートテーブルでは、あの機能をわざわざNBTタグに書かなくても「function」として設定できるんです。**

```json
{
   "pools":[
      {
         "rolls":1,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond_chestplate",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:set_attributes",
                     "modifiers":[
                        {
                           "attribute":"generic.maxHealth",
                           "name":"Add health!",
                           "amount":{
                              "min":2,
                              "max":5
                           },
                           "operation":"addition",
                           "slot":[
                              "chest"
                           ]
                        },
                        {
                           "attribute":"generic.attackDamage",
                           "name":"Add power!",
                           "amount":{
                              "min":2,
                              "max":5
                           },
                           "operation":"addition",
                           "slot":[
                              "chest"
                           ]
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
```
“minecraft:set\_attributes”というfunctionを使えば能力の変化を設定できます。

-   “modifiers: \[\]” – 四角カッコの中に効果を書きます。それぞれの効果は1つづつカッコで囲みます。
    
    -   “attribute”: “属性名” – 効果名を書きます。[公式Wikiの属性一覧ページ](http://minecraft.gamepedia.com/Attribute#Attributes)を参考にして下さい。
    -   “name”: “好きな名前” – 自由に属性の名前を書きます。**書かなければエラーになるので必ず何か書いて下さい。**
    -   “amount”: {“min”: 最小値, “max”: 最大値} – 効果の強さを指定します。“amount”: 数値 と書けば一定の強さの効果になります。
    -   “operation”: “効果の働き方” – 効果の増減の計算方法を指定します。
        -   “addition” – 増減結果 = 元の値 + amountの数値
        -   “multiply\_base” – 増減結果 = 元の値 + (元の値 × amountの数値)
        -   “multiply\_total” – 増減結果 = 元の値 × (1 + amountの数値)
    -   “slot”: \[“スロット名”\] – アイテムを持つ/装備する場所を指定します。“mainhand”,”offhand”,”head”,”chest”,”legs”,”feet”が指定できます。  
        **1つの効果に複数スロットを指定しても、適用されるのはランダムでどれか1つなのでご注意下さい!****
    

:::note
計算式についてはこちらのページが大変参考になりました: [Minecraft Japan Wiki – コマンド/データタグ](http://www26.atwiki.jp/minecraft/pages/1318.html#id_40150934 "Minecraft Japan Wiki - コマンド/データタグ")
:::
### 「ドロップ増加(looting)」エンチャントを使って倒した際のアイテム増加量を設定するには

```json
{
   "pools":[
      {
         "rolls":{
            "min":1,
            "max":5
         },
         "bonus_rolls":{
            "min":1,
            "max":3
         },
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:looting_enchant",
                     "count":5
                  }
               ]
            },
            {
               "type":"item",
               "name":"minecraft:gold_ingot",
               "weight":1,
               "quality":5,
               "functions":[
                  {
                     "function":"minecraft:looting_enchant",
                     "count":{
                        "min":2,
                        "max":10
                     }
                  }
               ]
            }
         ]
      }
   ]
}
```

▲“minecraft:looting\_enchant”というfunctionに“count”で値を設定すれば、**「ドロップ増加」**エンチャントの付いた剣でMobを倒した際に、`「ドロップ増加」のレベル × 設定した値` の分だけドロップアイテムの数が増えます。

一つの項目に何個も書いた場合は、数値が合計されます。

## 基本的な条件(conditions)の書き方

それぞれのアイテムにエンチャントを付けたり数を指定したりする方法はもうマスターできたかと思います。次は、**それぞれの「pool(まとまり)」やアイテムが出現する「条件」、すなわち「conditions」**の書き方を解説します。

なんと**「プレイヤーに倒された時だけダイヤモンドを落とす」「エンティティのスコアに応じてデータ値やNBTタグを決める」**など色々ハイテクなことが出来ちゃいます。うまく活用すれば可能性は無限大…!****

### プレイヤーに倒されたかどうかの条件

```json
{
   "pools":[
      {
         "rolls":5,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:stick",
               "weight":1
            }
         ],
         "conditions":[
            {
               "condition":"minecraft:killed_by_player",
               "inverse":true
            }
         ]
      },
      {
         "rolls":3,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1
            }
         ],
         "conditions":[
            {
               "condition":"minecraft:killed_by_player"
            }
         ]
      }
   ]
}
```
<p>▲「pool(まとまり)」を2つ用意しています。それぞれのpoolに<span>&#8220;conditions: []&#8221;</span>で**「このまとまりが出現する条件」**を設定してあります。</p>
<p>&#8220;minecraft:killed_by_player&#8221;というconditionでは、「プレイヤーに倒されたか」を条件に出来ます。**<span>&#8220;inverse&#8221;: true</span>と書けば条件を反転でき**、ここでは「プレイヤーに殺されていない場合は棒を出す」仕様になっています。</p>
<p>&nbsp;</p>

```json
{
   "pools":[
      {
         "rolls":3,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "conditions":[
                  {
                     "condition":"minecraft:killed_by_player"
                  }
               ]
            },
            {
               "type":"item",
               "name":"minecraft:stick",
               "weight":1,
               "conditions":[
                  {
                     "condition":"minecraft:killed_by_player",
                     "inverse":true
                  }
               ]
            }
         ]
      }
   ]
}
```

condition(条件)はpoolごとではなく`entries: []` 内の**項目ごとにも設定できます**。上記ルートテーブルではプレイヤーに倒されたらダイヤモンド、それ以外の場合は棒を落とします。

```json
{
   "pools":[
      {
         "rolls":1,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:set_name",
                     "name":"倒してくれてありがとう",
                     "conditions":[
                        {
                           "condition":"minecraft:killed_by_player"
                        }
                     ]
                  },
                  {
                     "function":"minecraft:set_name",
                     "name":"僕は自滅しちゃったよ",
                     "conditions":[
                        {
                           "condition":"minecraft:killed_by_player",
                           "inverse":true
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
```

▲さらになんと`functions: []`のfunctionそれぞれに条件を設定できるんです。**上記ルートテーブルでは、プレイヤーが倒した際は「倒してくれてありがとう」、自滅してドロップする時は「僕は自滅しちゃったよ」という風に**同じアイテムでも名前を死に方によって切り替える、という超絶ハイテクなことを実現しちゃってます。バニラでこんな事ができるようになるとは！

### それぞれのpool、項目、functionの出現確率を設定するには

```json
{
   "pools":[
      {
         "rolls":1,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:set_name",
                     "name":"70%の確率で出るダイヤモンド"
                  },
                  {
                     "function":"minecraft:set_lore",
                     "lore":[
                        {
                           "text":"50%の確率でこの説明文が追加される"
                        }
                     ],
                     "conditions":[
                        {
                           "condition":"minecraft:random_chance",
                           "chance":0.5
                        }
                     ]
                  }
               ],
               "conditions":[
                  {
                     "condition":"minecraft:random_chance",
                     "chance":0.7
                  }
               ]
            }
         ]
      }
   ]
}
```

▲“minecraft:random\_chance”というconditionを使えば、**“chance”で指定した値が出現確率になります。**“chance”は0~1まで指定可能で、例えば“chance”: 0.5なら50%の確率でそのpoolや項目やfunctionが適用されるわけです。

### 「ドロップ増加」エンチャント使用時の出現確率の増加量を設定するには

```json
{
   "pools":[
      {
         "rolls":1,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:set_name",
                     "name":"70%の確率で出るダイヤモンド"
                  },
                  {
                     "function":"minecraft:set_lore",
                     "lore":[
                        {
                           "text":"50%の確率でこの説明文が追加される"
                        }
                     ],
                     "conditions":[
                        {
                           "condition":"minecraft:random_chance_with_looting",
                           "chance":0.5,
                           "looting_multiplier":0.05
                        }
                     ]
                  }
               ],
               "conditions":[
                  {
                     "condition":"minecraft:random_chance_with_looting",
                     "chance":0.7,
                     "looting_multiplier":0.1
                  }
               ]
            }
         ]
      }
   ]
}
```

先程解説した“minecraft:random\_chance”を“minecraft:random\_chance\_with\_looting”に置き換えれば、追加で“looting\_multiplier”という値が設定可能になります。この“looting\_multiplier”は「ドロップ増加エンチャントのレベルに応じて増えるchance値の量」を意味しています。

[[dl|ドロップ増加エンチャント使用時の`random_chance`の量を求める式]]
|```
|出現確率: “chance”の値 + (“looting\_multiplier”の値 × ドロップ増加のレベル)
|```
|例えば本来の“chance”: 0.7のアイテムに`looting_multiplier”: 0.1`を設定して、ドロップ増加レベル3の剣で倒した場合は`0.7 + (0.1*3) = 1.0`ということで出現確率は100%になるんです。

### 倒した人/Mobや倒されたMobの状態(燃えているかどうか)を条件にするには

```json
{
   "pools":[
      {
         "rolls":1,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:set_name",
                     "name":"焼死した証",
                     "conditions":[
                        {
                           "condition":"minecraft:entity_properties",
                           "entity":"this",
                           "properties":{
                              "minecraft:on_fire":true
                           }
                        }
                     ]
                  },
                  {
                     "function":"minecraft:set_name",
                     "name":"焼死してない証",
                     "conditions":[
                        {
                           "condition":"minecraft:entity_properties",
                           "entity":"this",
                           "properties":{
                              "minecraft:on_fire":false
                           }
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
```

▲”minecraft:entity\_properties”という条件で、**倒した人/Mob、倒されたMobがどんな状態だったかを条件に**できます。“entity”に“this”と書けば倒されたMob、“killer”と書けばそいつを倒した他のMob、“killer\_player”と書けばそいつを倒したプレイヤーの状態を条件にします。**今のところ判定できるのは「火が付いているか: true/false」だけ**です。**

### 倒した人/Mobや倒されたMobのスコアボードの値を条件にするには

```json
{
   "pools":[
      {
         "rolls":1,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:diamond",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:set_name",
                     "name":"test1が1だった証",
                     "conditions":[
                        {
                           "condition":"minecraft:entity_scores",
                           "entity":"this",
                           "scores":{
                              "test1":1
                           }
                        }
                     ]
                  },
                  {
                     "function":"minecraft:set_name",
                     "name":"test1が1でtest2が1以上3以下だった証",
                     "conditions":[
                        {
                           "condition":"minecraft:entity_scores",
                           "entity":"this",
                           "scores":{
                              "test1":1,
                              "test2":{
                                 "min":1,
                                 "max":3
                              }
                           }
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
```

▲”minecraft:entity\_scores”を使えば、なんと倒されたMobなどの**スコアボードの値を条件にドロップアイテムを決められるんです!** これは革命的でしょ。entity\_propertiesの時と同様、”entity”に“this”と書けば倒されたMob、“killer”と書けばそいつを倒した他のMob、“killer\_player”と書けばそいつを倒したプレイヤーのスコアを条件にします。

“scores: \[\]”内には複数のオブジェクトを書くことができ、それぞれ最小値と最大値も設定できます。これとscoreboardコマンドを合わせて使えば、例えば**「○○を装備して倒せばダイヤモンドが落ちる!」**など複雑なシステムが作れますね。ワクワクしてきちゃった。**

## Mobを焼いて殺した際に精錬済みのアイテムが出てくるようにするには

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101325.jpg)

例えば牛を殺した際、普通なら生肉が出てきますが、焼いて殺せば焼き肉が出てきますよね。こんな**「焼死時は精錬したアイテムが出てくる」機能**をLoot tableで使ってみましょう。例えば**「原木」をドロップするルートテーブルがあるとすれば、焼死時は原木を精錬した「木炭」が出てくる**ようになります。****

```json
{
   "pools":[
      {
         "rolls":1,
         "entries":[
            {
               "type":"item",
               "name":"minecraft:log",
               "weight":1,
               "functions":[
                  {
                     "function":"minecraft:furnace_smelt",
                     "conditions":[
                        {
                           "condition":"minecraft:entity_properties",
                           "entity":"this",
                           "properties":{
                              "minecraft:on_fire":true
                           }
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
```
▲アイテムに応じた精錬済みアイテムを出すには、“minecraft:furnace\_smelt”というfunctionと、先程解説した“minecraft:entity\_properties”というcondition(条件)を合わせて使います。上記ルートテーブルをMobに設定すれば、**普通に死んだ場合は原木、燃え死んだ場合は木炭を落とします。**

[Part3では、アイテムが出てこない場合の対処法を解説します。 >>](./part3/)

## 参考にさせて頂いたページ様

**Loot table – Minecraft Wiki**  
[http://minecraft.gamepedia.com/Loot\_table](http://minecraft.gamepedia.com/Loot_table "Loot table – Minecraft Wiki")  
**1.9 – Custom Loot Tables – Minecraft Forum**  
[http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/command-blocks/2546347-1-9-custom-loot-tables](http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/command-blocks/2546347-1-9-custom-loot-tables "1.9 - Custom Loot Tables - Command Blocks - Redstone Discussion and Mechanisms - Minecraft Discussion - Minecraft Forum - Minecraft Forum")  
▲LootTableのJSONの記法が使用例とともに分かりやすく解説されています。Skylinerwさん、素晴らしい解説をありがとうございました!  
(その他、公式Wikiの様々なページの情報をもとに執筆しました。)
