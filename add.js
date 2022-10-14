const fs = require("fs");
const { title } = require("process");

const add = function (note = []) {
  fs.writeFileSync("./Tasks.txt", JSON.stringify(note));
};

module.exports = add;
