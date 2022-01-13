import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const HeaderLink = (props) => {
  const style =
    props.currentRoute === props.href
      ? styles.Header__link_currentRoute
      : styles.Header__link;

  const home = (
    <a
      href={props.href}
      className={`${style} ${
        props.currentRoute === '/' ? styles.Header__link_homepageOnly : ''
      } ${props.text === 'WILL MARTIN' ? styles.Header__myName : ''}`}
    >
      {props.text}
    </a>
  );
  if (props.href === '/') {
    return home;
  } else return (
      <Link passHref href={props.href}>
        <a
          className={`${style} ${
            props.currentRoute === '/' ? styles.Header__link_homepageOnly : ''
          } ${props.text === 'WILL MARTIN' ? styles.Header__myName : ''}`}
        >
          {props.text}
        </a>
      </Link>
    );
};

export default HeaderLink;
