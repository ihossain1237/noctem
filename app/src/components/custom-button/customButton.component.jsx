import React from "react";
import './customButton.style.scss';


const CustomButton = ({customStyle,onClick,children}) =>


    <button onClick={onClick} className={`btn btn--black ${customStyle}`}>{children}</button>;




export default CustomButton;