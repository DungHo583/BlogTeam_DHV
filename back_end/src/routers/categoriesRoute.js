const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

// danh sách danh mục
router.get("/category", categoriesController.getCategories);

// tạo danh mục
router.post("/category/create", categoriesController.createCate);

module.exports = router;
