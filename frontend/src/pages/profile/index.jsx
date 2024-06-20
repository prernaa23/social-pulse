import React from "react";
import PostList from "../../components/postList";
import { getUser, getUserPosts } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Index() {
  const { userId } = useParams();
  // console.log(userId);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const func = async () => {
    const data = await getUser(userId);
    setUser(data);
    // console.log(user); // Logs the updated state whenever posts changes
  };

  useEffect(() => {
    func();
  }, []);

  const func1 = async () => {
    const data = await getUserPosts(userId);
    setPosts(data);
    console.log(posts); // Logs the updated state whenever posts changes
  };

  useEffect(() => {
    func1();
  }, []);

  return (
    // <div></div>

    <div className="py-20">
      <div className="w-[60%] flex flex-col gap-8 items-center mx-auto ">
        {/* info */}
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col sm:flex-row gap-10 w-full h-fit justify-center">
            <div className="rounded-full ">
              <img
                src={
                  user.picturePath !== "" ? `/assets/${user.picturePath}` : ""
                }
                alt="profile-pic"
                className=" rounded-full sm:h-60 sm:w-60 h-56 w-56"
              />
            </div>
            <div className="flex flex-col justify-between basis-2/5">
              <div className="font-bold text-5xl">{user.name}</div>
              <div>{user.bio}</div>
              <div className="flex w-full">
                <button
                  type="button"
                  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center me-2 mb-2 "
                >
                  Follow
                </button>
                <button
                  type="button"
                  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center me-2 mb-2 "
                >
                  Message
                </button>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <div className="text-2xl font-bold">
                  {user.friends ? user.friends.length : 0}
                </div>
                <div className="text-lg">Friends</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {user.posts ? user.posts.length : 0}
                </div>
                <div className="text-lg">Posts</div>
              </div>
            </div>
          </div>
          <div className="h-1 bg-gray-200 border-0 dark:bg-gray-700"></div>
        </div>
        {/* posts */}
        {user.posts && (
          <div className="">
            <PostList posts={user.posts}></PostList>
          </div>
        )}
      </div>
    </div>
  );
}
