import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
const FeatureList = [
  {
    title: translate({
      id: 'general.games',
      message: 'ゲームを平等に扱います!',
    }),
    description: (
      <>
        <Translate id="general.games-body">
          さまざまなゲームの情報をフラットに、かつ整理された形で集約!
          流行り廃りで削除することはありません。
        </Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'general.tech', message: '表示が高速!' }),
    description: (
      <>
        <Translate id="general.tech-body">
          左上のメニューから、ページを移動してみてください。一瞬でページが切り替わります。どんなWikiよりも高速。
        </Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'general.profit', message: '非営利で運営' }),
    description: (
      <>
        <Translate id="general.profit-body">
          非営利で運営されており、今のところWebサイトのマネタイズは検討していません。企業Wikiとは真逆の思想で運営しています。
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'general.easy',
      message: '全てをGitHubでトラッキング',
    }),
    description: (
      <>
        <Translate id="general.easy-body">
          このサイトの更新履歴は、全てGitHubに記録されます。間違いも簡単に修正可能。これは強力な荒らし対策にもなっています。
        </Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'general.mdt', message: 'Markdownで書ける！' }),
    description: (
      <>
        <Translate id="general.mdt-body">
          Markdownだけでページを作れます。コードを埋め込むとコピーできるなど、専用の機能を装備。Wiki記法とは違うので注意。
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'general.search',
      message: 'Algolia DocSearchを装備!',
    }),
    description: (
      <>
        <Translate id="general.search-body">
          右上のボタンで瞬時に検索可能!
          こんな検索ができるゲーム攻略サイト見たことない。検索結果は毎日更新されます。
        </Translate>
      </>
    ),
  },
];

function Feature({ title, description }: { title: string; description: JSX.Element | string }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--lg padding-vert--md">
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
            <Feature key={idx} title={props.title} description={props.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
