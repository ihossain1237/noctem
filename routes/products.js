const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
router.get('/:category/:type',async (req,res)=>{
   try {
       console.log(req.params.category,req.params.id)
       const products = await Product.find({category:req.params.category,type:req.params.type})
           .sort({date:-1});
       res.json(products)
   } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
   }
});

module.exports = router;