import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'あー簡単！',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ドキュサウルスを使っているので、めんどくさいサーバーとかのセットアップは不要です。
      </>
    ),
  },
  {
    title: 'Markdownで書ける！',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <code>docs</code>{' '}
        フォルダにMarkdownを入れるだけでページを作れます。GitHubから直接作ってOK!
      </>
    ),
  },
  {
    title: 'Reactでできているよ',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Reactでできているので、拡張性も最高!
        とはいえあんまカスタムする予定はなし。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
      )}
      <div className="text--center padding-horiz--md">
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
