import React from 'react';

import './productGridItem.style.scss';

import CustomButton from "../../custom-button/customButton.component";
import Img from 'react-image';
import {addToCart} from "../../../redux/cart/cart.actions";
import {connect} from "react-redux";
import Loader from "../../loader/loader.component";
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';


const ProductGridItem = ({product,addToCart}) => {

    const {name,image,price}  = product;

    return (

            <div  className={`container-fluid productGridItem `} >
                <div   className={`productGridItem-img`}>
                    <Img key={image}  className={`img-fluid`}  src={[`${image}`]} loader={Loader} alt=""/>
                </div>
                <div key={image} className={`productGridItem-info`}>
                    <span className={`productGridItem-info-name`}>{name}</span>
                    <span  className={`productGridItem-info-price`}>${`${price}`}</span>
                    <CustomButton onClick={()=>{
                        addToCart(product);
                        toast.notify('Item Added',{
                            duration:1000,
                            position:"bottom"
                        });
                    }} customStyle={`productGridItem-info-btn`} btnText={'Add to cart'}>Add To Cart</CustomButton>
                </div>
            </div>

    )



};


export default connect(null,{addToCart})(ProductGridItem);
