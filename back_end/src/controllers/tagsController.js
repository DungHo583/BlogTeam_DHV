const TAGS = require("../models/tags");

const tagsController = {
  getTag: async (req, res) => {
    try {
      const data = await TAGS.find();
      if (!data) {
        return res.json({
          success: false,
          message: "Chưa có tags",
        });
      } else {
        return res.json({
          success: true,
          data: data,
        });
      }
    } 
    catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },
  getOneTag: async (req, res) => {
    try {
      const idTag = req.params.id;

      const data = await TAGS.findById(idTag);

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
  createTag: async (req, res) => {
    try {
      const { title, description, created_at } =
        req.body;

      const newTag = await TAGS.create({
        title,
        description,
        created_at,
      });

      return res.json({
        success: true,
        message: "Thêm tag thành công !",
        data: newTag,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Lỗi thêm tag !",
      });
    }
  },

  // update danh mục
  updateTag: async (req, res) => {
    try {
      const { title, description, created_at } =
        req.body;

      const idTag = req.params.id;

      const data = await TAGS.findByIdAndUpdate(idTag, {
        $set: { title, description, created_at },
      });

      return res.json({
        success: true,
        message: "Cập nhật tag thành công !",
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật tag thất bại !",
      });
    }
  },

  // xoá danh mục
  deleteTag: async (req, res) => {
    try {
      const idTag = req.params.id;

      await TAGS.findByIdAndDelete(idTag);

      return res.json({
        success: true,
        message: "Xoá tag thành công !",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Xoá tag thất bại !",
      });
    }
  },
};

module.exports = tagsController;
