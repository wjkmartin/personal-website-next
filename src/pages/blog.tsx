import Header from '../common/Header';
import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';

import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

export default function Blog() {
  const grayscaleValue = useSelector((state: RootState) => state).grayscale;
  const grayscale = Math.trunc(grayscaleValue * 100) / 100;
  const grayscaleStyle = { filter: `grayscale(${grayscale})` };
  return (
    <div style={grayscaleStyle} className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        <div className={commonStyles.centeredVertically}>
          <p>
            I haven&apos;t added any blog posts yet, but when I do, they&apos;ll be
            here.
          </p>
        </div>
      </main>

      <footer className={commonStyles.footer}></footer>
    </div>
  );
}
