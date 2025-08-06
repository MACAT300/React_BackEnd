// import the express framework
const express = require("express");

// create an express app
const app = express();

// data
const posts = [
  {
    id: "p1",
    title: "First Post",
    content: "This is the first post content.",
    status: "pending",
  },
  {
    id: "p2",
    title: "Post 2",
    content: "this is about post 2",
    status: "publish",
  },
  {
    id: "p3",
    title: "Post 3",
    content: "this is about post 3",
    status: "publish",
  },
];

// define the routes for the app
app.get("/", (request, response) => {
  // get all the posts
  response.send(posts);
});

// route for published posts only
app.get("/published_posts", (req, res) => {
  // retrieve only the published posts
  const publishedPosts = posts.filter((p) => p.status === "publish");
});

// route for pending posts only
app.get("/pending_posts", (req, res) => {
  // retrieve only the pending posts
  const pendingPosts = posts.filter((p) => p.status === "pending");
  res.send(pendingPosts);
});

// route for specific post
/*
  dynamic route
  /posts/p1 -> post 1
  /posts/p2 -> post 2
  /posts/p3 -> post 3 
  /posts/:id <- id can be changed according to what post the user want to retrieve
*/
app.get("/posts/:id", (req, res) => {
  // retrieve the post id from the url params
  const postId = req.params.id;
  // find the post based on the id
  const selected = posts.find((p) => p.id === post_id);
  res.send(selected);
});

// start the express app
app.listen(5123, () => {
  console.log("The server has started at http://localhost:5123");
});
