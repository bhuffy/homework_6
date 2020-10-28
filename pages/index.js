import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title key="title">Home | Muddy Paws Adventure Gear</title>
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

    <Header />

    {/* hero */}
    <section class="hero">
        <div class="hero__content">
            <h1 class="c-white mb-0">CAT HARNESS</h1>
            <p class="c-white mt-3">Adventure gear to help your pet climb any mountain.</p>
            <a href="cats.html" class="btn btn--primary mt-4">Shop Cat Harness</a>
        </div>
    </section>
    {/* end hero */}

    {/* blurb */}
    <section class="span-12 mt-8">
        <h2 class="text-center">The best adventure gear for pets. Ever.</h2>
        {/* end blurb */}
    </section>

    {/* cats */}
    <section class="home-grid home-section">
        <div class="home-section__blurb home-section__blurb--1">
            <div>
                <h3>Cats</h3>
                <p>A hiker pal for your hiker pal. A suit that fits any cat.</p>
                <a class="btn btn--secondary" href="cats.html">Shop Cats</a>
            </div>
        </div>
        <img class="home-section__img home-section__img--1" src="images/home-1.png" alt="cat in nature" />
    </section>
    {/* end cats */}

    {/* dogs */}
    <section class="home-grid home-section">
        <div class="home-section__blurb home-section__blurb--2">
            <div>
                <h3>Dogs</h3>
                <p>The right fit for any scenario. Check out our options.</p>
                <a class="btn btn--secondary" href="dogs.html">Shop Dogs</a>
            </div>
        </div>
        <img class="home-section__img home-section__img--2" src="images/home-2.png" alt="dog in nature" />
    </section>
    {/* end dogs */}

    {/* accessories */}
    <section class="home-grid home-section">
        <div class="home-section__blurb home-section__blurb--3">
            <div>
                <h3>Accessories</h3>
                <p>Storage units, packs, leashes, and more.</p>
                <a class="btn btn--secondary" href="accessories.html">Shop Accessories</a>
            </div>
        </div>
        <img class="home-section__img home-section__img--3" src="images/home-3.png" alt="pets wearing accessories" />
    </section>
    {/* end accessories */}

    <Footer />
    </div>
  )
}
