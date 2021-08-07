const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');


router.get('/products',async(req,res)=>{

    try{
        const products = await Product.find({});
        res.json(products)
    }
    catch(e){
        console.log("Error in getting products");
    }
})
// Create new product
router.post('/products',async(req,res)=>{
   
    const product = await Product.create(req.body);

    res.status(200).json(product);
})

// show a particular product

router.get('/products/:id',async(req,res)=>{
    const product = await Product.findById(req.params.id).populate('reviews');
    res.json(product);
})


// get the product data to edit it.

router.get('/products/:id/edit',async(req,res)=>{

    const product = await Product.findById(req.params.id);

    res.json(product);
})

// patch route

router.patch('/products/:id',async(req,res)=>{

    const product = await Product.findByIdAndUpdate(req.params.id,req.body);

    res.json(product);
})

// delete product

router.delete('/products/:id',async(req,res)=>{

    await Product.findByIdAndDelete(req.params.id);

    res.json("deleted");
})


// create a review for a product

router.post('/products/:id/review', async (req, res) => {
    
    try {
     
        const product = await Product.findById(req.params.id);
        
        const review = new Review({
            ...req.body
        })


        product.reviews.push(review);

        await review.save();
        await product.save();

        res.status(200).json(product);
    }
    catch (e) {
        res.send("Error while creating a review");
    } 
})



module.exports=router;