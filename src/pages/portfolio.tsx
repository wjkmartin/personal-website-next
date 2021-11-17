import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Portfolio.module.css';
import Header from '../common/Header';

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

export default function Portfolio() {
  const grayscaleValue = useSelector((state: RootState) => state).grayscale;
  const grayscale = Math.trunc(grayscaleValue * 100) / 100;
  const grayscaleStyle = { filter: `grayscale(${grayscale})` };

  return (
    <div style={grayscaleStyle} className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        <div className={styles.Portfolio__linkBar}>
          <a
            className={styles.Portfolio__linkBar_link}
            href="https://github.com/wjkmartin"
          >
            <span style={{ filter: 'grayscale(.95)' }}>👨‍💻</span> Github
          </a>
          <a
            className={styles.Portfolio__linkBar_link}
            href="https://leetcode.com/wjkmartin/"
          >
            <span style={{ filter: 'grayscale(.95)' }}>🥇</span> L33tCode
          </a>
          {/* <a
            className={styles.Portfolio__linkBar_link}
            href="https://www.hackerrank.com/wjkmartin"
          >
            <span style={{ filter: 'grayscale(.95)' }}></span> HackerRank
          </a> */}
        </div>
        <div className={styles.Portfolio__project}>
          <h3>Development Tools I Like To Use</h3>
          <div className={styles.Portfolio__columns}>
            <div
              className={`${styles.Portfolio__column} ${styles.Portfolio__column_1}`}
            >
              <h3 className={styles.Portfolio__column_header}>
                Ones I use frequently
              </h3>
              <ul className={styles.Portfolio__columns_list}>
                <li>React + Hooks</li>
                <li>Next.js (This site)</li>
                <li>SASS</li>
                <li>Styled Components</li>
                <li>Redux</li>
                <li>Github</li>
              </ul>
            </div>
            <div className={styles.Portfolio__column}>
              <h3 className={styles.Portfolio__column_header}>
                I&apos;ve worked with
              </h3>
              <ul className={styles.Portfolio__columns_list}>
                <li>GraphQL</li>
                <li>React Native</li>
                <li>Cypress + React Testing Suite</li>
                <li>Web Animation API</li>
                <li>Firebase</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.Portfolio__project}>
          <h3>Projects</h3>
          <div className={styles.Portfolio__projectButtons}>
            <Link passHref href="/projects/fantasy-quest"><div className={styles.Portfolio__columns_button}> Fantasy Quest </div></Link>
            <Link passHref href="/projects/reddit-timer"><div className={styles.Portfolio__columns_button}> Reddit Timer </div></Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
