const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const { v4 } = require('uuid');
const { readDataFile, addContent } = require('../helpers/fsUtils');

const pathDb = path.join(__dirname, '..', 'db', 'db.json');



function getNotes(){
  return JSON.parse(fs.readFileSync(pathDb, 'utf8'));
}

function saveNotesToDb(notes){

  fs.writeFileSync(pathDb
  , JSON.stringify(notes), 'utf8');
}



router.get('/api/notes', (req, res) => {
  

  // res.json(getNotes())
  res.json(readDataFile(pathDb))


});


router.post('/api/notes', (req, res) => {

  // create a new note
  console.log(req.body);

  // read the req body for the note title & text
  // const title = req.body.title;
  // const text = req.body.text;
  const {title, text} = req.body;


  // generate an ID to the new note
  const newNote = {
    id: v4(),
    // title: title,
    title,  // same as above
    text: text,
  }

  // save the new note to the ene of the existing note array
  addContent(newNote, pathDb);
  res.json(readDataFile(pathDb))
  // const notes = getNotes();

  // notes.push(newNote);

  // saveNotesToDb(notes);

  // res.json({
  //   data: 'ok',
  // })



});

router.delete('/api/notes/:id', (req, res) => {

  // get all the notes
  const notes = getNotes();


  // filter out the target note
  const result = notes.filter((note) => {
    return note.id !== req.params.id
  });

  // resave to db
  saveNotesToDb(result);

  res.json({
    data: 'ok',
  })

})






module.exports = router;