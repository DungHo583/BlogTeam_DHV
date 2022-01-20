const POSTS = require("../models/posts");
const AUTHORS = require("../models/authors");
const CATES = require("../models/categories");
const TAG = require("../models/tags");

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

  // get ds bài viết theo danh mục
  getCatePosts: async (req, res) => {
    try {
      const cate_id = req.body;

      const data = await POSTS.find({ category: cate_id }).sort({
        created_at: -1,
      });

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

  // get 1 bài viết
  getPost: async (req, res) => {
    try {
      const idPost = req.params.id;

      const dataPost = await POSTS.findById(idPost);

      return res.json({
        success: true,
        message: "Cập nhật bài viết thành công !",
        data: dataPost,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật bài viết thất bại !",
      });
    }
  },

  // tạo bài viết
  createPost: async (req, res) => {
    try {
      const {
        title,
        thumbnail,
        short_desc,
        description,
        author,
        category,
        tag,
      } = req.body;

      const author_id = await AUTHORS.findById(author);

      const cate_id = await CATES.findById(category);

      const tag_id = await TAG.findById(tag);

      const newPost = await POSTS.create({
        title,
        thumbnail,
        short_desc,
        description,
        author: author_id,
        nameAuthor: author_id.name_author,
        category: cate_id,
        nameCate: cate_id.title,
        tags: tag_id,
        nameTag: tag_id.title,
      });

      return res.json({
        success: true,
        message: "Tạo bài viết thành công !",
        data: newPost,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: "Tạo bài viết thất bại !",
      });
    }
  },

  // update bài viết
  updatePost: async (req, res) => {
    try {
      const idPost = req.params.id;

      const dataPost = await POSTS.findById(idPost);

      console.log("post", dataPost);

      return res.json({
        success: true,
        message: "Cập nhật bài viết thành công !",
        data: dataPost,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật bài viết thất bại !",
      });
    }
  },

  // xoá bài viết
  deletePost: async (req, res) => {
    try {
      const idPost = req.params.id;

      await POSTS.findByIdAndDelete(idPost);

      return res.json({
        success: true,
        message: "Xoá bài viết thành công !",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Xoá bài viết thất bại !",
      });
    }
  },
};

module.exports = postsController;
