const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
router.get('/:category/:type',async (req,res)=>{
   try {
       console.log(req.params);
       const products = await Product.find({category:req.params.category.trim(),type:req.params.type.trim()})
           .sort({date:-1});
       console.log(products);
       res.json(products)
   } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
   }
});

router.post('/input',async (req,res)=>{
   const {name,price,image,category,type} = req.body;
   const product = new Product({
       name:name,
       price:price,
       image:image,
       category:category,
       type:type
   });
  await product.save();
  res.json({msg:'done'});
});

module.exports = router;