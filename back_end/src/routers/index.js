const express = require("express");
const router = express.Router();
const cateRoute = require("./categoriesRoute")
const tagsRoute = require('./tagsRoute')

router.use('/api/tags', tagsRoute)
router.use('/api/category', cateRoute)

module.exports = router;
