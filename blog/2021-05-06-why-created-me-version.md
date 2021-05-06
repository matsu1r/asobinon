---
title: なぜMD版を作成したか
author: Ryo Ando
authorURL: http://twitter.com/sasigume
authorImageURL: /img/people/sasigume.png
authorTwitter: sasigume
tags: [全体的なこと,Next版]
---

不確実性の増す今、1アカウントの領域内に全記事・素材を収めておくのは非常に危険だ。このサイトは、公益性の高い部分だけをMarkdownで切り出したもの... ということにしておこう。

実際は、「 https://next.napoan.com を更新する方法を記したドキュメント」とする予定だったのだが、**Markdownで記事を保管、GitHubで管理できるなら最高じゃん！** と思って、ドキュメントから「MD版」という立ち位置に変えた。

## 立ち上げのきっかけ

ナポアンのマイクラをVercelに移行した際、記事はクライアントが直接Contentfulに取りに行っていたが、バックエンドとして **Cloud Functions for Firebase** を採用した結果、別のレポジトリで運用することになった。

が、ある日 (4月中旬ごろ) [projectnapoancom](https://github.com/sasigume/projectnapoancom) というレポジトリに全部まとめた結果、クライアントとバックエンドを横断して作業するようになり、「ドキュメントないと詰むな」と思っていた。

## 5/5 Docusaurusを初めて触る

で、徹夜で翻訳作業をして、日中英3バージョンが完成した(していない)。

## 5/6 翻訳をやめる

ブログのJSX(MDから生成される)が、**絶望的にi18nとの相性が悪い** ので、一旦Crowdin式の翻訳は見合わせることにした。
