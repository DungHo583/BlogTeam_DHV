const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const auth = require("../middleware/auth");

// api đăng ký
router.post("/sign-in", accountController.getSignIn);
// api đăng nhập
router.post("/sign-up", accountController.getSignUp);
// api danh sách tài khoản
router.get("/list-user", auth, accountController.getAccounts);

module.exports = router;
