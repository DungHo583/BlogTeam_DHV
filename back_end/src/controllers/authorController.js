const AUTHOR = require("../models/author");

const authorController = {
  getAuthor: async (req, res) => {
    try {
      const data = await AUTHOR.find();
      if (!data) {
        return res.json({
          success: false,
          message: "Không có tác giả",
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
  createAuthor: async (req, res) => {
    // Validate request
    if (!req.body.description) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a author
    const author = new Author({
      name_author: req.body.name_author,
      description: req.body.description,
      create_time: req.body.create_time,
      email_author: req.body.email_author ? req.body.email_author : false,
    });

    // Save author in the database
    AUTHOR.save(AUTHOR)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the author.",
        });
      });
  },
  updateAuthor: async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const id = req.params.id;

    AUTHOR.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Author with id=${id}. Maybe Author was not found!`,
          });
        } else res.send({ message: "Author was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Author with id=" + id,
        });
      });
  },
  deleteAuthor: async (req, res) => {
    const id = req.params.id;

    AUTHOR.findByIdAndRemove(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Author with id=${id}. Maybe Author was not found!`,
          });
        } else {
          res.send({
            message: "Author was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Author with id=" + id,
        });
      });
  },
};

module.exports = authorController;
