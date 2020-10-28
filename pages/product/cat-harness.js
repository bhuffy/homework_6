import Link from 'next/link'
import Head from 'next/Head'

import Header from '../../components/Header'
import ProductHeader from '../../components/ProductHeader'
import ProductCarousel from '../../components/ProductCarousel'

export default function CatHarness() {
    const colors = ['strawberry', 'blackberry', 'crazyberry', 'fire-orange'];
    const sizes = ['tiny', 'small', 'medium', 'large'];
    
    const colorOptions = colors.map((c) =>
        <span key={c} class={`color-box color-box--${c}`}></span>
    );

    const sizeOptions = sizes.map((s) =>
        <a key={s} href="#" class="product-select mr-2">{s}</a>
    );
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
    <section class="product">
        <div class="grid">
            <ProductHeader title="Cat Harness" />
            <ProductCarousel
                images={['/images/cat-harness.png']}
            />
            
            <div class="span-4 flex-justify-start">
                <div>
                    { sizeOptions }
                    <a href="#" class=" c-neutral-600"><p class="mt-2">What's my pet size?</p></a>
                </div>
            </div>

            <div class="span-4 flex-justify-center">
                <p><a class="btn btn--primary" href="#">Add To Cart +</a></p>
            </div>

            <div class="span-4 flex-justify-end">
                { colorOptions }
            </div>
        </div>
    </section>
    </>
  )
}