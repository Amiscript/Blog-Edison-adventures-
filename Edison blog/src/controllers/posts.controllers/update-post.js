const Post = require("../../models/post.model");
module.exports = async (req, res) => {
  try {
    const body = req.params.id;
    const updatePosts = await Post.findByIdAndUpdate(body, req.body, {
      new: true,
    });
    if (!updatePosts) {
      return res.status(404).json({ error: "blog not found" });
    }
    return res
      .status(201)
      .json({ statusText: "Successfully updated a post", updatePosts });
  } catch (error) {
    return res.status(500).json(error);
  }
};
