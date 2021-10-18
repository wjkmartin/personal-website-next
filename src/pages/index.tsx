import Header from '../common/Header'
import _Head from '../common/_Head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <_Head />
      <Header />
      <main className={styles.main}>
        HOME
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
