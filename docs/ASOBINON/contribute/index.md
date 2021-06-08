---
title: 参加方法 トップページ
sidebar_position: 0
slug: /ASOBINON/contribute/
---

このサイトは`Docusaurus`というドキュメント作成ツールを使っています。したがって、普通のWikiとは違った方法で編集をしないといけません。

編集する前に、[CONTRIBUTING.md](https://github.com/sasigume/asobinon/blob/main/CONTRIBUTING.md) をご覧ください。

## 画像アップ

申し訳ありませんが、ストレージの費用の関係から、「アソビノンのサーバーに画像をアップロードする」機能は用意しておりません。

技術的には可能ですので、以前は動かしていたんですが、ストレージに対して課金が発生するため、諦めました。

代替として、最も手軽なのはOneDriveだと思います。

### OneDriveを使った画像アップ

:::warning
アソビノン運営は、OneDrive上のトラブルについて責任はおいかねます。ご了承ください。
:::

#### 1. OneDriveにアップロード

パソコンの場合は **OneDriveフォルダ** に画像を入れてください。

iOS/iPadOS/AndroidではOneDriveアプリを入れておけば、写真アプリの共有画面から、OneDriveを選んでアップロードできます。

:::caution
OneDrive上でファイルを消すと、サイト上でも見れなくなる** ので、分かりやすいフォルダ名をつけましょう。
:::

#### 2. OneDriveのサイトで埋め込みURLを取得

次に、埋め込み用のURL (**共有リンクではない**) を取得する必要があります。

- パソコンの場合、ファイルを右クリックして「オンラインで表示」を選んでください。
- iOS/iPadOS/Androidでは、WebブラウザでOneDriveのサイトを開いてください。

画像を選んで、「埋め込み」をクリックしてください。

![](https://bn02pap001files.storage.live.com/y4mg9v8M3JU41qgEnk6iGjxt8eGJabsJeD35iDxVDoSZ19abESoxhZ5NnUq6-cktmaNoMqbyfG3SCbDcGiGHm9JmCFjtVEA_bE3sUCM_k6Qx2sm19aolZXv4vhj9it2Oyh7TTDxg_v9BWDpETHr_5iwdDzJ-9cpsB8UPYh_W4q1kd7KIOxDubRfKYg-iztAEmNI?width=580&height=660&cropmode=none)

「埋め込み用コードを生成」の下の**「生成」**を押してください。

![](https://bn02pap001files.storage.live.com/y4m3Og89gKVSSwhi-kHDMVWnffTC1y5bKdyWW7dcCZN0YV49r5RMQ-iL7yEeOLkFFzY8uR2rGGCtizT-fcf2cq9gUVWAz887Bv60PAyUnFRbL849DEtiVmF9zgYvD5dR92GCa0rnOXRPReU3iM31Bhi4VySoNqo_Mvy4D88jxQDkwpAAJwHsurqCafYZa6q2vQs?width=625&height=660&cropmode=none)

そのままでは大きすぎるので、サイズを**中**にしてください。下に画像のURLが表示されます。

#### 3. 画像を埋め込む

```md
![説明](URL)
```

記事編集画面で、このように書けば、画像が表示されるはずです。

:::warning HTMLは使わないでください
HTMLのimgタグは使わないでください。DocusaurusはMDXという規格でページを生成するので、閉じタグを忘れたりといった理由で更新に失敗しやすくなります。
:::

## ゲーム追加について

フォルダ名は予告なく**変更する場合があります。**

例えば「シティーズスカイラインズ」を「cities」と付けるのは**略称としては正しいですが、スラッグとして不適切です。**

長期的な目線で**「ユニークで絶対に被らない固有名詞」**を選んでください。

## 貢献者(Contributers)という表記について

このプロジェクトには、誰でもプルリクエストを送ることが可能です。

しかし、Webサイト上の「Contributers」は、「レポジトリへのアクセスを持つGitHubアカウント」のみを示しているため、運営者が追加しない限り増えません。

もし、「Contributers」の参加をご希望の場合、Issueにてお問い合わせください。

## できればローカルでの一括編集をお願いします

**複数ファイルに渡って編集する際は、フォークしてローカルで編集し、全て変更できてからプルリクエストすることをお勧めします。**

**意図的に悪意ある編集をコミットしたユーザーに対しては、組織アカウントの「ブロック」機能を使います。**

