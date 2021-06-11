
---
title: 大型アップデート「1.2」内容まとめ – ゲーム機版と統合、大量の新要素がやって来た
description: “Better Together Update” ― PEとゲーム機版が1つになる時がやって来ました。旗や防具立て、色付きガラスなどの新アイテム、ボーナスチェストなどの新システムや新コマンドなど… この記事では、マイクラPE/Windows10版のバージョン「1.2」のアップデート内容をまとめました。 開発者さんのツイート、公式Wikiの情報を翻訳しつつ画像付きで詳しくまとめています。
slug: /minecraft/update/v1-2/v0/
---

![PE12アップデートまとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105655.png)

アップデート配信はいつ?

*   iOS: リリースされました
*   Android: リリースされました
*   Windows10: 　リリースされました
*   XboxOne: 統合版を順次配信中

(なおSwitch版はネットシステムの開発が終わらず「2018年」にリリース)

[<< バージョン1.1.3の内容まとめ](https://www.napoan.com/pe-update-113/)  
[バージョン1.2.1の内容まとめ >>](https://www.napoan.com/bedrock-update-121/)

“Better Together Update” ― PEとゲーム機版が1つになる時がやって来ました。__旗や防具立て、色付きガラスなどの新アイテム__、__ボーナスチェストなどの新システムや新コマンド__など… __この記事では、マイクラPE/Windows10版のバージョン「1.2」のアップデート内容をまとめました。__ 開発者さんのツイート、[公式Wikiの情報](http://minecraft.gamepedia.com/Pocket_Edition_1.2)を翻訳しつつ画像付きで詳しくまとめています。

__最終更新：__  
__アイテムがまとまりやすくなった事について追記__

あわせて読みたい: “PC版”とマルチ←できません “BetterTogetherUpdate”のよくある誤解

[![BTUよくある誤解](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122155.png)  
https://www.napoan.com/misunderstanding-of-btu/](//exr-nap.sakura.ne.jp/www.napoan.com/misunderstanding-of-btu/)

## 参考にさせて頂いたページ様

__Changelogs ― Minecraft Feedback – Official Minecraft Feedback Site__  
[https://feedback.minecraft.net/knowledgebase/topics/126030-changelogs](https://feedback.minecraft.net/knowledgebase/topics/126030-changelogs)  
__ALL THE NEWS FROM E3! | Minecraft (公式サイト)__  
[https://minecraft.net/en-us/article/all-news-e3](https://minecraft.net/en-us/article/all-news-e3)  
__Pocket Edition 1.2 – Official Minecraft Wiki__  
[https://minecraft.gamepedia.com/Pocket\_Edition\_1.2](https://minecraft.gamepedia.com/Pocket_Edition_1.2)  
__Jason Major(@argo\_major)さん | Twitter__  
[https://twitter.com/argo\_major](https://twitter.com/argo_major)  
__Tommaso Checchi(@*tomcc)さん | Twitter*__*  
[https://twitter.com/](https://twitter.com/_tomcc)*[tomcc](https://twitter.com/_tomcc)  
他、各種アイテムの公式Wikiの解説を参考にしました

SPECIAL THANKS: Yuzu氏(@[y\_red\_mcpe](https://twitter.com/y_red_mcpe))  
様々なアップデート情報を素早く提供して頂きました。本当にありがとうございます!  
 

## 目次

*   [システム・設定など、ゲームの全体的なことに関する新要素と変更点](#general)
    *   [PE/Windows10版のタイトルが「Minecraft」に変更された](#together)
    *   [XboxOneとクロスマルチプレイができるように](#multiplayer)
    *   [サーバーブラウザが追加、公開されたサーバーでマルチプレイできる](#server-browser)
    *   [端末内でワールドをコピー(複製)できるように New!!](#world-copy)
    *   [プレイヤーごとに細かく行動を制限できるように](#player-permission)
    *   [ハイエンドなデバイスでデフォルトの最大プレイヤー数が8人に](#player-limit)
    *   [ワールドの公開範囲を「招待だけ」「フレンドだけ」「フレンドのフレンドまで」に設定可能に](#xboxlive-setting)
    *   [「遊び方」画面が追加、ゲーム機版のように操作説明などが読める](#howtoplay)
    *   [ロード画面でTipsやトリビアが表示されるように](#load-tips)
    *   [ポーズメニューでスキンを変更できるように](#pause-skin)
    *   [ワールド生成時に地図とボーナスチェストを生成できるように](#start-bonus)
    *   [インベントリ保持など色々なゲームルールをONOFFできるように 内容更新!!](#world-gamerule)
    *   [ゲームルールを変更することで現在位置の座標を表示できるように New!!](#show-coordinates)
    *   [チャットをミュート可能になった](#mute-chat)
    *   [ゲーム機版のように画面左上にプレイヤーの人形が表示されるように、非表示も可能](#player-doll)
    *   [ブロックに照準を合わせた時、PC版のような黒い枠線を表示できるようになった](#block-outline)
    *   [葉っぱや雲の描画をビデオ設定で切替可能に](#leaves-clouds)
    *   [葉っぱの描画を”描画優先”にするとハイエンドデバイスでは透明になるように New!!](#jungle-leaves)
    *   [ゲーム内のプレイヤー名の表示がON/OFF可能に New!!](#player-name)
    *   [アイテム一覧のタブのアイコンが変更された](#creative-tab)
    *   [ブロックをスポイトするボタンの割当を変更できるようになった](#spoit-bind)
    *   [エンドポータルに効果音が追加された New!!](#endportal-sounds)
    *   [水中でJava版のような水のパーティクルが表示されるようになった](#underwater-particles)
    *   [一部のユーザーのFPSを向上させる「Plutonium mode」が試験的に実装→正式実装は1.3に 内容更新!!](#plutonium-mode)
    *   [大半の効果音や音楽の音量が調整され、例えば雨が静かに New!!](#sound-tweaks)
*   [ゲームプレイに関する追加/変更点](/pe-update-12/#gameplay)
    *   [インベントリ・作業台のGUIが進化、手動でクラフト可能に 内容更新!!](#crafting-screen)
    *   [オフハンド(利き手と反対の手)に地図を持てるようになった](#offhand-map)
    *   [醸造台で醸造するときブレイズパウダーが必要に](#blazepowder-slot)
    *   [かまどに1個しかバケツを置けないようになった New!!](#furnace-bucket)
    *   [難易度がピースフルの場合、ベッドの周りに敵Mobがいても眠れるようになった](#peaceful-bed)
    *   [Androidでも画面上にメニューを開くボタンが表示されるように](#pause-android)
    *   [金床での地図の作成と編集方法がいくつか改善された New!!](#map-anvil-tweaks)
    *   [アイテムを拾った時にアイコンがぽよんと動くように](#pickup-anime)
    *   [ドロップしたアイテムがまとまるようになった New!!](#dropped-items)
*   [ワールドの生成(ダンジョンや構造物)に関する追加/変更点](/pe-update-12/2/#world)
    *   [ついに「渓谷(峡谷)」が生成されるように](/pe-update-12/2/#ravines)
    *   [高度の高い場所では雨が雪に変わるように](/pe-update-12/2/#temperature)
    *   [エンドシティに色つきガラスと旗が生成されるように](/pe-update-12/2/#stained-and-banner-in-endcity)
    *   [森の洋館の床の木材がオークからシラカバに変わった](/pe-update-12/2/#woodland-floor)
*   [エンティティ(Mob,乗り物など)に関する追加/変更点](/pe-update-12/2/#entity)
    *   [「オウム」を追加](/pe-update-12/2/#parrot)
    *   [Mobの湧き量が増加 New!!](/pe-update-12/2/#mob-increase)
    *   [クリーパーとガストの湧き数が5×5チャンクの範囲内で制限されるように New!!](/pe-update-12/2/#mob-spawn-limit)
    *   [Mobがサボテン、炎、溶岩を避けるように](/pe-update-12/2/#mobs-avoid)
    *   [ムーシュルーム(キノコ牛)は菌糸ブロックの上でのみスポーンするように New!!](/pe-update-12/2/#mooshroom)
    *   [ウィッチがマグマブロックの上で火炎耐性ポーションを飲むようになった New!!](/pe-update-12/2/#witch)
    *   [スケルトン、ストレイ、ゾンビピッグマンがエンチャントされた防具・武器を持ってスポーンするように New!!](/pe-update-12/2/#enchanted-spawn)
    *   [プレイヤーが離れた後や、Mobが乗っている時にボートは動かないようになった New!!](/pe-update-12/2/#boat-move)
    *   [スケルトン馬(ガイコツ馬)にサドルを付けられるようになった New!!](/pe-update-12/2/#skeleton-horse)
    *   [トロッコに乗りながら矢を射ったり食べ物を食べたりできるようになった New!!](/pe-update-12/2/#shoot-and-eat-in-minecart)
*   [ブロックやアイテムの追加、変更点](/pe-update-12/3/#block-and-item)
    *   [「旗」を追加](/pe-update-12/3/#banner)
    *   [「色付きガラス」「色付きガラス板」(翻訳:ステンドグラス)を追  
        加](/pe-update-12/3/#stained-glass)
    *   [「ジュークボックス」を追加](/pe-update-12/3/#jukebox)
    *   [「レコード」を追加](/pe-update-12/3/#music-disk)
    *   [「防具立て」を追加](/pe-update-12/3/#armor-stand)
    *   [「本と羽ペン」を追加](/pe-update-12/3/#book)
    *   [「花火の星」「ロケット花火」を追加](/pe-update-12/3/#firework)
    *   [「粗い土」を追加、さらにクワを使えば普通の土になる!](/pe-update-12/3/#coarse-dirt)
    *   [ストラクチャーブロックが追加。なんと3Dモデルを作成してアップロードできる](/pe-update-12/3/#structure_block)
    *   [村人ゾンビのスポーンエッグが追加 New!!](/pe-update-12/3/#zombie-villager)
    *   [地図上の他のプレイヤーの位置に顔のアイコンが表示されるようになった](/pe-update-12/3/#map-icon)
    *   [氷ブロックが半透明に](/pe-update-12/3/#ice)
    *   [地図はディメンションに関係なく自分の位置を示してくれるように New!!](/pe-update-12/3/#map-dimension)
    *   [グロウストーンと海のランタンの上にレッドストーンを置けるように](/pe-update-12/3/#glow-lantern-rs)
    *   [鉄の柵を1つだけ置くと棒状になるように](/pe-update-12/3/#iron-fence)
    *   [観察者(オブザーバー)ブロックのテクスチャがJava版と同じものに](/pe-update-12/3/#observer)
*   [コマンド、アドオン(ビヘイビアーパック/リソースパック)の追加/変更点](/pe-update-12/4/#command)
    *   [チャット画面に、コマンドを楽に入力できるボタンが追加](/pe-update-12/4/#command-wip)
    *   [コマンドを書く時、引数なども自動補完できるように](/pe-update-12/4/#auto-complete)
    *   [コマンドを実行したエンティティを指定する「@s」セレクターが使えるように](/pe-update-12/4/#s-selector)
    *   [「^」を付けて相対座標を書くことで、エンティティの向いている向きを基準に位置を指定できるように](/pe-update-12/4/#relative-direction)
    *   [tpコマンドで、テレポート後に向く方向をエンティティや座標で指定できるように](/pe-update-12/4/#tp-facing)
    *   [「alwaysday」「daylock」コマンドが追加、昼夜サイクルを止める New!!](/pe-update-12/4/#day-command)
    *   [「tickingarea」コマンドが追加、常時読み込む範囲を名前付きで設定できる](/pe-update-12/4/#tickingarea)
    *   [エンティティに「tick\_world」というコンポーネントが使えるように](/pe-update-12/4/#tick-world)

## システム・設定など、ゲームの全体的なことに関する新要素と変更点

### PE/Windows10版のタイトルが「Minecraft」に変更された

さようなら「マイクラPE」。こんにちは「Minecraft」。

[![さようならPE](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105655.png)  
https://www.napoan.com/goodbye-pe-hello-minecraft/](//exr-nap.sakura.ne.jp/www.napoan.com/goodbye-pe-hello-minecraft/)

![これが新しいロゴ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113528.png)

*   「マインクラフトPE」は「マインクラフト」になった
*   正確には__「Minecraft: Pocket Edition」が「Minecraft」に__なった
*   __PEと一緒に、Win10版・VR版も「Minecraft」というタイトルに変更された__

![ロゴが変わった](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093447.png)

*   従来の”PC版”は「Java Edition」という名称に変更されている
*   __くれぐれも”PEがPC版と同じになった”という解釈をしないように。__スマホnapoanと”Java版”は、__ゲーム内容もシステムもまるっきり違う__ことを常に意識しよう

![よくわかるBTU](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208091112.png)

*   __NintendoSwitchとXboxOneには、[新しいゲームとして「Minecraft」が追加配信される](https://www.napoan.com/nintendoswitch-will-receive-minecraft-as-new-game/)__
*   ざっくり言うと__ゲーム機でPEと同じ仕様napoanが動くようになったということだ__
*   ソニーがクロスマルチプレイへの参加を拒否しているため、__ソニーが受け入れない限りPS4に統合版は配信されない__

![これからのマインクラフトのグループ](https://www.napoan.com/wp-content/uploads/2017/09/c2818d43bec9e6b7a3baa114805e1db6.png)

*   これからのマインクラフトは、▲の4つのグループに分かれる。
*   決して”メイン”のプラットフォームは存在しないので注意
*   当記事ではPEから進化した「Minecraft」を__「統合版」「Bedrock版」という呼称で呼ぶ__のでご了承願いたい

### XboxOneとクロスマルチプレイができるように

遠く離れた人とマルチプレイする手順の解説

[![Bedrockフレンドマルチ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105655.png)  
https://www.napoan.com/bedrock-friend-multiplayer-guide/](//exr-nap.sakura.ne.jp/www.napoan.com/bedrock-friend-multiplayer-guide/)

*   __XboxOneユーザーと一緒にマルチプレイできるようになった。__
*   XboxOneの場合は、新しく配信される「Minecraft」を起動すれば、他のプラットフォームのプレイヤーと一緒にマルチプレイできる。
    *   従来の「Edition」付きのほうを起動してもクロスマルチプレイはできないので注意

[![](https://www.napoan.com/wp-content/uploads/2017/09/2017-09-21-20.29.54-Google-Chrome-napoan.com__szyygo.jfif)](https://www.napoan.com/wp-content/uploads/2017/09/2017-09-21-20.29.54-Google-Chrome-napoan.com__szyygo.jfif)

*   なお更新履歴に「Windows10PC」と書かれているが、__おなじみの「PC版(Java版)」ではなくWindows10専用のアプリ版「Minecraft」とマルチプレイできる__ということなので注意
    *   Win10とのマルチプレイは以前からできていた
*   __プレステ版はソニーがクロスマルチプレイを受け入れなかったため、新バージョンが配信されない。__今後どうなるかはマイクロソフトとソニーの協議次第だ

NintendoSwitchの統合版は配信が延期された

__統合版「Minecraft」のNintendoSwitchへの配信は「2018年」に延期された。__つまり、スイッチは他のプラットフォームより遅れてクロスマルチプレイに参加することになる。

### サーバーブラウザが追加、公開されたサーバーでマルチプレイできる

![サーバーブラウザ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110205.jpg)

*   「サーバーブラウザ」画面が追加された
*   __リリース時は「Lifeboat」「Mineplex」「InPvP」「Cubecraft」__の4つの有名サーバーがリストに並ぶ予定だ
*   これらのサーバーはRealmsとは異なり、全プレイヤーに公開されている。__ついにJava版のようなオープンなマルチプレイができるようになった__のだ
*   サーバーブラウザには今後もサーバーが追加されていく予定
*   __子供のサーバーへのアクセスを任意で制限できる__機能も追加される

### 端末内でワールドをコピー(複製)できるように

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093425.png) ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093429.png)

*   ワールド編集画面の一番下のボタンから、__ワールドをコピーできるように__なった。
*   コピーすると、「のコピー」という名前が付いたワールドが追加される。

### プレイヤーごとに細かく行動を制限できるように

![プレイヤーの権限ボタン](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113531.png)

*   ポーズメニューのプレイヤー名の右に、__プレイヤーの権限レベルを示すマーク__が表示されるようになった
*   タップすると各プレイヤーの権限設定画面が開く

![権限レベル](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105429.png)

*   権限には__「ビジター」「メンバー」「オペレーター」の三段階と、「カスタム」がある。__
*   ビジター、メンバー、オペレーターそれぞれにできることがあらかじめ設定されている
*   「カスタム」を選べば、以下の権限を自由に個別にONOFFできる。
    *   建築および採掘
    *   ドアおよびスイッチの使用
    *   入れ物の開閉
    *   プレイヤーへの攻撃
    *   モブへの攻撃
    *   オペレーター
    *   テレポート
*   「オペレーター」＝OP権限を持つプレイヤーは、他のOP権限を持つプレイヤーが入力したコマンドについてのメッセージを受信する

### ハイエンドなデバイスでデフォルトの最大プレイヤー数が8人に

*   __ハイエンドなデバイスで、デフォルトの最大プレイヤー数が5人→8人に変更された。__
*   「ハイエンドなデバイス」が具体的にどんな端末を指しているかは不明
*   最大プレイヤー数は/setmaxplayersコマンドで変更できる

### ワールドの公開範囲を「招待だけ」「フレンドだけ」「フレンドのフレンドまで」に設定可能に

![ワールドの公開範囲](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111254.png)

*   設定画面→「マルチプレイ」で、ワールドの公開範囲をより細かく設定可能になった
*   __「招待だけ」「フレンドだけ(勝手に入れる)」「フレンドのフレンドまで(勝手に入れる)」__から選べる

### 「遊び方」画面が追加、ゲーム機版のように操作説明などが読める

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101016.png)

*   __「遊び方」__画面が追加された
*   タイトル画面の?マークか、ポーズメニューからアクセスできる
*   ゲーム機版のそれのように、__複数のページに分かれた説明書__のようなもの
*   「基本」カテゴリの中に「更新履歴」「基本」「基本以上のこと」「ゲーム設定」「本と羽ペン」「武器」などのページがある

### ロード画面でTipsやトリビアが表示されるように

![ロード画面](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113539.png)

*   __従来のゲーム機版のようなロード画面__が実装された
*   マイクラに関する色々な知識を教えてくれるぞ

### ポーズメニューでスキンを変更できるように

![ポーズメニューでスキン変更](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113555.png)

*   ポーズメニューに自分のスキンが表示されるようになり、下のボタンからスキン変更もできる

### ワールド生成時に地図とボーナスチェストを生成できるように

![ワールド生成時の設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103518.png)

*   ワールド生成時に__「地図」「ボーナスチェスト」__をONにできるようになった

![初期地図](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123235.png)

*   地図をONにすれば、ゲーム機版のように最初から地図を持った状態でゲームスタートできる
*   しかし最初から手に持っているわけではなく、インベントリから取り出す必要がある

![ボーナスチェスト](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111107.png)

*   ボーナスチェストにはいくつかの道具などのアイテムが入っている。内容は[こちら](https://minecraft-ja.gamepedia.com/チェスト#ボーナスチェスト)を参照してほしい
*   従来のゲーム機版と内容が揃えられており、Java版と違って苗木なども出てくる

### インベントリ保持など色々なゲームルールをONOFFできるように

![ワールドのゲームルール](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103335.png)

*   ワールド生成時に__いくつかのゲームルール__を設定できるようになった
*   設定できるゲームルールは以下の通り
*   なお、__「チート」をONにしておかないと他のゲームルールの変更ができない。__

設定できる項目一覧

項目名

説明

チートの実行

コマンドを使えるか否か (他のゲームルールの変更にも必要)

座標の表示

左上に現在位置のx,y,z座標を表示するか否か

常に昼間

太陽と月が動き月の形が変化するか否か (OFFだと太陽と月の動きが止まる)

昼夜サイクル有

太陽と月が動き月の形が変化するか否か (OFFだと太陽と月の動きが止まる)

火の延焼

火が勝手に燃え広がり消えるか否か (OFFだと火が同じ位置にとどまる)

TNT 火薬の爆発

TNTが爆発するか否

持ち物の保持

死んでもインベントリの中身が保持されるか否か

モブの出現

Mobが自然にスポーンするか否か

自然再生

体力が自然回復するか否か

モブのアイテムドロップ

Mobがアイテムをドロップするか否か

モブによる妨害

クリーパー、ゾンビ、エンダーマン、ガスト、ウィザー、エンダードラゴン、ウサギ、ヒツジ、村人がブロックに変更を及ぼせるか否か & ゾンビ、スケルトン、ゾンビピッグマンがアイテムを拾えるか否か

タイルからのドロップ

ブロックがアイテムをドロップするか否か

エンティティのアイテムドロップ

Mobではないエンティティ(トロッコ等)がアイテムをドロップするか否か

天候の変化

天気が自然に変化するか否か

![オペレーター権限が必要](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113601.png)

*   これらの設定は、ワールドに入ってプレイ中にも設定画面から変更できる
*   ただし、__ゲームルールの変更には「オペレーター」権限が必要__

### ゲームルールを変更することで現在位置の座標を表示できるように

![座標を表示する設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110059.png)

*   先述したゲームルールの中には、「座標の表示」という項目がある

![座標が表示されている様子](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121411.png)

*   この設定がONになっているワールドでは、__チャットが表示される下に現在位置の座標が表示される。__
*   座標はx座標,y座標,z座標の順番で表示される

現在位置の座標を表示するゲームルールを有効にするコマンド

__/gamerule showcoordinates true__

*   ワールド編集画面や設定画面から変更しなくても、上記のコマンドを実行すれば座標の表示をONにできる
*   非表示にしたいときは__/gamerule showcoordinates false__を実行しよう

### チャットをミュート可能になった

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123307.png)

*   チャット画面右上のスイッチをON/OFFでチャットをミュート(非表示)にできるようになった

### ゲーム機版のように画面左上にプレイヤーの人形が表示されるように、非表示も可能

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113851.png)

*   走っている時や飛行中、滑空中に画面の左上に__プレイヤーの人形__が表示されるようになった

![人形表示オフ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113857.png)

*   設定→ビデオ→__「人形表示をオフにする」__から、非表示にできる

### ブロックに照準を合わせた時、PC版のような黒い枠線を表示できるようになった

![ブロックの枠](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113544.png)

*   黒い枠線を表示するには、__設定→「ビデオ」→「選択範囲をハイライト」をON__にする必要がある
*   OFFにすると従来のように選択中のブロックが白っぽくなる

### 葉っぱや雲の描画をビデオ設定で切替可能に

![葉っぱと雲の設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113552.png)

*   設定画面→「ビデオ」で、葉っぱと雲の表示を個別に切り替え可能になった

### 葉っぱの描画を”描画優先”にするとハイエンドデバイスでは透明になるように

*   ハイスペックな端末では、葉っぱの描画設定を綺麗な方に切り替えるとジャングルの葉が透明に描画されるように

### ゲーム内のプレイヤー名の表示がON/OFF可能に

![プレイヤー名表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093516.png)

*   ビデオ設定にゲーム内プレイヤーの名前の表示が追加された。
*   マルチプレイ時の__頭上の名前を表示/非表示にできる__

### アイテム一覧のタブのアイコンが変更された

![新アイコン](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105410.png)

*   クリエイティブモードのアイテム一覧画面の、タブのアイコンが変更された
*   これらの新アイコンはクラフト画面のレシピブックのタブにも使われている
*   マイクラ開発メンバーのようなドット絵のセンスが欲しい

### ブロックをスポイトするボタンの割当を変更できるようになった

![ブロックスポイトのボタン割り当て](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113631.png)

*   設定画面の「コントローラー」タブのボタン割り当てで、__ブロックをスポイトするボタンの割当を変更できるように__なった
*   Xbox版開発チームからの依頼で紹介したようで、Xbox版の内容が高い次元でPEと統合されていることが伺える

### エンドポータルに効果音が追加された

*   __エンドポータルの枠にエンダーアイをはめたとき、エンドポータルを出現させたとき__にそれぞれ固有の効果音が鳴るようになった
    *   前者は陶器を叩くような音、後者は雷が落ちたように轟く大きな音

### 水中でJava版のような水のパーティクルが表示されるようになった

![水中のエフェクト](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113734.png)

*   水中でJava版のような水色のパーティクルが表示されるようになった

### 一部のユーザーのFPSを向上させる「Plutonium mode」が試験的に実装→正式実装は1.3に

![Plutonium Mode](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113809.png)

*   \[2017/09/17追記\]この機能は__バージョン1.3で正式実装__とのこと。([ソース](https://twitter.com/_tomcc/status/909227629517037569))
*   ベータ版Build5で、ビデオ設定画面に__「Plutonium Mode」__が試験的に実装された
*   フィードバックサイトの更新履歴によると「いくつかのユーザーのFPSを向上させるとても試験的な設定」とのこと。
*   Tommaso氏の[こちらのツイート](https://twitter.com/_tomcc/status/909228289419468800)によると、ローカルサーバーを別のスレッドで処理することでゲームの動作を軽くするとのこと。

### 大半の効果音や音楽の音量が調整され、例えば雨が静かに

*   大半のSE(効果音)、音楽のバランスが調整された。
*   例えば、雨は以前より静かになった。

## ゲームプレイに関する追加/変更点

### インベントリ・作業台のGUIが進化、手動でクラフト可能に

![新しいインベントリ画面](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208114021.png)

*   インベントリ画面・作業台画面のデザインがリニューアルされた
*   __クラフト画面右側のグリッドに、アイテムを自分で置けるように__なった
*   __左側はレシピブック__となっており、__レシピブックのアイテムをタップすると自動でグリッドにアイテムが置かれる。__
*   装備品の画面のタブは右下に移動した
*   コントローラー操作の場合、左スティックを押し込むと、カーソルをレシピブックとインベントリの間で切り替えられるようになった

![アニメーションすごい](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123845.gif)

*   レシピブックからアイテムを選択すると、アイテムアイコンがかっこよく動く

![クリエイティブモードのアイテム一覧](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124129.png)

*   クリエイティブモードの場合、右のボタンを押してアイテム一覧を全画面表示できる
*   またクリエイティブモードのアイテム一覧では、木材や羊毛が1つにまとめて表示される

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103254.png)

*   右上の？マークのボタンから、「遊び方」内のクラフトの説明のページへ飛べる

![レシピブック非表示](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208114016.png)

*   設定でUIプロフィールを「クラシック」にしている場合、レシピブック(アイテム一覧)を非表示にできる
*   インベントリ画面と作業台画面のレシピブックの表示/非表示はそれぞれ別で保存される

### オフハンド(利き手と反対の手)に地図を持てるようになった

![オフハンドに地図](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121507.png)

*   オフハンドスロットに、矢や不死のトーテムに加え__地図をセットできるように__なった
*   ただ、ホットバーにオフハンドスロットはまだ表示されていない

### 醸造台で醸造するときブレイズパウダーが必要に

![醸造台のブレイズパウダー](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113548.png)

*   醸造台で醸造する際、燃料としてブレイズパウダーが必要になった

### かまどに1個しかバケツを置けないようになった

*   今まではなぜか複数個置けていたが、かまどには__同時に1個しかバケツを置けないように__なった。

### 難易度がピースフルの場合、ベッドの周りに敵Mobがいても眠れるようになった

*   難易度がピースフルの場合、ベッドの周りに敵Mobがいても眠れるようになった

### Androidでも画面上にメニューを開くボタンが表示されるように

![Androidメニュー開くボタン](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124015.png)

*   Androidでも、iOSのように__画面の上部にメニューを開くボタンが表示されるように__なった
*   一時停止のアイコンが付いているが、__マルチプレイヤーが有効なワールドではメニューを開いてもゲームは一時停止しない__ので注意

### 金床での地図の作成と編集方法がいくつか改善された

![いきなりまっさら](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208093440.png)

*   地図を作成する前に、__空っぽの地図の段階から、金床でコンパスを追加できるようになった。__(空っぽの地図にコンパスを追加すると「まっさらな地図」になる)
*   金床で地図の範囲を広げたり、名前を変更したりする時、経験値レベルのみ消費するようになった。

### アイテムを拾った時にアイコンがぽよんと動くように

*   アイテムを拾った時、Java版のようにアイテムのアイコンがぽよんとアニメーションするようになった

### ドロップしたアイテムがまとまるようになった

*   ドロップした(落とした)アイテムが、同じ種類ならまとまるようになった。

[目次へ戻る▲](#mokuzi)  
[__記事はまだ続きます!__ ワールドの生成や新Mobに関しては2ページ目へ >>](/pe-update-12/2/)

## ワールドの生成(ダンジョンや構造物)に関する追加/変更点

### ついに「渓谷(峡谷)」が生成されるように

![渓谷](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113605.png)

*   ついに__「渓谷(峡谷)」__が生成されるようになった。何年待ったことか…

おすすめの「渓谷(峡谷)」のシード値はこちら▼

[![PE12アップデートまとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105655.png)  
https://www.napoan.com/bedrock-ravine-seeds/](https://www.napoan.com/bedrock-ravine-seeds/)

*   村やスポーン部屋がセットになっているなど、レアな渓谷のシード値をまとめた。▲
*   ぜひ上記記事もあわせて読んでほしい。(宣伝)

### 高度の高い場所では雨が雪に変わるように

![高度が高い場所に雪が](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113611.png)

*   高度が高い場所では雨の代わりに雪が降るようになった

### エンドシティに色つきガラスと旗が生成されるように

*   色付きガラスと旗が実装されたため、Java版のようにエンドシティの建物に色つきガラスと旗が付くようになった

### 森の洋館の床の木材がオークからシラカバに変わった

![森の洋館の床](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113817.png)

*   森の洋館(Woodland Mansion)の床の木材の種類が、樫から白樺に変わった

## エンティティ(Mob,乗り物など)に関する追加/変更点

### 「オウム」を追加、ダンスも踊るぞ!

![オウム](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208105043.png)

*   新Mob__「オウム」__が追加された
*   ジャングルにスポーンする
*   オウムのHPは6(?x3)
*   倒すと羽を1~2個ドロップする

*   (小麦の)種を使えば懐かせることができる
*   懐かせるとオセロットやオオカミのようにプレイヤーを追いかける。遠く離れるとテレポートする
*   座らせることもでき、座ると追いかけてこない

![オウムを方に乗せよう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208121325.png)

*   懐かせたオウム(座ってない状態)に近づくと、プレイヤーの肩に乗ってくれる
*   オウムはプレイヤーの両方の肩に乗れるが、左肩を優先する
*   オウムはプレイヤーがブロックを超えるためにジャンプする場合は離れないが、ブロックから落ちると離れる
*   プレイヤーが水に入ってもオウムは離れる
*   肩のオウムはダメージを受けない
*   オウムは、20ブロック以内の敵Mobの声を真似ることがある
*   オウムは元の声よりすこし高い音程で喋る

![オウムのダンス](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104100.gif)

*   新ブロック__「[ジュークボックス](#jukebox)」にレコードを入れて再生すると、近くのオウムが踊り出す__
*   踊るオウムの元ネタは[この動画](https://www.youtube.com/watch?v=9T1vfsHYiKY)に映ってる踊るオウムと、その[絵文字](http://cultofthepartyparrot.com/)(Party Parrotと呼ばれている)

### Mobの湧き量が増加

*   Mobがスポーンする量が増加したようだ
*   __毎度情報提供頂いている[Yuzu氏](https://twitter.com/y_red_mcpe)が検証し、さらにYuzu氏が開発者のAubrey Norris氏に問い合わせた所、確かにMobが湧く量は増加しているとのこと__

### クリーパーとガストの湧き数が5×5チャンクの範囲内で制限されるように

*   湧き過ぎを防ぐため、クリーパーとガストだけに湧き数の制限が追加された
*   __具体的には、周囲の5×5チャンクの範囲内に一定数しかスポーンできない__

### Mobがサボテン、炎、溶岩を避けるように

*   Mobが__サボテンブロック、炎(正確には火ブロック)、溶岩(マグマ)を避ける__ようになった

### ムーシュルーム(キノコ牛)は菌糸ブロックの上でのみスポーンするように

*   ムーシュルームは菌糸ブロックの上でのみスポーンするようになった。

### ウィッチがマグマブロックの上で火炎耐性ポーションを飲むようになった

*   ウィッチ(魔女)がマグマブロックに乗った時は、火炎耐性ポーションを使うようになった。

### スケルトン、ストレイ、ゾンビピッグマンがエンチャントされた防具・武器を持ってスポーンするように

*   スケルトン、ストレイ、ゾンビピッグマンが、エンチャントされた防具・武器を持ってスポーンするようになった。

### プレイヤーが離れた後や、Mobが乗っている時にボートは動かないようになった

*   ボートから降りた後、勝手にボートが進まないようになった。
*   Mobが乗っていてもボートは動かない。

### スケルトン馬(ガイコツ馬)にサドルを付けられるようになった

*   スケルトン馬に、やっとサドルが付けれるようになった。

### トロッコに乗りながら矢を射ったり食べ物を食べたりできるようになった

*   トロッコに乗りながら、弓で射撃したり、食べ物を食べたりできるようになった。

[目次へ戻る▲](#mokuzi)  
[__記事はまだ続きます!__ 新アイテム・ブロックなどについては3ページ目へ >>](/pe-update-12/3/)

## ブロックやアイテムの追加、変更点

__PEの翻訳はJava版と違った独特な翻訳なので、下記アイテム名は正式リリース時に違う名称になっている可能性も十分あります。__独自の翻訳が判明し次第修正します。

PE1.2の新ブロック/新アイテムのレシピと解説一覧

ブロック/アイテム名  
名前をタップで詳しい解説へ飛びます▼

レシピ(材料) または主な入手方法

  
[旗](#banner)  
banner

*   __  
    羊毛__ x6
*   __  
    棒__ x1

  
[色付きガラス](#stained-glass)  
stained\_glass

*   __  
    ガラス__ x8
*   __  
    いずれかの色の染料__ x1

  
[色付きガラス板](#stained-glass)  
stained\_glass\_pane

*   __  
    いずれかの色付きガラス__ x6

  
[ジュークボックス](#jukebox)  
jukebox

*   __  
    木材__ x8
*   __  
    ダイヤモンド__ x1

  
[防具立て](#armor-stand)  
armor\_stand

*   __  
    棒__ x6
*   __  
    石のハーフブロック__ x1

  
[粗い土](#coarse-dirt)  
dirt (ただしデータ値は__3__)

*   __  
    土__ x2
*   __  
    砂利__ x2

または

*   __メガタイガ、メサ、サバンナ__バイオームで採取する

  
[本と羽ペン](#book)  
writable\_book

*   __  
    本__ x1
*   __  
    イカスミ__ x1
*   __  
    羽__ x1

  
[花火の星](#firework)  
firework\_charge

*   __  
    火薬__ x1
*   __  
    いずれかの染料__ x1~8
*   __(任意)形を決める材料__ x1
*   __(任意)効果を追加する材料__ x1~2

(形や効果を決めるアイテムについて、詳しくは後述)

  
[ロケット花火](#firework)  
fireworks

(エリトラで飛ぶためにロケットだけを作る場合)

*   __  
    紙__ x1
*   __  
    火薬__ x1~3

(花火を作る場合)

*   __  
    花火の星__ x1~5
*   __  
    紙__ x1
*   __  
    火薬__ x1~3

(花火の作り方について詳しくは後述)

  
[レコード](#music-disk)  
record\_レコード名 (詳しくは後述)

*   スポーン部屋か森の洋館のチェストから入手
*   スケルトンの矢によって倒されたクリーパーが追加でドロップ

### 「旗」を追加

![旗](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113634.png)

*   ついに__「旗」__が追加された
*   レシピは
    *   __  
        羊毛__ x6
    *   __  
        棒__ x1
*   ブロックの上に建てたり、横にくっつけたりして設置できる
*   旗は絵のように当たり判定がなく、__通り抜けることができる__

![旗の模様](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113640.png)

*   リニューアルされたクラフト画面を使って、__模様をつけることもできる__
*   レシピについては[こちら](https://www.napoan.com/40642027/)で紹介したツールを使えば直感的に分かるのでおすすめだ

### 「色付きガラス」「色付きガラス板」(翻訳:ステンドグラス)を追加

![色つきガラスと色つきガラス板](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113646.png)

*   ついに__「色付きガラス」と「色付きガラス板」__が追加された
*   色付きガラスのレシピは
    *   __  
        ガラス__ x8
    *   __  
        いずれかの色の染料__ x1
*   色付きガラス板のレシピは
    *   __  
        いずれかの色付きガラス__ x6

![色つきガラスと色つきガラス板の特徴](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113652.png)

*   色付きガラスもしくは色つきガラス板を使えば、__ビーコンの光の色を変えられる__
*   色付き板ガラスは通常の板ガラスと同じように棒状の形になる

### 「ジュークボックス」を追加

![ジュークボックス](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113700.png)

*   新ブロック__「ジュークボックス」__が追加された
*   レコードを再生できるブロック
*   レシピは
    *   __  
        木材__ x8
    *   __  
        ダイヤモンド__ x1

### 「レコード」を追加

![レコード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113656.png)

*   新アイテム__「レコード」__が追加された
*   レコードの入手方法は以下の2つ
    *   スポーン部屋か森の洋館のチェストから入手
    *   スケルトンの矢によって倒されたクリーパーが追加でドロップ

### 「防具立て」を追加

![防具立て](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208090646.png)

*   ついに__「防具立て(アーマースタンド)」__が追加された
*   レシピは
    *   __  
        棒__ x6
    *   __  
        石のハーフブロック__ x1
*   装備品や道具、武器など__アイテムを持たせる__ことができる
*   スニークしながらタップする、またはレッドストーン信号を入力して姿勢を変更できる。

### 「本と羽ペン」を追加

![本の編集画面](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113730.png)

*   ついに__「本と羽ペン」__が追加された。つまり自由に書ける本が追加された
*   レシピは
    *   __  
        本__ x1
    *   __  
        イカスミ__ x1
    *   __  
        羽__ x1
*   Java版と違って__見開き2ページで表示される__

![本の署名](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208113725.png)

*   タイトルを決めて「署名」することができる
*   コピーしようとしたが、Build2現在Java版のようにコピーはできないようだ

### 「花火の星」「ロケット花火」を追加

![花火](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370283/bandicam-2017-08-05-13-44-44-437_qfa6z3.png)

*   新アイテム__「花火の星」「ロケット花火」__が追加された
*   花火の星のレシピは
    *   __  
        火薬__ x1
    *   __  
        いずれかの染料__ x1~8
    *   __(任意)形を決める材料__ x1
    *   __(任意)効果を追加する材料__ x1~2
*   花火の星を入れたロケット花火のレシピは
    *   __  
        花火の星__ x1~5
    *   __  
        紙__ x1
    *   __  
        火薬__ x1~3

![](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370280/a796aee9041c8dc11ffe45e24d6304d9_mje8f2.png)

*   まず火薬、効果を決めるアイテムx1~2、形状を決めるアイテムx1、染料を入れて__「花火の星」__を作る
    *   ダイヤモンドを入れると火花の軌跡(流れ星)が表現でき、グロウストーンパウダーを入れると爆発後のパチパチが出る。(併用可能)
    *   形状を決めるアイテム(表を参照)は1つしか入れられない
*   花火の星x1~5、紙x1、火薬x1~3を合わせて__「ロケット花火」__を作る
    *   __花火の星は5個まで一緒に入れることができる__その場合発射後に同時に爆発する
*   __この「ロケット花火」を発射装置に入れて花火を発射しよう__

花火の効果と形状を決めるアイテム

効果 __(ダイヤモンドとグロウストーンパウダーは同時に入れることができる)__

流れ星

  
ダイヤモンド

点滅星

  
グロウストーンダスト

形状 __(形状を決めるアイテムは1つだけしか入れられない)__

Small ball

追加アイテムなし

大きな球体

  
ファイヤーチャージ

星の形

  
金塊

破裂

  
羽

Creeper-shaped (クリーパー状)

頭・いずれかのMobの頭蓋骨

![エリトラ用ロケット花火](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370279/bandicam-2017-08-05-14-20-12-235_b5323p.png)

*   __エリトラで飛ぶための、飾りなしロケット花火__のレシピは
    *   __  
        紙__ x1
    *   __  
        火薬__ x1~3
*   これをエリトラで滑空中に使えば加速できる

### 「粗い土」を追加、さらにクワを使えば普通の土になる!

![粗い土](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370275/d79b84f34d2bd6d2cf0fd80683cddf28_txgss3.png)

*   新ブロック__「粗い土」__が追加
*   レシピは
    *   __  
        土__ x2
    *   __  
        砂利__ x2
*   __メガタイガ、メサ、サバンナ__バイオームで採取することもできる

![荒い土をクワで](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370277/491884dac6717874d3e3e42984dcfa6a_jaxwll.gif)

*   粗い土に__クワを使えば、普通の土に戻すことができる__

### ストラクチャーブロックが追加。なんと3Dモデルを作成してアップロードできる

![ストラクチャーブロック](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370312/dcf27f1fc13b8f9cf888ff99f35ea051_pg7jva.png)

*   新ブロック__「ストラクチャーブロック」__が追加された
*   __/give @p structure\_block__で入手する
*   __Java版と異なり、「3Dエクスポート」という独自のモードのみ使える__

![モデルの設定](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370310/76da6345063387ea6893efff04399ba5_scwl2f.png) ![](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370308/bandicam-2017-08-03-01-09-22-198_smk2dg.png)

*   モデルのサイズとストラクチャーブロックとの距離を指定し、エンティティの有無などを設定してモデルをエクスポートできる

![remix3d](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370306/bandicam-2017-08-03-01-11-17-744_o3oo96.png)

*   作成したモデルを、__マイクラ内からマイクロソフト社のremix3dというサイトにアップロード__することもできる
*   __建築を3Dモデルにして世界中と共有できる__素晴らしい機能だ

### 村人ゾンビのスポーンエッグが追加

![村人ゾンビ](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370269/bandicam-2017-08-06-01-17-20-116_eiyrcg.png)

*   村人ゾンビのスポーンエッグが追加された

### 地図上の他のプレイヤーの位置に顔のアイコンが表示されるようになった

> [#BetterTogether](https://twitter.com/hashtag/BetterTogether?src=hash) [#MCPE](https://twitter.com/hashtag/MCPE?src=hash) Day 14: Enjoying Sunday morning so just a small feature today. The next three days will be super exciting though. [pic.twitter.com/kYiz37uaG9](https://t.co/kYiz37uaG9)
> 
> — Jason Major (@argo\_major) [2017年7月2日](https://twitter.com/argo_major/status/881562644221534208)

![地図上にプレイヤーのアイコン](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370908/d3985f4c16784f928043eb5b1eb33a43_pibe3c.jpg)  
※画像は[ツイート](https://twitter.com/argo_major/status/881562644221534208)より

*   地図上の他のプレイヤーの位置に、顔のアイコンが表示されるようになった
*   これまでは白いアイコンがプレイヤーの位置を示していたが、__どれが誰なのか分からなかった__
*   これからは、__従来の白いアイコンと一緒に顔が表示される__

### 氷ブロックが半透明に

![氷が半透明に](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370267/bandicam-2017-08-06-01-27-32-552_wk7wyl.png)

*   __氷ブロックがついに半透明に__なった

### 地図はディメンションに関係なく自分の位置を示してくれるように

*   ネザーなど__別のディメンションに行っても、地図の現在地表示機能は有効のままになる。__
*   ネザーと現実世界のズレの確認ができ、ネザーゲートが建てやすい。

### グロウストーンと海のランタンの上にレッドストーンを置けるように

![グロウストーンと海のランタンの上のレッドストーン](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578369961/bandicam-2017-08-22-00-09-45-016_nl9io7.png)

*   グロウストーン(ブロック)と海のランタンの上に、レッドストーン(パウダー)を置けるようになった

### 鉄の柵を1つだけ置くと棒状になるように

![棒状に](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370880/8c5a0843f52c804899c35e9de200cb62_zuzs1x.jpg)  
※画像は[ツイート](https://twitter.com/_tomcc/status/882764273142845440)より

*   鉄の柵が他のブロックと接続されていない時は、棒状の形になる

### 観察者(オブザーバー)ブロックのテクスチャがJava版と同じものに

*   テクスチャが更新され、さらにアウトプット時に赤く光るようになった
*   Java版のように、信号が__出力先のブロックに接しているブロックにも__伝わるようになった

[目次へ戻る▲](/pe-update-12/#mokuzi)  
[__記事はまだ続きます!__ コマンドやアドオンに関する更新点は4ページ目へ >>](/pe-update-12/4/)

## コマンド、アドオン(ビヘイビアーパック/リソースパック)の追加/変更点

### チャット画面に、コマンドを楽に入力できるボタンが追加

![コマンドを簡単に入力できるボタン](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370273/bandicam-2017-08-05-15-56-02-218_kju0mz.png)

*   チャット画面に__コマンドを簡単に入力できるボタン__が追加された
*   左下の/(スラッシュ)ボタンを押すと、setworldspawnコマンド、weatherコマンド、teleportコマンド、timeコマンドが選べる

![直感的に入力できる](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370271/bandicam-2017-08-05-15-56-13-700_iksv29.png)

*   __テレポート先の人を選んで直感的にテレポートできる__
*   時間や天気を、画像付きのボタンで直感的に選べる
*   ボタンを押した後、__チャット送信(コマンド実行)ボタンを押す必要があるので注意__

### コマンドを書く時、引数なども自動補完できるように

> Here’s a teaser: AutoComplete now works everywhere, including selector args. Look closely, you may spot something: [https://t.co/SKk29WpTNz](https://t.co/SKk29WpTNz)
> 
> — slicedlime (@slicedlime) [2017年6月30日](https://twitter.com/slicedlime/status/880746615509831680)

![](https://www.napoan.com/wp-content/uploads/2017/09/551c4c03e0f5d4101abae901418540cc_erzpk6.gif)  
※画像は[ツイート](https://twitter.com/slicedlime/status/880746615509831680)より

*   コマンドを書く時、__“どこでも”自動補完の候補が表示されるように__なった
*   なんとセレクターのtype=引数の中身なども候補が表示される

### コマンドを実行したエンティティを指定する「@s」セレクターが使えるように

*   @sセレクターが追加された__コマンドの実行主を指定__する
*   例: /execute @e\[r=10\] ~ ~ ~ say @s → 半径10ブロック以内のエンティティが__自分自身の名前を__チャットに流す

### 「^」を付けて相対座標を書くことで、エンティティの向いている向きを基準に位置を指定できるように

> Oh no, it seems like [@argo\_major](https://twitter.com/argo_major) has ran out of feature previews! Here, have another commands preview instead: [https://t.co/S3AI2vaKPn](https://t.co/S3AI2vaKPn)
> 
> — slicedlime (@slicedlime) [2017年7月5日](https://twitter.com/slicedlime/status/882609290879660032)

![](https://www.napoan.com/wp-content/uploads/2017/09/14fa64bd65adac102503be3713e9e4d6_o95dds.gif)  
※画像は[ツイート](https://twitter.com/slicedlime/status/882609290879660032)より

*   座標を書く時、記号「^」を付けることで、__エンティティの向きを基準に座標を指定できるように__なった
*   例えば/tp @s ^ ^ ^10を実行すると、プレイヤーの向いている方向を基準に__前に10移動__する
*   PC版1.13で実装されようとしているめっちゃすごい機能だ

### tpコマンドで、テレポート後に向く方向をエンティティや座標で指定できるように

*   tpコマンドで、__テレポート後の向きを指定する方法__が増えた
*   __/tp \[tpするエンティティ\] <x> <y> <z> facing <ターゲット>__と書くことで、__指定したエンティティの方向を向く__
*   __/tp \[tpするエンティティ\] <x> <y> <z> facing <x> <y> <z>__と書くことで、__指定した座標の方向を向く__

### 「alwaysday」「daylock」コマンドが追加、昼夜サイクルを止める

alwaysdayコマンド・daylockコマンドの構文

__/alwaysday <true|false>__  
__/daylock <true|false>__

*   「alwaysday」「daylock」コマンドが追加
*   どちらも機能は同じで、__trueにすると昼夜サイクルが止まり、falseで動き出す__

### 「tickingarea」コマンドが追加、常時読み込む範囲を名前付きで設定できる

> Mapmakers feature: to replace Spawn Chunks, in 1.2 we added “TickingAreas”. You can create areas that update even if nobody is around! [pic.twitter.com/IqnYC5vr62](https://t.co/IqnYC5vr62)
> 
> — Tommaso Checchi (@\_tomcc) [2017年6月26日](https://twitter.com/_tomcc/status/879393272778563584)

![tickingareasコマンド](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370959/tickingareas_wlss7t.jpg)  
※画像は[ツイート](https://twitter.com/_tomcc/status/879393272778563584)より

*   Java版の初期スポーン地点周辺のチャンクのように、__常時読み込まれる範囲を設定できる__ようになった
*   設定には新コマンドtickingareaコマンドを使う

*   コマンドの構文は以下の通り
    *   tickingarea add <from: x y z> <to: x y z> \[name: string\] 座標を指定して範囲を追加する。
    *   tickingarea add circle <center: x y z> <radius: int> \[name: string\] 中心座標と半径を指定して円状の範囲を追加する。
    *   tickingarea remove <position: x y z> 座標を指定して範囲を削除する。
    *   tickingarea remove <name: string> 名前を指定して範囲を削除する。
    *   tickingarea remove\_all 全ての範囲を削除する。
    *   tickingarea list \[all-dimensions\] 全ての範囲のリストを表示する。
*   追加した範囲は、__違うディメンションにいても常時読み込まれる__
*   範囲毎に名前を付けて管理できる
*   配布ワールド作成において、__コマンドブロック等を常時動かしておきたい時に非常に役立つ__機能だ

### エンティティに「tick\_world」というコンポーネントが使えるように

> Not only that, but now you can create entities that never despawn!  
> You can add a “tick\_world” component to make an entity load the world! [pic.twitter.com/AwXJttu28K](https://t.co/AwXJttu28K)
> 
> — Tommaso Checchi (@\_tomcc) [2017年6月26日](https://twitter.com/_tomcc/status/879393788820455424)

![tick_worldコンポーネント](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370928/e2760b9631c190bd223efe664a95b6f7_bfmjig.jpg)  
※画像は[ツイート](https://twitter.com/_tomcc/status/879393788820455424)より

*   ビヘイビアーパックでエンティティをカスタマイズする際、minecraft:tick\_worldというコンポーネントが使えるようになった
*   “never\_despawn”: true とすることで、__エンティティがデスポーン(自然消滅)しなくなる__そうだ
*   __エンティティにワールドを読み込ませる__こともできる
    *   “radius”: 半径 がおそらく読み込ませる範囲だろう

> Sometimes an entity should despawn when everyone is far away though, (eg Ender Dragon). so we added back an optional despawn distance. [pic.twitter.com/SkRua5ix9X](https://t.co/SkRua5ix9X)
> 
> — Tommaso Checchi (@\_tomcc) [2017年6月26日](https://twitter.com/_tomcc/status/879394353231175680)

![デスポーンする距離を設定](https://res.cloudinary.com/napoan-com/image/upload/w_650,c_limit,f_auto,q_auto/v1578370926/4c475c0b52798f4fa4568561840f6a3d_sl1g38.jpg)  
※画像は[ツイート](https://twitter.com/_tomcc/status/879394353231175680)より

*   __プレイヤーが離れるとデスポーンする__ようにもできるそうだ
*   おそらく“distance\_to\_players”: 数値 がデスポーンする距離だろう

[目次へ戻る▲](/pe-update-12/#mokuzi)
