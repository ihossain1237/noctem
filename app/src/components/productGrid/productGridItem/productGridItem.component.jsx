import React from 'react';

import './productGridItem.style.scss';
import 'hover.css'
import CustomButton from "../../custom-button/customButton.component";
import Img from 'react-image';
import {addToCart, removeFromCart} from "../../../redux/cart/cart.actions";
import {connect} from "react-redux";

const ProductGridItem = ({product,addToCart,cart}) => {

    const {name,image,price}  = product;

    return <div className={`container-fluid productGridItem `} >
        <div className={`productGridItem-img`}>
            <Img className={`img-fluid`}  src={`${image}`} alt=""/>
        </div>
            <div className={`productGridItem-info`}>
                <span className={`productGridItem-info-name`}>{name}</span>
                <span  className={`productGridItem-info-price`}>${`${price}`}</span>
                <CustomButton onClick={()=>addToCart(product)} customStyle={`productGridItem-info-btn`} btnText={'Add to cart'}>Add To Cart</CustomButton>
            </div>

    </div>
};
const mapStateToProps = state=>{
    return{
        cart:state.cart
    }
};

export default connect(mapStateToProps,{addToCart})(ProductGridItem);
