const Book = require("../models/book.model.js");

// Create and save a new Book
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Book
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    published: req.body.published
  });

  // Save Book in the database
  Book.create(newBook, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    } else {
      res.send(data);
    }
  });
};

// Retrieve all Books from the database
exports.findAll = (req, res) => {
  Book.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    } else {
      res.send(data);
    }
  });
};

// Find a single Book with a bookId
exports.findById = (req, res) => {
  Book.findById(req.params.bookId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Book with id ${req.params.bookId}.`
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Book with id ${req.params.bookId}`
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Update a Book identified by the bookId in the request
exports.update = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Book.updateById(req.params.bookId, new Book(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Book with id ${req.params.bookId}`
        });
      } else {
        res.status(500).send({
          message: `Error updating Book with id ${req.params.bookId}`
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Delete a Book identified by the bookId in the request
exports.delete = (req, res) => {
  Book.remove(req.params.bookId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Book with id ${req.params.bookId}.`
        });
      } else {
        res.status(500).send({
          message: `Could not delete Book with id ${req.params.bookId}`
        });
      }
    } else {
      res.send({ message: "Book was deleted successfully!" });
    }
  });
};

// Delete all Books from database
exports.deleteAll = (req, res) => {
  Book.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all books."
      });
    } else {
      res.send({ message: "All Books were deleted successfully!" });
    }
  });
};
