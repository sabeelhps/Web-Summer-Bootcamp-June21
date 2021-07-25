const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');


mongoose.connect('mongodb://localhost:27017/react-auth',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));



app.use(express.json());
app.use(cookieParser());

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(authRoutes);
app.use(productRoutes);

app.get('/hello', (req, res) => {
    
    res.send("Hi!");
})




app.listen(3006, () => {
    console.log('server running at port 3006');
})