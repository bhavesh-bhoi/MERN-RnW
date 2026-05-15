const mongoose = require("mongoose");

// Book Schema
const bookSchema = new mongoose.Schema({
  bookname: String,
  author: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Book", bookSchema);
