/* 

Most of code is directory copied from this:
Thank you!

https://github.com/facebook/react-native-website/blob/master/website/src/theme/DocItem/index.js

*/

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useState } from 'react';
import styles from './rating.module.css';

const DocsRating = () => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const [haveVoted, setHaveVoted] = useState(false);
  const giveFeedback = () => {
    // ここはGTMに任せる
    setHaveVoted(true);
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
              className={`GTM_FEEDBACK_GOOD ${styles.button} ${styles.buttonGood}`}
              onClick={() => giveFeedback()}
            >
              Yes!
            </a>
            <a
              className={`GTM_FEEDBACK_BAD ${styles.button} ${styles.buttonBad}`}
              onClick={() => giveFeedback()}
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
