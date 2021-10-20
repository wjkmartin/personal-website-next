import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

import HeaderLink from './HeaderLink';

import HeaderModal from './HeaderModal';

const Header = () => {
  const currentRoute = useRouter().pathname;
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  const navBar = (
    <div className={styles.Header__linkCluster}>
      {/* <HeaderLink text="ABOUT" href="/about" currentRoute={currentRoute} /> */}
      <HeaderLink text="BLOG" href="/blog" currentRoute={currentRoute} />
      <HeaderLink
        text="PORTFOLIO"
        href="/portfolio"
        currentRoute={currentRoute}
      />
      <HeaderLink text="CONTACT" href="/contact" currentRoute={currentRoute} />
    </div>
  );

  return (
    <div className={styles.Header}>
      <HeaderLink text="WILL MARTIN" href="/" currentRoute={currentRoute} />
      {windowSize.width <= 700 ? <HeaderModal /> : navBar}
    </div>
  );
};

export default Header;
