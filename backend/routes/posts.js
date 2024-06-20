const express = require("express");
const {
  getFeedPosts,
  likePost,
  deletePost,
} = require("../controllers/posts.js");
// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/feed", getFeedPosts);

/* UPDATE */
router.patch("/:id/like", likePost);

// DELETE
router.delete("/:id", deletePost);
module.exports = router;
