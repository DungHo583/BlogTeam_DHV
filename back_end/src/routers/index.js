const express = require("express");
const router = express.Router();
const cateRoute = require("./categoriesRoute")
const accountRoute = require("./accountRoute")

// 
router.use('/api', cateRoute)

// api sign in account
router.use('/api', accountRoute)
// 
module.exports = router;
