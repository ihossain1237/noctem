import React from "react";

import './form-error.scss';

const FormError = ({error, touched}) => {
    if (touched && error) {
        return <div className={`ui error message`}>
            <div className={`header`}>{error}</div>
        </div>
    } else {
        return null;
    }
};

export default FormError;