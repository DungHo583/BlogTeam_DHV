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
          data,
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
