const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { isLoggedIn } = require('../middleware');
const Product = require('../models/product');


router.post('/register', async (req, res) => {
    
    try {

        const { email, password, passwordVerify } = req.body;

        // validation

        if (!email || !password || !passwordVerify)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });

        if (password.length < 4)
            return res.status(400).json({
                errorMessage: "Please enter a password of at least 6 characters.",
            });

        if (password !== passwordVerify)
            return res.status(400).json({
                errorMessage: "Please enter the same password twice.",
            });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                errorMessage: "An account with this email already exists.",
            });

        // hash password

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
            
        // save new user to db

        const newUser = new User({ email, passwordHash });
        
        const savedUser = await newUser.save();

        // log the user in
        const token = jwt.sign({
            user: savedUser._id,
        }, process.env.JWT_SECRET);


        res.cookie('token', token, {
            httpOnly:true
        })

        res.status(200).send("Registered Successfully")
    }
    catch (e) {
        console.error(err.message);
        res.status(500).send();
    }
})

router.post('/login', async(req, res) => {
    
    try {

        const { email, password } = req.body;

        // validate

        if (!email || !password) {
            return res
            .status(400)
            .json({ errorMessage: "Please enter all required fields." });
        }

        const existingUser = await User.findOne({ email });
        
        if (!existingUser)
            return res.status(401).json({ errorMessage: "Wrong email or password." });

        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.passwordHash
        );

        if (!passwordCorrect)
            return res.status(401).json({ errorMessage: "Wrong email or password." });

        // sign the token

        const token = jwt.sign(
            {
                user: existingUser._id,
            },process.env.JWT_SECRET);
    
        // send the token in a HTTP-only cookie
    
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            })
            .send("sign in successfully");
    }
    catch (e) {
        console.error(err);
        res.status(500).send();
    }
})


// Logged out endpoint 
router.get("/logout", (req, res) => {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      })
      .send("Sign Out");
});



router.get('/loggedIn', (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(200).json(false);
    
        jwt.verify(token, process.env.JWT_SECRET);
        
        res.send(true)
      } catch (err) {
        console.error(err);
        res.status(200).json(false);
      }
})



// User Cart End Points

// to get the current user's cart
router.get('/user/cart',isLoggedIn,async(req,res)=>{

    try {
        const userid = req.user;
        const user = await User.findById(userid).populate('cart');
        res.status(200).json(user.cart)
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json();
    }
})

// to add the item in a cart
router.post('/user/cart/add', isLoggedIn, async (req, res) => {

    
    try {
        const { productid } = req.body;
        const product = await Product.findById(productid);

        // getting user id
        const userid = req.user;

        const user = await User.findById(userid);

        user.cart.push(product);

        await user.save();

        res.status(200).json("Added To Cart Successfully");
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json();
    }

})


module.exports = router;