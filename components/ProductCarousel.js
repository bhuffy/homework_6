import React from 'react';
import PropTypes from 'prop-types'

export default function ProductCarousel({ images }) {
    return (
        <>
            <div className="span-2 align-items-center">
                <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1L1 25L25 49" stroke="white"/>
                </svg>
            </div>
            
            <div className="span-8 flex-justify-center mb-7">
                <div className="product__img">
                    <img src="../images/cat-harness.png" alt="cat harness" />
                </div>
            </div>

            <div className="span-2 align-items-center flex-justify-end">
                <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L25 25L1 49" stroke="white"/>
                </svg>
            </div>
        </>
    )
}

ProductCarousel.propTypes = {
    images: PropTypes.array,
}