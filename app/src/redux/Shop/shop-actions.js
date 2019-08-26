import {FETCH_PRODUCTS} from "../action-types";
import appData from '../../api/appData';


export const fetchProducts = (type, item) => async dispatch => {
    const response = await appData.get(`/appData`);

    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data[type][item]
    })
};