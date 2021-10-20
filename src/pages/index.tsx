import Header from '../common/Header';

import _Head from '../common/_Head'
import commonStyles from '../styles/commonStyles.module.css'

export default function Home() {
  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        Revamp in progress, please check back in a few days. In the meantime - be kind and spread joy where you can.  
      </main>

      <footer className={commonStyles.footer}>
        
      </footer>
    </div>
  )
}
