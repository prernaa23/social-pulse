const User = require("../models/user"); 
const Post = require("../models/post"); 
const Comment = require("../models/comment"); 

module.exports.addComment = async (req, res) => {
  const { postId } = req.params;
  const { body, authorId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(authorId)) {
    return res.status(400).json({ msg: "Invalid author ID" });
  }

  try {
    // Find the post
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Create a new comment
    const comment = new Comment({
      body,
      author: authorId,
    });
    await comment.save();

    // Add the comment reference to the post's comments array
    post.comments.push(comment._id);
    await post.save();

    res.status(200).json({ msg: "Comment added successfully", comment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports.deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;

  try {
    // Find the post and ensure it exists
    const post = await Post.findById(postId);
    await Post.findByIdAndUpdate(postId, { $pull: { comments: commentId } });
    // Delete the comment from the Comment collection
    await Comment.findByIdAndDelete(commentId);
    res.status(200).json({ msg: "Comment deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
