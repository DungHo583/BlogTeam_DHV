const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

// danh sách tác giả
router.get("/author", authorController.getAuthor);

// get 1 tác giả theo id
router.get("/get-author/:id", authorController.getOneAuthor);

// tạo tác giả
router.post("/author/create", authorController.createAuthor);

// cập nhật tác giả
router.post("/author/update/:id", authorController.updateAuthor);

// xoá tác giả
router.delete("/author/delete/:id", authorController.deleteAuthor);
module.exports = router;
