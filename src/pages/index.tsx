import dynamic from 'next/dynamic'

import _Head from '../common/_Head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const Header = dynamic(() => import('../common/Header'))
  return (
    <div className={styles.container}>
      <_Head />
      <Header />
      <main className={styles.main}>
        Revamp in progress, please check back in a few days. In the meantime - be kind and spread joy where you can.  
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
