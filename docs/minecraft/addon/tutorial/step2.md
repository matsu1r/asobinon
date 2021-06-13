---
title: ステップ2
---
ステップ2では、アドオンを作成するために必要な情報を作っていきます。。

## manifest.json
アドオンには、そのアドオンがどういったものかを示すファイルがあります:`manifest.json`です。
description、name、uuidには任意のもので上書きしてください。

```json
{
    "format_version": 1,
    "header": {
        "description": "アドオンの説明",
        "name": "アドオンの名前",
        "uuid": "ユニークなuuid",
        "version": [0, 0, 1]
    },
    "modules": [
        {
            "description": "使われない",
            "type": "data",
            "uuid": "ユニークなuuid",
            "version": [0, 0, 1]
        }
    ],
    "dependencies": [
        {
            "uuid": "ユニークなuuid",
            "version": [0, 0, 1]
        }
    ]
}
```

uuidは、アドオンを区別する識別子です。特に理由がなければ、[このサイト](https://www.uuidgenerator.net/version4)で生成したものを貼り付けるだけで結構です。

<details>
<summary>ここで使用するmanifest.json</summary>

```json
{
    "format_version": 1,
    "header": {
        "description": "バックアップを取らずに大事なワールドの大事な場所で、このアドオンを入れて、TNTを起爆してください。",
        "name": "TNTの威力が倍になるアドオン",
        "uuid": "f10fff41-4bda-430e-beea-ca74291bd603",
        "version": [0, 0, 1]
    },
    "modules": [
        {
            "description": "使われない",
            "type": "data",
            "uuid": "b84b57c7-d4c0-4b17-8aa4-bb566605427a",
            "version": [0, 0, 1]
        }
    ],
    "dependencies": [
        {
            "uuid": "34474503-212c-4efb-b555-98a1ae88832d",
            "version": [0, 0, 1]
        }
    ]
}
```
</details>

## pack_icon.png
アドオンのアイコン。特に書き換えたかったら書き換えてください。ここでは特に何もしません。

