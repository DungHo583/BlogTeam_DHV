const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tagsController");

// danh sách tags
router.get("/tags", tagsController.getTag);

// get 1 tag theo id
router.get("/get-tags/:id", tagsController.getOneTag);

// thêm tag
router.post("/tags/create", tagsController.createTag);

// cập nhật tag
router.post("/tags/update/:id", tagsController.updateTag);

// xoá tag
router.delete("/tags/delete/:id", tagsController.deleteTag);
module.exports = router;
