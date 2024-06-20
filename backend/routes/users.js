const express = require("express");
const {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getUserPosts,
} = require("../controllers/users.js");

const router = express.Router();

/* READ */
router.get("/:id", getUser);
router.get("/:id/friends", getUserFriends);
router.get("/:userId/posts", getUserPosts);

/* UPDATE */
router.patch("/:id/:friendId", addRemoveFriend);

module.exports = router;
