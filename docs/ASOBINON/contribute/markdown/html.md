---
title: HTMLを書いちゃダメ?
---

HTMLを書いても動いた！なら別にいいじゃん！

...残念ながら、それは**たまたま動いている**だけである。

## MDXローダーなので...

このサイトは`MDX`というライブラリでMarkdownファイルを読んでいる(`Docusaurus 2.0.0-beta.0`現在)。

つまり、HTMLを書くと`JSX`として扱われるのである。JSXとは何かについて詳しくは解説しない。

## JSXでできないこと

```html
<div style="font-size:2rem">でかい文字</div>
```

試しに、▲これを書いてみてほしい。

![エラーで何も出ない](https://bn02pap001files.storage.live.com/y4mjEz3cE_bIkWItAupTMAk3vigjjWomBjvMpBLT8FDJUfr43AhfMCQqrfe-blceE_mJkGNiMBDCL5K_kMwwuaJCcl1ridpwBrXRJ_RhrgYAScHGzEZqS_ZpRLgzJo6OTYkgOG6Gmy_jiCOV5z3UBVRlvoHMK2WDwQZOscK7sNTVM8wcoZoD_hGDzxD1F-RjZQ6?width=660&height=594&cropmode=none)

ありゃ! なんかエラーが出て**画面が真っ白に**なったはずだ。

実はJSXで`style="font-size:2rem"`は書けない。本当にCSSを書きたいなら、以下のように書く必要がある。

```jsx
<div style={{fontSize: '2rem'}}>でかい文字</div>
```

<div style={{fontSize: '2rem'}}>でかい文字</div>

---

詳しくは解説しないが、**わざわざHTMLをJSXに直して書くのはめちゃくちゃ面倒** である。JSXを使うのは、[YouTube埋め込み](./youtube-embed/)など「カスタムされたコンポーネントを呼び出す」時だけにしよう。
