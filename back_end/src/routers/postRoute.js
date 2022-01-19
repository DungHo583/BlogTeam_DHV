const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

// danh sách bài viết
router.get("/posts", postsController.getPosts);

// // get 1 bài viết theo id
router.get("/get-post/:id", postsController.getPost);

// tạo bài viết
router.post("/post/create", postsController.createPost);

// // cập nhật bài viết
router.post("/post/update/:id", postsController.updatePost);

// xoá bài viết
router.delete("/post/delete/:id", postsController.deletePost);

module.exports = router;
