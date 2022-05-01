const express = require('express');
const path = require("path");

const router = express.Router();

const pathIndex = path.join(__dirname, '..', "public", "index.html");
const pathNotes = path.join(__dirname, '..', "public", "notes.html");

router.get("/", (req, res) => {
  

  res.sendFile(pathIndex);
});

router.get("/notes", (req, res) => {
  

  res.sendFile(pathNotes);
});

router.get("*", (req, res) => {


  res.sendFile(pathIndex);
});


module.exports = router;