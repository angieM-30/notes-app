const fs = require ('fs');
const write = function (data="Nothing"){
fs.writeFileSync('Task.txt',data);


}
module.exports = write