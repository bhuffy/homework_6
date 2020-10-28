import React, { useState, useContext } from 'react'
import Head from 'next/Head'
import Link from 'next/Link'

import Header from '../../components/Header'
import ProductHeader from '../../components/ProductHeader'
import ProductCarousel from '../../components/ProductCarousel'

import {CartContext} from '../../context/CartContext'

export default function CatHarness() {
    const SIZES = ['tiny', 'small', 'medium', 'large'];
    const ITEM = {
        id: 1,
        src: 'images/cat-1.png',
        alt: "cat harness",
        name: "Cat Harness",
        price: 125,
        slug: "/product/cat-harness",
        colors: ['strawberry', 'blackberry', 'crazyberry', 'fire-orange'],
        sizes: ['tiny', 'small', 'medium', 'large'],
    };
    
    // define product page state
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(ITEM.colors[0]);
    const [size, setSize] = useState(ITEM.sizes[0]);

    // get cart context
    const [cart, setCart] = useContext(CartContext);
    
    // list color options
    const colorOptions = ITEM.colors.map((c) =>
        <span key={c} className={`color-box color-box--${c}`}></span>
    );

    // list size options
    const sizeOptions = SIZES.map((s) =>
        <a key={s} href="#" className="product-select mr-2">{s}</a>
    );

    // Add this item to cart
    const addToCart = () => {
        const cartItem = {
            ...ITEM,
            quantity, 
            color,
            size,
        };
        setCart([...cart, cartItem]);
        console.log('Added to cart!');
    }

  return (
    <>
      <Head>
        <title key="title">Cat Harness | Muddy Paws Adventure Gear</title>
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
    <section className="product">
        <div className="grid">
            <ProductHeader title={ITEM.name} />
            <ProductCarousel
                images={[ITEM.src]}
            />
            
            <div className="span-4 flex-justify-start">
                <div>
                    { sizeOptions }
                    <Link href="#">
                        <a className=" c-neutral-600">
                            <p className="mt-2">What's my pet size?</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="span-4 flex-justify-center">
                <button onClick={addToCart} className="btn btn--primary">Add To Cart +</button>
            </div>

            <div className="span-4 flex-justify-end">
                { colorOptions }
            </div>
        </div>
    </section>
    </>
  )
}