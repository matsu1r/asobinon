---
sidebar_position: 0
---

# vercelでナポアンのマイクラを作ろう (Let's deploy your own napoan.com on vercel)

このセクションでは、 https://next.napoan.com で公開されている「ナポアンのマイクラNEXT」の運営について解説します。

ナポアンのマイクラNEXTは、ナポクラで初の**サーバーレス形式**での公開がされています。

## vercelについて

具体的には、「vercel」というサービスを使っているのですが、特筆すべき点としては

- レンタルサーバー代が全く必要ない
- FTPソフトも全く必要ない
- レポジトリさえあれば公開ができる

という点です。このセクションでは、**主にこの「vercel」にデプロイ(公開)しているサイトを運営・メンテナンス方法を解説します。**

## 必要なもの

- gitの経験
- JSONの理解
- PostmanやREST APIの理解
- TypeScriptの経験
