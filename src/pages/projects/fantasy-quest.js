import React from 'react';

import _Head from '../../common/_Head'
import Header from '../../common/Header'

import styles from '../../styles/Portfolio.module.css';
import commonStyles from '../../styles/commonStyles.module.css';

export default function FantasyQuest() {
  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        <div className={styles.Portfolio__project_morePadding}>
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
    </div>
  );
}
