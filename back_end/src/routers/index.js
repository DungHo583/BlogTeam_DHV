const express = require("express");
const router = express.Router();
const cateRoute = require("./categoriesRoute")

router.use('/api/category', cateRoute)

module.exports = router;
