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
            Movie Rec - A Keras driven cross platform movie reccomendation app that&apos;s actually user friendly
          </h3>
          <a href="/movie_rec_app_arch.png" target="_blank">  
          <Image
            className={styles.Portfolio__project_image}
            width="2071px"
            height="1711px"
            src="/movie_rec_app_arch.png"
            alt="A screenshot of Reddit Timer"
          />
          </a>
          <p>
            Lorem ipsum
          </p>
          <a
            className={styles.Portfolio__project_link}
            href="https://github.com/wjkmartin/movie-rec-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can find the Next.js client on Github here
          </a>
          <a
            className={styles.Portfolio__project_link}
            href="https://github.com/wjkmartin/movie-rec-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            and you can find the Apollo server on Github here
          </a>
          <h4>What I learned on this project:</h4>
          <ul>
            <li>
              Ipsum
            </li>
            <li>
              Sit amet
            </li>
            <li>
              Lorem
            </li>
            <li>Ipsum</li>
            <li>Dolor</li>
          </ul>
          <p>Delor sit emet</p>
        </div>
      </main>
    </div>
  );
}
