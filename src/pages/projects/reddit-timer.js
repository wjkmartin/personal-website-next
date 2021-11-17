import React from 'react';

import Image from 'next/image';

import _Head from '../../common/_Head';
import Header from '../../common/Header';

import styles from '../../styles/Portfolio.module.css';
import commonStyles from '../../styles/commonStyles.module.css';

export default function FantasyQuest() {
  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        <div className={styles.Portfolio__project_morePadding}>
          <h3 className={styles.Portfolio__project_title}>
            Reddit Timer - It helps you figure out when to post to a subreddit
          </h3>
          <Image
            width="1913px"
            height="1359px"
            src="/reddit_timer_thumb.png"
            alt="A screenshot of Reddit Timer"
          />
          <p>
            This project was completed as part of the premium course at{' '}
            <a
              className={styles.Portfolio__project_link}
              target="_blank"
              href="https://profy.dev/employers"
              rel="noopener noreferrer"
            >
              profy.dev
            </a>
            . This course mimics a professional real world development
            environment. <br /><br />The goal of the course is to teach you how to build a
            web app from scratch using really world professional development
            processes. <br /> The implementation details are left up to you as long as
            you use React, but the design is provided.
          </p>
          <a
            className={styles.Portfolio__project_link}
            href="https://github.com/wjkmartin/reddit-timer-wjkmartin"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can find it on Github here
          </a>
          <h4>What I learned on this project:</h4>
          <ul>
            <li>
              Creating pixel perfect designs - which is a must for a
              professional project. I learned how to implement designs from{' '}
              <a
                target="_blank"
                className={styles.Portfolio__project_link}
                href="https://www.figma.com/"
                rel="noopener noreferrer"
              >
                Figma
              </a>{' '}
              to do this.
            </li>
            <li>
              I learned how to create custom React hooks -{' '}
              <a
                className={styles.Portfolio__project_link}
                target="_blank"
                href="https://github.com/wjkmartin/reddit-timer-wjkmartin#about-this-project"
                rel="noopener noreferrer"
              >
                links to code here.
              </a>
            </li>
            <li>
              Writing tests, including unit tests, integration tests and end to
              end tests.
            </li>
            <li>Data fetching with error handling.</li>
            <li>Professional Git workflow with pull requests.</li>
          </ul>
          <p>Overall a lovely course and I learned a lot from this, I highly recommend anyone who is interested in learning important skills for working on a professional team do this project.</p>
        </div>
      </main>
    </div>
  );
}
