import Header from '../common/Header';
import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css'

export default function Blog() {
  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>BLOG</main>

      <footer className={commonStyles.footer}></footer>
    </div>
  );
}
