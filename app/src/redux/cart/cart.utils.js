import {ADD_TO_CART, CLEAR_CART, DELETE_FROM_CART, REMOVE_FROM_CART} from "../action.types";
import appData from "../../api/appData";


export const cartOperation = function(op,items,targetItem,targetEmail){

    let updatedItems = [];
    if (op===CLEAR_CART) {
        updatedItems = [];
        updateCart(targetEmail,targetItem);
        return updatedItems;
    }
    const existingCartItem = items.find(
      item => item._id ===targetItem._id
    );

    if (op===ADD_TO_CART){
        if (existingCartItem){
            updatedItems = items.map(item=>item._id===targetItem._id?{...item,itemCount:item.itemCount+1}:item);
        }else {
            updatedItems = [...items,{...targetItem,itemCount:1}];
        }
    }
    const deleteItem = ()=>items.filter(item=>item._id!==targetItem._id);
    if (op===REMOVE_FROM_CART){
        if (existingCartItem.itemCount===1){
            updatedItems =  items.filter(item=>item._id!==targetItem._id);
        }else if (existingCartItem.itemCount>1){
            updatedItems = items.map(item=>item._id===targetItem._id?{...item,itemCount:item.itemCount-1}:item)
        }else{
            updatedItems = deleteItem();
        }
    }
    if (op===DELETE_FROM_CART)
        updatedItems = deleteItem();


    updateCart(targetEmail,updatedItems);
    return updatedItems;

};



export const updateCart =async (email,items)=>{
    if (email&&items){

        const body = JSON.stringify({email,items});
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        };
        const res = await appData.post('/cart/update',body,config);

}};