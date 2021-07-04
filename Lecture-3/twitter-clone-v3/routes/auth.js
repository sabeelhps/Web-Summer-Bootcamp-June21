const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');



router.get('/register', (req, res) => {
    res.render('auth/signup');
})

router.post('/register', async (req, res) => {

    try {
        const user = {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            username:req.body.username
        }
    
        const newUser = await User.register(user, req.body.password);
        req.flash("success","Registered Successfully,Please Login to continue")
        res.redirect('/login');
    } catch (e) {
        req.flash("error", e.message);
        res.redirect('/register');
    }
})


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', passport.authenticate('local',
    {
        failureRedirect: '/login',
        failureFlash:true
    }), async (req, res) => {
    
    res.redirect('/');
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})



module.exports = router;