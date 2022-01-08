/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import Script from 'next/script';

import Header from '../common/Header';

import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Home.module.css';

import Image from 'next/image';
import Socials from '../components/Socials';
declare const window: any;
export default function Home() {
  return (
    <div id="vantaBG" className={`${commonStyles.container} ${styles.homeBG}`}>
      
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          let vanta = window.VANTA;
          vanta.NET({
            el: '#vantaBG',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xf5a044,
            backgroundColor: 0x151e3c,
            points: 14.0,
          });
        }}
      />
      <_Head />
      <Header />
      
      <main
        className={`${commonStyles.main} ${commonStyles.centered} ${commonStyles.verticalCenter}`}
      >
        <div className={styles.Home__hello}>
          <h1 className={styles.Home__hello_header}>
            I&apos;m <span style={{ color: '#F4A261' }}>Will Martin</span>, a
            software developer based in British Columbia, Canada.
          </h1>
          <br />
          <br />
          <p className={styles.Home_hello_text}>
            As we grow more connected by the day, let&apos;s choose to exercise
            our creativity and compassion to build something meaningful and
            impactful.
            <br />
            <br />
            I would love to be a part of your team and help you build something
            that will change the world, or even a small part of it.
            <br />
            <br />
            Please check out my{' '}
            <a style={{ color: '#F4A261' }} href="/portfolio">
              portfolio
            </a>{' '}
            and contact me if you&apos;d like to work together.
          </p>
        </div>
      </main>
      <Socials />
    </div>
  );
}
