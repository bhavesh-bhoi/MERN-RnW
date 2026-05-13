const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const User = require("../models/User");

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Home Page - Read Data
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index", { users });
});

// Add Form
router.get("/add", (req, res) => {
  res.render("add");
});

// Create Data
router.post("/add", upload.single("image"), async (req, res) => {
  const { name, email, contact } = req.body;

  await User.create({
    name,
    email,
    contact,
    image: req.file ? req.file.filename : "",
  });

  res.redirect("/");
});

// Edit Form
router.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("edit", { user });
});

// Update Data
router.put("/edit/:id", upload.single("image"), async (req, res) => {
  const { name, email, contact } = req.body;

  let updateData = {
    name,
    email,
    contact,
  };

  if (req.file) {
    updateData.image = req.file.filename;
  }

  await User.findByIdAndUpdate(req.params.id, updateData);

  res.redirect("/");
});

// Delete Data
router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
