const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
const seedDB = require('./seed');


mongoose.connect('mongodb://localhost:27017/shopping-app', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=>console.log("DB Connected"))
    .catch((err)=>console.log(err));


// seedDB();

// Routes 

const productRoutes = require('./routes/productRoutes');

app.use(express.json());


app.get('/hello',(req,res)=>{
    res.status(200).send("Hello From Server");
})


app.use(productRoutes);


app.listen(3003,()=>{
    console.log("Server started at port 3003");
})