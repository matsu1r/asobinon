---
title: YouTubeを埋め込む方法 (MDXを使用)
---

当サイトでは、Reactコンポーネントを呼び出すことでYouTubeの埋め込みが可能です。

```jsx
import YoutubeEmbed from '/src/components/youtube-embed'

<YoutubeEmbed id="gF0Ooe1F6aI" />

```jsx
import YoutubeEmbed from '/src/components/youtube-embed'

<YoutubeEmbed id="gF0Ooe1F6aI" />
```

こちらを**mdファイルに直接書いて構いません。** DocusaurusがMDXとして解釈してくれるからです。

`id`には、`watch?v=`以降の文字列を書いてください。

## ソースコード

https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

こちらを参考にしました。

import CodeBlock from '@theme/CodeBlock';

import YoutubeEmbed from '!!raw-loader!/src/components/youtube-embed';

<CodeBlock className="language-jsx">{YoutubeEmbed}</CodeBlock>
