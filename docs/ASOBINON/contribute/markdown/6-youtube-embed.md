---
title: YouTubeを埋め込む方法 (MDXを使用)
---

当サイトでは、Reactコンポーネントを呼び出すことでYouTubeの埋め込みが可能です。

## 例

import YoutubeEmbed from '/src/components/youtube-embed'

<YoutubeEmbed id="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

## 書き方

```jsx
import YoutubeEmbed from '/src/components/youtube-embed'

<YoutubeEmbed id="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
```

こちらを**mdファイルに直接書いてください。** DocusaurusがMDXとして解釈します。

`id`には、YouTubeのURLを書いてください。

```jsx
<YoutubeEmbed id="dQw4w9WgXcQ" />
```

`watch?v=`以降の文字列(動画ID)でも構いません。

:::caution
本来のMarkdownにない書き方ですから、エディタの構文チェッカーは警告を吐きます。
:::

## ソースコード

import CodeBlock from '@theme/CodeBlock';

import YoutubeEmbedCode from '!!raw-loader!/src/components/youtube-embed';

<CodeBlock className="language-jsx">{YoutubeEmbedCode}</CodeBlock>

### 参考

- https://stackoverflow.com/a/8593188/15161394
- https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

