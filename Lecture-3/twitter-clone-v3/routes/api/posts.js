const express = require('express');
const router = express.Router();
const Post = require('../../models/posts');
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/user');

// Get all the post
router.get('/api/post',isLoggedIn, async(req, res) => {
    
    const posts = await Post.find({}).populate('postedBy');

    res.json(posts);
})



// Create the new post
router.post('/api/post',isLoggedIn,async(req, res) => {

    const post = {
        postedBy: req.user,
        content:req.body.content
    }

    const newPost=await Post.create(post);
    res.json(newPost);  
})

router.patch('/api/posts/:id/like',isLoggedIn,async(req,res)=>{

    const postId = req.params.id;
    const userId = req.user._id;
    
    const isLiked = req.user.likes && req.user.likes.includes(postId);
    
    const option = isLiked ? '$pull':'$addToSet';

    req.user=await User.findByIdAndUpdate(userId,{[option]:{likes:postId}},{new:true});

    const post = await Post.findByIdAndUpdate(postId,{[option]:{likes:userId}},{new:true});


    res.status(200).json(post);
})




module.exports = router;