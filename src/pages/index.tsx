import { useSelector } from 'react-redux';

import { useState } from 'react';

import Header from '../common/Header';

import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Home.module.css';

import Image from 'next/image';
import portrait from '../../public/me_stylized.jpg';
import pup from '../../public/pup.jpg';
import Game from '../components/Game';

export default function Home() {
  const grayscaleValue = useSelector((state) => state).grayscale;
  // truncate grayscale value to 2 decimal places
  const grayscale = Math.trunc(grayscaleValue * 100) / 100;
  console.log(grayscale);
  const grayscaleStyle = { filter: `grayscale(${grayscale})` };

  return (
    <div style={grayscaleStyle} className={`${commonStyles.container}`}>
      <_Head />
      <Header />
      <main className={`${commonStyles.main} ${commonStyles.centered}`}>
        <h1 className={styles.Home__tagline}>
          {grayscaleValue <= 0
            ? 'A Full Stack Developer Who Loves Color'
            : 'A Full Stack Developer Afraid of Color?'}
        </h1>
        <div className={styles.Home__portrait}>
          <Image
            className={styles.Home__portrait_image}
            src={portrait}
            alt="Will Martin's portrait"
          />
        </div>
        <div className={styles.Home__gameIntro}>
          <div className={styles.Home__pupContainer}>
            <Image
              className={styles.Home__pupContainer_image}
              src={pup}
              alt="A picture of Will Martin's dog"
            />
          </div>
          <div className={styles.Home__hello}>
            <p>
              Pictured above is my best friend Will! We need your help to add
              color to his site!
            </p>
            <p>
              How? Feed me Rainbones below! The more I get, the more energy I
              have to cheer up this site!
            </p>
          </div>
        </div>
        <div className={styles.Home__gameContainer}>
          <Game />{' '}
        </div>
      </main>
    </div>
  );
}
