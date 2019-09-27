import React from 'react';
import {Field,reduxForm} from "redux-form";
import {connect} from 'react-redux';
import FormInput     from "../formInput/formInput.compoent";
import CustomButton from "../custom-button/customButton.component";
import './dataInputForm.styles.scss'
import appData from "../../api/appData";
const DataInputForm = ({handleSubmit}) => {

    const onSubmit =async formValues=>{
        const {name,price,image,category,type} = formValues;
        const body = JSON.stringify({name,price,image,category,type});
        const config ={
            headers:{
                "Content-Type":"application/json"
            }
        };
        const res = await  appData.post('/products/input',body,config);
        console.log(res);
    };

    return (
            <form className={`dataInputForm`} onSubmit={handleSubmit(onSubmit)}>
                <Field name={`name`} label={'NAME'} component={FormInput}/>
                <Field name={`price`} label={'PRICE'} component={FormInput}/>
                <Field name={`image`} label={'IMAGE'} component={FormInput}/>
                <Field name={`category`} label={'CATEGORY (men/women etc)'} component={FormInput}/>
                <Field name={`type`} label={'TYPE (shirt/t-shirt etc)'} component={FormInput}/>

                <CustomButton>SUBMIT</CustomButton>
            </form>

    );
};

export default reduxForm(
    {
        form:'dataInput'
    }
)(DataInputForm);