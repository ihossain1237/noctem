import React from "react";
import './custom-button.scss';


const CustomButton = ({btnText}) => <div className={`btn btn--black`}><span className={`btn-text`}>{btnText}</span>
</div>;

export default CustomButton;