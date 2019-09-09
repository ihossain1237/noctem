 const addToCart = function(items,targetItem){
    const targetItemId = targetItem._id;
    const sameItemIndex = items.findIndex(item => item._id ===targetItemId );
    if (sameItemIndex>-1)
        items[sameItemIndex].itemCount+=1;
    else
        items.push({...targetItem,itemCount:1});

    return items;
};

 const removeFromCart =function (items,targetItem){
    const targetItemId = targetItem._id;
    const targetIndex = items.findIndex(item=>item._id===targetItemId);
    console.log(targetIndex)
    if (targetIndex>-1)
        if (items[targetIndex].itemCount>1)
            items[targetIndex].itemCount-=1;
        else
            items.splice(targetIndex,1);
    return items;
};

 module.exports = {addToCart,removeFromCart};