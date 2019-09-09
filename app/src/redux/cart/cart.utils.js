import {ADD_TO_CART, REMOVE_FROM_CART} from "../action.types";


export const cartOperation = function(op,items,targetItem){
    const targetItemId = targetItem._id;
    const targetIndex = items.findIndex(item=>item._id===targetItemId);
    if (op===ADD_TO_CART){
        if (targetIndex>-1)
            items[targetIndex].itemCount+=1;
        else
            items.push({...targetItem,itemCount:1});
    }
    else if (op==='REMOVE_FROM_CART'){
        if (items.length>0){
            if (items[targetIndex].itemCount>1)
                items[targetIndex].itemCount-=1;
            else
                items.splice(targetIndex,1);}
    }
    return items;

};