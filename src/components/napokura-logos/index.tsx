import React from 'react';
import LogoSelecter from '../design/logo-selecter';
import styles from './napokura-logos.module.css';

export default function NapokuraLogos() {
  return (
    <>
      <div className={styles.center}>
        <h2>全てがひとつに。</h2>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.box}>
          <LogoSelecter logoSelection="nomaikura" />
        </div>
        <div className={styles.box}>
          <div className={styles.flex}>
            <LogoSelecter logoSelection="nomaikura" /> <span>NEXT</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.flex}>
            <LogoSelecter logoSelection="nomaikura" /> <span>MD</span>
          </div>
        </div>
      </div>
    </>
  );
}
