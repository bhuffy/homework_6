import React from 'react';

export default function Footer() {
    return (
        <>
            <div class="grid bg-white">
                <header class="header">
                    <a href="index.html">
                        <img class="logo" src="assets/images/logo-horizontal.svg" alt="logo" />
                    </a>
                    <nav class="nav">
                        <a href="cats.html" class="nav__item">Cats</a>
                        <a href="dogs.html" class="nav__item">Dogs</a>
                        <a href="accessories.html" class="nav__item">Accessories</a>
                        <a href="index.html" class="nav__item"><img  src="assets/images/cart.svg" alt="shopping cart" /></a>
                    </nav>
                </header>
            </div>
        </>
    )
}