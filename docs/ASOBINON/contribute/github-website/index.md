---
title: GitHubサイト上で編集する
slug: /ASOBINON/contribute/github-website/
sidebar_position: 0
---


## 「この記事を編集」を押す

下か上にボタンがあるはずです。

## GitHubアカウントを作る

ない場合は作ってください。無料です。

:::note
学生なら無料で`PRO`アカウントにアップグレードできます。
:::

## 編集する

![](https://bn02pap001files.storage.live.com/y4mxulWnrmN5awJAUUxvn3F6bUrBLTlLRWV7m4xj5Jz5zE0SBCPAjQD-aXnMJDGzJaB73XHkbQQO2FbayX4eI7jSVvxj2OwMloocFszbrI_cNUAjKujas65x61TFj2l37bRePfW732hmEcWIM8XOcXUh80XLqlc8INSfXBLilIfJ_XXg_eJmQeC4G7s6ADrm3mT?width=660&height=157&cropmode=none)

まず**「Fork this repository」**ボタンを押してください。

## コミットする

![](https://bn02pap001files.storage.live.com/y4mimhWSy9ILmJVPRBq96uTl8QwDSdd-k5P1rBEF0PKz8W-4Tt_x-asZcuPv8zFowtIk4ZW1_G0R1LFTVrSoyH8l97G5Bzpg6RFoNyW2P7k77PEC78UUXmvCu-Tv_7ZE9kJgGRlBps6mhu8INMDb43mF_FYXbkodT5t40dERn0WM6xN_9QbSH0ha_CvE0h7nCQ5?width=660&height=522&cropmode=none)

編集して、**何を変えたかを「コミットメッセージ」に書きます**。

そして**「Propose changes」**を押してください。これで**自分のフォークにコミット**ができました。

## プルリクエストする

自分のフォークを、**本物に統合(マージ)**させます。

![](https://bn02pap001files.storage.live.com/y4mAFnWbBRVZYfsOpNTEef6gp1GflzoYrd03RQy_eSG5kv5MTLx0255OIL_giaEkuo0AzTNCwIb0wyeypPNeCxf4qWSVDFWNu4suEl7YB8rwfGGvPsb7_XAgMuZ698BK34HNFtBxDrG2QPDn82d9ll3NV0aVSImoJ7jnPyfysRWLH2aIQvobj0HPip_-hSVVbE1?width=660&height=264&cropmode=none)

この画面が出たら、右下の「Create Pull Request」を押してください。

![](https://bn02pap001files.storage.live.com/y4mi9uViJkn2mRXMSqG5fNJdamRlAi9jRCfWT0WvvAg63rhLGnrB8Zg1JS1V8spLqTXAYLIs7EDXwRgvT0d4x4u2euzkJSJJi_oGQTFjNshcfG1EAB2TJnyh3vahsm7mV_jzmBsnX3gqEM5ABNS6bpGewwX-gFryQTm9gwg4yN2XzTqf90yzEn4sB8FL9WNwCiU?width=660&height=483&cropmode=none)

さっきも何を変えたか書いたと思いますが、ここではその**概要**を書きます。(複数のコミットをまとめてリクエストできるので)

「Create Pull Request」を押せば、ビルドが始まり、成功すれば反映されます。

:::warning
成功した後も、更新には三分ほど時間がかかります。
なぜなら、**最初のビルドは「プルリクエストのビルド」**だからです。
:::

## ビルドに失敗した場合

![](https://bn02pap001files.storage.live.com/y4m_8lzPhw4fKM6Pb5R1fYrXY_VAo7YbMF8u3Q4U3cDlxHhsV3l_NaFQhCRSqsJVkZDeGapauMg4f1A-IkseZSDkCTTOs9d5KQdG80Qq0-CWVcwXLFgTj1s8haMvLj1h2REE7uRN78mFxV3-LxAatdpYbWFlb2zCGkvfZpx5eHEJH8opLqi5hDxoAsD1pBAKLA6?width=660&height=286&cropmode=none)

`Some checks were not successful`と出たら、「ビルドに失敗した」ということです。

JSXが間違っているなどの理由が考えられるので、編集内容を見直してください。

もちろん記事以外の`js`ファイルなどを不用意にいじっても失敗します。
