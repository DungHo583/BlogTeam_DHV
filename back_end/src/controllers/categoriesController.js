const CATEGORIES = require("../models/categories");

const categoriesController = {
  // danh sách danh mục
  getCategories: async (req, res) => {
    try {
      const data = await CATEGORIES.find().sort({ created_at: -1 });
      if (!data) {
        return res.json({
          success: false,
          message: "Không có data của category",
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

  // get 1 danh mục theo id
  getCate: async (req, res) => {
    try {
      const idCate = req.params.id;

      const data = await CATEGORIES.findById(idCate);

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

  // thêm mới danh mục
  createCate: async (req, res) => {
    try {
      const { title, short_desc, description, created_at } = req.body;

      const newCate = await CATEGORIES.create({
        title,
        short_desc,
        description,
        created_at,
      });

      return res.json({
        success: true,
        message: "Thêm danh mục thành công !",
        data: newCate,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Thêm danh mục thất bại !",
      });
    }
  },

  // update danh mục
  updateCate: async (req, res) => {
    try {
      const { title, short_desc, description } = req.body;

      const idCate = req.params.id;

      const data = await CATEGORIES.findByIdAndUpdate(idCate, {
        $set: { title, short_desc, description },
      });

      return res.json({
        success: true,
        message: "Cập nhật thành công !",
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật thất bại !",
      });
    }
  },
};

module.exports = categoriesController;
