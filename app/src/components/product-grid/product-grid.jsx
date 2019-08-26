import React from 'react';
import ProductGridItem from "../product-grid-item/product-grid-item";
import './product-grid.scss'
import CustomButton from "../custom-button/custom-button";

const ProductGrid = ({products}) => {
    return (
        <div className={`product-grid`}>
            {
                products ?
                    products.map((product, i) => {
                        const {image, price, name} = product;
                        return <ProductGridItem key={i} price={price} name={name} image={image}/>
                    }) : null
            }

            <CustomButton btnText={'butotn'}/>

        </div>
    );
};

export default ProductGrid;