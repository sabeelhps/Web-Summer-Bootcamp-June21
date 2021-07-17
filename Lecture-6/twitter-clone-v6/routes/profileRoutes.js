const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
const { isLoggedIn } = require("../middleware");
const User = require("../models/user");

router.get("/profile", isLoggedIn, (req, res) => {
  const payload = {
    user: req.user,
    displayName: req.user.firstName + " " + req.user.lastName,
  };

  res.render("profilePage", { payload });
});

router.get("/profile/:username", isLoggedIn, async (req, res) => {
  const user = await User.findOne({ username: req.params.username });

  const payload = {
    user: user,
    displayName: user.firstName + " " + user.lastName,
  };

  res.render("profilePage", { payload });
});


router.get('/follow/:userId/:profId',async(req,res)=>{

  const {userId,profId} = req.params;

  const currentUser = await User.findById(userId);
  const profUser = await User.findById(profId);

   // push profId into the current user's following array

  currentUser.following.push(profUser);
  profUser.followers.push(currentUser);

  await currentUser.save();
  await profUser.save();

  res.redirect(`/profile/${profUser.username}`);
})


module.exports = router;
