import React from 'react';
import PropTypes from 'prop-types'

export default function CategoryHeader({ title }) {
    return (
        <>
            <section class={`category-header category-header--${title}`}>
                <div class="category-header__content">
                    <h1 class="c-white mb-0">{title.toUpperCase()}</h1>
                </div>
            </section>
        </>
    )
}

CategoryHeader.PropTypes = {
    title: PropTypes.string,
}
