const CATEGORIES = require("../models/categories");

const categoriesController = {
  getCategories: async (req, res) => {
    try {
      const categories = await CATEGORIES.find();
      if (!categories) {
        return res.json({
          success: false,
          message: "Không có data của category",
        });
      } else {
        return res.json({
          success: true,
          categories,
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

module.exports = categoriesController;
