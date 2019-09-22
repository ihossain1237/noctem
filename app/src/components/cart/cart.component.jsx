import React, {Component} from 'react';
import CartItem from "./cartItem/cartItem.component";
import {connect} from "react-redux";
import './cart.style.scss'
import CustomButton from "../custom-button/customButton.component";
import {clearCart} from "../../redux/cart/cart.actions";

const Cart = ({cart,clearCart}) => {
    let totalPrice = 0;
    if (cart.items.length>0)
        totalPrice = cart.items.map(item=>item.itemCount*item.price).reduce((a,c)=>a+c);

    return (
        <div className={`container-fluid cart`}>
            <div className={`panel`}>
                <div className={`totalPrice`}>
                    <span className={`totalPrice-text`}>TOTAL PRICE : ${totalPrice.toFixed(2)}</span>
                    <span className={`totalPrice-divider`}>-</span>
                </div>
                <div className={`buttons`}>
                    <CustomButton onClick={()=>clearCart()} customStyle={`buttons-clear`}>Clear All</CustomButton>
                    <CustomButton customStyle={`buttons-checkout`}>Check Out </CustomButton>
                </div>
            </div>

            <div className={`list`}>
                {cart.items.map(item=>{
                    return <CartItem key={item.id} product={item}/>
                })}
            </div>
            </div>
    );
};



const mapStateToProps = state=>{
  return{
      cart:state.cart
  }
};
export default connect(mapStateToProps,{clearCart})(Cart);







