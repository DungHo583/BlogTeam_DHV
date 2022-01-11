const express = require("express");
const router = express.Router();
const cateRoute = require("./categoriesRoute");
const authorRoute = require("./authorRoute");

router.use("/api/category", cateRoute);
router.use("/api/author", authorRoute);

module.exports = router;
