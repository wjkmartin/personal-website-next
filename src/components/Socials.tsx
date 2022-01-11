import React from 'react';

import Image from 'next/image';
import styles from './Socials.module.css';

import twitterIcon from '../../public/twitter.png';
import linkedinIcon from '../../public/linkedin.png';
import githubIcon from '../../public/github.png';

const Socials = () => {
  return (
    <div className={styles.Socials}>
      <a
        className={styles.Socials__item}
        href="https://twitter.com/willjmartin"
      >
        <Image
          src={twitterIcon}
          alt="twitter icon"
        ></Image>
      </a>
      <a
        className={styles.Socials__item}
        href="https://www.linkedin.com/in/will-martin-a1890b184/"
      >
        <Image
          src={linkedinIcon}
          alt="linkedin icon"
        ></Image>
      </a>

      <a className={styles.Socials__item} href="https://github.com/wjkmartin">
        <Image
          src={githubIcon}
          alt="github icon"
        ></Image>
      </a>
    </div>
  );
};

export default Socials;
