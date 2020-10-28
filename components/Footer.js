import React from 'react';

export default function Footer() {
    return (
        <>
            <footer class="bg-off-black py-7">
                <div class="grid">
                    <div class="span-12 grid">
                        <nav class="span-3">
                            <p class="footer__title">Shop</p>
                            <ul class="footer__nav">
                                <li class="footer__item"><a class="nav__item" href="cats.html">Cats</a></li>
                                <li class="footer__item"><a class="nav__item" href="dogs.html">Dogs</a></li>
                                <li class="footer__item"><a class="nav__item" href="accessories.html">Accessories</a></li>
                            </ul>
                        </nav>
                        <nav class="span-3">
                            <p class="footer__title">Information</p>
                            <ul class="footer__nav">
                                <li class="footer__item"><a class="nav__item" href="#">Contact</a></li>
                                <li class="footer__item"><a class="nav__item" href="#">Bulk Order</a></li>
                            </ul>
                        </nav>
                        <nav class="span-3">
                            <p class="footer__title">Terms</p>
                            <ul class="footer__nav">
                                <li class="footer__item"><a class="nav__item" href="#">Privacy Policy</a></li>
                                <li class="footer__item"><a class="nav__item" href="#">Terms of Service</a></li>
                            </ul>
                        </nav>
                        <nav class="span-3">
                            <p class="footer__title">Contact</p>
                            <a class="nav__item" href="https://www.google.com/maps/place/University+Center,+5032+Forbes+Ave,+Pittsburgh,+PA+15213/" target="_blank"><p class="footer__item">5032 Forbes Ave.<br />Pittsburgh, PA 15213</p></a>
                        </nav>
                    </div>
                    
                    <div class="span-12 text-center">
                        <img class="footer__logo mt-7 mb-4" src="images/logo.svg" alt="paw logo" />
                        <small class="display-block c-white">&copy; Muddy Paws Adventure Gear</small>
                    </div>
                </div>
            </footer>
        </>
    )
}