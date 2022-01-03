import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Portfolio.module.css';
import Header from '../common/Header';

import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {

  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
      <Image src="/avatar.svg" alt="Me" width={250} height={250} />
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

        </div>
        <div className={styles.Portfolio__project}>
          <h3 className={styles.Portfolio__project_header}>Development Tools I Like To Use</h3>
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
          <h3 className={styles.Portfolio__project_header}>Projects</h3>
          <div className={styles.Portfolio__projectButtons}>
            <Link passHref href="/projects/fantasy-quest"><div style={{backgroundImage: "url(/fantasy_quest_thumb.png)", backgroundSize: 'cover'}} className={styles.Portfolio__columns_button}>Fantasy Quest<p className={styles.Portfolio__columns_button_subtitle}>A web RPG</p></div></Link>
            <Link passHref href="/projects/reddit-timer"><div style={{backgroundImage: "url(/reddit_timer_thumb.png)", backgroundSize: 'cover'}} className={styles.Portfolio__columns_button}> Reddit Timer <p className={styles.Portfolio__columns_button_subtitle}>Post with more impact</p></div></Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
