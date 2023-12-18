const Post = require("../../models/post.model");

module.exports = async (req, res) => {
  try {
    const body = req.params.id;
    console.log(body);
    const deletePosts = await Post.findByIdAndDelete(body);
    if (!deletePosts) {
      return res.status(404).json({ error: "blog not found" });
    }

    return res
      .status(201)
      .json({ statusText: "Successfully deleted a post", deletePosts });
  } catch (error) {
    return res.status(500).json(error);
  }
};
