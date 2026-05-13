const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
require("dotenv").config();

const app = express();

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://RnwBackend:rnwbackend@user.pccm6gj.mongodb.net/?appName=User",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.set("view engine", "ejs");

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
