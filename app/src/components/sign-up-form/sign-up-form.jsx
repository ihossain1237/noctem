import React from "react";
import {Field, reduxForm} from "redux-form";
import "./sign-up-form.scss";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";

class SignUpForm extends React.Component {

    render() {

        return (
            <form className={`sign-up-form`}>
                <div className={`sign-up-form-name`}>
                    <Field name={`firstName`} label={`FIRST NAME`} component={FormInput}/>
                    <Field name={`middleName`} label={`LAST NAME`} component={FormInput}/>
                </div>
                <div className={`sign-up-form-email`}>
                    <Field name={`email`} type={`email`} label={`EMAIL`} component={FormInput}/>
                    <Field name={`confirmEmail`} type={`email`} label={`CONFIRM EMAIL`} component={FormInput}/>
                </div>
                <div className={`sign-up-form-password`}>
                    <Field name={`password`} type={`password`} label={`PASSWORD`} component={FormInput}/>
                    <Field name={`confirmPassword`} type={`password`} label={`CONFIRM PASSWORD`} component={FormInput}/>
                </div>
                <CustomButton btnText={`CREATE ACCOUNT`}/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signUp'
})(SignUpForm);