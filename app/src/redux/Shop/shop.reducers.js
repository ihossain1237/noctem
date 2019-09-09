import {FETCH_PRODUCTS} from "../action.types";

const initialState = {
    products: null
};


const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;