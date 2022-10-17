const fs = require("fs");
const update = function (note, oldNote) {
  const updateNote = JSON.parse(oldNote);

  const newNote = updateNote.map(function (n, id) {
    if ((n.id = oldNote.id)) {
      n.title = note.title;
      n.body = note.body;
      return n;
    }
  });
  fs.writeFileSync("Note.txt", JSON.stringify(newNote));
};
module.exports = update