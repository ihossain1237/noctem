import React from "react";

import './formError.style.scss';

const FormErrorComponent = ({error, touched}) => {
    if (touched && error) {
        return <div className={`ui error message`}>
            <div className={`header`}>{error}</div>
        </div>
    } else {
        return null;
    }
};

export default FormErrorComponent;