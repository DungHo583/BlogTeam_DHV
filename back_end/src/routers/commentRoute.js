const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// danh sách comment
router.get("/comment", commentController.getComment);
// // get 1 comment theo id
// router.get("/get-comment/:id", commentController.getComment);

// tạo comment
router.post("/comment/create", commentController.createComment);

// cập nhật comment 
router.post("/comment/update/:id", commentController.updateComment);

// xoá comment
router.delete("/comment/delete/:id", commentController.deleteComment);

module.exports = router;
