//
const add = require('./add')
const read = require('./read')
const del = require('./del')
const update = require('./update');
// get user input
const cmd = process.argv;

if (cmd[2] == 'add') {
  //Build Object
const note = {
    "id": cmd[3],
    "title": cmd[4],
    "body": cmd[5]
  }
  // Get note.txt content
  const oldNote = read()

 // Add this newNote to Note.txt
  add(note, oldNote);
   console.log(add)

}

// Read Notes.txt
if (cmd[2] == 'read') // read
{
  console.log(read());
}

if (cmd[2] == "delete") {
  const id = cmd[3];
  const oldNote = read()
  const del = require('./del')
  del(id, oldNote)
  console.log(del)
}

const note = {}
if (cmd[2] == 'update') {
  let note = {
    id: cmd [3],
    title: cmd [4],
    body: cmd [5]
  }

const oldNote = read ()
update(note, oldNote)
console.log (update)

}
