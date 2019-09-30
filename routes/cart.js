const express = require('express');
const route = express.Router();
const User = require('../models/User');
const Products = require('../models/Products');
const Cart = require('../models/Cart');

route.post('/',async (req,res)=>{

   const {email} = req.body;
    let cart = await Cart.findOne({email});
    if (!cart){
        cart = new Cart({
            items:[],
            email
        });
       await cart.save();

    }
    res.json({cart});

});
route.post('/update',async (req,res)=>{
    try{
        const {email,items} = req.body;
        const cart = await Cart.findOne({email});
        cart.items = items;
        await cart.save();
        res.status(200).json({});
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});



module.exports = route;