import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
} from '@chakra-ui/react';

const EditorWarning = () => (
  <Accordion allowToggle>
    <AccordionItem>
      <AccordionButton>
        編集上の注意 <AccordionIcon />
      </AccordionButton>

      <AccordionPanel>
        <p>
          Markdownの上に「---」で囲まれた部分がありますが、それらのデータはプレビューに映りません。
        </p>
        <ul>
          <li>
            <Badge>title</Badge> : 記事のタイトル
          </li>
          <li>
            <Badge>slug</Badge> : 記事のURL
          </li>
          <li>
            <Badge>sidebar_position</Badge> : サイドバーでの位置
          </li>
        </ul>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        プレビューできない要素 <AccordionIcon />
      </AccordionButton>

      <AccordionPanel>
        <p>以下のブロックはプレビューに映りません。</p>
        <ul>
          <li>「:::XXXX」「:::」で囲まれた警告</li>
          <li>YouTubeの埋め込み</li>
          <li>GitHubの埋め込み</li>
          <li>{`class="button button--primary"などが付いたリンク`}</li>
        </ul>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default EditorWarning;
