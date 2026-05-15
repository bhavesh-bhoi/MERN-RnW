// Import Router
const router = require("express").Router();

// Import Book Model
const Book = require("../models/Book");

// Import Multer & Path
const multer = require("multer");
const path = require("path");

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Home Route
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("index", { books });
});

// Add Book Route
router.get("/add", (req, res) => {
  res.render("add");
});
router.post("/add", upload.single("image"), async (req, res) => {
  const newBook = new Book({
    bookname: req.body.bookname,
    author: req.body.author,
    price: req.body.price,
    image: req.file ? req.file.filename : "",
  });

  await newBook.save();

  res.redirect("/");
});

// Edit Book Route
router.get("/edit/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("edit", { book });
});

// Update Book Route
router.put("/edit/:id", upload.single("image"), async (req, res) => {
  const updatedBook = {
    bookname: req.body.bookname,
    author: req.body.author,
    price: req.body.price,
  };

  if (req.file) {
    updatedBook.image = req.file.filename;
  }

  await Book.findByIdAndUpdate(req.params.id, updatedBook);

  res.redirect("/");
});

// Delete Book Route
router.delete("/delete/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);

  res.redirect("/");
});

// Export Router
module.exports = router;
