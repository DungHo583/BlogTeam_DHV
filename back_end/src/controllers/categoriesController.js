const CATEGORIES = require("../models/categories");

const categoriesController = {
  getCategories: async (req, res) => {
    try {
      const data = await CATEGORIES.find();
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
};

module.exports = categoriesController;
