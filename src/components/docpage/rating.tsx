/* 

Most of code is directory copied from this:
Thank you!

https://github.com/facebook/react-native-website/blob/master/core/DocsRating.js

*/

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useState } from 'react';
import styles from './rating.module.css';

const DocsRating = ({ editUrl }: { editUrl: string }) => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const [haveVoted, setHaveVoted] = useState(false);

  const actualPath = editUrl.replace('https://github.com/sasigume/asobinon/edit/main', '');

  const href = (value: 'good' | 'bad') => {
    return `http://edit.asobinon.org/feedback?path=${actualPath}&value=${value}`;
  };

  return (
    <div className={styles.wrapper}>
      {haveVoted ? (
        'フィードバックありがとうございました!'
      ) : (
        <>
          <span className={styles.message}>このページは役に立ちましたか?</span>
          <div className={styles.buttons}>
            <a
              className={`${styles.button} ${styles.buttonGood}`}
              onClick={() => setHaveVoted(true)}
              href={href('good')}
              target="_blank"
              rel="noreferrer"
            >
              Yes!
            </a>
            <a
              className={`${styles.button} ${styles.buttonBad}`}
              onClick={() => setHaveVoted(true)}
              href={href('bad')}
              target="_blank"
              rel="noreferrer"
            >
              No!
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default DocsRating;
