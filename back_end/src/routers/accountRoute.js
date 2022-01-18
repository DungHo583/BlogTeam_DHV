const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const auth = require("../middleware/auth");

// api đăng ký
router.post("/sign-up", accountController.getSignIn);
// api đăng nhập
router.post("/sign-in", accountController.getSignUp);
// api danh sách tài khoản
router.get("/list-user", accountController.getAccounts);
// api get token
router.post("/check-user", accountController.getToken);
// cập nhật tác giả
router.post("/account/update/:id", accountController.updateAccount);

router.get("/get-account/:id", accountController.getOneAccount);

// xoá tác giả
router.delete("/account/delete/:id", accountController.deleteAccount);
module.exports = router;
