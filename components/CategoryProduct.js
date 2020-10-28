import React from 'react';
import PropTypes from 'prop-types'

export default function CategoryProduct({ src, alt, name, slug, price, colors }) {

    const colorOptions = colors.map((c) =>
        <span key={c} class={`color-box color-box--${c}`}></span>
    );

    return (
        <>
            <div class="my-5">
                <a class="c-off-black" href={slug}>
                    <img src={src} alt={alt} />
                    <h3 class="mb-1">{name}</h3>
                    <p class="mb-2">${price} • Strawberry</p>
                </a>
                <div>
                    {colorOptions}
                </div>
            </div>
        </>
    )
}

CategoryProduct.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    colors: PropTypes.array,
}
