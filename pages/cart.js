import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

import Head from 'next/Head'
import Link from 'next/Link'

import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Cart() {

    const [cart, setCart] = useContext(CartContext);
    console.log(cart);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    return (
        <>
            <Head>
                <title key="title">Cart | Muddy Paws Adventure Gear</title>
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

            {/* <Header /> */}
            <div>Items in cart: {cart.length}</div>
            <div>Total price: {totalPrice}</div>
            {/* <Footer /> */}
        </>
    )
}
