const Post = require("../models/post.js");
const User = require("../models/user.js");

/* CREATE */
module.exports.createPost = async (req, res) => {
  try {
    const { author, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post(req.body.post);
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* GET ALL POSTS FOR FEED */
module.exports.getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find()
      .populate({
        path: "author", // Populate the author field
        select: "name picturePath", // Optionally select fields to populate
      })
      .populate({
        path: "comments", // Populate the comments field
        populate: {
          path: "author", // Optionally populate the author of each comment
          select: "name picturePath", // Optionally select fields to populate
        },
      });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
module.exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user._id; //change
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// DELETE A POST

module.exports.deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    // Find the post and ensure it belongs to the user
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post.author.toString() !== req.user._id) {
      return res.status(403).json({ msg: "Unauthorized action" });
    }

    // Delete the post
    await Post.findByIdAndDelete(postId);

    // Remove the post reference from the user's posts array
    await User.findByIdAndUpdate(req.user._id, { $pull: { posts: postId } });

    res.status(200).json({ msg: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
