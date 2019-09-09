import React from 'react';

import './formInput.style.scss';

const FormInput = ({input, type, label, meta}) => {
    const {error, touched} = meta;
    const className = `field ${error && touched ? 'error' : ''}`;
    return <div className={className}>
        <label className={`field-label`}>{label}</label>
        <input className={`field-input ${error && touched ? 'field-input-error' : ''}`} {...input} type={type}/>
        <span className={`field-error`}>{
            error && touched ? error : ''
        }</span>


    </div>
};


export default FormInput;