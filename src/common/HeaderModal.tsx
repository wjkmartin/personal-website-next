import React, {useState} from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "../styles/Header.module.css"

const HeaderModal = () => {
    const [isSelected, setIsSelected] = useState(false);

  return <FontAwesomeIcon onClick={() => {setIsSelected(!isSelected)}} icon={faBars} className={isSelected ? `${styles.Header__modal} ${styles.Header__link_currentRoute}` : `${styles.Header__modal} ${styles.Header__link}`} />
};

export default HeaderModal;