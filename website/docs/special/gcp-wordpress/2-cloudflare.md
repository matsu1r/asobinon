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

![エメフェラる](https://bn02pap001files.storage.live.com/y4mQWH3mNBLZ3JrMYfewzyIlRUJAIsYgDDR4mPruU0cqXOJVA3LETEXLzPa8KV44S-wyv956K_UODhlXnpLIdpZMtGW12r6aiK8X7A5siHkVS54rQPuLHWBJotrFptHkAswjOMa_gLrWs-v0nRlLxZnvdaKR7SK7t8u6UdzkjaPrsKjpgZuFLLnjdshvAA__kpP?width=256&height=79&cropmode=none)

**エメフェラル**は一定間隔で変わってしまうため、これを「静的」に変更してください。

![静的](https://bn02pap001files.storage.live.com/y4mv8QjuSeKN8Tuz66X1Os8V6gktcAHz18WQtXDMvqlFAMQnxw5av3yVVIBhQ7psSawFc4ls774Nrdz2MKVqJbvp8o9ZgdVibKVwLen1IDeKvIkSTmjaonymHBa1AxZxK149MMJY9-WRMUB3Cu7z9oNNGqYzvbj3H3XHwJ5es8VmKIYpxuxFOAgUjdDFQXI9KQ9?width=526&height=364&cropmode=none)

静的IPアドレスに、適当な名前を付けてください。

![結果](https://bn02pap001files.storage.live.com/y4mgVpS9LFRO6avSiM5F5VLToVOVzSlsYdOrLhNjXIje49kllrBgrRrbGSrFMRK2O1gLxIxS_Ok1nAwJ2LwYjJFJrJJnplFycBvYNZrXoboqnBBvziShLKg7PEDuYV-bteKELQ1OUJAWE8p1aWz5ybnnfeqsl6OCq8MyNA2sJQFQbuM_9hH-DH1h2HoKC4dltQK?width=954&height=268&cropmode=none)

静的なIP`35.227.161.48`が割り当てられました。

## CloudFlareでDNSを設定

https://storage.googleapis.com/public-napoancom-data/asobinon/dns.png

CloudFlareで新しいサイトを追加し、「DNS設定」を開きます。

![](https://bn02pap001files.storage.live.com/y4mqDn8bIkodopOF7eB9lsOtC5x6_qTviyGabeK-ijTDrUkWjkC_D5jpIBmVlqOHTfhrdMad5vY-O6Z5qNyy_BOBGeDWaFemVZjxjPfMXpVJNXBG9maoi9jO9VlCVYpKRbFPVQ7Dx-2ng_8o3VYaMa_jQP-8TGRm6YGZzhBX2P6FBjduRl3If9DkBW5f2H0OSIK?width=1300&height=514&cropmode=none)

**Aレコード**を追加して、適当なサブドメイン名を付け、IPアドレスをペーストします。

![TTLとプロキシ](https://bn02pap001files.storage.live.com/y4mHxdNvb4TQVC7cAdX6xrEhWL_tjYGTgAOVgk_VkIs-0QnLavexF7Gthd6dt7D5BOr-zE9wWcGppAPmHn0QV4zc_jdr5JAP2GNUAW5EAcrmwmtUguYWGNhAhgJHFQdhKxThsn-HqNKAz2T-0b1TK4S1-xg9Ixb1YfXd0-Uz_-IPjc5tE43z_PvrMSYjsKEj64u?width=820&height=324&cropmode=none)

TTLは自動で、`Proxy Status`は`Proxied`にし、保存します。

---

## 参考

https://qiita.com/ulwlu/items/dbb0db5cf7099b7a7cc4
