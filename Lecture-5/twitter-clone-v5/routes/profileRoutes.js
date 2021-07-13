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

module.exports = router;
