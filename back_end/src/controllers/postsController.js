const POSTS = require("../models/posts");

const postsController = {
  // danh sách bài viết
  getPosts: async (req, res) => {
    try {
      const data = await POSTS.find().sort({ created_at: -1 });
      if (!data) {
        return res.json({
          success: false,
          message: "Không có data của post",
        });
      } else {
        return res.json({
          success: true,
          data: data,
        });
      }
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },
};

module.exports = postsController;
