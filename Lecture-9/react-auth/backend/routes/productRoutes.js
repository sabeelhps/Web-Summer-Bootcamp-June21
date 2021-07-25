const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');


router.get('/products',isLoggedIn,(req, res) => {
    

    res.send("SENDING YOU ALL THE PRODUCTS!!!");
})




module.exports = router;