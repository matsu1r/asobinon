---
sidebar_position: 1
---

# GCPを始める{#start-gcp}

https://cloud.google.com/

ここで何かプロジェクトを作りましょう。これからやってもらうステップでは、お金はかかりません。

:::caution

今回は「永久無料枠」に収まる範囲のプロダクトだけ使いますが、Cloud Storageなどで請求が発生する場合もあるのでご了承ください。

:::

## WordPress用インスタンスを作ろう{#make-instance}

https://console.cloud.google.com/marketplace/product/bitnami-launchpad/wordpresspro

`WordPress with NGINX and SSL Certified by Bitnami and Automattic` を使用します。

### 設定{#config}

以下の設定に変更します。

- Zone: `us-west1-a`
- Machine type: `micro`
- Boot disk size in GB: `30GB`

そしてデプロイします。

### デプロイ

![デプロイ完了](https://storage.googleapis.com/public-napoancom-data/napoancom-md/deployed.png)

デプロイができました。右側に`Admin URL`がありますから、クリックしましょう。

## Adminを開いて動作確認

![ログイン画面](https://storage.googleapis.com/public-napoancom-data/napoancom-md/dployed2.png)

ログイン画面が表示されたら成功です。

先程のデプロイ完了画面に、`Admin user`と`Admin password`がありますから、それを使ってログインしましょう。

![動作確認できた](https://storage.googleapis.com/public-napoancom-data/napoancom-md/deployed3.png)

WordPressの管理画面が表示されたはずです。

次のページでは、このWordPressに静的なIPアドレスを設定し、CloudFlareでキャッシュします。

---

## 参考

https://qiita.com/ulwlu/items/dbb0db5cf7099b7a7cc4
