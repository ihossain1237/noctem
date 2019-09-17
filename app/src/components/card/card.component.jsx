import React from 'react';
import Img from 'react-image';
const Card = (props) => {
    return (
        <div className={`cart`}>
            <div className={`cart-img`}>
               <Img src={props.image}/>
            </div>
            <div className={`cart-content`}>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Card;