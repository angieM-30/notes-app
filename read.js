const fs = require ('fs');
const { setFlagsFromString } = require('v8');
const read = function (){
    return fs.readFileSync('./Tasks.txt',{encoding:'utf8', flag:'r'})

}