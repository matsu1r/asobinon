---
title: ディレクトリ構造の変更について
author: Ryo Ando
authorURL: http://twitter.com/sasigume
authorImageURL: /img/people/sasigume.png
authorTwitter: sasigume
tags: [全体的なこと,GitHub]
---

Firebaseを導入するにあたり、様々なファイルを`/functions`に置く必要が出てきた。別にDocusaurusに混ざってもいいのだが、`.vercelignore`で無視するよりも、フォルダを分けてしまう方が安全だなと思って、**Docusaurus関連のファイルは全て`/website`配下に移動させた。**

## お問い合わせはしょうがなく別サイトに

`/nextclient`の中身は適当に[`with-chakra-ui-typescript`](https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui-typescript)をベースに作った。
