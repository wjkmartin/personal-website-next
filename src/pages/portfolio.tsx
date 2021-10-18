import _Head from '../common/_Head';
import styles from '../styles/Home.module.css';
import Header from '../common/Header';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <_Head />
      <Header />

      <main className={styles.main}>PORTFOLIO</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
