// Define required modules
const express = require('express');
const path = require("path");
// Define router service
const router = express.Router();

// Specify paths for the web pages
const pathIndex = path.join(__dirname, '..', "public", "index.html");
const pathNotes = path.join(__dirname, '..', "public", "notes.html");


// GET route for the root path
router.get("/", (req, res) => {
  res.sendFile(pathIndex);
});

// GET route for the note entry page
router.get("/notes", (req, res) => {
  res.sendFile(pathNotes);
});

// GET route for wildcard entries
router.get("*", (req, res) => {
  res.sendFile(pathIndex);
});

// Export required modules
module.exports = router;