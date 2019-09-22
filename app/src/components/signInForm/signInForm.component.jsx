import React from "react";

import {Field, reduxForm} from "redux-form";
import FormInput from "../formInput/formInput.compoent";
import './signInForm.style.scss'
import CustomButton from "../custom-button/customButton.component";
import {signIn} from "../../redux/signIn/signIn.actions";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class SignInForm extends React.Component {


    onSubmit = ({email,password}) => {

        this.props.signIn(email,password);
    };

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={`sign-in-form`}>
                <Field name="email" component={FormInput} label={`EMAIL`} placeholder={`enter your email`}/>
                <Field name="password" component={FormInput} label={`PASSWORD`} placholder={`enter your password`}/>
                <CustomButton>SIGN IN</CustomButton>

                <span className={`register-text`}>Dont Have an account ? <Link to={'/signup'}>Sign up</Link></span>
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
        form: "signInForm",
        validate
    }
)(connect(null,{signIn})(SignInForm));