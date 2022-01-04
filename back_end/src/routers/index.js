const express = require("express");
const router = express.Router();
const cateRoute = require("./categoriesRoute");
const accountRoute = require("./accountRoute");
const postRoute = require("./postRoute");

// api category
router.use("/api", cateRoute);

// api sign in account
router.use("/api", accountRoute);

// api post
router.use("/api", postRoute);
//
module.exports = router;
