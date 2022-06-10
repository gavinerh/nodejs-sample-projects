const fs = require("fs");

const notes = "this is my notes";

const getNotes = function(){
    const content = fs.readFileSync("note.txt");
    return content;
}

// console.log(getNotes())

module.exports = getNotes;