
---
title: 「PCのビデオ設定がXboxOneに適用されてしまう」ゲームが発見される
description: ゲームプラットフォームとしてのXboxOneとWindows10は、限りなく近い存在である。両者の間で完全なクロスセーブ機能を備えたタイトルが年々増えており、「Bridge Constructor Portal」もその一つだ。ところで先日このゲームで、奇妙なことに「ビデオ設定が共有されてしまう」という問題が発見されたのだ。
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120530.jpg)

ゲームプラットフォームとしてのXboxOneとWindows10は、限りなく近い存在である。両者の間で完全なクロスセーブ機能を備えたタイトルが年々増えており、「Bridge Constructor Portal」もその一つだ。ところで先日このゲームで、奇妙なことに**「ビデオ設定が共有されてしまう」**という問題が発見されたのだ。

There’s a PC Game Pass title that changes the graphics settings on Xbox too • Eurogamer.net

[https://www.eurogamer.net/articles/digitalfoundry-2019-bridge-constructor-portal-pc-uwp-lets-you-change-xbox-settings](https://www.eurogamer.net/articles/digitalfoundry-2019-bridge-constructor-portal-pc-uwp-lets-you-change-xbox-settings)

[https://www.youtube.com/watch?v=-oZsL-iV8TE](https://www.youtube.com/watch?v=-oZsL-iV8TE)

Eurogamerのテック部門、Digital FoundryのAlex氏は、ある日Xboxゲームパスの対応タイトルを漁っている際に奇妙な現象に出くわす。「PC版の設定がクラウド経由でXboxOneに適用されている」というのだ。

このゲームはUWP(Universal Windows Platform)アプリケーションとしてXboxOne版とPC版が開発されているが、そのクラウドセーブの挙動が通常のゲームとは異なり、明らかに共有しちゃいけない部分まで共有してしまっているのだ。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120535.jpg)

例えばPC版でポストFXと影を「High」にし、アンチエイリアスを「8x MSAA」にする。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120539.jpg)

すると当然PC版は最も美しい状態でプレイできる。最上級のポストエフェクト、影、そして何よりマルチサンプルアンチエイリアスのサンプル数を「8」にしているのだから、非常になめらかな描画になるわけだ。(正直MSAAは8xより上げてもあまり変化がわからないけどね)

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120543.jpg)

そしてPC版を終了し、XboxOneで遊んでみると… あれ!? グラフィックが明らかに向上しているのである。**XboxOne版ではビデオ設定を細かく変更することはできないが、描画結果は明らかにPC版の設定を引き継いでしまっている**のだ。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120546.jpg)

すると当然パフォーマンスに影響が出る。Alex氏のハイエンドPCではなんともなかった「最高設定」は、XboxOne”X”ですら苦戦するような負荷になってしまい、フレームレートが15付近まで落ちてしまっている。開発者が意図しなかった設定で動かしてしまっているわけだ。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120550.jpg)

フレームレート検証のプロ集団、Digital Foundryの解析によると、XboxOneSでプレイする場合、「ポストFX」を「High」に切り替えるだけでフレームレートは30に固定されてしまう。さらにアンチエイリアスのサンプル数を最大まで上げると、フレームレートは「15」まで落ちてしまうとのことだ。

「ビジュアルの差に対してフレームレートが下がりすぎだ」と思うかもしれないが、これはBridge Constractor Portalの「ポストFX」設定があまりに大雑把であるが故の結果である。ポストFXを「High」に変えただけで、本来XboxOne版では使えない「オブジェクト毎のモーションブラー」「SSAO(隅っこの影を柔らかくするやつ)」が有効化されてしまうのだ。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120600.jpg)

ちなみに、すべての設定がPC版から引き継がれるわけではない。例えば「解像度」は当然XboxOneの本体設定に準拠するので、XboxOneXなら4KUHD、XboxOneSなら1080pで固定される。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120604.jpg)

フレームレート設定も同様、PC版でいくら上限を上げようとも、XboxOne本体が制限してしまう。ではXboxOneXの「120Hzモード」を使うとどうなるのか。Digital Founrdyによると、答えは「**時々60FPSを上回る**だけで、特筆すべきことはない」とのことだ。

Xbox Scarlett Won’t Just Have Prettier Graphics – GameSpot

[https://www.gamespot.com/articles/xbox-scarlett-wont-just-have-prettier-graphics/1100-6468806/](https://www.gamespot.com/articles/xbox-scarlett-wont-just-have-prettier-graphics/1100-6468806/)

次世代機のスペックについての噂を日々耳にする今日このごろ。Xboxのフィル・スペンサー氏は、「できる限り最高のフレームレート」が保証されることをGameSpotのインタビューで語った。

Bridge Constractor Portalでは、ミスによりPC版の設定がゲーム機で動いてしまった。次世代機ではスペックが向上することで、現世代よりもビデオ設定の自由度が広がるのではないかと、筆者は期待している。
