import React from 'react';

import './product-grid-item.scss';
import 'hover.css'

const ProductGridItem = ({name, image, price}) => {
    return <div className={`product-grid-item`}>
        <img className={`product-grid-item-image`} src={`${image}`} alt=""/>
        <span className={`product-grid-item-cart`}>Add To Cart</span>
        <span className={`product-grid-item-price`}>${`${price}`}</span>
    </div>
};

export default ProductGridItem;
