import React from 'react';
import LogoSelecter from '../design/logo-selecter';
import styles from './napokura-logos.module.css';

export default function NapokuraLogos() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <LogoSelecter logoSelection="nomaikura" fill="#fff" />
        </div>
        <div className={styles.box}>
          <div className={styles.flex}>
            <LogoSelecter logoSelection="nomaikura" fill="#fff" />
            <span>NEXT</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.flex}>
            <LogoSelecter logoSelection="nomaikura" fill="#fff" />
            <span>MD</span>
          </div>
        </div>
      </div>
    </>
  );
}
