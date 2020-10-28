import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title key="title">Accessories | Muddy Paws Adventure Gear</title>
        <meta key="theme-color" name="theme-color" content="#ffffff" />
        <meta
            key="description"
            name="description"
            content="Adventure gear to help your pet climb any mountain."
        />
        <meta
            key="keywords"
            name="keywords"
            content="Dogs,Cats,Paws,Adventure,Gear,Harnesses"
        />
        <meta key="author" name="author" content="Bennett Huffman" />
        <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <link key="favion" rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Accessories
        </h1>
      </main>
    </div>
    </>
  )
}