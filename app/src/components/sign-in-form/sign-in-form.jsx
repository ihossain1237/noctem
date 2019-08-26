import React from "react";

import {Field, reduxForm} from "redux-form";
import FormInput from "../form-input/form-input";
import './sign-in-form.scss'
import CustomButton from "../custom-button/custom-button";

class SignInForm extends React.Component {

    onSubmit = formValues => {
        console.log(formValues)
        // this.props.onSubmit(formValues);
    };

    render() {
        console.log(this.props)
        return (

            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={`sign-in-form`}>
                <Field name="email" component={FormInput} label={`EMAIL`} placeholder={`enter your email`}/>
                <Field name="password" component={FormInput} label={`PASSWORD`} placholder={`enter your password`}/>
                <CustomButton btnText={'Log In'}/>
            </form>

        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
        errors.email = 'You must enter an email'
    }
    if (!formValues.password) {
        errors.password = 'You must enter a valid password';
    }
    return errors;
};


export default reduxForm(
    {
        form: "signIn",
        validate
    }
)(SignInForm);