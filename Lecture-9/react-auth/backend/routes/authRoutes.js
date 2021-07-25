const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post('/register', async (req, res) => {
    
    try {

        const { email, password, passwordVerify } = req.body;

        // Validation 

        if (!email || !password || !passwordVerify) {
            return res.status(400).json({ errorMessage: "Please enter all the required credentials" })
        }

        if (password.length < 4) {
            return res.status(400).json({ errorMessage: "Please enter password of atleast 4 characters" });
        }

        if (password !== passwordVerify) {
            return res.status(400).json({ errorMessage: "Please enter the same password twice" });
        }

        const existingUser = await User.findOne({ email })
        
        if (existingUser) {
            return res.status(400).json({ errorMessage: "User with this email is already registered" });
        }

        // hash the password

        const salt = await bcrypt.genSalt();

        const passwordHash = await bcrypt.hash(password, salt);
       
        // save the new user account to the database

        const newUser = new User({
            email,
            passwordHash
        });

        const savedUser = await newUser.save();

        res.status(200).json(savedUser);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Register Error")
    }
});


// login the existing user

router.post('/login', async(req, res) => {
    
    try {

        const { email, password } = req.body;

        // Validation

        if (!email || !password) {
            return res.status(400).json({ errorMessage: "Please enter all the required credentials" })
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ errorMessage: "Wrong email or password" });
        }

        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.passwordHash
        );

        if (!passwordCorrect) {
            return res.status(400).json({ errorMessage: "Wrong password" });
        }

        // sign the token

        const token = jwt.sign(
            {
                user:existingUser._id
            },
            process.env.JWT_SECRET
        )
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite:"none"
        })

        res.send("User LoggedIn(sent u a user token)")
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Login Error")
    }
  
})


router.get('/logout', (req, res) => {
    
    res.cookie("token","", {
        httpOnly: true,
        expires:new Date(0),
        secure: true,
        sameSite:"none"
    })


    res.status(200).send("Logged Out SuccessFully");
})



module.exports = router;