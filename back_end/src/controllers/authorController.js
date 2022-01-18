const AUTHOR = require("../models/author");

const authorController = {
  getAuthor: async (req, res) => {
    try {
      const data = await AUTHOR.find();
      if (!data) {
        return res.json({
          success: false,
          message: "Không có tác giả",
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
  getOneAuthor: async (req, res) => {
    try {
      const idAuthor = req.params.id;

      const data = await AUTHOR.findById(idAuthor);

      return res.json({
        success: true,
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },
  createAuthor: async (req, res) => {
    try {
      const { name_author, email_address, thumbnail, description, created_at } =
        req.body;

      const newAuthor = await AUTHOR.create({
        name_author,
        email_address,
        thumbnail,
        description,
        created_at,
      });

      return res.json({
        success: true,
        message: "Thêm tác giả thành công !",
        data: newAuthor,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Thêm tác giả thất bại !",
      });
    }
  },

  // update tác giả
  updateAuthor: async (req, res) => {
    try {
      const { name_author, email_address, thumbnail, description, created_at } =
        req.body;

      const idAuthor = req.params.id;

      const data = await AUTHOR.findByIdAndUpdate(idAuthor, {
        $set: {
          name_author,
          email_address,
          thumbnail,
          description,
          created_at,
        },
      });

      return res.json({
        success: true,
        message: "Cập nhật tác giả thành công !",
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật thất bại !",
      });
    }
  },

  // xoá tác giả
  deleteAuthor: async (req, res) => {
    try {
      const idAuthor = req.params.id;

      await AUTHOR.findByIdAndDelete(idAuthor);

      return res.json({
        success: true,
        message: "Xoá tác giả thành công !",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Xoá tác giả thất bại !",
      });
    }
  },
};

module.exports = authorController;
