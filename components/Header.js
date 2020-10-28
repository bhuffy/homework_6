import React from 'react';

export default function Header() {
    return (
        <>
            <div class="grid bg-white">
                <header class="header">
                    <a href="/index">
                        <img class="logo" src="/images/logo-horizontal.svg" alt="logo" />
                    </a>
                    <nav class="nav">
                        <a href="/cats" class="nav__item">Cats</a>
                        <a href="/dogs" class="nav__item">Dogs</a>
                        <a href="/accessories" class="nav__item">Accessories</a>
                        <a href="/index" class="nav__item"><img  src="images/cart.svg" alt="shopping cart" /></a>
                    </nav>
                </header>
            </div>
        </>
    )
}