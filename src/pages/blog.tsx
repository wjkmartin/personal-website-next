import Header from '../common/Header';
import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css'

import { useSelector } from 'react-redux';

export default function Blog() {
  const grayscaleValue = useSelector((state) => state).grayscale;
  const grayscale = Math.trunc(grayscaleValue * 100) / 100;
  const grayscaleStyle = { filter: `grayscale(${grayscale})` };
  return (
    <div style={grayscaleStyle} className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>BLOG</main>

      <footer className={commonStyles.footer}></footer>
    </div>
  );
}
