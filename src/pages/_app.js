import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {

  return (
    <>
      <NextNProgress color='#F4A261'/>
      <Component  {...pageProps} />
    </>
  )
}

