const express = require("express");
const app = express();
app.use(express.json());

app.use(express.json());

const PORT = 3000;

let books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    available: true
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    available: true
  }
];

// Home route
app.get("/", (req, res) => {
  res.send("Library API is running");
});

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET single book by id
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

// POST add new book
app.post("/books", (req, res) => {
  const { title, author, genre, available } = req.body;

  if (!title || !author || !genre) {
    return res.status(400).json({
      message: "Title, author and genre are required"
    });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    available: available !== undefined ? available : true
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    book: newBook
  });
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author, genre, available } = req.body;

  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  if (genre !== undefined) book.genre = genre;
  if (available !== undefined) book.available = available;

  res.json({
    message: "Book updated successfully",
    book
  });
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = books.splice(index, 1);

  res.json({
    message: "Book deleted successfully",
    book: deletedBook[0]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});