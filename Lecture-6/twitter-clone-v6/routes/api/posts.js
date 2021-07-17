const express = require("express");
const router = express.Router();
const Post = require("../../models/posts");
const { isLoggedIn } = require("../../middleware");
const User = require("../../models/user");

// Get all the post
router.get("/api/post", isLoggedIn, async (req, res) => {
  const filter = req.query;
  const results = await Post.find(filter)
    .populate("postedBy")
    .populate("replyTo");

  posts = await User.populate(results, { path: "replyTo.postedBy" });

  res.json(posts);
});

router.get("/api/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id).populate("postedBy");

  res.status(200).json(post);
});

// Create the new post
router.post("/api/post", isLoggedIn, async (req, res) => {
  let post = {
    postedBy: req.user,
    content: req.body.content,
  };

  if (req.body.replyTo) {
    post = {
      ...post,
      replyTo: req.body.replyTo,
    };
  }

  const newPost = await Post.create(post);
  res.json(newPost);
});

router.patch("/api/posts/:id/like", isLoggedIn, async (req, res) => {
  const postId = req.params.id;
  const userId = req.user._id;

  const isLiked = req.user.likes && req.user.likes.includes(postId);

  const option = isLiked ? "$pull" : "$addToSet";

  req.user = await User.findByIdAndUpdate(
    userId,
    { [option]: { likes: postId } },
    { new: true }
  );

  const post = await Post.findByIdAndUpdate(
    postId,
    { [option]: { likes: userId } },
    { new: true }
  );

  res.status(200).json(post);
});

module.exports = router;
