import React from 'react';
import './cartItem.style.scss';
import Img from 'react-image';
import {addToCart,removeFromCart,deleteFromCart} from "../../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {useSpring,animated} from "react-spring";
import CustomButton from "../../custom-button/customButton.component";
import Loader from "../../loader/loader.component";
import LazyLoad from 'react-lazy-load';
const CartItem = ({product,addToCart,removeFromCart,deleteFromCart}) => {
    const props = useSpring({config:{duration:1000},opacity:1,from:{opacity:0}});
    const {name,price,image,itemCount} = product;
    return (
        <animated.div className={`cart-item`} style={props}>
            <LazyLoad offsetVertical={0} offsetHorizontal={0}>
                <Img src={image}  className={`img-fluid cart-item-img`}/>
            </LazyLoad>
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

        </animated.div>
    );
};

export default connect(null,{addToCart,removeFromCart,deleteFromCart})(CartItem);