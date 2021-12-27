const ACCOUNT = require("../models/account");

const accountController = {
  getSignIn: async (req, res) => {
    try {
      const data = req.body;

      //   const data = await ACCOUNT.find();
      if (!data) {
        return res.json({
          success: false,
          message: "Không có data của account",
        });
      } else {
        return res.json({
          success: true,
          data: data,
        });
      }
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },
};

module.exports = accountController;
