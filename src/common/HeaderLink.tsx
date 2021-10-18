import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const HeaderLink = (props) => {
  const style =
    props.currentRoute === props.href
      ? styles.Header__link_currentRoute
      : styles.Header__link;
  return (
    <Link href={props.href}>
      <a className={`${style} ${props.text === "WILL MARTIN" ? styles.Header__myName : ''}`}>{props.text}</a>
    </Link>
  )
};

export default HeaderLink;
