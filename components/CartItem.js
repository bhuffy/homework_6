import React from 'react';
import PropTypes from 'prop-types'
import Link from 'next/Link'

export default function CartItem({ id, src, alt, name, slug, price, color, size, onRemove }) {
    
    return (
        <>
            <div className="cart-item my-5">
                <div className="cart-item__content">
                    <img className="bg-neutral-100 cart-item__img mr-4" src={src} alt={alt} />
                    <div>
                        <h3 className="mb-3">{name}</h3>
                        <div className="cart-item__color-container">
                            <span className={`cart-item__color color-box--${color}`} />
                            <small className="ml-2">{color}</small>
                        </div>
                        <small className="display-block my-2">${price}</small>
                        <small className="display-block my-2">Size: {size}</small>
                        <small className="display-block my-2">Quantity</small>
                    </div>
                </div>
                <div onClick={() => onRemove(id)} className="cart-item__cross">
                    <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.876953L17 16.877M33 32.877L17 16.877M17 16.877L33 0.876953M17 16.877L1 32.877" stroke="#666666" strokeWidth="2.35962"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

CartItem.propTypes = {
    id: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.string,
    onRemove: PropTypes.func,
}
