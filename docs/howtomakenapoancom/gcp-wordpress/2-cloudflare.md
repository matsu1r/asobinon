---
sidebar_position: 2
---

# CloudFlareでキャッシュする{#cloudflare}

このままでは、アクセスする度にインスタンス上で処理が実行され、ページが生成されます。非常に無駄が大きいので、CloudFlareを使ってキャッシュしましょう。

## CloudFlareに登録

https://cloudflare.com

こちらからアカウントを作成してください。

さて、CloudFlareにキャッシュしてもらうには、「一定のIPアドレス」が常に保持されていなければいけません。

:::caution

以下、設定を間違えると、アクセスができないなど致命的な障害を引き起こすのでご注意ください。

:::

## 静的なIPを作る

https://console.cloud.google.com/networking/addresses/list

これはGCPの「外部IPアドレス」のページです。先ほどデプロイしたWordPressのIPアドレスが表示されているでしょうか。

![エメフェラる](https://storage.googleapis.com/public-napoancom-data/napoancom-md/emf.png)

**エメフェラル**は一定間隔で変わってしまうため、これを「静的」に変更してください。

![静的](https://storage.googleapis.com/public-napoancom-data/napoancom-md/4.png)

静的IPアドレスに、適当な名前を付けてください。

---

## 参考

https://qiita.com/ulwlu/items/dbb0db5cf7099b7a7cc4
