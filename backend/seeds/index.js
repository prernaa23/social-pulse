const mongoose = require("mongoose");
const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");

mongoose.connect("mongodb://localhost:27017/social-pulse", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

 const comments = [
  {
    _id: new mongoose.Types.ObjectId(),
    body: "random comment",
    author: userIds[1],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    body: "another random comment",
    author: userIds[1],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    body: "yet another random comment",
    author: userIds[1],
  },

  {
    _id: new mongoose.Types.ObjectId(),
    body: "one more random comment",
    author: userIds[1],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    body: "and another random comment",
    author: userIds[1],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    body: "no more random comments",
    author: userIds[1],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    body: "I lied, one more random comment",
    author: userIds[1],
  },
];
Comment.insertMany(comments);
 const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    author: userIds[1],
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [comments[0]._id, comments[1]._id],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    author: userIds[3],
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "post2.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [comments[2]._id, comments[1]._id],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    author: userIds[4],
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [comments[3]._id, comments[1]._id],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    author: userIds[5],
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "post4.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [comments[4]._id, comments[1]._id],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    authoruserId: userIds[6],
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [comments[0]._id, comments[1]._id],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    author: userIds[1],
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post6.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [comments[0]._id, comments[1]._id],
  },
];
Post.insertMany(posts);

 const users = [
  {
    _id: userIds[0],
    name: "test me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [userIds[1]],
    posts: [],
    __v: 0,
  },
  {
    _id: userIds[1],
    name: "Steve Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [userIds[2], userIds[0]],
    posts: [posts[0]._id, posts[5]._id],
    __v: 0,
  },
  {
    _id: userIds[2],
    name: "Some Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [userIds[3], , userIds[1]],
    posts: [],
    __v: 0,
  },
  {
    _id: userIds[3],
    name: "Whatcha Doing",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [userIds[4], userIds[2]],
    posts: [posts[1]._id],
    __v: 0,
  },
  {
    _id: userIds[4],
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [userIds[3]],
    posts: [posts[2]._id],
    __v: 0,
  },
  {
    _id: userIds[5],
    name: "Harvey Dunn",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    posts: [posts[3]._id],
    __v: 0,
  },
  {
    _id: userIds[6],
    name: "Carly Vowel",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    posts: [posts[4]._id],
    __v: 0,
  },
  {
    _id: userIds[7],
    name: "Jessica Dunn",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    posts: [],
    __v: 0,
  },
];
User.insertMany(users);
