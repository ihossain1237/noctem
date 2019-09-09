import {FETCH_PRODUCTS} from "../action.types";
import appData from '../../api/appData';


export const fetchProducts = (category, type) =>async  dispatch => {
    const response = await appData.get(`/products/${category.toLowerCase()}/${type.toLocaleLowerCase()}`);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    })
};