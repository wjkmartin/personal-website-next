import _Head from '../common/_Head';
import commonStyles from '../styles/Home.module.css';
import styles from '../styles/Portfolio.module.css';
import Header from '../common/Header';

export default function Portfolio() {
  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        <div className={styles.Portfolio__linkBar}>
          <a className={styles.Portfolio__linkBar_link} href="https://github.com/wjkmartin"><span style={{filter: 'grayscale(.95)'}}>👨‍💻</span> Github</a>
          <a className={styles.Portfolio__linkBar_link} href="https://www.hackerrank.com/wjkmartin"><span style={{filter: 'grayscale(.95)'}}>🥇</span> HackerRank</a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
