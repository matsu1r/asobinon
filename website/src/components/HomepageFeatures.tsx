import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
const FeatureList = [
  {
    title: translate({
      id: 'general.easy',
      message: '全てをGitHubでトラッキング',
    }),
    description: (
      <>
        <Translate id="general.easy-body">
          このサイトの更新履歴は、全てGitHubに記録されます。
        </Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'general.md', message: 'Markdownで書ける！' }),
    description: (
      <>
        <Translate id="general.mdt-body">
          Markdownだけでページを作れます。GitHubから直接作ってOK!
        </Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'general.react', message: 'Reactでできているよ' }),
    description: (
      <>
        <Translate id="general.react-body">
          Reactでできているので、拡張性も最高!
          とはいえあんまカスタムする予定はなし。
        </Translate>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
