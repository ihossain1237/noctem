import React from 'react';
import './cartItem.style.scss';
import Img from 'react-image';
import {addToCart,removeFromCart,deleteFromCart} from "../../../redux/cart/cart.actions";
import {connect} from "react-redux";
import CustomButton from "../../custom-button/customButton.component";
const CartItem = ({product,addToCart,removeFromCart,deleteFromCart}) => {
    const {name,price,image,itemCount} = product;
    return (
            <div className={`container-fluid cart-item`}>
                <div>
                    <Img src={image}  className={`img-fluid cart-item-img`}/>
                </div>
                <div className={`cart-item-info`}>
                    <span className={`cart-item-info-name`}>{name}</span>
                    <span className={`cart-item-info-price`}>${(price*itemCount).toFixed(2)}</span>
                    <div className={`cart-item-info-quantity`}>
                        <CustomButton onClick={()=>removeFromCart(product)} > &#10094;</CustomButton>
                        <span className={`cart-item-info-itemCount`}> {itemCount}</span>
                        <CustomButton onClick={()=>addToCart(product)} >&#10095;</CustomButton>
                    </div>
                    <CustomButton onClick={()=>deleteFromCart(product)} customStyle={`cart-item-remove`} >Delete</CustomButton>
                </div>
            </div>

    );
};

export default connect(null,{addToCart,removeFromCart,deleteFromCart})(CartItem);