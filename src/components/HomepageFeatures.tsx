import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
const FeatureList = [
  {
    title: translate({ id: 'general.easy', message: 'あー簡単！' }),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate id="general.easy-body">
          ドキュサウルスを使っているので、めんどくさいサーバーとかのセットアップは不要です。
        </Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'general.md', message: 'Markdownで書ける！' }),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate id="general.mdt-body">
          docsフォルダにMarkdownを入れるだけでページを作れます。GitHubから直接作ってOK!
        </Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'general.react', message: 'Reactでできているよ' }),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
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
