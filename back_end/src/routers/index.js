const express = require("express");
const router = express.Router();
const cateRoute = require("./categoriesRoute");
const authorRoute = require("./authorRoute");
const accountRoute = require("./accountRoute");
const postRoute = require("./postRoute");

// api category
router.use("/api", cateRoute);

// api sign in account
router.use("/api", accountRoute);

// api post
router.use("/api", postRoute);

// api author
router.use("/api", authorRoute);
//
module.exports = router;
