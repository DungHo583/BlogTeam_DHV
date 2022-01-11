const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.route("/").get(authorController.getAuthor);
router.route("/").post(authorController.createAuthor);
router.route("/").put(authorController.updateAuthor);
router.route("/").delete(authorController.deleteAuthor);

module.exports = router;
