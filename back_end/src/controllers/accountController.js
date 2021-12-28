const ACCOUNT = require("../models/account");

const accountController = {
  getSignIn: async (req, res) => {
    try {
      const { fullname, email, password, created_at } = req.body;

      const newAccount = new ACCOUNT({
        fullname,
        email,
        password,
        created_at,
      });
      await newAccount.save();

      return res.json({
        success: true,
        message: "Đăng ký thành công",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },
};

module.exports = accountController;
