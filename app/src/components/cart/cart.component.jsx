import React, {Component} from 'react';
import CartItem from "./cartItem/cartItem.component";
import {connect} from "react-redux";
import './cart.style.scss'


const Cart = ({cart}) => {
    const {items} = cart;
    const itemList = items.map(item =>{

        return <CartItem product={item} key={item._id}/>;
    });
    return (
        <div className={`cart`}>
            {itemList}
        </div>
    );
};



const mapStateToProps = state=>{
  return{
      cart:state.cart
  }
};
export default connect(mapStateToProps)(Cart);







