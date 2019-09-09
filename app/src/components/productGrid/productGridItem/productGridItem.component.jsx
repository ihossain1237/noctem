import React from 'react';

import './productGridItem.style.scss';
import 'hover.css'
import CustomButton from "../../custom-button/customButton.component";
import Img from 'react-image';
import {addToCart, removeFromCart} from "../../../redux/cart/cart.actions";
import {connect} from "react-redux";

const ProductGridItem = ({product,addToCart,cart}) => {

    const {name,image,price,_id:itemId}  = product;

    return <div className={`product-grid-item`} >
            <Img className={`product-grid-item-image `} src={`${image}`} alt=""/>
        <CustomButton onClick={()=>addToCart(product)} customStyle={`product-grid-item-cart`} btnText={'Add to cart'}/>
        <span  className={`product-grid-item-price`}>${`${price}`}</span>
    </div>
};
const mapStateToProps = state=>{
    return{
        cart:state.cart
    }
};

export default connect(mapStateToProps,{addToCart})(ProductGridItem);
