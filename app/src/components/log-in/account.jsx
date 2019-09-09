import React from "react";
import './account.scss';
import {connect} from "react-redux";

import SignInForm from "../signInForm/signInForm.component";

class Account extends React.Component {
    onSignUpSubmit = (formValues)=>{


    };

    onSignInSubmit = (fv)=>{

    };

    render() {
        return (<div className={`account`}>
            <SignInForm/>
        </div>)
    }
};

export default connect(null)(Account);