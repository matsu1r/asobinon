# alwaysday

|項目|内容|
|---|---|
|コマンド|`alwaysday`|
|目的|昼夜サイクル停止状態の有効・無効を切り替える|
|OP権限|必要|
|コマブロで実行|可能|
|適用対象|ワールド|

## 構文

[[dl|昼夜サイクルを停止する]]
|```
|/alwaysday
|```

[[dl|昼夜サイクル停止状態を有効または無効にする]]
|```
|/alwaysday [true|false]
|```

## 実行結果

`/alwaysday` または `/alwaysday true` を実行すると、現在の昼夜サイクルの状態に関わらず昼夜サイクルは**停止され**、同時に時間が5000(正午)にセットされる。("常に昼間"の状態になる)

`/alwaysday false` を実行すると、昼夜サイクルが有効になり、太陽・月が動き出す。(通常の状態になる) **※trueで動き出すわけではなく、trueで停止されるので注意。**

## エイリアス

`/alwaysday` の代わりに、`/daylock` と書くことも出来る。

## あわせて知っておきたいコマンド

- [/daylock](/docs/minecraft/reference/command-bedrock/daylock) ― awaysdayコマンドのエイリアス(代替)
- [/gamerule](/docs/minecraft/reference/command-bedrock/gamerule) ― 時間や天候の変化を含むゲームルールを設定できる
- [/time](/docs/minecraft/reference/command-bedrock/time) ― 時間を変更・取得できる
