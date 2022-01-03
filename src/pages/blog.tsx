import Header from '../common/Header';
import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';


export default function Blog() {
  return (
    <div className={commonStyles.container}>
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
