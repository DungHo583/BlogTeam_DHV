const ACCOUNT = require("../models/account");
const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");

const accountController = {
  // đăng ký
  getSignIn: async (req, res) => {
    try {
      const { thumbnail, fullname, email, password, created_at } = req.body;

      const oldAcc = await ACCOUNT.findOne({ email: email });

      if (oldAcc) {
        return res.json({
          success: false,
          message: "Email này đã được sử dụng !",
        });
      }

      const hashedPassword = passwordHash.generate(password);

      const newAccount = await ACCOUNT.create({
        thumbnail,
        fullname,
        email: email.toLowerCase(),
        password: hashedPassword,
        created_at,
      });

      // Create token
      const token = jwt.sign(
        { user_id: newAccount._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "6h",
        }
      );
      // Save user token
      newAccount.token = token;
      // res.cookie("auth", token);

      return res.json({
        success: true,
        message: "Đăng ký thành công !",
        data: newAccount,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Đăng ký thất bại !",
      });
    }
  },
  // đăng nhập
  getSignUp: async (req, res) => {
    try {
      const { email, password } = req.body;

      const account = await ACCOUNT.findOne({ email });

      const hashedPassword = account.password;

      if (account && passwordHash.verify(password, hashedPassword)) {
        // Create token
        const token = jwt.sign(
          { user_id: account._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "6h",
          }
        );

        // save user token
        account.token = token;

        return res.json({
          success: true,
          message: "Đăng nhập thành công !",
          data: account,
        });
      }
    } catch (error) {
      return res.json({
        success: false,
        message: "Đăng nhập thất bại !",
      });
    }
  },
  // danh sách tài khoản
  getAccounts: async (req, res) => {
    try {
      const account = await ACCOUNT.find({});

      return res.json({
        success: true,
        message: "Danh sách tài khoản",
        data: account,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },

  getUser: async (req, res) => {},

  getToken: async (req, res) => {
    try {
      const { user_id } = req.body;

      if (
        user_id == "underfied" ||
        user_id == "null" ||
        user_id == "undefined"
        || user_id == ""
      ) {
        return res.json({
          success: false,
          message: "Tài khoản này không được cấp quyền truy cập !",
        });
      }

      const account = await ACCOUNT.findOne({ user_id });

      if (account) {
        return res.json({
          success: true,
          message: "Đăng nhập thành công !",
          data: account,
        });
      }
    } catch (error) {
      return res.json({
        success: false,
        message: "Đăng nhập thất bại !",
      });
    }
  },
  //get 1 tài khoản
  getOneAccount: async (req, res) => {
    try {
      const idAccount = req.params.id;

      const data = await ACCOUNT.findById(idAccount);

      return res.json({
        success: true,
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },
  // update tài khoản
  updateAccount: async (req, res) => {
    try {
      const { thumbnail, fullname, email, password, created_at } = req.body;

      const idAccount = req.params.id;

      const data = await ACCOUNT.findByIdAndUpdate(idAccount, {
        $set: { thumbnail, fullname, email, password, created_at },
      });

      return res.json({
        success: true,
        message: "Cập nhật tài khoản thành công !",
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật thất bại !",
      });
    }
  },

  // xoá tài khoản
  deleteAccount: async (req, res) => {
    try {
      const idAccount = req.params.id;

      await ACCOUNT.findByIdAndDelete(idAccount);

      return res.json({
        success: true,
        message: "Xoá tài khoản thành công !",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Xoá tài khoản thất bại !",
      });
    }
  },
};

module.exports = accountController;
