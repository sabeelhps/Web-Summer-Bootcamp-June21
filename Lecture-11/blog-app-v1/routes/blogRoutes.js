const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();


router.get('/blogs', async (req, res) => {
    
    try {
     
        const blogs = await Blog.findAll();

        res.render('index', { blogs });
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json();
    }
});

router.get('/blogs/new', (req, res) => {
    res.render('new');
})

router.post('/blogs', async (req, res) => {
    
    const blog = await Blog.create(req.body);

    res.redirect('/blogs');
})

module.exports = router;