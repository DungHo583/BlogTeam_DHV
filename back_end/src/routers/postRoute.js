const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

// danh sách bài viết
router.get("/posts", postsController.getPosts);

// // get 1 bài viết theo id
// router.get("/get-post/:id", postsController.getCate);

// // tạo bài viết
// router.post("/post/create", postsController.createCate);

// // cập nhật bài viết
// router.post("/post/update/:id", postsController.updateCate);

// // xoá bài viết
// router.delete("/post/delete/:id", postsController.deleteCate);

module.exports = router;
