import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="hero__title">{siteConfig.title}</div>
        <div className="hero__subtitle">
          Transforming gaming media with open and modern web technologies.
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--info button--lg"
            to="/docs/special/intro"
          >
            <Translate id="general.intro">Technical info</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main className="container">
        <div className={styles.license}>
          Released under MIT License. Read license{' '}
          <a href="https://github.com/sasigume/markdown-gaming/blob/main/LICENSE">
            here
          </a>
          .
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
