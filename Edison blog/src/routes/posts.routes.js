const createPost = require("../controllers/posts.controllers/create-post");
const getAllPosts = require("../controllers/posts.controllers/get-all-posts");
const updatePosts = require("../controllers/posts.controllers/update-post");
const deletePosts = require("../controllers/posts.controllers/delete-post");

const postsRouter = require("express").Router();

postsRouter.get("/", getAllPosts);
postsRouter.post("/", createPost);
postsRouter.put("/:id", updatePosts);
postsRouter.delete("/:id", deletePosts);

module.exports = postsRouter;
