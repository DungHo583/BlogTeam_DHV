const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

// danh sách danh mục
router.get("/category", categoriesController.getCategories);

// get 1 danh mục theo id
router.get("/get-category/:id", categoriesController.getCate);

// tạo danh mục
router.post("/category/create", categoriesController.createCate);

// cập nhật danh mục
router.post("/category/update/:id", categoriesController.updateCate);

// xoá danh mục
router.delete("/category/delete/:id", categoriesController.deleteCate);

module.exports = router;
