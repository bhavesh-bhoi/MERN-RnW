const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

// Database Connection
mongoose
  .connect(
    "mongodb+srv://bookStoreDetails:BookStoreDetails@bookstore.rxoujtj.mongodb.net/?appName=BookStore",
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

// View Engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Static Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const bookRoutes = require("./routes/bookRoutes");

app.use(bookRoutes);

// Port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
