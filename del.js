const fs = require('fs')

const del = function(id, oldNote){
    const note = JSON.parse(oldNote)
        const newNote = note.filter(function(n,i)
        {
            return n.id !== id
        })
    
    fs.writeSync('Tasks.txt',JSON.stringify(newNote))
    }
module.exports = del
 

