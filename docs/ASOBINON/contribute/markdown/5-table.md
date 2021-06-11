---
title: 表
---

## 基本の書き方

```md
| A | B |
| --- | --- |
| あ | い |
| う | え |
```

| A | B |
| --- | --- |
| あ | い |
| う | え |

## え、結合は?

残念ながら、この記事を書いている現在、Docusaurusで「セル結合」はできない。

`>`とか`^`で結合できる環境もあるが、対応してる方が少数なイメージがある。

どうしてもセル結合したい場合、**JSX**を書くしかない。(ミスりやすいので非推奨)

```jsx
<table>
<tbody>
<tr><th>A</th><th>B</th></tr>
<tr><td colspan="2">あ</td></tr>
</tbody>
</table>
```

<table>
<tbody>
<tr><th>A</th><th>B</th></tr>
<tr><td colspan="2">あ</td></tr>
</tbody>
</table>

くどいようだがこれは**JSX**なので、くれぐれも`style`とか書かないように！！
