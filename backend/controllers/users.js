const User = require("../models/user");

/* READ */
module.exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
      .populate("friends", "name") // Populating friends with only the email field
      .populate({
        path: "posts",
        populate: {
          path: "author comments", // Populate author and comments in posts
          populate: {
            path: "author", // Populate author in comments
          },
        },
      }); // Populating posts
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports.getUserFriends = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by ID and populate the friends field
    const user = await User.findById(userId).populate("friends");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ friends: user.friends });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

/* GET USER'S POSTS FOR FEED */
module.exports.getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find user by ID and populate their posts
    const user = await User.findById(userId).populate({
      path: "posts",
      populate: {
        path: "author comments", // Populate author and comments in posts
        populate: {
          path: "author", // Populate author in comments
        },
      },
    });

    // If user not found
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json(user.posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
module.exports.addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    const isFriend = user.friends.includes(friendId);

    if (isFriend) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    res.status(200).json({ msg: isFriend ? "Friend removed" : "Friend added" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
