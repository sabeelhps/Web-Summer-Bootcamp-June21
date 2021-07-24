const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:String,
        trim:true,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    img:{
        type:String,
        trim:true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }]

})

const Product = mongoose.model('Product',productSchema);
module.exports=Product;