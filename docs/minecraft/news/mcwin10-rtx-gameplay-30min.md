---
title: これが2019年のマインクラフトだ。RTXオンの30分に渡るプレイ動画が公開
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120840.jpg)

Eurogamerのテック部門、Digital Foundryは、先日発表された「RTXをオンにしたWindows10版マインクラフト」の、**30分に渡るプレイ動画**を公開した。NvidiaとMojangの動画では映らなかった部分や、テクスチャの詳細など、「普通に遊ぶ場合にRTXはどう影響してくるのか」がよく分かる内容となっている。

[https://www.youtube.com/watch?v=opCDN2jkZaI](https://www.youtube.com/watch?v=opCDN2jkZaI)

Nvidia/Mojangがデモ用に作成したワールドを、コントローラーでプレイしている動画。いくつか驚きの場面があったので共有しておく。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120811.jpg)

こちらは大量のブロックが置いてあるわけではなく、1つのブロックから複数の光が発され、それぞれが反射して美しい光景を作り出している。リアルタイムで光の反射をシュミレートするRTXのおかげでこのような光の表現ができるようになった。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120820.jpg)

「反射」といえば、この場面も見てほしい。上下左右対称に作られた部屋。そしてほとんどのブロックが光を反射しているため、まるでガラスの下にもう一つ部屋があるような錯覚に陥ってしまう。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120828.jpg)

「反射」の効果が最もわかりやすいのが「水」だ。こちらの場面では、プレイヤーの後ろの光景が流水に反射している。しかし、**マインクラフトの仕様上「プレイヤーの後ろ」はあまり遠くまで描画されず、不自然な反射になってしまっている。**開発が進んで改善されるのを期待しよう。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120824.jpg)

水とは違い、**部分的にだけ光を反射するブロックもある。**例えば「タル」ブロックの鉄でできた部分は、このように外から差し込む光を反射できる。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120840.jpg)

まだ開発中だが、この時点ではあらゆるブロックに光沢が付いているようだ。例えば「砂岩」ブロックもこの通り空の色を反射している。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120817.jpg)

ちなみにこのデモでは一部のブロックに「1024×1024」の高解像度テクスチャが設定されており、同時に法線マップによって凹凸も表現されている。**リアルな質感の表現はJava版のシェーダーで既に実現されているが、RTXと組み合わさることによって、写実性がより増している**のがよく分かる。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120836.jpg)

Java版のシェーダーでは見られない「木漏れ日」などの表現ができるのもRTXの強みだ。光の進む方向をシミュレートすることで、建築の形状に応じた光がまっすぐと差し込むようになっている。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120844.jpg)

正直言って過剰な気もするが、日光がこれほど美しく表現できているシェーダーはこれまで見たことがない。所謂「空気感」というか、そんなものを感じられる。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120847.jpg)

しかし、「遠景の美しさ」に関しては、現時点でJava版のシェーダーに軍配が上がるだろう。**建物の中では非常に写実的な画になるのに対して、外に出るといまいち現実感がない。**ワールドが「RTXの効果のアピール」という目的で制作されていることも原因の一つだろう。

[https://www.napoan.com/nvidia-mojang-win10-shader/](https://www.napoan.com/nvidia-mojang-win10-shader/)

そもそもRTX対応グラフィックボードが手元にないと恩恵を受けられない今回のプロジェクト。世界一売れたPCゲームであるマインクラフトが、**RTXの普及にどこまで貢献できるか**楽しみである。
