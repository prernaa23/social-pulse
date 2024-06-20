import React from "react";
import { getAllPosts } from "../api";
import { useState, useEffect } from "react";
import PostList from "../components/postList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const func = async () => {
    const data = await getAllPosts();
    setPosts(data);
    console.log(posts); // Logs the updated state whenever posts changes
  };
    
  useEffect(() => {
    func();
  }, []);

  return (
    <div className="w-[60%] mx-auto my-8">
      <PostList posts={posts}></PostList>
    </div>
  );
}
