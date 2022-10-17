const fs = require('fs')

const add = function(note, oldNote) {

let newNote = JSON.parse(oldNote);

newNote.push(note);
  // console.log(newNote);

  fs.writeFileSync('./Note.txt', JSON.stringify(newNote));
}

module.exports = add
