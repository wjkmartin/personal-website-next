import React from 'react';

import Image from 'next/image';
import styles from './Socials.module.css';

const Socials = () => {
  return (
    <div className={styles.Socials}>
      <a
        className={styles.Socials__item}
        href="https://twitter.com/willjmartin"
      >
        <Image
          width="50px"
          height="50px"
          src="/twitter.png"
          alt="twitter icon"
        ></Image>
      </a>
      <a
        className={styles.Socials__item}
        href="https://www.linkedin.com/in/will-martin-a1890b184/"
      >
        <Image
          width="50px"
          height="50px"
          src="/linkedin.png"
          alt="linkedin icon"
        ></Image>
      </a>

      <a className={styles.Socials__item} href="https://github.com/wjkmartin">
        <Image
          width="50px"
          height="50px"
          src="/github.png"
          alt="github icon"
        ></Image>
      </a>
    </div>
  );
};

export default Socials;
