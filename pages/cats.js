import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CategoryHeader from '../components/CategoryHeader'
import CategorySidebar from '../components/CategorySidebar'
import CategoryProducts from '../components/CategoryProducts'
import CategoryProduct from '../components/CategoryProduct'

export default function Cats() {
    return (
        <>
            <Head>
                <title key="title">Cats | Muddy Paws Adventure Gear</title>
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
            <CategoryHeader title="cats" />
            <main className="category grid">
                <Breadcrumb>Home / Cats</Breadcrumb>
                <CategorySidebar />
                <CategoryProducts>
                    <CategoryProduct
                        src={'images/cat-1.png'}
                        alt="cat harness"
                        name="Cat Harness"
                        price="125"
                        slug="/product/cat-harness"
                        colors={['strawberry', 'blackberry', 'crazyberry', 'fire-orange']}
                    />
                    <CategoryProduct
                        src={'images/cat-2.png'}
                        alt="water storage pack"
                        name="Water Storage Pack"
                        price="125"
                        slug="/product/water-storage-pack"
                        colors={['strawberry', 'blackberry', 'crazyberry', 'fire-orange', 'lightberry', 'teal']}
                    />
                    <CategoryProduct
                        src={'images/cat-3.png'}
                        alt="food storage pack"
                        name="Food Storage Pack"
                        price="125"
                        slug="/product/food-storage-pack"
                        colors={['strawberry', 'blackberry', 'crazyberry', 'fire-orange', 'lightberry', 'teal']}
                    />
                </CategoryProducts>
            </main>
            <Footer />
        </>
    )
}
