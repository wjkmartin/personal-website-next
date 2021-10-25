import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Portfolio.module.css';
import Header from '../common/Header';

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
            <span style={{ filter: 'grayscale(.95)' }}>🌟</span> L33tCode
          </a>
          <a
            className={styles.Portfolio__linkBar_link}
            href="https://www.hackerrank.com/wjkmartin"
          >
            <span style={{ filter: 'grayscale(.95)' }}>🥇</span> HackerRank
          </a>
        </div>
        <div className={styles.Portfolio__project}>
          <h3 className={styles.Portfolio__column_header}>Development Tools I Like To Use</h3>
          <div className={styles.Portfolio__columns}>
            <div
              className={`${styles.Portfolio__column} ${styles.Portfolio__column_1}`}>
              <h3 className={styles.Portfolio__column_header}>
                Ones I use frequently
              </h3>
              <ul className={styles.Portfolio__columns_list}>
                <li>React + Hooks</li>
                <li>Next.js (This site)</li>
                <li>SASS</li>
                <li>Styled Components</li>
                <li>React-Redux</li>
                <li>Redux</li>
                <li>Github</li> 
              </ul>
            </div>
            <div className={styles.Portfolio__column}>
              <h3 className={styles.Portfolio__column_header}>
                I&apos;ve made projects with
              </h3>
              <ul className={styles.Portfolio__columns_list}>
                <li>Canvas</li>
                <li>React-Spring</li>
                <li>Anime.js</li>
                <li>Web Animation API</li>
                <li>Firebase</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.Portfolio__project}>
          <h3>Fantasy Quest - An RPG built on the web with React and Redux</h3>
          <video autoPlay loop className={styles.Portfolio__project_video}>
            <source src="/vid.webm" />
          </video>
          <p>
            Fantasy Quest (name is a work in progress - yes, it&apos;s
            derivative 😅) is the largest single project I&apos;ve ever worked
            on. It&apos;s an RPG that I started in order to learn the finer
            points of React and Redux.
          </p>
          <a
            className={styles.Portfolio__project_link}
            href="https://github.com/wjkmartin/fantasy-quest-2"
          >
            You can find it on Github here
          </a>
          <h4>What I&apos;ve learned on this project thus far:</h4>
          <ul>
            <li>
              {' '}
              React hooks, and how to manage a large number of React components.
              This app has well over 50 React components.{' '}
            </li>
            <li>
              {' '}
              Redux - I started with base Redux and quickly moved into the
              React-Redux library. Managing global state with Redux is actually
              a joy once you get a hang of the boilerplate.{' '}
            </li>
            <li>
              So many little CSS tricks, like how to make tidy little progress
              bars, SVGs as backgrounds, transforms, ect.
            </li>
            <li>
              Several different ways to do animations. This was specifically for
              the character movement you can see in the clip above - the
              requirements was that multiple animations are chained back to back
              as the pathing occurs. I tried CSS animations, anime.js, and GSAP,
              before finally moving into Web Animation API.
            </li>
            <li>Promises and async functions. Promise.all() is just lovely.</li>
          </ul>
          <p>
            All that being said - I still feel the urge to start all over again.
            I&apos;ve been working on this project part time for the past year,
            and I feel like with what I&apos;ve learned in that time alone
            it&apos;s justifiable to start over and restructure things and use
            new techs, such as Redux Toolkit.
          </p>
          <h3>Where it&apos;s going next:</h3>
          <ul>
            <li>
              Polish in the styling. There&apos;s still default styles quite a
              few components.
            </li>
            <li>
              Content - the pieces are in place, but I need to actually create
              areas for the character to explore - there will be at least two
              dungeons to explore and loot.
            </li>
            <li>
              Performance pass. The combat movement animations stutter a little
              when there&apos;s multiple enemies. This is likely due to
              rerendering at just the wrong time - I still have to explore that
              bug more thouroughly.
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
