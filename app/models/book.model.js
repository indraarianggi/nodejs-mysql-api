const db = require("./db.js");

// constructor
const Book = function(book) {
  this.title = book.title;
  this.author = book.author;
  this.published = book.published;
};

// create new book
Book.create = (newBook, result) => {
  db.query("INSERT INTO books SET ?", newBook, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created book: ", { id: res.insertId, ...newBook });
    result(null, { id: res.insertId, ...newBook });
  });
};

// get book with specific id
Book.findById = (bookId, result) => {
  db.query(`SELECT * FROM books WHERE id = ${bookId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found book: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found book with id
    result({ kind: "not_found" }, null);
  });
};

// get all books
Book.getAll = result => {
  db.query("SELECT * FROM books", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("books: ", res);
    result(null, res);
  });
};

// update book with specific id
Book.updateById = (id, book, result) => {
  db.query(
    "UPDATE books SET title = ?, author = ?, published = ? WHERE id = ?",
    [book.title, book.author, book.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found book with id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated book: ", { id: id, ...book });
      result(null, { id: id, ...book });
    }
  );
};

// remove book with specific id
Book.remove = (id, result) => {
  db.query("DELETE FROM books WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found book with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted book with id: ", id);
    result(null, res);
  });
};

// remove all books
Book.removeAll = result => {
  db.query("DELETE FROM books", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} books`);
    result(null, res);
  });
};

module.exports = Book;
