import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className="grid bg-white">
                <header className="header">
                    <Link href="/">
                        <a>
                            <img className="logo" src="/images/logo-horizontal.svg" alt="logo" />
                        </a>
                    </Link>
                    <nav className="nav">
                        <Link href="/cats"><a className="nav__item">Cats</a></Link>
                        <Link href="/dogs"><a className="nav__item">Dogs</a></Link>
                        <Link href="/accessories"><a className="nav__item">Accessories</a></Link>
                        <Link href="/"><a className="nav__item"><img  src="images/cart.svg" alt="shopping cart" /></a></Link>
                    </nav>
                </header>
            </div>
        </>
    )
}