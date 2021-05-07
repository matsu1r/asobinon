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

![デプロイ完了](https://bn02pap001files.storage.live.com/y4mBG7f792xcGmy-SXXrKPoeA6G2W6lwlgnk0FuLifsU-hWO792kXtz9OJwGVrq2KHWphk_HxmkLJIvHeF0IxhIPT1CR62gr_qNYSFAbPtR27f0Ue7oJ_CC7oLjODlubuBb1l2Xb87SayUsCgmVrqUohKQ2Jj2yqGU8oLCk7tpAdxzyNAonWIEZMoPAh5mpPBkM?width=1846&height=1050&cropmode=none)

デプロイができました。右側に`Admin URL`がありますから、クリックしましょう。

## Adminを開いて動作確認

![ログイン画面](https://bn02pap001files.storage.live.com/y4mwwlsA_G3-8RcSm2GiZTUCPILJstjo3foayE0nXwEx_Fe2YkiDrjlqr2bxcdWmoaRsYIpNeceU6L0vYBCKbDk2Uif2mX75tu4-jJdfnPGmP_QQvYsfynIP5PC4FWQUP_9YrGase8uJWXgDtHNrumLSCBgzj2f14FQ5z0MR7-SP7FuwZKLPw3QJHueuMI7r4Rc?width=804&height=816&cropmode=none)

ログイン画面が表示されたら成功です。

先程のデプロイ完了画面に、`Admin user`と`Admin password`がありますから、それを使ってログインしましょう。

![動作確認できた](https://bn02pap001files.storage.live.com/y4m3DOsWBxIP18mM09DN5lirCM_s38DDOUuBX5z8RKob4GR4nNvFhNpAHovOZm9EUGoW5Z2JRvgus2MOhAmMMfs-o1bYYVCKUR9h1g_8HIM8a-FNRCZgdE8SynqzRIMK_XHX3fcl40-TIpPkSyvsWfY14ARc3K26XVi0Al39ZZ2nL5ucFBGBp-WO4SArBDB2CA1?width=876&height=680&cropmode=none)

WordPressの管理画面が表示されたはずです。

次のページでは、このWordPressに静的なIPアドレスを設定し、CloudFlareでキャッシュします。

---

## 参考

https://qiita.com/ulwlu/items/dbb0db5cf7099b7a7cc4
