module.exports = app => {
  const books = require("../controllers/book.controller.js");

  // Create a new Book
  app.post("/books", books.create);

  // Retrieve all Books
  app.get("/books", books.findAll);

  // Retrieve a single Book with bookId
  app.get("/books/:bookId", books.findById);

  // Update a Book with bookId
  app.put("/books/:bookId", books.update);

  // Delete a Book with bookId
  app.delete("/books/:bookId", books.delete);

  // Delete all Books
  app.delete("/books", books.deleteAll);
};
