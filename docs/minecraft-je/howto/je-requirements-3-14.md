
---
title: 【注意喚起】3/14時点でJava版の最小要求スペックは更新されていません [Minecraft]
description: 「システム要求を変えました」とは言っていないんです。(変わるのは確実ですが、検証されていない)
---

## 21W10A

[https://feedback.minecraft.net/hc/en-us/articles/360057761252-Minecraft-Java-Edition-Snapshot-21w10a:embed:cite]

Java版1.17のSnapShot「21W10A」で、描画プロファイルが「OpenGL Core 3.2」に変更されました。

>Rendering is now using OpenGL 3.2 core profile. All fixed function rendering has been replaced with shader based rendering.

私は専門外なので詳しく書きませんが、**「固定機能レンダリング」が「シェーダーベースレンダリング」に変わった**のが最大の違いです。

>Shaders are now included for all supported render states. Any shader except for the blit shader can also be replaced in resource packs. For now replacing these shaders is not officially supported and the way it works may change in the future.

>The current rendering engine uses a system similar to the post processing shader pipeline. There are some differences between both system that cater to the slightly different requirements.

で、これなんですが

- blitシェーダー以外は置き換えられるようになった
- 描画エンジンがポストプロセスのシェーダーパイプラインに近いものに変わった
- 二つのシステムには、**僅かに違う要求に応じて一部違いがある**

という訳になるんですよ(cater to : 応じる)。**「システム要求を変えました」とは言っていないんです。(変わるのは確実ですが、検証されていない)**

## システム要求のページは中身変わってない

[https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-:embed:cite]

こちらに「Java版の最小要件」が書かれています。最終更新が3/13なので、一部のメディアに「変わってる！」と誤解されたんだと思います。

[https://web.archive.org/web/*/https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-:embed:cite]

しかし、**アーカイブ**を見てみましょう。

![20210314104010](https://images.ctfassets.net/44sq8tmkumx2/6hnV1tZ3kxzPH1MiCdiGpB/415d0feb8e8525db9ccafe33efe2449a/20210314104010.png)

**差分ゼロ**です。おそらく何も変えずに「更新ボタン」を押したせいで「最終更新」だけ変わったんだと思います。

ということで、はやとちりしないように注意しようねという記事でした。