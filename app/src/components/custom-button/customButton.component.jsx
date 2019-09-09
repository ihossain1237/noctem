import React from "react";
import './customButton.style.scss';


const CustomButton = ({btnText, customStyle,onClick}) =>


    <button onClick={onClick} className={`btn btn--black ${customStyle}`}>{btnText}
    </button>;

export default CustomButton;