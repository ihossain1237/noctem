import React from "react";
import {Field, reduxForm} from "redux-form";
import "./signUpForm.style.scss";
import CustomButton from "../custom-button/customButton.component";
import FormInput from "../formInput/formInput.compoent";
import {signUp} from "../../redux/signUp/signUp.actions";
import {connect} from "react-redux";

class SignUpForm extends React.Component{



    onSubmit = formValues=>{
        this.props.signUp(formValues);
        console.log(this.props.isSignedUp);
        if (this.props.isSignedUp){
            window.alert('Sign Up successful');
            this.props.history.push('/');
        }

    };

    render() {

        return (
            <form className={`sign-up-form`}  onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className={`sign-up-form-name`}>
                    <Field name={`firstName`} label={`FIRST NAME`} component={FormInput}/>
                    <Field name={`middleName`} label={`MIDDLE NAME  (optional)`} component={FormInput}/>
                    <Field name={`lastName`} label={`LAST NAME`} component={FormInput}/>
                </div>
                <div className={`sign-up-form-email`}>
                    <Field name={`email`} type={`email`} label={`EMAIL`} component={FormInput}/>
                    <Field name={`confirmEmail`} type={`email`} label={`CONFIRM EMAIL`} component={FormInput}/>
                </div>
                <div className={`sign-up-form-password`}>
                    <Field name={`password`} type={`password`} label={`PASSWORD`} component={FormInput}/>
                    <Field name={`confirmPassword`} type={`password`} label={`CONFIRM PASSWORD`} component={FormInput}/>
                </div>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        );
    }
}
const validate = formValues => {
    const errors = {};
    if (!formValues.firstName){
        errors.firstName = 'please enter your first name'
    }
    if (!formValues.lastName){
        errors.lastName = 'please enter your last name'
    }
    if (!formValues.email) {
        errors.email = 'You must enter an email'
    }
    if (formValues.password){
        if (formValues.password.length<8){
            errors.password = "password needs to be more than 8 characters"
        }
    }
    if (!formValues.password) {
        errors.password = 'You must enter a valid password';
    }
    if (formValues.email!==formValues.confirmEmail){
        errors.confirmEmail = "Emails dont match"
    }
    if (formValues.password!==formValues.confirmPassword){
        errors.confrmPassword = 'passwords dont match'
    }
    return errors;
};

const mapStateToProps = state=>{
  return{
      isSignedUp: state.signUp.isSignedUp
  }
};


export default reduxForm({
    form: 'signUp',
    validate

})(connect(mapStateToProps,{signUp})(SignUpForm));