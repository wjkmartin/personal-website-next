import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">
        <a className={styles.Header__myName}>WILL MARTIN</a>
      </Link>
      <div className={styles.Header__linkCluster}>
        <Link href="/about">
          <a className={styles.Header__link}>ABOUT</a>
        </Link>
        <Link href="/blog">
          <a className={styles.Header__link}>BLOG</a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.Header__link}>PORTFOLIO</a>
        </Link>
        <Link href="/contact">
          <a className={styles.Header__link}>CONTACT</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
