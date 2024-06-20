const express = require("express");
const router = express.Router({ mergeParams: true });
const { addComment, deleteComment } = require("../controllers/comments");

router.post("/", addComment);

router.delete("/:commentId", deleteComment);

module.exports = router;
