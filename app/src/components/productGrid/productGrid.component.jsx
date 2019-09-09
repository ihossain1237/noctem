import React from 'react';
import ProductGridItem from "./productGridItem/productGridItem.component";
import './productGrid.styles.scss'


const ProductGrid= ({products}) => {
    return (
        <div className={`product-grid`}>
            {
                products ?
                    products.map((product, i) => {
                        return <ProductGridItem key={i} product={product} />
                    }) : null
            }

        </div>
    );
};

export default ProductGrid;