import React from 'react';

import './productGridItem.style.scss';
import 'hover.css'
import CustomButton from "../../custom-button/customButton.component";
import Img from 'react-image';
import {addToCart} from "../../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {useSpring,animated,config} from "react-spring";
import Loader from "../../loader/loader.component";

const ProductGridItem = ({product,addToCart}) => {
    const props = useSpring({config:{duration:100},opacity:1,from:{opacity:0}});
    const {name,image,price}  = product;
    return     <animated.div  className={`container-fluid productGridItem `} style={props}>
                <div className={`productGridItem-img`}>
                    <Img className={`img-fluid`} loader={Loader}  src={`${image}`} alt=""/>
                </div>
                <div className={`productGridItem-info`}>
                    <span className={`productGridItem-info-name`}>{name}</span>
                    <span  className={`productGridItem-info-price`}>${`${price}`}</span>
                    <CustomButton onClick={()=>addToCart(product)} customStyle={`productGridItem-info-btn`} btnText={'Add to cart'}>Add To Cart</CustomButton>
                </div>

            </animated.div>

};


export default connect(null,{addToCart})(ProductGridItem);
