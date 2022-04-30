// Required modules
const express = require('express');
const path = require('path');

const router = express.Router();


//Specify paths
const pathIndex = path.join(__dirname, '..','public', 'index.html');
const pathNotes = path.join(__dirname, '..','public', 'notes.html');


// Define routes
router.get('/', (req, res) => {
  res.sendFile(pathIndex);
})

router.get('/notes', (req, res) => {
  res.sendFile(pathNotes);
})

router.get('*', (req, res) => {
  res.sendFile(pathIndex);
})


// module export
module.exports = router;