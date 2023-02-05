import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from '../styles/layout.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header />
      <section className={styles.section}>
        <Component {...pageProps} />
      </section>
    <Footer />   
  </>
  ) 
}
