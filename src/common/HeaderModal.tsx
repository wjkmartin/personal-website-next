import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Header.module.css';
import HeaderLink from './HeaderLink';

const HeaderModal = () => {
  const [isSelected, setIsSelected] = useState(false);

  const dropdown = (
    <div className={styles.Header__modal_dropDown}>
      <HeaderLink href="/about" text="ABOUT"/>
      <HeaderLink href="/blog" text="BLOG" />
      <HeaderLink href="/portfolio" text="PORTFOLIO" />
      <HeaderLink href="/contact" text="CONTACT" />
    </div>
  );

  return (
    <>
    <FontAwesomeIcon
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      icon={faBars}
      className={
        isSelected
          ? `${styles.Header__modal} ${styles.Header__link_currentRoute}`
          : `${styles.Header__modal} ${styles.Header__link}`
      }
    />
    {(isSelected ? dropdown : '')}
  </>
  )
};

export default HeaderModal;
