import React from "react";
import './customButton.style.scss';


const CustomButton = ({customStyle,onClick,children}) =>


    <button onClick={onClick} className={`button button--black ${customStyle}`}>{children}</button>;




export default CustomButton;