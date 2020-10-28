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

export default function Accessories() {
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
        <Header />
        <CategoryHeader title="accessories" />
        <main className="category grid">
            <Breadcrumb>Home / Accessories</Breadcrumb>
            <CategorySidebar />
            <CategoryProducts>
                <CategoryProduct
                    src={'images/accessory-1.png'}
                    alt="water storage pack"
                    name="Water Storage Pack"
                    price="125"
                    slug="/product/water-storage-pack"
                    colors={['strawberry', 'blackberry', 'crazyberry', 'fire-orange', 'lightberry', 'teal']}
                />
                <CategoryProduct
                    src={'images/accessory-2.png'}
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