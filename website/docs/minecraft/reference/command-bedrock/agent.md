# agent

|項目|内容|
|---|---|
|コマンド|`agent`|
|目的|教育版のエージェントを操作する|
| 必要な権限レベル | 1 |
|コマブロで実行|可能|
|適用対象|エンティティ|

:::info
ワールドの「教育版」設定をオンにしないと使えません。
:::

:::caution
WebSocketサーバー側のみで実行可能です。
:::

:::warning
JEでは使えません。
:::

## 構文

[[dl|agentを移動する]]
|```
|/agent move <方向>
|```

[[dl|agentを回転させる]]
|```
|/agent turn <向く方向>
|```

[[dl|agentに攻撃させる]]
|```
|/agent attack <方向>
|```

[[dl|agentを破壊する]]
|```
|/agent destroy <方向>
|```

[[dl|agentにアイテムをドロップさせる]]
|```
|/agent drop <スロット番号> <量> <方向>
|```

[[dl|agentに全部のアイテムをドロップさせる]]
|```
|/agent dropall <方向> <方向>
|```

[[dl|agentに調査をさせる]]
|```
|/agent inspect <方向>
|```

[[dl|agentにデータを調査させる]]
|```
|/agent inspectdata <方向>
|```
[[dl|agentに検知させる]]
|```
|/agent detect <方向>
|```
[[dl|agentにレッドストーンを検知させる]]
|```
|/agent detectredstone <方向>
|```

[[dl|agentのアイテムを移動する]]
|```
|/agent transfer <元のスロット番号> <量> <移動先のスロット番号>
|```

[[dl|agentを作成する]]
|```
|/agent create
|```

[[dl|agentをテレポートする]]
|```
|/agent tp <座標> <座標>
|```

[[dl|agentにアイテムを収集させる]]
|```
|/agent collect <座標>
|```

[[dl|agentをtillする]]
|```
|/agent till <方向>
|```

[[dl|agentにアイテムを設置させる]]
|```
|/agent place <スロット番号: 数値型> <方向>
|```

[[dl|agentのアイテムの数を調べる]]
|```
|/agent getitemcount <スロット番号: 数値型>
|```

[[dl|agentのアイテムのスペースを調べる]]
|```
|/agent getitemspace <スロット番号: 数値型>
|```

[[dl|agentのアイテムの詳細を調べる]]
|```
|/agent getitemdetail <スロット番号: 数値型>
|```

:::info
この情報の拡充をお願いします。
:::

---

ソース: https://minecraft.fandom.com/wiki/Commands/agent
