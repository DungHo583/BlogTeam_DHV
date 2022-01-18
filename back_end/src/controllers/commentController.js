const COMMENT = require("../models/comment");

const commentController = {
    // danh sách comment 
    getComment: async (req, res) => {
        try {
            const data = await COMMENT.find().sort({ created_at: -1 });
            if (!data) {
                return res.json({
                    success: false,
                    message: "Không có data của comment",
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
  //tạo comment
    createComment: async (req, res) => {
        try {
            const { name_account, email_address, thumbnail, description, created_at } =
                req.body;

            const newComment = await COMMENT.create({
                name_account,
                email_address,
                thumbnail,
                description,
                created_at,
            });
            return res.json({
                success: true,
                message: "Bình luận đã được đăng!",
                data: newComment,
            });
        } catch (error) {
            return res.json({
                success: false,
                message: "Bình luận thất bại !",
            })
        }

    },

// update comment
    updateComment: async (req, res) => {
    try {
      const { name_account, email_address, thumbnail, description, created_at } =
        req.body;

      const idComment = req.params.id;

      const data = await COMMENT.findByIdAndUpdate(idComment, {
        $set: { name_account, email_address, thumbnail, description, created_at },
      });

      return res.json({
        success: true,
        message: "Cập nhật bình luận thành công !",
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật bình luận thất bại !",
      });
    }
  },
  // xoá comment
  deleteComment: async (req, res) => {
    try {
      const idComment = req.params.id;

      await COMMENT.findByIdAndDelete(idComment);

      return res.json({
        success: true,
        message: "Xoá bình luận thành công !",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Xoá bình luận thất bại !",
      });
    }
  },   
}
module.exports = commentController;