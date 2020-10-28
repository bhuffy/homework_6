import React from 'react';
import PropTypes from 'prop-types'
import Link from 'next/Link'

export default function CategoryProduct({ src, alt, name, slug, price, colors }) {

    const colorOptions = colors.map((c) =>
        <span key={c} className={`color-box color-box--${c}`}></span>
    );

    return (
        <>
            <div className="my-5">
                <Link href={slug}>
                    <a className="c-off-black">
                        <img src={src} alt={alt} />
                        <h3 className="mb-1">{name}</h3>
                        <p className="mb-2">${price} • Strawberry</p>
                    </a>
                </Link>
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
