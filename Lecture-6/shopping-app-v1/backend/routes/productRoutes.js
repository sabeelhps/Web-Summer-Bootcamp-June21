const express = require('express');
const router = express.Router();
const Product = require('../models/product');


router.get('/products',async(req,res)=>{

    try{
        const products = await Product.find({});
        res.json(products)
    }
    catch(e){
        console.log("Error in getting products");
    }
})


module.exports=router;