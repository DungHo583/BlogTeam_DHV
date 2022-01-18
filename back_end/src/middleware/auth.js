const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  // xác nhận xem đã đăng nhập chưa. nếu đăng nhập rồi thì mới xem đc
  const header = req.header("Authorization");

  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(403).send("Xác nhận tài khoản thất bại !");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);

    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Token không hợp lệ !");
  }
  return next();
};

module.exports = verifyToken;
