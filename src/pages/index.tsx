import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <title>Starter App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </div>

      <div className={styles.main}>
        <div className={styles.title}>
          Welcome to the Next Starter App!
        </div>
      </div>
    </div>
  )
}
