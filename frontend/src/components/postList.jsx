import React from "react";
import Post from "./post";
import PropTypes from "prop-types"; // Import PropTypes

const PostList = ({ posts }) => {
  return (
    <div className="h-full w-full flex flex-col gap-7">
      {posts.map((post) => (
        <Post
          key={post._id} // Assuming _id is unique for each post
          postId={post._id}
          postUserId={post.author ? post.author._id : ""} // Check if author exists
          author={post.author ? post.author.name : ""} // Check if author exists
          description={post.description}
          picturePath={post.picturePath}
          authorPicturePath={post.author ? post.author.picturePath : ""} // Check if author exists
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default PostList;
