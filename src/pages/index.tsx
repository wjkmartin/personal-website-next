import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

import { useState } from 'react';

import Link from 'next/link';

import Header from '../common/Header';

import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Home.module.css';

import Image from 'next/image';
import avatar from '../../public/avatar.svg';
import avatarSurprised from '../../public/avatarSurprised.svg';
import pup from '../../public/pup.jpg';
import victoryPup from '../../public/victoryPup.jpg';
import Game from '../components/Game';

export default function Home() {
  const grayscaleValue = useSelector((state: RootState) => state).grayscale;
  const grayscale = Math.trunc(grayscaleValue * 100) / 100;
  const grayscaleStyle = { filter: `grayscale(${grayscale})` };

  const [gameCompleted, setGameCompleted] = useState(false);

  if (grayscale <= 0 && !gameCompleted) {
    setGameCompleted(true);
  }

  return (
    <div
      style={grayscaleStyle}
      className={`${commonStyles.container} ${styles.coolBackground}`}
    >
      <_Head />
      <Header />
      <main className={`${commonStyles.main} ${commonStyles.centered} `}>
        <h1 className={`${styles.Home__tagline} ${gameCompleted ? '' : styles.Home__tagline_moreVisible}`}>
          {grayscaleValue <= 0
            ? 'A Full Stack Developer Who Actually Loves Color'
            : 'A Full Stack Developer Afraid of Color?'}
        </h1>
        <h3 className={styles.Home__tagline_sub}>
          {grayscaleValue <= 0
            ? 'I create things for the joy of it - I try not to worry if they make sense to everyone.'
            : "That can't be right, can it?"}
        </h3>
        <div className={styles.Home__portrait}>
          <Image
            className={styles.Home__portrait_image}
            src={grayscaleValue <= 0 ? avatar : avatarSurprised}
            alt="Will Martin's portrait"
          />
        </div>
        <div className={styles.Home__gameIntro}>
          <div className={styles.Home__pupContainer}>
            <Image
              className={styles.Home__pupContainer_image}
              src={gameCompleted ? victoryPup : pup}
              alt="A picture of Will Martin's dog"
            />
          </div>
          <div className={styles.Home__hello}>
            <p>
              {gameCompleted
                ? 'You did it hooman!'
                : 'Pictured above is my best friend Will! We need your help to add color to his site!'}
            </p>
            <p>
              {gameCompleted
                ? 'Now you can see the magic of color! Ironically, I still cannot, being a dog 😢.'
                : 'How? Feed me FIVE Rainbones below! I will release their magic powers into the internet!'}
            </p>
          </div>
        </div>
        <div className={styles.Home__gameContainer}>
          {gameCompleted ? (
            <Link href="/portfolio" passHref>
              <div className={`${commonStyles.contentBox} ${styles.Home__stillInterested}`}>
              Still interested in me? Please check out my portfolio page.
              </div>
            </Link>
          ) : (
            <Game setGameCompleted={setGameCompleted} />
          )}
        </div>
      </main>
    </div>
  );
}
