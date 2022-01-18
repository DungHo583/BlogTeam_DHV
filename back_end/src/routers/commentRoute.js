const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// danh sách comment
router.get("/comment", commentController.getComment);
// get 1 comment theo id
// router.get("/get-comment/:id", commentController.getCate);

// tạo comment
// router.post("/comment/create", commentController.createCate);

// cập nhật comment 
// router.post("/comment/update/:id", commentController.updateCate);

// xoá comment
// router.delete("/comment/delete/:id", commentController.deleteCate);

module.exports = router;
