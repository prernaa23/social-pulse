import React from "react";

const Post = ({
  postId,
  postUserId,
  author,
  description,
  picturePath,
  authorPicturePath,
  likes,
  comments,
}) => {
  return (
    <div className="w-full mx-auto border border-black rounded-xl p-4 gap-2 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <img
            src={`/assets/${authorPicturePath}`}
            alt=""
            className="rounded-full w-8 h-8"
          />
          <div>{author}</div>
        </div>
        <div className="flex">
          <div>
            <button
              type="button"
              className=" bg-black p-1.5 rounded-full hover:bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm me-2 mb-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-suit-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </button>
          </div>
          <div>
            <button
              type="button"
              className=" bg-black p-1.5 rounded-full hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm me-2 mb-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
              </svg>
            </button>
          </div>
          <div>
            <button
              type="button"
              className=" bg-black p-1.5 rounded-full hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm me-2 mb-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full mb-2 bg-black"></div>
      <div className="">
        <img src={`/assets/${picturePath}`} alt="postpic" className="" />
      </div>

      <div className="text-justify">{description} </div>

      {/* comments */}
      <div className="w-full">
        {/* add comment */}
        <form action="">
          <button>Add comment</button>
        </form>

        <div className="font-bold">Comments</div>
        {comments?.map((comment, _id) => (
          <div key={_id} className="flex  items-center gap-3 mt-3">
            <div>
              <img
                src={`/assets/${comment.author.picturePath}`}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <div className="text">{comment.author.name}</div>
                <div>
                  <form action="">
                    <button
                      type="button"
                      className="text-gray-900 hover:text-white  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-1 py-1 text-center me-2 mb-2 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              <div>{comment.body} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
