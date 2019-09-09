import React from 'react';
import './cartItem.style.scss';
import Img from 'react-image';
import {addToCart,removeFromCart} from "../../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CartItem = ({product,addToCart,removeFromCart}) => {
    const {name,price,image,itemCount} = product;
    return (
        <div className={`cart-item`}>
            <Img src={image} className={`cart-item-img`}/>
            <div className={`cart-item-info`}>
                <span className={`cart-item-info-name`}>{name}</span>
                <span className={`cart-item-info-price`}>${price}</span>
                <div className={`cart-item-info-quantity`}>
                    <span onClick={()=>removeFromCart(product)}>&larr;</span>
                    <span> {itemCount}</span>
                    <span onClick={()=>addToCart(product)} >&rarr;</span>
                </div>
                <span>remove </span>
            </div>

        </div>
    );
};

export default connect(null,{addToCart,removeFromCart})(CartItem);