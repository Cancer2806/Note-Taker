// Define required modules
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { v4 } = require('uuid');

const { readDataFile, addContent, removeContent } = require('../helpers/fsUtils');

// Specify location of the data file that holds the notes
const pathDb = path.join(__dirname, '..', 'db', 'db.json');


// GET route for getting existing notes
router.get('/api/notes', (req, res) => {
  res.json(readDataFile(pathDb))
});


// POST route for writing a new note
router.post('/api/notes', (req, res) => {
  // Retrieve note title and text from req.body
  const {title, text} = req.body;

  // Create new note with unique ID generated using uuid
  const newNote = {
    id: v4(),
    title: title,
    text: text,
  }
  // Save the new note to the top of the list
  addContent(newNote, pathDb);
  // Return the data file with the new note added
  res.json(readDataFile(pathDb))
});


// DELETE route for removing a note
router.delete('/api/notes/:id', (req, res) => {
  // retrieve specified note id
  const delId = req.params.id;
  // remove the specified note
  removeContent(delId, pathDb);
  // Return the data file with the note removed
  res.json(readDataFile(pathDb))
});

// export module
module.exports = router;