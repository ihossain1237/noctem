import {SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT} from "../action.types";

const initialState = {
    isSignedIn: false,
    user:null,
    errors: null
};

const signInReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                user: payload
            };

        case SIGN_IN_FAIL:
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                user: null,
                errors: payload
            };

        default:
            return state;
    }


};


export default signInReducer;

