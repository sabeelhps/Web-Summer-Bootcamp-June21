const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

// Display all the blogs
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

// show new blog form
router.get('/blogs/new', (req, res) => {
    res.render('new');
})


// Create new blog
router.post('/blogs', async (req, res) => {
    
    const blog = await Blog.create(req.body);

    res.redirect('/blogs');
})


// show blog route

router.get('/blogs/:id', async (req, res) => {
    
    const blog = await Blog.findOne({
        where: {
            id:req.params.id
        }
    }) 

    res.render('show', { blog });
})



module.exports = router;