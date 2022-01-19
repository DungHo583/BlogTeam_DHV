const POSTS = require("../models/posts");
const AUTHORS = require("../models/authors");

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

  // tạo bài viết
  createPost: async (req, res) => {
    try {
      const { title, thumbnail, short_desc, description, author } = req.body;
      console.log("body", req.body);
      const author_id = await AUTHORS.findById({ _id: author });
      console.log("author", author_id);

      const newPost = await POSTS.create({
        title,
        thumbnail,
        short_desc,
        description,
        author: author_id,
      });

      return res.json({
        success: true,
        message: "Tạo bài viết thành công !",
        data: newPost,
      });
    } catch (error) {
      console.log("eror", error);
      return res.json({
        success: false,
        message: "Tạo bài viết thất bại !",
      });
    }
  },
};

module.exports = postsController;
